import React from 'react';
import { DiagonalStripes } from './Decorations';

export const TrustedSection: React.FC = () => {
  return (
    <div className="w-full flex flex-col font-sans">
      {/* Header Text */}
      <div className="px-6 md:px-12 lg:pl-16 py-6 bg-brand-base border-t border-brand-border transition-colors duration-0">
        <span className="text-brand-muted text-[15px] font-normal tracking-wide">
          Trusted by 50+ Leading Companies
        </span>
      </div>

      {/* Diagonal Stripe Separator Bar */}
      <div className="h-[24px] w-full border-y border-brand-border relative overflow-hidden bg-brand-surface transition-colors duration-0">
         <DiagonalStripes opacity={0.15} density={12} />
      </div>

      {/* Logo Grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 bg-brand-base border-b border-brand-border transition-colors duration-0">
        
        {/* Intersection Markers (Desktop only) */}
        <div className="hidden md:block absolute top-1/2 left-1/3 w-2.5 h-2.5 -ml-[5px] -mt-[5px] border border-brand-border bg-brand-base z-10"></div>
        <div className="hidden md:block absolute top-1/2 left-2/3 w-2.5 h-2.5 -ml-[5px] -mt-[5px] border border-brand-border bg-brand-base z-10"></div>

        {/* Row 1 */}
        <div className="h-[140px] border-b md:border-r border-brand-border flex items-center justify-center p-8 group relative overflow-hidden">
           <span className="font-serif text-[32px] font-bold text-brand-contrast tracking-tight group-hover:opacity-70 transition-opacity cursor-default relative z-10">Sematic</span>
        </div>
        
        <div className="h-[140px] border-b md:border-r border-brand-border flex items-center justify-center p-8 group relative overflow-hidden">
           <div className="flex items-center gap-3 group-hover:opacity-70 transition-opacity cursor-default relative z-10">
              <svg width="22" height="22" viewBox="0 0 24 24" className="fill-brand-contrast transition-colors duration-0">
                  <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
              </svg>
              <span className="font-sans text-[22px] font-bold text-brand-contrast tracking-tight">Stacker AI</span>
           </div>
        </div>

        <div className="h-[140px] border-b border-brand-border flex items-center justify-center p-8 group relative overflow-hidden">
             <span className="font-serif text-[38px] font-bold text-brand-contrast tracking-tight group-hover:opacity-70 transition-opacity cursor-default relative z-10">Times</span>
        </div>

        {/* Row 2 */}
        <div className="h-[140px] border-b md:border-b-0 md:border-r border-brand-border flex items-center justify-center p-8 group relative overflow-hidden">
            <div className="flex items-center gap-2 group-hover:opacity-70 transition-opacity cursor-default relative z-10">
                <svg width="28" height="28" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1" fill="none" className="opacity-90 text-brand-contrast">
                    <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
                </svg>
                <span className="text-[26px] font-normal text-brand-contrast tracking-tight">boldes</span>
            </div>
        </div>

        <div className="h-[140px] border-b md:border-b-0 md:border-r border-brand-border flex items-center justify-center p-8 group relative overflow-hidden">
             <span className="font-sans text-[34px] font-light text-brand-contrast tracking-wide group-hover:opacity-70 transition-opacity cursor-default relative z-10">Cakm</span>
        </div>

        <div className="h-[140px] border-b md:border-b-0 border-brand-border flex items-center justify-center p-8 group relative overflow-hidden">
             <span className="font-sans text-[30px] font-extrabold text-brand-contrast uppercase tracking-wider group-hover:opacity-70 transition-opacity cursor-default relative z-10">CRUST</span>
        </div>
      </div>
    </div>
  );
};