import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import heroPizza from "@/assets/scraped/hero-pizza.jpg";
import hero2 from "@/assets/scraped/hero-2.jpg";
import roney from "@/assets/scraped/roney.png";
import pizzaIcon from "@/assets/scraped/pizza-icon.png";
import alacarteIcon from "@/assets/scraped/alacarte-icon.png";
import kebabIcon from "@/assets/scraped/kebab-icon.png";
import swishVanlig from "@/assets/scraped/swish-vanlig.png";
import swishEvent from "@/assets/scraped/swish-event.png";
import teamRoney from "@/assets/scraped/team-roney.jpg";
import teamGabriel from "@/assets/scraped/team-gabriel.jpg";
import { MotifBackdrop } from "@/components/site/Motifs";
import { StatsRow } from "@/components/site/StatsRow";

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

const lunchMenu = [
  { day: "Måndag", dishes: "Pasta bolognese · Fiskgratäng med kokt potatis" },
  { day: "Tisdag", dishes: "Fläsk med raggmunk & lingon · Laxlasagne" },
  { day: "Onsdag", dishes: "Pulled karré med ris · Stekt strömming med mos & skirat smör" },
  { day: "Torsdag", dishes: "Ärtsoppa & pannkakor · Pocherad havskatt med ägg-räksås, dill & kokt potatis" },
  { day: "Fredag", dishes: "Grillad entrecôte med klyftpotatis & béarnaise · Ugnsbakad lax med kokt potatis & hjortroncrème" },
];

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-foreground text-background">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:py-24 lg:grid-cols-2">
            <div>
              <p className="font-script text-4xl text-primary">välkommen till vårt mysiga ställe i Väse</p>
              <h1 className="mt-2 text-5xl md:text-7xl font-extrabold leading-[0.95]">
                Rävens <span className="text-primary">Bistro</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg opacity-85">
                Värmlands bästa matupplevelse, precis utanför Karlstad — där genuina smaker möter en vänlig atmosfär.
              </p>
              <p className="mt-3 text-sm opacity-70">
                Mån–tor 11–21 · Fre–lör 11–22 (till 01 vid evenemang) · Sön 11–21.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#boka" className="rounded-full bg-primary px-7 py-3 text-base font-semibold text-primary-foreground hover:opacity-90">
                  Boka bord
                </a>
                <Link to="/meny" className="rounded-full border border-white/30 px-7 py-3 text-base font-semibold text-background hover:bg-white/10">
                  Se menyn
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={heroPizza} alt="Pizza från Rävens Bistro" className="aspect-[4/5] w-full rounded-2xl object-cover" />
              <img src={hero2} alt="Stämning i bistron" className="mt-10 aspect-[4/5] w-full rounded-2xl object-cover" />
            </div>
          </div>
        </section>

        {/* About teaser */}
        <section className="relative mx-auto max-w-7xl px-4 py-20 grid gap-12 lg:grid-cols-2 items-center">
          <MotifBackdrop variant="fox" />
          <div className="relative">
            <p className="font-script text-3xl text-primary">Sedan 2018</p>
            <h2 className="mt-1 text-4xl md:text-5xl font-extrabold">Vi finns vid alla tillfällen.</h2>
            <p className="mt-4 text-lg text-muted-foreground font-semibold">Bra mat & goda vibbar</p>
            <p className="mt-4 leading-relaxed">
              En kulinarisk pärla belägen i det idylliska Väse, en kort resa från Karlstad i hjärtat av Värmland.
              I vår bistro, omgiven av naturens lugn och skönhet, strävar vi efter att erbjuda en minnesvärd
              matupplevelse där råvaror och säsongens bästa smaker står i centrum.
            </p>
            <ul className="mt-6 space-y-2 text-base">
              <li>• Vårt språk är mat — och genom det berättar vi historier.</li>
              <li>• Varje rätt är ett litet mästerverk.</li>
              <li>• Välkommen till en smakfull resa.</li>
            </ul>
            <Link to="/om-oss" className="mt-8 inline-block rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background hover:opacity-90">
              Läs mer om oss
            </Link>
          </div>
          <div className="relative flex justify-center">
            <div className="relative inline-block">
              <p className="font-script text-7xl md:text-8xl text-primary leading-none drop-shadow-sm">
                Roney Saad
              </p>
              <p className="mt-2 text-center text-xs font-semibold tracking-[0.3em] uppercase text-foreground/70">
                Grundare · Kock
              </p>
              {/* Den scrapade signaturen som diskret vattenstämpel bakom namnet */}
              <img
                src={roney}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 m-auto w-72 opacity-30 mix-blend-multiply"
              />
            </div>
          </div>

        </section>

        {/* Menu cards */}
        <section className="bg-background border-y border-border">
          <div className="mx-auto max-w-7xl px-4 py-20">
            <div className="text-center">
              <p className="font-script text-3xl text-primary">Vår meny</p>
              <h2 className="mt-1 text-4xl md:text-5xl font-extrabold">Pizza, à la carte eller kebab & pita?</h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                { icon: pizzaIcon, title: "Pizza Meny", to: "/meny" },
                { icon: alacarteIcon, title: "À la carte Meny", to: "/meny" },
                { icon: kebabIcon, title: "Kebab & Pita Meny", to: "/meny" },
              ].map((c) => (
                <Link
                  key={c.title}
                  to={c.to}
                  className="group rounded-2xl border border-border bg-card p-8 text-center transition hover:-translate-y-1 hover:border-primary hover:shadow-lg"
                >
                  <img src={c.icon} alt="" className="mx-auto h-20 w-auto" />
                  <h3 className="mt-4 text-2xl font-bold">{c.title}</h3>
                  <span className="mt-4 inline-block text-sm font-semibold text-primary group-hover:underline">
                    Gå till meny →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Lunch */}
        <section className="mx-auto max-w-7xl px-4 py-20">
          <div className="text-center max-w-2xl mx-auto">
            <p className="font-script text-3xl text-primary">Meny</p>
            <h2 className="mt-1 text-4xl md:text-5xl font-extrabold">Veckans lunch</h2>
            <p className="mt-3 text-muted-foreground">
              Inklusive salladsbuffé, dryck & kaffe. Pensionärsrabatt 14 kr.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {lunchMenu.map((d) => (
              <div key={d.day} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-xl font-bold text-primary">{d.day}</h3>
                <p className="mt-2 text-sm leading-relaxed">{d.dishes}</p>
                <p className="mt-4 text-2xl font-extrabold">139:-</p>
              </div>
            ))}
          </div>
        </section>

        {/* Booking */}
        <section id="boka" className="bg-foreground text-background">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 lg:grid-cols-2">
            <div>
              <p className="font-script text-3xl text-primary">Bokning av bord</p>
              <h2 className="mt-1 text-4xl md:text-5xl font-extrabold">Boka ett bord hos oss</h2>
              <p className="mt-4 max-w-md opacity-85">
                Kontaktinformation, datum och antal gäster är allt vi behöver. Vi bekräftar via telefon eller e-post.
              </p>
              <div className="mt-8 space-y-3 text-sm">
                <p><span className="opacity-70">Ring direkt: </span><a className="font-semibold text-primary" href="tel:+46541818200">054-18 18 20</a></p>
                <p><span className="opacity-70">Event & större sällskap: </span><a className="font-semibold text-primary" href="mailto:Boka@ravensbistro.se">Boka@ravensbistro.se</a></p>
              </div>
            </div>
            <form
              className="rounded-2xl bg-background text-foreground p-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                const f = e.currentTarget;
                const data = new FormData(f);
                const subject = encodeURIComponent("Bordsbokning via webbplats");
                const body = encodeURIComponent(
                  `Namn: ${data.get("name")}\nTelefon: ${data.get("phone")}\nAntal gäster: ${data.get("guests")}\nDatum & tid: ${data.get("when")}\n\nMeddelande: ${data.get("msg") || ""}`,
                );
                window.location.href = `mailto:Boka@ravensbistro.se?subject=${subject}&body=${body}`;
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <input required name="name" placeholder="För- & efternamn" className="rounded-md border border-input bg-background px-3 py-2.5 text-sm" />
                <input required name="phone" type="tel" placeholder="Telefonnummer" className="rounded-md border border-input bg-background px-3 py-2.5 text-sm" />
                <input required name="guests" type="number" min="1" placeholder="Antal gäster" className="rounded-md border border-input bg-background px-3 py-2.5 text-sm" />
                <input required name="when" type="datetime-local" className="rounded-md border border-input bg-background px-3 py-2.5 text-sm" />
              </div>
              <textarea name="msg" rows={3} placeholder="Önskemål (valfritt)" className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm" />
              <button type="submit" className="w-full rounded-full bg-primary py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
                Boka bord på Rävens Bistro
              </button>
              <p className="text-xs text-muted-foreground">Bokningen skickas via din e-postklient till Boka@ravensbistro.se.</p>
            </form>
          </div>
        </section>

        {/* Allergies + Swish */}
        <section className="mx-auto max-w-7xl px-4 py-20 grid gap-16 lg:grid-cols-2">
          <div>
            <p className="font-script text-3xl text-primary">Allergisk?</p>
            <h2 className="mt-1 text-3xl md:text-4xl font-extrabold">Har du allergier?</h2>
            <p className="mt-4 leading-relaxed">
              Fråga oss om innehållet. Glutenfri surdeg kan väljas istället för vanlig pizza.
              Vill du veta var vårt kött kommer ifrån? Fråga oss!
            </p>
          </div>
          <div>
            <p className="font-script text-3xl text-primary">Swish</p>
            <h2 className="mt-1 text-3xl md:text-4xl font-extrabold">Betala enkelt med Swish</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Använd vänster QR för vanlig betalning och höger QR för betalning under evenemang.
            </p>
            <div className="mt-6 flex gap-6">
              <div className="text-center">
                <img src={swishVanlig} alt="Swish — vanlig betalning" className="w-32" />
                <p className="mt-2 text-xs font-semibold">Vanlig betalning</p>
              </div>
              <div className="text-center">
                <img src={swishEvent} alt="Swish — evenemang" className="w-32" />
                <p className="mt-2 text-xs font-semibold">Evenemang</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-background border-t border-border">
          <div className="mx-auto max-w-7xl px-4 py-20">
            <div className="text-center">
              <p className="font-script text-3xl text-primary">Vi lagar maten</p>
              <h2 className="mt-1 text-4xl md:text-5xl font-extrabold">Våra kockar</h2>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 max-w-3xl mx-auto">
              {[
                { img: teamRoney, name: "Roney Saad", role: "Grundare & kock" },
                { img: teamGabriel, name: "Gabriel Al Ajjie", role: "Kock" },
              ].map((p) => (
                <div key={p.name} className="text-center">
                  <img src={p.img} alt={p.name} className="mx-auto aspect-square w-56 rounded-full object-cover" />
                  <h3 className="mt-5 text-2xl font-bold">{p.name}</h3>
                  <p className="text-sm text-muted-foreground">{p.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats — speglar originalets svarta stat-rad med line-art ikoner */}
        <StatsRow
          items={[
            { value: "539+", label: "Antal Nöjda Kunder 2023", icon: "smile" },
            { value: "3", label: "Antalet Grymma kockar", icon: "chef" },
            { value: "4 300", label: "Tillagade måltider 2023", icon: "soup" },
            { value: "4,8", label: "Av 5 på Google Reviews", icon: "star" },
          ]}
        />

      </main>
      <Footer />
    </div>
  );
}
