import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { RAVEN } from "@/lib/locations";

export const Route = createFileRoute("/kontakta-oss")({
  head: () => ({
    meta: [
      { title: "Kontakta oss — Rävens Bistro" },
      { name: "description", content: "Kontakta Rävens Bistro i Väse. Telefon, e-post, adress och öppettider. Vi svarar oftast inom 24 timmar." },
      { property: "og:title", content: "Kontakta oss — Rävens Bistro" },
      { property: "og:description", content: "Kontakta Rävens Bistro i Väse." },
      { property: "og:url", content: "/kontakta-oss" },
    ],
    links: [{ rel: "canonical", href: "/kontakta-oss" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const items = [
    { Icon: Phone, label: "Telefon", value: RAVEN.phone.label, href: RAVEN.phone.href },
    { Icon: Mail, label: "E-post", value: RAVEN.email, href: `mailto:${RAVEN.email}` },
    { Icon: Mail, label: "Bokning av event", value: RAVEN.bookingEmail, href: `mailto:${RAVEN.bookingEmail}` },
    { Icon: MapPin, label: "Adress", value: RAVEN.address, href: RAVEN.mapsUrl },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="content" className="flex-1">
        <section className="bg-foreground text-background">
          <div className="mx-auto max-w-5xl px-4 py-14 md:py-20">
            <p className="font-script text-3xl text-primary">Hör av dig</p>
            <h1 className="mt-1 text-4xl md:text-5xl font-extrabold">Kontakta {RAVEN.name}</h1>
            <p className="mt-4 max-w-2xl text-background">
              Har du frågor eller funderingar? Vi svarar oftast inom 24 timmar. Är det brådskande — ring oss direkt.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            {items.map(({ Icon, label, value, href }) => (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 hover:border-primary transition min-h-16">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary">
                  <Icon size={22} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide font-semibold text-foreground/80">{label}</p>
                  <p className="text-lg font-semibold text-foreground">{value}</p>
                </div>
              </a>
            ))}
            <div className="rounded-2xl border border-border bg-card p-5">
              <div className="flex items-center gap-3 text-primary">
                <Clock size={20} />
                <p className="text-xs uppercase tracking-wide font-semibold">Öppettider</p>
              </div>
              <ul className="mt-3 space-y-1 text-base text-foreground">
                {RAVEN.hoursList.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 space-y-5 h-fit">
            <h2 className="text-2xl font-bold">Hör av dig direkt</h2>
            <p className="text-base text-foreground/85">
              Vi svarar snabbast via telefon. Använd e-post för bokning, event och övriga frågor — kopiera adressen nedan.
            </p>
            <div className="space-y-3">
              <div className="rounded-2xl border border-border bg-background p-4">
                <p className="text-xs uppercase tracking-wide font-semibold text-foreground/80 flex items-center gap-2"><Mail size={16} aria-hidden /> Allmänna frågor</p>
                <p className="mt-1 font-heading text-lg text-foreground select-all">{RAVEN.email}</p>
              </div>
              <div className="rounded-2xl border border-border bg-background p-4">
                <p className="text-xs uppercase tracking-wide font-semibold text-foreground/80 flex items-center gap-2"><Mail size={16} aria-hidden /> Bokning & event</p>
                <p className="mt-1 font-heading text-lg text-foreground select-all">{RAVEN.bookingEmail}</p>
              </div>
              <a href={RAVEN.phone.href} className="flex items-center justify-between gap-3 rounded-full border-2 border-foreground px-6 py-3.5 text-base font-semibold text-foreground hover:bg-foreground hover:text-background transition-colors min-h-12">
                <span className="flex items-center gap-2"><Phone size={18} /> Ring oss</span>
                <span className="text-sm opacity-90 hidden sm:inline">{RAVEN.phone.label}</span>
              </a>
            </div>
            <p className="text-sm text-muted-foreground">Vi svarar oftast inom 24 timmar på vardagar.</p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-20">
          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              title={`Karta — ${RAVEN.address}`}
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent(RAVEN.address)}&output=embed`}
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
