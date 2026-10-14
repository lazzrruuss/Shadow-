/**
 * Utility to make white background of the mascot transparent
 * so it behaves like a cut-out comic sticker character (like in the CAPIBRO reference)
 */

export function removeWhiteBackground(imageSrc: string): Promise<string> {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth || img.width;
        canvas.height = img.naturalHeight || img.height;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        if (!ctx) {
          resolve(imageSrc);
          return;
        }

        ctx.drawImage(img, 0, 0);
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imgData.data;

        // Iterate through pixels and make white/near-white pixels transparent
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];

          // Check if pixel is near white/light grey background
          // The mascot is dark charcoal (r<80, g<80, b<80) with fiery orange eyes and pink tongue
          if (r > 215 && g > 215 && b > 215) {
            const minChannel = Math.min(r, g, b);
            if (minChannel > 235) {
              data[i + 3] = 0; // Fully transparent
            } else {
              // Smooth feathering on edges
              const alpha = Math.max(0, Math.min(255, (235 - minChannel) * 12));
              data[i + 3] = alpha;
            }
          }
        }

        ctx.putImageData(imgData, 0, 0);
        resolve(canvas.toDataURL('image/png'));
      } catch {
        resolve(imageSrc);
      }
    };
    img.onerror = () => {
      resolve(imageSrc);
    };
    img.src = imageSrc;
  });
}
