import { createFileRoute } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import fragor from "@/data/oppna-fragor.md?raw";

// Scrapad media — alla bilder vi använder publikt ska komma härifrån.
import logo from "@/assets/scraped/logo.png";
import logoRound from "@/assets/scraped/logo-round.png";
import favicon from "@/assets/scraped/favicon.png";
import footerImg from "@/assets/scraped/footer-img.png";
import hero2 from "@/assets/scraped/hero-2.jpg";
import heroPizza from "@/assets/scraped/hero-pizza.jpg";
import roney from "@/assets/scraped/roney.png";
import teamRoney from "@/assets/scraped/team-roney.jpg";
import teamMariette from "@/assets/mariette-bar.png.asset.json";
import pizzaIcon from "@/assets/scraped/pizza-icon.png";
import alacarteIcon from "@/assets/scraped/alacarte-icon.png";
import kebabIcon from "@/assets/scraped/kebab-icon.png";
import swishVanlig from "@/assets/scraped/swish-vanlig.png";
import swishEvent from "@/assets/scraped/swish-event.png";

const media = [
  { src: logo, name: "logo.png", used: "Header, Footer" },
  { src: logoRound, name: "logo-round.png", used: "(reserv)" },
  { src: favicon, name: "favicon.png", used: "(reserv)" },
  { src: footerImg, name: "footer-img.png", used: "(reserv)" },
  { src: hero2, name: "hero-2.jpg", used: "Startsidan — stämningsbild" },
  { src: heroPizza, name: "hero-pizza.jpg", used: "Startsidan — pizzabild" },
  { src: roney, name: "roney.png", used: "Startsidan — citat" },
  { src: teamRoney, name: "team-roney.jpg", used: "Team / Om oss" },
  { src: teamMariette.url, name: "mariette-bar.png", used: "Team / Om oss — Mariette" },
  { src: pizzaIcon, name: "pizza-icon.png", used: "Meny-ikon" },
  { src: alacarteIcon, name: "alacarte-icon.png", used: "Meny-ikon" },
  { src: kebabIcon, name: "kebab-icon.png", used: "Meny-ikon" },
  { src: swishVanlig, name: "swish-vanlig.png", used: "Swish — vanlig betalning" },
  { src: swishEvent, name: "swish-event.png", used: "Swish — evenemang" },
];

export const Route = createFileRoute("/internt")({
  head: () => ({
    meta: [
      { title: "Internt — frågor & media" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: InterntPage,
});

function InterntPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-foreground text-background">
          <div className="mx-auto max-w-5xl px-4 py-12">
            <p className="font-script text-3xl text-primary">Internt arbetsmaterial</p>
            <h1 className="mt-1 text-3xl md:text-4xl font-extrabold">Frågor till Roney & mediabibliotek</h1>
            <p className="mt-3 max-w-2xl text-sm opacity-80">
              Den här sidan är <strong>oindexerad</strong> och inte länkad publikt — bara du och Roney behöver känna till URL:en.
              Här samlar vi allt som ska bekräftas vid första mötet, plus en överblick på alla bilder vi använder
              (alla är skrapade från rävensbistro.se — inget AI-genererat eller stockfoto).
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-10 prose-bistro">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{fragor}</ReactMarkdown>
        </article>

        <section className="border-t border-border bg-secondary/40">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <h2 className="text-2xl font-extrabold">Mediabibliotek — endast scrapade källor</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {media.length} filer ligger i <code>src/assets/scraped/</code>. Varje bild på sajten importeras härifrån —
              inga externa URL:er, inga AI-bilder. Behöver vi fler bilder ber vi Roney om högupplöst original.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {media.map((m) => (
                <div key={m.name} className="rounded-xl border border-border bg-card p-3">
                  <div className="aspect-video w-full overflow-hidden rounded-md bg-muted">
                    <img src={m.src} alt={m.name} className="h-full w-full object-contain" />
                  </div>
                  <p className="mt-2 text-sm font-semibold">{m.name}</p>
                  <p className="text-xs text-muted-foreground">{m.used}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
