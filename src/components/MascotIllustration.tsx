import React, { useState, useEffect, useRef } from 'react';
import { Upload } from 'lucide-react';
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
  const [imgSrc, setImgSrc] = useState<string>(
    customImageUrl || '/grok_1791989973132.jpg'
  );
  const [processedSrc, setProcessedSrc] = useState<string | null>(null);
  const [loadFailed, setLoadFailed] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // When raw image changes, process white background into transparent character
  useEffect(() => {
    let isMounted = true;
    if (customImageUrl) {
      setImgSrc(customImageUrl);
      setLoadFailed(false);
    }

    if (isolateCharacter) {
      removeWhiteBackground(customImageUrl || imgSrc).then((transparentUrl) => {
        if (isMounted) {
          setProcessedSrc(transparentUrl);
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
          setLoadFailed(false);
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
          setLoadFailed(false);
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

      {!loadFailed ? (
        <div className="relative w-full flex items-center justify-center">
          <img
            src={processedSrc || imgSrc}
            alt="SHADOW Mascot"
            className="w-full h-auto object-contain block drop-shadow-[0_8px_0px_rgba(0,0,0,0.85)] filter"
            onError={() => {
              setLoadFailed(true);
            }}
          />
        </div>
      ) : (
        <div
          onClick={() => fileInputRef.current?.click()}
          className="w-full p-4 rounded-2xl border-3 border-dashed border-black bg-white text-center cursor-pointer shadow-[4px_4px_0px_#000] flex flex-col items-center justify-center gap-2"
        >
          <div className="w-10 h-10 rounded-xl bg-[#FFB52E] border-2 border-black flex items-center justify-center text-black shadow-[2px_2px_0px_#000]">
            <Upload className="w-5 h-5" />
          </div>
          <div>
            <p className="font-heading font-black text-xs text-black uppercase">
              Load Mascot Image
            </p>
            <p className="text-[10px] text-gray-600 font-mono">
              Select grok_1791989973132.jpg
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
