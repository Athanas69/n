"use client";

import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  target: string;
};

export default function ScrollButton({ target, children, ...rest }: Props) {
  return (
    <button
      {...rest}
      onClick={() => document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" })}
    >
      {children}
    </button>
  );
}
