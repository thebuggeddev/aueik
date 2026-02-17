
import React from 'react';
import { ShieldCheck, Lock, Eye, AlertCircle, FileCheck, CheckCircle2 } from 'lucide-react';

const ControlRow: React.FC<{ id: string; name: string; standard: string; status: string; lastAudit: string }> = ({ id, name, standard, status, lastAudit }) => (
  <div className="grid grid-cols-12 py-3 border-b border-brand-border/30 hover:bg-brand-contrast/[0.02] transition-colors items-center text-[12px]">
     <div className="col-span-2 font-mono text-brand-muted">{id}</div>
     <div className="col-span-4 font-medium text-brand-contrast">{name}</div>
     <div className="col-span-2 text-brand-muted">{standard}</div>
     <div className="col-span-2 text-right font-mono text-brand-muted">{lastAudit}</div>
     <div className="col-span-2 flex justify-end">
        <span className="flex items-center gap-1.5 px-2 py-0.5 bg-[#10B981]/10 border border-[#10B981]/20 rounded-[1px] text-[#10B981] text-[10px] font-mono uppercase tracking-wide">
           <CheckCircle2 size={10} /> {status}
        </span>
     </div>
  </div>
);

export const Security: React.FC = () => {
  return (
    <section className="bg-[#080808] border-t border-brand-border py-24 px-6 md:px-12 lg:px-16 relative overflow-hidden">
      
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
         
         {/* Left: Section Header */}
         <div className="lg:col-span-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-base border border-brand-border rounded-full mb-8">
               <ShieldCheck size={14} className="text-brand-peach" />
               <span className="text-[11px] font-mono text-brand-contrast uppercase tracking-widest">Governance Engine</span>
            </div>
            
            <h2 className="text-[36px] md:text-[42px] leading-[1.05] text-brand-contrast font-normal tracking-[-0.03em] mb-6">
               Zero-Compromise <br/> Compliance.
            </h2>
            
            <p className="text-brand-muted text-[16px] leading-[1.6] mb-10 font-light">
               We treat your data infrastructure as critical assets. Our platform is built on a zero-trust architecture with granular role-based access control (RBAC) and real-time audit logs.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-4">
               <div className="h-12 w-12 flex items-center justify-center border border-brand-border bg-brand-surface rounded-[2px] text-brand-muted" title="SOC2">
                  <span className="font-mono text-[10px] font-bold">SOC2</span>
               </div>
               <div className="h-12 w-12 flex items-center justify-center border border-brand-border bg-brand-surface rounded-[2px] text-brand-muted" title="ISO 27001">
                  <span className="font-mono text-[10px] font-bold">ISO</span>
               </div>
               <div className="h-12 w-12 flex items-center justify-center border border-brand-border bg-brand-surface rounded-[2px] text-brand-muted" title="GDPR">
                  <span className="font-mono text-[10px] font-bold">GDPR</span>
               </div>
               <div className="h-12 w-12 flex items-center justify-center border border-brand-border bg-brand-surface rounded-[2px] text-brand-muted" title="HIPAA">
                  <span className="font-mono text-[10px] font-bold">HIPAA</span>
               </div>
            </div>
         </div>

         {/* Right: Dashboard Interface */}
         <div className="lg:col-span-8">
            <div className="bg-brand-base border border-brand-border rounded-[2px] shadow-2xl overflow-hidden relative">
               {/* Dashboard Header */}
               <div className="bg-brand-surface border-b border-brand-border px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                     <span className="text-[12px] font-bold text-brand-contrast">Compliance Cockpit</span>
                     <span className="px-2 py-0.5 bg-brand-contrast text-brand-base text-[10px] font-bold uppercase tracking-widest rounded-[1px]">Live</span>
                  </div>
                  <div className="flex gap-4 text-[11px] font-mono text-brand-muted">
                     <span>SCAN_ID: 9942-AX</span>
                     <span>T_MINUS: 00:00:02</span>
                  </div>
               </div>

               {/* Stats Row */}
               <div className="grid grid-cols-4 border-b border-brand-border divide-x divide-brand-border bg-brand-base/50">
                  <div className="p-4 text-center">
                     <div className="text-[20px] font-mono text-brand-contrast">100%</div>
                     <div className="text-[10px] text-brand-muted uppercase tracking-wider mt-1">Passing</div>
                  </div>
                  <div className="p-4 text-center">
                     <div className="text-[20px] font-mono text-brand-contrast">52</div>
                     <div className="text-[10px] text-brand-muted uppercase tracking-wider mt-1">Controls</div>
                  </div>
                  <div className="p-4 text-center">
                     <div className="text-[20px] font-mono text-brand-contrast">0</div>
                     <div className="text-[10px] text-brand-muted uppercase tracking-wider mt-1">Critical</div>
                  </div>
                  <div className="p-4 text-center bg-[#10B981]/5">
                     <div className="text-[20px] font-mono text-[#10B981]">A+</div>
                     <div className="text-[10px] text-brand-muted uppercase tracking-wider mt-1">Rating</div>
                  </div>
               </div>

               {/* Controls List */}
               <div className="p-6">
                  <div className="grid grid-cols-12 pb-2 border-b border-brand-border mb-2 text-[10px] font-mono text-brand-muted uppercase tracking-widest">
                     <div className="col-span-2">Control ID</div>
                     <div className="col-span-4">Description</div>
                     <div className="col-span-2">Standard</div>
                     <div className="col-span-2 text-right">Last Audit</div>
                     <div className="col-span-2 text-right">Status</div>
                  </div>
                  
                  <ControlRow id="SEC-001" name="Data At Rest Encryption" standard="NIST 800-53" lastAudit="12m ago" status="Active" />
                  <ControlRow id="ACC-104" name="MFA Enforcement" standard="SOC2 CC6.1" lastAudit="4h ago" status="Active" />
                  <ControlRow id="NET-202" name="VPC Flow Logs" standard="ISO 27001" lastAudit="1d ago" status="Active" />
                  <ControlRow id="LOG-305" name="Immutable Audit Trail" standard="GDPR Art.30" lastAudit="Live" status="Active" />
                  <ControlRow id="VUL-401" name="Auto-Patching" standard="HIPAA" lastAudit="2h ago" status="Active" />
               </div>

               {/* Animated Scanner Line */}
               <div className="absolute top-0 left-0 w-full h-1 bg-brand-peach/50 shadow-[0_0_15px_#F4A261] animate-[scan_3s_ease-in-out_infinite] opacity-50 pointer-events-none"></div>
            </div>
         </div>

      </div>
    </section>
  );
};
