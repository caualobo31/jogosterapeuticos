"use client";

import { useEffect, useState } from "react";
import { COUNTDOWN_DURATION_MS } from "./config";

const STORAGE_KEY = "oferta-expira-em";

function getExpiration(): number {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored) {
    const parsed = Number(stored);
    if (!Number.isNaN(parsed)) return parsed;
  }
  const proximaExpiracao = Date.now() + COUNTDOWN_DURATION_MS;
  window.localStorage.setItem(STORAGE_KEY, String(proximaExpiracao));
  return proximaExpiracao;
}

function formatar(msRestante: number) {
  const totalSegundos = Math.max(0, Math.floor(msRestante / 1000));
  const horas = Math.floor(totalSegundos / 3600);
  const minutos = Math.floor((totalSegundos % 3600) / 60);
  const segundos = totalSegundos % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(horas)}:${pad(minutos)}:${pad(segundos)}`;
}

/**
 * Contador compartilhado: todo componente que chamar esse hook lê o mesmo
 * timestamp de expiração salvo no localStorage, então ficam sincronizados
 * entre si e sobrevivem a reload, sem reiniciar pro mesmo visitante.
 */
export function useCountdown() {
  const [tempo, setTempo] = useState("00:00:00");

  useEffect(() => {
    const expiracao = getExpiration();

    function tick() {
      setTempo(formatar(expiracao - Date.now()));
    }

    tick();
    const intervalo = setInterval(tick, 1000);
    return () => clearInterval(intervalo);
  }, []);

  return tempo;
}
