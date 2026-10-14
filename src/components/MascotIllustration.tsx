import React, { useState, useEffect, useRef } from 'react';
import { EmbeddedMascot } from './EmbeddedMascot';
import { removeWhiteBackground } from '../utils/imageCutout';

interface MascotProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  customImageUrl?: string | null;
  onImageLoaded?: (url: string) => void;
  isolateCharacter?: boolean;
}

export const MascotIllustration: React.FC<MascotProps> = ({
  className = '',
  size = 'hero',
  customImageUrl,
  onImageLoaded,
  isolateCharacter = true,
}) => {
  const [imgSrc, setImgSrc] = useState<string | null>(customImageUrl || null);
  const [processedSrc, setProcessedSrc] = useState<string | null>(null);
  const [useVectorFallback, setUseVectorFallback] = useState<boolean>(!customImageUrl);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Check localStorage on mount if no prop passed
  useEffect(() => {
    if (typeof window !== 'undefined' && !customImageUrl) {
      const cached = localStorage.getItem('shadow_mascot_image');
      if (cached) {
        setImgSrc(cached);
        setUseVectorFallback(false);
      }
    }
  }, [customImageUrl]);

  // When raw image changes, process white background into transparent character
  useEffect(() => {
    let isMounted = true;
    if (customImageUrl) {
      setImgSrc(customImageUrl);
      setUseVectorFallback(false);
    }

    if (imgSrc && isolateCharacter) {
      removeWhiteBackground(imgSrc)
        .then((transparentUrl) => {
          if (isMounted) {
            setProcessedSrc(transparentUrl);
            setUseVectorFallback(false);
          }
        })
        .catch(() => {
          if (isMounted) {
            setUseVectorFallback(true);
          }
        });
    }

    return () => {
      isMounted = false;
    };
  }, [customImageUrl, imgSrc, isolateCharacter]);

  const sizeClasses = {
    sm: 'w-20 h-24',
    md: 'w-36 h-44 sm:w-44 sm:h-52',
    lg: 'w-52 h-60 sm:w-60 sm:h-72',
    hero: 'w-44 sm:w-56 md:w-68 lg:w-76',
  }[size];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setImgSrc(result);
          setUseVectorFallback(false);
          try {
            localStorage.setItem('shadow_mascot_image', result);
          } catch {
            // quota fallback
          }
          if (onImageLoaded) onImageLoaded(result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setImgSrc(result);
          setUseVectorFallback(false);
          try {
            localStorage.setItem('shadow_mascot_image', result);
          } catch {
            // quota fallback
          }
          if (onImageLoaded) onImageLoaded(result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className={`relative select-none flex items-center justify-center ${sizeClasses} ${className}`}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      {/* If processed or loaded image is available, render it; otherwise render embedded self-contained mascot */}
      {!useVectorFallback && (processedSrc || imgSrc) ? (
        <div className="relative w-full flex items-center justify-center">
          <img
            src={processedSrc || imgSrc || ''}
            alt="SHADOW Mascot"
            className="w-full h-auto object-contain block drop-shadow-[0_8px_0px_rgba(0,0,0,0.85)] filter"
            onError={() => {
              // Gracefully switch to embedded vector artwork if 404
              setUseVectorFallback(true);
            }}
          />
        </div>
      ) : (
        /* Guaranteed self-contained mascot vector artwork (never 404s, always renders in production) */
        <div className="relative w-full flex items-center justify-center">
          <EmbeddedMascot />
        </div>
      )}
    </div>
  );
};
