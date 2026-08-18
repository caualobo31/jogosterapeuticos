"use client";

import { useEffect, useState } from "react";

function getMsAteMeiaNoite(): number {
  const agora = new Date();
  const meiaNoite = new Date(
    agora.getFullYear(),
    agora.getMonth(),
    agora.getDate() + 1,
    0,
    0,
    0,
    0,
  );
  return meiaNoite.getTime() - agora.getTime();
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
 * Contador compartilhado: conta sempre até a próxima meia-noite (horário
 * local do visitante) e reinicia sozinho todo dia, sem depender de
 * localStorage. Qualquer visitante vê o mesmo tempo restante no mesmo
 * instante, e o valor se mantém coerente entre reloads dentro do mesmo dia.
 */
export function useCountdown() {
  const [tempo, setTempo] = useState("00:00:00");

  useEffect(() => {
    function tick() {
      setTempo(formatar(getMsAteMeiaNoite()));
    }

    tick();
    const intervalo = setInterval(tick, 1000);
    return () => clearInterval(intervalo);
  }, []);

  return tempo;
}
