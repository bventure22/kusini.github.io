
export interface TourPackage {
  id: string;
  title: string;
  duration: string;
  image: string;
  price?: string;
  description: string;
}

export type NavItem = 'Home' | 'Destinations' | 'Tours' | 'About Us' | 'Contact Us';
