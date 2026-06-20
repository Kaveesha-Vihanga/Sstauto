import { Link } from 'react-router';
import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const vehicleLinks = [
  { label: 'All Vehicles', href: '/vehicles' },
  { label: 'Toyota', href: '/vehicles?brand=Toyota' },
  { label: 'Honda', href: '/vehicles?brand=Honda' },
  { label: 'BMW', href: '/vehicles?brand=BMW' },
  { label: 'Mercedes-Benz', href: '/vehicles?brand=Mercedes-Benz' },
  { label: 'Nissan', href: '/vehicles?brand=Nissan' },
];

const serviceLinks = [
  { label: 'Sell Your Car', href: '/sell' },
  { label: 'Finance Calculator', href: '/finance' },
  { label: 'Vehicle Request', href: '/request' },
  { label: 'Reviews', href: '/reviews' },
];

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
  { label: 'Admin', href: '/admin' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white">
      {/* CTA Strip */}
      <div className="border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.02em' }}>
                Ready to find your dream car?
              </h3>
              <p className="text-white/50 mt-1 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                Our team is available 7 days a week to assist you.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/94771234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#1ea855] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
                style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>
              <Link
                to="/vehicles"
                className="flex items-center justify-center gap-2 bg-[#e11d2e] hover:bg-[#c01727] text-white px-5 py-2.5 rounded-lg text-sm transition-all duration-200"
                style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
              >
                Browse Vehicles
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-1 mb-4">
              <span className="text-white" style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.75rem', fontWeight: 800, letterSpacing: '-0.03em' }}>
                SST
              </span>
              <span className="text-[#e11d2e]" style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.75rem', fontWeight: 800, letterSpacing: '-0.03em' }}>
                Auto
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
              Sri Lanka's premier destination for premium pre-owned vehicles. Quality assured, transparently priced, and trusted by thousands of satisfied customers across the island.
            </p>
            <div className="space-y-3">
              <a href="tel:+94112345678" className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors group">
                <div className="w-8 h-8 bg-white/10 group-hover:bg-[#e11d2e] rounded-lg flex items-center justify-center transition-colors">
                  <Phone size={14} />
                </div>
                <span style={{ fontFamily: 'Inter, sans-serif' }}>+94 11 234 5678</span>
              </a>
              <a href="mailto:info@sstauto.lk" className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors group">
                <div className="w-8 h-8 bg-white/10 group-hover:bg-[#e11d2e] rounded-lg flex items-center justify-center transition-colors">
                  <Mail size={14} />
                </div>
                <span style={{ fontFamily: 'Inter, sans-serif' }}>info@sstauto.lk</span>
              </a>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  <MapPin size={14} />
                </div>
                <span style={{ fontFamily: 'Inter, sans-serif' }}>123 Galle Road, Colombo 03, Sri Lanka</span>
              </div>
            </div>
            {/* Socials */}
            <div className="flex gap-3 mt-6">
              {[
                { Icon: Facebook, href: '#', label: 'Facebook' },
                { Icon: Instagram, href: '#', label: 'Instagram' },
                { Icon: Youtube, href: '#', label: 'YouTube' },
                { Icon: Twitter, href: '#', label: 'Twitter' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-white/10 hover:bg-[#e11d2e] rounded-lg flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Vehicles */}
          <div>
            <h4 className="text-white mb-4" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Vehicles
            </h4>
            <ul className="space-y-2.5">
              {vehicleLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white mb-4" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Company
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Hours */}
            <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-white text-xs mb-2" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Business Hours
              </p>
              <p className="text-white/50 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>Mon – Sat: 9:00 AM – 7:00 PM</p>
              <p className="text-white/50 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>Sunday: 10:00 AM – 5:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
            © 2024 SST Auto (Pvt) Ltd. All rights reserved. Registered in Sri Lanka.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a key={item} href="#" className="text-white/30 hover:text-white/70 text-xs transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
