import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, ChevronDown, Phone, MessageCircle, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const brandLinks = [
  { name: 'Toyota', href: '/vehicles?brand=Toyota', count: 3 },
  { name: 'Honda', href: '/vehicles?brand=Honda', count: 2 },
  { name: 'Nissan', href: '/vehicles?brand=Nissan', count: 2 },
  { name: 'Suzuki', href: '/vehicles?brand=Suzuki', count: 1 },
  { name: 'Mercedes-Benz', href: '/vehicles?brand=Mercedes-Benz', count: 2 },
  { name: 'BMW', href: '/vehicles?brand=BMW', count: 2 },
];

const navLinks = [
  { label: 'Vehicles', href: '/vehicles', hasMega: true },
  { label: 'Sell Your Car', href: '/sell' },
  { label: 'Finance', href: '/finance' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const location = useLocation();
  const megaRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [location]);

  const handleMegaEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setMegaOpen(true);
  };

  const handleMegaLeave = () => {
    timeoutRef.current = setTimeout(() => setMegaOpen(false), 150);
  };

  const isHomePage = location.pathname === '/';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || !isHomePage
            ? 'bg-[#0a0a0a] shadow-2xl'
            : 'bg-gradient-to-b from-black/70 to-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group shrink-0">
              <div className="flex items-center gap-1">
                <span
                  className="text-white tracking-tight"
                  style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.03em' }}
                >
                  SST
                </span>
                <span
                  className="text-[#e11d2e] tracking-tight"
                  style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.03em' }}
                >
                  Auto
                </span>
              </div>
              <div className="h-5 w-px bg-white/20 hidden sm:block" />
              <span className="text-white/50 text-xs hidden sm:block" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                Premium Vehicles
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.hasMega ? (
                  <div
                    key={link.label}
                    ref={megaRef}
                    onMouseEnter={handleMegaEnter}
                    onMouseLeave={handleMegaLeave}
                    className="relative"
                  >
                    <Link
                      to={link.href}
                      className={`flex items-center gap-1 px-4 py-2 text-sm transition-colors rounded-md ${
                        location.pathname.startsWith('/vehicles')
                          ? 'text-white bg-white/10'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                      }`}
                      style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600 }}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`}
                      />
                    </Link>

                    <AnimatePresence>
                      {megaOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          onMouseEnter={handleMegaEnter}
                          onMouseLeave={handleMegaLeave}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[480px] bg-white rounded-xl shadow-2xl border border-black/5 p-6"
                        >
                          <div className="mb-4">
                            <p className="text-xs text-[#64748b] uppercase tracking-wider mb-3" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>
                              Shop by Brand
                            </p>
                            <div className="grid grid-cols-3 gap-2">
                              {brandLinks.map((brand) => (
                                <Link
                                  key={brand.name}
                                  to={brand.href}
                                  className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-[#f8fafc] transition-colors group"
                                >
                                  <span className="text-[#0a0a0a] text-sm group-hover:text-[#e11d2e] transition-colors" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600 }}>
                                    {brand.name}
                                  </span>
                                  <span className="text-xs text-[#64748b] bg-[#f1f5f9] px-1.5 py-0.5 rounded-full">
                                    {brand.count}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                          <div className="pt-4 border-t border-[#f1f5f9]">
                            <Link
                              to="/vehicles"
                              className="flex items-center justify-between p-3 bg-[#0a0a0a] rounded-lg hover:bg-[#1a1a1a] transition-colors"
                            >
                              <span className="text-white text-sm" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600 }}>
                                View All Vehicles
                              </span>
                              <span className="text-[#e11d2e] text-sm" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>
                                12 Available →
                              </span>
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className={`px-4 py-2 text-sm transition-colors rounded-md ${
                      location.pathname === link.href
                        ? 'text-white bg-white/10'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                    style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600 }}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/vehicles"
                className="flex items-center gap-2 px-4 py-2 text-white/80 hover:text-white text-sm transition-colors"
              >
                <Search size={16} />
              </Link>
              <a
                href="tel:+94112345678"
                className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
              >
                <Phone size={14} />
                <span style={{ fontFamily: 'Inter, sans-serif' }}>+94 11 234 5678</span>
              </a>
              <Link
                to="/vehicles"
                className="flex items-center gap-2 bg-[#e11d2e] hover:bg-[#c01727] text-white px-5 py-2.5 rounded-lg text-sm transition-all duration-200 hover:shadow-lg hover:shadow-red-500/20"
                style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
              >
                Inquire Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#0a0a0a] border-t border-white/10 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="flex items-center px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600 }}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-white/10 space-y-2">
                  <p className="px-4 text-xs text-white/40 uppercase tracking-wider mb-3" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>
                    Shop by Brand
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {brandLinks.map((brand) => (
                      <Link
                        key={brand.name}
                        to={brand.href}
                        className="px-4 py-2.5 text-white/70 hover:text-white hover:bg-white/10 rounded-lg text-sm transition-colors"
                        style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600 }}
                      >
                        {brand.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-3">
                  <a
                    href="https://wa.me/94771234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#1ea855] text-white px-4 py-3 rounded-lg text-sm font-semibold transition-colors"
                  >
                    <MessageCircle size={16} />
                    WhatsApp
                  </a>
                  <Link
                    to="/vehicles"
                    className="flex items-center justify-center gap-2 bg-[#e11d2e] hover:bg-[#c01727] text-white px-4 py-3 rounded-lg text-sm font-semibold transition-colors"
                    style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
                  >
                    Inquire Now
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
