"use client";

import { useEffect } from "react";
import { safeSet } from "@/lib/safeStorage";

export default function RememberCity({ city }: { city: string }) {
  useEffect(() => {
    safeSet("atlasCity", city);
  }, [city]);
  return null;
}
