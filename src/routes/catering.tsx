import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MarkdownPage } from "@/components/site/MarkdownPage";
import scraped from "@/data/scraped.json";
import { useActiveLocation, LOCATIONS } from "@/lib/locations";

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

function CateringPage() {
  const loc = useActiveLocation();

  // Catering är bekräftad bara för Väse. Om man kommer hit i Molkoms-kontext
  // visar vi en ärlig "vi vet inte än"-sida i stället för att låtsas.
  if (!loc.features.catering) {
    const vase = LOCATIONS.vase;
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <section className="bg-foreground text-background">
            <div className="mx-auto max-w-3xl px-4 py-20">
              <p className="font-script text-3xl text-primary">Catering</p>
              <h1 className="mt-1 text-4xl md:text-5xl font-extrabold">Cateror Molkoms Pizzeria?</h1>
              <p className="mt-5 max-w-2xl opacity-85">
                Det vet vi ärligt talat inte än — vi bekräftar med Roney. Det vi <em>vet</em> är att
                Rävens Bistro i Väse cateror i hela Värmland. Hör av dig så löser vi ändå.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm">
                <a href={`tel:${LOCATIONS.molkom.phone.href.replace("tel:", "")}`} className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90">
                  Ring Molkom · {LOCATIONS.molkom.phone.label}
                </a>
                <Link to="/kontakta-oss" className="rounded-full border border-white/30 px-6 py-3 font-semibold text-background hover:bg-white/10">
                  Skicka förfrågan
                </Link>
              </div>
            </div>
          </section>
          <section className="mx-auto max-w-3xl px-4 py-16">
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="font-script text-2xl text-primary">Catering finns säkert i Väse</p>
              <h2 className="mt-1 text-2xl font-bold">{vase.name} — {vase.address}</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Smörgåstårta, varm och kall buffé, kallskuret, förrätter, desserter och dryck —
                vi serverar i hela Värmland.
              </p>
              <Link to="/" className="mt-5 inline-block rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background hover:opacity-90">
                Till Rävens Bistro i Väse →
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <MarkdownPage
      title="Catering"
      intro="Vi utgår från Väse strax utanför Karlstad och serverar i hela Värmland. Välj mellan varm och kall buffé, förrätter, kött, vegetariskt, fisk och desserter."
      markdown={scraped.catering}
    />
  );
}
