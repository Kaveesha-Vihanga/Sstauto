import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Search, ArrowRight, Shield, Star, Clock, Award, ChevronRight, Quote, Phone, MessageCircle, Fuel, Gauge, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { vehicles, brands, formatPrice } from '../data/vehicles';
import { blogPosts } from '../data/blog';
import VehicleCard from '../components/VehicleCard';

const HERO_VIDEO = '/hero-video.mp4';
const SHOWROOM_IMG = 'https://images.unsplash.com/photo-1778942855146-3a7c73f261f2?w=1200&h=800&fit=crop&auto=format';

const testimonials = [
  { id: 1, name: 'Ruwan Jayasinghe', location: 'Colombo 07', rating: 5, vehicle: 'BMW 3 Series', text: 'SST Auto made buying my first luxury car completely stress-free. The team was knowledgeable, transparent about pricing, and handled all the paperwork. My 330i was exactly as described — immaculate.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop' },
  { id: 2, name: 'Dilhani Perera', location: 'Kandy', rating: 5, vehicle: 'Toyota Camry Hybrid', text: 'I was sceptical about buying a car online, but SST Auto\'s detailed photos and honest descriptions made me confident. Drove from Kandy and the car was even better than expected. Exceptional service!', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop' },
  { id: 3, name: 'Asanka Fernando', location: 'Galle', rating: 5, vehicle: 'Honda CR-V Hybrid', text: 'The finance team secured me a rate that three banks had refused to match. They went above and beyond. Traded in my old car at a fair price and drove away in my new CR-V the same day.', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop' },
];

const trustFeatures = [
  { icon: Shield, title: '100-Point Inspection', desc: 'Every vehicle undergoes a rigorous mechanical, cosmetic, and electronic inspection before listing.' },
  { icon: Award, title: 'Verified History', desc: 'Full service history verification, accident history check, and ownership document authenticity confirmed.' },
  { icon: Clock, title: 'Same-Day Finance', desc: 'Our finance team works with 12+ lenders to secure competitive rates. Approval in hours, not days.' },
  { icon: Star, title: 'After-Sale Support', desc: '30-day support warranty on all vehicles. Our team is available 7 days a week for any questions.' },
];

const stats = [
  { value: '1,200+', label: 'Vehicles Sold' },
  { value: '4.9/5', label: 'Customer Rating' },
  { value: '12+', label: 'Finance Partners' },
  { value: '7', label: 'Years in Business' },
];

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedFuel, setSelectedFuel] = useState('');
  const navigate = useNavigate();

  const featuredVehicles = vehicles.filter((v) => v.isFeatured).slice(0, 6);
  const latestVehicles = [...vehicles].sort((a, b) => b.year - a.year).slice(0, 4);
  const featuredPosts = blogPosts.filter((p) => p.featured).slice(0, 3);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery) params.set('q', searchQuery);
    if (selectedBrand) params.set('brand', selectedBrand);
    if (selectedFuel) params.set('fuel', selectedFuel);
    navigate(`/vehicles?${params.toString()}`);
  };

  return (
    <div className="bg-black">
      {/* ── HERO ── */}
      <section className="relative h-screen flex flex-col items-stretch justify-start overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <video
            src={HERO_VIDEO}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-transparent" />
        </div>

        {/* Spacer - Flexible space for video visibility */}
        <div className="flex-grow" />

        {/* Text Content - Bottom Left */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-0 flex-shrink-0"
        >
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[#e11d2e] text-xs inline-block mb-4"
            style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em' }}
          >
            Sri Lanka's Premium Auto Dealer
          </motion.span>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-white mb-4 leading-tight max-w-2xl"
            style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, letterSpacing: '-0.02em', fontSize: 'clamp(2.2rem, 7vw, 3.8rem)' }}
          >
            Drive Your
            <br />
            <span className="text-[#e11d2e]">Dream</span> Car
            <br />
            Today.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
            className="text-white/75 text-sm sm:text-base mb-8 leading-relaxed max-w-md"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Discover Sri Lanka's finest selection of premium pre-owned vehicles. Every car thoroughly inspected, transparently priced, and backed by our quality guarantee.
          </motion.p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -150px 0px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-20 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 border-t border-white/5 w-full"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
                className="text-center group cursor-default"
              >
                <p className="text-white group-hover:text-[#e11d2e] transition-colors duration-300" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: 'clamp(1.3rem, 4vw, 1.8rem)', letterSpacing: '-0.02em' }}>
                  {stat.value}
                </p>
                <p className="text-white/40 text-xs mt-2 group-hover:text-white/60 transition-colors duration-300" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Search Bar Section */}
        <div className="relative z-20 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
          <motion.form
            onSubmit={handleSearch}
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="bg-white rounded-2xl p-2.5 shadow-2xl max-w-4xl mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex-1 relative">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94a3b8]" />
                <input
                  type="text"
                  placeholder="Search by brand, model, or keyword…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 text-[#0a0a0a] placeholder:text-[#94a3b8] focus:outline-none text-sm rounded-xl transition-all"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="px-4 py-3 text-sm text-[#64748b] focus:outline-none rounded-xl bg-white border border-[#e2e8f0] transition-all"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <option value="">All Brands</option>
                {brands.map((b) => <option key={b} value={b}>{b}</option>)}
              </select>
              <select
                value={selectedFuel}
                onChange={(e) => setSelectedFuel(e.target.value)}
                className="px-4 py-3 text-sm text-[#64748b] focus:outline-none rounded-xl bg-white border border-[#e2e8f0] transition-all"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <option value="">All Fuel Types</option>
                {['Petrol', 'Diesel', 'Hybrid', 'Electric'].map((f) => <option key={f} value={f}>{f}</option>)}
              </select>
              <button
                type="submit"
                className="bg-[#e11d2e] hover:bg-[#c01727] text-white px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-red-500/40 shrink-0 group"
                style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
              >
                Search
              </button>
            </div>
          </motion.form>

          {/* Quick Brands */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap gap-2 mt-6 max-w-4xl mx-auto justify-center sm:justify-start"
          >
            {brands.map((brand, i) => (
              <motion.button
                key={brand}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.06, ease: "easeOut" }}
                onClick={() => navigate(`/vehicles?brand=${brand}`)}
                className="px-3.5 py-1.5 bg-white/15 hover:bg-white/25 border border-white/40 text-white/80 hover:text-white text-xs rounded-full transition-all duration-200 backdrop-blur-sm font-medium hover:shadow-lg"
                style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600 }}
              >
                {brand}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FEATURED VEHICLES ── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-px bg-[#e11d2e]" />
                <span className="text-[#e11d2e] text-xs" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Hand-Picked Selection
                </span>
              </div>
              <h2 className="text-[#0a0a0a]" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Featured Vehicles
              </h2>
            </div>
            <Link
              to="/vehicles"
              className="hidden sm:flex items-center gap-2 text-[#e11d2e] hover:text-[#c01727] text-sm font-semibold transition-colors"
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
            >
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredVehicles.map((v, i) => (
              <VehicleCard key={v.id} vehicle={v} index={i} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              to="/vehicles"
              className="inline-flex items-center gap-2 text-[#e11d2e] font-semibold"
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
            >
              View All Vehicles <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── LATEST ARRIVALS ── */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-px bg-[#e11d2e]" />
                <span className="text-[#e11d2e] text-xs" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Fresh Stock
                </span>
              </div>
              <h2 className="text-[#0a0a0a]" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Latest Arrivals
              </h2>
            </div>
            <Link
              to="/vehicles"
              className="hidden sm:flex items-center gap-2 text-[#e11d2e] font-semibold text-sm"
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
            >
              All New Arrivals <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {latestVehicles.map((vehicle, i) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link to={`/vehicles/${vehicle.id}`} className="group block">
                  <div className="bg-white rounded-2xl border border-black/5 overflow-hidden hover:shadow-lg transition-all duration-300 flex">
                    <div className="w-40 sm:w-52 shrink-0 bg-[#f8fafc] overflow-hidden">
                      <img
                        src={vehicle.images[0]}
                        alt={`${vehicle.brand} ${vehicle.model}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1 p-5">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="text-[#e11d2e] text-xs mb-0.5" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                            {vehicle.brand}
                          </p>
                          <h3 className="text-[#0a0a0a]" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1rem', letterSpacing: '-0.01em' }}>
                            {vehicle.model} {vehicle.variant}
                          </h3>
                        </div>
                        {vehicle.isNew && (
                          <span className="bg-[#e11d2e] text-white text-xs px-2 py-0.5 rounded-full shrink-0" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.65rem' }}>
                            NEW
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-3 mb-3">
                        <span className="flex items-center gap-1 text-xs text-[#64748b]">
                          <Calendar size={11} /> {vehicle.year}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-[#64748b]">
                          <Gauge size={11} /> {vehicle.mileage.toLocaleString()} km
                        </span>
                        <span className="flex items-center gap-1 text-xs text-[#64748b]">
                          <Fuel size={11} /> {vehicle.fuel}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-[#0a0a0a]" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1rem', letterSpacing: '-0.02em' }}>
                          {formatPrice(vehicle.price)}
                        </p>
                        <span className="text-[#e11d2e] text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>
                          View Details <ChevronRight size={14} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE SST AUTO ── */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-6 h-px bg-[#e11d2e]" />
              <span className="text-[#e11d2e] text-xs" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                The SST Difference
              </span>
              <div className="w-6 h-px bg-[#e11d2e]" />
            </div>
            <h2 className="text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Why Choose SST Auto?
            </h2>
            <p className="text-white/50 mt-3 max-w-xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              We've redefined the car buying experience in Sri Lanka. Premium vehicles, honest pricing, and exceptional service — every time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-white/10 hover:border-[#e11d2e]/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#e11d2e]/10 group-hover:bg-[#e11d2e] rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                  <feature.icon size={22} className="text-[#e11d2e] group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-white mb-2" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1rem' }}>
                  {feature.title}
                </h4>
                <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Showroom image */}
          <div className="mt-14 rounded-2xl overflow-hidden relative">
            <img src={SHOWROOM_IMG} alt="SST Auto showroom" className="w-full h-64 lg:h-80 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 to-transparent flex items-center">
              <div className="px-10">
                <h3 className="text-white mb-2" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.75rem', letterSpacing: '-0.02em' }}>
                  Visit Our Showroom
                </h3>
                <p className="text-white/60 mb-4 max-w-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                  123 Galle Road, Colombo 03. Open Mon–Sat 9am–7pm, Sun 10am–5pm.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#e11d2e] hover:bg-[#c01727] text-white px-5 py-2.5 rounded-lg text-sm transition-all"
                  style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
                >
                  Get Directions <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-6 h-px bg-[#e11d2e]" />
              <span className="text-[#e11d2e] text-xs" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Customer Stories
              </span>
              <div className="w-6 h-px bg-[#e11d2e]" />
            </div>
            <h2 className="text-[#0a0a0a]" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Trusted by Thousands
            </h2>
            <div className="flex items-center justify-center gap-1 mt-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
              ))}
              <span className="text-[#64748b] text-sm ml-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                4.9 / 5 from 847 reviews
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#f8fafc] rounded-2xl p-7 border border-[#f1f5f9] relative"
              >
                <Quote size={24} className="text-[#e11d2e] mb-4 opacity-50" />
                <p className="text-[#0a0a0a] text-sm leading-relaxed mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="text-[#0a0a0a] text-sm" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>
                      {t.name}
                    </p>
                    <p className="text-[#64748b] text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {t.location} · {t.vehicle}
                    </p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={12} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 border border-[#e2e8f0] hover:border-[#e11d2e] text-[#0a0a0a] hover:text-[#e11d2e] px-6 py-3 rounded-xl text-sm transition-all duration-200"
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
            >
              Read All Reviews <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SELL YOUR CAR CTA ── */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-px bg-[#e11d2e]" />
                <span className="text-[#e11d2e] text-xs" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Sell Your Car
                </span>
              </div>
              <h2 className="text-[#0a0a0a] mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Get the Best Price<br />for Your Car
              </h2>
              <p className="text-[#64748b] leading-relaxed mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                Skip the hassle of private sales. SST Auto offers instant valuations, same-day payment, and we handle all the paperwork. Trade in and upgrade, or simply sell — the choice is yours.
              </p>
              <ul className="space-y-3 mb-8">
                {['Free instant valuation', 'Same-day payment guarantee', 'We handle all documentation', 'Fair, transparent pricing — no surprises'].map((point) => (
                  <li key={point} className="flex items-center gap-3 text-[#0a0a0a] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <div className="w-5 h-5 bg-[#e11d2e] rounded-full flex items-center justify-center shrink-0">
                      <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
                        <path d="M1 3.5L3.5 6L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                to="/sell"
                className="inline-flex items-center gap-2 bg-[#0a0a0a] hover:bg-[#1a1a1a] text-white px-7 py-3.5 rounded-xl text-sm transition-all duration-200 hover:shadow-lg"
                style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
              >
                Get Your Free Valuation <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl border border-[#e2e8f0] p-8 shadow-sm"
            >
              <h3 className="text-[#0a0a0a] mb-1" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.25rem' }}>
                Quick Valuation Request
              </h3>
              <p className="text-[#64748b] text-sm mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                Get a valuation within 2 hours on any weekday.
              </p>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-[#64748b] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Brand</label>
                    <select className="w-full px-3 py-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm text-[#0a0a0a] focus:outline-none focus:border-[#e11d2e]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <option value="">Select</option>
                      {brands.map((b) => <option key={b}>{b}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-[#64748b] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Year</label>
                    <select className="w-full px-3 py-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm text-[#0a0a0a] focus:outline-none focus:border-[#e11d2e]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <option value="">Select</option>
                      {Array.from({ length: 15 }, (_, i) => 2024 - i).map((y) => <option key={y}>{y}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-[#64748b] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Model</label>
                  <input type="text" placeholder="e.g. Camry, Civic, 3 Series" className="w-full px-3 py-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm text-[#0a0a0a] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#e11d2e]" style={{ fontFamily: 'Inter, sans-serif' }} />
                </div>
                <div>
                  <label className="block text-xs text-[#64748b] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Mileage (km)</label>
                  <input type="number" placeholder="e.g. 45000" className="w-full px-3 py-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm text-[#0a0a0a] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#e11d2e]" style={{ fontFamily: 'Inter, sans-serif' }} />
                </div>
                <div>
                  <label className="block text-xs text-[#64748b] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Your Phone</label>
                  <input type="tel" placeholder="+94 77 XXX XXXX" className="w-full px-3 py-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm text-[#0a0a0a] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#e11d2e]" style={{ fontFamily: 'Inter, sans-serif' }} />
                </div>
                <Link
                  to="/sell"
                  className="block w-full text-center bg-[#e11d2e] hover:bg-[#c01727] text-white py-3 rounded-xl text-sm transition-all duration-200"
                  style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
                >
                  Get My Free Valuation
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── VEHICLE REQUEST CTA ── */}
      <section className="py-16 bg-[#e11d2e]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-white mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Can't Find What You're Looking For?
              </h2>
              <p className="text-white/75" style={{ fontFamily: 'Inter, sans-serif' }}>
                Tell us your dream car and we'll source it for you. We have access to vehicles across Sri Lanka and beyond.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Link
                to="/request"
                className="bg-white text-[#e11d2e] hover:bg-[#f8fafc] px-7 py-3.5 rounded-xl text-sm transition-all duration-200 shadow-lg"
                style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
              >
                Request a Vehicle
              </Link>
              <a
                href="https://wa.me/94771234567?text=Hi%2C%20I'm%20looking%20for%20a%20specific%20vehicle"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#0a0a0a] hover:bg-[#1a1a1a] text-white px-7 py-3.5 rounded-xl text-sm transition-all duration-200"
                style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── BLOG PREVIEW ── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-px bg-[#e11d2e]" />
                <span className="text-[#e11d2e] text-xs" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Expert Insights
                </span>
              </div>
              <h2 className="text-[#0a0a0a]" style={{ fontFamily: 'Outfit, sans-serif' }}>
                From the Blog
              </h2>
            </div>
            <Link
              to="/blog"
              className="hidden sm:flex items-center gap-2 text-[#e11d2e] text-sm"
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
            >
              All Articles <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featuredPosts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link to={`/blog/${post.slug}`} className="group block h-full">
                  <div className="rounded-2xl overflow-hidden border border-[#f1f5f9] hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    <div className="overflow-hidden aspect-video bg-[#f8fafc]">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs text-[#e11d2e] bg-[#fef2f2] px-2.5 py-1 rounded-full" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>
                          {post.category}
                        </span>
                        <span className="text-xs text-[#94a3b8]" style={{ fontFamily: 'Inter, sans-serif' }}>
                          {post.readTime} min read
                        </span>
                      </div>
                      <h3 className="text-[#0a0a0a] mb-3 flex-1" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1.05rem', lineHeight: 1.4 }}>
                        {post.title}
                      </h3>
                      <p className="text-[#64748b] text-sm line-clamp-2 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-[#f1f5f9]">
                        <div className="flex items-center gap-2">
                          <img src={post.author.avatar} alt={post.author.name} className="w-7 h-7 rounded-full object-cover" />
                          <span className="text-xs text-[#64748b]" style={{ fontFamily: 'Inter, sans-serif' }}>{post.author.name}</span>
                        </div>
                        <span className="text-[#e11d2e] text-xs flex items-center gap-1 group-hover:gap-2 transition-all" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>
                          Read <ChevronRight size={13} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-px bg-[#e11d2e]" />
                <span className="text-[#e11d2e] text-xs" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Get in Touch
                </span>
              </div>
              <h2 className="text-white mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Questions? We're<br />Here to Help.
              </h2>
              <p className="text-white/50 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                Our team of automotive experts is available 7 days a week. Reach us via phone, WhatsApp, or visit our Colombo showroom.
              </p>
              <div className="space-y-4">
                <a href="tel:+94112345678" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white/10 group-hover:bg-[#e11d2e] rounded-xl flex items-center justify-center transition-colors">
                    <Phone size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>Call us directly</p>
                    <p className="text-white text-sm" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>+94 11 234 5678</p>
                  </div>
                </a>
                <a
                  href="https://wa.me/94771234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-white/10 group-hover:bg-[#25d366] rounded-xl flex items-center justify-center transition-colors">
                    <MessageCircle size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>Message us on</p>
                    <p className="text-white text-sm" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>WhatsApp: +94 77 123 4567</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick contact form */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-white mb-6" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1.25rem' }}>
                Send Us a Message
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-[#e11d2e] text-sm"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-[#e11d2e] text-sm"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    />
                  </div>
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-[#e11d2e] text-sm"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
                <textarea
                  placeholder="How can we help you?"
                  rows={3}
                  className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-[#e11d2e] text-sm resize-none"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
                <button
                  className="w-full bg-[#e11d2e] hover:bg-[#c01727] text-white py-3.5 rounded-xl text-sm transition-all duration-200"
                  style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
