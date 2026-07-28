import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface StatCounterProps {
  value: number;
  suffix?: string;
  className?: string;
}

/** Counts up to `value` once it scrolls into view. Static for reduced-motion users. */
export default function StatCounter({ value, suffix = "", className = "" }: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const prefersReducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(prefersReducedMotion ? value : 0);

  useEffect(() => {
    if (!inView || prefersReducedMotion) {
      if (prefersReducedMotion) setDisplay(value);
      return;
    }
    const duration = 900;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, prefersReducedMotion]);

  return (
    <motion.span ref={ref} className={`tabular-nums ${className}`}>
      {display}
      {suffix}
    </motion.span>
  );
}
