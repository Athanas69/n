"use client";

import { notify } from "@/lib/notify";
import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  message: string;
};

export default function NotifyButton({ message, children, ...rest }: Props) {
  return (
    <button {...rest} onClick={() => notify(message)}>
      {children}
    </button>
  );
}
