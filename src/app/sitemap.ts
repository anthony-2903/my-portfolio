import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { absoluteUrl } from "@/lib/seo";

const lastModified = new Date("2026-06-16");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projects.map((project) => ({
      url: absoluteUrl(`/proyectos/${project.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: project.featured ? 0.9 : 0.8,
      images: [absoluteUrl(project.image)],
    })),
  ];
}
