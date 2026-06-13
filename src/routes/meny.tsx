import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Link } from "@tanstack/react-router";
import scraped from "@/data/scraped.json";
import { useMemo } from "react";
import { RAVEN } from "@/lib/locations";

export const Route = createFileRoute("/meny")({
  head: () => ({
    meta: [
      { title: "Meny — Rävens Bistro" },
      { name: "description", content: "Hela menyn hos Rävens Bistro i Väse: inbakade pizzor, klassiska pizzor, kebab, pita, husmanskost, sallader, à la carte, hamburgare, barnmeny, desserter och drycker." },
      { property: "og:title", content: "Meny — Rävens Bistro" },
      { property: "og:description", content: "Pizza, à la carte, kebab, husman och mycket mer." },
      { property: "og:url", content: "/meny" },
    ],
    links: [{ rel: "canonical", href: "/meny" }],
  }),
  component: MenyPage,
});

type MenuItem = { name: string; desc?: string; price?: string };
type MenuSection = { title: string; note?: string; items: MenuItem[] };

/** Parser för den skrapade markdown-menyn. Hoppar över rubrik-länkarnas URL-skräp. */
function parseMenu(md: string): MenuSection[] {
  const lines = md.split(/\r?\n/);
  const sections: MenuSection[] = [];
  let current: MenuSection | null = null;
  let pendingItem: MenuItem | null = null;

  const flushItem = () => {
    if (pendingItem && current) current.items.push(pendingItem);
    pendingItem = null;
  };

  for (let raw of lines) {
    const line = raw.trim();
    if (!line) continue;

    // Sektion (## Titel)
    const sec = line.match(/^##\s+(.+)$/);
    if (sec && !line.startsWith("###")) {
      flushItem();
      current = { title: sec[1].trim(), items: [] };
      sections.push(current);
      continue;
    }
    // Item-namn (### [Namn](url) eller ### Namn)
    const item = line.match(/^###\s+(?:\[([^\]]+)\]\([^)]*\)|(.+))$/);
    if (item) {
      flushItem();
      pendingItem = { name: (item[1] || item[2] || "").trim() };
      continue;
    }
    // Pris (##### 125:-) — utan länk-namn ovanför är det en sektions-not
    const price = line.match(/^#####\s+(.+)$/);
    if (price) {
      const value = price[1].trim();
      if (pendingItem) {
        pendingItem.price = value;
        flushItem();
      } else if (current) {
        current.note = current.note ? `${current.note} · ${value}` : value;
      }
      continue;
    }
    // Familjepizza-priser och övriga noter på sektionsnivå
    const sectionNote = line.match(/^(Familjepizza|Extra allt|Vinglas|Tallrik|Tillagas).*/i);
    if (sectionNote && current && !pendingItem) {
      current.note = current.note ? `${current.note} · ${line}` : line;
      continue;
    }
    // Item-beskrivning
    if (pendingItem && !line.startsWith("#") && !line.startsWith("[") && !line.startsWith("!")) {
      pendingItem.desc = pendingItem.desc ? `${pendingItem.desc} ${line}` : line;
    }
  }
  flushItem();

  // Filtrera bort tomma sektioner och rubrik-skräp ("Härliga", "Snabbmeny" osv)
  return sections.filter((s) => s.items.length > 0);
}

function MenyPage() {
  const sections = useMemo(() => parseMenu(scraped.meny), []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main id="content" className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,var(--honey)_22%,transparent),transparent_60%)]" />
          <div className="relative mx-auto max-w-7xl px-4 pt-12 md:pt-20 pb-12">
            <p className="font-script text-5xl md:text-6xl text-primary leading-none">vår meny</p>
            <h1 className="mt-3 font-heading text-[clamp(3rem,7vw,5.5rem)] leading-[0.95] tracking-[-0.03em] text-balance">
              Allt vi serverar
              <br />
              <span className="italic text-primary">i bistron.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground">
              Pizza ur vedugnen, husman med själ, kebab från eget recept — och mer
              därtill. Allergier eller önskemål? Fråga oss alltid, vi har bland annat
              glutenfri surdeg som pizzabotten.
            </p>

            {/* Snabbnav */}
            <nav aria-label="Hoppa till sektion" className="mt-10 flex flex-wrap gap-2">
              {sections.map((s) => (
                <a key={s.title} href={`#${slugify(s.title)}`}
                  className="rounded-full border border-foreground/30 px-4 py-2 text-sm font-semibold hover:border-primary hover:text-primary transition">
                  {s.title}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* SEKTIONER */}
        <section className="mx-auto max-w-5xl px-4 py-16 space-y-20">
          {sections.map((s, i) => (
            <article key={s.title} id={slugify(s.title)} className="scroll-mt-24">
              <header className="flex items-end justify-between gap-6 mb-8">
                <div>
                  <p className="text-[0.7rem] uppercase tracking-[0.3em] font-semibold text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-2 font-heading text-3xl md:text-4xl tracking-[-0.02em]">{s.title}</h2>
                </div>
                {s.note && <p className="text-sm text-foreground/80 text-right max-w-xs">{s.note}</p>}
              </header>
              <ul className="divide-y divide-foreground/20 border-t border-foreground/20">
                {s.items.map((it) => (
                  <li key={it.name} className="grid grid-cols-[1fr_auto] gap-6 py-5 items-start">
                    <div>
                      <p className="font-heading text-xl tracking-[-0.01em]">{it.name}</p>
                      {it.desc && <p className="mt-1 text-base text-foreground/85 leading-relaxed">{it.desc}</p>}
                    </div>
                    {it.price && (
                      <span className="font-heading text-lg text-primary tabular-nums whitespace-nowrap">{it.price}</span>
                    )}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        {/* CTA */}
        <section className="bg-foreground text-background">
          <div className="mx-auto max-w-5xl px-4 py-16 text-center">
            <p className="font-script text-4xl text-[var(--color-honey)]">Boka ett bord</p>
            <h2 className="mt-2 font-heading text-3xl md:text-4xl">Slå dig ner hos oss.</h2>
            <p className="mt-4 text-background">Ring oss på {RAVEN.phone.label} eller boka via startsidan.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/" hash="boka" className="rounded-full bg-[var(--color-honey)] px-7 py-3.5 text-base font-semibold text-foreground hover:bg-background transition-colors min-h-12 inline-flex items-center">
                Till bokningen
              </Link>
              <a href={RAVEN.phone.href} className="rounded-full border-2 border-background px-7 py-3.5 text-base font-semibold text-background hover:bg-background hover:text-foreground transition-colors min-h-12 inline-flex items-center">
                Ring {RAVEN.phone.label}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-zåäö0-9]+/g, "-").replace(/^-|-$/g, "");
}
