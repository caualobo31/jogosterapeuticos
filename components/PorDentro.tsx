import Image from "next/image";
import Section from "./Section";
import Reveal from "./Reveal";
import CtaButton from "./CtaButton";
import VideoDemo from "./VideoDemo";

const jogosDestaque = [
  {
    src: "/images/carrossel/02-trilha-dos-sons.webp",
    alt: "Jogo Trilha dos Sons, de consciência fonológica, impresso",
  },
  {
    src: "/images/carrossel/07-bingo-ortografico.webp",
    alt: "Bingo Ortográfico, jogo de Disortografia",
  },
  {
    src: "/images/carrossel/04-domino-quantidades.webp",
    alt: "Dominó de quantidades, jogo de Discalculia",
  },
  {
    src: "/images/carrossel/03-memoria-dislexia.webp",
    alt: "Jogo da memória de Dislexia, cartas prontas para recortar",
  },
];

export default function PorDentro() {
  return (
    <Section bg="tint">
      <Reveal>
        <p className="font-heading text-[12px] font-semibold uppercase tracking-[0.5px] text-brand">
          Veja por dentro
        </p>
        <h2 className="mt-2 font-heading text-[22px] font-bold uppercase leading-snug tracking-wide text-graphite sm:text-[24px]">
          Veja como os jogos funcionam{" "}
          <span className="text-brand">na prática</span>
        </h2>
        <p className="mx-auto mt-4 max-w-[440px] font-body text-[15px] leading-relaxed text-muted">
          Conheça o material por dentro, veja como ele é organizado e como
          você pode levar os jogos direto para a sessão.
        </p>

        <VideoDemo />

        <p className="mt-8 font-heading text-[14px] font-semibold text-graphite">
          Alguns dos jogos que você encontra no acervo:
        </p>

        <div className="mx-auto mt-4 grid max-w-[520px] grid-cols-2 gap-3 sm:grid-cols-4">
          {jogosDestaque.map((jogo) => (
            <div
              key={jogo.src}
              className="relative aspect-[3/4] overflow-hidden rounded-card border border-bordersoft bg-warmwhite shadow-sm shadow-brand/10"
            >
              <Image
                src={jogo.src}
                alt={jogo.alt}
                fill
                sizes="(min-width: 640px) 130px, 45vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <CtaButton href="#planos" className="mt-8">
          Quero acessar os jogos
        </CtaButton>
        <p className="mx-auto mt-3 max-w-[340px] font-body text-[12px] text-muted">
          +50 jogos terapêuticos · acesso imediato · impressão ilimitada
        </p>
      </Reveal>
    </Section>
  );
}
