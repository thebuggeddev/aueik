
import React from 'react';

// Simple Dot Map Component
const MapDot: React.FC<{ top: string; left: string; pulse?: boolean }> = ({ top, left, pulse }) => (
  <div className="absolute w-1 h-1 rounded-full bg-brand-muted/50" style={{ top, left }}>
    {pulse && (
      <>
        <div className="absolute inset-0 bg-brand-peach rounded-full"></div>
        <div className="absolute inset-[-4px] border border-brand-peach rounded-full opacity-50 animate-ping"></div>
      </>
    )}
  </div>
);

export const GlobalNetwork: React.FC = () => {
  return (
    <section className="border-t border-brand-border bg-[#050505] py-24 px-6 md:px-12 lg:px-16 overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left: Text */}
        <div className="lg:col-span-4 relative z-10">
           <span className="text-brand-peach font-mono text-[11px] uppercase tracking-widest mb-4 block">
              Global Edge
           </span>
           <h2 className="text-[36px] md:text-[48px] leading-[1.05] text-white font-normal tracking-[-0.03em] mb-8">
              Running <br/> Everywhere.
           </h2>
           <p className="text-[#A1A1A1] text-[16px] leading-[1.6] mb-12 font-light">
              Our mesh is deployed across 35 regions in 12 countries. Logic executes at the edge, closest to your data, ensuring single-digit millisecond latency.
           </p>

           <div className="grid grid-cols-2 gap-y-6">
              <div>
                 <div className="text-[32px] font-mono text-white font-light">35</div>
                 <div className="text-[11px] text-[#777] uppercase tracking-wider">Regions</div>
              </div>
              <div>
                 <div className="text-[32px] font-mono text-white font-light">12ms</div>
                 <div className="text-[11px] text-[#777] uppercase tracking-wider">Global Latency</div>
              </div>
              <div>
                 <div className="text-[32px] font-mono text-white font-light">99.99%</div>
                 <div className="text-[11px] text-[#777] uppercase tracking-wider">SLA</div>
              </div>
           </div>
        </div>

        {/* Right: Abstract Map */}
        <div className="lg:col-span-8 relative h-[400px] opacity-80">
           {/* Grid Background */}
           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
           
           {/* Abstract World Representation (Dots) */}
           <div className="relative w-full h-full">
              {/* North America */}
              <MapDot top="30%" left="20%" pulse />
              <MapDot top="32%" left="25%" pulse />
              <MapDot top="28%" left="15%" />
              <MapDot top="35%" left="22%" />
              
              {/* Europe */}
              <MapDot top="25%" left="48%" pulse />
              <MapDot top="28%" left="52%" pulse />
              <MapDot top="30%" left="50%" />

              {/* Asia */}
              <MapDot top="35%" left="70%" pulse />
              <MapDot top="40%" left="75%" />
              <MapDot top="32%" left="80%" pulse />

              {/* Australia */}
              <MapDot top="70%" left="85%" pulse />

              {/* South America */}
              <MapDot top="60%" left="28%" pulse />

              {/* Africa */}
              <MapDot top="50%" left="50%" />

              {/* Connection Lines (Simulated) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                 <path d="M20% 30% Q 35% 10% 48% 25%" stroke="url(#gradient-line)" strokeWidth="1" fill="none" opacity="0.3" />
                 <path d="M25% 32% Q 40% 60% 70% 35%" stroke="url(#gradient-line)" strokeWidth="1" fill="none" opacity="0.2" />
                 <path d="M48% 25% Q 60% 20% 80% 32%" stroke="url(#gradient-line)" strokeWidth="1" fill="none" opacity="0.3" />
                 <defs>
                    <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                       <stop offset="0%" stopColor="#F4A261" stopOpacity="0" />
                       <stop offset="50%" stopColor="#F4A261" stopOpacity="1" />
                       <stop offset="100%" stopColor="#F4A261" stopOpacity="0" />
                    </linearGradient>
                 </defs>
              </svg>
           </div>
        </div>

      </div>
    </section>
  );
};
