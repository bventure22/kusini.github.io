
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Tours } from './components/Tours';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Home Section */}
        <Hero />
        
        {/* About Section */}
        <About />
        
        {/* Tours Section */}
        <Tours />
        
        {/* Destinations Mini-Section */}
        <section id="destinations" className="py-24 bg-stone-950 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-sm font-bold tracking-[0.2em] text-amber-500 uppercase mb-4">Discover More</h2>
                <h3 className="text-4xl font-bold text-white mb-6">Explore the <span className="text-amber-500 italic">Magic</span> of Southern Tanzania</h3>
                <p className="text-stone-400 text-lg leading-relaxed mb-8">
                  From the vast plains of Nyerere to the lush rainforests of Udzungwa, we take you to the hidden gems of the Southern Circuit.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-stone-900/50 backdrop-blur-sm p-6 rounded-xl border border-stone-800">
                    <p className="text-3xl font-bold text-amber-500">15+</p>
                    <p className="text-stone-400 text-sm">Destinations</p>
                  </div>
                  <div className="bg-stone-900/50 backdrop-blur-sm p-6 rounded-xl border border-stone-800">
                    <p className="text-3xl font-bold text-amber-500">24/7</p>
                    <p className="text-stone-400 text-sm">Support</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img src="https://picsum.photos/seed/d1/400/500" className="rounded-2xl h-80 w-full object-cover mt-8" alt="Tanzania 1" />
                <img src="https://picsum.photos/seed/d2/400/500" className="rounded-2xl h-80 w-full object-cover" alt="Tanzania 2" />
              </div>
            </div>
          </div>
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-500/5 to-transparent"></div>
        </section>

        {/* Call to action section */}
        <section className="py-20 bg-amber-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">Ready for an unforgettable adventure?</h3>
            <button className="bg-white text-amber-900 px-12 py-4 rounded-full font-bold text-lg hover:bg-stone-100 transition-all shadow-xl hover:-translate-y-1">
              Start Your Journey Today
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
