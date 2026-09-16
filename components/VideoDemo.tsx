"use client";

import { useState } from "react";
import Image from "next/image";
import Script from "next/script";
import { Play } from "lucide-react";

const VIMEO_SRC =
  "https://player.vimeo.com/video/1227485998?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1";

export default function VideoDemo() {
  const [tocando, setTocando] = useState(false);

  return (
    <div
      className="relative mx-auto mt-8 w-full max-w-[360px] overflow-hidden rounded-card shadow-lg shadow-brand/15 sm:max-w-[400px]"
      style={{ aspectRatio: "9 / 16" }}
    >
      {tocando ? (
        <>
          <iframe
            src={VIMEO_SRC}
            className="absolute inset-0 h-full w-full border-0"
            frameBorder={0}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            title="jogos terapeutas"
          />
          <Script
            id="vimeo-player-api"
            src="https://player.vimeo.com/api/player.js"
            strategy="lazyOnload"
          />
        </>
      ) : (
        <button
          type="button"
          onClick={() => setTocando(true)}
          aria-label="Assistir ao vídeo demonstrativo"
          className="group absolute inset-0 h-full w-full"
        >
          <Image
            src="/images/pordentro-video-thumb.webp"
            alt="Prévia do vídeo: material impresso do Kit +50 Jogos Terapêuticos"
            fill
            sizes="400px"
            className="object-cover"
            priority
          />
          <span className="absolute inset-0 bg-graphite/30 transition-colors group-hover:bg-graphite/40" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-lg transition-transform group-hover:scale-105">
              <Play
                className="h-6 w-6 translate-x-0.5 fill-brand text-brand"
                aria-hidden="true"
              />
            </span>
          </span>
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-graphite/70 px-3 py-1 font-body text-[11px] font-semibold text-white">
            Assistir vídeo
          </span>
        </button>
      )}
    </div>
  );
}
