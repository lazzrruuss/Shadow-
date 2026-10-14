import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { playEyeChime } from '../utils/audio';

interface NavbarProps {
  onBuyClick: () => void;
  telegramUrl?: string;
  soundEnabled?: boolean;
  onToggleSound?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBuyClick, telegramUrl }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'The Lore', href: '#lore' },
    { name: 'Tokenomics', href: '#tokenomics' },
    { name: 'Community', href: '#community' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    playEyeChime();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Mascot circle icon + Wordmark (styled like CAPIBRO logo) */}
        <a
          href="#home"
          className="flex items-center gap-2.5 group select-none"
        >
          {/* Circular avatar with black border */}
          <div className="w-10 h-10 rounded-full border-2 border-black bg-[#FFB52E] overflow-hidden shadow-[2px_2px_0px_#000] flex-shrink-0 flex items-center justify-center">
            <img
              src="/grok_1791989973132.jpg"
              alt="SHADOW"
              className="w-full h-full object-cover"
              onError={(e) => {
                // If local image not yet loaded, show glowing eyes
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>

          {/* Yellow bold wordmark with black drop shadow */}
          <span
            className="text-2xl font-black text-[#FFB52E] tracking-wide"
            style={{
              fontFamily: "'Paytone One', 'Titan One', 'Fredoka', sans-serif",
              filter: 'drop-shadow(2px 2px 0px #000000)',
            }}
          >
            SHADOW
          </span>
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-bold text-[#080812] hover:text-[#FF622E] transition-colors py-1 cursor-pointer"
              style={{ fontFamily: "'Fredoka', 'Plus Jakarta Sans', sans-serif" }}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Buy Now button (Neo-brutalist yellow with black border & hard drop shadow) */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onBuyClick}
            type="button"
            className="px-6 py-2 rounded-xl bg-[#FFB52E] hover:bg-[#FFA01A] border-2 border-black font-extrabold text-sm text-[#080812] shadow-[3px_3px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#000] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all cursor-pointer tracking-wider"
            style={{ fontFamily: "'Fredoka', sans-serif" }}
          >
            Buy Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="p-2 rounded-lg bg-[#FFB52E] border-2 border-black shadow-[2px_2px_0px_#000] text-black"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 mx-2 p-5 rounded-2xl bg-white border-3 border-black shadow-[6px_6px_0px_#000] animate-fadeIn">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-base font-bold text-black hover:text-[#FF622E] py-2 border-b border-gray-200"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBuyClick();
              }}
              type="button"
              className="mt-2 w-full py-3 rounded-xl bg-[#FFB52E] border-2 border-black font-heading font-black text-sm text-black shadow-[3px_3px_0px_#000]"
            >
              Buy Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
