import React from "react";

export interface PawPrintProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number | string;
}

/**
 * Perfectly upright ("sidha") pet paw print icon.
 * Features 4 arched oval toe pads on top and a central rounded heart-shaped pad at the bottom,
 * matching standard upright animal paw iconography (as in user reference).
 */
export function PawPrint({
  size,
  strokeWidth = 2,
  fill = "none",
  stroke = "currentColor",
  className = "",
  width,
  height,
  ...props
}: PawPrintProps) {
  const w = size ?? width ?? 24;
  const h = size ?? height ?? 24;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={w}
      height={h}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {/* 4 Upright Toe Pads arched symmetrically across top */}
      <ellipse cx="9.2" cy="5.2" rx="1.7" ry="2.7" transform="rotate(-6 9.2 5.2)" />
      <ellipse cx="14.8" cy="5.2" rx="1.7" ry="2.7" transform="rotate(6 14.8 5.2)" />
      <ellipse cx="4.5" cy="10" rx="1.6" ry="2.5" transform="rotate(-24 4.5 10)" />
      <ellipse cx="19.5" cy="10" rx="1.6" ry="2.5" transform="rotate(24 19.5 10)" />

      {/* Central main pad at bottom with gentle top-center indentation */}
      <path d="M12 12.5 C10.2 10.8 7 11.2 6.2 13.5 C5.2 16.2 7.2 19.5 12 19.5 C16.8 19.5 18.8 16.2 17.8 13.5 C17 11.2 13.8 10.8 12 12.5 Z" />
    </svg>
  );
}

export default PawPrint;
