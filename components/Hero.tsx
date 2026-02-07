
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=2000" 
          alt="Safari Landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/40 backdrop-brightness-75"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <span className="inline-block py-1 px-4 mb-6 text-sm font-semibold tracking-widest text-amber-200 uppercase border border-amber-200/30 rounded-full backdrop-blur-sm bg-black/20">
          Official Website
        </span>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Welcome to <span className="text-amber-400">KUSINI TOURS</span>
        </h1>
        <p className="text-xl md:text-2xl text-stone-100 mb-10 font-light max-w-2xl mx-auto">
          Explore More and Book Now Your Trip to the Heart of the Wild.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <button className="w-full md:w-auto px-10 py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-xl">
            Book Now
          </button>
          <div className="bg-white/10 backdrop-blur-md px-10 py-4 rounded-lg border border-white/20">
            <p className="text-white font-semibold">Dream Come True</p>
            <p className="text-amber-400 font-bold text-2xl">30% DISCOUNT</p>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="w-[2px] h-10 bg-gradient-to-b from-amber-400 to-transparent"></div>
        <p className="text-white text-[10px] mt-2 tracking-widest uppercase">Scroll Down</p>
      </div>
    </section>
  );
};
