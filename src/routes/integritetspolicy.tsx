import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/integritetspolicy")({
  head: () => ({
    meta: [
      { title: "Integritetspolicy | Rävens Bistro" },
      { name: "description", content: "Så här behandlar vi dina personuppgifter enligt GDPR — Rävens Bistro." },
      { property: "og:title", content: "Integritetspolicy" },
      { property: "og:description", content: "GDPR och hur vi hanterar dina uppgifter." },
      { property: "og:url", content: "/integritetspolicy" },
    ],
    links: [{ rel: "canonical", href: "/integritetspolicy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 mx-auto max-w-3xl px-4 py-16 leading-relaxed">
        <p className="font-script text-3xl text-primary">GDPR & privacy</p>
        <h1 className="mt-1 text-4xl md:text-5xl font-extrabold">Integritetspolicy</h1>
        <p className="mt-4 text-sm text-muted-foreground">Senast uppdaterad: {new Date().toLocaleDateString("sv-SE")}</p>

        <h2 className="mt-10 text-2xl font-bold">Vilka uppgifter samlar vi in?</h2>
        <p className="mt-2">När du bokar bord, beställer catering eller mejlar oss sparar vi namn, telefon, e-post och eventuella önskemål — endast så länge det behövs för att hantera din bokning.</p>

        <h2 className="mt-8 text-2xl font-bold">Varför?</h2>
        <p className="mt-2">För att kunna bekräfta din bokning, kontakta dig vid förändringar och uppfylla bokföringskrav.</p>

        <h2 className="mt-8 text-2xl font-bold">Dina rättigheter</h2>
        <p className="mt-2">Du har rätt att begära ut, rätta eller radera dina uppgifter. Mejla <a className="text-primary underline" href="mailto:Kontakt@ravensbistro.se">Kontakt@ravensbistro.se</a>.</p>

        <h2 className="mt-8 text-2xl font-bold">Cookies</h2>
        <p className="mt-2">Webbplatsen använder endast tekniskt nödvändiga cookies. Ingen spårning för marknadsföring sker utan ditt samtycke.</p>

        <h2 className="mt-8 text-2xl font-bold">Personuppgiftsansvarig</h2>
        <p className="mt-2">Rävens Bistro, Storgatan 38, 660 57 Väse — sedan 2018.</p>
      </main>
      <Footer />
    </div>
  );
}
