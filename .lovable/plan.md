## Bakgrund (verifierat via webbsökning)

Molkoms Pizzeria finns och ligger redan som undersida på `rävensbistro.se/molkoms-pizzeria`. Det är alltså **inte två separata kunder** — det är **en verksamhet med två lokaler** som Roney redan driver. Det förenklar berättelsen.

| | Väse Bistro | Molkoms Pizzeria |
|---|---|---|
| Adress | Storgatan 38, 660 57 Väse | Mejerivägen 15, **655 60** Molkom |
| Telefon | 054-18 18 20 | 0553-101 07 |
| Bolag | (Rävens Bistro) | Molkom Pizzeria AB |
| Öppet | Mån–Tor 11–21, Fre–Lör 11–22, Sön 11–21 | **Mån 12–22, Tis–Ons 12–22, Tor–Lör 11–22, Sön 11–22** |
| Tonalitet | Bistro, à la carte, evenemang | Ortens pizzeria, inbakade, familj |

## Mål

Få sajten faktamässigt korrekt (postnummer, öppettider) och berätta den sanna historien — *en familj, två kök* — så Roney känner igen sin verksamhet vid mötet.

## Vad vi gör

### 1. Rätta hårda fakta (snabba men viktiga)
- **Footer (`Footer.tsx`)**: Molkoms öppettider ändras från "Tis–Sön 11–21 · Mån stängt" → "Mån–Ons 12–22 · Tor–Lör 11–22 · Sön 11–22". Postnummer 655 60 läggs till.
- **Molkom-sidan (`molkoms-pizzeria.tsx`)**: Telefon-href fixas (`tel:+46553101 07` har space — ska vara `tel:+46553101 07` → `tel:+46055310107`). Adress får postnummer.
- **Header (`Header.tsx`)**: Samma telefon-fix (`tel:+460553101 07` → `tel:+46055310107`).
- **MarkdownPage banner**: Postnummer och korrekta öppettider för Molkom.

### 2. Byt narrativ från "systerrestaurang" → "samma familj, två lokaler"
- I copy på Molkom-sidan, footer, om-oss och hero-texter: ersätt "vår systerrestaurang" och "drivs av samma familj" med varianter som tydliggör att det är *samma verksamhet*.
- Footer-marquee uppdateras: "Rävens Bistro i Väse · Molkoms Pizzeria i Molkom · Samma kök, två orter".
- Om-oss-sidan får ett stycke om att Roney driver båda och varför.

### 3. Skarpare ortidentitet utan att splittra varumärket
- **Bakgrundsmotiv** (`Motifs.tsx`): Väse = rävar/bestick/glas (finns), Molkom = pizzaskärare/mjöl/ugn (finns). Behålls.
- **Hero-copy mirroring**: Väse-hero "Värmlands bästa matupplevelse" (från riktig sajt) speglas till Molkom-hero med "Ortens pizzeria sen 2016".
- Ingen separat färgaccent — vi håller rött genomgående. Skillnaden ligger i copy, motiv och bilder.

### 4. Mötespaket-finish
- En liten "uppdaterat efter möte med Roney"-flagga längst ner i footern, så Roney ser att fakta är *våra antaganden från offentlig data*, inte påhitt.
- Skapa en intern fil `src/data/oppna-fragor.md` med fält Roney behöver fylla i (lunchpriser, evenemangskalender, allergener, om Molkom har lunchservering, social-media-länkar). Vi nämner den i ett följande chat-svar — den läggs **inte** ut publikt på sajten.

### 5. Vad vi **inte** rör i den här rundan
- Bokningssystem (Google Forms får leva tills Roney sagt ja till Lovable Cloud)
- Beställning online / e-handel
- Domänkoppling
- Designsystemets färger/typografi (sitter bra)

## Teknisk sammanfattning

Filer som ändras:
- `src/components/site/Header.tsx` — telefon-href-fix
- `src/components/site/Footer.tsx` — Molkom öppettider + postnummer + marquee-text
- `src/components/site/MarkdownPage.tsx` — Molkom öppettider + postnummer i banner
- `src/routes/molkoms-pizzeria.tsx` — telefon-href, adress, copy "systerrestaurang" → "vår pizzeria i Molkom"
- `src/routes/om-oss.tsx` — stycke om att Roney driver båda
- `src/routes/faq.tsx` — korrekta öppettider, klargör att det är samma verksamhet

Nya filer:
- `src/data/oppna-fragor.md` — internt arbetsdokument inför Roney-mötet (inte publikt)

Inga nya paket. Inga schemaändringar. Ingen ny route.
