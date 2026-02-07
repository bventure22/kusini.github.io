
import React from 'react';
import { TOUR_PACKAGES } from '../constants';
import { TourCard } from './TourCard';

export const Tours: React.FC = () => {
  return (
    <section id="tours" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-amber-700 uppercase mb-4">Our Service Packages</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-stone-900">Featured <span className="text-amber-800">Tours</span></h3>
          <p className="mt-4 text-stone-600 max-w-2xl mx-auto">
            Explore our curated selection of once-in-a-lifetime journeys through the most stunning parks and wilderness areas of Tanzania.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOUR_PACKAGES.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  );
};
