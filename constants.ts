
import { TourPackage } from './types';

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: '1',
    title: 'Fly-In Safari: Zanzibar to Nyerere National Park',
    duration: '3 Days 2 Nights',
    image: 'https://picsum.photos/seed/safari1/800/600',
    description: 'Experience the wilderness of Africa with a convenient fly-in package directly from the beaches of Zanzibar.',
  },
  {
    id: '2',
    title: 'Mikumi & Udzungwa National Park Expedition',
    duration: '4 Days 3 Nights',
    image: 'https://picsum.photos/seed/safari2/800/600',
    description: 'A perfect blend of wildlife viewing in Mikumi and scenic trekking in the Udzungwa Mountains.',
  },
  {
    id: '3',
    title: 'Safari Itinerary: Dar - Morogoro - Mikumi - Ruaha',
    duration: '5 Days 4 Nights',
    image: 'https://picsum.photos/seed/safari3/800/600',
    description: 'Journey through the heart of Southern Tanzania, exploring diverse landscapes and rich wildlife habitats.',
  },
  {
    id: '4',
    title: 'Southern Tanzania Explorer: Safari & Hiking',
    duration: '8 Days',
    image: 'https://picsum.photos/seed/safari4/800/600',
    description: 'An extensive adventure covering Nyerere, Ruaha, Mikumi, and Udzungwa for the true nature enthusiast.',
  },
  {
    id: '5',
    title: 'Grand Southern Tanzania Safari',
    duration: '9 Days 8 Nights',
    image: 'https://picsum.photos/seed/safari5/800/600',
    description: 'Our most comprehensive package offering deep immersion into the wild soul of Southern Tanzania.',
  }
];

export const NAV_LINKS: { name: string; href: string }[] = [
  { name: 'Home', href: '#home' },
  { name: 'Destinations', href: '#destinations' },
  { name: 'Tours', href: '#tours' },
  { name: 'About Us', href: '#about' },
  { name: 'Contact Us', href: '#contact' },
];
