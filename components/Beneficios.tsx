import { Check } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import ScrollCue from "./ScrollCue";

const itens = [
  "Você para de improvisar: abre, imprime, aplica.",
  "Recupera seu tempo: chega de material de madrugada.",
  "A criança engaja e evolui, onde a ficha cansa.",
  "Agrega valor: os pais enxergam sua sessão diferente.",
  "Chega segura na devolutiva, com registro na mão.",
  "Se paga no primeiro atendimento.",
];

export default function Beneficios() {
  return (
    <Section bg="white">
      <Reveal>
        <h2 className="font-heading text-[22px] font-semibold uppercase leading-snug tracking-wide text-graphite sm:text-[24px]">
          O que <span className="text-brand">muda</span> na sua semana
        </h2>

        <ul className="mx-auto mt-7 grid max-w-[520px] grid-cols-1 gap-3.5 text-left sm:grid-cols-2">
          {itens.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              <span className="font-body text-[14px] leading-relaxed text-graphite">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <ScrollCue to="faq" label="Ver a próxima seção" />
      </Reveal>
    </Section>
  );
}
