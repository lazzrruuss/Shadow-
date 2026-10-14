import React, { useState } from 'react';
import { PerspectiveGridRoom } from './PerspectiveGridRoom';
import { BottomCloudBank } from './BottomCloudBank';
import { ComicCloud1, ComicCloud2, DoodleArrowDown, DoodleArrowCurved, DoodleFlower } from './ComicClouds';
import { MascotIllustration } from './MascotIllustration';
import { Copy, Check } from 'lucide-react';
import { playEyeChime } from '../utils/audio';

interface HeroProps {
  onBuyClick: () => void;
  onEnterShadowClick?: () => void;
  contractAddress: string;
  telegramUrl: string;
  customImageUrl?: string | null;
  onImageLoaded?: (url: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onBuyClick,
  contractAddress,
  telegramUrl,
  customImageUrl,
  onImageLoaded,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    playEyeChime();
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex flex-col justify-between pt-20 pb-14 overflow-hidden bg-[#94BEEF]">
      
      {/* 3D Perspective Grid Room */}
      <PerspectiveGridRoom theme="sky" />

      {/* Floating Comic Clouds & Doodles */}
      <div className="absolute inset-0 pointer-events-none select-none z-1">
        {/* Top-Left Cloud */}
        <div className="absolute top-16 left-4 sm:left-12 md:left-24 w-28 sm:w-44 md:w-56 opacity-85">
          <ComicCloud1 />
        </div>

        {/* Top-Right Cloud */}
        <div className="absolute top-16 right-4 sm:right-12 md:right-28 w-24 sm:w-40 md:w-48 opacity-85">
          <ComicCloud2 />
        </div>

        {/* Far-Left Middle Small Cloud */}
        <div className="absolute top-[48%] -left-3 w-16 sm:w-24 opacity-80">
          <ComicCloud2 />
        </div>

        {/* Far-Right Middle Cloud */}
        <div className="absolute top-[48%] -right-3 w-20 sm:w-32 opacity-80">
          <ComicCloud1 />
        </div>

        {/* Doodle Flower on Left */}
        <div className="absolute top-[42%] left-4 sm:left-14 md:left-28 w-12 sm:w-16 md:w-20 -rotate-12">
          <DoodleFlower />
        </div>

        {/* Doodle Arrow Down (Left) */}
        <div className="absolute top-28 left-20 sm:left-36 md:left-48 w-6 sm:w-8 md:w-10">
          <DoodleArrowDown />
        </div>

        {/* Doodle Curved Arrow (Right) */}
        <div className="absolute top-36 right-12 sm:right-28 md:right-44 w-10 sm:w-14">
          <DoodleArrowCurved />
        </div>

        {/* Doodle Arrow Down (Bottom Right) */}
        <div className="absolute bottom-28 right-8 sm:right-20 md:right-32 w-6 sm:w-8">
          <DoodleArrowDown />
        </div>
      </div>

      {/* CENTERPIECE: Properly Spaced Mascot, 3D Title, Subtitle, and CTAs */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 w-full flex flex-col items-center justify-center text-center my-auto">
        
        {/* 1. MASCOT: Cutout character resting just above the title letters */}
        <div className="relative z-20 flex justify-center -mb-2 sm:-mb-4 transition-transform duration-300 hover:scale-105">
          <div className="w-36 sm:w-48 md:w-60 lg:w-68">
            <MascotIllustration
              size="hero"
              customImageUrl={customImageUrl}
              onImageLoaded={onImageLoaded}
            />
          </div>
        </div>

        {/* 2. GIANT 3D EXTRUDED TITLE: SHADOW (exact style of CAPIBRO) */}
        <div className="relative z-10 select-none w-full flex justify-center px-2">
          <h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase text-white text-center leading-none"
            style={{
              fontFamily: "'Paytone One', 'Titan One', 'Fredoka', sans-serif",
              WebkitTextStroke: '3.5px black',
              filter: 'drop-shadow(0px 4px 0px #000000) drop-shadow(0px 8px 0px #000000) drop-shadow(0px 12px 0px #000000)',
              letterSpacing: '0.01em',
            }}
          >
            SHADOW
          </h1>
        </div>

        {/* 3. SUBTITLE: Clean, legible, bold comic caption */}
        <div className="mt-7 sm:mt-9 md:mt-11 max-w-xl mx-auto px-2 relative z-10 space-y-1">
          <p
            className="text-xs sm:text-sm md:text-base text-black uppercase tracking-wide leading-snug font-extrabold"
            style={{ fontFamily: "'Fredoka', 'Plus Jakarta Sans', sans-serif" }}
          >
            SHADOW YOUR PATH THROUGH THE CRYPTO VOID
          </p>
          <p
            className="text-xs sm:text-sm md:text-base text-black uppercase tracking-wide leading-snug font-extrabold"
            style={{ fontFamily: "'Fredoka', 'Plus Jakarta Sans', sans-serif" }}
          >
            IN A WORLD OF NOISY MEMES AND TOKENS, SHADOW IS PURE WATCHER
          </p>
        </div>

        {/* 4. CONTRACT ADDRESS BAR: White rounded box with black border and offset drop shadow */}
        <div className="mt-6 w-full max-w-md sm:max-w-lg">
          <div className="flex items-center justify-between p-1.5 pl-4 sm:pl-5 bg-white border-3 border-black rounded-xl shadow-[4px_4px_0px_#000] transition-transform active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#000]">
            <span className="font-mono font-bold text-xs sm:text-sm text-black tracking-wider truncate select-all">
              {contractAddress}
            </span>
            <button
              onClick={handleCopy}
              type="button"
              className="px-4 py-1.5 rounded-lg bg-[#FFB52E] hover:bg-[#FFA01A] border-2 border-black font-black text-xs text-black shadow-[2px_2px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all flex items-center gap-1.5 cursor-pointer uppercase flex-shrink-0"
              style={{ fontFamily: "'Fredoka', sans-serif" }}
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>

        {/* 5. TWO NEO-BRUTALIST ACTION BUTTONS */}
        <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md">
          {/* Buy $SHADOW */}
          <button
            onClick={onBuyClick}
            type="button"
            className="w-full sm:w-1/2 py-3.5 px-6 rounded-xl bg-[#FFB52E] hover:bg-[#FFA01A] border-3 border-black font-black text-sm sm:text-base text-black shadow-[4px_4px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_#000] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all cursor-pointer uppercase tracking-wider"
            style={{ fontFamily: "'Fredoka', sans-serif" }}
          >
            Buy $SHADOW
          </button>

          {/* Join Telegram */}
          <a
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-1/2 py-3.5 px-6 rounded-xl bg-white hover:bg-gray-100 border-3 border-black font-black text-sm sm:text-base text-black shadow-[4px_4px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_#000] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all cursor-pointer uppercase tracking-wider text-center"
            style={{ fontFamily: "'Fredoka', sans-serif" }}
          >
            Join Telegram
          </a>
        </div>

      </div>

      {/* Bottom Comic Cloud Bank */}
      <BottomCloudBank />
    </section>
  );
};
