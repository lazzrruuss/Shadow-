import React from 'react';
import { Wallet, ArrowRightLeft, Search, CheckCircle2 } from 'lucide-react';

interface HowToBuyProps {
  contractAddress: string;
  telegramUrl: string;
}

export const HowToBuy: React.FC<HowToBuyProps> = ({ contractAddress, telegramUrl }) => {
  const steps = [
    {
      number: '01',
      title: 'GET A WALLET',
      description: 'Set up a compatible cryptocurrency wallet (e.g. Phantom, Solflare, MetaMask, or your preferred Web3 wallet). Keep your recovery phrase safe and secret.',
      icon: Wallet,
      tag: 'PREREQUISITE',
      bgColor: 'bg-[#FFF3D6]',
    },
    {
      number: '02',
      title: 'ADD FUNDS',
      description: 'Fund your wallet with the appropriate cryptocurrency (SOL or ETH) for the selected network through your preferred exchange or on-ramp.',
      icon: ArrowRightLeft,
      tag: 'FUNDING',
      bgColor: 'bg-[#FFF0E8]',
    },
    {
      number: '03',
      title: 'FIND SHADOW',
      description: `Use the official token contract address (${contractAddress}) to find $SHADOW on the decentralized exchange once live. Join Telegram for the launch drop.`,
      icon: Search,
      tag: 'EXECUTION',
      bgColor: 'bg-[#EBF5FF]',
    },
  ];

  return (
    <section id="how-to-buy" className="relative py-24 bg-[#94BEEF] border-t-4 border-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white border-2 border-black font-heading font-black text-xs uppercase tracking-widest text-black shadow-[2px_2px_0px_#000] mb-3">
            SIMPLE THREE-STEP GUIDE
          </span>
          <h2 className="font-heading text-4xl sm:text-6xl font-black text-white tracking-tight"
            style={{
              WebkitTextStroke: '3px black',
              filter: 'drop-shadow(4px 4px 0px #000000)',
            }}
          >
            HOW TO ACQUIRE $SHADOW.
          </h2>
          <p className="mt-4 text-black font-heading font-bold text-sm sm:text-base">
            Follow the glowing eyes. Step into the shadow in three simple moves.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className={`relative p-8 rounded-3xl ${step.bgColor} border-3 border-black shadow-[8px_8px_0px_#000] flex flex-col justify-between group transition-transform hover:-translate-y-1`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-heading text-5xl font-black text-black">
                      {step.number}
                    </span>
                    <div className="p-3 rounded-2xl bg-white border-2 border-black text-black shadow-[3px_3px_0px_#000]">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <span className="text-[10px] font-mono tracking-widest uppercase font-black text-black/70 mb-2 block">
                    STEP {step.number} — {step.tag}
                  </span>

                  <h3 className="font-heading text-xl font-black text-black tracking-wide mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-gray-800 font-medium leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t-2 border-black/10 flex items-center justify-between text-xs font-mono font-bold text-black">
                  <span>PHASE {step.number}</span>
                  <CheckCircle2 className="w-5 h-5 text-black" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Telegram Alert Banner */}
        <div className="mt-12 text-center">
          <a
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-black bg-white px-6 py-3 rounded-2xl border-3 border-black shadow-[4px_4px_0px_#000] hover:bg-[#FFB52E] transition-all"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF622E] border border-black animate-ping" />
            <span>Join Telegram for the instant Contract Address announcement: {telegramUrl}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
