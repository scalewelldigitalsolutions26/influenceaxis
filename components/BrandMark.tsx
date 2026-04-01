import { useId } from "react";
import type { SVGProps } from "react";

type BrandMarkProps = SVGProps<SVGSVGElement>;

export function BrandMark({ className, ...props }: BrandMarkProps) {
  const gradientId = useId();
  const glowId = useId();

  return (
    <svg
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <defs>
        <linearGradient id={gradientId} x1="8" y1="6" x2="48" y2="50" gradientUnits="userSpaceOnUse">
          <stop stopColor="#090D14" />
          <stop offset="0.54" stopColor="#7A1F16" />
          <stop offset="1" stopColor="#D14A34" />
        </linearGradient>
        <radialGradient id={glowId} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(40 15) rotate(126.573) scale(35.3428)">
          <stop stopColor="#F3B39A" stopOpacity="0.36" />
          <stop offset="1" stopColor="#F3B39A" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect x="1.5" y="1.5" width="53" height="53" rx="18.5" fill={`url(#${gradientId})`} />
      <rect x="1.5" y="1.5" width="53" height="53" rx="18.5" stroke="rgba(255,255,255,0.14)" />
      <rect x="1.5" y="1.5" width="53" height="53" rx="18.5" fill={`url(#${glowId})`} />

      <path d="M14 28H42" stroke="rgba(255,255,255,0.18)" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M28 14V42" stroke="rgba(255,255,255,0.18)" strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="28" cy="28" r="11" stroke="rgba(255,255,255,0.2)" strokeWidth="1.7" />

      <path
        d="M18 37.5L37.8 17.7"
        stroke="white"
        strokeWidth="4.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33.6 17.8H37.8V22"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M16.8 21.2C18.9 17.4 23 15 27.5 15C31.6 15 35.4 17 37.8 20.3"
        stroke="#F3B39A"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M18.7 39C21.2 41.2 24.4 42.5 28 42.5C32.5 42.5 36.7 40.4 39.3 36.9"
        stroke="rgba(255,255,255,0.62)"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <circle cx="18" cy="37.5" r="2.6" fill="#FFE6D8" />
      <circle cx="37.8" cy="17.7" r="2.6" fill="#FFE6D8" />
      <circle cx="28" cy="28" r="4.8" fill="#0B1119" stroke="white" strokeWidth="1.6" />
      <circle cx="28" cy="28" r="2" fill="#D14A34" />
    </svg>
  );
}
