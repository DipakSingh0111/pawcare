import React from "react";

export interface LocationPinProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

/**
 * Authentic, universally recognized Map Location Pin icon.
 * Features a classic teardrop pin body with a distinct center circular cutout hole,
 * matching standard Google Maps / Apple Maps location iconography.
 */
export function LocationPin({
  size,
  className = "h-5 w-5",
  fill = "currentColor",
  width,
  height,
  ...props
}: LocationPinProps) {
  const w = size ?? width ?? 24;
  const h = size ?? height ?? 24;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={w}
      height={h}
      fill={fill}
      className={className}
      aria-hidden="true"
      {...props}
    >
      {/* Real location pin with true cutout center hole */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"
      />
    </svg>
  );
}

export default LocationPin;
