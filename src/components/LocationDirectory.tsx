'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, MapPin, ArrowRight, Building, Compass } from 'lucide-react';
import { statesData, citiesData, hyderabadLocalitiesData } from '@/data/locations';

export default function LocationDirectory() {
  const [activeTab, setActiveTab] = useState<'telangana' | 'andhra-pradesh' | 'karnataka' | 'hyderabad'>('telangana');
  const [searchQuery, setSearchQuery] = useState('');

  const telanganaCities = citiesData.filter((c) => c.stateSlug === 'telangana' && c.isPublished);
  const apCities = citiesData.filter((c) => c.stateSlug === 'andhra-pradesh' && c.isPublished);
  const karnatakaCities = citiesData.filter((c) => c.stateSlug === 'karnataka' && c.isPublished);
  const hydLocalities = hyderabadLocalitiesData.filter((l) => l.isPublished);

  // Filter based on search query
  const query = searchQuery.toLowerCase().trim();

  const filteredTelangana = telanganaCities.filter((c) =>
    c.name.toLowerCase().includes(query)
  );
  const filteredAP = apCities.filter((c) =>
    c.name.toLowerCase().includes(query)
  );
  const filteredKarnataka = karnatakaCities.filter((c) =>
    c.name.toLowerCase().includes(query)
  );
  const filteredHyderabad = hydLocalities.filter((l) =>
    l.name.toLowerCase().includes(query)
  );

  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F5] border-t border-[#EAE5DC]" id="location-directory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#B88E2F] bg-[#F9F5EC] border border-[#E8D7B8] mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Search By Location</span>
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#14171C] font-serif tracking-tight">
            Packers and Movers Across Telangana, Andhra Pradesh and Karnataka
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#56616D] leading-relaxed">
            Explore our relocation services across selected cities and service areas in South India. Choose your location to learn more about the moving solutions available for your needs.
          </p>

          {/* Quick Search Bar */}
          <div className="mt-6 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search your city or Hyderabad area (e.g. Gachibowli, Vijayawada, Mysuru)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-white border border-[#EAE5DC] rounded-xl shadow-xs focus:outline-none focus:ring-2 focus:ring-[#B88E2F]/20 focus:border-[#B88E2F] transition-all"
            />
          </div>
        </div>

        {/* State Selection Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveTab('telangana')}
            className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'telangana'
                ? 'bg-[#0F2C59] text-white shadow-sm'
                : 'bg-white text-[#56616D] border border-[#EAE5DC] hover:border-[#B88E2F] hover:text-[#14171C]'
            }`}
          >
            Telangana ({filteredTelangana.length})
          </button>
          <button
            onClick={() => setActiveTab('hyderabad')}
            className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'hyderabad'
                ? 'bg-[#0F2C59] text-white shadow-sm'
                : 'bg-white text-[#56616D] border border-[#EAE5DC] hover:border-[#B88E2F] hover:text-[#14171C]'
            }`}
          >
            Hyderabad Localities ({filteredHyderabad.length})
          </button>
          <button
            onClick={() => setActiveTab('andhra-pradesh')}
            className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'andhra-pradesh'
                ? 'bg-[#0F2C59] text-white shadow-sm'
                : 'bg-white text-[#56616D] border border-[#EAE5DC] hover:border-[#B88E2F] hover:text-[#14171C]'
            }`}
          >
            Andhra Pradesh ({filteredAP.length})
          </button>
          <button
            onClick={() => setActiveTab('karnataka')}
            className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'karnataka'
                ? 'bg-[#0F2C59] text-white shadow-sm'
                : 'bg-white text-[#56616D] border border-[#EAE5DC] hover:border-[#B88E2F] hover:text-[#14171C]'
            }`}
          >
            Karnataka ({filteredKarnataka.length})
          </button>
        </div>

        {/* Tab Content Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EAE5DC] shadow-xs">
          {/* TELANGANA TAB */}
          {activeTab === 'telangana' && (
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6 pb-4 border-b border-stone-100">
                <div>
                  <h3 className="text-xl font-bold text-[#14171C] font-serif">
                    Telangana Service Areas & Cities
                  </h3>
                  <p className="text-xs text-[#56616D] mt-0.5">
                    Our home operational state with primary headquarters in Hyderabad.
                  </p>
                </div>
                <Link
                  href="/packers-and-movers/telangana"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F2C59] hover:text-[#B88E2F] transition-colors"
                >
                  <span>View Telangana State Overview</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {filteredTelangana.length === 0 ? (
                <p className="text-sm text-stone-500 py-6 text-center">No locations matched &quot;{searchQuery}&quot;.</p>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {filteredTelangana.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/packers-and-movers/${city.slug}`}
                      className="group flex flex-col justify-between p-3.5 rounded-xl border border-[#EAE5DC] hover:border-[#B88E2F] bg-stone-50/50 hover:bg-white hover:shadow-xs transition-all"
                    >
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-xs font-semibold text-[#14171C] group-hover:text-[#0F2C59] transition-colors">
                          {city.name}
                        </span>
                        {city.isHub && (
                          <span className="text-[9px] font-bold uppercase tracking-wider bg-[#F9F5EC] text-[#B88E2F] px-1.5 py-0.5 rounded border border-[#E8D7B8]">
                            Hub
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] text-[#56616D] flex items-center gap-1 group-hover:text-[#B88E2F] transition-colors">
                        <span>View Moving Info</span>
                        <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* HYDERABAD LOCALITIES TAB */}
          {activeTab === 'hyderabad' && (
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6 pb-4 border-b border-stone-100">
                <div>
                  <h3 className="text-xl font-bold text-[#14171C] font-serif">
                    Hyderabad Localities & Suburbs (17 Dedicated Areas)
                  </h3>
                  <p className="text-xs text-[#56616D] mt-0.5">
                    Same-day residential and commercial moving across Greater Hyderabad.
                  </p>
                </div>
                <Link
                  href="/packers-and-movers/hyderabad"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F2C59] hover:text-[#B88E2F] transition-colors"
                >
                  <span>Explore Hyderabad Hub Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {filteredHyderabad.length === 0 ? (
                <p className="text-sm text-stone-500 py-6 text-center">No localities matched &quot;{searchQuery}&quot;.</p>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {filteredHyderabad.map((loc) => (
                    <Link
                      key={loc.slug}
                      href={`/packers-and-movers/hyderabad/${loc.slug}`}
                      className="group flex flex-col justify-between p-3.5 rounded-xl border border-[#EAE5DC] hover:border-[#B88E2F] bg-stone-50/50 hover:bg-white hover:shadow-xs transition-all"
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <MapPin className="w-3 h-3 text-[#B88E2F] shrink-0" />
                        <span className="text-xs font-semibold text-[#14171C] group-hover:text-[#0F2C59] transition-colors">
                          {loc.name}
                        </span>
                      </div>
                      <span className="text-[11px] text-[#56616D] flex items-center gap-1 group-hover:text-[#B88E2F] transition-colors">
                        <span>Area Shifting</span>
                        <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ANDHRA PRADESH TAB */}
          {activeTab === 'andhra-pradesh' && (
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6 pb-4 border-b border-stone-100">
                <div>
                  <h3 className="text-xl font-bold text-[#14171C] font-serif">
                    Andhra Pradesh Service Areas & Cities
                  </h3>
                  <p className="text-xs text-[#56616D] mt-0.5">
                    Regular highway routes along NH65 and NH16 connecting coastal & Rayalaseema hubs.
                  </p>
                </div>
                <Link
                  href="/packers-and-movers/andhra-pradesh"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F2C59] hover:text-[#B88E2F] transition-colors"
                >
                  <span>View Andhra Pradesh Overview</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {filteredAP.length === 0 ? (
                <p className="text-sm text-stone-500 py-6 text-center">No locations matched &quot;{searchQuery}&quot;.</p>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {filteredAP.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/packers-and-movers/${city.slug}`}
                      className="group flex flex-col justify-between p-3.5 rounded-xl border border-[#EAE5DC] hover:border-[#B88E2F] bg-stone-50/50 hover:bg-white hover:shadow-xs transition-all"
                    >
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-xs font-semibold text-[#14171C] group-hover:text-[#0F2C59] transition-colors">
                          {city.name}
                        </span>
                        {city.isHub && (
                          <span className="text-[9px] font-bold uppercase tracking-wider bg-[#F9F5EC] text-[#B88E2F] px-1.5 py-0.5 rounded border border-[#E8D7B8]">
                            Key City
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] text-[#56616D] flex items-center gap-1 group-hover:text-[#B88E2F] transition-colors">
                        <span>City Moving Guide</span>
                        <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* KARNATAKA TAB */}
          {activeTab === 'karnataka' && (
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6 pb-4 border-b border-stone-100">
                <div>
                  <h3 className="text-xl font-bold text-[#14171C] font-serif">
                    Karnataka Service Areas & Cities
                  </h3>
                  <p className="text-xs text-[#56616D] mt-0.5">
                    High-demand interstate moving corridor along NH44 into Bengaluru, Mysuru, and Mangaluru.
                  </p>
                </div>
                <Link
                  href="/packers-and-movers/karnataka"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F2C59] hover:text-[#B88E2F] transition-colors"
                >
                  <span>View Karnataka State Overview</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {filteredKarnataka.length === 0 ? (
                <p className="text-sm text-stone-500 py-6 text-center">No locations matched &quot;{searchQuery}&quot;.</p>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {filteredKarnataka.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/packers-and-movers/${city.slug}`}
                      className="group flex flex-col justify-between p-3.5 rounded-xl border border-[#EAE5DC] hover:border-[#B88E2F] bg-stone-50/50 hover:bg-white hover:shadow-xs transition-all"
                    >
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-xs font-semibold text-[#14171C] group-hover:text-[#0F2C59] transition-colors">
                          {city.name}
                        </span>
                        {city.isHub && (
                          <span className="text-[9px] font-bold uppercase tracking-wider bg-[#F9F5EC] text-[#B88E2F] px-1.5 py-0.5 rounded border border-[#E8D7B8]">
                            Key City
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] text-[#56616D] flex items-center gap-1 group-hover:text-[#B88E2F] transition-colors">
                        <span>City Moving Guide</span>
                        <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
