import React, { useState, useEffect, useRef } from 'react';

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
  // Candidate image paths to check
  const candidateUrls = [
    '/msgId1791989841121.jpg',
    '/mascot.jpg',
    '/grok_1791989972558.jpg',
    '/grok_1791989973132.jpg',
  ];

  const [candidateIndex, setCandidateIndex] = useState<number>(0);
  const [imgSrc, setImgSrc] = useState<string>(
    customImageUrl || candidateUrls[0]
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Check localStorage for any previously selected/uploaded mascot image
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
          try {
            localStorage.setItem('shadow_mascot_image', result);
          } catch {
            // storage quota fallback
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
          try {
            localStorage.setItem('shadow_mascot_image', result);
          } catch {
            // storage quota fallback
          }
          if (onImageLoaded) onImageLoaded(result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageError = () => {
    if (candidateIndex + 1 < candidateUrls.length) {
      const nextIndex = candidateIndex + 1;
      setCandidateIndex(nextIndex);
      setImgSrc(candidateUrls[nextIndex]);
    }
  };

  return (
    <div
      className={`relative select-none flex items-center justify-center cursor-pointer ${sizeClasses} ${className}`}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      onClick={() => fileInputRef.current?.click()}
      title="SHADOW Mascot (Click or drop msgId1791989841121.jpg to update)"
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Renders the EXACT mascot image without recreation */}
      <div className="relative w-full flex items-center justify-center">
        <img
          src={imgSrc}
          alt="SHADOW Mascot"
          className="w-full h-auto object-contain block drop-shadow-[0_8px_0px_rgba(0,0,0,0.85)] filter rounded-2xl"
          onError={handleImageError}
        />
      </div>
    </div>
  );
};
