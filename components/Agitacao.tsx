import { X } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import ScrollCue from "./ScrollCue";

const dores = [
  "Você improvisa, e a criança desliga em minutos.",
  "Imprime mais uma ficha. A ficha não engaja.",
  "Perde noites garimpando PDF solto na internet.",
  "Monta material do zero de madrugada, sem ganhar por isso.",
];

export default function Agitacao() {
  return (
    <Section bg="white">
      <Reveal>
        <p className="font-heading text-[17px] font-extrabold leading-snug text-graphite">
          A teoria você tem. Mas quando a criança senta na sua frente:{" "}
          <span className="text-brand">o que eu coloco na mesa agora?</span>
        </p>

        <ul className="mx-auto mt-7 flex max-w-[400px] flex-col gap-3 text-left">
          {dores.map((dor) => (
            <li key={dor} className="flex items-start gap-3">
              <X className="mt-0.5 h-4 w-4 shrink-0 text-pink" />
              <span className="font-body text-[15px] leading-relaxed text-graphite">
                {dor}
              </span>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-7 max-w-[440px] font-body text-[14.5px] leading-relaxed text-muted">
          <strong className="font-semibold text-graphite">
            A maior parte dos psicopedagogos se sente sem saber como
            intervir.
          </strong>{" "}
          O problema não é falta de conhecimento. É a falta de material
          pronto para cada dificuldade que chega até você.
        </p>

        <ScrollCue to="virada" label="Ver a próxima seção" />
      </Reveal>
    </Section>
  );
}
