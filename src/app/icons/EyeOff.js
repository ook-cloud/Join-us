import React from "react";

export const EyeOff = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M10.733 5.076a10.744 10.744 0 0 1 1.267-.076c5.5 0 10 7 10 7a18.25 18.25 0 0 1-3.14 3.9M6.53 6.53A17.82 17.82 0 0 0 2 12s4.5 7 10 7a10.8 10.8 0 0 0 4.19-.83" />
      <path d="M14.12 14.12a3 3 0 1 1-4.24-4.24" />
      <line x1="2" y1="2" x2="22" y2="22" />
    </svg>
  );
};
