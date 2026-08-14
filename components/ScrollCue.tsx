"use client";

import { ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

type ScrollCueProps = {
  to: string;
  label?: string;
};

export default function ScrollCue({ to, label = "Ver mais" }: ScrollCueProps) {
  const reduceMotion = useReducedMotion();

  return (
    <a
      href={`#${to}`}
      aria-label={label}
      className="mt-8 flex justify-center focus-visible:outline-none"
    >
      <motion.span
        className="flex h-9 w-9 items-center justify-center rounded-full border border-bordersoft bg-warmwhite text-brand shadow-sm"
        animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
        transition={
          reduceMotion
            ? undefined
            : { duration: 1.8, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <ChevronDown className="h-5 w-5" />
      </motion.span>
    </a>
  );
}
