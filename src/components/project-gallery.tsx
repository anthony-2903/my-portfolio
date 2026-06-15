"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { ProjectImage } from "@/data/projects";

type ProjectGalleryProps = {
  images: ProjectImage[];
  projectTitle: string;
};

export function ProjectGallery({ images, projectTitle }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") setActiveIndex((activeIndex + 1) % images.length);
      if (event.key === "ArrowLeft") setActiveIndex((activeIndex - 1 + images.length) % images.length);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, images.length]);

  const activeImage = activeIndex === null ? null : images[activeIndex];

  return (
    <>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <button
            className="gallery-card"
            key={image.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Ampliar ${image.label}`}
          >
            <span className="gallery-image">
              <Image
                src={image.src}
                alt={`${projectTitle}: ${image.label}`}
                fill
                sizes="(max-width: 680px) 100vw, (max-width: 1100px) 50vw, 33vw"
              />
              <span className="gallery-expand"><Maximize2 size={17} /> Ampliar</span>
            </span>
            <span className="gallery-caption">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{image.label}</strong>
            </span>
          </button>
        ))}
      </div>

      {activeImage && activeIndex !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`Vista ampliada de ${activeImage.label}`}>
          <div className="lightbox-bar">
            <div>
              <span>{String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>
              <strong>{activeImage.label}</strong>
            </div>
            <button type="button" onClick={() => setActiveIndex(null)} aria-label="Cerrar galería">
              <X size={21} />
            </button>
          </div>
          <div className="lightbox-scroll">
            <Image
              className="lightbox-image"
              src={activeImage.src}
              alt={`${projectTitle}: ${activeImage.label}`}
              width={activeImage.width}
              height={activeImage.height}
              sizes="100vw"
              priority
            />
          </div>
          {images.length > 1 && (
            <>
              <button
                className="lightbox-nav lightbox-prev"
                type="button"
                onClick={() => setActiveIndex((activeIndex - 1 + images.length) % images.length)}
                aria-label="Imagen anterior"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                className="lightbox-nav lightbox-next"
                type="button"
                onClick={() => setActiveIndex((activeIndex + 1) % images.length)}
                aria-label="Imagen siguiente"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}
