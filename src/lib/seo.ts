import { projects } from "@/data/projects";

export const siteConfig = {
  name: "Anthony Janampa",
  title: "Anthony Janampa | Desarrollador Full Stack Junior",
  description:
    "Portafolio profesional de Anthony Janampa, bachiller en Ingeniería de Sistemas y desarrollador Full Stack Junior especializado en React, TypeScript, Supabase, FastAPI, dashboards, automatización y despliegue cloud.",
  locale: "es_PE",
  email: "anthonyjanampacalderon10@gmail.com",
  phone: "+51 914 299 860",
  location: "Lima, Perú",
  linkedIn: "https://www.linkedin.com/in/anthony-alvaro-janampa-calderon-b7860b39a",
  whatsApp: "https://wa.me/51914299860",
  keywords: [
    "Anthony Janampa",
    "Anthony Alvaro Janampa Calderon",
    "Desarrollador Full Stack Junior Perú",
    "Desarrollador React Lima",
    "Ingeniería de Sistemas Lima",
    "React developer",
    "TypeScript developer",
    "Supabase developer",
    "FastAPI developer",
    "Dashboards web",
    "Portafolio full stack",
    "Soporte TI",
  ],
};

export function getSiteUrl() {
  const envUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined);

  return (envUrl ?? "http://localhost:3000").replace(/\/$/, "");
}

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalizedPath}`;
}

export function jsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: "Bachiller en Ingeniería de Sistemas y Desarrollador Full Stack Junior",
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lima",
      addressCountry: "PE",
    },
    url: getSiteUrl(),
    sameAs: [siteConfig.linkedIn, siteConfig.whatsApp],
    knowsAbout: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "FastAPI",
      "Python",
      "Machine Learning",
      "Dashboards",
      "Seguridad de software",
      "Infraestructura tecnológica",
      "Soporte TI",
    ],
  };
}

export function portfolioJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: siteConfig.title,
    description: siteConfig.description,
    url: getSiteUrl(),
    inLanguage: "es-PE",
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: getSiteUrl(),
    },
    hasPart: projects.map((project) => ({
      "@type": "CreativeWork",
      name: project.title,
      description: project.copy,
      url: absoluteUrl(`/proyectos/${project.slug}`),
      image: absoluteUrl(project.image),
      keywords: project.tags.join(", "),
    })),
  };
}
