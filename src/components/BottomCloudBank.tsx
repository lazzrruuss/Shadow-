import React from 'react';

export const BottomCloudBank: React.FC = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden pointer-events-none select-none z-10">
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto min-h-[70px] drop-shadow-[0_-4px_0px_rgba(0,0,0,0.9)]"
        preserveAspectRatio="none"
      >
        <path
          d="M0 120 L0 80 
             C20 60 50 60 70 75 
             C90 45 130 45 150 70 
             C170 50 200 48 220 65 
             C240 38 290 35 320 68 
             C340 50 370 50 390 72 
             C410 40 460 38 490 68 
             C510 50 540 50 560 70 
             C580 35 630 32 660 65 
             C680 48 710 48 730 68 
             C750 32 800 30 830 65 
             C850 48 880 48 900 70 
             C920 38 970 35 1000 68 
             C1020 50 1050 50 1070 72 
             C1090 40 1140 38 1170 68 
             C1190 52 1220 52 1240 70 
             C1260 35 1310 32 1340 65 
             C1360 48 1390 48 1410 70 
             C1425 60 1435 65 1440 75 
             L1440 120 Z"
          fill="#FFFFFF"
          stroke="#000000"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        {/* Inner subtle shading on the clouds */}
        <path
          d="M75 90 C120 90 200 90 320 90 M490 90 C560 90 660 90 830 90 M1000 90 C1070 90 1170 90 1340 90"
          stroke="#E2E8F0"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
