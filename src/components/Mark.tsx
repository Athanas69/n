export default function Mark({ size = 22, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C12 6.075 6.075 12 0 12C6.075 12 12 17.925 12 24C12 17.925 17.925 12 24 12C17.925 12 12 6.075 12 0Z" />
    </svg>
  );
}
