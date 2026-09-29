import Image from "next/image";
import { Zap, Printer, FolderOpen, Monitor } from "lucide-react";
import Section from "./Section";
import CtaButton from "./CtaButton";
import Reveal from "./Reveal";
import CountdownBar from "./CountdownBar";

const features = [
  { icon: Zap, label: "Acesso imediato" },
  { icon: Printer, label: "Use na mesma sessão" },
  { icon: FolderOpen, label: "Por dificuldade" },
  { icon: Monitor, label: "Online e presencial" },
];

export default function Hero() {
  return (
    <>
      <CountdownBar />
      <Section bg="cream" className="pt-6">
        <Reveal>
          <span className="mb-3 inline-block rounded-full bg-brand-tint2 px-3 py-1 font-heading text-[10px] font-semibold uppercase tracking-[0.5px] text-brand">
            Exclusivo para Psicopedagogas
          </span>

          <h1 className="font-heading text-[24px] font-bold uppercase leading-tight tracking-wide text-graphite sm:text-[30px]">
            Nunca mais fique sem saber o que colocar na mesa.
          </h1>

          <p className="mx-auto mt-3 max-w-[420px] font-heading text-[15px] font-bold uppercase leading-snug tracking-wide text-graphite sm:text-[17px]">
            <span className="text-brand">+50 jogos terapêuticos</span>{" "}
            imprimíveis para diferentes dificuldades de aprendizagem
          </p>

          <Image
            src="/images/hero-mockup.webp"
            alt="Kit +50 Jogos Terapêuticos: caixa premium, cartas, cadernos de atividades, fichas e peças do material impresso"
            width={920}
            height={690}
            priority
            className="mx-auto mt-6 h-auto w-full max-w-[380px] sm:max-w-[460px]"
          />

          <p className="mx-auto mt-4 max-w-[420px] font-body text-[14px] leading-relaxed text-muted sm:text-[15px]">
            Tenha recursos prontos para trabalhar leitura, atenção, memória,
            matemática, escrita e outras habilidades de forma mais dinâmica.
          </p>

          <div className="mx-auto mt-6 grid max-w-md grid-cols-2 gap-x-4 gap-y-3 sm:flex sm:flex-wrap sm:justify-center sm:gap-x-6">
            {features.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center justify-center gap-2 font-body text-[13px] font-medium text-graphite"
              >
                <Icon className="h-[18px] w-[18px] shrink-0 text-brand" />
                <span>{label}</span>
              </div>
            ))}
          </div>

          <CtaButton href="#por-dentro" className="mt-8">
            Quero os 50 jogos
          </CtaButton>
        </Reveal>
      </Section>
    </>
  );
}
