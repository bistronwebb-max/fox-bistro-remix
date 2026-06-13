import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Vanliga frågor | Rävens Bistro" },
      { name: "description", content: "Vanliga frågor om bordsbokning, allergier, catering, evenemang och betalning på Rävens Bistro i Väse." },
      { property: "og:title", content: "FAQ — Rävens Bistro" },
      { property: "og:description", content: "Vanliga frågor om Rävens Bistro." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: FAQPage,
});

const faqs = [
  { q: "Hur bokar jag bord?", a: "Ring 054-18 18 20 eller använd bokningsformuläret på startsidan. För större sällskap mejla Boka@ravensbistro.se. Öppet mån–tor 11–21, fre–lör 11–22 (till 01 vid evenemang), sön 11–21." },
  { q: "Var ligger ni?", a: "Storgatan 38, 660 57 Väse — strax utanför Karlstad. Lätt att parkera direkt utanför." },
  { q: "Serverar ni lunch?", a: "Ja, måndag–fredag. Salladsbuffé, dryck och kaffe ingår, 139:- (pensionärsrabatt 14 kr). Veckans rätter visas på startsidan." },
  { q: "Har ni glutenfritt / allergier?", a: "Ja. Vi har glutenfri surdeg som pizzabotten och hjälper gärna till med övriga allergier — fråga personalen på plats eller per telefon. Köket hanterar allergener; vi kan inte garantera spårfrihet." },
  { q: "Vart kommer ert kött ifrån?", a: "Vi väljer svenska leverantörer i den mån vi kan. Fråga oss på plats så berättar vi om dagens råvaror." },
  { q: "Kan vi boka catering?", a: "Absolut — fyll i förfrågan på sidan Catering så återkommer vi med förslag och pris. Vi cateror i hela Värmland." },
  { q: "Tar ni Swish?", a: "Ja. På startsidan finns två QR-koder — en för vanlig betalning och en under evenemang." },
  { q: "Har ni evenemang?", a: "Ja, vid evenemang har vi öppet till klockan 01 på fredagar och lördagar. Hör av dig om du vill boka för större sällskap." },
];

function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 mx-auto max-w-3xl px-4 py-16">
        <p className="font-script text-3xl text-primary">Vanliga frågor</p>
        <h1 className="mt-1 text-4xl md:text-5xl font-extrabold">FAQ</h1>
        <div className="mt-10 space-y-6">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-border bg-card p-5">
              <summary className="cursor-pointer text-lg font-semibold marker:hidden flex justify-between items-center">
                {f.q}
                <span className="text-primary transition group-open:rotate-45 text-2xl">+</span>
              </summary>
              <p className="mt-3 leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
