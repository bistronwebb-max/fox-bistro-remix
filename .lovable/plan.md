## Mål

Två tydliga faser:

**Fas 1 — Städning.** Bort med allt Molkom-arv så koden bara handlar om Rävens Bistro i Väse. Inga "systerrestaurang"-spår, inga växla-ort-länkar, inga dubbla footer-kolumner.

**Fas 2 — Redesign.** Bygga Rävens Bistro så snyggt att Roney kan visa det för vem som helst. Vi följer redesign-ritualen: först låser vi smaken (färg, typografi, layout) med ett visuellt val, sen genererar vi tre färdiga riktningar att välja mellan, sen bygger jag den valda. Inget gissande.

Om Firecrawl: vi behöver inte skrapa om nu. Det vi redan har i `src/data/scraped.json` (meny, om-oss, kontakt) räcker som textbas. Firecrawl-kopplingen ligger ändå kvar och kan användas senare när Roney vill uppdatera meny eller priser från sin sajt.

---

## Fas 1 — Städning (mekanisk, ingen designdiskussion)

### Filer som raderas
- `src/routes/molkoms-pizzeria.tsx`
- `src/data/oppna-fragor.md` (ersätts med ny Väse-version eller tas bort helt — se nedan)

### Filer som skalas ner
- `src/lib/locations.ts` → reduceras till en `RAVEN` konstant (adress, telefon, mejl, öppettider, mapsUrl). `useActiveLocation` / `otherLocation` / `LOCATIONS` tas bort. Allt som importerar dem uppdateras att läsa direkt från konstanten.
- `src/data/scraped.json` → nyckeln `"molkoms-pizzeria"` tas bort.

### Filer som rensas från Molkom-referenser
- `src/components/site/Header.tsx` — växla-ort-länken bort, telefon hårdkodas till Väse, navlogik förenklas (inga feature-flaggor — Väse har allt).
- `src/components/site/Footer.tsx` — marquee-fraser, dubbel adresskolumn, `Du är hos…/Besök…`-knapparna och copyright bort. En ren Väse-footer.
- `src/components/site/MarkdownPage.tsx` — den nedre dubbel-info-sektionen tas bort.
- `src/routes/index.tsx` — "Vår pizzeria finns även i Molkom →"-länken och Molkom-meningen i lunchblocket bort.
- `src/routes/om-oss.tsx`, `meny.tsx`, `kontakta-oss.tsx`, `catering.tsx`, `faq.tsx` — intros och `MarkdownPage`-text rensas från Molkom-omnämnanden.
- `src/routes/villkor.tsx`, `integritetspolicy.tsx` — samma rensning.
- `src/routes/sitemap[.]xml.ts` — `/molkoms-pizzeria` bort.
- Alla `head().meta` (titel + og:title + og:description) byts från `"— Rävens Bistro & Molkoms Pizzeria"` till bara `"— Rävens Bistro"`.

### Komponenter
- `src/components/site/Motifs.tsx` — `variant="pizza"` (Molkom-motivet) kan ligga kvar eller tas bort. Förslag: behåll, men dokumentera som "pizza-motiv för pizzasektion på Väse", eftersom Väse också serverar pizza.

### Nytt internt arbetsdokument
- `src/data/oppna-fragor.md` skrivs om till en kort Väse-only-lista (bilder från Roney, vektorlogo, evenemangsdatum, om vi får skriva ut Gabriel som anställd). Tidigare Molkom-frågor markeras avklarade ("Molkom sålt — utgår").

### Verifiering efter Fas 1
- `rg -i "molkom"` ska bara träffa möjligen kommentarer i `oppna-fragor.md` (historik).
- Build går grön, preview laddar `/`, `/meny`, `/om-oss`, `/kontakta-oss`, `/catering`, `/faq`, `/villkor`, `/integritetspolicy`.
- `/molkoms-pizzeria` ska ge 404 via root `notFoundComponent`.

---

## Fas 2 — Redesign-ritual

När Fas 1 är klar och preview visar en ren Väse-sajt:

### Steg 2a — Capture
Jag tar en skärmdump av den nystädade `/` som referens.

### Steg 2b — Pin the taste
Tre visuella frågor i en runda (du svarar genom att klicka på alternativ):
1. **Palette** — 3 förslag som funkar för bistro/mat (varm jordton, mörk fine-dining, ljus skandinavisk).
2. **Typografi** — 3 typsnittspar (t.ex. modern serif + sans, editorial display + grotesk, varm humanist + script-accent).
3. **Layout** — 3 wireframe-strukturer (klassisk hero+rutnät, redaktionellt magazine, asymmetrisk broken-grid).

Inga "vad är vibben?"-frågor. Bara tre konkreta val.

### Steg 2c — Tre riktningar
Med dina val låsta genererar jag tre fullt renderade designriktningar för startsidan. De delar palett/typografi/layout men har olika hållning, densitet och rytm. Du ser dem som klickbara previews.

### Steg 2d — Bygg
Du väljer en. Jag implementerar exakt den valda riktningen — design-tokens kopieras rakt av in i `src/styles.css`, komposition och densitet matchas, och sedan rullar jag ut samma språk på övriga sidor (`/meny`, `/om-oss`, `/catering`, `/kontakta-oss`, `/faq`).

### Vad jag INTE rör i den här rundan
- Bordsbokning via Lovable Cloud (separat beslut — Google Forms/mailto kvar tills du säger annat).
- Domänkoppling.
- Beställning online.
- Nya bilder (vi använder befintliga `src/assets/scraped/*` tills Roney skickar nya).

---

## Teknisk sammanfattning

- Inga nya paket.
- Ingen schemaändring.
- Inga nya routes; en route (`molkoms-pizzeria`) raderas.
- `routeTree.gen.ts` regenereras automatiskt när Molkom-routen försvinner.
- Alla canonical/og:url-värden är redan relativa — påverkas inte.
- Firecrawl-nyckeln (`FIRECRAWL_API_KEY`) ligger kvar oanvänd, redo för framtida menyuppdateringar.

## Vad du gör nu

Säg "kör" så börjar jag med Fas 1. När den är grön ställer jag de tre visuella frågorna för Fas 2.
