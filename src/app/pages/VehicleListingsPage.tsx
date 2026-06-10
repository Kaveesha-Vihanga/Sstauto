import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { Search, SlidersHorizontal, X, ChevronDown, Grid3X3, List } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { vehicles, brands, fuelTypes, transmissionTypes, bodyTypes, formatPrice } from '../data/vehicles';
import VehicleCard from '../components/VehicleCard';
import type { Vehicle } from '../data/vehicles';

const sortOptions = [
  { value: 'newest', label: 'Newest First' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'mileage-asc', label: 'Lowest Mileage' },
  { value: 'year-desc', label: 'Latest Year' },
];

function VehicleListItem({ vehicle }: { vehicle: Vehicle }) {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
      <a href={`/vehicles/${vehicle.id}`} className="group block">
        <div className="bg-white rounded-2xl border border-black/5 overflow-hidden hover:shadow-lg transition-all duration-300 flex">
          <div className="w-48 sm:w-64 shrink-0 bg-[#f8fafc] overflow-hidden">
            <img
              src={vehicle.images[0]}
              alt={`${vehicle.brand} ${vehicle.model}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="flex-1 p-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-[#e11d2e] text-xs mb-1" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  {vehicle.brand}
                </p>
                <h3 className="text-[#0a0a0a]" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1.2rem', letterSpacing: '-0.02em' }}>
                  {vehicle.year} {vehicle.model} {vehicle.variant}
                </h3>
              </div>
              <p className="text-[#0a0a0a]" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.02em' }}>
                {formatPrice(vehicle.price)}
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mb-4">
              {[
                `${vehicle.mileage.toLocaleString()} km`,
                vehicle.fuel,
                vehicle.transmission,
                vehicle.color,
              ].map((spec) => (
                <span key={spec} className="text-sm text-[#64748b]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {spec}
                </span>
              ))}
            </div>
            <p className="text-[#64748b] text-sm line-clamp-2 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              {vehicle.description}
            </p>
            <div className="flex gap-3">
              <a
                href={`/vehicles/${vehicle.id}`}
                className="px-5 py-2 bg-[#0a0a0a] hover:bg-[#1a1a1a] text-white text-sm rounded-lg transition-colors"
                style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
              >
                View Details
              </a>
              <a
                href={`https://wa.me/94771234567?text=Hi%2C%20I'm%20interested%20in%20the%20${vehicle.year}%20${vehicle.brand}%20${vehicle.model}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-[#25d366] hover:bg-[#1ea855] text-white text-sm rounded-lg transition-colors"
                style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
}

export default function VehicleListingsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('newest');

  const [filters, setFilters] = useState({
    q: searchParams.get('q') || '',
    brand: searchParams.get('brand') || '',
    fuel: searchParams.get('fuel') || '',
    transmission: '',
    bodyType: '',
    minPrice: '',
    maxPrice: '',
    minYear: '',
    maxYear: '',
  });

  useEffect(() => {
    setFilters((f) => ({
      ...f,
      q: searchParams.get('q') || '',
      brand: searchParams.get('brand') || '',
      fuel: searchParams.get('fuel') || '',
    }));
  }, [searchParams]);

  const filtered = useMemo(() => {
    let result = [...vehicles];
    if (filters.q) {
      const q = filters.q.toLowerCase();
      result = result.filter(
        (v) =>
          v.brand.toLowerCase().includes(q) ||
          v.model.toLowerCase().includes(q) ||
          v.variant.toLowerCase().includes(q) ||
          v.color.toLowerCase().includes(q)
      );
    }
    if (filters.brand) result = result.filter((v) => v.brand === filters.brand);
    if (filters.fuel) result = result.filter((v) => v.fuel === filters.fuel);
    if (filters.transmission) result = result.filter((v) => v.transmission === filters.transmission);
    if (filters.bodyType) result = result.filter((v) => v.bodyType === filters.bodyType);
    if (filters.minPrice) result = result.filter((v) => v.price >= Number(filters.minPrice));
    if (filters.maxPrice) result = result.filter((v) => v.price <= Number(filters.maxPrice));
    if (filters.minYear) result = result.filter((v) => v.year >= Number(filters.minYear));
    if (filters.maxYear) result = result.filter((v) => v.year <= Number(filters.maxYear));

    switch (sortBy) {
      case 'price-asc': result.sort((a, b) => a.price - b.price); break;
      case 'price-desc': result.sort((a, b) => b.price - a.price); break;
      case 'mileage-asc': result.sort((a, b) => a.mileage - b.mileage); break;
      case 'year-desc': result.sort((a, b) => b.year - a.year); break;
      default: result.sort((a, b) => b.year - a.year);
    }
    return result;
  }, [filters, sortBy]);

  const activeFilterCount = Object.values(filters).filter(Boolean).length;

  const clearFilter = (key: keyof typeof filters) => {
    setFilters((f) => ({ ...f, [key]: '' }));
  };

  const clearAll = () => {
    setFilters({ q: '', brand: '', fuel: '', transmission: '', bodyType: '', minPrice: '', maxPrice: '', minYear: '', maxYear: '' });
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Header */}
      <div className="bg-[#0a0a0a] pt-24 pb-10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-px bg-[#e11d2e]" />
            <span className="text-[#e11d2e] text-xs" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Browse Inventory
            </span>
          </div>
          <h1 className="text-white" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, letterSpacing: '-0.03em', fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            {filters.brand ? `${filters.brand} Vehicles` : 'All Vehicles'}
          </h1>
          <p className="text-white/50 mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>
            {filtered.length} vehicles available
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          {/* Search */}
          <div className="flex-1 relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94a3b8]" />
            <input
              type="text"
              placeholder="Search vehicles…"
              value={filters.q}
              onChange={(e) => setFilters((f) => ({ ...f, q: e.target.value }))}
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-[#e2e8f0] rounded-xl text-sm text-[#0a0a0a] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#e11d2e]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            />
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none pl-4 pr-8 py-2.5 bg-white border border-[#e2e8f0] rounded-xl text-sm text-[#0a0a0a] focus:outline-none focus:border-[#e11d2e] cursor-pointer"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {sortOptions.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94a3b8] pointer-events-none" />
          </div>

          {/* Filter button */}
          <button
            onClick={() => setFiltersOpen(!filtersOpen)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm transition-colors ${filtersOpen || activeFilterCount > 0 ? 'bg-[#0a0a0a] text-white border-[#0a0a0a]' : 'bg-white text-[#0a0a0a] border-[#e2e8f0] hover:border-[#0a0a0a]'}`}
            style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
          >
            <SlidersHorizontal size={15} />
            Filters
            {activeFilterCount > 0 && (
              <span className="bg-[#e11d2e] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>
                {activeFilterCount}
              </span>
            )}
          </button>

          {/* View toggle */}
          <div className="flex border border-[#e2e8f0] rounded-xl overflow-hidden bg-white">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2.5 ${viewMode === 'grid' ? 'bg-[#0a0a0a] text-white' : 'text-[#64748b] hover:text-[#0a0a0a]'} transition-colors`}
            >
              <Grid3X3 size={16} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2.5 ${viewMode === 'list' ? 'bg-[#0a0a0a] text-white' : 'text-[#64748b] hover:text-[#0a0a0a]'} transition-colors`}
            >
              <List size={16} />
            </button>
          </div>
        </div>

        {/* Filter Panel */}
        <AnimatePresence>
          {filtersOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden mb-6"
            >
              <div className="bg-white rounded-2xl border border-[#e2e8f0] p-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                  <div>
                    <label className="block text-xs text-[#64748b] mb-1.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Brand</label>
                    <select value={filters.brand} onChange={(e) => setFilters((f) => ({ ...f, brand: e.target.value }))} className="w-full px-3 py-2 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm text-[#0a0a0a] focus:outline-none focus:border-[#e11d2e]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <option value="">All Brands</option>
                      {brands.map((b) => <option key={b}>{b}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-[#64748b] mb-1.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Fuel Type</label>
                    <select value={filters.fuel} onChange={(e) => setFilters((f) => ({ ...f, fuel: e.target.value }))} className="w-full px-3 py-2 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm text-[#0a0a0a] focus:outline-none focus:border-[#e11d2e]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <option value="">All Types</option>
                      {fuelTypes.map((f) => <option key={f}>{f}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-[#64748b] mb-1.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Transmission</label>
                    <select value={filters.transmission} onChange={(e) => setFilters((f) => ({ ...f, transmission: e.target.value }))} className="w-full px-3 py-2 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm text-[#0a0a0a] focus:outline-none focus:border-[#e11d2e]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <option value="">All</option>
                      {transmissionTypes.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-[#64748b] mb-1.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Body Type</label>
                    <select value={filters.bodyType} onChange={(e) => setFilters((f) => ({ ...f, bodyType: e.target.value }))} className="w-full px-3 py-2 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm text-[#0a0a0a] focus:outline-none focus:border-[#e11d2e]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <option value="">All Types</option>
                      {bodyTypes.map((b) => <option key={b}>{b}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-[#64748b] mb-1.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Min Year</label>
                    <select value={filters.minYear} onChange={(e) => setFilters((f) => ({ ...f, minYear: e.target.value }))} className="w-full px-3 py-2 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm text-[#0a0a0a] focus:outline-none focus:border-[#e11d2e]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <option value="">Any Year</option>
                      {Array.from({ length: 10 }, (_, i) => 2024 - i).map((y) => <option key={y}>{y}</option>)}
                    </select>
                  </div>
                </div>
                {activeFilterCount > 0 && (
                  <div className="mt-4 pt-4 border-t border-[#f1f5f9] flex items-center gap-3">
                    <p className="text-xs text-[#64748b]" style={{ fontFamily: 'Inter, sans-serif' }}>Active filters:</p>
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(filters).map(([key, val]) =>
                        val ? (
                          <span
                            key={key}
                            className="flex items-center gap-1.5 text-xs bg-[#0a0a0a] text-white px-3 py-1 rounded-full"
                            style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600 }}
                          >
                            {val}
                            <button onClick={() => clearFilter(key as keyof typeof filters)}>
                              <X size={11} />
                            </button>
                          </span>
                        ) : null
                      )}
                    </div>
                    <button
                      onClick={clearAll}
                      className="ml-auto text-xs text-[#e11d2e] hover:text-[#c01727]"
                      style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
                    >
                      Clear All
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results */}
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <div className="w-16 h-16 bg-[#f1f5f9] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Search size={24} className="text-[#94a3b8]" />
            </div>
            <h3 className="text-[#0a0a0a] mb-2" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>
              No vehicles found
            </h3>
            <p className="text-[#64748b] text-sm mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Try adjusting your filters or search terms.
            </p>
            <button
              onClick={clearAll}
              className="bg-[#e11d2e] text-white px-6 py-2.5 rounded-xl text-sm"
              style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
            >
              Clear Filters
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((v, i) => (
              <VehicleCard key={v.id} vehicle={v} index={i} />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filtered.map((v) => (
              <VehicleListItem key={v.id} vehicle={v} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
