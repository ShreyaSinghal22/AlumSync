import React from 'react';

const Logo = ({ className = "w-9 h-9" }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* Background Rounded Square - Uses your Primary Violet */}
      <rect width="100" height="100" rx="24" fill="#8b5cf6" />
      
      {/* The "AS" Monogram */}
      <path 
        d="M25 70L45 25L65 70M32 55H58" 
        stroke="white" 
        strokeWidth="8" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M75 35C75 35 80 40 80 47.5C80 55 70 55 70 55C70 55 60 55 60 62.5C60 70 65 75 65 75" 
        stroke="white" 
        strokeWidth="8" 
        strokeLinecap="round" 
        className="opacity-80"
      />
      
      {/* Small "AI/Connection" Dot */}
      <circle cx="80" cy="25" r="6" fill="#a78bfa" className="animate-pulse" />
    </svg>
  );
};

export default Logo;