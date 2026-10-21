import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { join } from 'node:path';

const browserDistFolder = join(import.meta.dirname, '../browser');

// Extra hosts on top of `security.allowedHosts` in angular.json
// (comma-separated, e.g. ALLOWED_HOSTS="my-app.vercel.app").
const extraAllowedHosts = (process.env['ALLOWED_HOSTS'] ?? '')
  .split(',')
  .map((h) => h.trim())
  .filter(Boolean);

// The Express app is exported so that it can be used by serverless Functions (api/index.mjs).
export function app(): express.Express {
  const server = express();
  const angularApp = new AngularNodeAppEngine({ allowedHosts: extraAllowedHosts });

  server.disable('x-powered-by');

  // Serve static files from /browser
  server.use(
    express.static(browserDistFolder, {
      maxAge: '1y',
      index: false,
      redirect: false,
    }),
  );

  // All other requests are rendered by Angular
  server.use((req, res, next) => {
    angularApp
      .handle(req)
      .then((response) => (response ? writeResponseToNodeResponse(response, res) : next()))
      .catch(next);
  });

  return server;
}

// Start the server when run directly (node server.mjs) or under PM2.
if (isMainModule(import.meta.url) || process.env['pm_id'] !== undefined) {
  const port = process.env['PORT'] || 4000;
  app().listen(port, (error?: Error) => {
    if (error) {
      throw error;
    }
    console.log(`${new Date().toLocaleTimeString()}`);
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

export const reqHandler = createNodeRequestHandler(app());
