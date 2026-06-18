# Ny meny utifrån kockens foton

Du har skickat fyra bilder: två fullständiga arbetsmenyer (grön pizzameny + röd à la carte) och två "snygga" kundmenyer i kockens stil (sida 1 bistro/à la carte/dryck, sida 2 pizza/pita/kebab/sallad). Vi använder de fullständiga som **innehållskälla** (allt ska finnas på sajten) och kockens snygga sidor som **strukturreferens** för gruppering och rubriker.

## Vad jag gör

1. **Ersätt scraped-meny med riktig datakälla.** `/meny` parsar idag `src/data/scraped.json` (gamla sidan). Jag byter ut det mot ett strukturerat objekt i `src/routes/meny.tsx` baserat exakt på de nya menybilderna. Inget mer beroende av den nedlagda sajten.

2. **Två tydliga huvuddelar, samma sida.** Kocken delar upp i två sidor — vi behåller en sida men två kapitel med ankarnav överst:
   - **À la carte & bistro** — Förrätter & snacks · Kött, fisk & burgare · Pasta, sallader & barnmeny · Dessert · Tillbehör & såser
   - **Pizza, pita, kebab & sallad** — Extra pålägg · Inbakade pizzor · Halvinbakade · Klass A · Klass B · Mozzarella · Fläskfilé · Kebabpizzor · Vegetariska · Oxfilé · Mexikanska · Kebab & kyckling · Pita · Sallader
   - **Dryck** — Alkoholfritt · Kaffe & varma · Vin/mousserande/rosé · Öl på tapp · Flasköl · Cider & blanddryck · Drinkar & sprit · Drinklista

3. **Behåll vår struktur och kopplingar.** Samma hero, snabbnav-piller, sektionslayout, CTA-blocket till boka. Lägger till:
   - Tydlig länk "Catering & smörgåstårta →" i hero och i CTA-foten (kopplar till `/catering` som tidigare).
   - Liten "Hoppa till"-rad högst upp som hoppar mellan de tre huvuddelarna (À la carte / Pizza / Dryck) utöver det fina sektionsnavet.

4. **Allergi- och notisrad.** Kockens menyer har "Fråga gärna personalen om allergener, dagens dippsås och aktuella dryckespriser" + "Sallad ingår. Alla pizzor kan fås som barnpizza: 5 kr / med ostkant +20 kr / med glutenfri botten +20 kr". Lägger in dessa som diskreta notiser under respektive kapitelrubrik.

5. **Catering rörs inte.** Inget i de nya menybilderna är catering — kockens sidor täcker bara restaurangen. `/catering` ligger kvar oförändrad med smörgåstårta/buffé som idag, och vi länkar dit från /meny så strukturen håller ihop.

6. **Stil.** Vi behåller nuvarande typografi (serif rubriker, script-accenter, honey/forest-paletten) — den ligger redan väldigt nära kockens eleganta uttryck. Inga nya färger eller fonter.

## Filer som ändras

- `src/routes/meny.tsx` — byter ut parser-baserat innehåll mot strukturerad data, två kapitelblock, allergi-notiser, länk till catering.

## Filer som INTE ändras

- `src/data/scraped.json` — ligger kvar men används inte längre av /meny (kan rensas senare).
- `src/routes/catering.tsx`, header/footer, startsidan — orörda.

## Frågor innan jag börjar

Inga blockerande — jag transkriberar rätt av från bilderna. Säg till om du hellre vill att jag:
- gör **två separata route-sidor** (`/meny/bistro` och `/meny/pizza`) istället för en lång sida med kapitel, eller
- visar kockens "korta" urval (sida 1+2 i kursiv stil) som standard och göm hela arbetsmenyn bakom en "Visa hela menyn"-knapp.

Annars kör jag enligt ovan.
