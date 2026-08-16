"use client";

import { useState } from "react";
import { Plus, Minus, ShieldCheck } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import ScrollCue from "./ScrollCue";

const perguntas = [
  {
    q: "Preciso saber design ou impressora especial?",
    a: "Não. Baixa, imprime em papel comum e recorta. Vem tudo pronto.",
  },
  {
    q: "Serve para qual idade?",
    a: "Pensado para crianças de 6 a 10 anos, fase em que as dificuldades de leitura, escrita e matemática mais aparecem.",
  },
  {
    q: "Isso substitui a avaliação ou o diagnóstico?",
    a: "Não. É material de intervenção e estimulação para a sua conduta clínica. A avaliação e as hipóteses continuam sendo suas.",
  },
  {
    q: "Posso usar com vários pacientes?",
    a: "Sim. Impressão livre e ilimitada. Imprime para quantas crianças atender.",
  },
  {
    q: "Como recebo?",
    a: "Acesso imediato após a compra, direto no seu e-mail.",
  },
  {
    q: "Qual a diferença entre Básico e Completo?",
    a: "O Básico são os 50 jogos com as regras. O Completo inclui o guia com o que observar, fichas de registro, roteiro de devolutiva e planejamentos de sessão.",
  },
];

export default function Faq() {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set());

  function toggle(index: number) {
    setOpenIndexes((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }

  return (
    <Section bg="tint" id="faq">
      <Reveal>
        <h2 className="font-heading text-[22px] font-extrabold uppercase leading-snug tracking-wide text-graphite sm:text-[24px]">
          Perguntas <span className="text-brand">frequentes</span>
        </h2>

        <div className="mx-auto mt-7 max-w-[520px] text-left">
          {perguntas.map(({ q, a }, index) => {
            const isOpen = openIndexes.has(index);
            return (
              <div key={q} className="border-b border-bordersoft">
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                >
                  <span className="font-heading text-[14.5px] font-semibold text-graphite">
                    {q}
                  </span>
                  {isOpen ? (
                    <Minus className="h-4 w-4 shrink-0 text-brand" />
                  ) : (
                    <Plus className="h-4 w-4 shrink-0 text-brand" />
                  )}
                </button>
                {isOpen && (
                  <p className="pb-4 font-body text-[13.5px] leading-relaxed text-muted">
                    {a}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-7 flex max-w-[420px] items-center justify-center gap-2 font-body text-[13.5px] text-muted">
          <ShieldCheck className="h-4 w-4 shrink-0 text-brand" />
          <span>
            <strong className="font-semibold text-brand">
              Garantia de 15 dias.
            </strong>{" "}
            Não era para você? Reembolso sem burocracia.
          </span>
        </div>

        <ScrollCue to="cta-final" label="Ver a próxima seção" />
      </Reveal>
    </Section>
  );
}
