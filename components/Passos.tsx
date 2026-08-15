import Image from "next/image";
import Section from "./Section";
import Reveal from "./Reveal";
import CtaButton from "./CtaButton";

const passos = [
  {
    numero: "01",
    lead: "Imprima",
    resto: " o jogo da dificuldade. Papel comum resolve.",
    foto: "/images/imprima.webp",
    alt: "Folha do jogo saindo da impressora",
  },
  {
    numero: "02",
    lead: "Recorte",
    resto: " as peças. Vem tudo pronto, com marcação.",
    foto: "/images/recorte.webp",
    alt: "Tesoura recortando as cartas do jogo",
  },
  {
    numero: "03",
    lead: "Aplique.",
    resto: " A criança joga, você observa e intervém.",
    foto: "/images/aplique.webp",
    alt: "Psicopedagoga aplicando o jogo com a criança na mesa",
  },
];

export default function Passos() {
  return (
    <Section bg="white" id="passos">
      <Reveal>
        <h2 className="font-heading text-[22px] font-semibold uppercase leading-snug tracking-wide text-graphite sm:text-[24px]">
          Do PDF à sessão em <span className="text-brand">3 passos</span>
        </h2>

        <div className="mx-auto mt-8 grid max-w-[520px] grid-cols-1 gap-8 text-left sm:grid-cols-3 sm:gap-6 sm:text-center">
          {passos.map(({ numero, lead, resto, foto, alt }) => (
            <div key={numero} className="flex flex-col items-start sm:items-center">
              <span className="font-heading text-[30px] font-bold leading-none text-brand-vivid">
                {numero}
              </span>
              <p className="mt-2 font-body text-[14.5px] leading-relaxed text-graphite">
                <strong className="font-semibold">{lead}</strong>
                {resto}
              </p>
              <div className="relative mt-4 h-20 w-20 shrink-0 overflow-hidden rounded-card border border-bordersoft shadow-sm shadow-brand/10">
                <Image
                  src={foto}
                  alt={alt}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        <CtaButton href="#planos" className="mt-8">
          Quero aplicar na próxima sessão
        </CtaButton>
      </Reveal>
    </Section>
  );
}
