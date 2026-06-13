## Vad du ser

Den svarta rutan i screenshoten är ett team-kort på `/om-oss` där vi bara har logga + namn men ingen bild. Just nu listar vi Roney (har foto) och Mariette (har bar-fotot). Resten av personalen står inte med ännu — så ingen "tom svart ruta" är aktiv på sidan i kod, men estetiskt är de mörka platshållarna ändå tråkiga.

## Bilder vi faktiskt har / kan hämta

Jag scrapade din gamla sajt och bilderna ligger fortfarande öppet på WordPress (även om "spara som" inte funkar i Revolution Slider). Det här är de användbara:

- `image-2-first-sektion.jpg` — gammal headersektion, interiör
- `Ravens-74-of-108-scaled.jpg` — bistron inifrån, hög upplösning
- `pizza-start-1.jpg` — vedugnspizza-närbild
- `elementor/thumbs/1000039989-…jpg` — stämningsbild
- `Roney-e1712605911292.png` — porträtt Roney (renare än den vi har)
- `Johans-ansikte-480x480.png` — porträtt Johan (anställd)
- `team2.jpg`, `team3.jpg` — gamla teamporträtt (kollar vilka det är)

Headerbilden från Revolution Slider på startsidan går också att fiska ut via dess JSON-endpoint — jag tar den i samma sväng.

## Förslag

1. **Ladda ner** ovanstående bilder, ladda upp dem som Lovable-assets (CDN), och rensa bort de gamla filerna när allt är pekat rätt.
2. **Använd den gamla "first-sektion"-headern** (eller Revolution Slider-headern om den är snyggare) som bakgrund i de två stora korten på `/om-oss` ("Tradition & kvalitet" / "Evenemang & festligheter") istället för platt svart. Mörk overlay ovanpå så honungsgul + vit text fortsätter klara WCAG AA.
3. **Lägg till Johan** som ett tredje team-kort på `/om-oss` med hans porträtt, så raden blir tre kort istället för två + ett tomrum. (Du säger till vilken roll han har — "Kock"?)
4. **Byt ut Roney-fotot** mot den renare PNG:en från wp-uploads om du tycker den ser bättre ut — jag visar båda först.
5. **Inga ändringar** på meny-/stat-korten på startsidan — de är medvetet rena och ska inte ha bakgrundsbilder bakom siffrorna.

## Vad jag behöver veta innan jag bygger

- Vill du att jag tar med Johan i teamet nu, eller väntar vi tills du har en titel/text till honom?
- OK att jag byter de mörka om-oss-korten till foto + overlay, eller vill du behålla dem helt platt svarta som nu?

Säg "kör" så hämtar jag bilderna, laddar upp dem och uppdaterar `/om-oss`.
