import React from 'react';

/**
 * FOSS Club IIIT Kalyani 4-square mascot icon
 * Faithfully matches the uploaded club logo with smiling/curious pixel faces.
 */
export const FossClubLogo: React.FC<{ size?: number; className?: string }> = ({
  size = 32,
  className = '',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="FOSS Club IIIT Kalyani Logo"
    >
      {/* Top Left: Charcoal square with smile */}
      <rect x="2" y="2" width="21" height="21" rx="4" fill="#181a1d" />
      {/* Smile in top left */}
      <path
        d="M8 12 Q 12.5 17 17 12"
        stroke="#22c55e"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />

      {/* Top Right: Bright Green square */}
      <rect x="25" y="2" width="21" height="21" rx="4" fill="#22c55e" />
      {/* Subtle pixel accent in top right */}
      <rect x="33" y="10" width="5" height="5" rx="1.5" fill="#16a34a" />

      {/* Bottom Left: Bright Green square with two friendly eyes */}
      <rect x="2" y="25" width="21" height="21" rx="4" fill="#22c55e" />
      {/* Two pixel eyes */}
      <rect x="7" y="32" width="3.5" height="4.5" rx="1" fill="#111315" />
      <rect x="14.5" y="32" width="3.5" height="4.5" rx="1" fill="#111315" />

      {/* Bottom Right: Charcoal square */}
      <rect x="25" y="25" width="21" height="21" rx="4" fill="#181a1d" />
      <path
        d="M31 36 L 40 36"
        stroke="#4ade80"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
};

/**
 * FOSS United Pixel Earth Logo
 * Faithfully matches the uploaded lego / pixel globe image with greens and blues.
 */
export const FossUnitedLogo: React.FC<{ size?: number; className?: string }> = ({
  size = 32,
  className = '',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="FOSS United Logo"
    >
      <defs>
        <clipPath id="globeClip">
          <circle cx="32" cy="32" r="30" />
        </clipPath>
      </defs>

      {/* Detached pixel particles floating top right */}
      <rect x="52" y="6" width="3" height="3" fill="#22c55e" rx="0.5" />
      <rect x="58" y="9" width="4" height="4" fill="#16a34a" rx="0.5" />
      <rect x="61" y="22" width="2.5" height="2.5" fill="#38bdf8" rx="0.5" />

      {/* Main globe container */}
      <g clipPath="url(#globeClip)">
        {/* Ocean background */}
        <rect width="64" height="64" fill="#0369a1" />

        {/* Pixel grid blocks simulating continents & lego bricks */}
        {/* Sky / Cyan blocks */}
        <rect x="0" y="0" width="18" height="16" fill="#38bdf8" />
        <rect x="18" y="4" width="14" height="18" fill="#7dd3fc" />
        <rect x="46" y="16" width="18" height="14" fill="#bae6fd" />
        <rect x="4" y="24" width="16" height="18" fill="#38bdf8" />

        {/* Deep blue ocean blocks */}
        <rect x="32" y="0" width="16" height="18" fill="#1d4ed8" />
        <rect x="36" y="18" width="14" height="18" fill="#1e40af" />
        <rect x="16" y="22" width="16" height="16" fill="#1d4ed8" />
        <rect x="36" y="44" width="16" height="20" fill="#1e3a8a" />
        <rect x="4" y="42" width="16" height="14" fill="#1e40af" />

        {/* Vibrant Green landmass blocks */}
        <rect x="8" y="14" width="16" height="12" fill="#16a34a" />
        <rect x="24" y="10" width="14" height="12" fill="#4ade80" />
        <rect x="2" y="22" width="10" height="18" fill="#22c55e" />
        <rect x="6" y="28" width="14" height="10" fill="#4ade80" />
        <rect x="16" y="36" width="20" height="14" fill="#22c55e" />
        <rect x="12" y="46" width="14" height="18" fill="#4ade80" />
        <rect x="26" y="42" width="14" height="22" fill="#15803d" />
        <rect x="40" y="24" width="12" height="18" fill="#22c55e" />
        <rect x="50" y="22" width="14" height="26" fill="#4ade80" />
        <rect x="42" y="4" width="12" height="14" fill="#22c55e" />

        {/* Stud dots on lego blocks */}
        <circle cx="12" cy="18" r="1.5" fill="#15803d" opacity="0.6" />
        <circle cx="28" cy="14" r="1.5" fill="#16a34a" opacity="0.6" />
        <circle cx="22" cy="40" r="1.5" fill="#16a34a" opacity="0.6" />
        <circle cx="44" cy="28" r="1.5" fill="#15803d" opacity="0.6" />
        <circle cx="54" cy="30" r="1.5" fill="#16a34a" opacity="0.6" />
        <circle cx="20" cy="50" r="1.5" fill="#16a34a" opacity="0.6" />
      </g>

      {/* Globe subtle border */}
      <circle
        cx="32"
        cy="32"
        r="30"
        stroke="#22c55e"
        strokeWidth="1.5"
        strokeOpacity="0.5"
        fill="none"
      />
    </svg>
  );
};

export const GitBranchGraphic: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 360 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto ${className}`}
    >
      {/* Background grid dots */}
      <pattern id="grid" width="16" height="16" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="0.8" fill="#262c33" />
      </pattern>
      <rect width="360" height="84" fill="url(#grid)" />

      {/* Main branch line (origin/main) */}
      <path
        d="M 20 54 L 340 54"
        stroke="#333b47"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Active feature branch line (contribute-2026) */}
      <path
        d="M 60 54 C 90 54, 100 24, 140 24 L 250 24 C 280 24, 290 54, 320 54"
        stroke="#22c55e"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Main branch commits */}
      <circle cx="30" cy="54" r="4.5" fill="#475569" stroke="#15181c" strokeWidth="2" />
      <circle cx="60" cy="54" r="5" fill="#22c55e" stroke="#15181c" strokeWidth="2" />
      <circle cx="180" cy="54" r="4.5" fill="#475569" stroke="#15181c" strokeWidth="2" />
      <circle cx="320" cy="54" r="5.5" fill="#22c55e" stroke="#15181c" strokeWidth="2" />

      {/* Feature branch commits */}
      <circle cx="150" cy="24" r="5" fill="#4ade80" stroke="#0b0d0e" strokeWidth="2" />
      <circle cx="220" cy="24" r="5" fill="#4ade80" stroke="#0b0d0e" strokeWidth="2" />
      <circle cx="280" cy="24" r="6" fill="#22c55e" stroke="#0b0d0e" strokeWidth="2.5" />

      {/* Pulse ring on latest PR commit */}
      <circle
        cx="280"
        cy="24"
        r="10"
        stroke="#22c55e"
        strokeWidth="1.5"
        strokeDasharray="3 3"
        className="animate-spin"
        style={{ transformOrigin: '280px 24px', animationDuration: '6s' }}
      />

      {/* Text labels */}
      <text x="32" y="72" fill="#64748b" fontSize="9" fontFamily="monospace">
        root: init
      </text>
      <text x="145" y="14" fill="#22c55e" fontSize="9" fontFamily="monospace" fontWeight="600">
        PR #24: student-handbook
      </text>
      <text x="270" y="72" fill="#22c55e" fontSize="9" fontFamily="monospace">
        HEAD -&gt; main
      </text>
    </svg>
  );
};
