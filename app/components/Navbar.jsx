"use client";
import { useScrollCtx } from "./ScrollContext";

export default function Navbar() {
  const { scrollLeft, scrollRight, atStart, atEnd } = useScrollCtx();

  return (
    <div className="navbar">
  <h2 className="nav-name">Isaac Raja</h2>

  <div className="nav-actions">
    <a className="icon-btn" href="https://www.linkedin.com/in/YOUR_LINKEDIN" target="_blank">
      <i className="fa-brands fa-linkedin"></i>
    </a>

    <a className="icon-btn" href="mailto:yourmail@example.com">
      <i className="fa-solid fa-envelope"></i>
    </a>

    <button className="icon-btn arrow" onClick={scrollLeft} disabled={atStart}>⬅</button>
    <button className="icon-btn arrow" onClick={scrollRight} disabled={atEnd}>➡</button>
  </div>
</div>

  );
}
