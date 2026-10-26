export interface BusinessInfo {
  name: string;
  legalName: string;
  tagline: string;
  phone: string;
  displayPhone: string;
  whatsappNumber: string;
  whatsappMessage: string;
  email: string;
  headquarters: string;
  fullAddress: string;
  operatingHours: string;
  establishedNotice: string;
  baseUrl: string;
  primaryServiceStates: string[];
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  isPublished: boolean;
  features: string[];
  processSteps: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
}

export interface StateLocation {
  id: string;
  slug: string;
  name: string;
  capital: string;
  region: string;
  isPublished: boolean;
  metaTitle: string;
  metaDescription: string;
  overview: string;
  keyHubs: string[];
}

export interface CityLocation {
  id: string;
  slug: string;
  name: string;
  stateSlug: 'telangana' | 'andhra-pradesh' | 'karnataka';
  stateName: string;
  isPublished: boolean;
  isHub: boolean;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  summary: string;
  localDetails: {
    description: string;
    servicesOffered: string[];
    popularLocalities?: string[];
    movingTips: string[];
    roadConnectivity: string;
  };
  faqs: { question: string; answer: string }[];
}

export interface LocalityLocation {
  id: string;
  slug: string;
  name: string;
  citySlug: string;
  cityName: string;
  stateSlug: string;
  stateName: string;
  pincodeRange?: string;
  landmarkHighlights: string[];
  isPublished: boolean;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  description: string;
  shiftingHighlights: string[];
  faqs: { question: string; answer: string }[];
}

export interface MovingRoute {
  id: string;
  slug: string;
  originCity: string;
  originState: string;
  destinationCity: string;
  destinationState: string;
  approxDistance: string;
  typicalHighway: string;
  isPublished: boolean;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  summary: string;
  planningAdvice: string[];
  packingPrecautions: string[];
  faqs: { question: string; answer: string }[];
}

export interface QuoteRequestData {
  fullName: string;
  phoneNumber: string;
  email?: string;
  movingFrom: string;
  movingTo: string;
  movingDate: string;
  moveType: string;
  additionalRequirements?: string;
  honeypot?: string;
}
