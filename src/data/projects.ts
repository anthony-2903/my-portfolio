export type ProjectImage = {
  src: string;
  width: number;
  height: number;
  label: string;
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  type: string;
  image: string;
  secondaryImage?: string;
  featured?: boolean;
  copy: string;
  tags: string[];
  gallery: ProjectImage[];
};

export const projects: Project[] = [
  {
    slug: "lideramina",
    number: "01",
    title: "LideraMina",
    type: "Plataforma de evaluación y analítica",
    image: "/projects/lideramina-cover.webp",
    secondaryImage: "/projects/lideramina-dashboard.webp",
    featured: true,
    copy: "Plataforma de evaluación psicológica y liderazgo para minería. Centraliza evaluaciones, entrevistas y seguridad conductual en dashboards, indicadores y reportes PDF.",
    tags: ["React", "TypeScript", "Supabase", "Recharts", "PWA"],
    gallery: [
      ["01", 1600, 1282, "Dashboard general"],
      ["02", 1600, 1016, "Diagnóstico de percepción"],
      ["03", 1600, 7253, "Reporte de madurez en seguridad"],
      ["04", 1600, 2848, "Resultados del diagnóstico"],
      ["05", 1600, 1698, "Driver Safety · Vista 1"],
      ["06", 1600, 1440, "Driver Safety · Vista 2"],
      ["07", 1600, 1443, "Driver Safety · Vista 3"],
      ["08", 1600, 4187, "Landing page"],
      ["09", 1600, 799, "Inicio de sesión"],
      ["10", 1600, 1173, "Resultado individual · Vista 1"],
      ["11", 1600, 2685, "Resultado individual · Vista 2"],
      ["12", 1600, 3218, "Dashboard de competencias"],
      ["13", 1600, 1039, "Seguimiento de aplicación"],
    ].map(([file, width, height, label]) => ({ src: `/projects/gallery/lideramina/${file}.webp`, width: Number(width), height: Number(height), label: String(label) })),
  },
  {
    slug: "husheniid-studio",
    number: "02",
    title: "Husheniid Studio",
    type: "Catálogo y gestión de proyectos",
    image: "/projects/husheniid-cover.webp",
    secondaryImage: "/projects/husheniid-dashboard.webp",
    copy: "Sitio para un estudio de muebles de melamina a medida, con portafolio multimedia, catálogo de materiales, contacto por WhatsApp y panel administrativo.",
    tags: ["React", "TypeScript", "Supabase", "Cloudinary"],
    gallery: [
      ["01", 1600, 923, "Gestión de categorías"],
      ["02", 1600, 799, "Panel administrativo"],
      ["03", 1600, 7910, "Landing page completa"],
      ["04", 1600, 799, "Inicio de sesión"],
      ["05", 1600, 2692, "Portafolio de proyectos"],
    ].map(([file, width, height, label]) => ({ src: `/projects/gallery/husheniid-studio/${file}.webp`, width: Number(width), height: Number(height), label: String(label) })),
  },
  {
    slug: "sigescont",
    number: "03",
    title: "SIGESCONT",
    type: "Landing page corporativa",
    image: "/projects/sigescont-cover.webp",
    copy: "Experiencia corporativa para una empresa de gestión, contabilidad y tecnología, con servicios interactivos, casos, formulario de contacto, WhatsApp, Maps y SEO.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Radix UI", "Vercel"],
    gallery: [
      { src: "/projects/gallery/sigescont/01.webp", width: 1600, height: 9119, label: "Landing page completa" },
    ],
  },
  {
    slug: "mingeotop",
    number: "04",
    title: "MINGEOTOP",
    type: "Plataforma geoespacial corporativa",
    image: "/projects/mingeotop-cover.webp",
    secondaryImage: "/projects/mingeotop-projects.webp",
    copy: "Sitio corporativo para servicios topográficos y geoespaciales, con portafolio dinámico, cotizaciones, WhatsApp y administración protegida de contenido multimedia.",
    tags: ["React", "Three.js", "Framer Motion", "Supabase", "Cloudinary"],
    gallery: [
      ["01", 1600, 799, "Formulario de contacto"],
      ["02", 1600, 9320, "Landing page completa"],
      ["03", 1600, 799, "Inicio de sesión"],
      ["04", 1600, 1641, "Portafolio de proyectos"],
      ["05", 1600, 1455, "Catálogo de servicios"],
    ].map(([file, width, height, label]) => ({ src: `/projects/gallery/mingeotop/${file}.webp`, width: Number(width), height: Number(height), label: String(label) })),
  },
  {
    slug: "residencia-pro",
    number: "05",
    title: "Residencia Pro",
    type: "Gestión residencial integral",
    image: "/projects/residencia-cover.webp",
    secondaryImage: "/projects/residencia-dashboard.webp",
    copy: "Ecosistema digital para propietarios y administradores que reúne clientes, expensas, finanzas, reservas, mantenimiento, infraestructura y control de garita.",
    tags: ["Dashboard", "Finanzas", "Reservas", "Administración"],
    gallery: [
      ["01", 1600, 2289, "Gestión de agua"],
      ["02", 1600, 1786, "Gestión de clientes"],
      ["03", 1600, 893, "Dashboard principal"],
      ["04", 1600, 1461, "Expensas · Vista 1"],
      ["05", 1600, 1598, "Expensas · Vista 2"],
      ["06", 1600, 2295, "Módulo de finanzas"],
      ["07", 1600, 893, "Control de garita"],
      ["08", 1600, 893, "Gestión de infraestructura"],
      ["09", 1600, 3271, "Landing page completa"],
      ["10", 1600, 799, "Inicio de sesión"],
      ["11", 1600, 1083, "Mantenimiento"],
      ["12", 1600, 893, "Reservas"],
    ].map(([file, width, height, label]) => ({ src: `/projects/gallery/residencia-pro/${file}.webp`, width: Number(width), height: Number(height), label: String(label) })),
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
