// The JR monogram. Letters take `currentColor`; the diagonal leg keeps the logo blue.
export function JRMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="60 60 626.1 465" className={className} aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M256 60H322V370A110 110 0 0 1 212 480H60L117.6 414H212A44 44 0 0 0 256 370Z" />
      <path fill="currentColor" d="M336 60H540A128 128 0 0 1 540 316H530L472.4 250H540A62 62 0 0 0 540 126H336Z" />
      <path fill="#3B82F6" d="M356 250H446L686.1 525H596.1Z" />
    </svg>
  );
}
