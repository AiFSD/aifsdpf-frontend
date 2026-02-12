"use client";

import { useScrollCtx } from "./ScrollContext";

export default function ArrowControls() {
  const { scrollLeft, scrollRight, atStart, atEnd } = useScrollCtx();

  return (
    <div className="bottom-controls">
      <button
        className="arrow-btn"
        onClick={scrollLeft}
        disabled={atStart}
        aria-label="Scroll left"
      >
        ⬅
      </button>

      <button
        className="arrow-btn"
        onClick={scrollRight}
        disabled={atEnd}
        aria-label="Scroll right"
      >
        ➡
      </button>
    </div>
  );
}
