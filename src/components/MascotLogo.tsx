import React from 'react';

interface MascotLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const MascotLogo: React.FC<MascotLogoProps> = ({ className = '', size = 'md' }) => {
  const dimensions = {
    sm: { width: 30, height: 30, text: 'text-lg' },
    md: { width: 40, height: 40, text: 'text-2xl' },
    lg: { width: 52, height: 52, text: 'text-3xl' },
  }[size];

  return (
    <a href="#" className={`inline-flex items-center gap-3 group select-none ${className}`}>
      {/* Simplified Silhouette of Mascot's Head with Glowing Eyes */}
      <div className="relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
        {/* Amber glow halo behind logo */}
        <div className="absolute inset-0 bg-[#FF622E]/30 blur-md rounded-full group-hover:bg-[#FFB52E]/40 transition-colors" />

        <svg
          width={dimensions.width}
          height={dimensions.height}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 drop-shadow-[0_0_8px_rgba(255,98,46,0.5)]"
        >
          {/* Dark Charcoal Head with Pointed Ears */}
          <path
            d="M20 30 L32 10 L48 24 L52 24 L68 10 L80 30 C86 42 86 64 78 78 C70 90 30 90 22 78 C14 64 14 42 20 30 Z"
            fill="#171126"
            stroke="#2B1F42"
            strokeWidth="3"
          />
          {/* Inner Ear Purple Shading */}
          <path d="M26 28 L34 16 L43 25 Z" fill="#3D2460" />
          <path d="M74 28 L66 16 L57 25 Z" fill="#3D2460" />

          {/* Supernatural Glowing Amber Eyes */}
          <ellipse
            cx="37"
            cy="48"
            rx="7.5"
            ry="6"
            fill="#FFB52E"
            className="group-hover:animate-ping"
          />
          <ellipse
            cx="63"
            cy="48"
            rx="7.5"
            ry="6"
            fill="#FFB52E"
            className="group-hover:animate-ping"
          />

          <circle cx="37" cy="48" r="3" fill="#FF4500" />
          <circle cx="63" cy="48" r="3" fill="#FF4500" />

          <circle cx="35" cy="46" r="1.5" fill="#FFFFFF" />
          <circle cx="61" cy="46" r="1.5" fill="#FFFFFF" />

          {/* Tiny Pink Blep Tongue */}
          <path d="M48 65 C48 68 52 68 52 65 Z" fill="#FF6E8F" />
        </svg>
      </div>

      {/* SHADOW Wordmark in Bold Typography */}
      <span className={`font-heading ${dimensions.text} font-black tracking-wider text-[#F5F1EB] group-hover:text-white transition-colors flex items-center`}>
        SHADOW
        <span className="text-[#FFB52E] text-xs font-bold tracking-widest ml-1.5 opacity-80 self-center">
          $SHADOW
        </span>
      </span>
    </a>
  );
};
