## Plan

På hemsidan (`/`) finns idag en team-sektion med två kort: Roney och Mariette. På sidan *Om oss* lades nyligen till ett tredje kort — "Lyxat & lyxpizza" — som tillfällig utfyllnad tills riktiga fotografier på personal och kockar finns.

**Gör:**
1. Importera `foodIg04` i `src/routes/index.tsx` (bilden finns redan tillgänglig som `gFood4`).
2. Lägg till tredje objektet i team-arrayen: `Lyxat & lyxpizza` / `Du beställer — vi serverar`.
3. Säkerställ att grid-layouten klarar tre kort (den är redan `sm:grid-cols-2 lg:grid-cols-3`).
4. Lägg till `alt`-attribut på alla tre bilder för tillgänglighet (matchar om-oss).

När riktiga fotografier kommer byter ni bara ut det tredje kortet mot rätt person. Inga andra ändringar.