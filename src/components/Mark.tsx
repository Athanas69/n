type MarkProps = { size?: number; className?: string };

// The original "waypoint" arrowhead — used only for the entry screen's
// central badge, where the two worlds meet.
export function ArrowheadMark({ size = 22, className }: MarkProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0C12 6.075 6.075 12 0 12C6.075 12 12 17.925 12 24C12 17.925 17.925 12 24 12C17.925 12 12 6.075 12 0Z" />
    </svg>
  );
}

export function AtlasMark({ size = 22, className }: MarkProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9.4" stroke="currentColor" strokeWidth="1.3" />
      {/* cardinal ticks */}
      <path d="M12 1.2v2M12 20.8v2M1.2 12h2M20.8 12h2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      {/* two-tone needle: solid north half, hollow south half */}
      <path d="M12 3.6 15 12 12 12Z" fill="currentColor" />
      <path d="M12 20.4 9 12l3 0Z" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" />
    </svg>
  );
}

export function MondoMark({ size = 22, className }: MarkProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6.5 7.5 12 17 17.5 7.5Z" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" opacity=".55" />
      <circle cx="6.5" cy="7.5" r="2.6" fill="currentColor" />
      <circle cx="17.5" cy="7.5" r="2.6" fill="currentColor" />
      <circle cx="12" cy="17" r="2.6" fill="currentColor" />
    </svg>
  );
}

export default function Mark({ mode, size, className }: MarkProps & { mode: "MONDO" | "ATLAS" }) {
  return mode === "MONDO" ? <MondoMark size={size} className={className} /> : <AtlasMark size={size} className={className} />;
}
