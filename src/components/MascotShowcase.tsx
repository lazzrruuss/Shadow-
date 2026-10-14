import React, { useState } from 'react';
import { MascotIllustration } from './MascotIllustration';
import { Eye, Moon, Wifi } from 'lucide-react';

interface MascotShowcaseProps {
  customImageUrl?: string | null;
  onImageLoaded?: (url: string) => void;
}

export const MascotShowcase: React.FC<MascotShowcaseProps> = ({ customImageUrl, onImageLoaded }) => {
  const [activeTrait, setActiveTrait] = useState<number>(0);

  const traits = [
    {
      title: 'ALWAYS WATCHING',
      icon: Eye,
      bgColor: 'bg-[#FFF3D6]',
      badgeColor: 'bg-[#FFB52E]',
      summary: 'Those glowing amber eyes miss nothing.',
      description:
        'Lurking in the shadows of every group chat, trading desk, and meme feed. Shadow sees every dip, every pump, and every midnight scroll.',
      stat: 'Peripheral Vision: 100%',
    },
    {
      title: 'NEVER SLEEPING',
      icon: Moon,
      bgColor: 'bg-[#FFF0E8]',
      badgeColor: 'bg-[#FF622E]',
      summary: 'Markets sleep. Shadows don’t.',
      description:
        'While standard cats sleep 16 hours a day, Shadow operates strictly in the twilight realm of global liquidity. Night owl energy refined into memetic culture.',
      stat: '24/7 Night Shift',
    },
    {
      title: 'CHRONICALLY ONLINE',
      icon: Wifi,
      bgColor: 'bg-[#EBF5FF]',
      badgeColor: 'bg-[#60A5FA]',
      summary: 'Native to the digital underground.',
      description:
        'Born from internet culture and cyberspace. Never leaves the keyboard. Always unbothered with a permanent blep.',
      stat: 'Decentralized Native',
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-[#94BEEF] border-t-4 border-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white border-2 border-black font-heading font-black text-xs uppercase tracking-widest text-black shadow-[2px_2px_0px_#000] mb-3">
            THE FELINE PHENOMENON
          </span>
          <h2 className="font-heading text-4xl sm:text-6xl font-black text-white tracking-tight"
            style={{
              WebkitTextStroke: '3px black',
              filter: 'drop-shadow(4px 4px 0px #000000)',
            }}
          >
            MEET YOUR SHADOW.
          </h2>
          <p className="mt-4 text-black font-heading font-bold text-sm sm:text-base max-w-xl mx-auto">
            A supernatural dark cat with glowing amber eyes, playful pointed ears, and an unbothered blep.
          </p>
        </div>

        {/* Mascot Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Personality Traits Column (lg:col-span-6) */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {traits.map((trait, idx) => {
              const Icon = trait.icon;
              const isActive = activeTrait === idx;

              return (
                <div
                  key={trait.title}
                  onClick={() => setActiveTrait(idx)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-200 border-3 border-black ${
                    isActive
                      ? `${trait.bgColor} shadow-[6px_6px_0px_#000] translate-x-1`
                      : 'bg-white shadow-[4px_4px_0px_#000] hover:shadow-[5px_5px_0px_#000]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl border-2 border-black ${trait.badgeColor} shadow-[2px_2px_0px_#000]`}>
                        <Icon className="w-5 h-5 text-black" />
                      </div>
                      <h3 className="font-heading text-lg font-black tracking-wide text-black">
                        {trait.title}
                      </h3>
                    </div>

                    <span className="text-xs font-mono font-black text-black">
                      0{idx + 1}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm font-bold text-[#FF622E] mb-1 font-heading">
                    {trait.summary}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-800 font-medium leading-relaxed">
                    {trait.description}
                  </p>

                  <div className="mt-3 pt-3 border-t-2 border-black/10 flex items-center justify-between text-xs font-mono font-bold text-black">
                    <span>TRAIT STATUS</span>
                    <span className="text-[#080812] bg-[#FFB52E] px-2 py-0.5 rounded border border-black">
                      {trait.stat}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Central Mascot Card (lg:col-span-6) */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="relative w-full max-w-md p-6 sm:p-8 rounded-3xl bg-white border-3 border-black shadow-[8px_8px_0px_#000] flex flex-col items-center">
              
              <div className="w-full flex items-center justify-between pb-3 border-b-2 border-black font-mono text-xs font-bold text-black">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF622E] border border-black" />
                  SHADOW MASCOT
                </span>
                <span className="bg-[#FFB52E] px-2 py-0.5 rounded border border-black text-[11px]">
                  ACTIVE
                </span>
              </div>

              {/* Direct Mascot Image */}
              <div className="py-4 my-2 flex justify-center w-full">
                <MascotIllustration
                  size="hero"
                  customImageUrl={customImageUrl}
                  onImageLoaded={onImageLoaded}
                />
              </div>

              {/* Anatomy details callout row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full pt-4 border-t-2 border-black">
                <div className="p-2 rounded-xl bg-[#FFF3D6] border-2 border-black text-center shadow-[2px_2px_0px_#000]">
                  <span className="block text-[9px] uppercase font-mono font-black text-black">Ears</span>
                  <span className="text-xs font-black text-black">Pointed</span>
                </div>
                <div className="p-2 rounded-xl bg-[#FFF0E8] border-2 border-black text-center shadow-[2px_2px_0px_#000]">
                  <span className="block text-[9px] uppercase font-mono font-black text-[#FF622E]">Eyes</span>
                  <span className="text-xs font-black text-black">Glowing</span>
                </div>
                <div className="p-2 rounded-xl bg-[#EBF5FF] border-2 border-black text-center shadow-[2px_2px_0px_#000]">
                  <span className="block text-[9px] uppercase font-mono font-black text-blue-700">Muzzle</span>
                  <span className="text-xs font-black text-black">Pink Blep</span>
                </div>
                <div className="p-2 rounded-xl bg-[#F5F3FF] border-2 border-black text-center shadow-[2px_2px_0px_#000]">
                  <span className="block text-[9px] uppercase font-mono font-black text-purple-700">Fur</span>
                  <span className="text-xs font-black text-black">Midnight</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
