"use client";

import type { ButtonHTMLAttributes } from "react";
import { openAlfred } from "@/lib/notify";

export default function OpenAlfredButton({ children, ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...rest} onClick={openAlfred}>
      {children}
    </button>
  );
}
