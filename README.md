# APPtivity (public)

Public-facing web surface for **APPtivity**: home, create account, and login only.

Private full-app backups live in [`Marleyku/APPtivity_bak`](https://github.com/Marleyku/APPtivity_bak).

## Public routes

| Path | Page |
|------|------|
| `/` | Home |
| `/login` | Log in |
| `/onboarding/screen-2` | Create account |
| `/signup` | Redirects to create account |

All other paths redirect to `/` with no “coming soon” messaging.

## Auth behavior

Any `/api/auth/*` (and other `/api/*`) request returns:

```json
{ "error": "user not allowed" }
```

Login and create-account forms show that message. No sessions are issued.

## Local development

```bash
npm install
npm run dev
```

App: http://localhost:5174

## Build

```bash
npm run build
npm run preview
```

## Deploy notes

- **Cloudflare Worker** (`worker/index.js` + `wrangler.toml`): edge allowlist + auth deny. Requires Workers write access; then attach `goapptivity.com`.
- **GitHub Pages**: optional; use `npm run build` and publish `dist/` (configure SPA fallback to `index.html`).

Do not point this public host at the private full-stack API until password security is ready.
