import { BusinessInfo } from '@/types';

export const siteConfig: BusinessInfo = {
  name: 'Shabari Packers and Movers',
  legalName: 'Shabari Packers and Movers',
  tagline: 'Your Belongings, Our Priority',
  phone: '+919848161321',
  displayPhone: '+91 98481 61321',
  whatsappNumber: '919848161321',
  whatsappMessage: 'Hello Shabari Packers and Movers, I would like to enquire about a relocation. Please help me with the quotation.',
  email: 'contact@shabaripackers.com',
  headquarters: 'Hyderabad, Telangana, India',
  fullAddress: 'Plot No. 42, Prashanth Nagar, Kukatpally / Miyapur Corridor, Hyderabad, Telangana 500072, India',
  operatingHours: 'Monday – Sunday: 7:00 AM – 9:30 PM (Customer Support & Enquiries)',
  establishedNotice: 'Serving Hyderabad, Telangana, Andhra Pradesh, and Karnataka with personalized relocation care.',
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://shabaripackers.com',
  primaryServiceStates: ['Telangana', 'Andhra Pradesh', 'Karnataka'],
};

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Moving Routes', href: '/moving-routes' },
  {
    label: 'Service Areas',
    href: '/packers-and-movers',
    children: [
      { label: 'Telangana', href: '/packers-and-movers/telangana' },
      { label: 'Hyderabad (Primary Hub)', href: '/packers-and-movers/hyderabad' },
      { label: 'Andhra Pradesh', href: '/packers-and-movers/andhra-pradesh' },
      { label: 'Karnataka', href: '/packers-and-movers/karnataka' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];

export const getWhatsAppUrl = (customMessage?: string): string => {
  const message = customMessage || siteConfig.whatsappMessage;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

export const getTelUrl = (): string => {
  return `tel:${siteConfig.phone}`;
};
