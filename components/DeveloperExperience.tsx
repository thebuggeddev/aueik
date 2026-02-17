
import React from 'react';
import { Terminal, Copy } from 'lucide-react';

export const DeveloperExperience: React.FC = () => {
  return (
    <section className="border-t border-brand-border bg-[#050505] py-24 px-6 md:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Text */}
        <div>
           <span className="text-brand-peach font-mono text-[11px] uppercase tracking-widest mb-4 block">
              Developer Experience
           </span>
           <h2 className="text-[36px] md:text-[48px] leading-[1.05] text-white font-normal tracking-[-0.03em] mb-8">
              Built for <br/> Builders.
           </h2>
           <p className="text-[#A1A1A1] text-[16px] leading-[1.6] mb-8 font-light max-w-lg">
              Interact with the mesh programmatically. Our typed SDKs and robust CLI let you manage workflows, audit logs, and configurations as code.
           </p>
           
           <div className="flex gap-4 mb-8">
              <div className="px-4 py-2 bg-[#1A1A1A] border border-white/10 rounded-[2px] flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-[#3178C6]"></div>
                 <span className="text-[13px] text-white font-mono">TypeScript</span>
              </div>
              <div className="px-4 py-2 bg-[#1A1A1A] border border-white/10 rounded-[2px] flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-[#FFD43B]"></div>
                 <span className="text-[13px] text-white font-mono">Python</span>
              </div>
              <div className="px-4 py-2 bg-[#1A1A1A] border border-white/10 rounded-[2px] flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-[#00ADD8]"></div>
                 <span className="text-[13px] text-white font-mono">Go</span>
              </div>
           </div>
        </div>

        {/* Right: Code Terminal */}
        <div className="relative group">
           {/* Glow */}
           <div className="absolute -inset-1 bg-gradient-to-r from-brand-peach/20 to-purple-500/20 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
           
           <div className="relative bg-[#0F0F0F] border border-white/10 rounded-lg shadow-2xl overflow-hidden font-mono text-[13px]">
              {/* Window Controls */}
              <div className="bg-[#1A1A1A] px-4 py-3 border-b border-white/5 flex items-center justify-between">
                 <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FEBC2E]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#28C840]"></div>
                 </div>
                 <div className="text-[#555] text-[11px] uppercase tracking-wider">bash — 80x24</div>
              </div>

              {/* Code Content */}
              <div className="p-6 text-[#D4D4D4] leading-relaxed">
                 <div className="flex items-center gap-2 mb-4">
                    <span className="text-[#10B981]">➜</span>
                    <span className="text-[#569CD6]">~</span>
                    <span>brew install aueik-cli</span>
                 </div>
                 
                 <div className="mb-6 opacity-60">
                    <span className="block">Downloading aueik-cli v2.4.0...</span>
                    <span className="block">🍺  /usr/local/Cellar/aueik-cli/2.4.0: 14 files, 4.2MB</span>
                 </div>

                 <div className="flex items-center gap-2 mb-4">
                    <span className="text-[#10B981]">➜</span>
                    <span className="text-[#569CD6]">~</span>
                    <span>aueik init --template=enterprise-stack</span>
                 </div>

                 <div className="pl-4 border-l border-white/10 my-4 space-y-1">
                    <div className="flex gap-2"><span className="text-[#C586C0]">import</span> {'{'} Aueik {'}'} <span className="text-[#C586C0]">from</span> <span className="text-[#CE9178]">'@aueik/sdk'</span>;</div>
                    <div className="h-2"></div>
                    <div><span className="text-[#569CD6]">const</span> client = <span className="text-[#C586C0]">new</span> Aueik(process.env.API_KEY);</div>
                    <div><span className="text-[#569CD6]">await</span> client.workflows.deploy({'{'}</div>
                    <div className="pl-4"><span className="text-[#9CDCFE]">mode</span>: <span className="text-[#CE9178]">'strict'</span>,</div>
                    <div className="pl-4"><span className="text-[#9CDCFE]">compliance</span>: [<span className="text-[#CE9178]">'soc2'</span>, <span className="text-[#CE9178]">'gdpr'</span>]</div>
                    <div>{'}'});</div>
                 </div>

                 <div className="flex items-center gap-2 mt-6 animate-pulse">
                    <span className="text-[#10B981]">➜</span>
                    <span className="text-[#569CD6]">~</span>
                    <span className="w-2 h-4 bg-[#D4D4D4]"></span>
                 </div>
              </div>

              <div className="absolute top-16 right-6 p-2 text-white/20 hover:text-white transition-colors cursor-pointer">
                 <Copy size={16} />
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};
