
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-brand-border last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-[16px] md:text-[18px] text-brand-contrast font-normal group-hover:text-brand-peach transition-colors pr-8">
          {question}
        </span>
        <div className="shrink-0 text-brand-muted group-hover:text-brand-contrast transition-colors">
           {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
        <p className="text-brand-muted text-[15px] leading-[1.6] max-w-2xl">
          {answer}
        </p>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  return (
    <section className="border-t border-brand-border bg-brand-base py-24 px-6 md:px-12 lg:px-16">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left: Header */}
        <div className="lg:col-span-4">
           <span className="text-brand-peach font-mono text-[11px] uppercase tracking-widest mb-4 block">
              Support
           </span>
           <h2 className="text-[32px] md:text-[40px] leading-[1.0] text-brand-contrast font-normal tracking-[-0.02em] mb-6">
              Common <br/> Queries.
           </h2>
        </div>

        {/* Right: Questions */}
        <div className="lg:col-span-8">
           <FAQItem 
             question="Can I deploy Aueik in my own VPC?"
             answer="Yes. For Enterprise plans, we offer self-hosted runners and full VPC peering capabilities to ensure data never leaves your infrastructure boundaries."
           />
           <FAQItem 
             question="How do you handle API rate limits?"
             answer="Our mesh automatically handles backoff strategies, queuing, and rate limit negotiation across all connected services. You don't need to write custom retry logic."
           />
           <FAQItem 
             question="Is there a limit to concurrent workflows?"
             answer="On the Scale plan, we support up to 500 concurrent executions. The Enterprise plan removes all concurrency limits, scaling elastically with your load."
           />
           <FAQItem 
             question="Do you offer SDKs for Python or Node.js?"
             answer="We provide first-party typed SDKs for TypeScript, Python, and Go. All system actions can be defined as code and version controlled."
           />
        </div>

      </div>
    </section>
  );
};
