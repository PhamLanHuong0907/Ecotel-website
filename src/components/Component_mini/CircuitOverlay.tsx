import React from 'react';

export default function CircuitOverlay() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40 mix-blend-screen select-none">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <linearGradient id="line-glow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00f2fe" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#00f2fe" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00f2fe" stopOpacity="0.1" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Diagonal and horizontal tech lines mimicking circuit board from screenshots */}
        {/* Top-right circuit network */}
        <path
          d="M 600,80 L 800,80 L 880,160 L 1100,160 M 820,80 L 850,50 L 980,50"
          stroke="url(#line-glow)"
          strokeWidth="1.5"
          fill="none"
          filter="url(#glow)"
        />
        <path
          d="M 750,40 L 780,10 L 1050,10 M 760,20 L 790,50 L 900,50"
          stroke="#0575e6"
          strokeWidth="1"
          fill="none"
          opacity="0.6"
        />

        {/* Top-left circuit network */}
        <path
          d="M 100,100 L 250,100 L 320,30 L 500,30 M 180,100 L 210,130 L 400,130"
          stroke="url(#line-glow)"
          strokeWidth="1.5"
          fill="none"
          filter="url(#glow)"
        />
        <path
          d="M 50,50 L 130,130 L 200,130"
          stroke="#00c6ff"
          strokeWidth="1"
          fill="none"
          opacity="0.7"
        />

        {/* Glowing Nodes / Circles */}
        <circle cx="880" cy="160" r="4" fill="#00f2fe" filter="url(#glow)" />
        <circle cx="850" cy="50" r="3" fill="#00f2fe" />
        <circle cx="320" cy="30" r="4" fill="#00f2fe" filter="url(#glow)" />
        <circle cx="210" cy="130" r="3" fill="#00f2fe" />
        <circle cx="130" cy="130" r="3" fill="#0575e6" />
        <circle cx="800" cy="80" r="3" fill="#0575e6" />

        {/* Secondary decorative lines */}
        <line x1="0" y1="180" x2="300" y2="180" stroke="url(#line-glow)" strokeWidth="0.5" />
        <line x1="900" y1="200" x2="1600" y2="200" stroke="url(#line-glow)" strokeWidth="0.5" />
      </svg>
    </div>
  );
}