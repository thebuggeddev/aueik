
import React from 'react';

export const Testimonials: React.FC = () => {
  return (
    <section className="border-t border-brand-border bg-brand-base py-24 px-6 md:px-12 lg:px-16">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
         
         {/* Left: Section Marker */}
         <div className="lg:col-span-2 hidden lg:block h-full border-r border-brand-border relative">
             <span className="absolute top-0 left-0 text-[11px] font-mono text-brand-peach uppercase tracking-widest origin-top-left -rotate-90 translate-y-24 -translate-x-8">
                Executive Brief
             </span>
         </div>

         {/* Center: Quote */}
         <div className="lg:col-span-10">
            <blockquote className="text-[28px] md:text-[40px] leading-[1.2] text-brand-contrast font-medium tracking-[-0.02em] mb-12">
               "Aueik has fundamentally changed how we manage our engineering velocity. It’s not just an automation tool; it’s the <span className="text-brand-muted line-through decoration-brand-peach/50 decoration-2">missing</span> foundational layer of our operational stack."
            </blockquote>
            
            <div className="flex items-center gap-6">
               <div className="w-16 h-16 bg-brand-surface border border-brand-border rounded-full overflow-hidden grayscale contrast-125">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" alt="CTO" className="w-full h-full object-cover" />
               </div>
               <div>
                  <cite className="not-italic text-[16px] text-brand-contrast font-bold block mb-1">Marcus Chen</cite>
                  <span className="text-[14px] font-mono text-brand-muted uppercase tracking-wider">CTO, Vertex Dynamics</span>
               </div>
            </div>
         </div>

      </div>
    </section>
  );
};
