# Deploy till Cloudflare Pages (SSR via `_worker.js`)

Projektet är konfigurerat för att byggas av Cloudflare Pages direkt från GitHub-repot
`bistronwebb-max/fox-bistro-remix`. Nitro bygger med presetet `cloudflare-pages` och
lägger SSR-handlern i `.output/public/_worker.js` tillsammans med de statiska assets:en.

## 1. Skapa Pages-projektet

1. Logga in i Cloudflare-dashboarden → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
2. Välj repot `bistronwebb-max/fox-bistro-remix` och production-branchen (oftast `main`).
3. Build-inställningar:
   - **Framework preset:** None
   - **Build command:** `bun install && bun run build`
   - **Build output directory:** `.output/public`
   - **Root directory:** *(tomt)*
4. Spara och kör första bygget.

`wrangler.toml` i repot sätter `compatibility_date` och aktiverar `nodejs_compat`,
så du behöver inte konfigurera compat-flags i UI:t.

## 2. Miljövariabler (Settings → Environment variables)

Lägg in dessa i Cloudflare Pages för **både** "Production" och "Preview".
Markera servernyckeln (`SUPABASE_SERVICE_ROLE_KEY`) som **Encrypted**.

| Variabel                          | Var hittar jag värdet?                                                                       | Anteckning |
| --------------------------------- | -------------------------------------------------------------------------------------------- | ---------- |
| `VITE_SUPABASE_URL`               | Lovable Cloud → Settings → API (Project URL)                                                 | Browser-bundlen läser denna |
| `VITE_SUPABASE_PUBLISHABLE_KEY`   | Lovable Cloud → Settings → API (publishable/anon key)                                        | Säker att exponera i bundle |
| `SUPABASE_URL`                    | Samma som ovan, utan VITE-prefix                                                             | Server-runtime |
| `SUPABASE_PUBLISHABLE_KEY`        | Samma som ovan, utan VITE-prefix                                                             | Server-runtime |
| `SUPABASE_SERVICE_ROLE_KEY`       | Lovable Cloud → Settings → API (service_role key) — **secret**                               | Endast om server functions använder `supabaseAdmin` |
| `LOVABLE_API_KEY`                 | Lovable provisionerar denna automatiskt. Om du använder Lovable AI Gateway, kopiera den från projektets Secrets-vy. | Endast om AI Gateway används |
| `FIRECRAWL_API_KEY`               | Firecrawl-dashboard (om Firecrawl-integrationen används)                                     | Endast om någon server fn anropar Firecrawl |

> **Obs:** Idag har det här projektet *inte* Lovable Cloud aktiverat (inga Supabase-secrets i projektet).
> Listan ovan är en checklista för det fall ni aktiverar det senare. Idag räcker det troligen
> med `LOVABLE_API_KEY` (om AI används) och `FIRECRAWL_API_KEY` (om Firecrawl används).

## 3. Custom domain

1. Cloudflare Pages → projektet → **Custom domains** → **Set up a custom domain** → ange `ravensbistro.com` och `www.ravensbistro.com`.
2. Eftersom domänen är registrerad hos Cloudflare/Loopia/annan så följer Cloudflare guiden:
   antingen flytta namnservrarna till Cloudflare (rekommenderat) eller lägga in CNAME-poster
   som dashboarden visar.
3. SSL utfärdas automatiskt när DNS pekar rätt.

## 4. Verifiera lokalt

```bash
bun install
bun run build       # producerar .output/public/_worker.js + statiska assets
npx wrangler pages dev .output/public   # kör Pages-runtime lokalt
```

## 5. Vad körs som SSR?

Allt under `src/routes/` är SSR i `_worker.js`. Routes under `src/routes/api/public/*`
exponeras som vanliga HTTP-endpoints (webhooks, cron, publika API:er) och kringgår
Lovables auth-skydd — om ni lägger till sådana måste varje handler själv verifiera
anroparen (signatur, secret, etc).