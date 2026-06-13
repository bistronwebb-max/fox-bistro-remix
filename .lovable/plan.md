## Vad du faktiskt ser

"Spöket" på /catering är inte två sajter — det är den nya editoriella headern överst, och under den hela den gamla skrapade markdown-texten (som börjar med sin egen rubrik "Catering - Rävens Bistro" + en "Home / Catering"-brödsmula). Samma sak händer på /om-oss, /kontakta-oss, /meny och /faq — alla använder `MarkdownPage` som dumpar in `scraped.json` rakt av. Det är därför det känns som att gammal och ny sajt ligger ovanpå varandra.

Och du har rätt om "Hem" vs "Rävens Bistro": navlänken HEM går redan till `/` som ÄR Rävens Bistro-landningen. Det är samma sida. Men eftersom undersidorna fortfarande spökar med den gamla layouten ser det ut som två olika sajter.

## Vad jag ska göra

### 1. Städa undersidorna — `MarkdownPage` pensioneras

Den dumpar oredigerad skrapad text och drar in den gamla sajtens rubrik + brödsmula. Den ersätts med riktiga, kurerade route-komponenter i samma editoriella språk som hem-sidan.

- **`/catering`** — skrivs om till en egen sida: hero (samma stil som hem), tre kort (Buffé · Smörgåstårta · Kallskuret), en "så funkar det"-rad, kontaktblock med Boka@-mejl och telefon.
- **`/om-oss`** — hero + två kolumner brödtext (vår historia, vår filosofi), team-rutnät (Roney, Mariette, övriga ni vill ha med).
- **`/kontakta-oss`** — hero, kontakt­kort (telefon, mejl, adress, öppettider, kartlänk), och en kort bokningsförklaring som länkar till `#boka` på hem.
- **`/meny`** — hero + sektioner (Pizza, À la carte, Kebab & pita, Drycker) i samma "editorial table"-stil som veckomenyn på hem.
- **`/faq`** — hero + accordion (shadcn) med Väse-frågorna.
- `MarkdownPage.tsx` raderas. `scraped.json` får ligga kvar som källmaterial men importeras inte längre direkt.

Efter det: ingen sida har en dubbel rubrik eller "Home / X"-brödsmula. En sajt, ett språk.

### 2. Läsbarhet och kontrast (det här är inte kosmetik — det är hela poängen)

Inget vitt på beige. Inget ljust gult på beige. Allt brödtext-grått tas upp till WCAG AA (4.5:1) eller AAA (7:1) där det går.

- **Tokens i `src/styles.css`**: `--muted-foreground` mörknas tills den klarar 4.5:1 mot ivory. `--background/0.X`-utilityn på mörka sektioner sätts aldrig lägre än 0.75 för brödtext, 0.85 för kapitel-eyebrows.
- **Hem-sidan**: små "ETABLERAD 2018 · VÄSE" och "NR 01 — SÄSONGEN 2026" lyfts från `text-foreground/60` till `text-foreground/85` + fetare vikt. Honungsgula priser/accenter byts till en mörkare honungston när de står på ljus bakgrund.
- **Mörka sektioner** (citatet, bokningen, footern): brödtext byts från `text-background/75` till `text-background` eller `text-background/90`. Honungsgult mot mörk bakgrund är OK och stannar.
- **Bas-storlek**: body-fonten lyfts från 16 → 17px och radhöjden upp en aning. Det här hjälper både äldre läsare och syn­svaga utan att designen tappar editoriell rytm.
- **Knapparnas etiketter**: nuvarande `text-[0.75rem]` på telefon­knappen i headern höjs till 0.85rem.

### 3. Tillgänglighet — ja, det går att bygga för synsvaga

Inte "blind" i screenreader-mening enbart — vi täcker hela spektrumet:

- `<html lang="sv">` i `__root.tsx`.
- Skip-link ("Hoppa till innehåll") överst som blir synlig vid tab.
- Ett `<main id="content">` per sida, en H1 per sida, rätt rubrik­hierarki.
- Synlig `:focus-visible`-ring på alla länkar, knappar och formulärfält (en distinkt fox-röd ring, inte default-blå).
- Tap-targets ≥ 44×44 px (mobil­menyn och telefon-CTA stäms av).
- Alla `<img>` får meningsfulla `alt`. Dekorativa motiv får `alt=""` + `aria-hidden`.
- Bokningsformuläret får riktiga `<label>` (visuellt eller `sr-only`), `aria-required` och `autocomplete`.
- Header får `aria-label="Primär navigation"`. Hamburger-knappen får `aria-expanded` och `aria-controls`.
- Honoring `prefers-reduced-motion`: marquee och hover-translates dämpas (delvis redan på plats — säkras).
- Header-fokus: när menyn öppnas på mobil fokuseras första länken; Escape stänger.

### 4. Bekräftelse på "hem = Rävens Bistro"

Det är redan så i koden — `/` ÄR landningen. Men jag tar bort allt som kan så tvivel: i `<Link to="/">`-loggan i headern lägger jag `aria-label="Rävens Bistro — hem"`, och nav-etiketten "HEM" kan stå kvar (tydligare för äldre besökare än bara loggan). Ingen separat `/ravens-bistro`-route finns och ska inte skapas.

## Tekniskt (för referens)

- Filer som ändras: `src/routes/{catering,om-oss,kontakta-oss,meny,faq,__root}.tsx`, `src/components/site/{Header,Footer}.tsx`, `src/styles.css`, `src/routes/index.tsx` (kontrast­finputs).
- Fil som raderas: `src/components/site/MarkdownPage.tsx`.
- Inga nya paket. shadcn `accordion` finns redan i `src/components/ui/`.
- Inget röres i databas, server­funktioner eller `scraped.json` (källmaterial bevaras).

## Vad jag INTE rör i den här rundan

- Bokning via Lovable Cloud (mailto kvar tills du säger annat).
- Nya bilder — vi använder `src/assets/scraped/*` och Mariettes barporträtt.
- Domän, publicering, online-beställning.

Säg "kör" så börjar jag städa.