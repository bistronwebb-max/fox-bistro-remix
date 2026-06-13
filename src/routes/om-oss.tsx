import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { RAVEN } from "@/lib/locations";
import teamRoney from "@/assets/scraped/team-roney.jpg";
import teamMariette from "@/assets/mariette-bar.png.asset.json";
import interiorAsset from "@/assets/scraped/interior-1.jpg.asset.json";

export const Route = createFileRoute("/om-oss")({
  head: () => ({
    meta: [
      { title: "Om oss — Rävens Bistro" },
      { name: "description", content: "Rävens Bistro grundades 2018 av Roney Saad i Väse strax utanför Karlstad. Lokal mötesplats för matälskare, evenemang och festligheter." },
      { property: "og:title", content: "Om oss — Rävens Bistro" },
      { property: "og:description", content: "Tradition och kvalitet i Karlstad sedan 2018." },
      { property: "og:url", content: "/om-oss" },
    ],
    links: [{ rel: "canonical", href: "/om-oss" }],
  }),
  component: OmOssPage,
});

function OmOssPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main id="content" className="flex-1">
        <section className="mx-auto max-w-7xl px-4 pt-12 md:pt-20 pb-16 grid gap-12 lg:grid-cols-12 items-end">
          <div className="lg:col-span-7">
            <p className="font-script text-5xl text-primary leading-none">vår historia</p>
            <h1 className="mt-3 font-heading text-[clamp(3rem,7vw,5.5rem)] leading-[0.95] tracking-[-0.03em] text-balance">
              En bistro i
              <br />
              <span className="italic text-primary">Väse.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground">
              Rävens Bistro öppnade {RAVEN.since} på Storgatan 38 i Väse — en
              välkomnande mötesplats för matälskare, granne med Karlstad. Vi vill att
              du går härifrån med samma känsla som efter en riktigt bra middag hemma
              hos någon du tycker om.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-30px_rgba(27,20,17,0.35)]">
              <img src={interiorAsset.url} alt="Interiör på Rävens Bistro i Väse" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>
        </section>

        <section className="bg-foreground text-background">
          <div className="mx-auto max-w-6xl px-4 py-20 grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.3em] font-semibold text-[var(--color-honey)]">Tradition & kvalitet</p>
              <h2 className="mt-3 font-heading text-3xl md:text-4xl tracking-[-0.02em]">Det lokala jordbruket på tallriken.</h2>
              <p className="mt-5 text-background leading-relaxed">
                Menyn speglar det rika lokala jordbruket. Varje rätt tillagas med
                omsorg, säsongens råvaror och en känsla för det enkla som blir bra.
                Pizza ur vedugnen, husman med själ och à la carte med säsongens bästa.
              </p>
            </div>
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.3em] font-semibold text-[var(--color-honey)]">Evenemang & festligheter</p>
              <h2 className="mt-3 font-heading text-3xl md:text-4xl tracking-[-0.02em]">Små och stora sällskap är välkomna.</h2>
              <p className="mt-5 text-background leading-relaxed">
                Boka bord, hyr hela bistron, eller låt oss laga till ert evenemang.
                Vi har bioduk för fotboll och hockey, och vid evenemang har vi öppet
                till klockan 01 på fredagar och lördagar.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20">
          <div className="grid gap-6 lg:grid-cols-12 items-end mb-12">
            <div className="lg:col-span-7">
              <p className="text-[0.7rem] uppercase tracking-[0.3em] font-semibold text-primary">Människorna bakom</p>
              <h2 className="mt-3 font-heading text-4xl md:text-5xl tracking-[-0.02em] text-balance">
                Vi som ansvarar för din mat &amp; dryck.
              </h2>
            </div>
            <p className="lg:col-span-5 text-base text-foreground/85 max-w-md">
              Ett litet, stadigt team — från köket till baren. Säg hej när du kommer in.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 max-w-3xl">
            {[
              { img: teamRoney, name: "Roney Saad", role: "Grundare & kock" },
              { img: teamMariette.url, name: "Mariette Lindberg", role: "Barchef" },
            ].map((p) => (
              <figure key={p.name}>
                <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[color-mix(in_oklab,var(--foreground)_8%,var(--background))]">
                  <img src={p.img} alt={`Porträtt av ${p.name}, ${p.role.toLowerCase()}`} className="h-full w-full object-cover" />
                </div>
                <figcaption className="mt-5">
                  <p className="font-heading text-2xl tracking-[-0.01em]">{p.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] font-semibold text-foreground/80">{p.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
