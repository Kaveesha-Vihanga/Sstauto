import { useState } from 'react';
import { CheckCircle, Upload, Camera, Car, DollarSign, FileText, ArrowRight, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { brands } from '../data/vehicles';

const steps = [
  { id: 1, icon: Car, title: 'Vehicle Details', desc: 'Tell us about your car' },
  { id: 2, icon: Camera, title: 'Photos & Condition', desc: 'Upload photos and describe condition' },
  { id: 3, icon: DollarSign, title: 'Your Price', desc: 'Set your asking price' },
  { id: 4, icon: FileText, title: 'Your Details', desc: 'Contact information' },
];

const whySell = [
  { title: 'Instant Valuation', desc: 'Get a fair market valuation within 2 hours, no waiting around.' },
  { title: 'Same-Day Payment', desc: 'Once agreed, we process payment the same day — no delays.' },
  { title: 'We Handle Paperwork', desc: 'Our team manages all ownership transfer documentation for you.' },
  { title: 'No Hidden Fees', desc: 'Transparent, no-commission process. The price agreed is what you receive.' },
];

export default function SellCarPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    brand: '', model: '', year: '', variant: '', mileage: '', fuel: '', transmission: '',
    color: '', condition: 'Good', accidentHistory: 'No', serviceHistory: 'Yes',
    description: '', askingPrice: '', name: '', phone: '', email: '', location: '',
  });

  const updateForm = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
            Request Submitted!
          </h2>
          <p className="text-[#64748b] mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
            Our team will review your vehicle details and contact you within 2 hours with a valuation.
          </p>
          <a
            href="https://wa.me/94771234567?text=Hi%2C%20I've%20just%20submitted%20my%20vehicle%20for%20valuation"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-[#25d366] text-white py-3.5 rounded-xl text-sm mb-3"
            style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
          >
            <MessageCircle size={16} />
            Continue on WhatsApp
          </a>
          <button
            onClick={() => { setSubmitted(false); setStep(1); }}
            className="w-full border border-[#e2e8f0] text-[#64748b] py-3 rounded-xl text-sm"
            style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
          >
            Submit Another Vehicle
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Header */}
      <div className="bg-[#0a0a0a] pt-24 pb-12">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-px bg-[#e11d2e]" />
            <span className="text-[#e11d2e] text-xs" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Sell Your Car
            </span>
          </div>
          <h1 className="text-white" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, letterSpacing: '-0.03em', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Get the Best Price<br />for Your Vehicle
          </h1>
          <p className="text-white/50 mt-3 max-w-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
            Free valuation · Same-day payment · We handle all paperwork
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            {/* Step indicators */}
            <div className="flex items-center gap-0 mb-8 overflow-x-auto">
              {steps.map((s, i) => (
                <div key={s.id} className="flex items-center shrink-0">
                  <button
                    onClick={() => step > s.id - 1 && setStep(s.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${step === s.id ? 'bg-[#0a0a0a] text-white' : step > s.id ? 'bg-white border border-[#e2e8f0] text-[#64748b] hover:border-[#0a0a0a]' : 'bg-white border border-[#e2e8f0] text-[#94a3b8] cursor-not-allowed'}`}
                  >
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs shrink-0 ${step > s.id ? 'bg-[#16a34a] text-white' : step === s.id ? 'bg-[#e11d2e] text-white' : 'bg-[#f1f5f9] text-[#94a3b8]'}`} style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>
                      {step > s.id ? '✓' : s.id}
                    </div>
                    <span className="hidden sm:block text-sm whitespace-nowrap" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600 }}>{s.title}</span>
                  </button>
                  {i < steps.length - 1 && <div className={`w-6 h-px mx-1 shrink-0 ${step > s.id ? 'bg-[#16a34a]' : 'bg-[#e2e8f0]'}`} />}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="bg-white rounded-2xl border border-[#e2e8f0] p-8">
                    <h2 className="text-[#0a0a0a] mb-6" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.25rem' }}>
                      Vehicle Information
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-[#64748b] mb-1.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Brand *</label>
                        <select required value={form.brand} onChange={(e) => updateForm('brand', e.target.value)} className="w-full px-3 py-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm text-[#0a0a0a] focus:outline-none focus:border-[#e11d2e]" style={{ fontFamily: 'Inter, sans-serif' }}>
                          <option value="">Select Brand</option>
                          {brands.map((b) => <option key={b}>{b}</option>)}
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs text-[#64748b] mb-1.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Model *</label>
                        <input required type="text" placeholder="e.g. Camry, Civic" value={form.model} onChange={(e) => updateForm('model', e.target.value)} className="w-full px-3 py-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm text-[#0a0a0a] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#e11d2e]" style={{ fontFamily: 'Inter, sans-serif' }} />
                      </div>
                      <div>
                        <label className="block text-xs text-[#64748b] mb-1.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Year *</label>
                        <select required value={form.year} onChange={(e) => updateForm('year', e.target.value)} className="w-full px-3 py-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm text-[#0a0a0a] focus:outline-none focus:border-[#e11d2e]" style={{ fontFamily: 'Inter, sans-serif' }}>
                          <option value="">Select Year</option>
                          {Array.from({ length: 20 }, (_, i) => 2024 - i).map((y) => <option key={y}>{y}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs text-[#64748b] mb-1.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Variant</label>
                        <input type="text" placeholder="e.g. WS Hybrid, M Sport" value={form.variant} onChange={(e) => updateForm('variant', e.target.value)} className="w-full px-3 py-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm text-[#0a0a0a] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#e11d2e]" style={{ fontFamily: 'Inter, sans-serif' }} />
                      </div>
                      <div>
                        <label className="block text-xs text-[#64748b] mb-1.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Mileage (km) *</label>
                        <input required type="number" placeholder="e.g. 45000" value={form.mileage} onChange={(e) => updateForm('mileage', e.target.value)} className="w-full px-3 py-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm text-[#0a0a0a] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#e11d2e]" style={{ fontFamily: 'Inter, sans-serif' }} />
                      </div>
                      <div>
                        <label className="block text-xs text-[#64748b] mb-1.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Fuel Type *</label>
                        <select required value={form.fuel} onChange={(e) => updateForm('fuel', e.target.value)} className="w-full px-3 py-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm text-[#0a0a0a] focus:outline-none focus:border-[#e11d2e]" style={{ fontFamily: 'Inter, sans-serif' }}>
                          <option value="">Select</option>
                          {['Petrol', 'Diesel', 'Hybrid', 'Electric'].map((f) => <option key={f}>{f}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs text-[#64748b] mb-1.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Transmission</label>
                        <select value={form.transmission} onChange={(e) => updateForm('transmission', e.target.value)} className="w-full px-3 py-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm text-[#0a0a0a] focus:outline-none focus:border-[#e11d2e]" style={{ fontFamily: 'Inter, sans-serif' }}>
                          <option value="">Select</option>
                          <option>Automatic</option>
                          <option>Manual</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs text-[#64748b] mb-1.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Color</label>
                        <input type="text" placeholder="e.g. Pearl White" value={form.color} onChange={(e) => updateForm('color', e.target.value)} className="w-full px-3 py-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm text-[#0a0a0a] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#e11d2e]" style={{ fontFamily: 'Inter, sans-serif' }} />
                      </div>
                    </div>
                    <button type="button" onClick={() => setStep(2)} className="mt-6 flex items-center gap-2 bg-[#0a0a0a] hover:bg-[#1a1a1a] text-white px-6 py-3 rounded-xl text-sm transition-all" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>
                      Next: Photos & Condition <ArrowRight size={15} />
                    </button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="bg-white rounded-2xl border border-[#e2e8f0] p-8">
                    <h2 className="text-[#0a0a0a] mb-6" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.25rem' }}>
                      Photos & Condition
                    </h2>
                    {/* Photo upload area */}
                    <div className="border-2 border-dashed border-[#e2e8f0] rounded-xl p-8 text-center mb-6 hover:border-[#e11d2e] transition-colors cursor-pointer group">
                      <Upload size={32} className="text-[#94a3b8] group-hover:text-[#e11d2e] mx-auto mb-3 transition-colors" />
                      <p className="text-[#0a0a0a] text-sm mb-1" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>Drop photos here or click to upload</p>
                      <p className="text-[#94a3b8] text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>Upload up to 20 photos — JPG, PNG up to 10MB each</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                      <div>
                        <label className="block text-xs text-[#64748b] mb-1.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Overall Condition</label>
                        <select value={form.condition} onChange={(e) => updateForm('condition', e.target.value)} className="w-full px-3 py-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm text-[#0a0a0a] focus:outline-none focus:border-[#e11d2e]" style={{ fontFamily: 'Inter, sans-serif' }}>
                          {['Excellent', 'Good', 'Fair', 'Poor'].map((c) => <option key={c}>{c}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs text-[#64748b] mb-1.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Accident History</label>
                        <select value={form.accidentHistory} onChange={(e) => updateForm('accidentHistory', e.target.value)} className="w-full px-3 py-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm text-[#0a0a0a] focus:outline-none focus:border-[#e11d2e]" style={{ fontFamily: 'Inter, sans-serif' }}>
                          <option>No</option>
                          <option>Minor</option>
                          <option>Major</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs text-[#64748b] mb-1.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Service History</label>
                        <select value={form.serviceHistory} onChange={(e) => updateForm('serviceHistory', e.target.value)} className="w-full px-3 py-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm text-[#0a0a0a] focus:outline-none focus:border-[#e11d2e]" style={{ fontFamily: 'Inter, sans-serif' }}>
                          <option>Yes — Full</option>
                          <option>Yes — Partial</option>
                          <option>No</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs text-[#64748b] mb-1.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Additional Notes</label>
                      <textarea value={form.description} onChange={(e) => updateForm('description', e.target.value)} placeholder="Describe any modifications, known issues, recent work done, or other relevant details..." rows={4} className="w-full px-3 py-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm text-[#0a0a0a] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#e11d2e] resize-none" style={{ fontFamily: 'Inter, sans-serif' }} />
                    </div>
                    <div className="flex gap-3 mt-6">
                      <button type="button" onClick={() => setStep(1)} className="px-5 py-3 border border-[#e2e8f0] text-[#64748b] rounded-xl text-sm" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>Back</button>
                      <button type="button" onClick={() => setStep(3)} className="flex items-center gap-2 bg-[#0a0a0a] hover:bg-[#1a1a1a] text-white px-6 py-3 rounded-xl text-sm transition-all" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>
                        Next: Pricing <ArrowRight size={15} />
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="bg-white rounded-2xl border border-[#e2e8f0] p-8">
                    <h2 className="text-[#0a0a0a] mb-2" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.25rem' }}>Your Asking Price</h2>
                    <p className="text-[#64748b] text-sm mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>Leave blank if you'd prefer our expert valuation first.</p>
                    <div>
                      <label className="block text-xs text-[#64748b] mb-1.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Asking Price (LKR)</label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#64748b] text-sm" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>LKR</span>
                        <input type="number" placeholder="e.g. 8500000" value={form.askingPrice} onChange={(e) => updateForm('askingPrice', e.target.value)} className="w-full pl-14 pr-4 py-3 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl text-sm text-[#0a0a0a] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#e11d2e]" style={{ fontFamily: 'Inter, sans-serif' }} />
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
                      <p className="text-[#0a0a0a] text-sm mb-1" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>💡 Not sure of your car's value?</p>
                      <p className="text-[#64748b] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>Skip this step and our experts will provide a free market valuation based on your vehicle's details and current market conditions.</p>
                    </div>
                    <div className="flex gap-3 mt-6">
                      <button type="button" onClick={() => setStep(2)} className="px-5 py-3 border border-[#e2e8f0] text-[#64748b] rounded-xl text-sm" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>Back</button>
                      <button type="button" onClick={() => setStep(4)} className="flex items-center gap-2 bg-[#0a0a0a] hover:bg-[#1a1a1a] text-white px-6 py-3 rounded-xl text-sm transition-all" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>
                        Next: Your Details <ArrowRight size={15} />
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="bg-white rounded-2xl border border-[#e2e8f0] p-8">
                    <h2 className="text-[#0a0a0a] mb-6" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.25rem' }}>Your Contact Details</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-[#64748b] mb-1.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Full Name *</label>
                        <input required type="text" placeholder="Your full name" value={form.name} onChange={(e) => updateForm('name', e.target.value)} className="w-full px-3 py-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm text-[#0a0a0a] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#e11d2e]" style={{ fontFamily: 'Inter, sans-serif' }} />
                      </div>
                      <div>
                        <label className="block text-xs text-[#64748b] mb-1.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Phone Number *</label>
                        <input required type="tel" placeholder="+94 77 XXX XXXX" value={form.phone} onChange={(e) => updateForm('phone', e.target.value)} className="w-full px-3 py-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm text-[#0a0a0a] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#e11d2e]" style={{ fontFamily: 'Inter, sans-serif' }} />
                      </div>
                      <div>
                        <label className="block text-xs text-[#64748b] mb-1.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Email Address</label>
                        <input type="email" placeholder="your@email.com" value={form.email} onChange={(e) => updateForm('email', e.target.value)} className="w-full px-3 py-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm text-[#0a0a0a] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#e11d2e]" style={{ fontFamily: 'Inter, sans-serif' }} />
                      </div>
                      <div>
                        <label className="block text-xs text-[#64748b] mb-1.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Location</label>
                        <input type="text" placeholder="e.g. Colombo, Kandy" value={form.location} onChange={(e) => updateForm('location', e.target.value)} className="w-full px-3 py-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm text-[#0a0a0a] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#e11d2e]" style={{ fontFamily: 'Inter, sans-serif' }} />
                      </div>
                    </div>
                    <p className="text-xs text-[#94a3b8] mt-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                      By submitting, you agree to be contacted by SST Auto regarding your vehicle valuation.
                    </p>
                    <div className="flex gap-3 mt-6">
                      <button type="button" onClick={() => setStep(3)} className="px-5 py-3 border border-[#e2e8f0] text-[#64748b] rounded-xl text-sm" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>Back</button>
                      <button type="submit" className="flex items-center gap-2 bg-[#e11d2e] hover:bg-[#c01727] text-white px-6 py-3 rounded-xl text-sm transition-all" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>
                        Submit for Valuation <ArrowRight size={15} />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-[#0a0a0a] rounded-2xl p-6 text-white">
              <h3 className="text-white mb-4" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.1rem' }}>
                Why Sell to SST Auto?
              </h3>
              <div className="space-y-4">
                {whySell.map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <div className="w-5 h-5 bg-[#e11d2e] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
                        <path d="M1 3.5L3.5 6L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white text-sm" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>{item.title}</p>
                      <p className="text-white/50 text-xs mt-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#e2e8f0] p-6">
              <h3 className="text-[#0a0a0a] mb-3" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1rem' }}>
                Prefer to Call?
              </h3>
              <p className="text-[#64748b] text-sm mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                Speak directly with our valuation team for an instant estimate over the phone.
              </p>
              <a href="tel:+94112345678" className="flex items-center justify-center gap-2 w-full bg-[#0a0a0a] hover:bg-[#1a1a1a] text-white py-3 rounded-xl text-sm transition-colors" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>
                +94 11 234 5678
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
