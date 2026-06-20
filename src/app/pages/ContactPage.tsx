import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, CircleCheck as CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', subject: 'General Inquiry', message: '' });
  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <div className="bg-[#0a0a0a] pt-24 pb-12">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-px bg-[#e11d2e]" />
            <span className="text-[#e11d2e] text-xs" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Get in Touch
            </span>
          </div>
          <h1 className="text-white" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, letterSpacing: '-0.03em', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            We'd Love to Hear From You
          </h1>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact info */}
          <div className="space-y-5">
            <div className="bg-white rounded-2xl border border-[#e2e8f0] p-5 sm:p-6">
              <h3 className="text-[#0a0a0a] mb-4 sm:mb-5" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: 'clamp(1rem, 2.5vw, 1.1rem)' }}>
                Contact Information
              </h3>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#fef2f2] rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={16} className="text-[#e11d2e]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#94a3b8] mb-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>Showroom</p>
                    <a href="tel:+94112345678" className="text-[#0a0a0a] text-sm hover:text-[#e11d2e] transition-colors" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>+94 11 234 5678</a>
                    <br />
                    <a href="tel:+94771234567" className="text-[#0a0a0a] text-sm hover:text-[#e11d2e] transition-colors" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>+94 77 123 4567</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#fef2f2] rounded-xl flex items-center justify-center shrink-0">
                    <MessageCircle size={16} className="text-[#e11d2e]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#94a3b8] mb-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>WhatsApp</p>
                    <a href="https://wa.me/94771234567" target="_blank" rel="noopener noreferrer" className="text-[#0a0a0a] text-sm hover:text-[#25d366] transition-colors" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>+94 77 123 4567</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#fef2f2] rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={16} className="text-[#e11d2e]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#94a3b8] mb-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>Email</p>
                    <a href="mailto:info@sstauto.lk" className="text-[#0a0a0a] text-sm hover:text-[#e11d2e] transition-colors" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>info@sstauto.lk</a>
                    <br />
                    <a href="mailto:sales@sstauto.lk" className="text-[#0a0a0a] text-sm hover:text-[#e11d2e] transition-colors" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>sales@sstauto.lk</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#fef2f2] rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-[#e11d2e]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#94a3b8] mb-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>Address</p>
                    <p className="text-[#0a0a0a] text-sm" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>123 Galle Road<br />Colombo 03<br />Sri Lanka</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#fef2f2] rounded-xl flex items-center justify-center shrink-0">
                    <Clock size={16} className="text-[#e11d2e]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#94a3b8] mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>Opening Hours</p>
                    <p className="text-[#0a0a0a] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>Mon – Sat: 9:00 AM – 7:00 PM</p>
                    <p className="text-[#0a0a0a] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>Sunday: 10:00 AM – 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick actions */}
            <div className="bg-[#0a0a0a] rounded-2xl p-6 space-y-3">
              <h3 className="text-white mb-1" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.95rem' }}>Quick Connect</h3>
              <a href="https://wa.me/94771234567" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-[#25d366] hover:bg-[#1ea855] text-white px-4 py-3 rounded-xl text-sm transition-colors w-full" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>
                <MessageCircle size={16} />
                Chat on WhatsApp
              </a>
              <a href="tel:+94112345678" className="flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-4 py-3 rounded-xl text-sm transition-colors w-full" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>
                <Phone size={16} />
                Call Showroom
              </a>
            </div>
          </div>

          {/* Map + Form */}
          <div className="lg:col-span-2 space-y-5">
            {/* Map placeholder */}
            <div className="bg-[#f1f5f9] rounded-2xl overflow-hidden h-56 relative border border-[#e2e8f0]">
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-12 h-12 bg-[#e11d2e] rounded-full flex items-center justify-center mb-3 shadow-xl">
                  <MapPin size={20} className="text-white" />
                </div>
                <p className="text-[#0a0a0a] text-sm" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>SST Auto Showroom</p>
                <p className="text-[#64748b] text-xs mt-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>123 Galle Road, Colombo 03</p>
                <a
                  href="https://maps.google.com/?q=123+Galle+Road+Colombo+03+Sri+Lanka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-xs text-[#e11d2e] border border-[#e11d2e] px-3 py-1.5 rounded-full hover:bg-[#e11d2e] hover:text-white transition-colors"
                  style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
                >
                  Open in Google Maps
                </a>
              </div>
              {/* Grid lines for map feel */}
              <div className="absolute inset-0 opacity-10">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={`h${i}`} className="absolute w-full h-px bg-[#64748b]" style={{ top: `${(i + 1) * 12.5}%` }} />
                ))}
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={`v${i}`} className="absolute h-full w-px bg-[#64748b]" style={{ left: `${(i + 1) * 8.33}%` }} />
                ))}
              </div>
            </div>

            {/* Contact form */}
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-2xl border border-[#e2e8f0] p-10 text-center">
                <div className="w-14 h-14 bg-[#f0fdf4] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={26} className="text-[#16a34a]" />
                </div>
                <h3 className="text-[#0a0a0a] mb-2" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.25rem' }}>Message Sent!</h3>
                <p className="text-[#64748b]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Thank you for reaching out. We'll respond within 2 hours on weekdays.
                </p>
                <button onClick={() => setSubmitted(false)} className="mt-5 text-[#e11d2e] text-sm" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="bg-white rounded-2xl border border-[#e2e8f0] p-8">
                <h3 className="text-[#0a0a0a] mb-6" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.1rem' }}>
                  Send Us a Message
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs text-[#64748b] mb-1.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Full Name *</label>
                    <input required type="text" placeholder="Your name" value={form.name} onChange={(e) => update('name', e.target.value)} className="w-full px-3 py-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm text-[#0a0a0a] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#e11d2e]" style={{ fontFamily: 'Inter, sans-serif' }} />
                  </div>
                  <div>
                    <label className="block text-xs text-[#64748b] mb-1.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Phone Number *</label>
                    <input required type="tel" placeholder="+94 77 XXX XXXX" value={form.phone} onChange={(e) => update('phone', e.target.value)} className="w-full px-3 py-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm text-[#0a0a0a] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#e11d2e]" style={{ fontFamily: 'Inter, sans-serif' }} />
                  </div>
                  <div>
                    <label className="block text-xs text-[#64748b] mb-1.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Email Address</label>
                    <input type="email" placeholder="your@email.com" value={form.email} onChange={(e) => update('email', e.target.value)} className="w-full px-3 py-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm text-[#0a0a0a] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#e11d2e]" style={{ fontFamily: 'Inter, sans-serif' }} />
                  </div>
                  <div>
                    <label className="block text-xs text-[#64748b] mb-1.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Subject</label>
                    <select value={form.subject} onChange={(e) => update('subject', e.target.value)} className="w-full px-3 py-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm text-[#0a0a0a] focus:outline-none focus:border-[#e11d2e]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {['General Inquiry', 'Vehicle Inquiry', 'Finance Inquiry', 'Sell My Car', 'After-Sale Support', 'Other'].map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-xs text-[#64748b] mb-1.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Message *</label>
                  <textarea required value={form.message} onChange={(e) => update('message', e.target.value)} placeholder="How can we help you?" rows={5} className="w-full px-3 py-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm text-[#0a0a0a] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#e11d2e] resize-none" style={{ fontFamily: 'Inter, sans-serif' }} />
                </div>
                <button type="submit" className="w-full bg-[#e11d2e] hover:bg-[#c01727] text-white py-3.5 rounded-xl text-sm transition-all duration-200" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
