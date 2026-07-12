/**
 * Looping marquee — speglar originalsidans snurrande textrad.
 * Renderar samma innehåll två gånger så animationen kan loopa sömlöst.
 */
export function Marquee({ phrases, tone = "dark" }: { phrases: string[]; tone?: "dark" | "red" }) {
  const isRed = tone === "red";
  return (
    <div
      className={
        isRed
          ? "overflow-hidden border-y border-black/10 bg-primary text-primary-foreground"
          : "overflow-hidden border-y border-white/10 bg-foreground text-background"
      }
    >
      <div className="marquee-track py-4">
        {[...phrases, ...phrases].map((p, i) => (
          <span
            key={i}
            className={
              "font-script text-3xl md:text-4xl inline-flex items-center gap-12 " +
              (isRed ? "text-primary-foreground" : "text-primary")
            }
          >
            {p}
            <span aria-hidden className={isRed ? "text-black/30 text-2xl" : "text-background/40 text-2xl"}>✶</span>
          </span>
        ))}
      </div>
    </div>
  );
}
