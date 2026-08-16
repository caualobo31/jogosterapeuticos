import Image from "next/image";
import { Zap, Printer, FolderOpen, Monitor } from "lucide-react";
import Section from "./Section";
import CtaButton from "./CtaButton";
import Reveal from "./Reveal";

const features = [
  { icon: Zap, label: "Acesso imediato" },
  { icon: Printer, label: "Use na mesma sessão" },
  { icon: FolderOpen, label: "Por dificuldade" },
  { icon: Monitor, label: "Online e presencial" },
];

export default function Hero() {
  return (
    <Section bg="cream" className="pt-6">
      <Reveal>
        <h1 className="font-heading text-[26px] font-extrabold uppercase leading-tight tracking-wide text-graphite sm:text-[32px]">
          <span className="text-brand">+50 jogos terapêuticos</span> prontos
          para cada <span className="text-brand">dificuldade de aprendizagem</span>
        </h1>

        <p className="mx-auto mt-4 max-w-[420px] font-body text-[15px] leading-relaxed text-muted">
          Dislexia, discalculia, TDAH, disgrafia e disortografia. Imprima,
          recorte e aplique, sem improviso.
        </p>

        <Image
          src="/images/hero-mockup.webp"
          alt="Kit +50 Jogos Terapêuticos: caixa premium, cartas, cadernos de atividades, fichas e peças do material impresso"
          width={920}
          height={690}
          priority
          className="mx-auto mt-6 h-auto w-full max-w-[380px] sm:max-w-[460px]"
        />

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

        <CtaButton href="#planos" className="mt-8">
          Quero os 50 jogos
        </CtaButton>

        <p className="mx-auto mt-7 max-w-[380px] font-editorial text-[15px] italic leading-relaxed text-muted">
          Você já tem o olhar clínico. Agora tem o material para o como.
        </p>
      </Reveal>
    </Section>
  );
}
