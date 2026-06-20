import { useState } from 'react';
import { useParams, Link } from 'react-router';
import { ChevronLeft, ChevronRight, MessageCircle, Phone, Heart, Share2, Shield, Clock, Award, Fuel, Gauge, Calendar, Zap, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { vehicles, formatPrice, formatMileage } from '../data/vehicles';
import VehicleCard from '../components/VehicleCard';

export default function VehicleDetailPage() {
  const { id } = useParams();
  const vehicle = vehicles.find((v) => v.id === id);
  const [imgIndex, setImgIndex] = useState(0);
  const [saved, setSaved] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'specs' | 'features'>('overview');

  // Finance estimate
  const [deposit, setDeposit] = useState(25);
  const [term, setTerm] = useState(48);
  const rate = 0.17;
  const financeAmount = vehicle ? vehicle.price * (1 - deposit / 100) : 0;
  const monthlyRate = rate / 12;
  const monthly = financeAmount > 0
    ? (financeAmount * monthlyRate * Math.pow(1 + monthlyRate, term)) / (Math.pow(1 + monthlyRate, term) - 1)
    : 0;

  if (!vehicle) {
    return (
      <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="text-[#0a0a0a] mb-3" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>
            Vehicle Not Found
          </h2>
          <p className="text-[#64748b] mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
            This vehicle may have been sold or the link is incorrect.
          </p>
          <Link
            to="/vehicles"
            className="bg-[#e11d2e] text-white px-6 py-3 rounded-xl text-sm"
            style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
          >
            Browse All Vehicles
          </Link>
        </div>
      </div>
    );
  }

  const related = vehicles.filter((v) => v.id !== vehicle.id && (v.brand === vehicle.brand || v.bodyType === vehicle.bodyType)).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#f8fafc] pt-20">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#f1f5f9]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
            <Link to="/" className="text-[#64748b] hover:text-[#e11d2e]">Home</Link>
            <span className="text-[#94a3b8]">/</span>
            <Link to="/vehicles" className="text-[#64748b] hover:text-[#e11d2e]">Vehicles</Link>
            <span className="text-[#94a3b8]">/</span>
            <span className="text-[#0a0a0a]">{vehicle.brand} {vehicle.model}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Gallery + Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Gallery */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#e2e8f0]">
              {/* Main image */}
              <div className="relative overflow-hidden" style={{ background: '#f8fafc', aspectRatio: '16/9' }}>
                <motion.img
                  key={imgIndex}
                  src={vehicle.images[imgIndex]}
                  alt={`${vehicle.brand} ${vehicle.model} - view ${imgIndex + 1}`}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                {/* Shadow under vehicle */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/20 blur-xl rounded-full" />
                {/* Nav arrows */}
                {vehicle.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setImgIndex((i) => (i - 1 + vehicle.images.length) % vehicle.images.length)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={() => setImgIndex((i) => (i + 1) % vehicle.images.length)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </>
                )}
                {/* Counter */}
                <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2.5 py-1 rounded-full backdrop-blur-sm" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>
                  {imgIndex + 1} / {vehicle.images.length}
                </div>
              </div>
              {/* Thumbnails */}
              <div className="flex gap-2 p-4 overflow-x-auto">
                {vehicle.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIndex(i)}
                    className={`shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${i === imgIndex ? 'border-[#e11d2e]' : 'border-transparent opacity-60 hover:opacity-100'}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Title + Badges */}
            <div className="bg-white rounded-2xl border border-[#e2e8f0] p-4 sm:p-6">
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <div>
                  <p className="text-[#e11d2e] text-xs mb-0.5 sm:mb-1" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    {vehicle.brand}
                  </p>
                  <h1 className="text-[#0a0a0a]" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 'clamp(1.25rem, 4vw, 2.25rem)', letterSpacing: '-0.03em' }}>
                    {vehicle.year} {vehicle.model}
                  </h1>
                  <p className="text-[#64748b] text-sm sm:text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {vehicle.variant}
                  </p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button
                    onClick={() => setSaved(!saved)}
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl border flex items-center justify-center transition-all ${saved ? 'bg-[#e11d2e] border-[#e11d2e] text-white' : 'border-[#e2e8f0] text-[#64748b] hover:border-[#e11d2e] hover:text-[#e11d2e]'}`}
                  >
                    <Heart size={16} fill={saved ? 'currentColor' : 'none'} />
                  </button>
                  <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-[#e2e8f0] flex items-center justify-center text-[#64748b] hover:border-[#0a0a0a] transition-all">
                    <Share2 size={16} />
                  </button>
                </div>
              </div>

              {/* Key specs strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                {[
                  { icon: Calendar, label: 'Year', value: vehicle.year.toString() },
                  { icon: Gauge, label: 'Mileage', value: formatMileage(vehicle.mileage) },
                  { icon: vehicle.fuel === 'Electric' ? Zap : Fuel, label: 'Fuel', value: vehicle.fuel },
                  { icon: Shield, label: 'Transmission', value: vehicle.transmission },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="bg-[#f8fafc] rounded-xl p-2.5 sm:p-3 text-center">
                    <Icon size={14} className="text-[#e11d2e] mx-auto mb-0.5 sm:mb-1" />
                    <p className="text-xs text-[#64748b] mb-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>{label}</p>
                    <p className="text-[#0a0a0a] text-xs sm:text-sm" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tabs: Overview / Specs / Features */}
            <div className="bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden">
              <div className="flex border-b border-[#f1f5f9]">
                {(['overview', 'specs', 'features'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-4 text-sm capitalize transition-colors ${activeTab === tab ? 'text-[#e11d2e] border-b-2 border-[#e11d2e]' : 'text-[#64748b] hover:text-[#0a0a0a]'}`}
                    style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="p-4 sm:p-6">
                {activeTab === 'overview' && (
                  <div>
                    <p className="text-[#374151] leading-relaxed text-sm sm:text-base" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.8 }}>
                      {vehicle.description}
                    </p>
                    <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {[
                        { label: 'Colour', value: vehicle.color },
                        { label: 'Body Type', value: vehicle.bodyType },
                        { label: 'Doors', value: vehicle.doors ? `${vehicle.doors} Doors` : 'N/A' },
                        { label: 'Seats', value: vehicle.seats ? `${vehicle.seats} Seats` : 'N/A' },
                        { label: 'Engine CC', value: vehicle.engineCC === 0 ? 'Electric' : `${vehicle.engineCC?.toLocaleString()} cc` },
                      ].map(({ label, value }) => (
                        <div key={label} className="bg-[#f8fafc] rounded-xl p-3">
                          <p className="text-xs text-[#94a3b8] mb-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>{label}</p>
                          <p className="text-[#0a0a0a] text-sm" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {activeTab === 'specs' && (
                  <div className="space-y-3">
                    {Object.entries(vehicle.specs).map(([key, val]) => (
                      <div key={key} className="flex items-center justify-between py-2.5 border-b border-[#f1f5f9] last:border-0">
                        <span className="text-sm text-[#64748b]" style={{ fontFamily: 'Inter, sans-serif' }}>{key}</span>
                        <span className="text-sm text-[#0a0a0a]" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>{val}</span>
                      </div>
                    ))}
                  </div>
                )}
                {activeTab === 'features' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {vehicle.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-[#f0fdf4] border border-[#86efac] rounded-full flex items-center justify-center shrink-0">
                          <Check size={11} className="text-[#16a34a]" />
                        </div>
                        <span className="text-sm text-[#374151]" style={{ fontFamily: 'Inter, sans-serif' }}>{feature}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right: Price + Contact + Finance */}
          <div className="space-y-5">
            {/* Price card */}
            <div className="bg-[#0a0a0a] rounded-2xl p-4 sm:p-6 text-white lg:sticky lg:top-24">
              <p className="text-white/50 text-xs sm:text-sm mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>Asking Price</p>
              <p className="mb-1" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 'clamp(1.5rem, 5vw, 2rem)', letterSpacing: '-0.03em' }}>
                {formatPrice(vehicle.price)}
              </p>
              {vehicle.badge && (
                <span className="inline-block bg-[#e11d2e] text-white text-xs px-2.5 py-1 rounded-full mb-3 sm:mb-4" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>
                  {vehicle.badge}
                </span>
              )}

              <div className="space-y-2 sm:space-y-3 mt-3 sm:mt-4">
                <a
                  href={`https://wa.me/94771234567?text=Hi%20SST%20Auto%2C%20I'm%20interested%20in%20the%20${vehicle.year}%20${vehicle.brand}%20${vehicle.model}%20${vehicle.variant}%20(ID%3A${vehicle.id}).%20Please%20send%20me%20more%20information.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#25d366] hover:bg-[#1ea855] text-white py-3 sm:py-3.5 rounded-xl text-sm transition-all duration-200"
                  style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
                >
                  <MessageCircle size={16} />
                  Inquire on WhatsApp
                </a>
                <a
                  href="tel:+94112345678"
                  className="flex items-center justify-center gap-2 w-full bg-white/10 hover:bg-white/20 text-white py-3 sm:py-3.5 rounded-xl text-sm transition-all duration-200"
                  style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
                >
                  <Phone size={16} />
                  Call +94 11 234 5678
                </a>
              </div>

              <div className="mt-3 sm:mt-4 p-3 bg-white/5 rounded-xl border border-white/10">
                <div className="flex gap-2 text-xs text-white/60" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <Clock size={13} className="shrink-0 mt-0.5" />
                  Typically responds within 15 minutes on WhatsApp
                </div>
              </div>

              {/* Trust badges */}
              <div className="mt-3 sm:mt-4 space-y-2">
                {[
                  { icon: Shield, text: '100-Point Inspection Certified' },
                  { icon: Award, text: 'Verified Ownership Documents' },
                  { icon: Clock, text: 'Same-day Finance Available' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-xs text-white/50" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <Icon size={12} className="text-[#e11d2e] shrink-0" />
                    {text}
                  </div>
                ))}
              </div>
            </div>

            {/* Finance Estimator */}
            <div className="bg-white rounded-2xl border border-[#e2e8f0] p-4 sm:p-6">
              <h3 className="text-[#0a0a0a] mb-3 sm:mb-4" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: 'clamp(1rem, 2.5vw, 1.1rem)' }}>
                Finance Estimate
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-xs text-[#64748b]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Deposit</label>
                    <span className="text-xs text-[#0a0a0a]" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>{deposit}% — {formatPrice(vehicle.price * deposit / 100)}</span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={50}
                    value={deposit}
                    onChange={(e) => setDeposit(Number(e.target.value))}
                    className="w-full accent-[#e11d2e]"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-xs text-[#64748b]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Loan Term</label>
                    <span className="text-xs text-[#0a0a0a]" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>{term} months</span>
                  </div>
                  <input
                    type="range"
                    min={12}
                    max={60}
                    step={12}
                    value={term}
                    onChange={(e) => setTerm(Number(e.target.value))}
                    className="w-full accent-[#e11d2e]"
                  />
                </div>
                <div className="bg-[#f8fafc] rounded-xl p-4 text-center">
                  <p className="text-xs text-[#64748b] mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>Estimated Monthly Payment</p>
                  <p className="text-[#0a0a0a]" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '1.5rem', letterSpacing: '-0.02em' }}>
                    LKR {Math.round(monthly).toLocaleString()}
                  </p>
                  <p className="text-xs text-[#94a3b8] mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Based on 17% p.a. — indicative only
                  </p>
                </div>
                <Link
                  to="/finance"
                  className="block w-full text-center border border-[#e2e8f0] hover:border-[#e11d2e] text-[#0a0a0a] hover:text-[#e11d2e] py-3 rounded-xl text-sm transition-all duration-200"
                  style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
                >
                  Full Finance Calculator →
                </Link>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="bg-white rounded-2xl border border-[#e2e8f0] p-4 sm:p-6">
              <h3 className="text-[#0a0a0a] mb-1" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: 'clamp(1rem, 2.5vw, 1.1rem)' }}>
                Send an Inquiry
              </h3>
              <p className="text-[#64748b] text-xs mb-3 sm:mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                We'll respond within 2 hours on weekdays.
              </p>
              <div className="space-y-2.5 sm:space-y-3">
                <input type="text" placeholder="Your Name" className="w-full px-3 py-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm text-[#0a0a0a] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#e11d2e]" style={{ fontFamily: 'Inter, sans-serif' }} />
                <input type="tel" placeholder="Phone Number" className="w-full px-3 py-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm text-[#0a0a0a] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#e11d2e]" style={{ fontFamily: 'Inter, sans-serif' }} />
                <textarea
                  placeholder={`Hi, I'm interested in the ${vehicle.year} ${vehicle.brand} ${vehicle.model}. Can you provide more information?`}
                  rows={3}
                  className="w-full px-3 py-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm text-[#0a0a0a] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#e11d2e] resize-none"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
                <button
                  className="w-full bg-[#e11d2e] hover:bg-[#c01727] text-white py-3 rounded-xl text-sm transition-all duration-200"
                  style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
                >
                  Send Inquiry
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Vehicles */}
        {related.length > 0 && (
          <section className="mt-16">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-px bg-[#e11d2e]" />
              <h2 className="text-[#0a0a0a]" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.5rem' }}>
                You May Also Like
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((v, i) => (
                <VehicleCard key={v.id} vehicle={v} index={i} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
