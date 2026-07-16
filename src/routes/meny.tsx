import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Link } from "@tanstack/react-router";
import { RAVEN } from "@/lib/locations";
import pizzaHeroAsset from "@/assets/scraped/pizza-hero.jpg.asset.json";

export const Route = createFileRoute("/meny")({
  head: () => ({
    meta: [
      { title: "Meny — Rävens Bistro" },
      { name: "description", content: "Hela menyn hos Rävens Bistro i Väse: inbakade pizzor, klassiska pizzor, kebab, pita, husmanskost, sallader, à la carte, hamburgare, barnmeny, desserter och drycker." },
      { property: "og:title", content: "Meny — Rävens Bistro" },
      { property: "og:description", content: "Pizza, à la carte, kebab, husman och mycket mer." },
      { property: "og:url", content: "/meny" },
    ],
    links: [{ rel: "canonical", href: "/meny" }],
  }),
  component: MenyPage,
});

type MenuItem = { name: string; desc?: string; price?: string };
type MenuSection = { title: string; note?: string; items: MenuItem[] };
type MenuChapter = { id: string; eyebrow: string; title: string; note?: string; sections: MenuSection[] };

const chapters: MenuChapter[] = [
  {
    id: "a-la-carte",
    eyebrow: "Kapitel 01",
    title: "À la carte & bistro",
    note: "Fråga gärna personalen om allergener och dagens dippsås.",
    sections: [
      {
        title: "Förrätter & snacks",
        items: [
          { name: "Vitlöksbröd med aioli", price: "69 kr" },
          { name: "Ugnsbakade rödbetor med chèvre", desc: "Toppas med rostade pinjenötter och honung.", price: "89 kr" },
          { name: "Chilinötter, 6 st", desc: "Serveras med varierande dipsås. Fråga personalen om dagens smak.", price: "79 kr" },
          { name: "Mozzarellasticks, 6 st", desc: "Serveras med varierande dipsås.", price: "79 kr" },
          { name: "Lökringar, 8 st", desc: "Serveras med varierande dipsås.", price: "79 kr" },
        ],
      },
      {
        title: "Kött, fisk & burgare",
        items: [
          { name: "Pepparstek", desc: "Pepparrullad oxfilé med valfri sås och potatis.", price: "359 kr" },
          { name: "Husets plankstek", desc: "Oxfilé, pommes duchesse, bearnaisesås och rödvinssås.", price: "359 kr" },
          { name: "Elefantöra", desc: "Utbakad tournedos med valfri sås och potatis.", price: "319 kr" },
          { name: "Grillad entrecôte", desc: "Serveras med valfri sås och potatis.", price: "319 kr" },
          { name: "Black & White", desc: "Oxfilémedaljong och fläskfilémedaljong med rödvinssås och bearnaisesås.", price: "319 kr" },
          { name: "Lövbiff", desc: "Utbakad ryggbiff med bearnaisesås eller aromsmör samt valfri potatis.", price: "199 kr" },
          { name: "Ryggbiff", desc: "Serveras med bearnaisesås och valfri potatis.", price: "199 kr" },
          { name: "Fläsknoisette", desc: "Utbakad fläskytterfilé med bearnaisesås eller aromsmör samt valfri potatis.", price: "189 kr" },
          { name: "Ugnsgrillad kycklingbröstfilé", desc: "Serveras med bearnaisesås och valfri potatis.", price: "179 kr" },
          { name: "Ugnsbakad gädda", desc: "Serveras med rippad örtolja, citron och valfri potatis.", price: "279 kr" },
          { name: "Fish ’n Chips", desc: "Panerad torsk med pommes frites och remouladsås.", price: "189 kr" },
          { name: "Double Decker", desc: "Briochebröd med 2 × 100 g nötkött, smokey mayo, cheddarost, krispsallad, färsk tomat och picklad rödlök. Serveras med pommes frites.", price: "199 kr" },
          { name: "Halloumi Decker", desc: "Briochebröd med två skivor halloumi, smokey mayo, cheddarost, krispsallad, färsk tomat och picklad rödlök. Serveras med pommes frites.", price: "199 kr" },
        ],
      },
      {
        title: "Tillbehör & såser",
        note: "Välj potatis eller sides 29 kr. Såser 20–30 kr.",
        items: [
          { name: "Välj potatis", desc: "Pommes frites, kokt potatis, stekt potatis, klyftpotatis, pommes duchesse eller wokade grönsaker.", price: "29 kr" },
          { name: "Sides", desc: "Coleslaw.", price: "29 kr" },
          { name: "Kalla såser", desc: "Aioli, bearnaisesås, remouladsås, tzatziki.", price: "20 kr" },
          { name: "Varma såser", desc: "Grönpepparsås, pepparsås, rödvinssås.", price: "30 kr" },
        ],
      },
      {
        title: "Pasta",
        items: [
          { name: "Bolognese", desc: "Linguini med långkokt köttragu.", price: "189 kr" },
          { name: "Carbonara", desc: "Krämig linguini toppad med parmesan och nymalen svartpeppar.", price: "189 kr" },
          { name: "Fläskfilépasta", desc: "Linguini med fläskpyssente i krämig gorgonzolasås.", price: "179 kr" },
          { name: "Oxfilépasta", desc: "Linguini med oxfilébitar i krämig pepparsås.", price: "209 kr" },
          { name: "Frutti di Mare", desc: "Linguini med bläckmusslor, grönmusslor och räkor i tomatsås.", price: "189 kr" },
        ],
      },
      {
        title: "Sallader",
        items: [
          { name: "Kyckling Caesar", desc: "Romansallad, gurka, tomat, rödlök, grillad kyckling, bacon, krutonger och caesardressing. Serveras med nygräddat bröd.", price: "149 kr" },
          { name: "Räk Caesar", desc: "Romansallad, gurka, tomat, rödlök, färska handskalade räkor, ägg, citron, krutonger och caesardressing. Serveras med nygräddat bröd.", price: "149 kr" },
        ],
      },
      {
        title: "Barnmeny",
        items: [
          { name: "Hamburgare, 150 g", desc: "Serveras med pommes frites.", price: "89 kr" },
          { name: "Korv med pommes frites", price: "79 kr" },
          { name: "Pannkakor", desc: "Serveras med sylt och grädde.", price: "79 kr" },
        ],
      },
      {
        title: "Något gott efter maten",
        items: [
          { name: "Banana Split", desc: "Banan, glass, grädde, kolasås, chokladsås och strössel.", price: "120 kr" },
          { name: "Glass, 2 kulor", desc: "Vaniljglass.", price: "120 kr" },
          { name: "Bygg egen tårta", desc: "Sockerkaka, grädde, jordgubbssylt, segelhallon och mandariner.", price: "120 kr" },
        ],
      },
    ],
  },
  {
    id: "pizza",
    eyebrow: "Kapitel 02",
    title: "Pizza, pita, kebab & sallad",
    note: "Sallad ingår. Alla pizzor kan fås som barnpizza −5 kr / med ostkant +20 kr / med glutenfri botten +20 kr.",
    sections: [
      {
        title: "Extra pålägg",
        note: "Pizza-pålägg 30 kr · Övriga ingredienser 15 kr.",
        items: [
          { name: "Pålägg 30 kr", desc: "Oxfilé, fläskfilé, kyckling, räkor, kebab, gorgonzola, pommes, skinka, fetaost, mozzarellaost, salami, bacon, köttfärssås, musslor, tonfisk." },
        ],
      },
      {
        title: "Inbakade pizzor",
        note: "Familjepizza 350 kr.",
        items: [
          { name: "Dubbel Ciao Ciao", desc: "Ost, tomatsås, fläskfilé, skinka, champinjoner, vitlök.", price: "140 kr" },
          { name: "Calzone Special", desc: "Ost, tomatsås, skinka, räkor.", price: "125 kr" },
          { name: "Calzone Vanlig", desc: "Ost, tomatsås, skinka.", price: "120 kr" },
        ],
      },
      {
        title: "Halvinbakade pizzor",
        note: "160 kr · Extra allt +30 kr · Familjepizza 350 kr.",
        items: [
          { name: "Bagarens Special", desc: "Ost, tomatsås. Inbakade delen: skinka. Andra halvan: mozzarella, lufttorkad skinka, kalamataoliver, salladsmix." },
          { name: "Florenzo", desc: "Ost, tomatsås, mozzarella, pinjenötter, honung, chèvreost, crème fraîche, lufttorkad skinka, parmesanost." },
        ],
      },
      {
        title: "Klass A",
        note: "120 kr · Extra allt +30 kr · Familjepizza 270 kr.",
        items: [
          { name: "Vesuvio", desc: "Ost, tomatsås, skinka." },
          { name: "Salamino", desc: "Ost, tomatsås, salami." },
          { name: "Capricciosa", desc: "Ost, tomatsås, skinka, champinjoner." },
          { name: "Hawaii", desc: "Ost, tomatsås, skinka, ananas." },
          { name: "Bolognese", desc: "Ost, tomatsås, köttfärssås, lök." },
        ],
      },
      {
        title: "Klass B",
        note: "145 kr · Extra allt +30 kr · Familjepizza 310 kr.",
        items: [
          { name: "Orientale", desc: "Ost, tomatsås, salami, lök, nötfärs, kalamataoliver." },
          { name: "Torino", desc: "Ost, tomatsås, skinka, salami, bacon, ägg, lök." },
          { name: "Gorgonzola", desc: "Ost, tomatsås, champinjoner, grillad paprika, lök, oliver, gorgonzola." },
          { name: "Värmland", desc: "Ost, tomatsås, kyckling, banan, nötter, curry." },
          { name: "Quattro Stagioni", desc: "Ost, tomatsås, skinka, champinjoner, räkor, musslor, kalamataoliver." },
          { name: "Maffia", desc: "Ost, tomatsås, tonfisk, krabba, räkor, lök, chili, citron, peperoni (extra stark)." },
          { name: "Romeo", desc: "Ost, tomatsås, skinka, ananas, banan, curry." },
        ],
      },
      {
        title: "Mozzarellapizzor",
        note: "160 kr · Extra allt +30 kr · Familjepizza 360 kr.",
        items: [
          { name: "Al Capone", desc: "Ost, tomatsås, mozzarella, skinka, salami, bacon, champinjoner, paprika, salladsmix." },
          { name: "Inter", desc: "Ost, tomatsås, mozzarella, lufttorkad skinka, soltorkade tomater, parmesanost, aubergine, salladsmix." },
          { name: "Macho", desc: "Ost, tomatsås, mozzarella, lufttorkad skinka, cocktailtomater, pinjenötter, honung, chèvreost, salladsmix." },
          { name: "Paullos", desc: "Ost, tomatsås, mozzarella, kyckling, bacon, stekta gröna sparris, vitlök, bearnaisesås." },
        ],
      },
      {
        title: "Fläskfilépizzor",
        note: "160 kr · Extra allt +30 kr · Familjepizza 360 kr.",
        items: [
          { name: "Black & White", desc: "Ost, tomatsås, fläskfilé, oxfilé, kantareller, bearnaisesås, kebabsås." },
          { name: "Gourmet", desc: "Ost, tomatsås, fläskfilé, skinka, ananas, räkor, stark bearnaisesås." },
          { name: "AC Milan", desc: "Ost, tomatsås, fläskfilé, mozzarella, soltorkade tomater, paprika, lök, champinjoner, bearnaisesås, salladsmix." },
          { name: "Casablanca", desc: "Ost, tomatsås, fläskfilé, oxfilé, champinjoner, bacon, lök, pressad vitlök, chilipeppar stark, bearnaisesås, salladsmix." },
        ],
      },
      {
        title: "Kebabpizzor",
        note: "155 kr · Extra allt +30 kr · Familjepizza 360 kr.",
        items: [
          { name: "Rävens Special", desc: "Ost, tomatsås, karré, fläskfilé, bacon, champinjoner, räkor, lök, vitlök, cayennepeppar, sås." },
          { name: "Väse Special", desc: "Ost, tomatsås, kebab, färsk sallad, sås." },
          { name: "Diablo", desc: "Ost, tomatsås, kebab, salami, lök, jalapeño, tomater, peperoni, cayennepeppar, sås." },
          { name: "Tre Kronor", desc: "Ost, tomatsås, kebab, skinka, pommes, sås." },
          { name: "Simon Special", desc: "Halvinbakad. Ost, tomatsås, kebab, salami, lök, sås." },
        ],
      },
      {
        title: "Vegetariska pizzor",
        note: "160 kr · Extra allt +30 kr · Familjepizza 360 kr.",
        items: [
          { name: "Firondos", desc: "Ost, tomatsås, fetaost, champinjoner, paprika, oliver, lök, soltorkade tomater, aubergine, jordnötter, salladsmix." },
          { name: "Formaggio", desc: "Ost, tomatsås, oliver, fetaost, gorgonzola, chèvreost, parmesanost, mozzarella, salladsmix." },
        ],
      },
      {
        title: "Oxfilépizzor",
        note: "160 kr · Extra allt +30 kr · Familjepizza 360 kr.",
        items: [
          { name: "Sorprendente", desc: "Ost, tomatsås, oxfilé, aubergine, zucchini, lök, cocktailtomater, kantareller, soltorkade tomater, bearnaisesås." },
          { name: "Excelente", desc: "Ost, tomatsås, oxfilé, kyckling, räkor, tomat, vitlök, bearnaisesås." },
        ],
      },
      {
        title: "Mexikanska pizzor",
        note: "160 kr · Extra allt +30 kr · Familjepizza 360 kr.",
        items: [
          { name: "Acapulco", desc: "Ost, tomatsås, oxfilé, lök, jalapeño, tacosås, vitlök, tacokrydda, cayenne." },
          { name: "Den onde", desc: "Ost, tomatsås, oxfilé, champinjoner, lök, jalapeño, chipotlesås, cayenne, tacokrydda, bearnaisesås." },
          { name: "Mexicana", desc: "Ost, tomatsås, köttfärssås, lök, jalapeño, chipotlesås, texmex, stark krydda." },
        ],
      },
      {
        title: "Kebab & kyckling",
        note: "Såser till kebab och pita: salladsdressing, vitlökssås, mild/mellan/stark kebabsås, bearnaisesås.",
        items: [
          { name: "Kebab med bröd", price: "120 kr" },
          { name: "Kebab med pommes", price: "135 kr" },
          { name: "Kebab Alexander", price: "130 kr" },
          { name: "Kebabrulle", price: "130 kr" },
          { name: "Kebabrulle med pommes", price: "150 kr" },
          { name: "Rhodos", desc: "Kebab, fetaost, brödbitar, pommes och sås.", price: "150 kr" },
          { name: "Kebab Special", desc: "Kebab, stekt paprika, champinjoner, rostad lök och pommes.", price: "150 kr" },
        ],
      },
      {
        title: "Pita",
        note: "Kan även beställas som rulle +20 kr. Isbergssallad, tomat, gurka, lök och valfri sås ingår.",
        items: [
          { name: "Rakpita", desc: "Räkor, ägg, citron.", price: "130 kr" },
          { name: "Hawaiipita", desc: "Skinka, ost, ananas.", price: "125 kr" },
          { name: "Specialpita", desc: "Karré, skinka, kyckling, räkor, ost.", price: "160 kr" },
        ],
      },
      {
        title: "Sallader",
        items: [
          { name: "Grekisk sallad", desc: "Fetaost, lök, kalamataoliver, italiensk dressing.", price: "150 kr" },
          { name: "Kycklingsallad", desc: "Stekt kyckling, ost, lök.", price: "150 kr" },
          { name: "Kebabsallad", desc: "Kebabkött, lök, peperoni, kalamataoliver.", price: "150 kr" },
          { name: "Tonfisksallad", desc: "Tonfisk, lök, kalamataoliver, ägg.", price: "150 kr" },
        ],
      },
    ],
  },
  {
    id: "dryck",
    eyebrow: "Kapitel 03",
    title: "Dryck",
    note: "Fråga gärna personalen om aktuella dryckespriser.",
    sections: [
      {
        title: "Läsk, Ramlösa & Festis",
        note: "20 kr / st.",
        items: [
          { name: "Läsk", desc: "Coca-Cola, Coca-Cola Zero, Coca-Cola Vanilla, Fanta Exotic, Fanta Jordgubb, Pepsi Max, 7Up, Zingo, Trocadero, Trocadero Zero." },
          { name: "Ramlösa", desc: "Naturell, citron, granatäpple, mango, svartvinbär, körsbär." },
          { name: "Festis", desc: "Päron, apelsin, hallon, jordgubb." },
        ],
      },
      {
        title: "Kaffe & varma drycker",
        items: [
          { name: "Kaffe", price: "30 kr" },
          { name: "Espresso", price: "35 kr" },
          { name: "Dubbel espresso", price: "45 kr" },
          { name: "Macchiato long", price: "40 kr" },
          { name: "Cappuccino", price: "60 kr" },
          { name: "Mocca", price: "60 kr" },
          { name: "Americano", price: "60 kr" },
          { name: "Latte", price: "60 kr" },
          { name: "Te", price: "25 kr" },
          { name: "Varm choklad", price: "25 kr" },
        ],
      },
      {
        title: "Vin, mousserande & rosé",
        note: "Pris glas / flaska.",
        items: [
          { name: "Viña Maipo", price: "85 / 360 kr" },
          { name: "Jacob’s Creek", price: "90 / 380 kr" },
          { name: "Tommasi Graticcio Appassionato", price: "100 / 430 kr" },
          { name: "Campo Viejo", price: "100 / 430 kr" },
          { name: "Zonin Prosecco 1821", price: "90 / 370 kr" },
          { name: "Santa Carolina", price: "90 / 360 kr" },
          { name: "Stoneleigh Riesling", price: "95 / 430 kr" },
          { name: "Bouchard Aîné & Fils", price: "100 / 430 kr" },
        ],
      },
      {
        title: "Öl på tapp",
        note: "Pris 40 cl / 50 cl.",
        items: [
          { name: "Falcon", price: "83 / 89 kr" },
          { name: "Staropramen", price: "89 / 94 kr" },
          { name: "Eriksberg Karaktär", price: "86 / 110 kr" },
          { name: "Eriksberg", price: "83 / 89 kr" },
        ],
      },
      {
        title: "Flasköl",
        items: [
          { name: "Carlsberg Hof", price: "75 kr" },
          { name: "Carlsberg Export", price: "79 kr" },
          { name: "Brooklyn IPA", price: "83 kr" },
          { name: "Fast IPA", price: "85 kr" },
          { name: "Mariestad", price: "89 kr" },
        ],
      },
      {
        title: "Cider & blanddryck",
        note: "85 kr / st.",
        items: [
          { name: "Somersby, Smirnoff, Breezer, Absolut Drinks" },
        ],
      },
      {
        title: "Drinkar & sprit",
        items: [
          { name: "Drink 4 cl", price: "120 kr" },
          { name: "Drink 6 cl", price: "169 kr" },
        ],
      },
      {
        title: "Drinklista",
        items: [
          { name: "Irish Coffee", desc: "Whiskey, kaffe, vispad grädde och farinsocker." },
          { name: "Kaffe Karlsson", desc: "Vodka, Baileys, Cointreau, kaffe, vispad grädde och mörk choklad." },
          { name: "Gin & Tonic", desc: "Gin, tonic och citronskiva." },
          { name: "Herman", desc: "Vaniljvodka, Sourz Apple och 7Up." },
          { name: "Sex on the Beach", desc: "Vodka, persikolikör, apelsinjuice och tranbärsjuice." },
          { name: "Ragnar", desc: "Absolut Currant, lime och 7Up." },
          { name: "Aperol Spritz", desc: "Aperol, prosecco och soda." },
          { name: "Lennart", desc: "Xanté, lime och 7Up." },
          { name: "Väske Räven", desc: "Captain Morgan Gold, lime, mynta och tranbärsjuice." },
          { name: "Päronspirit", desc: "Xanté, Likör 43 och mjölk." },
          { name: "Pippi", desc: "Ljus rom, Passoã, Sourz och citron." },
          { name: "Red Bull / Cola", desc: "Ljus rom och cola toppat med Red Bull." },
          { name: "Red Bull / Vodka", desc: "Vodka toppat med Red Bull." },
          { name: "Cuba Libre", desc: "Ljus rom, lime och cola." },
        ],
      },
    ],
  },
];

function MenyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main id="content" className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,var(--honey)_22%,transparent),transparent_60%)]" />
          <div className="relative mx-auto max-w-7xl px-4 pt-12 md:pt-20 pb-12 grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="font-script text-5xl md:text-6xl text-primary leading-none">vår meny</p>
              <h1 className="mt-3 font-heading text-[clamp(3rem,7vw,5.5rem)] leading-[0.95] tracking-[-0.03em] text-balance">
                Allt vi serverar
                <br />
                <span className="italic text-primary">i bistron.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground">
                Pizza ur vedugnen, husman med själ, kebab från eget recept — och mer
                därtill. Allergier eller önskemål? Fråga oss alltid, vi har bland annat
                glutenfri surdeg som pizzabotten.
              </p>
              <p className="mt-5 text-base text-foreground/80">
                Letar du efter catering, smörgåstårta eller buffé? <Link to="/catering" className="link-underline font-semibold text-primary">Se vår cateringmeny →</Link>
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-30px_rgba(27,20,17,0.35)]">
                <img src={pizzaHeroAsset.url} alt="Vedugnsbakad pizza från Rävens Bistro" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
          <div className="relative mx-auto max-w-7xl px-4 pb-12">
            {/* Kapitelnav */}
            <nav aria-label="Hoppa till kapitel" className="mt-10 flex flex-wrap gap-2">
              {chapters.map((c) => (
                <a key={c.id} href={`#${c.id}`}
                  className="rounded-full border border-foreground/30 px-5 py-2.5 text-sm font-semibold hover:border-primary hover:text-primary transition">
                  {c.title}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* KAPITEL */}
        {chapters.map((chapter) => (
          <section key={chapter.id} id={chapter.id} className="scroll-mt-20 border-t border-foreground/10">
            <div className="mx-auto max-w-5xl px-4 pt-16 pb-4">
              <p className="text-[0.7rem] uppercase tracking-[0.3em] font-semibold text-primary">{chapter.eyebrow}</p>
              <h2 className="mt-3 font-heading text-4xl md:text-5xl tracking-[-0.02em] text-balance">
                <span className="italic text-primary">{chapter.title}</span>
              </h2>
              {chapter.note && <p className="mt-4 max-w-2xl text-base italic text-foreground/75">{chapter.note}</p>}
            </div>
            <div className="mx-auto max-w-5xl px-4 pb-16 space-y-16">
              {chapter.sections.map((s) => (
                <article key={s.title} id={`${chapter.id}-${slugify(s.title)}`} className="scroll-mt-24">
                  <header className="flex items-end justify-between gap-6 mb-6">
                    <h3 className="font-heading text-2xl md:text-3xl tracking-[-0.02em]">{s.title}</h3>
                    {s.note && <p className="text-sm text-foreground/70 text-right max-w-xs">{s.note}</p>}
                  </header>
                  <ul className="divide-y divide-foreground/15 border-t border-foreground/20">
                    {s.items.map((it) => (
                      <li key={it.name} className="grid grid-cols-[1fr_auto] gap-6 py-5 items-start">
                        <div>
                          <p className="font-heading text-xl tracking-[-0.01em]">{it.name}</p>
                          {it.desc && <p className="mt-1 text-base text-foreground/85 leading-relaxed">{it.desc}</p>}
                        </div>
                        {it.price && (
                          <span className="font-heading text-lg text-primary tabular-nums whitespace-nowrap">{it.price}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="bg-foreground text-background">
          <div className="mx-auto max-w-5xl px-4 py-16 text-center">
            <p className="font-script text-4xl text-[var(--color-honey)]">Boka ett bord</p>
            <h2 className="mt-2 font-heading text-3xl md:text-4xl">Slå dig ner hos oss.</h2>
            <p className="mt-4 text-background">Ring oss på {RAVEN.phone.label} — vi svarar direkt.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href={RAVEN.phone.href} className="rounded-full bg-[var(--color-honey)] px-7 py-3.5 text-base font-semibold text-foreground hover:bg-background transition-colors min-h-12 inline-flex items-center">
                Ring {RAVEN.phone.label}
              </a>
              <Link to="/catering" className="rounded-full border-2 border-background/40 px-7 py-3.5 text-base font-semibold text-background/90 hover:border-background hover:text-background transition-colors min-h-12 inline-flex items-center">
                Catering & smörgåstårta
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-zåäö0-9]+/g, "-").replace(/^-|-$/g, "");
}
