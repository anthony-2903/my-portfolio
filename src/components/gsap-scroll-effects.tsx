"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function GsapScrollEffects() {
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    document.documentElement.classList.add("gsap-active");

    const titleCleanups: Array<() => void> = [];

    gsap.utils.toArray<HTMLElement>("[data-gsap-title]").forEach((title) => {
      const originalHTML = title.innerHTML;
      const nodes = Array.from(title.childNodes);

      nodes.forEach((node) => {
        if (node.nodeType !== Node.TEXT_NODE || !node.textContent?.trim()) return;

        const fragment = document.createDocumentFragment();
        node.textContent.split(/(\s+)/).forEach((part) => {
          if (!part.trim()) {
            fragment.appendChild(document.createTextNode(part));
            return;
          }
          const wrap = document.createElement("span");
          wrap.className = "gsap-word-wrap";
          const word = document.createElement("span");
          word.className = "gsap-word";
          word.textContent = part;
          wrap.appendChild(word);
          fragment.appendChild(wrap);
        });
        node.replaceWith(fragment);
      });

      const words = title.querySelectorAll<HTMLElement>(".gsap-word");
      gsap.fromTo(
        words,
        { yPercent: 115, rotateX: -70, opacity: 0 },
        {
          yPercent: 0,
          rotateX: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.075,
          ease: "power4.out",
          scrollTrigger: {
            trigger: title,
            start: "top 86%",
            toggleActions: "play none none reverse",
          },
        },
      );

      titleCleanups.push(() => { title.innerHTML = originalHTML; });
    });

    gsap.utils.toArray<HTMLElement>("[data-gsap-mask]").forEach((element, index) => {
      gsap.fromTo(
        element,
        { clipPath: index % 2 ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)", opacity: 0.25 },
        {
          clipPath: "inset(0 0% 0 0%)",
          opacity: 1,
          duration: 1.25,
          ease: "power3.inOut",
          scrollTrigger: { trigger: element, start: "top 88%", toggleActions: "play none none reverse" },
        },
      );
    });

    gsap.utils.toArray<HTMLElement>("[data-gsap-parallax]").forEach((element, index) => {
      const distance = index % 2 === 0 ? -11 : 11;
      gsap.fromTo(
        element,
        { yPercent: -distance },
        {
          yPercent: distance,
          ease: "none",
          scrollTrigger: {
            trigger: element.closest(".project-preview, .project-detail-cover") ?? element,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.1,
          },
        },
      );
    });

    const heroGrid = document.querySelector<HTMLElement>(".hero-grid");
    const heroSection = document.querySelector<HTMLElement>("#inicio");

    if (heroGrid && heroSection) {
      gsap.to(heroGrid, {
        yPercent: 18,
        ease: "none",
        scrollTrigger: { trigger: heroSection, start: "top top", end: "bottom top", scrub: 1 },
      });
    }

    if (progressRef.current) {
      gsap.set(progressRef.current, { scaleY: 0, transformOrigin: "top center" });
      gsap.to(progressRef.current, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: { start: 0, end: "max", scrub: 0.25 },
      });
    }

    ScrollTrigger.refresh();

    return () => {
      titleCleanups.forEach((cleanup) => cleanup());
      document.documentElement.classList.remove("gsap-active");
    };
  });

  return (
    <aside className="scroll-progress" aria-hidden="true">
      <span className="scroll-progress-label">Scroll</span>
      <span className="scroll-progress-track"><span ref={progressRef} /></span>
      <span className="scroll-progress-end">100</span>
    </aside>
  );
}
