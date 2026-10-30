'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageSquare, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { siteConfig, getTelUrl, getWhatsAppUrl } from '@/data/siteConfig';

export default function Footer() {
  const [currentYear, setCurrentYear] = React.useState('2026');

  React.useEffect(() => {
    setCurrentYear(String(new Date().getFullYear()));
  }, []);

  return (
    <footer className="bg-[#101924] text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#B88E2F]/50">
                <Image
                  src="/images/shabari-logo.jpg"
                  alt="Shabari Packers and Movers logo"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white font-serif block">
                  SHABARI
                </span>
                <span className="text-xs font-semibold tracking-wider uppercase text-[#B88E2F]">
                  Packers and Movers
                </span>
              </div>
            </div>

            <p className="text-sm text-stone-400 leading-relaxed pr-4">
              Careful, reliable packing and moving solutions for homes, flats, and offices. Rooted in Hyderabad, we serve customers across Telangana, Andhra Pradesh, and Karnataka with personalized relocation coordination.
            </p>

            <div className="pt-2 space-y-2 text-sm text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B88E2F] shrink-0 mt-0.5" />
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors group"
                  title="Open office location in Google Maps"
                >
                  <span>{siteConfig.fullAddress}</span>
                  <span className="block text-xs text-[#B88E2F] group-hover:underline mt-0.5 font-medium">
                    📍 View on Google Maps →
                  </span>
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B88E2F] shrink-0" />
                <a href={getTelUrl()} className="hover:text-white transition-colors">
                  {siteConfig.displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition-colors"
                >
                  WhatsApp: +91 98481 61321
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B88E2F] shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-stone-400 text-xs">
                <Clock className="w-4 h-4 text-[#B88E2F] shrink-0" />
                <span>{siteConfig.operatingHours}</span>
              </div>
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Moving Services
            </h3>
            <ul className="space-y-2.5 text-sm text-stone-400">
              <li>
                <Link href="/services/household-shifting" className="hover:text-[#E8D7B8] transition-colors">
                  Household Shifting
                </Link>
              </li>
              <li>
                <Link href="/services/home-relocation" className="hover:text-[#E8D7B8] transition-colors">
                  Home Relocation
                </Link>
              </li>
              <li>
                <Link href="/services/office-relocation" className="hover:text-[#E8D7B8] transition-colors">
                  Office Relocation
                </Link>
              </li>
              <li>
                <Link href="/services/local-shifting" className="hover:text-[#E8D7B8] transition-colors">
                  Local Shifting Hyderabad
                </Link>
              </li>
              <li>
                <Link href="/services/domestic-relocation" className="hover:text-[#E8D7B8] transition-colors">
                  Domestic Relocation
                </Link>
              </li>
              <li>
                <Link href="/services/packing-unpacking" className="hover:text-[#E8D7B8] transition-colors">
                  Packing & Unpacking
                </Link>
              </li>
              <li>
                <Link href="/services/furniture-handling" className="hover:text-[#E8D7B8] transition-colors">
                  Furniture & Fragile Care
                </Link>
              </li>
              <li>
                <Link href="/services/vehicle-transportation" className="hover:text-[#E8D7B8] transition-colors">
                  Vehicle Transportation
                </Link>
              </li>
            </ul>
          </div>

          {/* Regional Hubs & States */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Service Directories
            </h3>
            <ul className="space-y-2.5 text-sm text-stone-400">
              <li>
                <Link href="/packers-and-movers/hyderabad" className="hover:text-[#E8D7B8] transition-colors font-medium text-stone-200">
                  Packers & Movers Hyderabad
                </Link>
              </li>
              <li>
                <Link href="/packers-and-movers/telangana" className="hover:text-[#E8D7B8] transition-colors">
                  Telangana State Directory
                </Link>
              </li>
              <li>
                <Link href="/packers-and-movers/andhra-pradesh" className="hover:text-[#E8D7B8] transition-colors">
                  Andhra Pradesh Directory
                </Link>
              </li>
              <li>
                <Link href="/packers-and-movers/karnataka" className="hover:text-[#E8D7B8] transition-colors">
                  Karnataka State Directory
                </Link>
              </li>
              <li>
                <Link href="/packers-and-movers/bengaluru" className="hover:text-[#E8D7B8] transition-colors">
                  Packers & Movers Bengaluru
                </Link>
              </li>
              <li>
                <Link href="/packers-and-movers/vijayawada" className="hover:text-[#E8D7B8] transition-colors">
                  Packers & Movers Vijayawada
                </Link>
              </li>
              <li>
                <Link href="/packers-and-movers/visakhapatnam" className="hover:text-[#E8D7B8] transition-colors">
                  Packers & Movers Vizag
                </Link>
              </li>
              <li>
                <Link href="/packers-and-movers/warangal" className="hover:text-[#E8D7B8] transition-colors">
                  Packers & Movers Warangal
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Routes */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Moving Routes
            </h3>
            <ul className="space-y-2.5 text-sm text-stone-400">
              <li>
                <Link href="/moving-routes/hyderabad-to-bengaluru" className="hover:text-[#E8D7B8] transition-colors">
                  Hyderabad to Bengaluru
                </Link>
              </li>
              <li>
                <Link href="/moving-routes/hyderabad-to-vijayawada" className="hover:text-[#E8D7B8] transition-colors">
                  Hyderabad to Vijayawada
                </Link>
              </li>
              <li>
                <Link href="/moving-routes/hyderabad-to-visakhapatnam" className="hover:text-[#E8D7B8] transition-colors">
                  Hyderabad to Visakhapatnam
                </Link>
              </li>
              <li>
                <Link href="/moving-routes/hyderabad-to-tirupati" className="hover:text-[#E8D7B8] transition-colors">
                  Hyderabad to Tirupati
                </Link>
              </li>
              <li>
                <Link href="/moving-routes/hyderabad-to-guntur" className="hover:text-[#E8D7B8] transition-colors">
                  Hyderabad to Guntur
                </Link>
              </li>
              <li>
                <Link href="/moving-routes/bengaluru-to-hyderabad" className="hover:text-[#E8D7B8] transition-colors">
                  Bengaluru to Hyderabad
                </Link>
              </li>
              <li>
                <Link href="/moving-routes" className="hover:text-[#E8D7B8] transition-colors text-[#B88E2F]">
                  View All Moving Routes →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Regional District Links for Search Engine Spidering & Quick Access */}
        <div className="py-8 border-b border-stone-800 space-y-6">
          {/* Telangana Districts */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#B88E2F] mb-2.5">
              Telangana Districts & Hubs
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-stone-400">
              <Link href="/packers-and-movers/kothagudem" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-[#B88E2F]/60 text-[#E8D7B8] font-medium">📍 Kothagudem (Head Office)</Link>
              <Link href="/packers-and-movers/hyderabad" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Hyderabad (Primary Hub)</Link>
              <Link href="/packers-and-movers/warangal" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Warangal</Link>
              <Link href="/packers-and-movers/karimnagar" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Karimnagar</Link>
              <Link href="/packers-and-movers/khammam" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Khammam</Link>
              <Link href="/packers-and-movers/nizamabad" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Nizamabad</Link>
              <Link href="/packers-and-movers/siddipet" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Siddipet</Link>
              <Link href="/packers-and-movers/ramagundam" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Ramagundam</Link>
              <Link href="/packers-and-movers/mahabubnagar" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Mahabubnagar</Link>
              <Link href="/packers-and-movers/nalgonda" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Nalgonda</Link>
              <Link href="/packers-and-movers/suryapet" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Suryapet</Link>
              <Link href="/packers-and-movers/sangareddy" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Sangareddy</Link>
              <Link href="/packers-and-movers/mancherial" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Mancherial</Link>
              <Link href="/packers-and-movers/adilabad" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Adilabad</Link>
              <Link href="/packers-and-movers/jagtial" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Jagtial</Link>
              <Link href="/packers-and-movers/kamareddy" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Kamareddy</Link>
              <Link href="/packers-and-movers/nirmal" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Nirmal</Link>
              <Link href="/packers-and-movers/vikarabad" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Vikarabad</Link>
              <Link href="/packers-and-movers/wanaparthy" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Wanaparthy</Link>
              <Link href="/packers-and-movers/gadwal" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Gadwal</Link>
              <Link href="/packers-and-movers/nagarkurnool" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Nagarkurnool</Link>
              <Link href="/packers-and-movers/yadadri-bhuvanagiri" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Yadadri Bhuvanagiri</Link>
            </div>
          </div>

          {/* Andhra Pradesh Cities & Towns */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#B88E2F] mb-2.5">
              Andhra Pradesh Cities & Towns
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-stone-400">
              <Link href="/packers-and-movers/vijayawada" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Vijayawada</Link>
              <Link href="/packers-and-movers/visakhapatnam" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Visakhapatnam</Link>
              <Link href="/packers-and-movers/guntur" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Guntur</Link>
              <Link href="/packers-and-movers/tirupati" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Tirupati</Link>
              <Link href="/packers-and-movers/kurnool" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Kurnool</Link>
              <Link href="/packers-and-movers/nellore" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Nellore</Link>
              <Link href="/packers-and-movers/anantapur" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Anantapur</Link>
              <Link href="/packers-and-movers/rajahmundry" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Rajahmundry</Link>
              <Link href="/packers-and-movers/kakinada" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Kakinada</Link>
              <Link href="/packers-and-movers/kadapa" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Kadapa</Link>
              <Link href="/packers-and-movers/ongole" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Ongole</Link>
              <Link href="/packers-and-movers/eluru" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Eluru</Link>
              <Link href="/packers-and-movers/bhimavaram" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Bhimavaram</Link>
              <Link href="/packers-and-movers/machilipatnam" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Machilipatnam</Link>
              <Link href="/packers-and-movers/nandyal" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Nandyal</Link>
              <Link href="/packers-and-movers/hindupur" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Hindupur</Link>
              <Link href="/packers-and-movers/proddatur" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Proddatur</Link>
              <Link href="/packers-and-movers/tenali" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Tenali</Link>
              <Link href="/packers-and-movers/amaravati" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Amaravati</Link>
            </div>
          </div>

          {/* Karnataka Cities */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#B88E2F] mb-2.5">
              Karnataka Moving Hubs
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-stone-400">
              <Link href="/packers-and-movers/bengaluru" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Bengaluru</Link>
              <Link href="/packers-and-movers/mysuru" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Mysuru</Link>
              <Link href="/packers-and-movers/mangaluru" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Mangaluru</Link>
              <Link href="/packers-and-movers/hubballi" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Hubballi</Link>
              <Link href="/packers-and-movers/belagavi" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Belagavi</Link>
              <Link href="/packers-and-movers/ballari" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Ballari</Link>
              <Link href="/packers-and-movers/kalaburagi" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Kalaburagi</Link>
              <Link href="/packers-and-movers/shivamogga" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Shivamogga</Link>
              <Link href="/packers-and-movers/davanagere" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Davanagere</Link>
              <Link href="/packers-and-movers/tumakuru" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Tumakuru</Link>
              <Link href="/packers-and-movers/raichur" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Raichur</Link>
              <Link href="/packers-and-movers/bidar" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Bidar</Link>
              <Link href="/packers-and-movers/vijayapura" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Vijayapura</Link>
              <Link href="/packers-and-movers/hassan" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Hassan</Link>
              <Link href="/packers-and-movers/mandya" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Mandya</Link>
              <Link href="/packers-and-movers/chikkamagaluru" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Chikkamagaluru</Link>
              <Link href="/packers-and-movers/bagalkote" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Bagalkote</Link>
              <Link href="/packers-and-movers/kolar" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Kolar</Link>
              <Link href="/packers-and-movers/chitradurga" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Chitradurga</Link>
              <Link href="/packers-and-movers/yadgir" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Yadgir</Link>
              <Link href="/packers-and-movers/hosapete" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Hosapete</Link>
              <Link href="/packers-and-movers/udupi" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Udupi</Link>
            </div>
          </div>

          {/* Hyderabad Localities Tag Cloud */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#B88E2F] mb-2.5">
              Popular Hyderabad Moving Localities
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-stone-400">
              <Link href="/packers-and-movers/hyderabad/gachibowli" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Gachibowli</Link>
              <Link href="/packers-and-movers/hyderabad/kondapur" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Kondapur</Link>
              <Link href="/packers-and-movers/hyderabad/madhapur" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Madhapur</Link>
              <Link href="/packers-and-movers/hyderabad/hitec-city" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">HITEC City</Link>
              <Link href="/packers-and-movers/hyderabad/kukatpally" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Kukatpally</Link>
              <Link href="/packers-and-movers/hyderabad/miyapur" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Miyapur</Link>
              <Link href="/packers-and-movers/hyderabad/manikonda" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Manikonda</Link>
              <Link href="/packers-and-movers/hyderabad/kokapet" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Kokapet</Link>
              <Link href="/packers-and-movers/hyderabad/banjara-hills" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Banjara Hills</Link>
              <Link href="/packers-and-movers/hyderabad/jubilee-hills" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Jubilee Hills</Link>
              <Link href="/packers-and-movers/hyderabad/uppal" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Uppal</Link>
              <Link href="/packers-and-movers/hyderabad/lb-nagar" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">LB Nagar</Link>
              <Link href="/packers-and-movers/hyderabad/secunderabad" className="hover:text-white bg-stone-900/80 px-2.5 py-1 rounded border border-stone-800">Secunderabad</Link>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <div className="flex items-center gap-2 text-stone-400">
            <ShieldCheck className="w-4 h-4 text-[#B88E2F]" />
            <span>© {currentYear} {siteConfig.name}. All rights reserved.</span>
          </div>

          <div className="flex items-center space-x-6">
            <Link href="/about" className="hover:text-stone-300 transition-colors">
              About
            </Link>
            <Link href="/privacy-policy" className="hover:text-stone-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-stone-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-stone-300 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
