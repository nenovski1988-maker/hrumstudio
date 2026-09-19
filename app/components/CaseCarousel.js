"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";

function CaseItem({ item }) {
  const visualClass = `case-visual ${item.image ? "" : item.visual} ${
    item.pending ? "pending" : ""
  }`;

  const visualInner = (
    <>
      {item.image && (
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 900px) 100vw, 45vw"
          className="case-visual-image"
        />
      )}
      <span className="tag-corner">{item.status}</span>
    </>
  );

  return (
    <div className="case">
      {item.href ? (
        <a
          href={item.href}
          className={visualClass}
          {...(item.external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {visualInner}
        </a>
      ) : (
        <div className={visualClass}>{visualInner}</div>
      )}

      <div>
        <span className="case-index">{item.index}</span>

        <h3>{item.title}</h3>

        <p>{item.description}</p>

        <div className="case-tags">
          {item.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CaseCarousel({ items }) {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const dragState = useRef({ dragging: false, startX: 0, startScroll: 0 });

  const cardStep = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    const first = track.children[0];
    if (!first) return track.clientWidth;
    const style = getComputedStyle(track);
    const gap = parseFloat(style.columnGap || style.gap || "0");
    return first.getBoundingClientRect().width + gap;
  }, []);

  const scrollToIndex = useCallback(
    (index) => {
      const track = trackRef.current;
      if (!track) return;
      const clamped = Math.max(0, Math.min(items.length - 1, index));
      track.scrollTo({ left: clamped * cardStep(), behavior: "smooth" });
    },
    [items.length, cardStep]
  );

  const goPrev = () => scrollToIndex(activeIndex - 1);
  const goNext = () => scrollToIndex(activeIndex + 1);

  // keep the "0X — 0Y" counter in sync with whatever scroll position we're at
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const step = cardStep();
        if (step > 0) {
          setActiveIndex(Math.round(track.scrollLeft / step));
        }
        ticking = false;
      });
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [cardStep]);

  // vertical mouse-wheel over the carousel moves it horizontally instead of
  // scrolling the page — the "feels cool" bit
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onWheel = (e) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      e.preventDefault();
      track.scrollLeft += e.deltaY;
    };

    track.addEventListener("wheel", onWheel, { passive: false });
    return () => track.removeEventListener("wheel", onWheel);
  }, []);

  // click-and-drag scrolling with the mouse
  const onPointerDown = (e) => {
    const track = trackRef.current;
    if (!track) return;
    dragState.current = {
      dragging: true,
      startX: e.clientX,
      startScroll: track.scrollLeft,
    };
    track.classList.add("dragging");
  };

  const onPointerMove = (e) => {
    const track = trackRef.current;
    if (!track || !dragState.current.dragging) return;
    const dx = e.clientX - dragState.current.startX;
    track.scrollLeft = dragState.current.startScroll - dx;
  };

  const endDrag = () => {
    const track = trackRef.current;
    dragState.current.dragging = false;
    if (track) track.classList.remove("dragging");
  };

  return (
    <div className="carousel">
      <div className="carousel-controls">
        <span className="mono carousel-count">
          {String(activeIndex + 1).padStart(2, "0")} —{" "}
          {String(items.length).padStart(2, "0")}
        </span>

        <div className="carousel-arrows">
          <button
            type="button"
            className="carousel-arrow"
            onClick={goPrev}
            disabled={activeIndex === 0}
            aria-label="Previous"
          >
            ←
          </button>
          <button
            type="button"
            className="carousel-arrow"
            onClick={goNext}
            disabled={activeIndex === items.length - 1}
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>

      <div
        className="carousel-track"
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
      >
        {items.map((item) => (
          <div className="carousel-slide" key={item.index}>
            <CaseItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}