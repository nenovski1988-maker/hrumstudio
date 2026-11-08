"use client";

import { useEffect } from "react";
import { animate, stagger } from "animejs";

// Кои блокове да се появяват при скрол.
// children = анимира децата един след друг (stagger) вместо целия блок.
// noScale  = без мащабиране (за карусела — scale пречи на scroll-snap и
//            картите подскачат в края на анимацията)
const GROUPS = [
  { selector: ".work-head" },
  { selector: ".carousel-controls" },
  { selector: ".carousel-track", children: ".carousel-slide", noScale: true },
  { selector: ".product-features", children: ".product-feature" },
  { selector: ".capabilities-cta" },
  { selector: ".ai-note-portrait" },
  { selector: ".ai-note-content" },
  { selector: ".contact-inner" },
];

// ===== Настройки — пипай тук =====
const OFFSET = 80;         // от колко пиксела под мястото си изплува
const START_SCALE = 0.96;  // от какъв мащаб започва (1 = без мащабиране)
const DURATION = 1100;     // продължителност в милисекунди
const STAGGER = 160;       // закъснение между последователни елементи (ms)
const EASE = "outQuart";   // плавност на движението
const TRIGGER = "-20%";    // колко над долния ръб на екрана да тръгне
// =================================

export default function ScrollReveal() {
  useEffect(() => {
    // Уважаваме настройката за намалено движение
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    // блок -> { targets, useScale }
    const pending = new Map();

    GROUPS.forEach(({ selector, children, noScale }) => {
      document.querySelectorAll(selector).forEach((el) => {
        // Ако блокът вече е на екрана при зареждане — не го пипаме
        if (el.getBoundingClientRect().top < window.innerHeight) return;

        const targets = children
          ? Array.from(el.querySelectorAll(children))
          : [el];
        if (!targets.length) return;

        const useScale = !noScale;

        targets.forEach((t) => {
          t.style.opacity = "0";
          t.style.transform = useScale
            ? `translateY(${OFFSET}px) scale(${START_SCALE})`
            : `translateY(${OFFSET}px)`;
        });

        pending.set(el, { targets, useScale });
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const group = pending.get(entry.target);
          observer.unobserve(entry.target);
          pending.delete(entry.target);
          if (!group) return;

          const params = {
            opacity: [0, 1],
            translateY: [OFFSET, 0],
            duration: DURATION,
            delay: stagger(STAGGER),
            ease: EASE,
          };
          if (group.useScale) params.scale = [START_SCALE, 1];

          animate(group.targets, params);
        });
      },
      { rootMargin: `0px 0px ${TRIGGER} 0px` }
    );

    pending.forEach((_, el) => observer.observe(el));

    return () => {
      observer.disconnect();
      // връщаме всичко видимо, ако компонентът се демонтира
      pending.forEach(({ targets }) =>
        targets.forEach((t) => {
          t.style.opacity = "";
          t.style.transform = "";
        })
      );
    };
  }, []);

  return null;
}