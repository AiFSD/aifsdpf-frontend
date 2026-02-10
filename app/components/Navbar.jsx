"use client";
import { useScrollCtx } from "./ScrollContext";

export default function Navbar() {
  const { scrollLeft, scrollRight, atStart, atEnd } = useScrollCtx();

  return (
    <div className="navbar">
      <h2>Isaac Raja</h2>

      <div className="arrows">
        <button onClick={scrollLeft} disabled={atStart}>
          ⬅
        </button>
        <button onClick={scrollRight} disabled={atEnd}>
          ➡
        </button>
      </div>
    </div>
  );
}
