
import React, { useState, useEffect } from 'react';
import { flushSync } from 'react-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DiagonalStripes } from './components/Decorations';

// Extend Document interface for View Transition API
declare global {
  interface Document {
    startViewTransition?: (callback: () => void) => { ready: Promise<void>, finished: Promise<void>, updateCallbackDone: Promise<void> };
  }
}

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Sync class with state
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const handleThemeToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    // 1. Fallback for browsers that don't support View Transitions (Safari/Firefox)
    if (!document.startViewTransition) {
      setIsDark(!isDark);
      return;
    }

    // 2. Capture Click Coordinates
    const x = e.clientX;
    const y = e.clientY;
    
    // 3. Set CSS Variables for the Clip Path center point
    document.documentElement.style.setProperty('--x', `${x}px`);
    document.documentElement.style.setProperty('--y', `${y}px`);

    // 4. Start the Transition
    document.startViewTransition(() => {
      // flushSync forces the React state update to happen synchronously
      // so the DOM is updated *before* the snapshot is taken.
      flushSync(() => {
        setIsDark((prev) => !prev);
        // We manually toggle the class here to ensure it's applied 
        // within the same tick as the snapshot
        if (!isDark) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      });
    });
  };

  return (
    <div className="min-h-screen bg-brand-base text-brand-contrast selection:bg-brand-peach selection:text-white relative overflow-x-hidden">
      
      {/* Background Noise Texture */}
      <div className={`fixed inset-0 bg-noise pointer-events-none z-50 opacity-50 ${isDark ? 'mix-blend-overlay' : 'mix-blend-multiply'}`}></div>

      {/* Main Layout Container */}
      <div className="max-w-[1440px] mx-auto relative border-x border-brand-border min-h-screen box-content shadow-[0_0_100px_rgba(0,0,0,0.05)]">
        
        {/* Top Decorative Lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-brand-border z-10" />
        
        {/* Navigation */}
        <Navbar onToggleTheme={handleThemeToggle} isDark={isDark} />

        {/* Top Decorative Stripe Bar - Matches TrustedSection style */}
        <div className="h-[48px] border-b border-brand-border relative overflow-hidden flex items-center bg-brand-surface">
             {/* Spacing 12px for lighter pattern */}
             <DiagonalStripes opacity={0.1} density={12} />
             {/* Tech marker */}
             <div className="absolute left-0 top-0 bottom-0 w-8 border-r border-brand-border z-10"></div>
        </div>

        {/* Main Content Area */}
        <main>
          <Hero />
        </main>

        {/* Bottom Decorative Area */}
        <div className="h-12 border-t border-brand-border relative overflow-hidden mt-0 bg-brand-surface">
             <DiagonalStripes opacity={0.05} density={12} />
        </div>

      </div>
      
      {/* Page frame lines (Design aesthetic: crop marks) */}
      <div className="fixed top-8 left-8 w-4 h-4 border-l border-t border-brand-muted opacity-20 hidden lg:block"></div>
      <div className="fixed top-8 right-8 w-4 h-4 border-r border-t border-brand-muted opacity-20 hidden lg:block"></div>
      <div className="fixed bottom-8 left-8 w-4 h-4 border-l border-b border-brand-muted opacity-20 hidden lg:block"></div>
      <div className="fixed bottom-8 right-8 w-4 h-4 border-r border-b border-brand-muted opacity-20 hidden lg:block"></div>

    </div>
  );
};

export default App;
