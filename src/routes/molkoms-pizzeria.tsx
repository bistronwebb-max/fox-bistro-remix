import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MotifBackdrop } from "@/components/site/Motifs";
import { StatsRow } from "@/components/site/StatsRow";
import { Marquee } from "@/components/site/Marquee";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import scraped from "@/data/scraped.json";
import heroPizza from "@/assets/scraped/hero-pizza.jpg";
import pizzaIcon from "@/assets/scraped/pizza-icon.png";

export const Route = createFileRoute("/molkoms-pizzeria")({
  head: () => ({
    meta: [
      { title: "Molkoms Pizzeria — Ortens pizzeria sedan 2016" },
      {
        name: "description",
        content:
          "Molkoms Pizzeria på Mejerivägen 15 — inbakade pizzor, klassiker, kebab och husmanskost. Samma familj och kök som Rävens Bistro i Väse.",
      },
      { property: "og:title", content: "Molkoms Pizzeria — Ortens pizzeria sedan 2016" },
      { property: "og:description", content: "Inbakade pizzor, klassiker och husmanskost på Mejerivägen 15 i Molkom." },
      { property: "og:url", content: "https://fox-whisper-remix.lovable.app/molkoms-pizzeria" },
    ],
    links: [{ rel: "canonical", href: "https://fox-whisper-remix.lovable.app/molkoms-pizzeria" }],
  }),
  component: MolkomsPage,
});

function MolkomsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero — speglar Väse Bistros hero men med pizza-DNA */}
        <section className="relative overflow-hidden bg-foreground text-background">
          <MotifBackdrop variant="pizza" className="opacity-60" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:py-24 lg:grid-cols-2">
            <div>
              <p className="font-script text-4xl text-primary">vår pizzeria i Molkom</p>
              <h1 className="mt-2 text-5xl md:text-7xl font-extrabold leading-[0.95]">
                Molkoms <span className="text-primary">Pizzeria</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg opacity-85">
                Generösa, inbakade pizzor, klassiker och husmanskost — bakade med samma kärlek som i Väse.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm">
                <a
                  href="https://maps.app.goo.gl/T7Bmk9pQzR61Gr9z7"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90"
                >
                  Mejerivägen 15, 655 60 Molkom
                </a>
                <a
                  href="tel:+46055310107"
                  className="rounded-full border border-white/30 px-6 py-3 font-semibold text-background hover:bg-white/10"
                >
                  0553-101 07
                </a>
              </div>
              <p className="mt-6 text-sm opacity-70">Samma familj och kök som Rävens Bistro i Väse — vår pizzeria i Molkom sedan 2016.</p>
            </div>
            <div className="relative">
              <img
                src={heroPizza}
                alt="Pizza från Molkoms Pizzeria"
                className="aspect-[4/5] w-full rounded-2xl object-cover"
              />
              <img
                src={pizzaIcon}
                alt=""
                className="absolute -bottom-6 -left-6 w-24 rounded-full bg-background p-3 shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Intro-strip */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-3 text-center">
            <div>
              <p className="font-script text-2xl text-primary">Inbakade</p>
              <p className="mt-1 text-sm text-muted-foreground">Calzone, Tefat, Ciao Ciao & fler favoriter</p>
            </div>
            <div>
              <p className="font-script text-2xl text-primary">Klassiker</p>
              <p className="mt-1 text-sm text-muted-foreground">Vesuvio, Capricciosa, Kebab & husmanskost</p>
            </div>
            <div>
              <p className="font-script text-2xl text-primary">Familjepizza</p>
              <p className="mt-1 text-sm text-muted-foreground">Från 200:- — för hela gänget</p>
            </div>
          </div>
        </section>

        {/* Meny — render scraped markdown */}
        <section className="relative">
          <MotifBackdrop variant="shared" />
          <div className="relative mx-auto max-w-5xl px-4 py-16">
            <div className="text-center">
              <p className="font-script text-3xl text-primary">Vår meny</p>
              <h2 className="mt-1 text-4xl md:text-5xl font-extrabold">Pizzor, husman & sallader</h2>
              <p className="mt-3 text-muted-foreground">Priser och utbud uppdateras direkt från Molkom.</p>
            </div>
            <article className="prose-bistro mt-10">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{scraped["molkoms-pizzeria"]}</ReactMarkdown>
            </article>
          </div>
        </section>

        {/* Molkom-marquee — egen rad i röd ton */}
        <Marquee
          tone="red"
          phrases={[
            "Molkoms Pizzeria · Mejerivägen 15",
            "Inbakade · Klassiker · Familjepizza",
            "Kebab · Sallader · Husman",
            "Ortens pizzeria sedan 2016",
            "Avhämtning · Bordsbokning · 0553-101 07",
          ]}
        />

        {/* Speglade stats — Molkom är äldre systern (sedan 2016) */}
        <StatsRow
          items={[
            { value: "Sedan 2016", label: "Ortens pizzeria i Molkom", icon: "chef" },
            { value: "42 000+", label: "Pizzor om året", icon: "soup" },
            { value: "30+", label: "Pizzor på menyn", icon: "smile" },
            { value: "4,6", label: "Av 5 på Google Reviews", icon: "star" },
          ]}
        />





        {/* CTA tillbaka till Väse */}
        <section className="bg-foreground text-background">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-14 text-center">
            <p className="font-script text-3xl text-primary">Vår andra ort</p>
            <h2 className="text-3xl md:text-4xl font-extrabold">På väg till Karlstad? Sväng in i Väse.</h2>
            <p className="max-w-xl opacity-80">
              Samma familj, samma kök — men à la carte, evenemang och catering på Storgatan 38.
            </p>
            <Link
              to="/"
              className="mt-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              Besök Rävens Bistro i Väse
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
