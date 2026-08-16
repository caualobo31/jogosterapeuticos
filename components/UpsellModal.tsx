"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X } from "lucide-react";
import CtaButton from "./CtaButton";
import {
  CHECKOUT_URL_BASICO,
  CHECKOUT_URL_COMPLETO_PROMO,
} from "@/lib/config";

export default function UpsellModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  return (
    <>
      <CtaButton
        variant="secondary"
        className="mt-6 w-full"
        onClick={() => setOpen(true)}
      >
        Quero os 50 jogos
      </CtaButton>

      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-graphite/60 p-4"
            onClick={() => setOpen(false)}
          >
            <div
              role="dialog"
              aria-modal="true"
              className="relative max-h-[90vh] w-full max-w-[420px] overflow-y-auto rounded-card bg-warmwhite p-6 text-center shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fechar"
                className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-muted hover:bg-brand-tint2"
              >
                <X className="h-4 w-4" />
              </button>

              <span className="inline-block rounded-full bg-brand-tint2 px-3 py-1 font-heading text-[11px] font-semibold uppercase tracking-wide text-brand">
                Oferta especial
              </span>

              <h3 className="mt-3 font-heading text-[20px] font-bold leading-snug text-graphite">
                Espera! Leve o <span className="text-brand">Completo</span>{" "}
                por quase o preço do Básico
              </h3>

              <p className="mt-3 font-body text-[13.5px] leading-relaxed text-muted">
                Você ia levar só os 50 jogos. Por só R$ 10 a mais, leve
                também o guia do que observar em cada jogo, as fichas de
                registro, o roteiro de devolutiva e os planejamentos de
                sessão. Tudo o que te dá segurança pra conduzir.
              </p>

              <div className="relative mx-auto mt-4 aspect-[4/3] w-[65%]">
                <Image
                  src="/images/hero-mockup.webp"
                  alt="Kit +50 Jogos Terapêuticos Completo"
                  fill
                  sizes="280px"
                  className="object-contain"
                />
              </div>

              <p className="mt-4 font-body text-[13px] text-red-600 line-through">
                de R$ 37,90
              </p>
              <p className="mt-0.5 font-heading text-[32px] font-bold text-brand">
                por R$ 29,90
              </p>
              <p className="mt-0.5 font-body text-[12px] text-muted">
                só nesta oferta
              </p>

              <CtaButton
                href={CHECKOUT_URL_COMPLETO_PROMO}
                className="mt-5 w-full"
              >
                Sim, quero o Completo por R$ 29,90
              </CtaButton>

              <CtaButton
                href={CHECKOUT_URL_BASICO}
                variant="text"
                className="mt-3"
              >
                Não, prefiro só o básico
              </CtaButton>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
