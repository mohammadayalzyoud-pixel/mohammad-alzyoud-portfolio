# Mohammad Alzyoud — Developer Portfolio

A production-ready bilingual portfolio focused on Mohammad's real Flutter and web projects. English is the default language, with complete Arabic RTL support, system-aware light/dark themes, localized SEO, and responsive layouts.

## Run locally

Requirements: Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open the local address shown in the terminal. Production validation:

```bash
npm run lint
npm run build
```

## Tech stack

- Next.js App Router and TypeScript (Vinext/Sites runtime)
- React and Tailwind CSS
- Locale-based routing and JSON message catalogs
- `next/image` for project imagery
- CSS-based theme system with persisted user preference

## Project structure

- `app/[locale]/page.tsx` — localized `/en` and `/ar` routes
- `messages/en.json`, `messages/ar.json` — all visible translated copy
- `components/` — navigation, controls, project showcase, and reusable UI
- `data/profile.ts` — contact links and optional CV/GitHub values
- `data/projects.ts` — centralized project metadata, assets, and optional links
- `public/projects/` — project screenshot folders

## Edit content and translations

Update English text in `messages/en.json` and Arabic text in `messages/ar.json`. Keep the same key structure in both files. Project technologies and asset paths are centralized in `data/projects.ts`; personal links are in `data/profile.ts`.

To add a language, create `messages/{locale}.json`, add it to the locale map and `generateStaticParams` in `app/[locale]/page.tsx`, then add it to the sitemap and language switcher logic.

## Add real project screenshots

Replace the neutral SVG placeholders inside:

- `public/projects/delni-app/`
- `public/projects/delni-web/`
- `public/projects/almondas/`

Then update each `image` path in `data/projects.ts`. Prefer optimized WebP or AVIF files with a consistent landscape crop. The current placeholders intentionally do not invent product screens.

## Add links later

In `data/projects.ts`, replace the relevant `null` value under `links.live`, `links.store`, or `links.github` with the real URL, then render the corresponding CTA in `ProjectShowcase`. GitHub is intentionally absent until a real profile URL is available.

To add the CV, copy it to `public/Mohammad_Alzyoud_CV.pdf`, change `cv` in `data/profile.ts` to `"/Mohammad_Alzyoud_CV.pdf"`, and render a download button only when that value is present.

## Contact details

Edit `data/profile.ts` to change email, phone, LinkedIn, GitHub, or CV values. Location and localized labels live in the message catalogs.

## Deploy

The project is configured for OpenAI Sites. It can also be connected to Vercel: import the repository, keep the default build command, and deploy. After receiving a real production domain, set `metadataBase` in `app/layout.tsx` so canonical and social URLs become absolute. No environment variables or backend services are required.
