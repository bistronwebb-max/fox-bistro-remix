## Mål

Få in de skrapade bilderna på rätt platser utan att tynga sidan. Lösning som inte kräver att du kör TinyPNG manuellt — vi låter bygget göra jobbet.

## Problemet med bilderna idag

Några av de skrapade filerna är råa (interior-1: 14 MB, interior-2: 11 MB, psx-3: 12 MB). Lägger vi in dem direkt blir startsidan långsam. Lösningen nedan komprimerar och format-konverterar automatiskt vid första visning via CDN-pipen — du slipper TinyPNG, jag slipper ladda upp dubbletter.

## Plan

### 1. Bildoptimerings-hjälpare (en gång)

Skapa `src/lib/img.ts` med en liten helper `cdn(url, { w, q })` som lägger på query-parametrar (`?w=1200&q=75&format=webp`) på `/__l5e/`-URL:erna. Lovables CDN respekterar dessa och serverar nedskalade WebP-varianter — originalet ligger orört i banken, men besökaren får t.ex. 180 KB istället för 14 MB.

Användning:
```tsx
<img src={cdn(interior1.url, { w: 1600 })} ... />
```

Plus `loading="lazy"` och explicit `width`/`height` för att undvika CLS.

### 2. Ny route: `/galleri`

`src/routes/galleri.tsx` med två sektioner:

- **Från köket** — grid (2 kol mobil, 3-4 kol desktop) med `food-ig-01..10`, `pizza-hero`, `dinner`, `psx-1..3`.
- **I bistron** — `interior-1/2/3/2025`, `stamning-2025`, `stamning-2025-late`, `event-live-1/2/3`.

Klick öppnar bilden i en enkel lightbox (shadcn `Dialog`) — ingen tung tredjeparts-lib.

Egen `head()` med titel/description för SEO ("Bilder från Rävens Bistro i Väse").

### 3. Länk i menyn

Lägg till "Galleri" i `Header.tsx` och som länk i `Footer.tsx`. Diskret, inte tonggivande.

### 4. Smygtitt på startsidan

En auto-scrollande remsa (i stil med befintliga `Marquee`) med 6-8 matbilder strax före boka-sektionen, rubrik *"Ur köket"* och länk *"Fler bilder i galleriet →"*. Återanvänder marquee-mönstret så det känns hemma.

### 5. Punktinsatser på övriga sidor (lätt hand)

- **`/meny`**: `pizza-hero.jpg` som stillbild i hero-sektionen (ovanför nuvarande gradient). Ingen karusell.
- **`/om-oss`**: 1-2 interiörbilder som sektionsbild — ersätter en av de mörka korten. Gör sidan varmare utan att tappa fokus på Roney & Mariette.
- **`/catering`**: `catering-bg-1.jpg` som diskret bakgrund/sektionsbild där det passar.
- **Boka-sektionen på `/`**: `booking-bg.jpg` som dim:ad bakgrund.

### 6. Prestanda-skydd

- Varje `<img>` får `loading="lazy"` (utom det första i hero som blir `fetchpriority="high"`).
- Galleri-bilder begränsas till `w=800` i grid, `w=1600` i lightbox.
- Inga bilder bundlas — alla går via CDN, så bundle-storleken växer inte.

## Vad jag inte gör

- Ingen karusell med pilar — vi enades om att stillbilder + galleri är bättre.
- Ingen ompackning av bilder till `src/assets`. De stannar som `.asset.json`-pekare.
- Rör inte logiken/data — bara presentation.

## Vad du får

- En `/galleri`-sida att skicka folk till.
- En levande startsida som inte är en bildbomb.
- Mat- och miljöbilder förankrade på rätt platser.
- Laddning förblir snabb tack vare CDN-resize + lazy-load.

Säg till om något ska bort eller läggas till, annars sätter jag igång.
