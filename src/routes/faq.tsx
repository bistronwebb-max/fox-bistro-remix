import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Vanliga frågor | Rävens Bistro & Molkoms Pizzeria" },
      { name: "description", content: "Vanliga frågor om bordsbokning, allergier, catering, evenemang och betalning på Rävens Bistro i Väse och Molkoms Pizzeria." },
      { property: "og:title", content: "FAQ — Vanliga frågor" },
      { property: "og:description", content: "Vanliga frågor om Rävens Bistro & Molkoms Pizzeria." },
      { property: "og:url", content: "https://fox-whisper-remix.lovable.app/faq" },
    ],
    links: [{ rel: "canonical", href: "https://fox-whisper-remix.lovable.app/faq" }],
  }),
  component: FAQPage,
});

const faqs = [
  { q: "Vad är skillnaden på Rävens Bistro och Molkoms Pizzeria?", a: "Det är samma familj och samma kök på två orter. Molkoms Pizzeria i Molkom sedan 2016 — Rävens Bistro i Väse sedan 2018. Menyn är i grunden densamma; det som heter Väse special i Väse heter Molkoms special i Molkom." },
  { q: "Hur bokar jag bord i Väse?", a: "Ring 054-18 18 20 eller använd bokningsformuläret på startsidan. För större sällskap mejla Boka@ravensbistro.se. Öppet mån–tor 11–21, fre–lör 11–22, sön 11–21." },
  { q: "Hur bokar jag bord eller beställer i Molkom?", a: "Ring 0553-101 07 för avhämtning eller bordsbokning på Mejerivägen 15, 655 60 Molkom. Öppet mån–ons 12–22, tor–lör 11–22, sön 11–22. Större sällskap och catering — mejla Kontakt@ravensbistro.se." },
  { q: "Serverar ni lunch på båda ställen?", a: "Lunchmenyn är samma: måndag–fredag, salladsbuffé, dryck och kaffe ingår, 139:- (pensionärsrabatt 14 kr). Aktuella rätter visas på respektive startsida. (Lunchutbud i Molkom bekräftas med Roney.)" },
  { q: "Har ni glutenfritt / allergier?", a: "Ja. Vi har glutenfri surdeg som pizzabotten och hjälper gärna till med övriga allergier — fråga personalen på plats eller per telefon. Båda köken hanterar allergener; vi kan inte garantera spårfrihet." },
  { q: "Vart kommer ert kött ifrån?", a: "Vi väljer svenska leverantörer i den mån vi kan. Fråga oss på plats så berättar vi om dagens råvaror." },
  { q: "Kan vi boka catering?", a: "Absolut — fyll i förfrågan på sidan Catering så återkommer vi med förslag och pris. Vi cateror från både Väse och Molkom i hela Värmland." },
  { q: "Tar ni Swish?", a: "Ja. På startsidan finns två QR-koder — en för vanlig betalning och en under evenemang." },
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
