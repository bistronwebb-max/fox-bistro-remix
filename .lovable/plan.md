## Vad jag hittade

WordPress-mediabiblioteket är öppet via `/wp-json/wp/v2/media`, så jag kan hämta originalbilderna direkt — inget behov av Firecrawl eller manuell skrapning. Allt nedan ligger på `xn--rvensbistro-l8a.se/wp-content/uploads/...` i originalupplösning.

**Mat- och miljöbilder (de viktiga):**

| Filnamn | Vad | Föreslagen användning |
|---|---|---|
| `2024/03/Ravens-74-of-108.jpg` | Bistron inifrån, hög upplösning | Hero / om-oss-interiör |
| `2024/04/Ravens-97-of-108.jpg` | Interiör | Reserv / sektion |
| `2024/04/Ravens-102-of-108.jpg` | Interiör | Reserv / sektion |
| `2024/03/image-2-first-sektion.jpg` | Gamla headersektionen | Header-fallback |
| `2024/02/pizza-start-1.jpg` | Vedugnspizza-närbild | Meny-hero eller pizza-kort |
| `2024/03/PSX_20240320_192851.jpg` | Mat/miljö | Galleri |
| `2024/03/PSX_20240320_193417.jpg` | Mat/miljö | Galleri |
| `2024/03/PSX_20240320_193505.jpg` | Mat/miljö | Galleri |
| `2024/04/dinner-omoss123.jpg` | Middagsmiljö | Om-oss-sektion |
| `2024/04/live1.jpg` / `live2.jpg` / `live3.jpg` | Livemusik/event | Evenemang-sektion |
| `2024/04/raven.jpg` | Korp/profil | Dekor |
| `2024/04/Menu-header.png` | Menyheader-grafik | Meny-sida topp |
| `2024/04/415491041…_n.jpg` … `438125007…_n.jpg` (10 st) | Instagramskörd, mat/miljö | Galleri / rätt-kort |
| `2025/02/1000028226.jpg` | Färsk miljöbild | Hero-kandidat |
| `2025/06/495317518…_n.jpg` | Färsk miljöbild | Galleri |
| `2025/09/1000039989.jpg` | Stämningsbild | Galleri |
| `2024/06/bokningbgbg.jpg` | Bokningsbakgrund | Boka-sektion |
| `2024/08/catering-bg-1.jpg` / `cateringen-bgbg.jpg` | Cateringbakgrund | Catering-sida |
| `2025/01/anthony-delanoix-hzgs56Ze49s-unsplash.jpg` | Stockbild (Unsplash) | **Skippas** — inte er egen |

**Headerbilden från Revolution Slider** ligger som `data-lazyload` på startsidan — jag fångar den i samma sväng (`PSX_20240320_192851-scaled.jpg`, redan i listan ovan).

**Logos/grafik** finns redan i `src/assets/scraped/`, jag rör inte dem.

## Plan

1. **Ladda ner** alla matchande bilder från listan ovan till `/tmp` med `curl`.
2. **Verifiera** att filerna är hela och inte 404/0 byte.
3. **Ladda upp** varje fil via `lovable-assets create` och spara pekaren som `src/assets/scraped/<namn>.<ext>.asset.json`. Använd korta, läsbara namn:
   - `interior-1.jpg`, `interior-2.jpg`, `interior-3.jpg`, `interior-old-header.jpg`, `dinner.jpg`
   - `pizza-hero.jpg`, `psx-1.jpg`, `psx-2.jpg`, `psx-3.jpg`
   - `event-live-1.jpg`, `event-live-2.jpg`, `event-live-3.jpg`
   - `food-ig-01.jpg` … `food-ig-10.jpg` (Instagramskörden)
   - `raven.jpg`, `menu-header.png`, `booking-bg.jpg`, `catering-bg-1.jpg`, `catering-bg-2.jpg`
   - `stamning-2025.jpg`, `stamning-2025-late.jpg`, `interior-2025.jpg`
4. **Inga kodändringar i den här rundan.** Bilderna hamnar i biblioteket — du och jag väljer sedan vilken som ska in var (hero, menyhero, om-oss, galleri etc.) i nästa steg.

## Vad jag behöver veta

- **OK att jag hämtar hela listan ovan i ett svep?** Eller vill du att jag plockar bort något (t.ex. hoppa över Instagram-skörden om de känns för "sociala")?
- Den enda jag redan filtrerat bort är Unsplash-stockbilden. Säg till om du vill ha med fler/färre.

Säg "kör" så hämtar jag och laddar upp allt. Sedan tar vi en runda till där vi pekar in bilderna i kod.
