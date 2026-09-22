"use client";

import { useEffect, useRef, useState } from "react";
import { NOTIFY_EVENT } from "@/lib/notify";

export default function Toast() {
  const [message, setMessage] = useState("");
  const [on, setOn] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    function handle(e: Event) {
      const detail = (e as CustomEvent<string>).detail;
      setMessage(detail);
      setOn(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setOn(false), 1800);
    }
    window.addEventListener(NOTIFY_EVENT, handle);
    return () => window.removeEventListener(NOTIFY_EVENT, handle);
  }, []);

  return (
    <div id="toast" className={on ? "on" : ""}>
      {message}
    </div>
  );
}
