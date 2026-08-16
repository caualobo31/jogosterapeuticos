"use client";

import { Timer } from "lucide-react";
import { useCountdown } from "@/lib/useCountdown";

export default function CountdownBar() {
  const tempo = useCountdown();

  return (
    <div className="flex items-center justify-center gap-1.5 bg-red-600 px-3 py-2 text-center font-body text-[12.5px] font-semibold text-white sm:text-[13px]">
      <Timer className="h-[14px] w-[14px] shrink-0" aria-hidden="true" />
      <span>
        Esta página sairá do ar em:{" "}
        <span className="font-heading tabular-nums">{tempo}</span>
      </span>
    </div>
  );
}
