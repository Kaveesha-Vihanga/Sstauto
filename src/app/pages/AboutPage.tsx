import { Shield, Award, Users, TrendingUp, Heart, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';

const team = [
  { name: 'Sanath Thilakaratna', role: 'Founder & CEO', bio: '20+ years in the automotive industry. Founded SST Auto with a vision to transform car buying in Sri Lanka.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop' },
  { name: 'Dinesh Wickramasinghe', role: 'Head of Sales', bio: 'Former BMW brand specialist with 12 years of luxury vehicle expertise and an unmatched knowledge of the local market.', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop' },
  { name: 'Priya Jayawardena', role: 'Finance Manager', bio: 'Certified financial advisor with deep expertise in vehicle financing, working with 12+ banking partners across Sri Lanka.', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop' },
  { name: 'Nimal Fernando', role: 'Head of Inspections', bio: 'Qualified automotive engineer with 15+ years of vehicle inspection expertise. Architect of our 100-point inspection system.', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop' },
];

const milestones = [
  { year: '2017', title: 'SST Auto Founded', desc: 'Opened our first showroom at Galle Road, Colombo 03 with a curated selection of 12 premium vehicles.' },
  { year: '2019', title: '500 Vehicles Sold', desc: 'Reached a major milestone of 500 satisfied customers and expanded our showroom to accommodate 40+ vehicles.' },
  { year: '2021', title: 'Digital Transformation', desc: 'Launched our online platform enabling customers across Sri Lanka to browse and inquire digitally.' },
  { year: '2022', title: 'Finance Division', desc: 'Established our in-house finance division with 12 banking partnerships, offering competitive rates.' },
  { year: '2023', title: '1,000+ Customers', desc: 'Crossed 1,000 happy customers with a 4.9/5 rating across all review platforms.' },
  { year: '2024', title: 'EV Specialist', desc: 'Became Sri Lanka\'s leading dealer of premium electric and hybrid vehicles.' },
];

const values = [
  { icon: Shield, title: 'Transparency', desc: 'Every price, condition detail, and vehicle history is disclosed completely. No hidden surprises, ever.' },
  { icon: Heart, title: 'Customer First', desc: 'Every decision starts with "what\'s best for the customer." We\'ve turned away sales that weren\'t in customers\' best interests.' },
  { icon: Award, title: 'Excellence', desc: 'We don\'t list anything we wouldn\'t be proud to own ourselves. Every vehicle meets our premium quality standard.' },
  { icon: Globe, title: 'Community', desc: 'SST Auto is proud to be a Sri Lankan business. We invest in our team, our customers, and our local community.' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-[#0a0a0a] pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#e11d2e] rounded-full blur-3xl" />
        </div>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-[#e11d2e]" />
              <span className="text-[#e11d2e] text-xs" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Our Story
              </span>
            </div>
            <h1 className="text-white mb-5" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, letterSpacing: '-0.03em', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Redefining Premium Car<br />Buying in Sri Lanka
            </h1>
            <p className="text-white/60 text-lg leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              SST Auto was founded on a simple belief: buying a premium pre-owned vehicle should be a joyful experience — not a stressful one. For 7 years, we've been delivering on that promise.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-[#e11d2e]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '7', label: 'Years in Business' },
              { value: '1,200+', label: 'Happy Customers' },
              { value: '4.9/5', label: 'Customer Rating' },
              { value: '12+', label: 'Finance Partners' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-white" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '2rem', letterSpacing: '-0.03em' }}>{value}</p>
                <p className="text-white/75 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-px bg-[#e11d2e]" />
                <span className="text-[#e11d2e] text-xs" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Who We Are
                </span>
              </div>
              <h2 className="text-[#0a0a0a] mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Built on Trust.<br />Driven by Passion.
              </h2>
              <p className="text-[#64748b] mb-5 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                SST Auto was founded in 2017 by Sanath Thilakaratna, a veteran of the Sri Lankan automotive industry with two decades of experience. Frustrated by the lack of transparency and quality assurance in the used car market, Sanath set out to create something different.
              </p>
              <p className="text-[#64748b] mb-5 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Today, SST Auto is Sri Lanka's premier destination for premium pre-owned vehicles, with a team of 20+ automotive experts, finance specialists, and customer care professionals dedicated to delivering an exceptional experience.
              </p>
              <p className="text-[#64748b] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Every vehicle in our showroom has been hand-selected, thoroughly inspected, and honestly priced. We don't believe in pressure sales — we believe in building long-term relationships with our customers.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#f8fafc] rounded-2xl p-6 border border-[#f1f5f9]">
                <div className="w-10 h-10 bg-[#e11d2e] rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp size={18} className="text-white" />
                </div>
                <h4 className="text-[#0a0a0a] mb-2" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}>Our Mission</h4>
                <p className="text-[#64748b] text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  To make premium car ownership accessible to every Sri Lankan through transparency, trust, and exceptional service.
                </p>
              </div>
              <div className="bg-[#0a0a0a] rounded-2xl p-6 mt-8">
                <div className="w-10 h-10 bg-[#e11d2e]/20 rounded-xl flex items-center justify-center mb-4">
                  <Globe size={18} className="text-[#e11d2e]" />
                </div>
                <h4 className="text-white mb-2" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}>Our Vision</h4>
                <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  To be Sri Lanka's most trusted automotive brand, setting the gold standard for the pre-owned vehicle industry.
                </p>
              </div>
              <div className="bg-[#e11d2e] rounded-2xl p-6">
                <Users size={22} className="text-white mb-4" />
                <p className="text-white" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '2rem', letterSpacing: '-0.02em' }}>20+</p>
                <p className="text-white/80 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>Automotive experts on our team</p>
              </div>
              <div className="bg-[#f8fafc] rounded-2xl p-6 border border-[#f1f5f9] mt-8">
                <Shield size={22} className="text-[#0a0a0a] mb-4" />
                <p className="text-[#0a0a0a]" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '2rem', letterSpacing: '-0.02em' }}>100%</p>
                <p className="text-[#64748b] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>Vehicles inspected before listing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-6 h-px bg-[#e11d2e]" />
              <span className="text-[#e11d2e] text-xs" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                What We Stand For
              </span>
              <div className="w-6 h-px bg-[#e11d2e]" />
            </div>
            <h2 className="text-[#0a0a0a]" style={{ fontFamily: 'Outfit, sans-serif' }}>Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-white rounded-2xl p-6 border border-[#f1f5f9] hover:shadow-lg transition-all">
                <div className="w-10 h-10 bg-[#fef2f2] rounded-xl flex items-center justify-center mb-4">
                  <v.icon size={18} className="text-[#e11d2e]" />
                </div>
                <h4 className="text-[#0a0a0a] mb-2" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}>{v.title}</h4>
                <p className="text-[#64748b] text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-6 h-px bg-[#e11d2e]" />
              <span className="text-[#e11d2e] text-xs" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                7 Years of Growth
              </span>
              <div className="w-6 h-px bg-[#e11d2e]" />
            </div>
            <h2 className="text-[#0a0a0a]" style={{ fontFamily: 'Outfit, sans-serif' }}>Our Journey</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {milestones.map((m, i) => (
              <motion.div key={m.year} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="bg-[#f8fafc] rounded-2xl p-6 border border-[#f1f5f9]">
                <span className="text-[#e11d2e]" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '1.5rem' }}>{m.year}</span>
                <h4 className="text-[#0a0a0a] mt-1 mb-2" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}>{m.title}</h4>
                <p className="text-[#64748b] text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-6 h-px bg-[#e11d2e]" />
              <span className="text-[#e11d2e] text-xs" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Meet the Team
              </span>
              <div className="w-6 h-px bg-[#e11d2e]" />
            </div>
            <h2 className="text-[#0a0a0a]" style={{ fontFamily: 'Outfit, sans-serif' }}>The People Behind SST Auto</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div key={member.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-white rounded-2xl overflow-hidden border border-[#f1f5f9] hover:shadow-lg transition-all group">
                <div className="aspect-square overflow-hidden bg-[#f8fafc]">
                  <img src={member.avatar} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <p className="text-[#0a0a0a] mb-0.5" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}>{member.name}</p>
                  <p className="text-[#e11d2e] text-xs mb-3" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>{member.role}</p>
                  <p className="text-[#64748b] text-xs leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Ready to Experience the SST Difference?
          </h2>
          <p className="text-white/50 mb-8 max-w-lg mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Visit our showroom or browse our online inventory to find your perfect vehicle today.
          </p>
          <div className="flex gap-3 justify-center">
            <Link to="/vehicles" className="bg-[#e11d2e] hover:bg-[#c01727] text-white px-7 py-3.5 rounded-xl text-sm transition-all" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>
              Browse Vehicles
            </Link>
            <Link to="/contact" className="bg-white/10 hover:bg-white/20 text-white px-7 py-3.5 rounded-xl text-sm transition-all" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>
              Visit Showroom
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
