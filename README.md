# Euroland IR — Next.js 15 (App Router)

This is the **Next.js 15** conversion of the original Vite + React SPA.

## Stack

- **Framework**: Next.js 15 (App Router)
- **React**: 19
- **Styling**: TailwindCSS v4 (via `@tailwindcss/postcss`)
- **UI**: shadcn/ui + Radix UI
- **Animations**: Framer Motion
- **i18n**: Custom `LanguageContext` (10 locales, lazy-loaded from `/public/locales/`)
- **Theme**: `next-themes` via `ThemeContext`

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in your values:

```bash
cp .env.local.example .env.local
```

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_ANALYTICS_ENDPOINT` | Umami analytics endpoint |
| `NEXT_PUBLIC_ANALYTICS_WEBSITE_ID` | Umami website ID |
| `NEXT_PUBLIC_OAUTH_PORTAL_URL` | OAuth portal URL |
| `NEXT_PUBLIC_APP_ID` | OAuth app ID |
| `NEXT_PUBLIC_FRONTEND_FORGE_API_KEY` | Google Maps proxy API key |
| `NEXT_PUBLIC_FRONTEND_FORGE_API_URL` | Google Maps proxy base URL |

## Project Structure

```
src/
├── app/                  # Next.js App Router pages (page.tsx per route)
│   ├── layout.tsx        # Root layout with providers
│   ├── page.tsx          # Home page
│   ├── platform/         # Platform sub-pages
│   ├── solutions/        # Solutions sub-pages
│   ├── resources/        # Resources sub-pages
│   ├── company/          # Company sub-pages
│   └── legal/            # Legal pages
├── components/           # Shared components
│   ├── layout/           # Navbar, Footer, page layouts
│   └── ui/               # shadcn/ui components
├── contexts/             # React contexts (Language, Theme)
├── data/                 # Static data / translations
├── hooks/                # Custom React hooks
├── lib/                  # Utilities (cn, etc.)
├── locales/              # Locale override files
└── pages/                # Page component implementations
public/
├── locales/              # i18n JSON files (en, fr, es, pt, de, ar, zh, zh-TW, ko, ja)
└── ...                   # Images, videos, SVGs
```

## Key Changes from Original Vite Project

| Item | Original (Vite) | Next.js |
|---|---|---|
| Routing | `wouter` | Next.js App Router (file-based) |
| Links | `import { Link } from "wouter"` | `import Link from "next/link"` |
| Navigation | `useLocation()` | `usePathname()` / `useRouter()` |
| Env vars | `VITE_*` | `NEXT_PUBLIC_*` |
| Entry point | `client/src/main.tsx` | `src/app/layout.tsx` |
| Build tool | Vite | Next.js (Turbopack/webpack) |
