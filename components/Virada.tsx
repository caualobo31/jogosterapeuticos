import { Zap, ShieldCheck, Lock } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import CtaButton from "./CtaButton";

const selos = [
  { icon: Zap, label: "Acesso imediato" },
  { icon: ShieldCheck, label: "Garantia de 15 dias" },
  { icon: Lock, label: "Pagamento seguro" },
];

export default function Virada() {
  return (
    <Section bg="tint" id="virada">
      <Reveal>
        <h2 className="font-heading text-[22px] font-bold uppercase leading-snug tracking-wide text-graphite sm:text-[24px]">
          Você já sabe o porquê. Faltava{" "}
          <span className="text-brand">o como</span>.
        </h2>
        <p className="mx-auto mt-4 max-w-[440px] font-body text-[15px] leading-relaxed text-muted">
          Não é mais teoria que falta. É o instrumento certo na mão,
          organizado por dificuldade, sem inventar na hora.
        </p>

        <CtaButton href="#planos" className="mt-7">
          Quero sair do improviso
        </CtaButton>

        <div className="mx-auto mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {selos.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-1.5 font-body text-[12.5px] text-muted"
            >
              <Icon className="h-[15px] w-[15px] shrink-0 text-brand" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
