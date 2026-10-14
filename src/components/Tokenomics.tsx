import React, { useState } from 'react';
import { Copy, Check, ShieldCheck, Coins, Flame, Layers, Lock } from 'lucide-react';
import { playEyeChime } from '../utils/audio';

interface TokenomicsProps {
  contractAddress: string;
}

export const Tokenomics: React.FC<TokenomicsProps> = ({ contractAddress }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    playEyeChime();
    setTimeout(() => setCopied(false), 2200);
  };

  const tokenMetrics = [
    {
      title: 'TOTAL SUPPLY',
      value: '1,000,000,000',
      symbol: '$SHADOW',
      note: 'Total supply at launch',
      icon: Coins,
      badgeColor: 'bg-[#FFB52E]',
    },
    {
      title: 'NETWORK',
      value: 'Solana / EVM',
      symbol: 'TBA',
      note: 'Confirmed upon launch',
      icon: Layers,
      badgeColor: 'bg-[#FF622E]',
    },
    {
      title: 'LIQUIDITY',
      value: '100% LOCKED',
      symbol: 'LP BURNED',
      note: 'Secured at launch',
      icon: Lock,
      badgeColor: 'bg-[#60A5FA]',
    },
    {
      title: 'TAX',
      value: '0% / 0%',
      symbol: 'NO TAX',
      note: '0% Buy / 0% Sell on DEX',
      icon: Flame,
      badgeColor: 'bg-[#4ADE80]',
    },
  ];

  return (
    <section id="tokenomics" className="relative py-24 bg-[#FFF9F0] border-t-4 border-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FFB52E] border-2 border-black font-heading font-black text-xs uppercase tracking-widest text-black shadow-[2px_2px_0px_#000] mb-3">
            TRANSPARENT & DECENTRALIZED
          </span>
          <h2 className="font-heading text-4xl sm:text-6xl font-black text-black tracking-tight drop-shadow-[2px_2px_0px_#FFB52E]">
            THE DARK SIDE OF TOKENOMICS.
          </h2>
          <p className="mt-4 text-black font-heading font-bold text-sm sm:text-base">
            Straightforward, community-first tokenomics designed to thrive in the dark.
          </p>
        </div>

        {/* Contract Address Callout Banner */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="p-6 rounded-3xl bg-white border-3 border-black shadow-[8px_8px_0px_#000]">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-mono uppercase tracking-wider font-bold mb-1 text-black">
                  <ShieldCheck className="w-4 h-4 text-[#FF622E]" />
                  <span>Official Token Contract Address</span>
                </div>
                <p className="font-mono text-2xl font-black text-black">
                  {contractAddress}
                </p>
                <p className="text-xs text-gray-600 mt-1 font-mono font-medium">
                  Official contract address will be announced on Telegram
                </p>
              </div>

              <button
                onClick={handleCopy}
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-black text-black bg-[#FFB52E] hover:bg-[#FFA01A] active:translate-x-1 active:translate-y-1 active:shadow-none rounded-xl border-2 border-black shadow-[4px_4px_0px_#000] transition-all cursor-pointer whitespace-nowrap font-heading uppercase tracking-wider"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>COPIED!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>COPY STATUS</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* 4 Core Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tokenMetrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.title}
                className="p-6 rounded-2xl bg-white border-3 border-black shadow-[6px_6px_0px_#000] transition-transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-black font-black">
                    {metric.title}
                  </span>
                  <div className={`p-2 rounded-xl border-2 border-black ${metric.badgeColor} shadow-[2px_2px_0px_#000]`}>
                    <Icon className="w-4 h-4 text-black" />
                  </div>
                </div>

                <div className="mb-1">
                  <span className="font-heading text-2xl sm:text-3xl font-black text-black tracking-tight">
                    {metric.value}
                  </span>
                </div>

                <div className="text-xs font-mono font-bold text-[#FF622E] mb-2">
                  {metric.symbol}
                </div>

                <p className="text-xs text-gray-600 font-medium pt-3 border-t-2 border-black/10">
                  {metric.note}
                </p>
              </div>
            );
          })}
        </div>

        {/* Visual Allocation Breakdown Bar */}
        <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-white border-3 border-black shadow-[6px_6px_0px_#000]">
          <div className="flex items-center justify-between mb-4 text-xs font-mono font-bold text-black">
            <span className="uppercase tracking-wider">Token Distribution Breakdown</span>
            <span className="bg-[#FFB52E] px-2 py-0.5 rounded border border-black">Launch Allocation</span>
          </div>

          {/* Allocation Progress Bar */}
          <div className="w-full h-6 rounded-full bg-gray-100 overflow-hidden flex gap-1 p-1 border-2 border-black shadow-inner">
            <div className="h-full bg-[#FFB52E] rounded-l-full border-r border-black" style={{ width: '85%' }} title="85% Liquidity Pool" />
            <div className="h-full bg-[#FF622E] border-r border-black" style={{ width: '10%' }} title="10% Community Airdrop & Memes" />
            <div className="h-full bg-[#60A5FA] rounded-r-full" style={{ width: '5%' }} title="5% Ecosystem & CEX" />
          </div>

          {/* Legend */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 text-xs font-mono font-bold">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded border border-black bg-[#FFB52E]" />
              <span className="text-black">85% — Fair Launch / Liquidity</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded border border-black bg-[#FF622E]" />
              <span className="text-black">10% — Community & Memes</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded border border-black bg-[#60A5FA]" />
              <span className="text-black">5% — CEX / Ecosystem</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
