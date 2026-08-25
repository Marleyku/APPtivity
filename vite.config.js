import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/** Public surface only: home, login, create-user. Auth APIs always deny. */
function publicAuthStub() {
  const deny = (res) => {
    res.statusCode = 403;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'user not allowed' }));
  };
  return {
    name: 'public-auth-stub',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const path = (req.url || '').split('?')[0];
        if (path.startsWith('/api/auth/')) return deny(res);
        if (path.startsWith('/api/')) return deny(res);
        next();
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        const path = (req.url || '').split('?')[0];
        if (path.startsWith('/api/')) return deny(res);
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), publicAuthStub()],
  server: { port: 5174, host: true },
  preview: { port: 4174, host: true },
});
