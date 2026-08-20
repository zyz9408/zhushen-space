/** Resolve a file from Vite's public directory under the active deployment base. */
export function appPath(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  return base.replace(/\/?$/, '/') + path.replace(/^\/+/, '');
}
