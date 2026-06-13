import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

import interior1 from "@/assets/scraped/interior-1.jpg.asset.json";
import interior2 from "@/assets/scraped/interior-2.jpg.asset.json";
import interior3 from "@/assets/scraped/interior-3.jpg.asset.json";
import interior2025 from "@/assets/scraped/interior-2025.jpg.asset.json";
import stamning from "@/assets/scraped/stamning-2025.jpg.asset.json";
import stamningLate from "@/assets/scraped/stamning-2025-late.jpg.asset.json";
import live1 from "@/assets/scraped/event-live-1.jpg.asset.json";
import live2 from "@/assets/scraped/event-live-2.jpg.asset.json";
import live3 from "@/assets/scraped/event-live-3.jpg.asset.json";

import pizzaHero from "@/assets/scraped/pizza-hero.jpg.asset.json";
import dinner from "@/assets/scraped/dinner.jpg.asset.json";
import psx1 from "@/assets/scraped/psx-1.jpg.asset.json";
import psx2 from "@/assets/scraped/psx-2.jpg.asset.json";
import psx3 from "@/assets/scraped/psx-3.jpg.asset.json";
import ig01 from "@/assets/scraped/food-ig-01.jpg.asset.json";
import ig02 from "@/assets/scraped/food-ig-02.jpg.asset.json";
import ig03 from "@/assets/scraped/food-ig-03.jpg.asset.json";
import ig04 from "@/assets/scraped/food-ig-04.jpg.asset.json";
import ig05 from "@/assets/scraped/food-ig-05.jpg.asset.json";
import ig06 from "@/assets/scraped/food-ig-06.jpg.asset.json";
import ig07 from "@/assets/scraped/food-ig-07.jpg.asset.json";
import ig08 from "@/assets/scraped/food-ig-08.jpg.asset.json";
import ig09 from "@/assets/scraped/food-ig-09.jpg.asset.json";
import ig10 from "@/assets/scraped/food-ig-10.jpg.asset.json";

export const Route = createFileRoute("/galleri")({
  head: () => ({
    meta: [
      { title: "Galleri — Rävens Bistro i Väse" },
      { name: "description", content: "Bilder från Rävens Bistro i Väse — mat ur köket, stämning i bistron och livemusik. Pizza, husman och evenemang utanför Karlstad." },
      { property: "og:title", content: "Galleri — Rävens Bistro" },
      { property: "og:description", content: "Se mat och miljö från Rävens Bistro i Väse." },
      { property: "og:url", content: "/galleri" },
    ],
    links: [{ rel: "canonical", href: "/galleri" }],
  }),
  component: GalleriPage,
});

type Img = { src: string; alt: string };

const food: Img[] = [
  { src: pizzaHero.url, alt: "Vedugnsbakad pizza" },
  { src: dinner.url, alt: "Middag på Rävens Bistro" },
  { src: psx1.url, alt: "Rätt ur köket" },
  { src: psx2.url, alt: "Rätt ur köket" },
  { src: psx3.url, alt: "Rätt ur köket" },
  { src: ig01.url, alt: "Rätt från Rävens Bistro" },
  { src: ig02.url, alt: "Rätt från Rävens Bistro" },
  { src: ig03.url, alt: "Rätt från Rävens Bistro" },
  { src: ig04.url, alt: "Rätt från Rävens Bistro" },
  { src: ig05.url, alt: "Rätt från Rävens Bistro" },
  { src: ig06.url, alt: "Rätt från Rävens Bistro" },
  { src: ig07.url, alt: "Rätt från Rävens Bistro" },
  { src: ig08.url, alt: "Rätt från Rävens Bistro" },
  { src: ig09.url, alt: "Rätt från Rävens Bistro" },
  { src: ig10.url, alt: "Rätt från Rävens Bistro" },
];

const interior: Img[] = [
  { src: interior1.url, alt: "Interiör i Rävens Bistro" },
  { src: interior2.url, alt: "Interiör i Rävens Bistro" },
  { src: interior3.url, alt: "Interiör i Rävens Bistro" },
  { src: interior2025.url, alt: "Interiör 2025" },
  { src: stamning.url, alt: "Stämning i bistron" },
  { src: stamningLate.url, alt: "Stämning i bistron en sen kväll" },
  { src: live1.url, alt: "Livemusik på Rävens Bistro" },
  { src: live2.url, alt: "Livemusik på Rävens Bistro" },
  { src: live3.url, alt: "Livemusik på Rävens Bistro" },
];

function GalleriPage() {
  const [active, setActive] = useState<Img | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main id="content" className="flex-1">
        <section className="relative overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,color-mix(in_oklab,var(--honey)_22%,transparent),transparent_60%)]" />
          <div className="relative mx-auto max-w-7xl px-4 pt-12 md:pt-20 pb-12">
            <p className="font-script text-5xl md:text-6xl text-primary leading-none">vårt galleri</p>
            <h1 className="mt-3 font-heading text-[clamp(3rem,7vw,5.5rem)] leading-[0.95] tracking-[-0.03em] text-balance">
              Bilder från
              <br />
              <span className="italic text-primary">bistron.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground">
              Smakprov ur köket och en titt på miljön. Klicka för större bild.
            </p>
          </div>
        </section>

        <Section title="Från köket" eyebrow="01" images={food} onPick={setActive} />
        <Section title="I bistron" eyebrow="02" images={interior} onPick={setActive} dark />
      </main>
      <Footer />

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-5xl border-none bg-transparent p-0 shadow-none">
          <DialogTitle className="sr-only">{active?.alt ?? "Bild"}</DialogTitle>
          {active && (
            <img src={active.src} alt={active.alt} className="h-auto w-full rounded-xl object-contain" />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function Section({
  title,
  eyebrow,
  images,
  onPick,
  dark = false,
}: {
  title: string;
  eyebrow: string;
  images: Img[];
  onPick: (i: Img) => void;
  dark?: boolean;
}) {
  return (
    <section className={dark ? "bg-foreground text-background" : ""}>
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <header className="mb-10">
          <p className={"text-[0.7rem] uppercase tracking-[0.3em] font-semibold " + (dark ? "text-[var(--color-honey)]" : "text-primary")}>
            {eyebrow}
          </p>
          <h2 className="mt-2 font-heading text-4xl md:text-5xl tracking-[-0.02em]">{title}</h2>
        </header>
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {images.map((img, i) => (
            <li key={img.src}>
              <button
                type="button"
                onClick={() => onPick(img)}
                className="group block aspect-square w-full overflow-hidden rounded-xl bg-foreground/10 focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label={`Visa större bild: ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading={i < 4 ? "eager" : "lazy"}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}