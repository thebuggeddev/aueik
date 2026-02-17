
import React from 'react';
import { DiagonalStripes } from './Decorations';

const MetricItem: React.FC<{ value: string; label: string; suffix?: string }> = ({ value, label, suffix }) => (
  <div className="flex flex-col items-start justify-center p-8 md:p-12 border-b md:border-b-0 md:border-r border-brand-border last:border-r-0 relative group overflow-hidden">
     {/* Background noise on hover */}
     <div className="absolute inset-0 bg-noise opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none"></div>
     
     <div className="relative z-10">
        <div className="flex items-baseline mb-2">
            <span className="text-[48px] md:text-[64px] font-mono font-medium text-brand-contrast tracking-tighter leading-none">
              {value}
            </span>
            {suffix && (
                <span className="text-[24px] md:text-[32px] text-brand-peach font-light ml-1">{suffix}</span>
            )}
        </div>
        <span className="text-brand-muted text-[13px] uppercase tracking-[0.2em] font-medium pl-1">
          {label}
        </span>
     </div>
  </div>
);

export const Metrics: React.FC = () => {
  return (
    <section className="relative bg-brand-surface border-y border-brand-border">
      {/* Decorative Top Bar */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-peach/50 to-transparent opacity-50"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <MetricItem value="99.9" suffix="%" label="Uptime Guarantee" />
        <MetricItem value="10" suffix="x" label="ROI Increase" />
        <MetricItem value="<50" suffix="ms" label="Global Latency" />
        <MetricItem value="500" suffix="+" label="Integrations" />
      </div>
    </section>
  );
};
