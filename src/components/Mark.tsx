type MarkProps = { size?: number; className?: string };

export function AtlasMark({ size = 22, className }: MarkProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9.8" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M15.6 8.4l-2.3 5-5 2.3 2.3-5 5-2.3Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MondoMark({ size = 22, className }: MarkProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="9.2" cy="8.6" r="6.8" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="15.4" cy="8.6" r="6.8" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12.3" cy="15.6" r="6.8" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export default function Mark({ mode, size, className }: MarkProps & { mode: "MONDO" | "ATLAS" }) {
  return mode === "MONDO" ? <MondoMark size={size} className={className} /> : <AtlasMark size={size} className={className} />;
}
