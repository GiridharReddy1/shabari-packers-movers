'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, MessageSquare, Menu, X, ChevronDown } from 'lucide-react';
import { siteConfig, getTelUrl, getWhatsAppUrl } from '@/data/siteConfig';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [areasDropdownOpen, setAreasDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setAreasDropdownOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#0F2C59] text-white text-xs sm:text-sm py-2 px-4 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-stone-200">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>#1 Trusted Packers and Movers Across Hyderabad, Telangana, AP & Karnataka</span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <a
              href={getTelUrl()}
              className="flex items-center gap-1.5 hover:text-[#E8D7B8] transition-colors"
              aria-label={`Call Shabari Packers and Movers at ${siteConfig.displayPhone}`}
            >
              <Phone className="w-3.5 h-3.5 text-[#B88E2F]" />
              <span>{siteConfig.displayPhone}</span>
            </a>
            <span className="text-stone-500">|</span>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-emerald-300 transition-colors"
              aria-label="Enquire with Shabari Packers on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b border-[#EAE5DC]'
            : 'bg-[#FAF8F5] border-b border-[#EAE5DC]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#B88E2F] rounded-lg p-1"
            >
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#B88E2F]/40 shadow-xs group-hover:scale-105 transition-transform">
                <Image
                  src="/images/shabari-logo.jpg"
                  alt="Shabari Packers and Movers official logo emblem"
                  fill
                  sizes="48px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-[#14171C] group-hover:text-[#0F2C59] transition-colors leading-tight font-serif">
                  SHABARI
                </span>
                <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-[#B88E2F]">
                  Packers and Movers
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
              <Link
                href="/"
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname === '/'
                    ? 'text-[#0F2C59] font-semibold bg-[#E8D7B8]/20'
                    : 'text-[#14171C] hover:text-[#0F2C59] hover:bg-stone-100/60'
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname === '/about'
                    ? 'text-[#0F2C59] font-semibold bg-[#E8D7B8]/20'
                    : 'text-[#14171C] hover:text-[#0F2C59] hover:bg-stone-100/60'
                }`}
              >
                About Us
              </Link>
              <Link
                href="/services"
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname.startsWith('/services')
                    ? 'text-[#0F2C59] font-semibold bg-[#E8D7B8]/20'
                    : 'text-[#14171C] hover:text-[#0F2C59] hover:bg-stone-100/60'
                }`}
              >
                Services
              </Link>
              <Link
                href="/moving-routes"
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname.startsWith('/moving-routes')
                    ? 'text-[#0F2C59] font-semibold bg-[#E8D7B8]/20'
                    : 'text-[#14171C] hover:text-[#0F2C59] hover:bg-stone-100/60'
                }`}
              >
                Moving Routes
              </Link>

              {/* Service Areas Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setAreasDropdownOpen(true)}
                onMouseLeave={() => setAreasDropdownOpen(false)}
              >
                <Link
                  href="/packers-and-movers"
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    pathname.startsWith('/packers-and-movers')
                      ? 'text-[#0F2C59] font-semibold bg-[#E8D7B8]/20'
                      : 'text-[#14171C] hover:text-[#0F2C59] hover:bg-stone-100/60'
                  }`}
                  aria-expanded={areasDropdownOpen}
                >
                  <span>Service Areas</span>
                  <ChevronDown className="w-4 h-4 text-[#56616D] transition-transform duration-200" />
                </Link>

                {areasDropdownOpen && (
                  <div className="absolute top-full left-0 w-64 pt-2 shadow-lg animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="bg-white rounded-xl border border-[#EAE5DC] p-2 shadow-xl ring-1 ring-black/5">
                      <Link
                        href="/packers-and-movers"
                        className="block px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[#B88E2F] hover:bg-amber-50/50 rounded-lg"
                      >
                        All Service Areas Directory →
                      </Link>
                      <div className="h-px bg-stone-100 my-1" />
                      <Link
                        href="/packers-and-movers/hyderabad"
                        className="block px-3 py-2 text-sm text-[#14171C] hover:bg-[#F9F5EC] hover:text-[#0F2C59] rounded-lg font-medium"
                      >
                        Hyderabad (Primary Hub)
                      </Link>
                      <Link
                        href="/packers-and-movers/telangana"
                        className="block px-3 py-2 text-sm text-[#14171C] hover:bg-[#F9F5EC] hover:text-[#0F2C59] rounded-lg"
                      >
                        Telangana State
                      </Link>
                      <Link
                        href="/packers-and-movers/andhra-pradesh"
                        className="block px-3 py-2 text-sm text-[#14171C] hover:bg-[#F9F5EC] hover:text-[#0F2C59] rounded-lg"
                      >
                        Andhra Pradesh State
                      </Link>
                      <Link
                        href="/packers-and-movers/karnataka"
                        className="block px-3 py-2 text-sm text-[#14171C] hover:bg-[#F9F5EC] hover:text-[#0F2C59] rounded-lg"
                      >
                        Karnataka State
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname === '/contact'
                    ? 'text-[#0F2C59] font-semibold bg-[#E8D7B8]/20'
                    : 'text-[#14171C] hover:text-[#0F2C59] hover:bg-stone-100/60'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={getTelUrl()}
                className="flex items-center gap-2 px-3.5 py-2 text-sm font-medium text-[#14171C] border border-[#EAE5DC] hover:border-[#B88E2F] hover:bg-white rounded-lg transition-all"
              >
                <Phone className="w-4 h-4 text-[#B88E2F]" />
                <span className="font-semibold">{siteConfig.displayPhone}</span>
              </a>
              <Link
                href="/get-quote"
                className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-white bg-[#0F2C59] hover:bg-[#0A1C38] rounded-lg shadow-xs hover:shadow transition-all"
              >
                Get a Free Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={getTelUrl()}
                className="p-2 text-[#0F2C59] bg-white border border-[#EAE5DC] rounded-lg"
                aria-label="Call Shabari Packers"
              >
                <Phone className="w-5 h-5 text-[#B88E2F]" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#14171C] hover:text-[#0F2C59] bg-white border border-[#EAE5DC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#EAE5DC] bg-[#FAF8F5] px-4 pt-3 pb-6 space-y-2 shadow-lg">
            <Link
              href="/"
              className="block px-3 py-2.5 text-base font-medium text-[#14171C] hover:bg-stone-100 rounded-lg"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2.5 text-base font-medium text-[#14171C] hover:bg-stone-100 rounded-lg"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2.5 text-base font-medium text-[#14171C] hover:bg-stone-100 rounded-lg"
            >
              All Services
            </Link>
            <Link
              href="/moving-routes"
              className="block px-3 py-2.5 text-base font-medium text-[#14171C] hover:bg-stone-100 rounded-lg"
            >
              Moving Routes
            </Link>

            <div className="pt-2 pb-1 border-t border-[#EAE5DC]">
              <span className="block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#B88E2F]">
                Service Areas
              </span>
              <div className="grid grid-cols-2 gap-1 mt-1 pl-2">
                <Link
                  href="/packers-and-movers/hyderabad"
                  className="px-2 py-1.5 text-sm font-medium text-[#0F2C59] hover:bg-stone-100 rounded"
                >
                  • Hyderabad Hub
                </Link>
                <Link
                  href="/packers-and-movers/telangana"
                  className="px-2 py-1.5 text-sm text-[#56616D] hover:bg-stone-100 rounded"
                >
                  • Telangana
                </Link>
                <Link
                  href="/packers-and-movers/andhra-pradesh"
                  className="px-2 py-1.5 text-sm text-[#56616D] hover:bg-stone-100 rounded"
                >
                  • Andhra Pradesh
                </Link>
                <Link
                  href="/packers-and-movers/karnataka"
                  className="px-2 py-1.5 text-sm text-[#56616D] hover:bg-stone-100 rounded"
                >
                  • Karnataka
                </Link>
              </div>
            </div>

            <Link
              href="/contact"
              className="block px-3 py-2.5 text-base font-medium text-[#14171C] hover:bg-stone-100 rounded-lg"
            >
              Contact
            </Link>

            <div className="pt-3 flex flex-col gap-2">
              <Link
                href="/get-quote"
                className="w-full text-center py-3 text-sm font-semibold text-white bg-[#0F2C59] hover:bg-[#0A1C38] rounded-xl shadow-xs"
              >
                Get a Free Quote
              </Link>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-xl"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
