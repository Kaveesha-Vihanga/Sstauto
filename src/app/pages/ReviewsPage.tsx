import { useState } from 'react';
import { Star, ThumbsUp, CheckCircle, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

const allReviews = [
  { id: 1, name: 'Ruwan Jayasinghe', location: 'Colombo 07', rating: 5, vehicle: 'BMW 3 Series 2023', date: 'March 2024', text: 'SST Auto made buying my first luxury car completely stress-free. The team was knowledgeable, transparent about pricing, and handled all the paperwork. My 330i was exactly as described — immaculate.', helpful: 12, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop', verified: true },
  { id: 2, name: 'Dilhani Perera', location: 'Kandy', rating: 5, vehicle: 'Toyota Camry Hybrid 2023', date: 'February 2024', text: 'I was sceptical about buying a car from a dealer I hadn\'t visited before, but SST Auto\'s detailed photos and honest descriptions made me confident. Drove from Kandy and the car was even better than expected!', helpful: 8, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop', verified: true },
  { id: 3, name: 'Asanka Fernando', location: 'Galle', rating: 5, vehicle: 'Honda CR-V Hybrid 2023', date: 'January 2024', text: 'The finance team secured me a rate that three banks had refused to match. They went above and beyond. Traded in my old car at a fair price and drove away in my new CR-V the same day. Exceptional service!', helpful: 15, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop', verified: true },
  { id: 4, name: 'Chamari Silva', location: 'Colombo 05', rating: 5, vehicle: 'Nissan X-Trail 2023', date: 'January 2024', text: 'Absolutely love my new X-Trail. SST Auto\'s 100-point inspection gave me complete peace of mind. The team answered every question I had patiently. Will definitely be back for my next upgrade!', helpful: 6, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop', verified: true },
  { id: 5, name: 'Nimal Bandara', location: 'Negombo', rating: 4, vehicle: 'Toyota Prius 2023', date: 'December 2023', text: 'Very professional team and excellent vehicle selection. The online photos are accurate which is refreshing in this industry. Only minor feedback: the process took slightly longer than expected. Overall highly recommend SST Auto.', helpful: 4, avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop', verified: true },
  { id: 6, name: 'Priya Wickramasinghe', location: 'Colombo 03', rating: 5, vehicle: 'Mercedes-Benz C200 2022', date: 'November 2023', text: 'Purchased my Mercedes C200 from SST Auto and couldn\'t be happier. The car was as pristine as they described, documents were all in order, and the team handled the entire transfer process. Top-tier service.', helpful: 11, avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop', verified: true },
  { id: 7, name: 'Kamal Rajapaksa', location: 'Matara', rating: 5, vehicle: 'Suzuki Swift Hybrid 2023', date: 'October 2023', text: 'SST Auto went out of their way to help me get my first car. As someone who knows little about cars, I needed someone trustworthy. They explained everything clearly, never tried to oversell, and found me the perfect Swift within my budget.', helpful: 9, avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop', verified: false },
  { id: 8, name: 'Sanjeewa De Silva', location: 'Kurunegala', rating: 4, vehicle: 'Honda Civic RS 2023', date: 'September 2023', text: 'Great experience overall. The Civic was in exactly the condition listed, documentation was complete, and the finance arrangement was sorted quickly. Would recommend SST Auto to anyone looking for a quality pre-owned vehicle.', helpful: 3, avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&h=80&fit=crop', verified: true },
];

const ratingStats = [
  { stars: 5, count: 720, pct: 85 },
  { stars: 4, count: 102, pct: 12 },
  { stars: 3, count: 21, pct: 2.5 },
  { stars: 2, count: 4, pct: 0.5 },
  { stars: 1, count: 0, pct: 0 },
];

export default function ReviewsPage() {
  const [filterRating, setFilterRating] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formRating, setFormRating] = useState(5);
  const [hoveredRating, setHoveredRating] = useState(0);

  const filtered = filterRating ? allReviews.filter((r) => r.rating === filterRating) : allReviews;

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <div className="bg-[#0a0a0a] pt-24 pb-12">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-px bg-[#e11d2e]" />
            <span className="text-[#e11d2e] text-xs" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Customer Reviews
            </span>
          </div>
          <h1 className="text-white" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, letterSpacing: '-0.03em', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            What Our Customers Say
          </h1>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="space-y-5">
            {/* Overall rating */}
            <div className="bg-white rounded-2xl border border-[#e2e8f0] p-6 text-center">
              <p className="text-[#0a0a0a]" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '4rem', letterSpacing: '-0.05em', lineHeight: 1 }}>4.9</p>
              <div className="flex justify-center gap-1 my-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-[#64748b] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>847 verified reviews</p>
            </div>

            {/* Rating breakdown */}
            <div className="bg-white rounded-2xl border border-[#e2e8f0] p-6">
              <h3 className="text-[#0a0a0a] mb-4" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.95rem' }}>Rating Breakdown</h3>
              <div className="space-y-2">
                {ratingStats.map(({ stars, count, pct }) => (
                  <button
                    key={stars}
                    onClick={() => setFilterRating(filterRating === stars ? null : stars)}
                    className={`w-full flex items-center gap-3 group ${filterRating === stars ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}
                  >
                    <span className="text-xs text-[#64748b] w-4 shrink-0 text-right" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>{stars}</span>
                    <Star size={12} className="text-amber-400 fill-amber-400 shrink-0" />
                    <div className="flex-1 h-2 bg-[#f1f5f9] rounded-full overflow-hidden">
                      <div className="h-full bg-amber-400 rounded-full transition-all" style={{ width: `${pct}%` }} />
                    </div>
                    <span className="text-xs text-[#94a3b8] w-6 text-right shrink-0" style={{ fontFamily: 'Inter, sans-serif' }}>{count}</span>
                  </button>
                ))}
              </div>
              {filterRating && (
                <button onClick={() => setFilterRating(null)} className="mt-3 text-xs text-[#e11d2e] w-full text-center" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>
                  Clear filter
                </button>
              )}
            </div>

            {/* Write review CTA */}
            <div className="bg-[#0a0a0a] rounded-2xl p-6 text-white">
              <h3 className="text-white mb-2" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.95rem' }}>
                Purchased from SST Auto?
              </h3>
              <p className="text-white/50 text-xs mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Share your experience to help others make informed decisions.</p>
              <button
                onClick={() => setShowForm(true)}
                className="w-full bg-[#e11d2e] hover:bg-[#c01727] text-white py-3 rounded-xl text-sm transition-colors"
                style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
              >
                Write a Review
              </button>
            </div>
          </div>

          {/* Reviews list */}
          <div className="lg:col-span-3 space-y-4">
            {/* Filters bar */}
            <div className="flex items-center justify-between">
              <p className="text-sm text-[#64748b]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Showing {filtered.length} of {allReviews.length} reviews
              </p>
            </div>

            {filtered.map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="bg-white rounded-2xl border border-[#e2e8f0] p-6"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <img src={review.avatar} alt={review.name} className="w-11 h-11 rounded-full object-cover" />
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-[#0a0a0a] text-sm" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>{review.name}</p>
                        {review.verified && (
                          <span className="flex items-center gap-1 text-xs text-[#059669]" style={{ fontFamily: 'Inter, sans-serif' }}>
                            <CheckCircle size={11} /> Verified
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#94a3b8]" style={{ fontFamily: 'Inter, sans-serif' }}>{review.location} · {review.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={14} className={j < review.rating ? 'text-amber-400 fill-amber-400' : 'text-[#e2e8f0]'} />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-[#e11d2e] mb-2" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>{review.vehicle}</p>
                <p className="text-[#374151] text-sm leading-relaxed mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  "{review.text}"
                </p>
                <div className="flex items-center gap-2 text-xs text-[#94a3b8]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <ThumbsUp size={12} />
                  <span>{review.helpful} people found this helpful</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Write review modal */}
      {showForm && !submitted && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl"
          >
            <h2 className="text-[#0a0a0a] mb-6" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.25rem' }}>
              Write a Review
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-xs text-[#64748b] mb-2" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Your Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((r) => (
                    <button
                      key={r}
                      onClick={() => setFormRating(r)}
                      onMouseEnter={() => setHoveredRating(r)}
                      onMouseLeave={() => setHoveredRating(0)}
                    >
                      <Star size={28} className={`transition-colors ${r <= (hoveredRating || formRating) ? 'text-amber-400 fill-amber-400' : 'text-[#e2e8f0]'}`} />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs text-[#64748b] mb-1.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Vehicle Purchased</label>
                <input type="text" placeholder="e.g. Toyota Camry 2023" className="w-full px-3 py-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm text-[#0a0a0a] focus:outline-none focus:border-[#e11d2e]" style={{ fontFamily: 'Inter, sans-serif' }} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-[#64748b] mb-1.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Your Name</label>
                  <input type="text" placeholder="Full name" className="w-full px-3 py-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm text-[#0a0a0a] focus:outline-none focus:border-[#e11d2e]" style={{ fontFamily: 'Inter, sans-serif' }} />
                </div>
                <div>
                  <label className="block text-xs text-[#64748b] mb-1.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Location</label>
                  <input type="text" placeholder="e.g. Colombo" className="w-full px-3 py-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm text-[#0a0a0a] focus:outline-none focus:border-[#e11d2e]" style={{ fontFamily: 'Inter, sans-serif' }} />
                </div>
              </div>
              <div>
                <label className="block text-xs text-[#64748b] mb-1.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Your Review</label>
                <textarea rows={4} placeholder="Share your experience with SST Auto..." className="w-full px-3 py-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm text-[#0a0a0a] focus:outline-none focus:border-[#e11d2e] resize-none" style={{ fontFamily: 'Inter, sans-serif' }} />
              </div>
              <div className="flex gap-3">
                <button onClick={() => setShowForm(false)} className="flex-1 border border-[#e2e8f0] text-[#64748b] py-3 rounded-xl text-sm" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>Cancel</button>
                <button onClick={() => { setShowForm(false); setSubmitted(true); }} className="flex-1 bg-[#e11d2e] hover:bg-[#c01727] text-white py-3 rounded-xl text-sm transition-colors" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>Submit Review</button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {submitted && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-2xl p-8 max-w-sm w-full text-center">
            <div className="w-14 h-14 bg-[#f0fdf4] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={26} className="text-[#16a34a]" />
            </div>
            <h3 className="text-[#0a0a0a] mb-2" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}>Thank You!</h3>
            <p className="text-[#64748b] text-sm mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>Your review has been submitted and will be published after verification.</p>
            <button onClick={() => setSubmitted(false)} className="w-full bg-[#e11d2e] text-white py-3 rounded-xl text-sm" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>Close</button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
