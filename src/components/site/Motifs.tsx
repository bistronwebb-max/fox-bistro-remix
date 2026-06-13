/**
 * Decorative SVG motifs — subtle background watermarks.
 * Foxes for the bistro, pizza slices for Molkom, plates/cutlery/glasses
 * as the shared "bindväv" between both venues.
 *
 * All motifs render via currentColor so they inherit text color and can be
 * dimmed with Tailwind opacity utilities (e.g. `text-primary/[0.05]`).
 */

type MotifProps = { className?: string };

export function FoxMark({ className }: MotifProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      {/* stylised fox head silhouette */}
      <path d="M32 6 L20 18 L8 14 L14 30 C12 36 14 44 22 50 C26 53 28 56 32 58 C36 56 38 53 42 50 C50 44 52 36 50 30 L56 14 L44 18 Z" />
      <circle cx="25" cy="32" r="2" fill="#fff" opacity="0.6" />
      <circle cx="39" cy="32" r="2" fill="#fff" opacity="0.6" />
    </svg>
  );
}

export function PizzaMark({ className }: MotifProps) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={className} fill="currentColor">
      <path d="M32 4 L60 56 H4 Z" />
      <circle cx="32" cy="34" r="3" fill="#fff" opacity="0.6" />
      <circle cx="24" cy="44" r="2.5" fill="#fff" opacity="0.6" />
      <circle cx="40" cy="44" r="2.5" fill="#fff" opacity="0.6" />
      <circle cx="32" cy="22" r="2" fill="#fff" opacity="0.6" />
    </svg>
  );
}

export function CutleryMark({ className }: MotifProps) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      {/* fork */}
      <path d="M20 6 v18 a4 4 0 0 0 4 4 v30" strokeLinecap="round" />
      <path d="M16 6 v14 M24 6 v14 M28 6 v14" strokeLinecap="round" />
      {/* knife */}
      <path d="M44 6 c6 6 6 18 0 26 v26" strokeLinecap="round" />
    </svg>
  );
}

export function WineGlassMark({ className }: MotifProps) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 6 h24 c0 16 -6 24 -12 26 v22 M32 54 h-8 M32 54 h8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Tiled watermark layer — drop into a `relative` section as the first child
 * to set the mood without overpowering the foreground content.
 */
export function MotifBackdrop({
  variant,
  className = "",
}: {
  variant: "fox" | "pizza" | "shared";
  className?: string;
}) {
  const Mark = variant === "fox" ? FoxMark : variant === "pizza" ? PizzaMark : CutleryMark;
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <Mark className="absolute -left-6 top-10 h-24 w-24 text-primary/[0.06]" />
      <Mark className="absolute right-8 top-1/3 h-32 w-32 text-foreground/[0.04] rotate-12" />
      <Mark className="absolute left-1/3 bottom-8 h-20 w-20 text-primary/[0.05] -rotate-6" />
      {variant === "shared" && (
        <WineGlassMark className="absolute right-1/4 bottom-16 h-28 w-28 text-foreground/[0.04]" />
      )}
    </div>
  );
}
