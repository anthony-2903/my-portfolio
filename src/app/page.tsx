import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Database,
  Download,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  ServerCog,
} from "lucide-react";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import {
  SiFastapi,
  SiGit,
  SiGithub,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRender,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";
import { projects } from "@/data/projects";
import { jsonLdScript, personJsonLd, portfolioJsonLd } from "@/lib/seo";

const tools = [
  { name: "React", icon: SiReact, color: "#61dafb" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
  { name: "Vite", icon: SiVite, color: "#a855f7" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
  { name: "Supabase", icon: SiSupabase, color: "#3ecf8e" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5fa04e" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169e1" },
  { name: "Python", icon: SiPython, color: "#ffd43b" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff" },
  { name: "Render", icon: SiRender, color: "#46e3b7" },
  { name: "Git", icon: SiGit, color: "#f05032" },
];

const experience = [
  {
    period: "1 año y medio",
    role: "Asistente TI",
    company: "Universidad Peruana Unión",
    description:
      "Soporte a laboratorios especializados de software, equipos de cómputo, conectividad de red, instalación de software y atención de incidencias.",
    tags: ["Soporte TI", "Laboratorios", "Redes", "Infraestructura"],
  },
  {
    period: "Prácticas",
    role: "Desarrollo Frontend",
    company: "CUDESI S.A.C.",
    description:
      "Desarrollo de interfaces web, componentes frontend, maquetación responsive y vistas orientadas a mejorar la presentación de información.",
    tags: ["React", "Responsividad", "UI", "Componentes"],
  },
  {
    period: "Prácticas",
    role: "Desarrollo de Sistema Kardex",
    company: "Santa Catalina, contrata de Raura",
    description:
      "Participación en un sistema Kardex para control, registro, validación y seguimiento interno de información operativa.",
    tags: ["Kardex", "Datos", "Validación", "Trazabilidad"],
  },
];

const skillGroups = [
  {
    icon: Code2,
    title: "Frontend",
    description: "Interfaces web modernas, accesibles y adaptables.",
    skills: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Radix UI", "Framer Motion"],
  },
  {
    icon: Database,
    title: "Backend & Datos",
    description: "APIs, bases de datos y procesamiento de información.",
    skills: ["Python", "FastAPI", "Node.js", "Supabase", "PostgreSQL", "Pandas", "NumPy"],
  },
  {
    icon: ShieldCheck,
    title: "Seguridad & Calidad",
    description: "Aplicaciones protegidas, mantenibles y verificables.",
    skills: ["Auth", "Roles", "RLS", "Validación", "ESLint", "Vitest", "Playwright"],
  },
  {
    icon: ServerCog,
    title: "DevOps & Cloud",
    description: "Publicación, configuración y operación de proyectos web.",
    skills: ["Git", "GitHub", "Vercel", "Render", "Cloudflare", "Variables de entorno", "AWS básico"],
  },
];

const strengths = [
  "Trabajo en equipo",
  "Adaptabilidad",
  "Aprendizaje continuo",
  "Código modular",
  "Documentación técnica",
];

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(personJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(portfolioJsonLd()) }}
      />
      <nav className="nav-shell" aria-label="Navegación principal">
        <a href="#inicio" className="nav-identity" aria-label="Ir al inicio">
          <span className="brand-mark">AJ<span>.</span></span>
          <span className="brand-copy">
            <strong>Anthony Janampa</strong>
            <small>Full Stack Junior</small>
          </span>
        </a>
        <div className="nav-links">
          <a href="#sobre-mi"><span>01</span>Sobre mí</a>
          <a href="#experiencia"><span>02</span>Experiencia</a>
          <a href="#proyectos"><span>03</span>Proyectos</a>
          <a href="#habilidades"><span>04</span>Habilidades</a>
        </div>
        <a href="#contacto" className="nav-cta">
          <i aria-hidden="true" />
          <span>Disponible</span>
          <strong>Hablemos</strong>
          <ArrowUpRight size={15} />
        </a>
      </nav>

      <aside className="social-rail" aria-label="Redes sociales">
        <a
          className="social-button whatsapp-button"
          href="https://wa.me/51914299860?text=Hola%20Anthony%2C%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar%20contigo."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Enviar mensaje por WhatsApp"
          title="WhatsApp"
        >
          <FaWhatsapp aria-hidden="true" />
          <span className="social-tooltip">Escríbeme por WhatsApp</span>
        </a>
        <a
          className="social-button linkedin-button"
          href="https://www.linkedin.com/in/anthony-alvaro-janampa-calderon-b7860b39a"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visitar perfil de LinkedIn"
          title="LinkedIn"
        >
          <FaLinkedinIn aria-hidden="true" />
          <span className="social-tooltip">Visita mi LinkedIn</span>
        </a>
      </aside>

      <section id="inicio" className="hero section-shell">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow hero-glow-one" aria-hidden="true" />
        <div className="hero-glow hero-glow-two" aria-hidden="true" />

        <div className="hero-content">
          <div className="eyebrow fade-in">
            <span className="status-dot" />
            Disponible para nuevas oportunidades
          </div>
          <p className="hero-kicker fade-in delay-1">Hola, soy Anthony Janampa</p>
          <h1 className="fade-in delay-1" data-gsap-title>
            Construyo soluciones web full stack que <em>resuelven.</em>
          </h1>
          <p className="hero-copy fade-in delay-2">
            Bachiller en Ingeniería de Sistemas enfocado en React, TypeScript,
            Supabase, FastAPI, dashboards, automatización y despliegue cloud.
          </p>
          <div className="hero-actions fade-in delay-2">
            <a href="#experiencia" className="button button-primary">
              Conoce mi trabajo <ArrowDown size={17} />
            </a>
            <a
              href="/cv-anthony-janampa.pdf"
              download
              className="button button-secondary"
            >
              <Download size={17} /> Descargar CV
            </a>
          </div>
        </div>

        <div className="hero-side fade-in delay-3">
          <div className="code-card">
            <div className="code-card-top">
              <div className="window-dots"><i /><i /><i /></div>
              <span>developer.ts</span>
            </div>
            <pre aria-label="Resumen profesional en formato código">
              <code className="typing-code" aria-hidden="true">
                <span className="typing-line line-1"><span className="code-purple">const</span> developer = &#123;</span>
                <span className="typing-line line-2">  <span className="code-blue">name</span>: <span className="code-green">&quot;Anthony&quot;</span>,</span>
                <span className="typing-line line-3">  <span className="code-blue">focus</span>: <span className="code-green">&quot;Full Stack&quot;</span>,</span>
                <span className="typing-line line-4">  <span className="code-blue">frontend</span>: [<span className="code-green">&quot;React&quot;</span>, <span className="code-green">&quot;TypeScript&quot;</span>, <span className="code-green">&quot;Tailwind&quot;</span>],</span>
                <span className="typing-line line-5">  <span className="code-blue">backend</span>: [<span className="code-green">&quot;FastAPI&quot;</span>, <span className="code-green">&quot;Node.js&quot;</span>, <span className="code-green">&quot;Supabase&quot;</span>],</span>
                <span className="typing-line line-6">  <span className="code-blue">database</span>: <span className="code-green">&quot;PostgreSQL + RLS&quot;</span>,</span>
                <span className="typing-line line-7">  <span className="code-blue">language</span>: <span className="code-green">&quot;Python&quot;</span>,</span>
                <span className="typing-line line-8">  <span className="code-blue">workflow</span>: [<span className="code-green">&quot;Git&quot;</span>, <span className="code-green">&quot;GitHub&quot;</span>],</span>
                <span className="typing-line line-9">  <span className="code-blue">mindset</span>: <span className="code-green">&quot;keep learning&quot;</span></span>
                <span className="typing-line line-10">&#125;;<span className="typing-cursor" /></span>
              </code>
            </pre>
          </div>
          <div className="floating-tag tag-react">React</div>
          <div className="floating-tag tag-next">Supabase</div>
        </div>

        <a href="#sobre-mi" className="scroll-hint" aria-label="Desplazarse a Sobre mí">
          <span>Scroll</span><ArrowDown size={16} />
        </a>
      </section>

      <section className="tools-marquee" aria-label="Herramientas que utilizo">
        <div className="marquee-heading section-shell">
          <span>Herramientas que utilizo</span>
          <span>Stack en constante evolución</span>
        </div>
        <div className="marquee-window">
          <div className="marquee-track">
            {[...tools, ...tools].map(({ name, icon: Icon, color }, index) => (
              <div
                className="tool-pill"
                key={`${name}-${index}`}
                aria-hidden={index >= tools.length}
              >
                <Icon style={{ color }} aria-hidden="true" />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre-mi" className="about section-shell content-section">
        <div className="section-number">01</div>
        <div className="about-layout" data-gsap-mask>
          <div>
            <p className="section-label">Sobre mí</p>
            <h2>Curiosidad técnica.<br /><span>Impacto real.</span></h2>
          </div>
          <div className="about-copy">
            <p className="lead">
              Soy bachiller en Ingeniería de Sistemas y desarrollador Full Stack
              Junior con experiencia en proyectos web, dashboards, reportes y soporte TI.
            </p>
            <p>
              Trabajo con React, TypeScript, Supabase, FastAPI y Python para
              transformar ideas en productos digitales claros y funcionales,
              cuidando seguridad, documentación, despliegue y mantenimiento.
            </p>
            <div className="facts">
              <div><strong>6+</strong><span>Proyectos web</span></div>
              <div><strong>1.5</strong><span>Años en soporte TI</span></div>
              <div><strong>∞</strong><span>Ganas de aprender</span></div>
            </div>
            <div className="strength-list">
              {strengths.map((strength) => (
                <span key={strength}>{strength}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experiencia" className="experience content-section">
        <div className="section-shell">
          <div className="section-heading">
            <div>
              <p className="section-label">Trayectoria</p>
              <h2 data-gsap-title>Experiencia que<br /><span>construye criterio.</span></h2>
            </div>
            <p>Una ruta entre desarrollo full stack, soporte tecnológico y operaciones.</p>
          </div>
          <div className="timeline">
            {experience.map((item, index) => (
              <article className="timeline-item" key={item.company}>
                <div className="timeline-index">0{index + 1}</div>
                <div className="timeline-date">{item.period}</div>
                <div className="timeline-content">
                  <h3>{item.role}</h3>
                  <p className="company">{item.company}</p>
                  <p className="description">{item.description}</p>
                  <div className="tag-list">
                    {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="proyectos" className="projects section-shell content-section">
        <div className="section-heading" data-gsap-mask>
          <div>
            <p className="section-label">Proyectos</p>
            <h2 data-gsap-title>Ideas convertidas en<br /><span>soluciones reales.</span></h2>
          </div>
          <p>
            Este espacio presenta el proceso, la tecnología y el impacto de cada proyecto.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <Link
              className={`project-card${project.featured ? " project-featured" : ""}`}
              key={project.number}
              href={`/proyectos/${project.slug}`}
              aria-label={`Ver todas las imágenes de ${project.title}`}
            >
              <div className="project-preview">
                <Image
                  className="project-cover"
                  data-gsap-parallax
                  src={project.image}
                  alt={`Vista principal del proyecto ${project.title}`}
                  fill
                  sizes={project.featured ? "(max-width: 680px) 100vw, 1180px" : "(max-width: 960px) 50vw, 580px"}
                />
                {project.secondaryImage && (
                  <div className="project-secondary">
                    <Image
                      src={project.secondaryImage}
                      alt={`Vista interna del proyecto ${project.title}`}
                      fill
                      sizes="220px"
                    />
                  </div>
                )}
                <span className="project-number">{project.number}</span>
                <span className="project-status">Proyecto desarrollado</span>
              </div>
              <div className="project-body">
                <div>
                  <span className="project-type">{project.type}</span>
                  <h3>{project.title}</h3>
                </div>
                <ArrowUpRight size={21} aria-hidden="true" />
                <p>{project.copy}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="habilidades" className="skills section-shell content-section">
        <div className="section-heading" data-gsap-mask>
          <div>
            <p className="section-label">Stack técnico</p>
            <h2 data-gsap-title>Herramientas para<br /><span>hacer que suceda.</span></h2>
          </div>
          <p>Tecnología con propósito, desde la interfaz hasta los datos.</p>
        </div>
        <div className="skills-grid">
          {skillGroups.map(({ icon: Icon, title, description, skills }) => (
            <article className="skill-card" key={title}>
              <div className="skill-icon"><Icon size={23} /></div>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="skill-tags">
                {skills.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </article>
          ))}
        </div>
        <div className="education-banner">
          <div className="education-icon"><ServerCog size={28} /></div>
          <div>
            <span>Formación académica</span>
            <h3>Bachiller en Ingeniería de Sistemas</h3>
            <p>Universidad Peruana Unión · Lima, Perú</p>
          </div>
          <div className="language">
            <span>Idiomas</span>
            <p>Español nativo · Inglés intermedio II</p>
          </div>
        </div>
      </section>

      <section id="contacto" className="contact content-section">
        <div className="contact-glow" aria-hidden="true" />
        <div className="section-shell contact-inner" data-gsap-mask>
          <p className="section-label">Contacto</p>
          <h2 data-gsap-title>¿Construimos algo<br /><span>juntos?</span></h2>
          <p className="contact-copy">
            Estoy abierto a oportunidades donde pueda aportar, aprender y crear
            productos digitales con impacto.
          </p>
          <a className="email-link" href="mailto:anthonyjanampacalderon10@gmail.com">
            <Mail size={22} />
            anthonyjanampacalderon10@gmail.com
            <ArrowUpRight size={20} />
          </a>
          <div className="contact-details">
            <a
              href="https://wa.me/51914299860?text=Hola%20Anthony%2C%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar%20contigo."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enviar un mensaje a Anthony por WhatsApp"
            >
              <Phone size={16} /> WhatsApp · +51 914 299 860
            </a>
            <span><MapPin size={16} /> Lima, Perú</span>
          </div>
        </div>
      </section>

      <footer className="footer section-shell">
        <a href="#inicio" className="brand">AJ<span>.</span></a>
        <p>Diseñado y desarrollado por Anthony Janampa © 2026</p>
        <a href="#inicio" className="back-top">Volver arriba <ArrowUpRight size={15} /></a>
      </footer>
    </main>
  );
}
