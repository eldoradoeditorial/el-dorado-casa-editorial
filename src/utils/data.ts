import siteJson from "../data/site.json";
import servicesJson from "../data/services.json";
import booksJson from "../data/books.json";

import type {
  SiteData,
  ServicesData,
  BooksData,
  Book,
  Service,
} from "../types/global";

// =========================
// Data cargada desde JSON
// =========================
export const siteData: SiteData = siteJson as SiteData;
export const servicesData: ServicesData = servicesJson as ServicesData;
export const booksData: BooksData = booksJson as BooksData;

// =========================
// Servicios (helpers)
// =========================
export const getAllServices = (): Service[] => [
  ...servicesData.editorial,
  ...servicesData.design,
  ...servicesData.translation,
  ...servicesData.legal,
  ...servicesData.promotion,
  ...servicesData.special_production,
];

export const getServicesByCategory = (
  category: keyof ServicesData
): Service[] => {
  if (category === "process") return [];
  return servicesData[category] as Service[];
};

export const getServiceById = (id: string): Service | undefined =>
  getAllServices().find((s) => s.id === id);

// =========================
export const getFeaturedBooks = (): Book[] =>
  booksData.catalog.filter((book) => book.featured);

// Filtro por género robusto (normaliza y case-insensitive)
export const getBooksByGenre = (genre: string): Book[] => {
  const g = (genre || "").trim().toLowerCase();
  if (!g || g === "todos") return booksData.catalog;
  return booksData.catalog.filter(
    (b) => (b.genero || "").trim().toLowerCase() === g
  );
};

export const getBookById = (id: string): Book | undefined =>
  booksData.catalog.find((book) => book.id === id);

// Link de compra (obligatorio en tu tipo Book)
export const getPurchaseHref = (book: Book): string => {
  return book.links;
};

// Portada con fallback (si no viene portada, usa una imagen por defecto)
export const getBookCover = (book: Book): string => {
  const src = (book.portada ?? "").trim();
  return src ? src : "/images/books/placeholder.svg";
};

// =========================
// Home: siempre 3 libros.
// - Si hay >=3 featured → devuelve los 3 featured más recientes.
// - Si hay 1 o 2 featured antiguos → los incluye y reemplaza los no destacados más viejos entre los 3 recientes.
// - Si no hay featured → 3 más recientes.
// =========================
export const getHomeBooks = (n = 3): Book[] => {
  const byRecent = booksData.catalog.slice().sort((a, b) => b.año - a.año);
  const featuredAll = booksData.catalog
    .filter((b) => b.featured)
    .sort((a, b) => b.año - a.año);

  if (featuredAll.length >= n) return featuredAll.slice(0, n);

  const selection = byRecent.slice(0, n);

  for (const fb of featuredAll) {
    if (!selection.some((s) => s.id === fb.id)) {
      let idxToReplace = -1;
      let oldestYear = Infinity;
      for (let i = 0; i < selection.length; i++) {
        const s = selection[i];
        if (!s.featured && s.año < oldestYear) {
          oldestYear = s.año;
          idxToReplace = i;
        }
      }
      if (idxToReplace !== -1) {
        selection[idxToReplace] = fb;
      }
    }
  }

  return selection
    .filter((b, i, arr) => arr.findIndex((x) => x.id === b.id) === i)
    .sort((a, b) => b.año - a.año)
    .slice(0, n);
};

// =========================
// Utilidades varias
// =========================
export const formatPrice = (price: number): string =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(price);

export const getLocationsString = (): string => {
  const locs = siteData.contact?.locations ?? [];
  return locs.length
    ? locs.map((l) => `${l.city}, ${l.country}`).join(" / ")
    : "";
};

export const getPrimaryLocation = (): string => {
  const first = siteData.contact?.locations?.[0];
  return first ? `${first.city}, ${first.country}` : "";
};

// Categorías de servicios
export const CATEGORIES = {
  EDITORIAL: "editorial",
  DESIGN: "design",
  TRANSLATION: "translation",
  LEGAL: "legal",
  PROMOTION: "promotion",
  SPECIAL_PRODUCTION: "special_production",
} as const;

// Lista de géneros normalizada (pone "Todos" primero y evita duplicados)
export const BOOK_GENRES: string[] = [
  "Todos",
  ...Array.from(
    new Set((booksData.genres || []).filter((g) => g && g !== "Todos"))
  ),
];
