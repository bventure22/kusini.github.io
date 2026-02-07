
import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=1000" 
                alt="Tanzanian Culture and Nature" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-amber-800 p-8 rounded-2xl hidden md:block max-w-xs shadow-xl">
              <p className="text-amber-100 italic">"Our mission is to cultivate a profound appreciation for natural wonders and cultural heritage."</p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-bold tracking-[0.2em] text-amber-700 uppercase mb-4">About Kusini Tours And Safaris</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
                Offering Inclusive Travel <span className="text-amber-800">Experiences</span>
              </h3>
            </div>
            
            <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
              <p className="font-semibold text-stone-800">
                OFFERING INCLUSIVE TRAVEL EXPERIENCES TO THE PUBLIC EITHER DIRECTLY OR THROUGH TRAVEL AGENTS
              </p>
              
              <p>
                Kusini tours will strive to provide exceptional experiences and create unforgettable memories for our valued customers. Whether you're seeking thrilling wildlife encounters, breath-taking hikes, immersive cultural encounters, or relaxing beach getaways, Kusini Tours will be there to cater to your needs.
              </p>
              
              <p>
                We will also offer vacation packages and home stays to ensure a well-rounded and authentic Tanzanian experience. Additionally, we will take pride in showcasing unique and off-the-beaten-path attractions that are not typically included in traditional itineraries.
              </p>
              
              <div className="bg-stone-50 border-l-4 border-amber-800 p-6 rounded-r-lg">
                <h4 className="font-bold text-stone-900 mb-2 uppercase text-sm tracking-widest">Our Mission</h4>
                <p className="text-stone-600">
                  To be the leading provider of diverse travel experiences, including beach vacations, hiking and trekking, mountain climbing, wildlife safaris, adventure tours, cultural tours, eco tours, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
