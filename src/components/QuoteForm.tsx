'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, MessageSquare, Phone, Calendar, MapPin, User, Mail, Box } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

interface QuoteFormProps {
  initialFrom?: string;
  initialTo?: string;
  initialMoveType?: string;
  compact?: boolean;
}

export default function QuoteForm({
  initialFrom = '',
  initialTo = '',
  initialMoveType = 'Household Shifting (1-2 BHK)',
  compact = false,
}: QuoteFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    movingFrom: initialFrom,
    movingTo: initialTo,
    movingDate: '',
    moveType: initialMoveType,
    additionalRequirements: '',
    honeypot: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    enquiryId: string;
    message: string;
    directWhatsAppUrl: string;
  } | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const moveTypeOptions = [
    'Household Shifting (1-2 BHK)',
    'Household Shifting (3+ BHK / Villa)',
    'Local Shifting (Within Hyderabad)',
    'Office / Commercial Relocation',
    'Inter-State Relocation',
    'Vehicle Transportation (Bike / Car)',
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter your full name.';
    }

    const cleanPhone = formData.phoneNumber.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phoneNumber = 'Please enter a valid 10-digit mobile number.';
    }

    if (!formData.movingFrom.trim()) {
      errs.movingFrom = 'Please specify your pickup location or city.';
    }

    if (!formData.movingTo.trim()) {
      errs.movingTo = 'Please specify your destination location or city.';
    }

    if (!formData.movingDate) {
      errs.movingDate = 'Please select a preferred moving date.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validate()) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmittedData({
          enquiryId: result.enquiryId,
          message: result.message,
          directWhatsAppUrl: result.directWhatsAppUrl,
        });
      } else {
        setServerError(result.error || 'Failed to submit enquiry. Please call us directly.');
      }
    } catch {
      setServerError('Network error. Please call our team at +91 98481 61321 or message on WhatsApp.');
    } finally {
      setIsLoading(false);
    }
  };

  // Defer today's date in YYYY-MM-DD format to useEffect for Next.js prerender safety
  const [todayDate, setTodayDate] = useState<string>('');
  React.useEffect(() => {
    setTodayDate(new Date().toISOString().split('T')[0]);
  }, []);

  if (submittedData) {
    return (
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8D7B8] shadow-md text-center animate-in fade-in duration-300">
        <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-[#14171C] font-serif">
          Enquiry Received Successfully!
        </h3>
        <p className="text-xs font-mono uppercase tracking-wider text-[#B88E2F] mt-1">
          Reference ID: {submittedData.enquiryId}
        </p>
        <p className="text-sm text-[#56616D] mt-3 max-w-md mx-auto leading-relaxed">
          {submittedData.message}
        </p>

        <div className="mt-6 pt-6 border-t border-stone-100 flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href={submittedData.directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-xs transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Send Details on WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={() => {
              setSubmittedData(null);
              setFormData({
                fullName: '',
                phoneNumber: '',
                email: '',
                movingFrom: initialFrom,
                movingTo: initialTo,
                movingDate: '',
                moveType: initialMoveType,
                additionalRequirements: '',
                honeypot: '',
              });
            }}
            className="w-full sm:w-auto px-5 py-3 text-sm font-medium text-[#14171C] hover:bg-stone-50 border border-[#EAE5DC] rounded-xl transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white rounded-2xl border border-[#EAE5DC] shadow-sm hover:shadow-md transition-shadow ${
        compact ? 'p-5 sm:p-6' : 'p-6 sm:p-8'
      }`}
      noValidate
    >
      {/* Honeypot field for bot suppression */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="mb-6">
        <h3 className="text-lg sm:text-xl font-bold text-[#14171C] font-serif tracking-tight">
          Get a Free Moving Estimate
        </h3>
        <p className="text-xs text-[#56616D] mt-1">
          Share your relocation details. We review and call you with an honest quote.
        </p>
      </div>

      {serverError && (
        <div className="mb-4 p-3.5 bg-red-50 border border-red-200 rounded-xl flex items-start gap-2.5 text-xs text-red-700">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
          <span>{serverError}</span>
        </div>
      )}

      <div className="space-y-4">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-xs font-semibold text-[#14171C] uppercase tracking-wider mb-1.5">
            Your Full Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="fullName"
              type="text"
              placeholder="e.g. Ramesh Kumar"
              value={formData.fullName}
              onChange={(e) => {
                setFormData({ ...formData, fullName: e.target.value });
                if (errors.fullName) setErrors({ ...errors, fullName: '' });
              }}
              className={`w-full pl-10 pr-4 py-2.5 text-sm bg-stone-50/50 border rounded-xl focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                errors.fullName
                  ? 'border-red-400 focus:ring-red-200'
                  : 'border-[#EAE5DC] focus:border-[#B88E2F] focus:ring-[#B88E2F]/20'
              }`}
              required
            />
          </div>
          {errors.fullName && <p className="text-[11px] text-red-600 mt-1">{errors.fullName}</p>}
        </div>

        {/* Contact Numbers Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phoneNumber" className="block text-xs font-semibold text-[#14171C] uppercase tracking-wider mb-1.5">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="phoneNumber"
                type="tel"
                placeholder="10-digit number"
                value={formData.phoneNumber}
                onChange={(e) => {
                  setFormData({ ...formData, phoneNumber: e.target.value });
                  if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: '' });
                }}
                className={`w-full pl-10 pr-4 py-2.5 text-sm bg-stone-50/50 border rounded-xl focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                  errors.phoneNumber
                    ? 'border-red-400 focus:ring-red-200'
                    : 'border-[#EAE5DC] focus:border-[#B88E2F] focus:ring-[#B88E2F]/20'
                }`}
                required
              />
            </div>
            {errors.phoneNumber && <p className="text-[11px] text-red-600 mt-1">{errors.phoneNumber}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-[#14171C] uppercase tracking-wider mb-1.5">
              Email Address <span className="text-stone-400 font-normal">(Optional)</span>
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-stone-50/50 border border-[#EAE5DC] rounded-xl focus:bg-white focus:border-[#B88E2F] focus:outline-none focus:ring-2 focus:ring-[#B88E2F]/20 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Pickup & Destination */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="movingFrom" className="block text-xs font-semibold text-[#14171C] uppercase tracking-wider mb-1.5">
              Moving From <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="movingFrom"
                type="text"
                placeholder="e.g. Gachibowli, Hyderabad"
                value={formData.movingFrom}
                onChange={(e) => {
                  setFormData({ ...formData, movingFrom: e.target.value });
                  if (errors.movingFrom) setErrors({ ...errors, movingFrom: '' });
                }}
                className={`w-full pl-10 pr-4 py-2.5 text-sm bg-stone-50/50 border rounded-xl focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                  errors.movingFrom
                    ? 'border-red-400 focus:ring-red-200'
                    : 'border-[#EAE5DC] focus:border-[#B88E2F] focus:ring-[#B88E2F]/20'
                }`}
                required
              />
            </div>
            {errors.movingFrom && <p className="text-[11px] text-red-600 mt-1">{errors.movingFrom}</p>}
          </div>

          <div>
            <label htmlFor="movingTo" className="block text-xs font-semibold text-[#14171C] uppercase tracking-wider mb-1.5">
              Moving To <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="movingTo"
                type="text"
                placeholder="e.g. Bengaluru / Kukatpally"
                value={formData.movingTo}
                onChange={(e) => {
                  setFormData({ ...formData, movingTo: e.target.value });
                  if (errors.movingTo) setErrors({ ...errors, movingTo: '' });
                }}
                className={`w-full pl-10 pr-4 py-2.5 text-sm bg-stone-50/50 border rounded-xl focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                  errors.movingTo
                    ? 'border-red-400 focus:ring-red-200'
                    : 'border-[#EAE5DC] focus:border-[#B88E2F] focus:ring-[#B88E2F]/20'
                }`}
                required
              />
            </div>
            {errors.movingTo && <p className="text-[11px] text-red-600 mt-1">{errors.movingTo}</p>}
          </div>
        </div>

        {/* Date and Type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="movingDate" className="block text-xs font-semibold text-[#14171C] uppercase tracking-wider mb-1.5">
              Moving Date <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Calendar className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="movingDate"
                type="date"
                min={todayDate}
                value={formData.movingDate}
                onChange={(e) => {
                  setFormData({ ...formData, movingDate: e.target.value });
                  if (errors.movingDate) setErrors({ ...errors, movingDate: '' });
                }}
                className={`w-full pl-10 pr-4 py-2.5 text-sm bg-stone-50/50 border rounded-xl focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                  errors.movingDate
                    ? 'border-red-400 focus:ring-red-200'
                    : 'border-[#EAE5DC] focus:border-[#B88E2F] focus:ring-[#B88E2F]/20'
                }`}
                required
              />
            </div>
            {errors.movingDate && <p className="text-[11px] text-red-600 mt-1">{errors.movingDate}</p>}
          </div>

          <div>
            <label htmlFor="moveType" className="block text-xs font-semibold text-[#14171C] uppercase tracking-wider mb-1.5">
              Type of Move <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Box className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <select
                id="moveType"
                value={formData.moveType}
                onChange={(e) => setFormData({ ...formData, moveType: e.target.value })}
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-stone-50/50 border border-[#EAE5DC] rounded-xl focus:bg-white focus:border-[#B88E2F] focus:outline-none focus:ring-2 focus:ring-[#B88E2F]/20 transition-all appearance-none cursor-pointer"
              >
                {moveTypeOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Additional Requirements */}
        <div>
          <label htmlFor="additionalRequirements" className="block text-xs font-semibold text-[#14171C] uppercase tracking-wider mb-1.5">
            Special Notes <span className="text-stone-400 font-normal">(Floor level, lift availability, fragile items)</span>
          </label>
          <textarea
            id="additionalRequirements"
            rows={2}
            placeholder="e.g. 4th floor with lift, includes a 2-wheeler and double-door fridge"
            value={formData.additionalRequirements}
            onChange={(e) => setFormData({ ...formData, additionalRequirements: e.target.value })}
            className="w-full px-4 py-2 text-sm bg-stone-50/50 border border-[#EAE5DC] rounded-xl focus:bg-white focus:border-[#B88E2F] focus:outline-none focus:ring-2 focus:ring-[#B88E2F]/20 transition-all resize-none"
          />
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 py-3 px-6 text-sm font-semibold text-white bg-[#0F2C59] hover:bg-[#0A1C38] active:scale-[0.99] rounded-xl shadow-xs transition-all disabled:opacity-60 cursor-pointer"
          >
            {isLoading ? (
              <span className="inline-flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                <span>Calculating Estimate...</span>
              </span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Request Free Quote</span>
              </>
            )}
          </button>
        </div>

        <div className="text-center">
          <p className="text-[11px] text-[#56616D]">
            Prefer immediate consultation? Call{' '}
            <a href={`tel:${siteConfig.phone}`} className="font-semibold text-[#0F2C59] hover:underline">
              {siteConfig.displayPhone}
            </a>
          </p>
        </div>
      </div>
    </form>
  );
}
