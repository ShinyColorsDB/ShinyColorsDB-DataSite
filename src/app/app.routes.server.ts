import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: 'notfound', renderMode: RenderMode.Server, status: 404 },
  { path: '**', renderMode: RenderMode.Server },
];
