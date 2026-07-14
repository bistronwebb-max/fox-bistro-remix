## Ändringar

### 1. Ta bort boknings-CTA:er (behåll telefon-CTA)
Startsidan (`src/routes/index.tsx`):
- Ta bort "Boka bord"-knappen i hero (`href="#boka"`).
- Ta bort hela BOOKING-sektionen (`<section id="boka">`) inkl. kontakt-kortet med mailadresser och Ring-knapp.

Kontaktsidan (`src/routes/kontakta-oss.tsx`):
- Ta bort ev. "Skicka förfrågan"-knapp.
- **Behåll** "Ring oss"-CTA (telefonknapp).
- Mailadresser kvar som kopierbar text.

Facebook-CTA och telefon-CTA får stanna överallt.

### 2. Ny "Evenemang"-sektion på startsidan
Placeras direkt under Veckans lunch, före "En smygtitt". Redaktionell stil som övriga kapitel:
- Eyebrow: "Kapitel — Stämningen"
- Rubrik: "På Rävens har vi ofta evenemang."
- Brödtext: "Trubadurer, band, dans, quizkvällar och matcher på storbilds-TV. Håll dig uppdaterad — och planera gärna ditt nästa kalas hos oss. Evenemangen varierar med olika teman. Aktuella evenemang hittar du alltid på vår Facebook-sida."
- CTA (Facebook): "Se aktuella evenemang på Facebook" → `RAVEN.facebookUrl`.
- Visuell accent: ett av `event-live-1/2/3.jpg`.

### 3. Större logga i headern
`src/components/site/Header.tsx`: öka logga från `h-9` till ca `h-12` (mobil `h-10`), justera padding vid behov.

### 4. Dölj "Edit with Lovable"-badge
Sätts via `publish_settings--set_badge_visibility` med `hide_badge: true` (kräver Pro-plan; ber om godkännande vid körning).

## Tekniska noter
- När `#boka`-sektion tas bort: sök efter kvarvarande länkar till `#boka` och rensa.
- Rent UI, ingen backend.
