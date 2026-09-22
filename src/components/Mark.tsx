type MarkProps = { size?: number; className?: string };

export function AtlasMark({ size = 22, className }: MarkProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0C12 6.075 6.075 12 0 12C6.075 12 12 17.925 12 24C12 17.925 17.925 12 24 12C17.925 12 12 6.075 12 0Z" />
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
