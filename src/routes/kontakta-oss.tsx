import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useActiveLocation, otherLocation } from "@/lib/locations";

export const Route = createFileRoute("/kontakta-oss")({
  head: () => ({
    meta: [
      { title: "Kontakta oss — Rävens Bistro & Molkoms Pizzeria" },
      { name: "description", content: "Kontakta Rävens Bistro i Väse eller Molkoms Pizzeria. Vi svarar oftast inom 24 timmar." },
      { property: "og:title", content: "Kontakta oss" },
      { property: "og:description", content: "Kontakta Rävens Bistro eller Molkoms Pizzeria." },
      { property: "og:url", content: "/kontakta-oss" },
    ],
    links: [{ rel: "canonical", href: "/kontakta-oss" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const loc = useActiveLocation();
  const other = otherLocation(loc.id);

  const items = [
    { Icon: Phone, label: "Telefon", value: loc.phone.label, href: loc.phone.href },
    { Icon: Mail, label: "E-post", value: loc.email, href: `mailto:${loc.email}` },
    ...(loc.id === "vase"
      ? [{ Icon: Mail, label: "Bokning av event", value: "Boka@ravensbistro.se", href: "mailto:Boka@ravensbistro.se" }]
      : []),
    { Icon: MapPin, label: "Adress", value: loc.address, href: loc.mapsUrl },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-foreground text-background">
          <div className="mx-auto max-w-5xl px-4 py-14 md:py-20">
            <p className="font-script text-3xl text-primary">Hör av dig till {loc.shortName}</p>
            <h1 className="mt-1 text-4xl md:text-5xl font-extrabold">Kontakta {loc.name}</h1>
            <p className="mt-4 max-w-2xl opacity-85">
              Har du frågor eller funderingar? Vi svarar oftast inom 24 timmar. Är det brådskande — ring oss direkt.
            </p>
            <Link to="/kontakta-oss" onClick={() => { if (typeof window !== "undefined") window.sessionStorage.setItem("rb:location", other.id); }} className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-primary hover:underline">
              ↔ Visa kontaktuppgifter för {other.name}
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            {items.map(({ Icon, label, value, href }) => (
              <a key={label} href={href} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 hover:border-primary transition">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary">
                  <Icon size={22} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">{label}</p>
                  <p className="text-lg font-semibold">{value}</p>
                </div>
              </a>
            ))}
            <div className="rounded-2xl border border-border bg-card p-5">
              <div className="flex items-center gap-3 text-primary">
                <Clock size={20} />
                <p className="text-xs uppercase tracking-wide font-semibold">Öppettider</p>
              </div>
              <p className="mt-3 text-sm">{loc.hours}</p>
              {!loc.confirmed.hours && (
                <p className="mt-2 text-xs text-muted-foreground">Bekräftas med Roney.</p>
              )}
            </div>
          </div>

          <form
            className="rounded-2xl border border-border bg-card p-6 space-y-4 h-fit"
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const subject = encodeURIComponent(`Webbformulär (${loc.name}) — ${data.get("name")}`);
              const body = encodeURIComponent(
                `Till: ${loc.name}\nFrån: ${data.get("name")} <${data.get("email")}>\n\n${data.get("msg")}`,
              );
              window.location.href = `mailto:${loc.email}?subject=${subject}&body=${body}`;
            }}
          >
            <h2 className="text-2xl font-bold">Skicka ett meddelande</h2>
            <p className="text-xs text-muted-foreground">Går till {loc.email}</p>
            <input required name="name" placeholder="För- och efternamn" className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm" />
            <input required name="email" type="email" placeholder="E-post" className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm" />
            <textarea required name="msg" rows={6} placeholder="Meddelande" className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm" />
            <button type="submit" className="w-full rounded-full bg-primary py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
              Skicka meddelande
            </button>
            <p className="text-xs text-muted-foreground">Meddelandet öppnas i din e-postklient.</p>
          </form>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-20">
          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              title={`Karta — ${loc.address}`}
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent(loc.address)}&output=embed`}
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
