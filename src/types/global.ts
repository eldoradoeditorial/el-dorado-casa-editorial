// src/types/global.ts

/** -----------------------------
 *  SITE (datos generales)
 *  ----------------------------- */

export interface Location {
  city: string;
  country: string;
}

export interface ContactInfo {
  email: string;            // correo general
  whatsapp: string;
  locations: Location[];
  hours: string;            // horario
}

export interface SocialMedia {
  handle: string;
  facebook: string;
  instagram: string;
  twitter: string;
}

export interface Value {
  id: string;
  titulo: string;
  descripcion: string;
  icono: string;
}

export interface Story {
  origin: string;
  inspiration: string;
  philosophy: string;
}

export interface ContactMethod {
  titulo: string;
  detalles: string[]; // líneas cortas (teléfonos, correos, etc.)
  icono: string;
}

export interface SiteCTA {
  primary: string;
  secondary: string;
}

/** (Opcional) Si más adelante mueves navegación/footer al JSON del sitio */
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface FooterLink {
  name: string;
  href: string;
}
export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SiteData {
  name: string;
  shortName: string;
  tagline: string;
  subtitle: string;
  description: string;

  contact: ContactInfo;
  social: SocialMedia;

  mission: string;
  vision: string;
  values: Value[];
  story: Story;
  contactMethods: ContactMethod[];
  cta: SiteCTA;

  /** Opcionales si decides centralizar esto en site.json */
  navigation?: NavItem[];
  footerSections?: FooterSection[];
}

/** -----------------------------
 *  SERVICIOS
 *  ----------------------------- */

export interface Service {
  id: string;
  titulo: string;
  categoria: string;   // p. ej. "editorial" | "design" | ...
  descripcion: string;
  formatos: string[];  // p. ej. ["impreso", "digital"]
  icono: string;       // nombre del icono/lucide/etc.
}

export interface ProcessStep {
  step: string;        // "01", "02", ...
  title: string;       // título corto
  description: string; // explicación
  icon: string;        // icono a mostrar
  time?: string;       // opcional (p. ej. "5-7 días")
}

/** Las categorías admitidas en services.json */
export type ServiceCategory =
  | "editorial"
  | "design"
  | "translation"
  | "legal"
  | "promotion"
  | "special_production";

/** Estructura exacta de services.json */
export interface ServicesData {
  editorial: Service[];
  design: Service[];
  translation: Service[];
  legal: Service[];
  promotion: Service[];
  special_production: Service[];
  process: ProcessStep[];
}

/** -----------------------------
 *  LIBROS / CATÁLOGO
 *  ----------------------------- */

export interface Book {
  id: string;
  titulo: string;
  autor: string;
  genero: string;
  año: number;
  precio: number;
  portada: string;
  sinopsis: string;
  featured: boolean;
  idioma: string;
  formato: string[];
  links: string;
}


export interface BooksData {
  catalog: Book[];
  genres: string[];
}
