import Section from "./Section";
import Reveal from "./Reveal";
import Carrossel from "./Carrossel";
import CtaButton from "./CtaButton";

export default function PorDentro() {
  return (
    <Section bg="tint">
      <Reveal>
        <h2 className="font-heading text-[22px] font-bold uppercase leading-snug tracking-wide text-graphite sm:text-[24px]">
          Veja <span className="text-brand">por dentro</span> do material
        </h2>
        <p className="mx-auto mt-4 max-w-[440px] font-body text-[15px] leading-relaxed text-muted">
          Um gostinho do que chega até você: jogo por jogo, pronto pra
          imprimir, recortar e aplicar na sessão.
        </p>

        <Carrossel />

        <CtaButton href="#planos" className="mt-8">
          Quero os 50 jogos
        </CtaButton>
      </Reveal>
    </Section>
  );
}
