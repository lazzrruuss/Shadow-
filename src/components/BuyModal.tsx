import React, { useState } from 'react';
import { X, Send, Copy, Check, Clock } from 'lucide-react';
import { playEyeChime } from '../utils/audio';

interface BuyModalProps {
  isOpen: boolean;
  onClose: () => void;
  contractAddress: string;
  telegramUrl: string;
}

export const BuyModal: React.FC<BuyModalProps> = ({
  isOpen,
  onClose,
  contractAddress,
  telegramUrl,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    playEyeChime();
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-white border-4 border-black shadow-[10px_10px_0px_#000] text-black">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 p-2 rounded-xl bg-gray-100 hover:bg-[#FFB52E] border-2 border-black text-black transition-colors shadow-[2px_2px_0px_#000]"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[#FFB52E] border-2 border-black flex items-center justify-center text-black font-black text-xl font-heading shadow-[3px_3px_0px_#000]">
            $
          </div>
          <div>
            <h3 className="font-heading text-2xl font-black text-black">
              Acquire $SHADOW
            </h3>
            <p className="text-xs text-[#FF622E] font-mono font-bold">
              Launch Status: Pending
            </p>
          </div>
        </div>

        {/* Status Callout */}
        <div className="p-4 rounded-2xl bg-[#FFF3D6] border-2 border-black mb-6 flex items-start gap-3 text-xs text-black shadow-[3px_3px_0px_#000]">
          <Clock className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
          <p className="font-medium">
            The official $SHADOW contract address and trading liquidity are pending launch. Do not buy any unauthorized copycat tokens.
          </p>
        </div>

        {/* Official CA Box */}
        <div className="p-4 rounded-2xl bg-[#F0F7FF] border-2 border-black mb-6 shadow-[3px_3px_0px_#000]">
          <span className="block text-[10px] font-mono uppercase font-black text-black mb-1">
            Contract Address (CA)
          </span>
          <p className="font-mono text-xl text-black font-black mb-3">
            {contractAddress}
          </p>
          <button
            onClick={handleCopy}
            type="button"
            className="w-full py-2.5 rounded-xl bg-white hover:bg-[#FFB52E] border-2 border-black text-xs font-mono font-black text-black flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[2px_2px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'COPIED!' : 'COPY STATUS'}</span>
          </button>
        </div>

        {/* Join Official Telegram */}
        <a
          href={telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-4 rounded-2xl font-heading font-black text-sm text-black bg-[#FFB52E] hover:bg-[#FFA01A] border-3 border-black shadow-[4px_4px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none flex items-center justify-center gap-2 transition-all mb-4 uppercase tracking-wider"
        >
          <Send className="w-4 h-4 text-black" />
          <span>JOIN TELEGRAM FOR LAUNCH</span>
        </a>

        <div className="text-[11px] font-mono text-gray-500 text-center font-medium">
          Official channel: <span className="text-black font-bold">{telegramUrl}</span>
        </div>

      </div>
    </div>
  );
};
