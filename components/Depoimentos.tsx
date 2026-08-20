"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import ScrollCue from "./ScrollCue";
import Placeholder from "./Placeholder";

const depoimentos = [
  {
    id: 1,
    foto: null as string | null,
    alt: "Print de depoimento de psicopedagoga sobre o material",
  },
  {
    id: 2,
    foto: null as string | null,
    alt: "Print de depoimento de psicopedagoga sobre o material",
  },
  {
    id: 3,
    foto: null as string | null,
    alt: "Print de depoimento de psicopedagoga sobre o material",
  },
  {
    id: 4,
    foto: null as string | null,
    alt: "Print de depoimento de psicopedagoga sobre o material",
  },
];

export default function Depoimentos() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  function scrollToIndex(index: number) {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.children[index] as HTMLElement | undefined;
    if (!card) return;
    el.scrollTo({
      left: card.offsetLeft - el.offsetLeft,
      behavior: "smooth",
    });
    setActive(index);
  }

  function handleScroll() {
    const el = scrollerRef.current;
    if (!el) return;
    let closest = 0;
    let closestDist = Infinity;
    Array.from(el.children).forEach((child, i) => {
      const c = child as HTMLElement;
      const dist = Math.abs(c.offsetLeft - el.offsetLeft - el.scrollLeft);
      if (dist < closestDist) {
        closestDist = dist;
        closest = i;
      }
    });
    setActive(closest);
  }

  return (
    <Section bg="cream">
      <Reveal>
        <p className="font-heading text-[12px] font-semibold uppercase tracking-[0.5px] text-brand">
          Quem já usa
        </p>
        <h2 className="mt-2 font-heading text-[22px] font-bold uppercase leading-snug tracking-wide text-graphite sm:text-[24px]">
          Psicopedagogas que <span className="text-brand">pararam</span> de
          improvisar
        </h2>

        <div className="relative mt-8">
          <div
            ref={scrollerRef}
            onScroll={handleScroll}
            className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2"
          >
            {depoimentos.map((d) => (
              <div
                key={d.id}
                className="w-[82%] shrink-0 snap-center sm:w-[46%] lg:w-[31%]"
              >
                {d.foto ? (
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-card border border-bordersoft shadow-sm shadow-brand/10">
                    <Image
                      src={d.foto}
                      alt={d.alt}
                      fill
                      sizes="(min-width: 1024px) 31vw, (min-width: 640px) 46vw, 82vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <Placeholder
                    label={`[ print do depoimento ${d.id} ]`}
                    className="aspect-[4/5] w-full"
                  />
                )}
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollToIndex(Math.max(0, active - 1))}
            aria-label="Depoimento anterior"
            className="absolute left-0 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-bordersoft bg-warmwhite p-2 shadow-md sm:flex"
          >
            <ChevronLeft className="h-4 w-4 text-brand" />
          </button>
          <button
            type="button"
            onClick={() =>
              scrollToIndex(Math.min(depoimentos.length - 1, active + 1))
            }
            aria-label="Próximo depoimento"
            className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-bordersoft bg-warmwhite p-2 shadow-md sm:flex"
          >
            <ChevronRight className="h-4 w-4 text-brand" />
          </button>
        </div>

        <div className="mt-5 flex items-center justify-center gap-2">
          {depoimentos.map((d, i) => (
            <button
              key={d.id}
              type="button"
              onClick={() => scrollToIndex(i)}
              aria-label={`Ir para o depoimento ${d.id}`}
              className={`h-2 rounded-full transition-all ${
                active === i ? "w-6 bg-brand" : "w-2 bg-brand-lavender"
              }`}
            />
          ))}
        </div>

        <p className="mx-auto mt-6 max-w-[440px] font-body text-[12.5px] leading-relaxed text-muted">
          Jogos na linha de Fernández, Bossa, PIAFEX e Simaia Sampaio. Nada
          aqui substitui a sua avaliação.
        </p>

        <ScrollCue to="bonus" label="Ver a próxima seção" />
      </Reveal>
    </Section>
  );
}
