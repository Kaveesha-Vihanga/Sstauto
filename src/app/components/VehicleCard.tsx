import { Link } from 'react-router';
import { Fuel, Gauge, Calendar, Zap, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import type { Vehicle } from '../data/vehicles';
import { formatPrice, formatMileage } from '../data/vehicles';

interface VehicleCardProps {
  vehicle: Vehicle;
  index?: number;
}

const fuelIcon = (fuel: string) => {
  if (fuel === 'Electric') return <Zap size={12} />;
  return <Fuel size={12} />;
};

const fuelColor = (fuel: string) => {
  switch (fuel) {
    case 'Hybrid': return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    case 'Electric': return 'bg-blue-50 text-blue-700 border-blue-200';
    case 'Diesel': return 'bg-amber-50 text-amber-700 border-amber-200';
    default: return 'bg-[#f8fafc] text-[#64748b] border-[#e2e8f0]';
  }
};

export default function VehicleCard({ vehicle, index = 0 }: VehicleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link to={`/vehicles/${vehicle.id}`} className="group block">
        <div className="bg-white rounded-2xl border border-black/5 overflow-hidden hover:shadow-xl hover:shadow-black/10 transition-all duration-300 hover:-translate-y-1">
          {/* Image */}
          <div className="relative overflow-hidden bg-[#f8fafc] aspect-[4/3]">
            <img
              src={vehicle.images[0]}
              alt={`${vehicle.year} ${vehicle.brand} ${vehicle.model}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-1.5">
              {vehicle.badge && (
                <span
                  className="text-white text-xs px-2.5 py-1 rounded-full"
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: 700,
                    background: vehicle.badge === 'Hot Deal' ? '#e11d2e' : vehicle.badge === 'New Arrival' ? '#0a0a0a' : vehicle.badge === 'Nearly New' ? '#059669' : '#7c3aed',
                    fontSize: '0.7rem',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                  }}
                >
                  {vehicle.badge}
                </span>
              )}
              {vehicle.isNew && (
                <span
                  className="bg-[#e11d2e] text-white text-xs px-2.5 py-1 rounded-full"
                  style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}
                >
                  New In
                </span>
              )}
            </div>
            {/* Fuel type badge */}
            <div className="absolute top-3 right-3">
              <span
                className={`flex items-center gap-1 text-xs px-2.5 py-1 rounded-full border ${fuelColor(vehicle.fuel)}`}
                style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: '0.7rem' }}
              >
                {fuelIcon(vehicle.fuel)}
                {vehicle.fuel}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            {/* Brand + Model */}
            <div className="mb-3">
              <p className="text-[#e11d2e] text-xs mb-0.5" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                {vehicle.brand}
              </p>
              <h3 className="text-[#0a0a0a]" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                {vehicle.model}
              </h3>
              <p className="text-[#64748b] text-sm mt-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>
                {vehicle.variant}
              </p>
            </div>

            {/* Specs row */}
            <div className="flex items-center gap-4 mb-4 pb-4 border-b border-[#f1f5f9]">
              <div className="flex items-center gap-1.5 text-[#64748b]">
                <Calendar size={13} />
                <span className="text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>{vehicle.year}</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#64748b]">
                <Gauge size={13} />
                <span className="text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>{formatMileage(vehicle.mileage)}</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#64748b]">
                <span className="text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>{vehicle.transmission}</span>
              </div>
            </div>

            {/* Price + CTA */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-[#64748b] mb-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>Price</p>
                <p className="text-[#0a0a0a]" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.15rem', letterSpacing: '-0.02em' }}>
                  {formatPrice(vehicle.price)}
                </p>
              </div>
              <a
                href={`https://wa.me/94771234567?text=Hi%2C%20I'm%20interested%20in%20the%20${vehicle.year}%20${vehicle.brand}%20${vehicle.model}%20(ID%3A${vehicle.id})`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 bg-[#25d366] hover:bg-[#1ea855] text-white px-3 py-2 rounded-lg text-xs transition-colors"
                style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
              >
                <MessageCircle size={13} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
