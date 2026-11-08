"use client";

import { useEffect } from "react";
import { animate, stagger } from "animejs";

// Кои блокове да се появяват при скрол.
// children = анимира децата един след друг (stagger) вместо целия блок.
const GROUPS = [
  { selector: ".work-head" },
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

    // блок -> елементи за анимиране
    const pending = new Map();

    GROUPS.forEach(({ selector, children }) => {
      document.querySelectorAll(selector).forEach((el) => {
        // Ако блокът вече е на екрана при зареждане — не го пипаме
        if (el.getBoundingClientRect().top < window.innerHeight) return;

        const targets = children
          ? Array.from(el.querySelectorAll(children))
          : [el];
        if (!targets.length) return;

        targets.forEach((t) => {
          t.style.opacity = "0";
          t.style.transform = `translateY(${OFFSET}px) scale(${START_SCALE})`;
        });

        pending.set(el, targets);
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const targets = pending.get(entry.target);
          observer.unobserve(entry.target);
          pending.delete(entry.target);
          if (!targets) return;

          animate(targets, {
            opacity: [0, 1],
            translateY: [OFFSET, 0],
            scale: [START_SCALE, 1],
            duration: DURATION,
            delay: stagger(STAGGER),
            ease: EASE,
          });
        });
      },
      { rootMargin: `0px 0px ${TRIGGER} 0px` }
    );

    pending.forEach((_, el) => observer.observe(el));

    return () => {
      observer.disconnect();
      // връщаме всичко видимо, ако компонентът се демонтира
      pending.forEach((targets) =>
        targets.forEach((t) => {
          t.style.opacity = "";
          t.style.transform = "";
        })
      );
    };
  }, []);

  return null;
}