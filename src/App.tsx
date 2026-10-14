/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TheLore } from './components/TheLore';
import { MascotShowcase } from './components/MascotShowcase';
import { Tokenomics } from './components/Tokenomics';
import { HowToBuy } from './components/HowToBuy';
import { Community } from './components/Community';
import { Footer } from './components/Footer';
import { BuyModal } from './components/BuyModal';
import { playEyeChime, playPurrSound } from './utils/audio';

export default function App() {
  // Official Contract Address: Pending
  const contractAddress = 'Pending';
  
  // Official Telegram Link
  const telegramUrl = 'https://t.me/+jvdnfnrMCKpkZTFh';

  // Sound effects toggle
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Buy Modal
  const [isBuyModalOpen, setIsBuyModalOpen] = useState<boolean>(false);

  // Mascot Image URL (loaded from localStorage if cached or default to grok_1791989973132.jpg)
  const [customImageUrl, setCustomImageUrl] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('shadow_mascot_image');
    }
    return null;
  });

  // Cursor tracking for subtle atmospheric ember aura
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleToggleSound = () => {
    setSoundEnabled((prev) => {
      const next = !prev;
      if (next) {
        playEyeChime();
      }
      return next;
    });
  };

  const handleOpenBuyModal = () => {
    setIsBuyModalOpen(true);
    playEyeChime();
  };

  const handleEnterShadow = () => {
    playPurrSound();
    const loreSection = document.getElementById('lore');
    if (loreSection) {
      loreSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleImageLoaded = (url: string) => {
    setCustomImageUrl(url);
  };

  return (
    <div className="min-h-screen bg-[#080812] text-[#F5F1EB] relative selection:bg-[#FF622E]/30 selection:text-[#FFB52E]">
      
      {/* Subtle cursor aura light following the mouse */}
      <div
        className="fixed w-[360px] h-[360px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 z-0 opacity-20 blur-[100px]"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          background: 'radial-gradient(circle, rgba(255, 181, 46, 0.4) 0%, rgba(255, 98, 46, 0.15) 45%, transparent 70%)',
        }}
      />

      {/* Navigation Bar */}
      <Navbar
        onBuyClick={handleOpenBuyModal}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
      />

      {/* Main Content */}
      <main className="relative z-10">
        {/* 1. Hero Section */}
        <Hero
          onBuyClick={handleOpenBuyModal}
          onEnterShadowClick={handleEnterShadow}
          contractAddress={contractAddress}
          telegramUrl={telegramUrl}
          customImageUrl={customImageUrl}
          onImageLoaded={handleImageLoaded}
        />

        {/* 2. The Lore Section */}
        <TheLore
          customImageUrl={customImageUrl}
          onImageLoaded={handleImageLoaded}
        />

        {/* 3. Mascot Showcase Section */}
        <MascotShowcase
          customImageUrl={customImageUrl}
          onImageLoaded={handleImageLoaded}
        />

        {/* 4. Tokenomics Section */}
        <Tokenomics contractAddress={contractAddress} />

        {/* 5. How To Buy Section (Simulation part removed) */}
        <HowToBuy
          contractAddress={contractAddress}
          telegramUrl={telegramUrl}
        />

        {/* 6. Community Section */}
        <Community telegramUrl={telegramUrl} />
      </main>

      {/* Footer (Disclaimer removed) */}
      <Footer
        contractAddress={contractAddress}
        telegramUrl={telegramUrl}
      />

      {/* Buy Modal Dialog */}
      <BuyModal
        isOpen={isBuyModalOpen}
        onClose={() => setIsBuyModalOpen(false)}
        contractAddress={contractAddress}
        telegramUrl={telegramUrl}
      />

    </div>
  );
}
