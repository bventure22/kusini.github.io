
import React from 'react';
import { TourPackage } from '../types';

interface TourCardProps {
  tour: TourPackage;
}

export const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-stone-100 transition-all hover:-translate-y-2 hover:shadow-2xl flex flex-col group">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={tour.image} 
          alt={tour.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-amber-800 shadow-sm">
          {tour.duration}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h4 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-amber-800 transition-colors">
          {tour.title}
        </h4>
        <p className="text-stone-500 text-sm mb-6 flex-grow leading-relaxed">
          {tour.description}
        </p>
        <button className="w-full border-2 border-stone-200 text-stone-700 font-bold py-3 rounded-xl hover:bg-amber-800 hover:border-amber-800 hover:text-white transition-all">
          View Details
        </button>
      </div>
    </div>
  );
};
