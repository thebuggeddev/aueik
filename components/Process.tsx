
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Step: React.FC<{ number: string; title: string; desc: string; isLast?: boolean }> = ({ number, title, desc, isLast }) => (
  <div className="relative flex flex-col flex-1 p-8 md:p-12 border-b md:border-b-0 md:border-r border-brand-border last:border-r-0 group hover:bg-brand-surface transition-colors duration-300">
    <span className="text-[64px] font-mono font-light text-brand-border group-hover:text-brand-peach/20 transition-colors mb-6 leading-none select-none">
      {number}
    </span>
    
    <h3 className="text-[20px] font-medium text-brand-contrast mb-4 tracking-tight">{title}</h3>
    <p className="text-brand-muted text-[15px] leading-[1.6] max-w-xs">{desc}</p>
    
    {!isLast && (
       <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 hidden md:flex w-8 h-8 bg-brand-base border border-brand-border items-center justify-center rounded-full text-brand-muted shadow-sm">
          <ArrowDown className="-rotate-90" size={14} />
       </div>
    )}
  </div>
);

export const Process: React.FC = () => {
  return (
    <section className="border-t border-brand-border">
      <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-brand-border bg-brand-base">
        <div className="lg:col-span-4 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-brand-border flex flex-col justify-center">
          <span className="text-brand-peach font-mono text-[11px] uppercase tracking-widest mb-4">Methodology</span>
          <h2 className="text-[32px] md:text-[40px] leading-[1.1] text-brand-contrast font-normal tracking-[-0.02em]">
            Cognitive <br/> Pipeline
          </h2>
        </div>
        <div className="lg:col-span-8 p-8 md:p-12 flex items-center">
          <p className="text-brand-muted text-[16px] md:text-[18px] leading-[1.6] max-w-2xl font-light">
            Our autonomous agents follow a deterministic three-step process to ensure accuracy, auditability, and speed in every execution.
          </p>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row bg-brand-base">
        <Step 
          number="01" 
          title="Signal Ingestion" 
          desc="Structured and unstructured data is normalized into a unified semantic vector space." 
        />
        <Step 
          number="02" 
          title="Context Synthesis" 
          desc="The neural engine reasons across data silos to formulate an optimal execution plan." 
        />
        <Step 
          number="03" 
          title="Deterministic Action" 
          desc="Authorized agents execute the workflow with rollback capabilities and full logging." 
          isLast
        />
      </div>
    </section>
  );
};
