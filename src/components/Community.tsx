import React from 'react';
import { Send, Users } from 'lucide-react';
import { ComicCloud1, ComicCloud2, DoodleFlower } from './ComicClouds';

interface CommunityProps {
  telegramUrl: string;
}

export const Community: React.FC<CommunityProps> = ({ telegramUrl }) => {
  return (
    <section id="community" className="relative py-28 bg-[#FFF9F0] border-t-4 border-black overflow-hidden">
      
      {/* Decorative Comic Clouds in Community */}
      <div className="absolute top-10 left-10 w-40 opacity-70 pointer-events-none">
        <ComicCloud1 />
      </div>
      <div className="absolute top-16 right-10 w-36 opacity-70 pointer-events-none">
        <ComicCloud2 />
      </div>
      <div className="absolute bottom-12 right-24 w-16 opacity-80 pointer-events-none">
        <DoodleFlower />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border-2 border-black mb-6 shadow-[2px_2px_0px_#000]">
          <Users className="w-4 h-4 text-black" />
          <span className="text-xs font-mono font-black tracking-widest text-black uppercase">
            COMMUNITY FIRST
          </span>
        </div>

        <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl font-black text-black tracking-tight mb-6 drop-shadow-[3px_3px_0px_#FFB52E]">
          THE SHADOWS ARE<br />
          GATHERING.
        </h2>

        <p className="text-lg sm:text-2xl text-gray-800 max-w-xl mx-auto font-heading font-bold leading-relaxed mb-10">
          Every corner of the internet has a shadow. Find yours.
        </p>

        {/* Action Buttons: Telegram (active) and X (Pending) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 max-w-md mx-auto">
          {/* JOIN TELEGRAM */}
          <a
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-black text-black bg-[#FFB52E] hover:bg-[#FFA01A] border-3 border-black rounded-2xl shadow-[4px_4px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all font-heading tracking-wider"
          >
            <Send className="w-5 h-5 text-black" />
            <span>TELEGRAM</span>
          </a>

          {/* FOLLOW ON X: Pending */}
          <div
            className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-black text-gray-500 bg-white border-3 border-black rounded-2xl shadow-[4px_4px_0px_#000] font-heading tracking-wider cursor-not-allowed select-none"
            title="X (Twitter) will be announced soon"
          >
            <svg className="w-4 h-4 fill-current opacity-60" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span>X: PENDING</span>
          </div>
        </div>

      </div>
    </section>
  );
};
