
import React from 'react';
import { RefreshCw, UserCheck, AlertTriangle, FileText } from 'lucide-react';

const CaseCard: React.FC<{ icon: React.ReactNode; title: string; desc: string; metric: string }> = ({ icon, title, desc, metric }) => (
  <div className="p-8 border border-brand-border bg-brand-base hover:bg-brand-surface hover:border-brand-peach/30 transition-all duration-300 group">
    <div className="mb-6 text-brand-muted group-hover:text-brand-peach transition-colors">
       {icon}
    </div>
    <h3 className="text-[20px] font-medium text-brand-contrast mb-3">{title}</h3>
    <p className="text-[14px] text-brand-muted leading-relaxed mb-8 h-12">
      {desc}
    </p>
    <div className="pt-6 border-t border-brand-border/50">
       <span className="text-[32px] font-mono text-brand-contrast block mb-1">{metric}</span>
       <span className="text-[11px] text-brand-muted uppercase tracking-wider">Efficiency Gain</span>
    </div>
  </div>
);

export const UseCases: React.FC = () => {
  return (
    <section className="border-t border-brand-border bg-brand-base py-24 px-6 md:px-12 lg:px-16">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
           <div>
              <span className="text-brand-peach font-mono text-[11px] uppercase tracking-widest mb-4 block">
                 Applied Intelligence
              </span>
              <h2 className="text-[32px] md:text-[40px] leading-[1.0] text-brand-contrast font-normal tracking-[-0.02em]">
                 Solved Scenarios.
              </h2>
           </div>
           <p className="text-brand-muted text-[15px] max-w-md mt-6 md:mt-0 text-right">
              From automated remediation to complex financial reconciliation, our agents handle the heavy lifting.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           <CaseCard 
             icon={<RefreshCw size={24} />}
             title="Payroll Reconciliation"
             desc="Automatically cross-reference timesheets with contracts and bank logs."
             metric="98%"
           />
           <CaseCard 
             icon={<UserCheck size={24} />}
             title="Vendor Onboarding"
             desc="Validate KYB documents and provision access across 12 systems."
             metric="10x"
           />
           <CaseCard 
             icon={<AlertTriangle size={24} />}
             title="Incident Response"
             desc="Triaging alerts, correlating logs, and drafting RCAs instantly."
             metric="15min"
           />
           <CaseCard 
             icon={<FileText size={24} />}
             title="Contract Review"
             desc="Parse legalese against playbooks to highlight risk in seconds."
             metric="400%"
           />
        </div>
      </div>
    </section>
  );
};
