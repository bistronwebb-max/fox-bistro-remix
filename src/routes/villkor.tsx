import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/villkor")({
  head: () => ({
    meta: [
      { title: "Allmänna villkor | Rävens Bistro" },
      { name: "description", content: "Allmänna villkor för bordsbokning, catering, evenemang och betalning hos Rävens Bistro i Väse." },
      { property: "og:title", content: "Allmänna villkor" },
      { property: "og:description", content: "Villkor för bokning, catering och evenemang." },
      { property: "og:url", content: "/villkor" },
    ],
    links: [{ rel: "canonical", href: "/villkor" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="content" className="flex-1 mx-auto max-w-3xl px-4 py-16 leading-relaxed">
        <p className="font-script text-3xl text-primary">Det formella</p>
        <h1 className="mt-1 text-4xl md:text-5xl font-extrabold">Allmänna villkor</h1>
        <p className="mt-4 text-sm text-muted-foreground">Senast uppdaterad: {new Date().toLocaleDateString("sv-SE")}</p>

        <p className="mt-2 text-sm">Villkoren gäller <strong>Rävens Bistro</strong>, Storgatan 38, 660 57 Väse — sedan 2018.</p>

        <h2 className="mt-10 text-2xl font-bold">1. Bordsbokning</h2>
        <p className="mt-2">Bokning är bekräftad först när du fått svar från oss via telefon eller e-post. Avbokning sker senast 4 timmar innan ankomst. För sällskap över 8 personer gäller 24 timmar. Bokning: 054-18 18 20 eller boka@rävens.se.</p>

        <h2 className="mt-8 text-2xl font-bold">2. Catering & evenemang</h2>
        <p className="mt-2">Offert skickas på förfrågan. Slutgiltig beställning bekräftas skriftligen. Avbokning utan kostnad senast 7 dagar innan; därefter debiteras 50 %.</p>

        <h2 className="mt-8 text-2xl font-bold">3. Betalning</h2>
        <p className="mt-2">Vi tar kort, Swish och kontanter. Vid faktura tillkommer faktureringsavgift; betalningsvillkor 14 dagar netto.</p>

        <h2 className="mt-8 text-2xl font-bold">4. Allergier & specialkost</h2>
        <p className="mt-2">Meddela oss vid bokning. Vi tillagar i kök där allergener förekommer — vi kan inte garantera fullständig frihet från spår.</p>

        <h2 className="mt-8 text-2xl font-bold">5. Kontakt</h2>
        <p className="mt-2">Frågor? Mejla <a className="text-primary underline" href="mailto:kontakt@rävens.se">kontakt@rävens.se</a> eller ring 054-18 18 20.</p>
      </main>
      <Footer />
    </div>
  );
}
