import Image from "next/image";
import { Check, ArrowDown } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import CtaButton from "./CtaButton";
import OfferCountdownPill from "./OfferCountdownPill";
import { CHECKOUT_URL_COMPLETO } from "@/lib/config";

const itensValor = [
  { nome: "+50 Jogos Terapêuticos", valor: "R$ 79,90" },
  { nome: "Guia de Aplicação Clínica", valor: "R$ 47,00" },
  { nome: "Fichas de Registro e Evolução", valor: "R$ 27,00" },
  { nome: "Roteiro de Devolutiva", valor: "R$ 37,00" },
  { nome: "Planejamentos de Sessão Prontos", valor: "R$ 29,00" },
];

const itensKit = [
  "+50 Jogos Terapêuticos",
  "Dislexia, Discalculia, TDAH, Disgrafia e Disortografia",
  "Guia de Aplicação Clínica",
  "Fichas de Registro e Evolução",
  "Roteiro de Devolutiva",
  "Planejamentos de Sessão Prontos",
  "Impressão ilimitada",
  "Garantia de 15 dias",
];

export default function Planos() {
  return (
    <Section bg="cream" id="planos">
      <Reveal>
        <p className="font-heading text-[12px] font-semibold uppercase tracking-[0.5px] text-brand">
          Veja quanto tudo isso custaria separado
        </p>
        <h2 className="mx-auto mt-2 max-w-[480px] font-heading text-[22px] font-bold uppercase leading-snug tracking-wide text-graphite sm:text-[24px]">
          <span className="text-brand">Mais de 50 jogos +bônus</span> por
          menos do que você pagaria em um único material físico
        </h2>
        <p className="mx-auto mt-3 max-w-[420px] font-body text-[13.5px] leading-relaxed text-muted">
          Em vez de comprar jogos e recursos separadamente, você leva tudo em
          um único acesso para imprimir e usar sempre que precisar.
        </p>

        <div className="mx-auto mt-7 max-w-[440px] overflow-hidden rounded-card border border-bordersoft bg-warmwhite text-left">
          <div className="flex items-center justify-between gap-3 bg-gradient-to-r from-brand-dark to-brand-vivid px-4 py-2.5">
            <span className="font-heading text-[11px] font-semibold uppercase tracking-wide text-white">
              O que você recebe
            </span>
            <span className="font-heading text-[11px] font-semibold uppercase tracking-wide text-white">
              Valor separado
            </span>
          </div>
          {itensValor.map(({ nome, valor }, i) => (
            <div
              key={nome}
              className={`flex items-center justify-between gap-3 px-4 py-3 ${
                i % 2 === 1 ? "bg-cream" : "bg-warmwhite"
              } ${i !== itensValor.length - 1 ? "border-b border-bordersoft" : ""}`}
            >
              <span className="font-body text-[13px] text-graphite">
                {nome}
              </span>
              <span className="shrink-0 font-body text-[13px] font-semibold text-red-600 line-through">
                {valor}
              </span>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-6 max-w-[380px] rounded-card border border-bordersoft bg-warmwhite px-6 py-5">
          <p className="font-body text-[13px] font-medium text-muted">
            Você pagaria:
          </p>
          <p className="mt-1 font-heading text-[30px] font-bold text-red-600 line-through">
            R$ 219,90
          </p>
        </div>

        <div className="mx-auto mt-6 max-w-[380px]">
          <p className="font-body text-[14px] font-semibold text-graphite">
            Mas você não vai pagar R$ 219,90.
          </p>
          <p className="mt-1.5 font-body text-[13.5px] leading-relaxed text-muted">
            Hoje, nesta página, você pode garantir o Kit Completo inteiro por
            uma condição especial.
          </p>
          <ArrowDown
            className="mx-auto mt-3 h-5 w-5 text-brand"
            aria-hidden="true"
          />
        </div>

        <div className="mt-6">
          <OfferCountdownPill />
        </div>

        <div className="relative mx-auto max-w-[380px] rounded-card border-2 border-brand bg-warmwhite p-7 text-center shadow-xl shadow-brand/15">
          <p className="font-heading text-[16px] font-bold uppercase tracking-wide text-graphite">
            Kit de Jogos Terapêuticos Completo
          </p>

          <div className="relative mx-auto mt-4 aspect-[4/3] w-[70%]">
            <Image
              src="/images/hero-mockup.webp"
              alt="Kit +50 Jogos Terapêuticos: caixa premium, cartas, cadernos de atividades e fichas do material impresso"
              fill
              sizes="280px"
              className="object-contain"
            />
          </div>

          <p className="mt-4 font-body text-[13.5px] text-muted">
            O kit completo pra transformar suas sessões
          </p>

          <p className="mt-4 font-body text-[14px] text-red-600 line-through">
            R$ 219,90
          </p>
          <p className="mt-1 font-heading text-[13px] font-bold uppercase tracking-wide text-muted">
            Hoje por
          </p>
          <p className="mt-0.5 font-heading text-[40px] font-bold text-brand">
            R$ 37,90
          </p>
          <p className="mt-1.5 font-body text-[13px] font-semibold text-green-700">
            Você economiza R$ 182,00
          </p>
          <p className="mt-1 font-body text-[12.5px] text-muted">
            pagamento único · acesso imediato · acesso vitalício
          </p>

          <CtaButton href={CHECKOUT_URL_COMPLETO} className="mt-6 w-full">
            Quero o kit completo
          </CtaButton>

          <p className="mt-3 font-body text-[12px] text-muted">
            Pix · Cartão · Compra segura · Acesso imediato
          </p>

          <hr className="my-5 border-bordersoft" />

          <ul className="flex flex-col gap-2.5 text-left">
            {itensKit.map((item) => (
              <li key={item} className="flex items-start gap-1.5">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span className="font-body text-[13.5px] leading-relaxed text-graphite">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
