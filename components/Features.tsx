
import React from 'react';
import { Layers, Shield, Zap, ArrowRight } from 'lucide-react';

const FeatureCard: React.FC<{ 
  number: string; 
  title: string; 
  desc: string; 
  icon: React.ReactNode;
  hasBorderRight?: boolean;
}> = ({ number, title, desc, icon, hasBorderRight = true }) => (
  <div className={`group relative p-8 md:p-12 border-b border-brand-border ${hasBorderRight ? 'md:border-r' : ''} bg-brand-base transition-colors duration-200 hover:bg-brand-surface`}>
    {/* Hover Accent Line */}
    <div className="absolute top-0 left-0 w-full h-[1px] bg-brand-peach scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    
    <div className="flex flex-col h-full justify-between">
      <div>
        <div className="flex justify-between items-start mb-8">
           <div className="p-3 bg-brand-surface border border-brand-border rounded-[2px] text-brand-peach group-hover:text-brand-contrast group-hover:border-brand-contrast/30 transition-colors">
             {icon}
           </div>
           <span className="font-mono text-[12px] text-brand-muted/50 tracking-widest">{number}</span>
        </div>
        
        <h3 className="text-[20px] md:text-[24px] text-brand-contrast font-medium mb-4 tracking-tight group-hover:text-brand-peach transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-brand-muted text-[15px] leading-[1.6] tracking-wide">
          {desc}
        </p>
      </div>

      <div className="mt-10 flex items-center text-brand-contrast text-[13px] font-medium uppercase tracking-wider opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        <span>Explore</span>
        <ArrowRight size={14} className="ml-2" />
      </div>
    </div>
  </div>
);

export const Features: React.FC = () => {
  return (
    <section className="border-t border-brand-border">
      {/* Section Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-brand-border bg-brand-base">
        <div className="lg:col-span-4 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-brand-border flex flex-col justify-center">
          <span className="text-brand-peach font-mono text-[11px] uppercase tracking-widest mb-4">Architecture</span>
          <h2 className="text-[32px] md:text-[40px] leading-[1.1] text-brand-contrast font-normal tracking-[-0.02em]">
            Built for <br/> Complex Logic
          </h2>
        </div>
        <div className="lg:col-span-8 p-8 md:p-12 flex items-center">
          <p className="text-brand-muted text-[16px] md:text-[18px] leading-[1.6] max-w-2xl font-light">
            Our proprietary neural engine processes data in real-time, enforcing governance and security protocols without compromising on speed or flexibility.
          </p>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        <FeatureCard 
          number="01"
          icon={<Layers size={24} strokeWidth={1.5} />}
          title="Neural Orchestration"
          desc="Self-optimizing workflows that adapt to your team's velocity using predictive context analysis."
        />
        <FeatureCard 
          number="02"
          icon={<Shield size={24} strokeWidth={1.5} />}
          title="Zero-Trust Security"
          desc="Enterprise-grade encryption with role-based governance baked into the core architecture."
        />
        <FeatureCard 
          number="03"
          icon={<Zap size={24} strokeWidth={1.5} />}
          title="Real-Time Sync"
          desc="Sub-millisecond latency across all connected data silos, ensuring a single source of truth."
          hasBorderRight={false}
        />
      </div>
    </section>
  );
};
