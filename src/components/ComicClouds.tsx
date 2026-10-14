import React from 'react';

interface CloudProps {
  className?: string;
  style?: React.CSSProperties;
}

export const ComicCloud1: React.FC<CloudProps> = ({ className = '', style }) => (
  <svg
    viewBox="0 0 220 95"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`filter drop-shadow-[3px_4px_0px_rgba(0,0,0,0.85)] ${className}`}
    style={style}
  >
    <path
      d="M38 75 C18 75 8 62 10 48 C10 35 24 24 40 28 C48 14 68 8 90 14 C104 5 128 6 142 16 C158 8 182 12 192 26 C206 32 212 48 206 62 C200 74 185 75 170 75 Z"
      fill="#FFFFFF"
      stroke="#000000"
      strokeWidth="3.5"
      strokeLinejoin="round"
    />
    {/* Inner shadow/shading line */}
    <path
      d="M45 68 C30 68 22 60 22 52 M75 68 C90 68 140 68 165 68"
      stroke="#CBD5E1"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

export const ComicCloud2: React.FC<CloudProps> = ({ className = '', style }) => (
  <svg
    viewBox="0 0 160 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`filter drop-shadow-[3px_4px_0px_rgba(0,0,0,0.85)] ${className}`}
    style={style}
  >
    <path
      d="M26 62 C12 62 5 50 8 38 C10 26 24 20 36 22 C44 10 65 8 82 14 C94 8 114 10 124 20 C138 24 145 38 140 50 C135 60 122 62 110 62 Z"
      fill="#FFFFFF"
      stroke="#000000"
      strokeWidth="3.5"
      strokeLinejoin="round"
    />
  </svg>
);

export const DoodleArrowDown: React.FC<CloudProps> = ({ className = '', style }) => (
  <svg
    viewBox="0 0 40 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <path
      d="M18 5 C15 25 12 45 20 65"
      stroke="#000000"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M10 52 L20 66 L28 54"
      stroke="#000000"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const DoodleArrowCurved: React.FC<CloudProps> = ({ className = '', style }) => (
  <svg
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <path
      d="M10 45 C15 20 35 15 48 25"
      stroke="#000000"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M36 20 L50 25 L45 38"
      stroke="#000000"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const DoodleFlower: React.FC<CloudProps> = ({ className = '', style }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`filter drop-shadow-[3px_3px_0px_#000] ${className}`}
    style={style}
  >
    <path
      d="M50 30 C45 10 25 10 25 30 C10 30 10 50 25 55 C10 65 20 85 40 75 C45 90 65 90 65 75 C80 85 90 65 75 55 C90 50 90 30 75 30 C75 10 55 10 50 30 Z"
      fill="#FFB52E"
      stroke="#000000"
      strokeWidth="4"
      strokeLinejoin="round"
    />
    <circle cx="50" cy="50" r="10" fill="#000000" />
  </svg>
);
