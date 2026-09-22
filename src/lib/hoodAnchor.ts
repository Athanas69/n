export function hoodAnchor(name: string) {
  return `hood-${name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}`;
}
