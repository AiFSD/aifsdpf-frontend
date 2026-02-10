"use client";
import { createContext, useContext, useMemo, useRef, useState } from "react";

const ScrollCtx = createContext(null);

export function ScrollProvider({ children }) {
  const scrollRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEdges = () => {
    const el = scrollRef.current;
    if (!el) return;

    const start = el.scrollLeft <= 0;
    const end = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;

    setAtStart(start);
    setAtEnd(end);
  };

  const scrollByAmount = (amount) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: amount, behavior: "smooth" });
    // edges will update on scroll event
  };

  const value = useMemo(
    () => ({
      scrollRef,
      atStart,
      atEnd,
      updateEdges,
      scrollLeft: () => scrollByAmount(-420),
      scrollRight: () => scrollByAmount(420),
    }),
    [atStart, atEnd]
  );

  return <ScrollCtx.Provider value={value}>{children}</ScrollCtx.Provider>;
}

export function useScrollCtx() {
  const ctx = useContext(ScrollCtx);
  if (!ctx) throw new Error("useScrollCtx must be used inside <ScrollProvider />");
  return ctx;
}
