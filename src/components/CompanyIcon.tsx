import React from "react";

const CompanyIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="w-6 h-6 text-blue-600"
  >
    <rect x="3" y="5" width="18" height="15" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
    <line x1="6" y1="9" x2="9" y2="9" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="6" y1="13" x2="9" y2="13" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="6" y1="17" x2="9" y2="17" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="13" y="9" width="5" height="7" fill="none" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export default CompanyIcon;
