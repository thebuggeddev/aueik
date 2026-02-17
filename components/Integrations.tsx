
import React, { useState, useEffect } from 'react';
import { Database, Cloud, Globe, Lock, Server, Cpu, Activity, Share2 } from 'lucide-react';

// Node Component
const Node: React.FC<{ 
  icon: React.ReactNode; 
  label: string; 
  x: number; 
  y: number; 
  active: boolean;
  delay: number;
}> = ({ icon, label, x, y, active, delay }) => (
  <div 
    className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group cursor-pointer z-10 ${active ? 'scale-110' : 'scale-100 opacity-60 hover:opacity-100'}`}
    style={{ left: `${x}%`, top: `${y}%` }}
  >
    <div className={`relative w-12 h-12 rounded-full border flex items-center justify-center transition-colors duration-300 bg-brand-base ${active ? 'border-brand-peach text-brand-peach shadow-[0_0_20px_rgba(244,162,97,0.3)]' : 'border-brand-border text-brand-muted hover:border-brand-contrast hover:text-brand-contrast'}`}>
       {icon}
       {/* Pulse Effect */}
       {active && (
         <div className="absolute inset-0 rounded-full border border-brand-peach animate-ping opacity-20"></div>
       )}
    </div>
    <span className={`absolute top-full mt-3 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-widest whitespace-nowrap transition-colors ${active ? 'text-brand-contrast' : 'text-brand-muted/50'}`}>
      {label}
    </span>
  </div>
);

// Connection Line SVG
const Connection: React.FC<{ startX: number; startY: number; endX: number; endY: number; active: boolean }> = ({ startX, startY, endX, endY, active }) => {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
      <path 
        d={`M${startX}% ${startY}% L${endX}% ${endY}%`} 
        stroke="var(--border-color)" 
        strokeWidth="1" 
        fill="none" 
      />
      {active && (
        <path 
          d={`M${startX}% ${startY}% L${endX}% ${endY}%`} 
          stroke="var(--brand-peach)" 
          strokeWidth="1" 
          strokeDasharray="4 4"
          className="animate-dash"
          strokeOpacity="0.6"
          fill="none" 
        >
          <animate attributeName="stroke-dashoffset" from="100" to="0" dur="1s" repeatCount="indefinite" />
        </path>
      )}
      {active && (
         <circle r="2" fill="#F4A261">
            <animateMotion dur="1.5s" repeatCount="indefinite" path={`M${startX}% ${startY}% L${endX}% ${endY}%`} />
         </circle>
      )}
    </svg>
  );
};

export const Integrations: React.FC = () => {
  const [activeNode, setActiveNode] = useState(0);

  // Auto-cycle through nodes
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode(prev => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nodes = [
    { id: 0, icon: <Cloud size={20} />, label: 'AWS Cloud', x: 50, y: 20 },
    { id: 1, icon: <Database size={20} />, label: 'Snowflake', x: 80, y: 40 },
    { id: 2, icon: <Globe size={20} />, label: 'Salesforce', x: 80, y: 70 },
    { id: 3, icon: <Lock size={20} />, label: 'Okta Auth', x: 50, y: 85 },
    { id: 4, icon: <Server size={20} />, label: 'K8s Cluster', x: 20, y: 70 },
    { id: 5, icon: <Share2 size={20} />, label: 'REST API', x: 20, y: 40 },
  ];

  const metrics = [
     { label: "Active Connections", value: "1,402" },
     { label: "Throughput", value: "4.2 GB/s" },
     { label: "Avg Latency", value: "14ms" },
     { label: "Error Rate", value: "0.001%" },
  ];

  return (
    <section className="border-t border-brand-border bg-brand-base overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[700px]">
        
        {/* Left: Narrative & Metrics */}
        <div className="lg:col-span-4 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-brand-border flex flex-col justify-between bg-brand-surface/10 z-10 relative">
           <div>
              <span className="text-brand-peach font-mono text-[11px] uppercase tracking-widest mb-4 block">
                 Network Topology
              </span>
              <h2 className="text-[32px] md:text-[40px] leading-[1.0] text-brand-contrast font-normal tracking-[-0.02em] mb-8">
                 Universal <br/> API Mesh.
              </h2>
              <p className="text-brand-muted text-[16px] leading-[1.6] mb-12 font-light">
                 Visualise your entire stack as a single, unified nervous system. Our mesh handles protocol translation, authentication negotiation, and rate-limiting automatically across all nodes.
              </p>
           </div>

           <div className="grid grid-cols-2 gap-8">
              {metrics.map((m, i) => (
                 <div key={i}>
                    <div className="text-[24px] font-mono text-brand-contrast font-light tracking-tight">{m.value}</div>
                    <div className="text-[11px] text-brand-muted uppercase tracking-wider mt-1">{m.label}</div>
                 </div>
              ))}
           </div>
        </div>

        {/* Right: Interactive Topology Visualization */}
        <div className="lg:col-span-8 relative bg-[#050505] overflow-hidden">
           
           {/* Background Grid */}
           <div className="absolute inset-0" 
                style={{ 
                  backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', 
                  backgroundSize: '30px 30px' 
                }}>
           </div>
           
           {/* Central Hub */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="relative w-24 h-24 rounded-full bg-brand-base border border-brand-border flex items-center justify-center shadow-2xl">
                 <div className="absolute inset-0 rounded-full border border-brand-peach/30 animate-pulse"></div>
                 <Cpu size={32} className="text-brand-peach" />
                 <div className="absolute -bottom-8 text-[10px] font-mono text-brand-peach uppercase tracking-widest">Core Engine</div>
              </div>
           </div>

           {/* Connections & Nodes */}
           <div className="absolute inset-0 w-full h-full">
              {nodes.map((node, i) => (
                 <React.Fragment key={i}>
                    <Connection 
                      startX={50} startY={50} 
                      endX={node.x} endY={node.y} 
                      active={i === activeNode} 
                    />
                    <Node 
                      {...node} 
                      active={i === activeNode} 
                      delay={i * 0.1} 
                    />
                 </React.Fragment>
              ))}
           </div>
           
           {/* Terminal Output Overlay */}
           <div className="absolute bottom-6 left-6 right-6 p-4 bg-brand-base/80 backdrop-blur-sm border border-brand-border rounded-[2px] font-mono text-[11px] text-brand-muted hidden md:block">
              <div className="flex justify-between items-center border-b border-brand-border/50 pb-2 mb-2">
                 <span>LIVE_LOG_STREAM</span>
                 <span className="flex items-center gap-2 text-[#10B981]"><Activity size={10} /> STREAMING</span>
              </div>
              <div className="space-y-1 opacity-70">
                 <div>[14:02:22] <span className="text-brand-peach"> handshake_init</span> :: {nodes[activeNode].label} protocol verified</div>
                 <div>[14:02:22] <span className="text-[#60A5FA]"> schema_sync</span> &nbsp;&nbsp;:: Validating JSON schema version 2.4.0</div>
                 <div>[14:02:23] <span className="text-[#10B981]"> packet_ack</span> &nbsp;&nbsp;&nbsp;:: 14kb payload received via TLS 1.3</div>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
};
