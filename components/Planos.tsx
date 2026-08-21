import Image from "next/image";
import { Check, Star, ShieldCheck, Zap } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import CtaButton from "./CtaButton";
import OfferCountdownPill from "./OfferCountdownPill";
import { CHECKOUT_URL_COMPLETO_PROMO } from "@/lib/config";

const completoBase = [
  "Os 50 jogos, nas 5 dificuldades",
  "Regras de cada jogo",
  "Acesso vitalício",
  "Garantia de 15 dias",
];

const completoBonus = [
  "Guia com o que observar em cada jogo",
  "Fichas de registro e evolução",
  "Roteiro de devolutiva pra pais e escola",
  "Planejamentos de sessão prontos",
];

export default function Planos() {
  return (
    <Section bg="cream" id="planos">
      <Reveal>
        <OfferCountdownPill />
        <h2 className="font-heading text-[22px] font-bold uppercase leading-snug tracking-wide text-graphite sm:text-[24px]">
          Escolha como <span className="text-brand">começar</span>
        </h2>
        <p className="mx-auto mt-3 max-w-[380px] font-body text-[13.5px] leading-relaxed text-muted">
          Acesso imediato. Você imprime hoje e usa na próxima sessão.
        </p>

        <div className="mx-auto mt-8 max-w-[380px]">
          {/* Completo */}
          <div className="relative rounded-card border-2 border-brand bg-warmwhite p-7 shadow-xl shadow-brand/15 sm:p-8">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-brand-dark to-brand-vivid px-3 py-1 font-heading text-[10px] font-semibold uppercase tracking-wide text-white">
              Melhor custo-benefício
            </span>

            <p className="mt-2 font-heading text-[16px] font-semibold text-graphite">
              +50 JOGOS TERAPÊUTICOS + BÔNUS
            </p>
            <p className="mt-1 font-body text-[12.5px] text-muted">
              o sistema pra conduzir a sessão e a devolutiva com segurança
            </p>

            <div className="relative mt-4 aspect-[4/3] w-full">
              <Image
                src="/images/hero-mockup.webp"
                alt="Kit +50 Jogos Terapêuticos: caixa premium, cartas, cadernos de atividades e fichas do material impresso"
                fill
                sizes="(min-width: 640px) 320px, 90vw"
                className="object-contain"
              />
            </div>

            <p className="mt-4 font-body text-[12.5px] text-red-600 line-through">
              de R$ 207,00
            </p>
            <p className="mt-0.5 font-heading text-[38px] font-bold text-brand">
              R$ 29,90
            </p>
            <p className="mt-1 font-body text-[13px] font-semibold text-green-700">
              Você economiza R$ 177,10
            </p>
            <p className="mt-1 font-body text-[12.5px] text-muted">
              à vista no Pix
            </p>

            <hr className="my-4 border-bordersoft" />

            <ul className="flex flex-col gap-2.5 text-left">
              {completoBase.map((item) => (
                <li key={item} className="flex items-start gap-1.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <span className="font-body text-[13.5px] leading-relaxed text-graphite">
                    {item}
                  </span>
                </li>
              ))}
              {completoBonus.map((item) => (
                <li key={item} className="flex items-start gap-1.5">
                  <Star className="mt-0.5 h-4 w-4 shrink-0 text-pink" />
                  <span className="font-body text-[13.5px] leading-relaxed text-graphite">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <CtaButton
              href={CHECKOUT_URL_COMPLETO_PROMO}
              className="mt-6 w-full"
            >
              Quero o kit completo
            </CtaButton>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5">
              <div className="flex items-center gap-1.5 font-body text-[12px] text-muted">
                <ShieldCheck className="h-[14px] w-[14px] shrink-0 text-brand" />
                <span>Garantia de 15 dias</span>
              </div>
              <div className="flex items-center gap-1.5 font-body text-[12px] text-muted">
                <Zap className="h-[14px] w-[14px] shrink-0 text-brand" />
                <span>Acesso imediato</span>
              </div>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-[420px] font-body text-[13.5px] text-muted">
          Um único jogo terapêutico de loja custa mais que o kit inteiro.
          Aqui são 50, pra imprimir sempre que precisar.
        </p>
      </Reveal>
    </Section>
  );
}
