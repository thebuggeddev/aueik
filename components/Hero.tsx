import React from 'react';
import { ProductMockup } from './ProductMockup';
import { TrustedSection } from './TrustedSection';
import { GridMarker } from './Decorations';

export const Hero: React.FC = () => {
  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-88px)]">
      
      {/* Left Column: Text Content */}
      <div className="lg:col-span-6 relative flex flex-col border-r border-brand-border bg-brand-base">
        
        {/* Content Wrapper */}
        <div className="px-6 md:px-12 lg:pl-16 pt-24 md:pt-32 pb-16 relative z-10 flex-1 flex flex-col justify-center">
          
          {/* Badge */}
          <div className="flex items-center mb-10">
            <span className="bg-[#F4A261] text-white text-[11px] font-bold px-3 py-1 uppercase tracking-widest leading-none font-sans rounded-[1px] shadow-sm">
              New
            </span>
            <span className="text-brand-contrast text-[11px] uppercase tracking-[0.2em] border border-brand-border border-l-0 px-4 py-1 leading-none font-sans font-medium text-opacity-90">
              Workflow Automation
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[48px] md:text-[64px] xl:text-[88px] leading-[1.0] font-normal tracking-[-0.04em] mb-10 text-brand-contrast font-sans">
            AI Built for <br />
            Enterprise Scale
          </h1>

          {/* Subtext */}
          <p className="text-brand-muted text-[18px] md:text-[20px] leading-[1.5] max-w-[540px] mb-14 font-normal tracking-[-0.01em] antialiased">
            Govern intelligent workflows across teams, systems, and data.
            Automateon replaces fragmented tools with one secure layer.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-5">
            <button className="bg-[#F4A261] text-white px-8 md:px-10 py-4 md:py-5 uppercase text-[13px] md:text-[14px] font-bold tracking-[0.15em] hover:bg-[#E08E50] transition-colors duration-200 font-mono rounded-[2px] shadow-sm">
              Request Demo
            </button>
            <button className="bg-brand-base border border-brand-border text-brand-contrast px-8 md:px-10 py-4 md:py-5 uppercase text-[13px] md:text-[14px] font-bold tracking-[0.15em] hover:bg-brand-contrast/5 transition-colors duration-200 font-mono rounded-[2px]">
              Join Waitlist
            </button>
          </div>

        </div>

        {/* Trusted By Section (Bottom of Left Column) */}
        <div className="mt-auto">
             <TrustedSection />
        </div>
      </div>

      {/* Right Column: Product Visual */}
      <div className="lg:col-span-6 relative overflow-hidden bg-brand-surface min-h-[500px] lg:min-h-auto">
        {/* Gradient Glow Background - Light Mode Version */}
        <div className="absolute inset-0 z-0">
             {/* Warm Peach Glow */}
             <div className="absolute bottom-[-10%] left-[-20%] w-[120%] h-[80%] bg-gradient-to-tr from-[#FF8C42]/20 via-[#FF8C42]/5 to-transparent blur-[120px] pointer-events-none"></div>
             
             {/* Subtle top light */}
             <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-brand-base via-transparent to-transparent opacity-50"></div>
        </div>
        
        {/* Grain overlay - Darker for light background */}
        <div className="absolute inset-0 bg-noise opacity-[0.4] z-10 pointer-events-none"></div>
        
        {/* Container for Mockup - Aligned Start with padding for smaller screens */}
        <div className="relative z-20 h-full flex items-center justify-start pl-6 py-16 md:pl-12 lg:pl-16 lg:py-0 overflow-hidden">
          {/* Mockup */}
          <div className="shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
             <ProductMockup />
          </div>
        </div>

        {/* Framing Borders for Right Side */}
        <GridMarker className="-left-1.5 top-1/2" />
        <div className="absolute left-0 top-0 w-px h-full bg-brand-border z-30"></div>
      </div>

    </div>
  );
};