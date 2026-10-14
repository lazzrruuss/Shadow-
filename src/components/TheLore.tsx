import React from 'react';
import { MascotIllustration } from './MascotIllustration';
import { Eye, Flame } from 'lucide-react';

interface TheLoreProps {
  customImageUrl?: string | null;
  onImageLoaded?: (url: string) => void;
}

export const TheLore: React.FC<TheLoreProps> = ({ customImageUrl, onImageLoaded }) => {
  return (
    <section id="lore" className="relative py-24 bg-[#FFF9F0] border-t-4 border-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FFB52E] border-2 border-black font-heading font-black text-xs uppercase tracking-widest text-black shadow-[2px_2px_0px_#000] mb-3">
            THE CHRONICLES OF $SHADOW
          </span>
          <h2 className="font-heading text-4xl sm:text-6xl font-black text-black tracking-tight drop-shadow-[2px_2px_0px_#FFB52E]">
            EVERY SHADOW HAS A STORY.
          </h2>
        </div>

        {/* Story Grid with Mascot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Mascot in Neo-brutalist Card (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative p-6 rounded-3xl bg-white border-3 border-black shadow-[8px_8px_0px_#000] w-full max-w-md flex flex-col items-center">
              <div className="w-full">
                <MascotIllustration
                  size="md"
                  customImageUrl={customImageUrl}
                  onImageLoaded={onImageLoaded}
                />
              </div>
              <div className="mt-4 px-4 py-1.5 rounded-xl bg-[#FFB52E] border-2 border-black font-mono font-bold text-xs text-black shadow-[2px_2px_0px_#000]">
                SHADOW: WATCHING EVERYTHING
              </div>
            </div>
          </div>

          {/* Lore Copy in Neo-brutalist Card (lg:col-span-7) */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-white border-3 border-black shadow-[8px_8px_0px_#000] space-y-5 text-black font-sans">
              
              <div className="p-4 rounded-xl bg-[#FFF3D6] border-2 border-black">
                <p className="font-heading text-lg sm:text-xl font-bold text-black">
                  &ldquo;They said nothing good comes out of the dark.&rdquo;
                </p>
                <p className="text-lg sm:text-xl font-black text-[#FF622E] mt-1">
                  Then two glowing eyes appeared.
                </p>
              </div>

              <p className="text-base sm:text-lg font-medium leading-relaxed">
                No one knows where Shadow came from. No one knows what Shadow wants. But wherever the internet goes, Shadow follows.
              </p>

              <div className="flex flex-wrap items-center gap-3 py-1">
                <span className="px-4 py-1 rounded-lg bg-[#FFB52E] border-2 border-black font-heading font-extrabold text-xs uppercase shadow-[2px_2px_0px_#000]">
                  Silent.
                </span>
                <span className="px-4 py-1 rounded-lg bg-white border-2 border-black font-heading font-extrabold text-xs uppercase shadow-[2px_2px_0px_#000]">
                  Unbothered.
                </span>
                <span className="px-4 py-1 rounded-lg bg-[#FF622E] text-white border-2 border-black font-heading font-extrabold text-xs uppercase shadow-[2px_2px_0px_#000]">
                  Unforgettable.
                </span>
              </div>

              <p className="text-base sm:text-lg font-medium leading-relaxed">
                Some call it a legend. Others call it a meme.
              </p>

              <p className="font-heading text-2xl sm:text-3xl font-black text-black">
                Shadow calls it <span className="text-[#FF622E] underline decoration-4">Tuesday.</span>
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t-2 border-black/10">
                <div className="p-4 rounded-xl bg-[#F0F7FF] border-2 border-black shadow-[3px_3px_0px_#000]">
                  <div className="flex items-center gap-2 mb-1">
                    <Eye className="w-4 h-4 text-black" />
                    <span className="font-heading font-black text-xs uppercase">Sight Beyond Sight</span>
                  </div>
                  <p className="text-xs text-gray-700 font-medium">
                    Sees through the darkness of the internet with supernatural amber clarity.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FFF0E8] border-2 border-black shadow-[3px_3px_0px_#000]">
                  <div className="flex items-center gap-2 mb-1">
                    <Flame className="w-4 h-4 text-[#FF622E]" />
                    <span className="font-heading font-black text-xs uppercase">The Blep Of Power</span>
                  </div>
                  <p className="text-xs text-gray-700 font-medium">
                    The tiny pink tongue sticking out symbolizes peak internet chill.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
