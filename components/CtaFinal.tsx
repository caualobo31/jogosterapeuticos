import Section from "./Section";
import Reveal from "./Reveal";
import CtaButton from "./CtaButton";

export default function CtaFinal() {
  return (
    <Section bg="cream" id="cta-final">
      <Reveal>
        <h2 className="font-heading text-[22px] font-bold uppercase leading-snug tracking-wide text-graphite sm:text-[24px]">
          Sua próxima sessão pode ser <span className="text-brand">diferente</span>
        </h2>
        <p className="mx-auto mt-4 max-w-[420px] font-body text-[15px] leading-relaxed text-muted">
          Você já tem o olhar clínico. Faltava o material para o como, pronto
          para imprimir hoje.
        </p>
        <CtaButton href="#planos" className="mt-7">
          Quero começar agora
        </CtaButton>
        <p className="mx-auto mt-5 font-body text-[13px] text-muted">
          Acesso imediato · Garantia de 15 dias · Impressão ilimitada
        </p>
      </Reveal>
    </Section>
  );
}
