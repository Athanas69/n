"use client";

import { useEffect } from "react";

export default function RememberCity({ city }: { city: string }) {
  useEffect(() => {
    window.localStorage.setItem("atlasCity", city);
  }, [city]);
  return null;
}
