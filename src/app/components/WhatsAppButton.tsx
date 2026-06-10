import { useState } from 'react';
import { MessageCircle, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl border border-black/5 overflow-hidden w-72"
          >
            {/* Header */}
            <div className="bg-[#25d366] px-4 py-4">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white text-sm" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>
                      SST Auto
                    </p>
                    <p className="text-white/80 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Typically replies within minutes
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Chat bubble */}
            <div className="p-4 bg-[#f0f0f0]">
              <div className="bg-white rounded-xl rounded-tl-sm p-3 shadow-sm max-w-[85%]">
                <p className="text-[#0a0a0a] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  👋 Hi! Welcome to SST Auto. How can we help you today?
                </p>
                <p className="text-[#64748b] text-xs mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Just now
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="p-4 space-y-2">
              <a
                href="https://wa.me/94771234567?text=Hello%20SST%20Auto%2C%20I'm%20interested%20in%20viewing%20your%20vehicles."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full bg-[#25d366] hover:bg-[#1ea855] text-white px-4 py-3 rounded-xl text-sm font-semibold transition-colors"
                style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </a>
              <a
                href="tel:+94112345678"
                className="flex items-center gap-3 w-full bg-[#0a0a0a] hover:bg-[#1a1a1a] text-white px-4 py-3 rounded-xl text-sm font-semibold transition-colors"
                style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
              >
                <Phone size={16} />
                Call Us Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 bg-[#25d366] hover:bg-[#1ea855] text-white rounded-full shadow-2xl shadow-green-500/30 flex items-center justify-center transition-colors"
        aria-label="Contact via WhatsApp"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X size={22} />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <MessageCircle size={22} />
            </motion.div>
          )}
        </AnimatePresence>
        {/* Pulse ring */}
        {!open && (
          <span className="absolute inset-0 rounded-full bg-[#25d366] animate-ping opacity-30" />
        )}
      </motion.button>
    </div>
  );
}
