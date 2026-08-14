"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const imagens = [
  {
    src: "/images/carrossel/01-categorias.webp",
    alt: "As 5 categorias do material: Dislexia, Discalculia, TDAH, Disgrafia e Disortografia",
  },
  {
    src: "/images/carrossel/02-trilha-dos-sons.webp",
    alt: "Jogo Trilha dos Sons, de consciência fonológica, impresso",
  },
  {
    src: "/images/carrossel/03-memoria-dislexia.webp",
    alt: "Jogo da memória de Dislexia, cartas prontas para recortar",
  },
  {
    src: "/images/carrossel/04-domino-quantidades.webp",
    alt: "Dominó de quantidades, jogo de Discalculia",
  },
  {
    src: "/images/carrossel/05-trilha-do-foco.webp",
    alt: "Trilha do Foco, jogo de TDAH com dado para montar",
  },
  {
    src: "/images/carrossel/06-jogo-das-silabas.webp",
    alt: "Jogo das sílabas, cartas e dominó para recortar",
  },
  {
    src: "/images/carrossel/07-bingo-ortografico.webp",
    alt: "Bingo Ortográfico, jogo de Disortografia",
  },
  {
    src: "/images/carrossel/08-como-jogar.webp",
    alt: "Ficha de Como Jogar, passo a passo de aplicação de cada jogo",
  },
];

export default function Carrossel() {
  const reduceMotion = useReducedMotion();
  const loop = [...imagens, ...imagens];

  return (
    <div className="relative left-1/2 mt-8 w-screen -translate-x-1/2 overflow-hidden">
      <motion.div
        className="flex w-max gap-4 px-4"
        animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
        transition={
          reduceMotion
            ? undefined
            : { duration: 32, ease: "linear", repeat: Infinity }
        }
      >
        {loop.map((img, i) => (
          <div
            key={i}
            className="relative w-[170px] shrink-0 overflow-hidden rounded-card border border-bordersoft bg-warmwhite shadow-md shadow-brand/10 sm:w-[210px]"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={450}
              height={636}
              className="h-auto w-full"
              sizes="210px"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
