'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
}

export default function FAQAccordion({
  items,
  title = 'Frequently Asked Questions',
  subtitle = 'Find clear, practical answers about our packing, moving, pricing, and scheduling process.',
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!items || items.length === 0) return null;

  return (
    <section className="py-14 sm:py-20 bg-white border-y border-[#EAE5DC]" aria-label="FAQ Section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#B88E2F] bg-[#F9F5EC] border border-[#E8D7B8] mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Helpful Answers</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#14171C] font-serif tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 text-sm text-[#56616D] max-w-xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        <div className="space-y-3">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-[#EAE5DC] rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left bg-stone-50/40 hover:bg-stone-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#B88E2F]/20"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-[#14171C] pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-stone-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#B88E2F]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-4 sm:p-5 pt-0 bg-stone-50/40 text-xs sm:text-sm text-[#56616D] leading-relaxed border-t border-stone-100 animate-in fade-in duration-200">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
