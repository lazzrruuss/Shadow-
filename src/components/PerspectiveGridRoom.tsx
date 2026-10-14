import React from 'react';

interface PerspectiveGridRoomProps {
  theme?: 'sky' | 'midnight';
}

export const PerspectiveGridRoom: React.FC<PerspectiveGridRoomProps> = ({
  theme = 'sky',
}) => {
  const isSky = theme === 'sky';
  const gridStroke = isSky ? 'rgba(255, 255, 255, 0.75)' : 'rgba(255, 181, 46, 0.35)';
  const wallStroke = isSky ? 'rgba(255, 255, 255, 0.55)' : 'rgba(138, 88, 216, 0.25)';

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      <svg
        className="w-full h-full min-h-[850px] object-cover"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Fill */}
        <rect
          width="1440"
          height="900"
          fill={isSky ? '#96C0F0' : '#0B0A17'}
        />

        {/* Back Wall Grid Rectangle (x: 120 to 1320, y: 110 to 770) */}
        <g stroke={gridStroke} strokeWidth="1.6" strokeDasharray="none">
          {/* Back wall horizontal grid lines */}
          <line x1="120" y1="180" x2="1320" y2="180" />
          <line x1="120" y1="260" x2="1320" y2="260" />
          <line x1="120" y1="340" x2="1320" y2="340" />
          <line x1="120" y1="420" x2="1320" y2="420" />
          <line x1="120" y1="500" x2="1320" y2="500" />
          <line x1="120" y1="580" x2="1320" y2="580" />
          <line x1="120" y1="660" x2="1320" y2="660" />
          <line x1="120" y1="740" x2="1320" y2="740" />

          {/* Back wall vertical grid lines */}
          <line x1="220" y1="110" x2="220" y2="770" />
          <line x1="330" y1="110" x2="330" y2="770" />
          <line x1="440" y1="110" x2="440" y2="770" />
          <line x1="550" y1="110" x2="550" y2="770" />
          <line x1="660" y1="110" x2="660" y2="770" />
          <line x1="770" y1="110" x2="770" y2="770" />
          <line x1="880" y1="110" x2="880" y2="770" />
          <line x1="990" y1="110" x2="990" y2="770" />
          <line x1="1100" y1="110" x2="1100" y2="770" />
          <line x1="1210" y1="110" x2="1210" y2="770" />
        </g>

        {/* 3D Perspective Corner Edges connecting Back Wall to Screen Edges */}
        <g stroke={gridStroke} strokeWidth="2.4">
          {/* Top-Left Corner to screen edge */}
          <line x1="120" y1="110" x2="0" y2="0" />
          {/* Top-Right Corner to screen edge */}
          <line x1="1320" y1="110" x2="1440" y2="0" />
          {/* Bottom-Left Corner to screen edge */}
          <line x1="120" y1="770" x2="0" y2="900" />
          {/* Bottom-Right Corner to screen edge */}
          <line x1="1320" y1="770" x2="1440" y2="900" />

          {/* Perimeter frame of back wall */}
          <rect x="120" y="110" width="1200" height="660" stroke={gridStroke} strokeWidth="2.2" />
        </g>

        {/* Left Wall Perspective Grid Lines */}
        <g stroke={wallStroke} strokeWidth="1.5">
          <line x1="0" y1="140" x2="120" y2="180" />
          <line x1="0" y1="280" x2="120" y2="340" />
          <line x1="0" y1="420" x2="120" y2="500" />
          <line x1="0" y1="560" x2="120" y2="660" />
          <line x1="0" y1="700" x2="120" y2="740" />

          {/* Vertical perspective slices on left wall */}
          <line x1="30" y1="25" x2="30" y2="875" />
          <line x1="70" y1="60" x2="70" y2="840" />
        </g>

        {/* Right Wall Perspective Grid Lines */}
        <g stroke={wallStroke} strokeWidth="1.5">
          <line x1="1440" y1="140" x2="1320" y2="180" />
          <line x1="1440" y1="280" x2="1320" y2="340" />
          <line x1="1440" y1="420" x2="1320" y2="500" />
          <line x1="1440" y1="560" x2="1320" y2="660" />
          <line x1="1440" y1="700" x2="1320" y2="740" />

          {/* Vertical perspective slices on right wall */}
          <line x1="1410" y1="25" x2="1410" y2="875" />
          <line x1="1370" y1="60" x2="1370" y2="840" />
        </g>

        {/* Top Ceiling Perspective Lines */}
        <g stroke={wallStroke} strokeWidth="1.5">
          <line x1="300" y1="0" x2="330" y2="110" />
          <line x1="500" y1="0" x2="550" y2="110" />
          <line x1="720" y1="0" x2="720" y2="110" />
          <line x1="940" y1="0" x2="880" y2="110" />
          <line x1="1140" y1="0" x2="1100" y2="110" />
        </g>

        {/* Floor Perspective Lines */}
        <g stroke={wallStroke} strokeWidth="1.5">
          <line x1="280" y1="900" x2="330" y2="770" />
          <line x1="480" y1="900" x2="550" y2="770" />
          <line x1="720" y1="900" x2="720" y2="770" />
          <line x1="960" y1="900" x2="880" y2="770" />
          <line x1="1160" y1="900" x2="1100" y2="770" />
        </g>
      </svg>
    </div>
  );
};
