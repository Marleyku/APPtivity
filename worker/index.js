/**
 * Cloudflare Worker (optional production edge).
 * - Serves Vite assets from ASSETS binding
 * - Allowlists public paths; other navigations → /
 * - /api/auth/* always returns { error: "user not allowed" }
 */
const ALLOWED_PATHS = new Set(['/', '/login', '/onboarding/screen-2', '/signup']);

function isStaticAsset(pathname) {
  return (
    pathname.startsWith('/assets/')
    || /\.(png|jpg|jpeg|webp|svg|ico|css|js|map|woff2?|txt|webmanifest)$/i.test(pathname)
  );
}

function denyAuth() {
  return new Response(JSON.stringify({ error: 'user not allowed' }), {
    status: 403,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const { pathname } = url;

    if (pathname.startsWith('/api/')) {
      return denyAuth();
    }

    if (isStaticAsset(pathname)) {
      return env.ASSETS.fetch(request);
    }

    if (pathname === '/signup') {
      url.pathname = '/onboarding/screen-2';
      return Response.redirect(url.toString(), 302);
    }

    if (!ALLOWED_PATHS.has(pathname)) {
      url.pathname = '/';
      url.search = '';
      return Response.redirect(url.toString(), 302);
    }

    // SPA: serve index.html for allowlisted routes
    const indexReq = new Request(new URL('/', url), request);
    return env.ASSETS.fetch(indexReq);
  },
};
