import Image from "next/image";
import Section from "./Section";
import Reveal from "./Reveal";
import CtaButton from "./CtaButton";

const bonus = [
  {
    capa: "/images/bonus/capa-guia-aplicacao.webp",
    nome: "Guia de Aplicação Clínica",
    copy: "O que observar em cada jogo, o que a criança revela e como intervir. Sua maior dúvida vira um plano.",
    preco: "R$ 47",
  },
  {
    capa: "/images/bonus/capa-fichas-registro.webp",
    nome: "Fichas de Registro e Evolução",
    copy: "Uma ficha por sessão pra acompanhar o progresso e ter o que mostrar pros pais.",
    preco: "R$ 27",
  },
  {
    capa: "/images/bonus/capa-roteiro-devolutiva.webp",
    nome: "Roteiro de Devolutiva",
    copy: "O passo a passo pra explicar o que você viu pra pais e escola, com clareza e sem soar laudo.",
    preco: "R$ 37",
  },
  {
    capa: "/images/bonus/capa-planejamentos.webp",
    nome: "Planejamentos de Sessão Prontos",
    copy: "Sessões já montadas, combinando os jogos por objetivo. Você abre e aplica, zero improviso.",
    preco: "R$ 29",
  },
];

export default function Bonus() {
  return (
    <Section bg="white" id="bonus">
      <Reveal>
        <h2 className="font-heading text-[22px] font-semibold uppercase leading-snug tracking-wide text-graphite sm:text-[24px]">
          4 <span className="text-brand">bônus</span> que vêm junto com os
          jogos
        </h2>
        <p className="mx-auto mt-4 max-w-[440px] font-body text-[15px] leading-relaxed text-muted">
          Não é só o material. Você leva também o que te dá segurança pra
          conduzir a sessão e a devolutiva, sem pagar nada a mais por isso.
        </p>

        <div className="mx-auto mt-8 grid max-w-[600px] grid-cols-1 gap-5 sm:grid-cols-2">
          {bonus.map(({ capa, nome, copy, preco }) => (
            <div
              key={nome}
              className="rounded-card border border-bordersoft bg-cream p-5 text-left"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg shadow-md shadow-brand/10">
                <Image
                  src={capa}
                  alt={`Capa do bônus: ${nome}`}
                  fill
                  sizes="(min-width: 640px) 280px, 45vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-4 font-heading text-[15px] font-semibold text-graphite">
                {nome}
              </p>
              <p className="mt-2 font-body text-[13.5px] leading-relaxed text-muted">
                {copy}
              </p>
              <div className="mt-4 flex items-center gap-2 border-t border-bordersoft pt-4">
                <span className="font-body text-[13px] text-red-600 line-through">
                  {preco}
                </span>
                <span className="rounded-full bg-gradient-to-r from-green-600 to-green-700 px-2.5 py-1 font-heading text-[11px] font-bold uppercase tracking-wide text-white">
                  Grátis
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-[420px]">
          <p className="font-body text-[14px] text-muted">
            Valor total dos bônus:{" "}
            <span className="text-red-600 line-through">R$ 140</span>
          </p>
          <p className="mt-2 font-heading text-[16px] font-semibold leading-snug text-brand">
            Tudo isso vem junto. Sem custo extra.
          </p>
          <CtaButton href="#planos" className="mt-6">
            Quero o kit completo
          </CtaButton>
        </div>
      </Reveal>
    </Section>
  );
}
