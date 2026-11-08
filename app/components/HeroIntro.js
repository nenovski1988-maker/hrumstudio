"use client";

import { useEffect, useRef } from "react";
import { createTimeline } from "animejs";

// ===== Настройки — пипай тук =====
const LOGO_SRC = "/logo.png";
const STORAGE_KEY = "hrum-intro-seen";
const GAP = 3;                     // разстояние между частиците (px); по-малко = повече частици
const MAX_PARTICLES = 5000;        // таван за десктоп
const MAX_PARTICLES_MOBILE = 2200; // таван за телефон
const SPREAD = 0.45;               // колко разпилени във времето тръгват частиците (0 = всички наведнъж)
const COLOR_STEPS = 8;             // плавност на преливането от цвета на логото към цвета на заглавието
const MAX_PREP_MS = 2500;          // ако подготовката продължи повече — пропускаме интрото

// Сценарий (ms) — общо ~4 s
const T_LOGO_IN = 1000; // логото изплува от черно със zoom
const T_HOLD = 600;     // пауза
const T_MORPH = 1800;   // разпад на прах и полет към заглавието
const T_FADE = 700;     // черното избледнява, частиците изчезват
// =================================

const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);
const easeInOutCubic = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
const smooth = (v, a, b) => {
  const t = clamp01((v - a) / (b - a));
  return t * t * (3 - 2 * t);
};

