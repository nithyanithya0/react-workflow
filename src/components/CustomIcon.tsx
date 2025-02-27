// CustomIcon.tsx
import React from "react";

const CustomIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6 text-gray-800"
  >
    <rect x="7" y="3" width="10" height="1.5" rx="1" fill="currentColor" />
    <rect x="6" y="6" width="12" height="1.5" fill="currentColor" />
    <rect x="6" y="10" width="12" height="9" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export default CustomIcon;
