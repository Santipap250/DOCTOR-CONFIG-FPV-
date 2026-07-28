/**
 * Inline logomark: a quad-frame hex with a crosshair, echoing both
 * "drone frame" and "targeting reticle" — reads at 20px in the nav
 * and scales cleanly, with zero network dependency (the previous
 * /manus-storage/logo_*.png reference is not portable across deploys).
 */
export default function Logo({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M16 2 L28 9 V23 L16 30 L4 23 V9 Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        className="text-accent-green"
      />
      <circle cx="16" cy="16" r="5.5" stroke="currentColor" strokeWidth="1.4" className="text-accent-green" />
      <circle cx="16" cy="16" r="1.6" fill="currentColor" className="text-accent-green" />
      <path d="M16 8V11.5M16 20.5V24M8 16H11.5M20.5 16H24" stroke="currentColor" strokeWidth="1.4" className="text-accent-green/70" />
    </svg>
  );
}
