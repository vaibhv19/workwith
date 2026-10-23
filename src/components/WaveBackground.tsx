import React from "react";

interface WaveBackgroundProps {
  className?: string;
}

/**
 * WaveBackground
 * Renders an original, subtle, resolution-independent repeating wave texture
 * inspired by fine horizontal ripple / guilloche contours.
 * Completely static, zero CPU/GPU overhead, non-distracting, accessible.
 */
export function WaveBackground({ className = "" }: WaveBackgroundProps) {
  return (
    <div
      className={`fixed-bg-layer ${className}`.trim()}
      aria-hidden="true"
    />
  );
}

export default WaveBackground;
