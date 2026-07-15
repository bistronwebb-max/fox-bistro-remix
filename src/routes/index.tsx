import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import heroBarAsset from "@/assets/mariette-bar.png.asset.json";
import heroPizza from "@/assets/scraped/hero-pizza.jpg";
import hero2 from "@/assets/scraped/hero-2.jpg";
import pizzaIcon from "@/assets/scraped/pizza-icon.png";
import alacarteIcon from "@/assets/scraped/alacarte-icon.png";
import kebabIcon from "@/assets/scraped/kebab-icon.png";
import swishVanlig from "@/assets/scraped/swish-vanlig.png";
import swishEvent from "@/assets/scraped/swish-event.png";
import teamRoney from "@/assets/scraped/team-roney.jpg";
import teamMariette from "@/assets/mariette-bar.png.asset.json";
import gFood1 from "@/assets/scraped/pizza-hero.jpg.asset.json";
import gFood2 from "@/assets/scraped/food-ig-01.jpg.asset.json";
import gFood3 from "@/assets/scraped/food-ig-02.jpg.asset.json";
import gFood4 from "@/assets/scraped/food-ig-04.jpg.asset.json";
import gFood5 from "@/assets/scraped/food-ig-05.jpg.asset.json";
import gFood6 from "@/assets/scraped/food-ig-06.jpg.asset.json";
import gFood7 from "@/assets/scraped/dinner.jpg.asset.json";
import gFood8 from "@/assets/scraped/food-ig-08.jpg.asset.json";
import eventLive from "@/assets/scraped/event-live-1.jpg.asset.json";
import { RAVEN } from "@/lib/locations";
import { ArrowUpRight, Phone, MapPin, Clock, Truck } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rävens Bistro — Pizza, husman & evenemang i Väse" },
      { name: "description", content: "Värmlands mysiga bistro i Väse, strax utanför Karlstad. Pizza, à la carte, kebab, catering och evenemang. Sedan 2018." },
      { property: "og:title", content: "Rävens Bistro — Pizza, husman & evenemang i Väse" },
      { property: "og:description", content: "Värmlands mysiga bistro i Väse, strax utanför Karlstad. Pizza, à la carte, kebab, catering och evenemang." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main id="content" className="flex-1">
        {/* ───────── HERO ───────── */}
        <section className="relative overflow-hidden">
          {/* warm wash backdrop */}
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,var(--honey)_25%,transparent),transparent_60%)]" />
          <div className="relative mx-auto max-w-7xl px-4 pt-10 md:pt-16 pb-20">
            {/* Eyebrow row */}
            <div className="flex flex-wrap items-center justify-between gap-4 text-[0.7rem] uppercase tracking-[0.28em] font-semibold text-foreground/85">
              <span className="inline-flex items-center gap-2">
                <span className="h-px w-8 bg-foreground/30" /> Etablerad {RAVEN.since} · Väse
              </span>
              <span className="hidden md:inline-flex items-center gap-2">
                Nr 01 — Säsongen {new Date().getFullYear()}
              </span>
            </div>

            {/* Headline + image, magazine-style */}
            <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14 items-end">
              <div className="lg:col-span-7">
                <p className="font-script text-5xl md:text-6xl text-primary leading-none">en värmländsk bistro</p>
                <h1 className="mt-3 font-heading text-[clamp(3.5rem,9vw,7.5rem)] leading-[0.92] tracking-[-0.035em] text-balance">
                  Rävens
                  <br />
                  <span className="italic text-primary" style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1, "opsz" 144' }}>
                    Bistro
                  </span>
                </h1>
                <p className="mt-6 max-w-xl text-lg md:text-xl leading-relaxed text-pretty text-foreground">
                  Pizza ur vedugnen, husman med själ och à la carte med säsongens bästa —
                  serverat i Väse, en kort biltur från Karlstad.
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <Link
                    to="/meny"
                    className="link-underline text-base font-semibold tracking-wide text-foreground"
                  >
                    Läs hela menyn
                  </Link>
                </div>
              </div>

              {/* Stacked image collage */}
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-foreground/5 shadow-[0_30px_60px_-30px_rgba(27,20,17,0.35)]">
                  <img src={heroBarAsset.url} alt="Baren på Rävens Bistro" className="h-full w-full object-cover" />
                </div>
                <div className="absolute -bottom-10 -left-10 hidden md:block w-44 aspect-[4/5] overflow-hidden rounded-[1.5rem] ring-8 ring-background">
                  <img src={heroPizza} alt="Vedugnsbakad pizza från Rävens Bistro" className="h-full w-full object-cover" />
                </div>
                <div className="absolute -top-6 -right-4 rounded-full bg-[var(--color-honey)] text-foreground px-5 py-3 text-[0.7rem] uppercase tracking-[0.25em] font-bold shadow-md rotate-3">
                  Sedan {RAVEN.since}
                </div>
              </div>
            </div>

            {/* Info bar */}
            <div className="mt-20 grid gap-6 md:grid-cols-3 hairline pt-8">
              <div className="flex items-start gap-4">
                <Clock size={20} className="mt-1 text-primary shrink-0" />
                <div className="min-w-0">
                  <p className="text-[0.7rem] uppercase tracking-[0.25em] font-semibold text-foreground/80">Öppettider</p>
                  <ul className="mt-1 space-y-0.5 font-heading text-base leading-snug">
                    {RAVEN.hoursList.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin size={20} className="mt-1 text-primary shrink-0" />
                <div className="min-w-0">
                  <p className="text-[0.7rem] uppercase tracking-[0.25em] font-semibold text-foreground/80">Adress</p>
                  <p className="mt-1 font-heading text-lg leading-snug">{RAVEN.address}</p>
                </div>
              </div>
              <a href={RAVEN.phone.href} className="flex items-start gap-4 group">
                <Phone size={20} className="mt-1 text-primary shrink-0" />
                <div className="min-w-0">
                  <p className="text-[0.7rem] uppercase tracking-[0.25em] font-semibold text-foreground/80">Ring oss</p>
                  <p className="mt-1 font-heading text-lg leading-snug">{RAVEN.phone.label}</p>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* ───────── ABOUT — editorial pull-quote ───────── */}
        <section className="bg-foreground text-background">
          <div className="mx-auto max-w-6xl px-4 py-24 md:py-32 grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7">
              <p className="text-[0.7rem] uppercase tracking-[0.3em] font-semibold text-[var(--color-honey)]">Kapitel I — Familjen</p>
              <blockquote className="mt-6 font-heading text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] text-balance">
                <span className="text-primary">"</span>
                Vi vill att du går härifrån med samma känsla som efter en
                <em className="italic"> riktigt bra middag hemma hos någon du tycker om.</em>
                <span className="text-primary">"</span>
              </blockquote>
              <p className="mt-8 font-script text-4xl text-[var(--color-honey)]">Roney, Mariette &amp; personal</p>
              <p className="text-xs uppercase tracking-[0.3em] text-background/85 mt-1">RÄVENS BISTRO</p>
              <Link
                to="/om-oss"
                className="mt-10 link-underline inline-block text-base font-semibold tracking-wide text-background"
              >
                Läs hela vår historia
              </Link>
            </div>
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "À la carte", label: "KÖTT - FISK - SALLAD - BURGARE - PASTA\u00a0" },
                  { value: "Pizza", label: "TRADITIONELLA & SPECIAL - PITA - KEBAB" },
                  { value: "Dryck", label: "AV ALLA DE SORTER" },
                  { value: "2018", label: "Året vi öppnade" },
                ].map((s) => (
                  <div key={s.label} className="rounded-2xl border border-background/15 p-6">
                    <p className="font-heading text-4xl text-[var(--color-honey)]">{s.value}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-background/85">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ───────── MENU — three column editorial cards ───────── */}
        <section className="relative">
          <div className="mx-auto max-w-7xl px-4 py-24">
            <div className="grid gap-6 lg:grid-cols-12 items-end mb-14">
              <div className="lg:col-span-7">
                <p className="text-[0.7rem] uppercase tracking-[0.3em] font-semibold text-primary">Kapitel II — Köket</p>
                <h2 className="mt-3 font-heading text-5xl md:text-6xl leading-[1.0] tracking-[-0.025em] text-balance">
                Fyra vägar in i menyn.
                </h2>
              </div>
              <p className="lg:col-span-5 text-base text-foreground/85 max-w-md">
              Pizza ur vedugnen, klassisk husman och kebab/pita från eget recept —
              plus catering när festen ska hem till dig. Välj ditt humör och bläddra
              vidare.
              </p>
            </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: pizzaIcon, num: "01", title: "Pizza", desc: "Inbakade, klassiker och våra egna favoriter — ur vedugnen.", to: "/meny" as const },
              { icon: alacarteIcon, num: "02", title: "À la carte", desc: "Husman med själ, säsongens råvaror och välkomna klassiker.", to: "/meny" as const },
              { icon: kebabIcon, num: "03", title: "Kebab & pita", desc: "Egen marinad, generösa portioner — i tallrik eller pita.", to: "/meny" as const },
              { icon: null, num: "04", title: "Catering", desc: "Ta hem Rävens till kalaset, jobbet eller festen — vi fixar resten.", to: "/catering" as const },
            ].map((c) => (
              <Link
                key={c.title}
                to={c.to}
                className="group relative rounded-[1.75rem] border border-foreground/10 bg-card p-8 transition hover:border-primary/40 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(27,20,17,0.25)]"
              >
                <div className="flex items-start justify-between">
                  <span className="font-heading text-sm tracking-[0.2em] text-foreground/60">{c.num}</span>
                  <ArrowUpRight size={18} className="text-foreground/40 transition group-hover:text-primary group-hover:rotate-45" />
                </div>
                {c.icon ? (
                  <img src={c.icon} alt="" className="mt-12 h-20 w-auto opacity-90" />
                ) : (
                  <Truck size={72} strokeWidth={1.4} className="mt-12 text-primary" aria-hidden />
                )}
                <h3 className="mt-8 font-heading text-3xl tracking-[-0.02em]">{c.title}</h3>
                <p className="mt-2 text-base text-foreground/85 leading-relaxed">{c.desc}</p>
              </Link>
            ))}
            </div>
          </div>
        </section>

        {/* ───────── LUNCH — magazine table ───────── */}
        <section className="bg-[color-mix(in_oklab,var(--color-honey)_18%,var(--background))]">
          <div className="mx-auto max-w-7xl px-4 py-24">
            <div className="grid gap-8 lg:grid-cols-12 items-end">
              <div className="lg:col-span-6">
                <p className="text-[0.7rem] uppercase tracking-[0.3em] font-semibold text-ember">Kapitel III — Vardagen</p>
                <h2 className="mt-3 font-heading text-5xl md:text-6xl leading-[1.0] tracking-[-0.025em] text-balance">
                  Veckans lunch
                  <br />
                  <span className="italic text-primary" style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1, "opsz" 144' }}>på 139:-</span>
                </h2>
              </div>
              <div className="lg:col-span-6 lg:text-right">
                <p className="text-base text-foreground/85 max-w-md lg:ml-auto">
                  Serveras vardagar. Inklusive salladsbuffé, dryck &amp; kaffe.
                  Pensionärsrabatt 14 kr.
                </p>
              </div>
            </div>

            <div className="mt-14 rounded-[1.75rem] border border-foreground/15 bg-background/60 p-8 md:p-10">
              <p className="text-base md:text-lg leading-relaxed text-foreground max-w-2xl">
                Veckans rätter varierar och uppdateras löpande. Aktuell lunchmeny
                hittar du alltid på vår Facebook-sida.
              </p>
              <a
                href={RAVEN.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-base font-semibold text-background hover:bg-primary transition-colors min-h-12"
              >
                Se veckans lunch på Facebook
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* ───────── EVENEMANG ───────── */}
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 py-24 grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <p className="text-[0.7rem] uppercase tracking-[0.3em] font-semibold text-primary">Kapitel — Stämningen</p>
              <h2 className="mt-3 font-heading text-5xl md:text-6xl leading-[1.0] tracking-[-0.025em] text-balance">
                På Rävens har vi ofta
                {" "}
                <span className="italic text-primary" style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1, "opsz" 144' }}>evenemang.</span>
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground">
                Trubadurer, band, dans, quizkvällar och matcher på storbilds-TV. Håll dig
                uppdaterad — och planera gärna ditt nästa kalas hos oss. Evenemangen
                varierar med olika teman. Aktuella evenemang hittar du alltid på vår
                Facebook-sida.
              </p>
              <a
                href={RAVEN.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-base font-semibold text-background hover:bg-primary transition-colors min-h-12"
              >
                Se aktuella evenemang på Facebook
                <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/5] md:aspect-[5/4] overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-30px_rgba(27,20,17,0.35)]">
                <img src={eventLive.url} alt="Livemusik och stämning på Rävens Bistro" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* ───────── SMYGTITT — strip of food images ───────── */}
        <section aria-labelledby="smygtitt" className="overflow-hidden border-y border-foreground/10 bg-background">
          <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.3em] font-semibold text-primary">Ur köket</p>
              <h2 id="smygtitt" className="mt-2 font-heading text-3xl md:text-4xl tracking-[-0.02em]">En smygtitt.</h2>
            </div>
            <Link to="/galleri" className="link-underline text-sm font-semibold tracking-wide text-foreground whitespace-nowrap">
              Fler bilder i galleriet →
            </Link>
          </div>
          <div className="pb-16">
            <div className="marquee-track">
              {[...Array(2)].flatMap((_, dup) =>
                [gFood1, gFood2, gFood3, gFood4, gFood5, gFood6, gFood7, gFood8].map((img, i) => (
                  <span key={`${dup}-${i}`} className="inline-block shrink-0">
                    <img
                      src={img.url}
                      alt=""
                      loading="lazy"
                      className="h-48 md:h-64 w-auto rounded-xl object-cover"
                    />
                  </span>
                )),
              )}
            </div>
          </div>
        </section>

        {/* ───────── TEAM ───────── */}
        <section className="mx-auto max-w-7xl px-4 py-24">
          <div className="grid gap-6 lg:grid-cols-12 items-end mb-14">
            <div className="lg:col-span-7">
              <p className="text-[0.7rem] uppercase tracking-[0.3em] font-semibold text-primary">Kapitel V — Människorna</p>
              <h2 className="mt-3 font-heading text-5xl md:text-6xl leading-[1.0] tracking-[-0.025em] text-balance">
                Vi som ansvarar för din mat &amp; dryck.
              </h2>
            </div>
            <p className="lg:col-span-5 text-base text-foreground/85 max-w-md">
              Ett litet, stadigt team — från köket till baren.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { img: teamRoney, name: "Roney Saad", role: "Grundare &amp; kock", alt: "Porträtt av Roney Saad, grundare och kock" },
              { img: teamMariette.url, name: "Mariette Lindberg", role: "Barchef & sola i Väse", alt: "Porträtt av Mariette Lindberg, barchef och sola i Väse" },
              { img: gFood4.url, name: "Lyxmat & lyxpizza", role: "Du beställer — vi serverar", alt: "Lyxig pizza från Rävens Bistro" },
            ].map((p) => (
              <figure key={p.name} className="group">
                <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[color-mix(in_oklab,var(--foreground)_8%,var(--background))]">
                  {p.img ? (
                    <img
                      src={p.img}
                      alt={p.alt}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="grid h-full w-full place-items-center font-script text-7xl text-primary">
                      {p.name.charAt(0)}
                    </div>
                  )}
                </div>
                <figcaption className="mt-5">
                  <p className="font-heading text-2xl tracking-[-0.01em]">{p.name}</p>
                  <p className="text-xs uppercase tracking-[0.2em] font-semibold text-foreground/80 mt-1" dangerouslySetInnerHTML={{ __html: p.role }} />
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ───────── DETAILS: Allergies + Swish ───────── */}
        <section className="bg-[color-mix(in_oklab,var(--foreground)_4%,var(--background))]">
          <div className="mx-auto max-w-7xl px-4 py-24 grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="text-[0.7rem] uppercase tracking-[0.3em] font-semibold text-ember">Det praktiska</p>
              <h2 className="mt-3 font-heading text-4xl md:text-5xl leading-[1.05] tracking-[-0.02em]">Allergier &amp; särskilda önskemål</h2>
              <p className="mt-5 max-w-xl text-foreground leading-relaxed">
                Fråga oss alltid — vi har glutenfri surdeg som pizzabotten och hjälper
                gärna till med övriga allergier. Vill du veta var vårt kött kommer ifrån?
                Fråga oss på plats så berättar vi om dagens råvaror.
              </p>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[0.7rem] uppercase tracking-[0.3em] font-semibold text-ember">Betalning</p>
              <h3 className="mt-3 font-heading text-2xl tracking-[-0.01em]">Swish</h3>
              <p className="mt-2 text-base text-foreground/85">Vänster = vanlig betalning. Höger = under evenemang.</p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <figure className="rounded-2xl bg-card p-4 border border-foreground/10">
                  <img src={swishVanlig} alt="Swish — vanlig betalning" className="w-full" />
                  <figcaption className="mt-3 text-xs uppercase tracking-[0.2em] font-semibold text-foreground/85 text-center">Vanlig</figcaption>
                </figure>
                <figure className="rounded-2xl bg-card p-4 border border-foreground/10">
                  <img src={swishEvent} alt="Swish — evenemang" className="w-full" />
                  <figcaption className="mt-3 text-xs uppercase tracking-[0.2em] font-semibold text-foreground/85 text-center">Evenemang</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

