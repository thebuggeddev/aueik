import React from 'react';
import { GridMarker } from './Decorations';
import { Sun, Moon } from 'lucide-react';

interface NavbarProps {
  onToggleTheme: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isDark: boolean;
}

const NavLink: React.FC<{ children: React.ReactNode; href?: string }> = ({ children, href = '#' }) => (
  <a 
    href={href} 
    className="text-[13px] uppercase tracking-widest text-brand-muted hover:text-brand-contrast transition-colors duration-200 font-medium px-5"
  >
    {children}
  </a>
);

export const Navbar: React.FC<NavbarProps> = ({ onToggleTheme, isDark }) => {
  return (
    <header className="relative h-[88px] border-b border-brand-border flex items-center justify-between px-8 bg-brand-base z-20 transition-colors duration-0">
      {/* Grid Anchor Points */}
      <GridMarker className="-left-1.5 top-0" />
      <GridMarker className="-right-1.5 top-0" />
      <GridMarker className="-left-1.5 -bottom-1.5" />
      <GridMarker className="-right-1.5 -bottom-1.5" />

      {/* Left: Logo */}
      <div className="flex items-center gap-3 w-48 pl-4">
        {/* Logo Icon - Recreated Aueik Logo */}
        <div className="w-8 h-8 relative shrink-0">
             <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                   <linearGradient id="logo-gradient" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#FFAB70" />
                      <stop offset="100%" stopColor="#E06C2B" />
                   </linearGradient>
                </defs>
                {/* Stylized Split Ring Shape */}
                <path 
                  fill="url(#logo-gradient)" 
                  d="M16 4C9.37 4 4 9.37 4 16C4 22.63 9.37 28 16 28C18.6 28 21 27.1 23 25.6L20.8 23.4C19.5 24.4 17.8 25 16 25C11.03 25 7 20.97 7 16C7 11.03 11.03 7 16 7C17.8 7 19.5 7.6 20.8 8.6L23 6.4C21 4.9 18.6 4 16 4Z" 
                />
                <path 
                  fill="url(#logo-gradient)"
                  d="M26.5 10L23.5 13C24.4 13.9 25 15.1 25 16.5C25 19 23 21 20.5 21L17.5 24C19 25.5 22 25.5 24 23.5C26 21.5 26.5 18 26.5 16C26.5 13.5 26.5 10 26.5 10Z"
                  opacity="0.9"
                />
             </svg>
        </div>
        <span className="text-[22px] font-bold tracking-tight text-brand-contrast font-sans">Aueik</span>
      </div>

      {/* Center: Links */}
      <nav className="hidden lg:flex items-center justify-center flex-1 h-full mx-8">
        <NavLink>Solutions</NavLink>
        <NavLink>Product</NavLink>
        <NavLink>Pricing</NavLink>
        <NavLink>Blogs</NavLink>
        <NavLink>Resources</NavLink>
      </nav>

      {/* Right: CTA & Theme Toggle */}
      <div className="w-auto flex justify-end items-center gap-4 pr-4">
        <button 
          onClick={onToggleTheme}
          className="p-2 rounded-full hover:bg-brand-border transition-colors text-brand-contrast"
          aria-label="Toggle Theme"
        >
          {isDark ? <Sun size={18} strokeWidth={2} /> : <Moon size={18} strokeWidth={2} />}
        </button>
        
        <button className="hidden md:block text-[13px] uppercase tracking-[0.15em] font-medium border border-brand-contrast/10 px-6 py-3.5 hover:bg-brand-contrast hover:text-brand-base hover:border-brand-contrast transition-all duration-300 text-brand-muted bg-transparent rounded-[2px] whitespace-nowrap min-w-fit">
          Sign Up
        </button>
      </div>
    </header>
  );
};