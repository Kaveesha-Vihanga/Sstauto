import { useState } from 'react';
import { CheckCircle, Search, MessageCircle, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { brands } from '../data/vehicles';

export default function VehicleRequestPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    brand: '', model: '', year: '', variant: '', fuel: '', transmission: '',
    bodyType: '', color: '', minBudget: '', maxBudget: '', urgency: 'Within a month',
    features: '', name: '', phone: '', email: '', notes: '',
  });

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#f8fafc] pt-24 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl border border-[#e2e8f0] p-12 max-w-md w-full text-center shadow-xl"
        >
          <div className="w-16 h-16 bg-[#f0fdf4] rounded-full flex items-center justify-center mx-auto mb-5">
            <CheckCircle size={28} className="text-[#16a34a]" />
          </div>
          <h2 className="text-[#0a0a0a] mb-3" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.5rem' }}>
            Request Received!
          </h2>
          <p className="text-[#64748b] mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
            Our sourcing team is on it. We'll reach out within 24 hours with available options that match your requirements.
          </p>
          <a
            href="https://wa.me/94771234567?text=Hi%2C%20I've%20just%20submitted%20a%20vehicle%20request"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-[#25d366] text-white py-3.5 rounded-xl text-sm mb-3"
            style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
          >
            <MessageCircle size={16} />
            Follow Up on WhatsApp
          </a>
          <button
            onClick={() => { setSubmitted(false); setForm({ brand: '', model: '', year: '', variant: '', fuel: '', transmission: '', bodyType: '', color: '', minBudget: '', maxBudget: '', urgency: 'Within a month', features: '', name: '', phone: '', email: '', notes: '' }); }}
            className="w-full border border-[#e2e8f0] text-[#64748b] py-3 rounded-xl text-sm"
            style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
          >
            Submit Another Request
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <div className="bg-[#0a0a0a] pt-24 pb-12">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-px bg-[#e11d2e]" />
            <span className="text-[#e11d2e] text-xs" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Can't Find It? We'll Source It
            </span>
          </div>
          <h1 className="text-white" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, letterSpacing: '-0.03em', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Request Your Dream Vehicle
          </h1>
          <p className="text-white/50 mt-3 max-w-xl" style={{ fontFamily: 'Inter, sans-serif' }}>
            Tell us exactly what you're looking for. Our network spans Sri Lanka and beyond — we'll find it for you.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
              <div className="bg-white rounded-2xl border border-[#e2e8f0] p-8 mb-6">
                <h2 className="text-[#0a0a0a] mb-6" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.25rem' }}>
                  Vehicle Specifications
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[#64748b] mb-1.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Preferred Brand</label>
                    <select value={form.brand} onChange={(e) => update('brand', e.target.value)} className="w-full px-3 py-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm text-[#0a0a0a] focus:outline-none focus:border-[#e11d2e]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <option value="">Any Brand</option>
                      {brands.map((b) => <option key={b}>{b}</option>)}
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-[#64748b] mb-1.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Model *</label>
                    <input required type="text" placeholder="e.g. Camry, Land Cruiser, X5" value={form.model} onChange={(e) => update('model', e.target.value)} className="w-full px-3 py-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm text-[#0a0a0a] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#e11d2e]" style={{ fontFamily: 'Inter, sans-serif' }} />
                  </div>
                  <div>
                    <label className="block text-xs text-[#64748b] mb-1.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Year (From)</label>
                    <select value={form.year} onChange={(e) => update('year', e.target.value)} className="w-full px-3 py-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm text-[#0a0a0a] focus:outline-none focus:border-[#e11d2e]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <option value="">Any Year</option>
                      {Array.from({ length: 10 }, (_, i) => 2024 - i).map((y) => <option key={y}>{y}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-[#64748b] mb-1.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Fuel Type</label>
                    <select value={form.fuel} onChange={(e) => update('fuel', e.target.value)} className="w-full px-3 py-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm text-[#0a0a0a] focus:outline-none focus:border-[#e11d2e]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <option value="">Any Fuel</option>
                      {['Petrol', 'Diesel', 'Hybrid', 'Electric'].map((f) => <option key={f}>{f}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-[#64748b] mb-1.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Transmission</label>
                    <select value={form.transmission} onChange={(e) => update('transmission', e.target.value)} className="w-full px-3 py-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm text-[#0a0a0a] focus:outline-none focus:border-[#e11d2e]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <option value="">Any</option>
                      <option>Automatic</option>
                      <option>Manual</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-[#64748b] mb-1.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Preferred Color</label>
                    <input type="text" placeholder="e.g. White, Black" value={form.color} onChange={(e) => update('color', e.target.value)} className="w-full px-3 py-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm text-[#0a0a0a] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#e11d2e]" style={{ fontFamily: 'Inter, sans-serif' }} />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-xs text-[#64748b] mb-1.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Must-Have Features</label>
                  <textarea value={form.features} onChange={(e) => update('features', e.target.value)} placeholder="e.g. Sunroof, Leather seats, Apple CarPlay, 4WD..." rows={3} className="w-full px-3 py-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm text-[#0a0a0a] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#e11d2e] resize-none" style={{ fontFamily: 'Inter, sans-serif' }} />
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-[#e2e8f0] p-8 mb-6">
                <h2 className="text-[#0a0a0a] mb-6" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.25rem' }}>
                  Budget & Timeline
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs text-[#64748b] mb-1.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Min Budget (LKR)</label>
                    <input type="number" placeholder="e.g. 5000000" value={form.minBudget} onChange={(e) => update('minBudget', e.target.value)} className="w-full px-3 py-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm text-[#0a0a0a] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#e11d2e]" style={{ fontFamily: 'Inter, sans-serif' }} />
                  </div>
                  <div>
                    <label className="block text-xs text-[#64748b] mb-1.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Max Budget (LKR) *</label>
                    <input required type="number" placeholder="e.g. 15000000" value={form.maxBudget} onChange={(e) => update('maxBudget', e.target.value)} className="w-full px-3 py-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm text-[#0a0a0a] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#e11d2e]" style={{ fontFamily: 'Inter, sans-serif' }} />
                  </div>
                  <div>
                    <label className="block text-xs text-[#64748b] mb-1.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>When Do You Need It?</label>
                    <select value={form.urgency} onChange={(e) => update('urgency', e.target.value)} className="w-full px-3 py-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm text-[#0a0a0a] focus:outline-none focus:border-[#e11d2e]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {['ASAP', 'Within a week', 'Within a month', 'Within 3 months', 'No rush'].map((u) => <option key={u}>{u}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-[#e2e8f0] p-8">
                <h2 className="text-[#0a0a0a] mb-6" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.25rem' }}>
                  Your Contact Details
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[#64748b] mb-1.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Full Name *</label>
                    <input required type="text" placeholder="Your name" value={form.name} onChange={(e) => update('name', e.target.value)} className="w-full px-3 py-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm text-[#0a0a0a] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#e11d2e]" style={{ fontFamily: 'Inter, sans-serif' }} />
                  </div>
                  <div>
                    <label className="block text-xs text-[#64748b] mb-1.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Phone Number *</label>
                    <input required type="tel" placeholder="+94 77 XXX XXXX" value={form.phone} onChange={(e) => update('phone', e.target.value)} className="w-full px-3 py-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm text-[#0a0a0a] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#e11d2e]" style={{ fontFamily: 'Inter, sans-serif' }} />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs text-[#64748b] mb-1.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Additional Notes</label>
                    <textarea value={form.notes} onChange={(e) => update('notes', e.target.value)} placeholder="Any other requirements or information that would help us find the right vehicle..." rows={3} className="w-full px-3 py-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm text-[#0a0a0a] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#e11d2e] resize-none" style={{ fontFamily: 'Inter, sans-serif' }} />
                  </div>
                </div>
                <button type="submit" className="mt-6 flex items-center gap-2 bg-[#e11d2e] hover:bg-[#c01727] text-white px-7 py-3.5 rounded-xl text-sm transition-all" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>
                  Submit Vehicle Request <ArrowRight size={15} />
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-5">
            <div className="bg-[#0a0a0a] rounded-2xl p-6 text-white">
              <div className="w-10 h-10 bg-[#e11d2e]/20 rounded-xl flex items-center justify-center mb-4">
                <Search size={18} className="text-[#e11d2e]" />
              </div>
              <h3 className="text-white mb-3" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.1rem' }}>
                How Vehicle Sourcing Works
              </h3>
              <div className="space-y-4">
                {[
                  { step: '01', title: 'Submit Your Request', desc: 'Fill in your vehicle specifications and budget.' },
                  { step: '02', title: 'We Search Our Network', desc: 'Our team searches dealers and private sellers islandwide.' },
                  { step: '03', title: 'You Get Options', desc: 'We present verified options that match your criteria.' },
                  { step: '04', title: 'We Handle the Rest', desc: 'From inspection to purchase, we manage the entire process.' },
                ].map(({ step: s, title, desc }) => (
                  <div key={s} className="flex gap-3">
                    <span className="text-[#e11d2e] shrink-0" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '0.75rem' }}>{s}</span>
                    <div>
                      <p className="text-white text-sm" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>{title}</p>
                      <p className="text-white/50 text-xs mt-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-[#e2e8f0] p-6">
              <p className="text-[#0a0a0a] text-sm mb-4" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>
                Want to discuss your requirements directly?
              </p>
              <a
                href="https://wa.me/94771234567?text=Hi%2C%20I'm%20looking%20for%20a%20specific%20vehicle%20and%20would%20like%20to%20discuss%20my%20requirements"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#25d366] hover:bg-[#1ea855] text-white py-3 rounded-xl text-sm transition-colors"
                style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
