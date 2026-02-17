
import React, { useState } from 'react';
import { Check, Info } from 'lucide-react';

const Slider: React.FC<{ 
  label: string; 
  value: number; 
  min: number; 
  max: number; 
  step: number; 
  unit: string; 
  onChange: (val: number) => void; 
}> = ({ label, value, min, max, step, unit, onChange }) => (
  <div className="mb-8">
    <div className="flex justify-between items-end mb-4">
       <span className="text-[13px] font-medium text-brand-contrast tracking-wide">{label}</span>
       <span className="text-[18px] font-mono text-brand-peach font-light">
         {value.toLocaleString()} <span className="text-[12px] text-brand-muted">{unit}</span>
       </span>
    </div>
    <input 
      type="range" 
      min={min} 
      max={max} 
      step={step}
      value={value} 
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full h-1 bg-brand-border rounded-lg appearance-none cursor-pointer accent-brand-peach hover:accent-brand-peachHover focus:outline-none"
    />
    <div className="flex justify-between mt-2 text-[10px] text-brand-muted font-mono uppercase tracking-widest">
       <span>{min.toLocaleString()}</span>
       <span>{max.toLocaleString()}+</span>
    </div>
  </div>
);

export const Pricing: React.FC = () => {
  const [workflows, setWorkflows] = useState(1000);
  const [users, setUsers] = useState(5);
  const [retention, setRetention] = useState(30);
  const [dedicated, setDedicated] = useState(false);

  // Simple pricing logic for demo
  const basePrice = 299;
  const workflowCost = (workflows - 1000) * 0.05;
  const userCost = (users - 5) * 20;
  const retentionMultiplier = retention > 30 ? 1.5 : 1;
  const dedicatedCost = dedicated ? 1500 : 0;
  
  const total = Math.round((basePrice + Math.max(0, workflowCost) + Math.max(0, userCost) + dedicatedCost) * retentionMultiplier);

  return (
    <section className="border-t border-brand-border bg-brand-base py-24 px-6 md:px-12 lg:px-16">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header */}
        <div className="mb-16 max-w-2xl">
           <span className="text-brand-peach font-mono text-[11px] uppercase tracking-widest mb-4 block">
              Provisioning
           </span>
           <h2 className="text-[32px] md:text-[40px] leading-[1.0] text-brand-contrast font-normal tracking-[-0.02em] mb-6">
              Capacity Estimator.
           </h2>
           <p className="text-brand-muted text-[16px] font-light">
              Configure your infrastructure shard based on projected throughput. Transparent resource allocation with zero hidden ingress fees.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
           
           {/* Left: Calculator Controls */}
           <div className="lg:col-span-7 bg-brand-surface border border-brand-border p-8 md:p-12">
              <h3 className="text-[14px] font-mono text-brand-contrast uppercase tracking-widest mb-12 border-b border-brand-border pb-4">
                 Resource Allocation
              </h3>
              
              <Slider 
                label="Monthly Workflows" 
                value={workflows} 
                min={1000} 
                max={50000} 
                step={1000} 
                unit="executions"
                onChange={setWorkflows} 
              />
              
              <Slider 
                label="Active Seat Licenses" 
                value={users} 
                min={5} 
                max={100} 
                step={1} 
                unit="users"
                onChange={setUsers} 
              />
              
              <div className="mb-10">
                 <div className="flex justify-between items-center mb-4">
                    <span className="text-[13px] font-medium text-brand-contrast tracking-wide">Data Retention Policy</span>
                    <span className="text-[13px] font-mono text-brand-muted">{retention} Days</span>
                 </div>
                 <div className="grid grid-cols-3 gap-4">
                    {[30, 90, 365].map((d) => (
                       <button 
                         key={d}
                         onClick={() => setRetention(d)}
                         className={`py-3 text-[12px] font-mono border transition-all ${retention === d ? 'border-brand-peach text-brand-peach bg-brand-peach/5' : 'border-brand-border text-brand-muted hover:border-brand-contrast'}`}
                       >
                          {d} Days
                       </button>
                    ))}
                 </div>
              </div>

              <div className="flex items-center justify-between p-4 border border-brand-border bg-brand-base">
                 <div className="flex items-center gap-3">
                    <input 
                      type="checkbox" 
                      id="dedicated" 
                      checked={dedicated}
                      onChange={(e) => setDedicated(e.target.checked)}
                      className="w-4 h-4 rounded border-brand-border bg-brand-surface accent-brand-peach"
                    />
                    <label htmlFor="dedicated" className="text-[13px] text-brand-contrast cursor-pointer">
                       Provision Dedicated VPC Cluster
                    </label>
                 </div>
                 <div className="group relative">
                    <Info size={14} className="text-brand-muted cursor-help" />
                    <span className="absolute bottom-full right-0 mb-2 w-48 p-2 bg-brand-contrast text-brand-base text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                       Adds $1,500/mo base cost for isolated compute resources.
                    </span>
                 </div>
              </div>

           </div>

           {/* Right: Summary Card */}
           <div className="lg:col-span-5 flex flex-col h-full">
              <div className="sticky top-24 p-8 md:p-12 border border-brand-border bg-brand-base shadow-2xl">
                 <h3 className="text-[14px] font-mono text-brand-contrast uppercase tracking-widest mb-8 text-center">
                    Estimated Cost
                 </h3>
                 
                 <div className="text-center mb-2">
                    <span className="text-[64px] font-light text-brand-contrast tracking-tighter leading-none">
                       ${total.toLocaleString()}
                    </span>
                 </div>
                 <div className="text-center text-[13px] text-brand-muted mb-12 uppercase tracking-wide">
                    / Month Billed Annually
                 </div>

                 <div className="space-y-4 mb-12 border-t border-brand-border pt-8">
                    <div className="flex justify-between text-[13px]">
                       <span className="text-brand-muted">Base Platform Fee</span>
                       <span className="text-brand-contrast font-mono">$299.00</span>
                    </div>
                    {workflowCost > 0 && (
                       <div className="flex justify-between text-[13px]">
                          <span className="text-brand-muted">Overage ({(workflows - 1000).toLocaleString()} execs)</span>
                          <span className="text-brand-contrast font-mono">+${Math.round(workflowCost).toLocaleString()}</span>
                       </div>
                    )}
                    {userCost > 0 && (
                       <div className="flex justify-between text-[13px]">
                          <span className="text-brand-muted">Additional Users ({users - 5})</span>
                          <span className="text-brand-contrast font-mono">+${userCost.toLocaleString()}</span>
                       </div>
                    )}
                    {dedicated && (
                       <div className="flex justify-between text-[13px]">
                          <span className="text-brand-muted">Dedicated Cluster</span>
                          <span className="text-brand-contrast font-mono">+$1,500.00</span>
                       </div>
                    )}
                 </div>

                 <button className="w-full py-4 bg-brand-peach text-white font-mono text-[13px] uppercase tracking-widest hover:bg-[#E08E50] transition-colors shadow-lg shadow-brand-peach/20 mb-4">
                    Proceed to Checkout
                 </button>
                 <button className="w-full py-4 bg-transparent border border-brand-border text-brand-contrast font-mono text-[13px] uppercase tracking-widest hover:bg-brand-contrast hover:text-brand-base transition-colors">
                    Contact Sales
                 </button>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
};
