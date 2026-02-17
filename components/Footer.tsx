
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const FooterLink: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <a href="#" className="block text-[14px] text-brand-muted hover:text-brand-contrast transition-colors duration-200 py-1.5 w-fit">
    {children}
  </a>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-base pt-20 border-t border-brand-border">
      <div className="px-8 md:px-12 lg:px-16 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-brand-peach to-[#E06C2B]"></div>
                <span className="text-[20px] font-bold text-brand-contrast tracking-tight">Aueik</span>
              </div>
              <p className="text-brand-muted text-[15px] max-w-sm leading-relaxed">
                The enterprise AI layer for modern governance. Secure, scalable, and built for the future of work.
              </p>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2">
            <h4 className="text-[12px] font-mono text-brand-contrast uppercase tracking-widest mb-6">Product</h4>
            <div className="space-y-1">
              <FooterLink>Features</FooterLink>
              <FooterLink>Integrations</FooterLink>
              <FooterLink>Enterprise</FooterLink>
              <FooterLink>Solutions</FooterLink>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[12px] font-mono text-brand-contrast uppercase tracking-widest mb-6">Company</h4>
            <div className="space-y-1">
              <FooterLink>About</FooterLink>
              <FooterLink>Careers</FooterLink>
              <FooterLink>Blog</FooterLink>
              <FooterLink>Contact</FooterLink>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4">
             <h4 className="text-[12px] font-mono text-brand-contrast uppercase tracking-widest mb-6">Stay Updated</h4>
             <div className="relative group">
               <input 
                 type="email" 
                 placeholder="Enter your email" 
                 className="w-full bg-brand-surface border border-brand-border text-brand-contrast py-4 px-4 text-[14px] focus:outline-none focus:border-brand-contrast/30 transition-colors rounded-[2px]"
               />
               <button className="absolute right-2 top-2 bottom-2 aspect-square bg-brand-contrast text-brand-base flex items-center justify-center hover:bg-brand-peach hover:text-white transition-colors rounded-[1px]">
                 <ArrowUpRight size={18} />
               </button>
             </div>
             <p className="mt-4 text-[12px] text-brand-muted/60">
               Join 10,000+ developers receiving our monthly insights.
             </p>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brand-border py-8 px-8 md:px-12 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-4 bg-brand-surface/30">
        <span className="text-[12px] text-brand-muted font-mono">
          © 2024 Aueik Inc. All rights reserved.
        </span>
        <div className="flex gap-6">
           <a href="#" className="text-[12px] text-brand-muted hover:text-brand-contrast uppercase tracking-wider">Privacy Policy</a>
           <a href="#" className="text-[12px] text-brand-muted hover:text-brand-contrast uppercase tracking-wider">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
