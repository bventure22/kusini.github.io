
import React from 'react';
import { NAV_LINKS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-stone-950 text-stone-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex flex-col mb-6">
              <span className="text-2xl font-bold text-white tracking-tight">KUSINI TOURS</span>
              <span className="text-[10px] tracking-widest text-stone-500 uppercase font-medium">AND SAFARIS</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Leading provider of diverse travel experiences in Tanzania. From wildlife safaris to beach getaways, we create memories that last a lifetime.
            </p>
            <div className="flex space-x-4">
              {['Facebook', 'Instagram', 'Twitter'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center hover:bg-amber-800 hover:text-white transition-colors">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-stone-500 group-hover:bg-white"></div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Quick Links</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm hover:text-amber-400 transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Destinations</h4>
            <ul className="space-y-4">
              {['Nyerere National Park', 'Mikumi NP', 'Ruaha NP', 'Udzungwa Mountains', 'Zanzibar'].map(dest => (
                <li key={dest}>
                  <a href="#" className="text-sm hover:text-amber-400 transition-colors">{dest}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <span className="text-amber-500 mr-2 font-bold">A:</span>
                Dar es Salaam, Tanzania
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2 font-bold">E:</span>
                info@kusinitours.com
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2 font-bold">P:</span>
                +255 (0) 123 456 789
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-stone-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© 2024 Kusini Tours And Safaris. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-amber-400">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
