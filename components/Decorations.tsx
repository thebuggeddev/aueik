import React from 'react';

interface DiagonalStripesProps {
  opacity?: number;
  className?: string;
  density?: number; // spacing in px
}

export const DiagonalStripes: React.FC<DiagonalStripesProps> = ({ 
  opacity = 0.1, 
  className = '', 
  density = 10 // Increased default density for a more open, technical look
}) => {
  return (
    <div className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}>
      <div className="w-full h-full" style={{ opacity }}>
        <svg width="100%" height="100%">
          <defs>
            <pattern 
              id={`stripes-${density}`} 
              x="0" 
              y="0" 
              width={density} 
              height={density} 
              patternUnits="userSpaceOnUse"
            >
              {/* Draw a diagonal line from bottom-left to top-right ensuring it covers the square */}
              {/* Using CSS variable --pattern-stroke for dynamic theme switching */}
              <path 
                d={`M-1,${density + 1} L${density + 1},-1`} 
                stroke="var(--pattern-stroke)" 
                strokeWidth="0.8" 
                shapeRendering="geometricPrecision"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#stripes-${density})`} />
        </svg>
      </div>
    </div>
  );
};

export const GridMarker: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`absolute w-3 h-3 flex items-center justify-center pointer-events-none z-30 ${className}`}>
    <div className="w-full h-px bg-brand-contrast/20 absolute"></div>
    <div className="h-full w-px bg-brand-contrast/20 absolute"></div>
    <div className="w-1 h-1 bg-brand-base border border-brand-contrast/30 z-10"></div>
  </div>
);