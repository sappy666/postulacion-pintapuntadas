import React from 'react';

interface NeedleThreadIconProps {
  className?: string;
}

export const NeedleThreadIcon: React.FC<NeedleThreadIconProps> = ({ className = "w-4 h-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Needle shaft and eye */}
    <path d="M20.2 3.8c-.8-.8-2 .4-2 .4L8.5 13.9c-.4.4-.7.9-.7 1.5V18h2.6c.6 0 1.1-.3 1.5-.7L22.1 7c0 0 1.2-1.2.4-2z" />
    {/* Eye of the needle */}
    <ellipse cx="18.8" cy="5.2" rx="0.6" ry="0.6" fill="currentColor" />
    {/* Thread flowing from the eye */}
    <path d="M19 5.5c2.5 2.5 3 6.5.5 9s-5.5 0-8 2.5S8.5 20.5 6 22" />
  </svg>
);