function parseRgb(str) {
  const m = str.match(/\d+(\.\d+)?/g);
  return m ? [Number(m[0]), Number(m[1]), Number(m[2])] : [240, 240, 235];
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

// Точки от логото — в координати на екрана
function sampleLogo(img, rect) {
  const w = Math.round(rect.w);
  const h = Math.round(rect.h);
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const ctx = c.getContext("2d", { willReadFrequently: true });
  ctx.drawImage(img, 0, 0, w, h);
  const data = ctx.getImageData(0, 0, w, h).data;

  const pts = [];
  for (let y = 0; y < h; y += GAP) {
    for (let x = 0; x < w; x += GAP) {
      const i = (y * w + x) * 4;
      if (data[i + 3] > 128) {
        pts.push({
          x: rect.x + x,
          y: rect.y + y,
          r: data[i],
          g: data[i + 1],
          b: data[i + 2],
        });
      }
    }
  }
  return pts;
}

// Точки от истинското заглавие (h1) — на точните му позиции на екрана
function sampleHeadline(h1) {
  const box = h1.getBoundingClientRect();
  const pad = 40;
  const ox = box.left - pad;
  const oy = box.top - pad;
  const w = Math.ceil(box.width + pad * 2);
  const h = Math.ceil(box.height + pad * 2);

  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const ctx = c.getContext("2d", { willReadFrequently: true });

  const cs = getComputedStyle(h1);
  ctx.font = `${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
  if ("letterSpacing" in ctx && cs.letterSpacing !== "normal") {
    ctx.letterSpacing = cs.letterSpacing;
  }
  ctx.fillStyle = "#fff";
  ctx.textBaseline = "alphabetic";
  const upper = cs.textTransform === "uppercase";

  // Рисуваме всяка дума точно там, където браузърът я е сложил
  const walker = document.createTreeWalker(h1, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    const text = node.textContent;
    const re = /\S+/g;
    let m;
    while ((m = re.exec(text))) {
      const range = document.createRange();
      range.setStart(node, m.index);
      range.setEnd(node, m.index + m[0].length);
      const r = range.getBoundingClientRect();
      if (!r.width) continue;

      const word = upper ? m[0].toUpperCase() : m[0];
      const mt = ctx.measureText(word);
      const asc = mt.fontBoundingBoxAscent ?? r.height * 0.8;
      const desc = mt.fontBoundingBoxDescent ?? r.height * 0.2;
      const baseline = r.top + (r.height - (asc + desc)) / 2 + asc;
      ctx.fillText(word, r.left - ox, baseline - oy);
    }
  }

  const data = ctx.getImageData(0, 0, w, h).data;
  const pts = [];
  for (let y = 0; y < h; y += GAP) {
    for (let x = 0; x < w; x += GAP) {
      if (data[(y * w + x) * 4 + 3] > 128) {
        pts.push({ x: ox + x, y: oy + y });
      }
    }
  }
  return { pts, color: parseRgb(cs.color) };
}

export default function HeroIntro() {
  const overlayRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const canvas = canvasRef.current;
    if (!overlay || !canvas) return;

    let cancelled = false;
    let finished = false;
    let tl = null;

    const events = ["wheel", "touchstart", "keydown", "pointerdown"];
    const onInput = () => finish();
    const addListeners = () =>
      events.forEach((e) =>
        window.addEventListener(e, onInput, { passive: true })
      );
    const removeListeners = () =>
      events.forEach((e) => window.removeEventListener(e, onInput));

    function finish() {
      if (finished) return;
      finished = true;
      if (tl) tl.pause();
      overlay.style.display = "none";
      removeListeners();
    }

    // --- Да пускаме ли изобщо интрото? ---
    let force = false;
    let seen = false;
    try {
      force = new URLSearchParams(window.location.search).has("intro");
      seen = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {}
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const h1 = document.querySelector(".hero h1");

    if ((!force && (seen || reduced)) || window.scrollY > 10 || !h1) {
      finish();
      return;
    }

    // JS поема — спираме аварийния CSS таймер
    overlay.style.animation = "none";
    addListeners();
    const prepStart = performance.now();

    (async () => {
      try {
        const [img] = await Promise.all([
          loadImage(LOGO_SRC),
          document.fonts ? document.fonts.ready : Promise.resolve(),
        ]);
        if (cancelled || finished) return;
        if (performance.now() - prepStart > MAX_PREP_MS) {
          finish();
          return;
        }

        // --- Платно ---
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = Math.round(vw * dpr);
        canvas.height = Math.round(vh * dpr);
        const ctx = canvas.getContext("2d");
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        // --- Позиция и размер на логото (центрирано) ---
        const mobile = vw < 768;
        const logoW = Math.min(vw * (mobile ? 0.8 : 0.5), 620);
        const logoH = logoW * (img.naturalHeight / img.naturalWidth);
        const logoRect = {
          x: (vw - logoW) / 2,
          y: (vh - logoH) / 2,
          w: logoW,
          h: logoH,
        };

        // --- Точки: откъде (логото) и накъде (заглавието) ---
        const src = sampleLogo(img, logoRect);
        const { pts: dst, color } = sampleHeadline(h1);
        if (!src.length || !dst.length) {
          finish();
          return;
        }
        const [tr, tg, tb] = color;

        // Ограничаваме броя частици (случайна извадка)
        const cap = mobile ? MAX_PARTICLES_MOBILE : MAX_PARTICLES;
        let targets = dst;
        if (targets.length > cap) {
          for (let i = targets.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [targets[i], targets[j]] = [targets[j], targets[i]];
          }
          targets = targets.slice(0, cap);
        }
        // при по-малко частици ги правим малко по-едри, за да "запълнят" буквите
        const size = Math.max(
          1.5,
          GAP * Math.sqrt(dst.length / targets.length) * 0.9
        );

        // Подреждаме по X — левите части на логото летят към левите букви
        src.sort((a, b) => a.x - b.x);
        targets.sort((a, b) => a.x - b.x);

        const n = targets.length;
        const minX = src[0].x;
        const spanX = Math.max(1, src[src.length - 1].x - minX);
        const particles = new Array(n);

        for (let i = 0; i < n; i++) {
          const s = src[Math.floor((i * src.length) / n)];
          const t = targets[i];
          const colors = [];
          for (let k = 0; k <= COLOR_STEPS; k++) {
            const f = k / COLOR_STEPS;
            colors.push(
              `rgb(${Math.round(s.r + (tr - s.r) * f)},${Math.round(
                s.g + (tg - s.g) * f
              )},${Math.round(s.b + (tb - s.b) * f)})`
            );
          }
          particles[i] = {
            sx: s.x,
            sy: s.y,
            tx: t.x,
            ty: t.y,
            // контролна точка — частиците летят по извита траектория
            cx: (s.x + t.x) / 2 + (Math.random() - 0.5) * 240,
            cy: (s.y + t.y) / 2 - 60 - Math.random() * 180,
            // кога тръгва: логото се разпада отляво надясно, с малко случайност
            d: clamp01(((s.x - minX) / spanX) * 0.7 + Math.random() * 0.3),
            colors,
          };
        }

        // --- Рисуване на един кадър ---
        const state = { logoAlpha: 0, logoScale: 0.92, morph: 0, bg: 1, dust: 1 };
        const half = size / 2;

        const draw = () => {
          ctx.clearRect(0, 0, vw, vh);
          overlay.style.backgroundColor = `rgba(0,0,0,${state.bg})`;

          // 1) Истинското лого (картинката) — докато не започне разпадът
          const logoA =
            state.logoAlpha * (1 - smooth(state.morph, 0.02, 0.12));
          if (logoA > 0.001) {
            const w = logoRect.w * state.logoScale;
            const h = logoRect.h * state.logoScale;
            ctx.globalAlpha = logoA;
            ctx.drawImage(img, vw / 2 - w / 2, vh / 2 - h / 2, w, h);
          }

          // 2) Частиците
          const dustA = smooth(state.morph, 0, 0.06) * state.dust;
          if (dustA > 0.001) {
            ctx.globalAlpha = dustA;
            let last = "";
            for (let i = 0; i < n; i++) {
              const p = particles[i];
              const local = clamp01(
                (state.morph - p.d * SPREAD) / (1 - SPREAD)
              );
              const e = easeInOutCubic(local);
              const inv = 1 - e;
              const x = inv * inv * p.sx + 2 * inv * e * p.cx + e * e * p.tx;
              const y = inv * inv * p.sy + 2 * inv * e * p.cy + e * e * p.ty;
              const style = p.colors[Math.round(e * COLOR_STEPS)];
              if (style !== last) {
                ctx.fillStyle = style;
                last = style;
              }
              ctx.fillRect(x - half, y - half, size, size);
            }
          }
          ctx.globalAlpha = 1;
        };

        try {
          sessionStorage.setItem(STORAGE_KEY, "1");
        } catch {}

        // --- Сценарият (anime.js Timeline) ---
        const tMorph = T_LOGO_IN + T_HOLD;
        const tEnd = tMorph + T_MORPH;

        tl = createTimeline({ onUpdate: draw, onComplete: finish });
        tl.add(
          state,
          { logoAlpha: [0, 1], logoScale: [0.92, 1], duration: T_LOGO_IN, ease: "outCubic" },
          0
        )
          .add(state, { morph: [0, 1], duration: T_MORPH, ease: "linear" }, tMorph)
          .add(state, { bg: [1, 0], duration: T_FADE, ease: "inOutQuad" }, tEnd - 200)
          .add(state, { dust: [1, 0], duration: T_FADE - 200, ease: "outQuad" }, tEnd);
      } catch (err) {
        console.error("HeroIntro:", err);
        finish();
      }
    })();

    return () => {
      cancelled = true;
      if (tl) tl.pause();
      removeListeners();
    };
  }, []);

  return (
    <div
      id="hero-intro"
      ref={overlayRef}
      aria-hidden="true"
      suppressHydrationWarning
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#000",
        animation: "hero-intro-failsafe 0.4s ease 6s forwards",
      }}
    >
      <style>{`@keyframes hero-intro-failsafe { to { opacity: 0; visibility: hidden; } }`}</style>
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      />
    </div>
  );
}