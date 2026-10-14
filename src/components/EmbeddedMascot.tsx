import React from 'react';

interface EmbeddedMascotProps {
  className?: string;
}

export const EmbeddedMascot: React.FC<EmbeddedMascotProps> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 500 620"
      className={`w-full h-auto overflow-visible filter drop-shadow-[0_8px_0px_rgba(0,0,0,0.85)] ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Eye Glow Radial Gradient */}
        <radialGradient id="catEyeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="25%" stopColor="#FFF4A3" />
          <stop offset="55%" stopColor="#FFB52E" />
          <stop offset="85%" stopColor="#FF622E" />
          <stop offset="100%" stopColor="#C92E00" />
        </radialGradient>

        {/* Deep fur gradient with subtle purple undertones */}
        <linearGradient id="catFurGrad" x1="0%" y1="0%" x2="70%" y2="100%">
          <stop offset="0%" stopColor="#251E33" />
          <stop offset="35%" stopColor="#1C1628" />
          <stop offset="80%" stopColor="#120D1B" />
          <stop offset="100%" stopColor="#0B0813" />
        </linearGradient>

        {/* Ear inner shadow */}
        <linearGradient id="catEarInner" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B2659" />
          <stop offset="60%" stopColor="#1F1433" />
          <stop offset="100%" stopColor="#100A1A" />
        </linearGradient>

        {/* Tail shadow gradient */}
        <linearGradient id="catTailGrad" x1="0%" y1="0%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#1A1426" />
          <stop offset="70%" stopColor="#2D1F47" />
          <stop offset="100%" stopColor="#130D20" />
        </linearGradient>
      </defs>

      {/* Ambient Floor Shadow */}
      <ellipse cx="250" cy="580" rx="180" ry="22" fill="#000000" opacity="0.8" />

      {/* Curled Tail to Right with Shadow Droplet */}
      <g id="tail">
        <path
          d="M330 520 C380 540 450 545 470 480 C485 430 450 350 375 320 C360 315 365 330 380 340 C430 375 445 440 420 480 C395 515 345 505 320 500 Z"
          fill="url(#catTailGrad)"
          stroke="#000000"
          strokeWidth="3.5"
        />
        <path
          d="M440 370 C465 420 455 475 425 500"
          stroke="#8A58D8"
          strokeWidth="3.5"
          strokeLinecap="round"
          opacity="0.45"
        />
        {/* Floating shadow droplet near tail tip */}
        <circle cx="380" cy="365" r="9" fill="#171126" stroke="#000" strokeWidth="2" />
      </g>

      {/* Body & Hind Legs */}
      <g id="body">
        {/* Back mass */}
        <path
          d="M140 360 C120 420 120 490 140 540 C155 575 220 575 235 565 C220 520 220 460 215 420 C185 390 160 370 140 360 Z"
          fill="url(#catFurGrad)"
          stroke="#000000"
          strokeWidth="3.5"
        />
        <path
          d="M360 360 C380 420 380 490 360 540 C345 575 280 575 265 565 C280 520 280 460 285 420 C315 390 340 370 360 360 Z"
          fill="url(#catFurGrad)"
          stroke="#000000"
          strokeWidth="3.5"
        />

        {/* Chest & Torso */}
        <path
          d="M175 380 C175 450 185 550 250 560 C315 550 325 450 325 380 C300 395 275 400 250 400 C225 400 200 395 175 380 Z"
          fill="#181324"
        />
        
        {/* Chest Fur Tufts */}
        <path
          d="M210 395 C230 420 240 455 250 465 C260 455 270 420 290 395 C270 410 260 412 250 420 C240 412 230 410 210 395 Z"
          fill="#2A1E3E"
        />

        {/* Left Paw */}
        <path
          d="M155 540 C145 545 140 560 150 570 C160 580 195 580 210 570 C215 560 205 545 195 540 C185 538 165 538 155 540 Z"
          fill="#120C1C"
          stroke="#000000"
          strokeWidth="3"
        />
        <path d="M168 555 L168 575 M185 555 L185 575" stroke="#251C36" strokeWidth="2.5" strokeLinecap="round" />

        {/* Right Paw */}
        <path
          d="M345 540 C355 545 360 560 350 570 C340 580 305 580 290 570 C285 560 295 545 305 540 C315 538 335 538 345 540 Z"
          fill="#120C1C"
          stroke="#000000"
          strokeWidth="3"
        />
        <path d="M332 555 L332 575 M315 555 L315 575" stroke="#251C36" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      {/* Head & Ears */}
      <g id="head">
        {/* Left Ear */}
        <path
          d="M150 180 L85 45 C75 30 95 30 110 50 L195 140 Z"
          fill="url(#catFurGrad)"
          stroke="#000000"
          strokeWidth="3.5"
        />
        <path
          d="M142 165 L100 68 C95 58 105 60 115 72 L175 140 Z"
          fill="url(#catEarInner)"
        />

        {/* Right Ear */}
        <path
          d="M350 180 L415 45 C425 30 405 30 390 50 L305 140 Z"
          fill="url(#catFurGrad)"
          stroke="#000000"
          strokeWidth="3.5"
        />
        <path
          d="M358 165 L400 68 C405 58 395 60 385 72 L325 140 Z"
          fill="url(#catEarInner)"
        />

        {/* Head Base */}
        <path
          d="M170 140 C210 120 290 120 330 140 C370 155 420 215 425 280 C430 335 390 385 340 405 C295 420 205 420 160 405 C110 385 70 335 75 280 C80 215 130 155 170 140 Z"
          fill="url(#catFurGrad)"
          stroke="#000000"
          strokeWidth="3.5"
        />

        {/* Cheek Tufts Left */}
        <path d="M80 260 L45 285 L85 300 L55 330 L100 335 Z" fill="#1E172B" stroke="#000" strokeWidth="2" />
        {/* Cheek Tufts Right */}
        <path d="M420 260 L455 285 L415 300 L445 330 L400 335 Z" fill="#1E172B" stroke="#000" strokeWidth="2" />

        {/* Brow Furrow Marks */}
        <path d="M190 200 C205 210 220 205 228 190" stroke="#000" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M310 200 C295 210 280 205 272 190" stroke="#000" strokeWidth="4.5" strokeLinecap="round" />
      </g>

      {/* Supernatural Glowing Eyes */}
      <g id="eyes">
        {/* Left Eye */}
        <g>
          <ellipse cx="182" cy="245" rx="38" ry="30" fill="#FF622E" opacity="0.85" filter="drop-shadow(0 0 10px #FFB52E)" />
          <path
            d="M148 248 C153 218 200 214 218 244 C210 274 160 278 148 248 Z"
            fill="url(#catEyeGlow)"
            stroke="#000000"
            strokeWidth="3.5"
          />
          <ellipse cx="182" cy="246" rx="10" ry="19" fill="#FF3300" />
          <circle cx="176" cy="239" r="6.5" fill="#FFFFFF" />
          <circle cx="188" cy="252" r="3" fill="#FFF4A3" />
        </g>

        {/* Right Eye */}
        <g>
          <ellipse cx="318" cy="245" rx="38" ry="30" fill="#FF622E" opacity="0.85" filter="drop-shadow(0 0 10px #FFB52E)" />
          <path
            d="M352 248 C347 218 300 214 282 244 C290 274 340 278 352 248 Z"
            fill="url(#catEyeGlow)"
            stroke="#000000"
            strokeWidth="3.5"
          />
          <ellipse cx="318" cy="246" rx="10" ry="19" fill="#FF3300" />
          <circle cx="312" cy="239" r="6.5" fill="#FFFFFF" />
          <circle cx="324" cy="252" r="3" fill="#FFF4A3" />
        </g>
      </g>

      {/* Nose, Mouth & Cute Blep Tongue */}
      <g id="mouth">
        <path d="M245 284 C248 282 252 282 255 284 L250 291 Z" fill="#000" />
        <path d="M232 296 C240 298 247 296 250 292 C253 296 260 298 268 296" stroke="#000" strokeWidth="3" strokeLinecap="round" />
        
        {/* Pink Blep Tongue */}
        <path
          d="M243 296 C242 308 246 316 250 316 C254 316 258 308 257 296 Z"
          fill="#FF6E8F"
          stroke="#000000"
          strokeWidth="2"
        />
        <path d="M250 297 L250 310" stroke="#D44D70" strokeWidth="1.5" />
      </g>
    </svg>
  );
};

export const EmbeddedMascotAvatar: React.FC<{ size?: number }> = ({ size = 40 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Head Silhouette */}
    <path
      d="M20 32 L32 12 L48 24 L52 24 L68 12 L80 32 C86 44 86 66 78 80 C70 92 30 92 22 80 C14 66 14 44 20 32 Z"
      fill="#171126"
      stroke="#000"
      strokeWidth="3.5"
    />
    <path d="M26 28 L34 16 L43 25 Z" fill="#3D2460" />
    <path d="M74 28 L66 16 L57 25 Z" fill="#3D2460" />

    {/* Glowing Amber Eyes */}
    <ellipse cx="37" cy="50" rx="9" ry="7.5" fill="#FFB52E" filter="drop-shadow(0 0 3px #FF622E)" />
    <ellipse cx="63" cy="50" rx="9" ry="7.5" fill="#FFB52E" filter="drop-shadow(0 0 3px #FF622E)" />
    <circle cx="37" cy="50" r="3.5" fill="#FF4500" />
    <circle cx="63" cy="50" r="3.5" fill="#FF4500" />
    <circle cx="35" cy="48" r="1.8" fill="#FFFFFF" />
    <circle cx="61" cy="48" r="1.8" fill="#FFFFFF" />

    {/* Tiny Pink Blep Tongue */}
    <path d="M48 68 C48 72 52 72 52 68 Z" fill="#FF6E8F" stroke="#000" strokeWidth="1.5" />
  </svg>
);
