"use client";

import { Clock } from "lucide-react";
import { useCountdown } from "@/lib/useCountdown";

export default function OfferCountdownPill() {
  const tempo = useCountdown();

  return (
    <div className="mx-auto mb-4 inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-4 py-1.5 font-body text-[12px] font-semibold uppercase tracking-wide text-graphite">
      <Clock
        className="h-[14px] w-[14px] shrink-0 text-amber-700"
        aria-hidden="true"
      />
      <span>
        Oferta válida até:{" "}
        <span className="font-heading tabular-nums text-amber-700">
          {tempo}
        </span>
      </span>
    </div>
  );
}
