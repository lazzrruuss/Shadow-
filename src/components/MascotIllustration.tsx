import React, { useState, useEffect, useRef } from 'react';
import { EmbeddedMascot } from './EmbeddedMascot';

interface MascotProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  customImageUrl?: string | null;
  onImageLoaded?: (url: string) => void;
}

export const MascotIllustration: React.FC<MascotProps> = ({
  className = '',
  size = 'hero',
  customImageUrl,
  onImageLoaded,
}) => {
  const [imgSrc, setImgSrc] = useState<string>(
    customImageUrl || '/mascot.svg'
  );
  const [hasError, setHasError] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Check localStorage for uploaded custom image
  useEffect(() => {
    if (typeof window !== 'undefined' && !customImageUrl) {
      const cached = localStorage.getItem('shadow_mascot_image');
      if (cached) {
        setImgSrc(cached);
      }
    }
  }, [customImageUrl]);

  useEffect(() => {
    if (customImageUrl) {
      setImgSrc(customImageUrl);
      setHasError(false);
    }
  }, [customImageUrl]);

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
          setHasError(false);
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
          setHasError(false);
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
      className={`relative select-none flex items-center justify-center cursor-pointer ${sizeClasses} ${className}`}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      onClick={() => fileInputRef.current?.click()}
      title="SHADOW Mascot"
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Render the image, with instant inline SVG fallback if file fails */}
      {!hasError ? (
        <div className="relative w-full flex items-center justify-center">
          <img
            src={imgSrc}
            alt="SHADOW Mascot"
            className="w-full h-auto object-contain block drop-shadow-[0_8px_0px_rgba(0,0,0,0.85)] filter"
            onError={() => setHasError(true)}
          />
        </div>
      ) : (
        <div className="relative w-full flex items-center justify-center">
          <EmbeddedMascot />
        </div>
      )}
    </div>
  );
};
