import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { RAVEN } from "@/lib/locations";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import cateringAsset from "@/assets/scraped/catering-bg-1.jpg.asset.json";

export const Route = createFileRoute("/catering")({
  head: () => ({
    meta: [
      { title: "Catering i Karlstad & Värmland — Rävens Bistro" },
      { name: "description", content: "Rävens Bistro erbjuder skräddarsydd catering i Karlstad och hela Värmland. Smörgåstårta, buffé, kallskuret, varmrätter och desserter." },
      { property: "og:title", content: "Catering — Rävens Bistro" },
      { property: "og:description", content: "Vi serverar i hela Värmland — buffé, smörgåstårta, kallskuret och mer." },
      { property: "og:url", content: "/catering" },
    ],
    links: [{ rel: "canonical", href: "/catering" }],
  }),
  component: CateringPage,
});

const sections: Array<{ title: string; note?: string; items: Array<{ name: string; desc?: string; price: string }> }> = [
  {
    title: "Smörgåstårta & smörgåsar",
    items: [
      { name: "Smörgåstårta klassisk", price: "150:- / person" },
      { name: "Smörgåstårta skaldjur", price: "150:- / person" },
      { name: "Landgång", price: "150:- / st" },
      { name: "Räksmörgås klassisk", desc: "Med handskalade räkor.", price: "120:- / st" },
      { name: "Skagenbaguette", price: "85:- / st" },
      { name: "Rävens sandwich special", desc: "Husets oxfilé, toastbröd, tomat, lök, sallad och srirachamajonnäs.", price: "150:- / st" },
      { name: "Kallskuren bricka — klassisk", price: "150:- / person" },
    ],
  },
  {
    title: "Varm & kall buffé",
    note: "Välj fritt — vi anpassar efter sällskap och önskemål.",
    items: [
      { name: "Pepparmarinerad fläskfilé med pepparsås", price: "249:-" },
      { name: "Italiensk caponata med kycklingbröstfilé", price: "249:-" },
      { name: "Husets lax", price: "249:-" },
      { name: "Vegetariskt alternativ — fråga oss", price: "offert" },
    ],
  },
  {
    title: "Det praktiska",
    items: [
      { name: "Tallrik & bestick", desc: "Hyrs för 15:- per kuvert.", price: "15:-" },
      { name: "Vinglas", price: "10:-" },
      { name: "Festvåningsbeställning", desc: "+15:-/person för buffé och varmrätter, +10:- för förrätter och desserter.", price: "tillägg" },
      { name: "Utkörning", desc: "Offereras separat utifrån avstånd och tid.", price: "offert" },
      { name: "Dukar, servetter, blommor & ljus", desc: "Vi lämnar offert efter önskemål.", price: "offert" },
    ],
  },
];

function CateringPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main id="content" className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,color-mix(in_oklab,var(--honey)_22%,transparent),transparent_60%)]" />
          <div className="relative mx-auto max-w-7xl px-4 pt-12 md:pt-20 pb-20 grid gap-12 lg:grid-cols-12 items-end">
            <div className="lg:col-span-7">
              <p className="font-script text-5xl md:text-6xl text-primary leading-none">för era tillfällen</p>
              <h1 className="mt-3 font-heading text-[clamp(3rem,7vw,5.5rem)] leading-[0.95] tracking-[-0.03em] text-balance">
                Catering i hela
                <br />
                <span className="italic text-primary">Värmland.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground">
                Vi utgår från Väse strax utanför Karlstad och serverar i hela Värmland.
                Buffé, smörgåstårta, kallskuret, varmrätter och desserter — en mix av
                svensk husman och internationellt. Perfekt för kalas, företagsfester
                och evenemang.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a href={`mailto:${RAVEN.bookingEmail}?subject=${encodeURIComponent("Cateringförfrågan")}`}
                  className="group inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-3.5 text-base font-semibold text-background hover:bg-primary transition-colors min-h-12">
                  <Mail size={18} /> Skicka förfrågan
                  <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
                </a>
                <a href={RAVEN.phone.href} className="inline-flex items-center gap-2 link-underline text-base font-semibold text-foreground min-h-12">
                  <Phone size={18} /> {RAVEN.phone.label}
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-30px_rgba(27,20,17,0.35)] bg-foreground">
                <img src={cateringAsset.url} alt="Catering från Rävens Bistro — uppdukat bord" loading="lazy" className="w-full h-auto block" />
              </div>
            </div>
          </div>
        </section>

        {/* SECTIONS */}
        <section className="mx-auto max-w-7xl px-4 py-20 space-y-20">
          {sections.map((s, i) => (
            <div key={s.title}>
              <div className="grid gap-6 lg:grid-cols-12 items-end mb-10">
                <div className="lg:col-span-7">
                  <p className="text-[0.7rem] uppercase tracking-[0.3em] font-semibold text-primary">
                    Del {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-3 font-heading text-4xl md:text-5xl tracking-[-0.02em] text-balance">{s.title}</h2>
                </div>
                {s.note && <p className="lg:col-span-5 text-base text-foreground/85 max-w-md">{s.note}</p>}
              </div>
              <ul className="divide-y divide-foreground/20 border-t border-foreground/20">
                {s.items.map((it) => (
                  <li key={it.name} className="grid grid-cols-[1fr_auto] gap-6 py-5 items-start">
                    <div>
                      <p className="font-heading text-xl tracking-[-0.01em]">{it.name}</p>
                      {it.desc && <p className="mt-1 text-base text-foreground/80 leading-relaxed">{it.desc}</p>}
                    </div>
                    <span className="font-heading text-lg text-primary tabular-nums whitespace-nowrap">{it.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className="bg-foreground text-background">
          <div className="mx-auto max-w-5xl px-4 py-20 text-center">
            <p className="font-script text-4xl text-[var(--color-honey)]">Vi anpassar oss efter er</p>
            <h2 className="mt-3 font-heading text-4xl md:text-5xl tracking-[-0.02em]">Berätta om ert evenemang.</h2>
            <p className="mt-5 max-w-xl mx-auto text-background">
              Skicka en förfrågan så återkommer vi med förslag, pris och upplägg.
              Ring oss om det är bråttom — vi svarar oftast samma dag.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <a href={`mailto:${RAVEN.bookingEmail}?subject=${encodeURIComponent("Cateringförfrågan")}`}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-honey)] px-7 py-3.5 text-base font-semibold text-foreground hover:bg-background transition-colors min-h-12">
                <Mail size={18} /> {RAVEN.bookingEmail}
              </a>
              <a href={RAVEN.phone.href}
                className="inline-flex items-center gap-2 rounded-full border-2 border-background px-7 py-3.5 text-base font-semibold text-background hover:bg-background hover:text-foreground transition-colors min-h-12">
                <Phone size={18} /> {RAVEN.phone.label}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
