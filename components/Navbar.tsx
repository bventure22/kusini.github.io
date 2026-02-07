
import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-stone-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex flex-col">
            <span className="text-2xl font-bold text-amber-900 tracking-tight leading-none">KUSINI TOURS</span>
            <span className="text-[10px] tracking-widest text-stone-500 uppercase font-medium">AND SAFARIS</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-stone-600 hover:text-amber-700 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-amber-800 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-amber-900 transition-all shadow-md active:scale-95">
                Book Now
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-stone-600 hover:text-stone-900 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-stone-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-stone-600 hover:text-amber-700 block px-3 py-4 text-base font-medium border-b border-stone-50 last:border-none"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="p-3">
              <button className="w-full bg-amber-800 text-white px-5 py-3 rounded-lg text-sm font-medium hover:bg-amber-900 transition-all">
                Book Your Trip Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
