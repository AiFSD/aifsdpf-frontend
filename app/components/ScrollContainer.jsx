"use client";
import { useEffect } from "react";
import { useScrollCtx } from "./ScrollContext";

export default function ScrollContainer({ children }) {
  const { scrollRef, updateEdges } = useScrollCtx();

  useEffect(() => {
    updateEdges();
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => updateEdges();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateEdges);

    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateEdges);
    };
  }, [scrollRef, updateEdges]);

  return (
    <div ref={scrollRef} className="scroll-area">
      {children}
    </div>
    
  );
}
