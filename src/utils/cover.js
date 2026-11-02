export function getCoverUrl(isbn) {
  const clean = String(isbn ?? "").replace(/[^0-9X]/gi, "");
  if (!clean) return "";
  return `https://covers.openlibrary.org/b/isbn/${clean}-L.jpg?default=false`;
}
 