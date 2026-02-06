# SunSeeker Website

Marketing site and blog for SunSeeker, built with Astro and deployed to GitHub Pages.

## Tech Stack

- Astro 5
- TypeScript (strict mode)
- Playwright (E2E tests)
- GitHub Actions (CI + Pages deploy)

## Requirements

- Node.js 20+
- npm 10+

## Local Development

```bash
npm ci
npm run dev
```

The site is served at `http://localhost:4321/sunseeker/`.

## Quality Gates

Run the full local validation pipeline:

```bash
npm run validate
```

Available scripts:

- `npm run assets:generate`: generate required social/PWA image assets in `public/`
- `npm run typecheck`: run TypeScript checks
- `npm run test`: run Playwright suite
- `npm run test:ci`: run Playwright in CI mode (single worker)
- `npm run build`: production build

## Deployment

Deploys automatically from `main` via `.github/workflows/deploy.yml`.

The deployment job enforces:

1. dependency install
2. Playwright browser install
3. typecheck
4. E2E tests
5. production build

Only passing builds are published to GitHub Pages.

## Legal

- Privacy policy: `/sunseeker/privacy`
- Terms of service: `/sunseeker/terms`

## Security

See `SECURITY.md` for reporting guidance.

## Tracking

Enterprise readiness follow-up items are tracked in `TODO.md`.
