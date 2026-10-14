import React, { useState } from 'react';
import { Copy, Check, ArrowUp } from 'lucide-react';
import { playEyeChime } from '../utils/audio';

interface FooterProps {
  contractAddress: string;
  telegramUrl: string;
}

export const Footer: React.FC<FooterProps> = ({ contractAddress, telegramUrl }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    playEyeChime();
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    playEyeChime();
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'The Lore', href: '#lore' },
    { name: 'Tokenomics', href: '#tokenomics' },
    { name: 'Community', href: '#community' },
  ];

  return (
    <footer className="relative bg-[#080812] border-t-4 border-black pt-16 pb-12 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b-2 border-white/10">
          
          {/* Brand Info (col-span-5) */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-full border-2 border-black bg-[#FFB52E] overflow-hidden shadow-[2px_2px_0px_#000] flex-shrink-0 flex items-center justify-center">
                <img
                  src="/grok_1791989973132.jpg"
                  alt="SHADOW"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-heading text-3xl font-black text-[#FFB52E] tracking-wider drop-shadow-[2px_2px_0px_#000]">
                SHADOW
              </span>
            </div>

            <p className="text-sm text-gray-300 max-w-sm mb-6 leading-relaxed font-medium">
              A mysterious dark cat with supernatural glowing eyes. Born in the dark. Powered by the internet.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {/* X: Pending */}
              <div
                className="h-10 px-3.5 rounded-xl bg-white border-2 border-black text-black font-mono font-bold text-xs flex items-center gap-2 shadow-[3px_3px_0px_#000] cursor-not-allowed select-none"
                title="X: Pending"
              >
                <svg className="w-3.5 h-3.5 fill-current opacity-70" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span>X: Pending</span>
              </div>

              {/* Telegram */}
              <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 px-4 rounded-xl bg-[#FFB52E] border-2 border-black text-black font-mono font-black text-xs flex items-center gap-2 shadow-[3px_3px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#000] transition-all"
                aria-label="Telegram"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                <span>Telegram</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links (col-span-3) */}
          <div className="md:col-span-3">
            <h4 className="font-heading text-sm font-black uppercase tracking-wider text-[#FFB52E] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm font-bold">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#FFB52E] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contract Address: Pending (col-span-4) */}
          <div className="md:col-span-4">
            <h4 className="font-heading text-sm font-black uppercase tracking-wider text-[#FFB52E] mb-4">
              Official Token Contract
            </h4>
            
            <div className="p-4 rounded-2xl bg-white border-2 border-black text-black shadow-[4px_4px_0px_#000] mb-4">
              <span className="block text-[10px] font-mono uppercase text-gray-500 font-bold mb-1">
                Contract Address (CA)
              </span>
              <p className="font-mono text-lg font-black text-black mb-3">
                {contractAddress}
              </p>
              
              <button
                onClick={handleCopy}
                type="button"
                className="w-full py-2.5 px-3 rounded-xl bg-[#FFB52E] border-2 border-black text-xs font-black text-black transition-all flex items-center justify-center gap-1.5 font-mono cursor-pointer shadow-[2px_2px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy Status'}</span>
              </button>
            </div>

            <button
              onClick={scrollToTop}
              type="button"
              className="inline-flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-[#FFB52E] transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-mono">
          <p>
            &copy; {new Date().getFullYear()} SHADOW ($SHADOW). Every shadow has a story.
          </p>
          <a
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFB52E] font-bold hover:underline"
          >
            Official Telegram Channel
          </a>
        </div>

      </div>
    </footer>
  );
};
