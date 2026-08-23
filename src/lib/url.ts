/* Joins a path onto the configured `base` so links keep working whether the
   site is served from a subpath (GitHub Pages) or a domain root. */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (path === '/') return base || '/';
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

/* True when `href` is the page currently being rendered. */
export function isActive(href: string, pathname: string): boolean {
  const clean = (s: string) => s.replace(import.meta.env.BASE_URL.replace(/\/$/, ''), '').replace(/\/$/, '') || '/';
  return clean(pathname) === clean(href);
}
