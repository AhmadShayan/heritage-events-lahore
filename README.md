# Heritage Events Lahore

Professional website built for **Heritage Events Lahore** — a premier marriage hall and event venue located in Daroghawala, Lahore, Pakistan.

**Google Maps Rating:** 4.4★ · 206+ reviews
**Capacity:** 300–350 guests
**Address:** Main Rajbah Road, Daroghawala, Lahore
**Phone:** 0322 6182626

---

## Pages

| Page | Description |
|------|-------------|
| `/` | Home — hero, features, gallery preview, reviews, CTA |
| `/about` | About the venue — story, stats, values |
| `/services` | Events hosted — weddings, walima, mehndi, corporate |
| `/gallery` | Full photo gallery (10 real photos from Google Maps) |
| `/contact` | Address, phone, WhatsApp, embedded Google Map |

## Tech Stack

- **Next.js 15** (App Router)
- **Tailwind CSS v4**
- **TypeScript**
- **Google Places API (New)** — photos proxied server-side via `/api/photo`

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3001`

> Requires `GOOGLE_PLACES_API_KEY` in `.env.local`

## Deploy

```bash
npx vercel
```

Set `GOOGLE_PLACES_API_KEY` as an environment variable in Vercel dashboard.

---

*Built by Ahmasoft as part of the LocalLaunch client website pipeline.*
