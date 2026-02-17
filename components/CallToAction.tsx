
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { DiagonalStripes } from './Decorations';

export const CallToAction: React.FC = () => {
  return (
    <section className="relative overflow-hidden border-t border-brand-border bg-brand-base">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-noise opacity-[0.2] pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-brand-peach/5 to-transparent pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[400px]">
        
        {/* Left: Text */}
        <div className="lg:col-span-7 p-8 md:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-brand-border relative z-10">
          <span className="font-mono text-brand-peach text-[12px] uppercase tracking-widest mb-6">
            System Ready
          </span>
          <h2 className="text-[48px] md:text-[64px] text-brand-contrast font-medium leading-[0.95] tracking-[-0.04em] mb-8">
            Deploy the <br/> Future Today.
          </h2>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
               {[1,2,3,4].map(i => (
                 <div key={i} className="w-10 h-10 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center text-[10px] text-brand-contrast font-bold z-10 hover:z-20 hover:scale-110 transition-transform">
                    {['JP', 'AS', 'MR', 'ZK'][i-1]}
                 </div>
               ))}
            </div>
            <span className="text-brand-muted text-[14px] font-medium pl-2">
              Join 500+ Engineering Teams
            </span>
          </div>
        </div>

        {/* Right: Action */}
        <div className="lg:col-span-5 relative flex flex-col">
            {/* Top decorative stripe */}
            <div className="h-16 border-b border-brand-border relative overflow-hidden bg-brand-surface/50">
               <DiagonalStripes density={8} opacity={0.1} />
            </div>
            
            <div className="flex-1 flex flex-col items-center justify-center p-12 bg-brand-surface/20 group cursor-pointer hover:bg-brand-surface/40 transition-colors duration-500">
               <button className="group relative px-8 py-4 bg-brand-contrast text-brand-base text-[14px] font-bold uppercase tracking-widest hover:bg-brand-peach hover:text-white transition-all duration-300 w-full max-w-xs shadow-lg">
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Initialize Instance <ArrowRight size={16} />
                  </span>
               </button>
               <span className="mt-6 font-mono text-[11px] text-brand-muted uppercase tracking-widest group-hover:text-brand-contrast transition-colors">
                  No Credit Card Required
               </span>
            </div>
        </div>
      </div>
    </section>
  );
};
