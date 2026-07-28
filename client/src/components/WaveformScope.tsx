import { useEffect, useRef } from "react";

/**
 * WaveformScope — a live-drawn oscilloscope trace styled after a PID
 * step-response curve (the exact chart a Betaflight tuner watches).
 * This is the hero's signature visual: it doubles as ambient motion
 * and as a literal, on-brand piece of "instrument" UI rather than a
 * decorative blob or stock photo.
 */
export default function WaveformScope({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // Step response: fast rise, slight overshoot, settle — the shape a
    // well-tuned PID loop produces, drawn as three stacked traces
    // (P / I / D-flavored) at different phase offsets.
    const settle = (x: number, k: number) => {
      // damped oscillation approaching 1
      return 1 - Math.exp(-k * x) * Math.cos(x * 6);
    };

    let raf = 0;
    let t = 0;

    const traces = [
      { color: "rgba(84, 255, 160, 0.85)", k: 3.2, amp: 0.30, yBase: 0.32, speed: 0.35 },
      { color: "rgba(120, 210, 255, 0.55)", k: 2.4, amp: 0.22, yBase: 0.58, speed: 0.28 },
      { color: "rgba(224, 168, 255, 0.35)", k: 1.8, amp: 0.16, yBase: 0.80, speed: 0.22 },
    ];

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      traces.forEach((trace) => {
        ctx.beginPath();
        const points = Math.floor(width);
        for (let px = 0; px <= points; px += 2) {
          const xNorm = px / width;
          // scrolling phase
          const phase = xNorm * 4 - (t * trace.speed);
          const raw = phase < 0 ? 0 : settle(Math.max(0, phase), trace.k);
          const y =
            height * trace.yBase - raw * height * trace.amp + height * trace.amp * 0.5;
          if (px === 0) ctx.moveTo(px, y);
          else ctx.lineTo(px, y);
        }
        ctx.strokeStyle = trace.color;
        ctx.lineWidth = 1.5;
        ctx.shadowColor = trace.color;
        ctx.shadowBlur = 6;
        ctx.stroke();
      });

      // baseline grid ticks
      ctx.shadowBlur = 0;
      ctx.strokeStyle = "rgba(84, 255, 160, 0.08)";
      ctx.lineWidth = 1;
      for (let gx = 0; gx < width; gx += width / 12) {
        ctx.beginPath();
        ctx.moveTo(gx, 0);
        ctx.lineTo(gx, height);
        ctx.stroke();
      }

      t += 0.016;
      raf = requestAnimationFrame(draw);
    };

    if (prefersReducedMotion) {
      // Draw a single static frame, no animation loop.
      draw();
      cancelAnimationFrame(raf);
    } else {
      raf = requestAnimationFrame(draw);
    }

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
