import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Images } from "lucide-react";
import { notFound } from "next/navigation";
import { ProjectGallery } from "@/components/project-gallery";
import { getProject, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  return {
    title: `${project.title} | Proyecto de Anthony Janampa`,
    description: project.copy,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <main className="project-page">
      <header className="project-page-nav section-shell">
        <Link href="/#proyectos" className="project-back">
          <ArrowLeft size={17} /> Volver al portafolio
        </Link>
        <Link href="/" className="brand">AJ<span>.</span></Link>
      </header>

      <section className="project-detail-hero section-shell">
        <div className="project-detail-copy">
          <span className="project-detail-number">Proyecto {project.number}</span>
          <p className="section-label">{project.type}</p>
          <h1 data-gsap-title>{project.title}</h1>
          <p>{project.copy}</p>
          <div className="project-detail-tags">
            {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </div>
        <div className="project-detail-cover" data-gsap-mask>
          <Image
            src={project.image}
            data-gsap-parallax
            alt={`Vista principal de ${project.title}`}
            fill
            priority
            sizes="(max-width: 800px) 100vw, 55vw"
          />
        </div>
      </section>

      <section className="project-gallery-section section-shell">
        <div className="gallery-heading">
          <div>
            <p className="section-label">Galería del proyecto</p>
            <h2 data-gsap-title>Todas las <span>interfaces.</span></h2>
          </div>
          <div className="gallery-count">
            <Images size={20} />
            <strong>{project.gallery.length}</strong>
            <span>{project.gallery.length === 1 ? "captura" : "capturas"}</span>
          </div>
        </div>
        <ProjectGallery images={project.gallery} projectTitle={project.title} />
      </section>

      <footer className="project-page-footer section-shell">
        <Link href="/#proyectos"><ArrowLeft size={16} /> Ver otros proyectos</Link>
        <a href="mailto:anthonyjanampacalderon10@gmail.com">Hablemos de tu proyecto <ArrowUpRight size={16} /></a>
      </footer>
    </main>
  );
}
