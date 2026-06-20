import { useState, useMemo } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Calculator, TrendingDown, DollarSign, Clock, MessageCircle } from 'lucide-react';
import { formatPrice } from '../data/vehicles';

const RATE = 0.17;

export default function FinanceCalculatorPage() {
  const [vehiclePrice, setVehiclePrice] = useState(12000000);
  const [deposit, setDeposit] = useState(30);
  const [term, setTerm] = useState(48);

  const financeAmount = vehiclePrice * (1 - deposit / 100);
  const depositAmount = vehiclePrice * (deposit / 100);
  const monthlyRate = RATE / 12;
  const monthly = financeAmount > 0
    ? (financeAmount * monthlyRate * Math.pow(1 + monthlyRate, term)) / (Math.pow(1 + monthlyRate, term) - 1)
    : 0;
  const totalRepayable = monthly * term;
  const totalInterest = totalRepayable - financeAmount;

  const chartData = useMemo(() => {
    let balance = financeAmount;
    return Array.from({ length: term }, (_, i) => {
      const interestPayment = balance * monthlyRate;
      const principalPayment = monthly - interestPayment;
      balance = Math.max(0, balance - principalPayment);
      return {
        month: i + 1,
        balance: Math.round(balance / 1000),
        principal: Math.round(principalPayment / 1000),
        interest: Math.round(interestPayment / 1000),
      };
    });
  }, [financeAmount, monthly, monthlyRate, term]);

  const summaryCards = [
    { icon: DollarSign, label: 'Monthly Payment', value: `LKR ${Math.round(monthly).toLocaleString()}`, sub: 'per month', color: '#e11d2e' },
    { icon: Calculator, label: 'Finance Amount', value: formatPrice(Math.round(financeAmount)), sub: `${100 - deposit}% of vehicle price`, color: '#0a0a0a' },
    { icon: TrendingDown, label: 'Total Interest', value: formatPrice(Math.round(totalInterest)), sub: `Over ${term} months`, color: '#7c3aed' },
    { icon: Clock, label: 'Total Repayable', value: formatPrice(Math.round(totalRepayable)), sub: 'Including all interest', color: '#059669' },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <div className="bg-[#0a0a0a] pt-24 pb-12">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-px bg-[#e11d2e]" />
            <span className="text-[#e11d2e] text-xs" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Finance Tools
            </span>
          </div>
          <h1 className="text-white" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, letterSpacing: '-0.03em', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Finance Calculator
          </h1>
          <p className="text-white/50 mt-3" style={{ fontFamily: 'Inter, sans-serif' }}>
            Estimate your monthly payments and total cost. Based on current market rates.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Controls */}
          <div className="lg:col-span-1 space-y-5">
            <div className="bg-white rounded-2xl border border-[#e2e8f0] p-5 sm:p-6">
              <h2 className="text-[#0a0a0a] mb-5" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.1rem' }}>
                Loan Parameters
              </h2>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm text-[#374151]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Vehicle Price</label>
                    <span className="text-sm text-[#0a0a0a]" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>{formatPrice(vehiclePrice)}</span>
                  </div>
                  <input
                    type="range"
                    min={2000000}
                    max={50000000}
                    step={500000}
                    value={vehiclePrice}
                    onChange={(e) => setVehiclePrice(Number(e.target.value))}
                    className="w-full accent-[#e11d2e]"
                  />
                  <div className="flex justify-between text-xs text-[#94a3b8] mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <span>LKR 2M</span>
                    <span>LKR 50M</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm text-[#374151]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Deposit</label>
                    <span className="text-sm text-[#0a0a0a]" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>{deposit}% — {formatPrice(depositAmount)}</span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={60}
                    step={5}
                    value={deposit}
                    onChange={(e) => setDeposit(Number(e.target.value))}
                    className="w-full accent-[#e11d2e]"
                  />
                  <div className="flex justify-between text-xs text-[#94a3b8] mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <span>10%</span>
                    <span>60%</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm text-[#374151]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Loan Term</label>
                    <span className="text-sm text-[#0a0a0a]" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>{term} months ({term / 12} years)</span>
                  </div>
                  <input
                    type="range"
                    min={12}
                    max={60}
                    step={6}
                    value={term}
                    onChange={(e) => setTerm(Number(e.target.value))}
                    className="w-full accent-[#e11d2e]"
                  />
                  <div className="flex justify-between text-xs text-[#94a3b8] mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <span>12 mo</span>
                    <span>60 mo</span>
                  </div>
                </div>

                <div className="p-3 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-[#64748b]" style={{ fontFamily: 'Inter, sans-serif' }}>Interest Rate (p.a.)</span>
                    <span className="text-sm text-[#0a0a0a]" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>{(RATE * 100).toFixed(0)}% (indicative)</span>
                  </div>
                  <p className="text-xs text-[#94a3b8] mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Actual rate depends on lender and credit profile.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick input */}
            <div className="bg-white rounded-2xl border border-[#e2e8f0] p-5 sm:p-6">
              <h3 className="text-[#0a0a0a] mb-3 sm:mb-4" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '0.95rem' }}>
                Enter Price Directly
              </h3>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#64748b] text-sm" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>LKR</span>
                <input
                  type="number"
                  value={vehiclePrice}
                  onChange={(e) => setVehiclePrice(Math.min(50000000, Math.max(2000000, Number(e.target.value))))}
                  className="w-full pl-14 pr-4 py-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm text-[#0a0a0a] focus:outline-none focus:border-[#e11d2e]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>
            </div>

            <div className="bg-[#0a0a0a] rounded-2xl p-5 sm:p-6 text-white">
              <p className="text-white text-sm mb-2 sm:mb-3" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>
                Ready to apply for finance?
              </p>
              <p className="text-white/50 text-xs mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                Our finance team works with 12+ lenders to secure the best rate for you.
              </p>
              <a
                href="https://wa.me/94771234567?text=Hi%2C%20I've%20used%20the%20finance%20calculator%20and%20would%20like%20to%20apply%20for%20vehicle%20financing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#25d366] hover:bg-[#1ea855] text-white py-3 rounded-xl text-sm transition-colors"
                style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
              >
                <MessageCircle size={16} />
                Apply via WhatsApp
              </a>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-2 space-y-6">
            {/* Summary cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {summaryCards.map(({ icon: Icon, label, value, sub, color }) => (
                <div key={label} className="bg-white rounded-2xl border border-[#e2e8f0] p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${color}15` }}>
                      <Icon size={16} style={{ color }} />
                    </div>
                    <span className="text-xs text-[#64748b]" style={{ fontFamily: 'Inter, sans-serif' }}>{label}</span>
                  </div>
                  <p className="text-[#0a0a0a]" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '1.25rem', letterSpacing: '-0.02em' }}>
                    {value}
                  </p>
                  <p className="text-xs text-[#94a3b8] mt-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>{sub}</p>
                </div>
              ))}
            </div>

            {/* Loan balance chart */}
            <div className="bg-white rounded-2xl border border-[#e2e8f0] p-5 sm:p-6">
              <h3 className="text-[#0a0a0a] mb-1" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: 'clamp(1rem, 2.5vw, 1.1rem)' }}>
                Remaining Balance Over Time
              </h3>
              <p className="text-[#64748b] text-xs mb-4 sm:mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>LKR (thousands)</p>
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={chartData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                  <defs>
                    <linearGradient id="balanceGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#e11d2e" stopOpacity={0.15} />
                      <stop offset="95%" stopColor="#e11d2e" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="month" tick={{ fontSize: 11, fontFamily: 'Inter, sans-serif', fill: '#94a3b8' }} tickLine={false} axisLine={false} />
                  <YAxis tick={{ fontSize: 11, fontFamily: 'Inter, sans-serif', fill: '#94a3b8' }} tickLine={false} axisLine={false} />
                  <Tooltip
                    contentStyle={{ background: '#0a0a0a', border: 'none', borderRadius: '12px', color: '#fff', fontSize: '12px', fontFamily: 'Outfit, sans-serif' }}
                    formatter={(value) => [`LKR ${Number(value).toLocaleString()}K`, 'Balance']}
                    labelFormatter={(label) => `Month ${label}`}
                  />
                  <Area type="monotone" dataKey="balance" stroke="#e11d2e" strokeWidth={2} fill="url(#balanceGradient)" dot={false} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Monthly breakdown chart */}
            <div className="bg-white rounded-2xl border border-[#e2e8f0] p-5 sm:p-6">
              <h3 className="text-[#0a0a0a] mb-3 sm:mb-4" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: 'clamp(1rem, 2.5vw, 1.1rem)' }}>
                Monthly Breakdown Summary
              </h3>
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                {[
                  { label: 'Monthly Payment', value: `LKR ${Math.round(monthly).toLocaleString()}`, pct: null },
                  { label: 'Total Principal', value: formatPrice(Math.round(financeAmount)), pct: Math.round((financeAmount / totalRepayable) * 100) },
                  { label: 'Total Interest', value: formatPrice(Math.round(totalInterest)), pct: Math.round((totalInterest / totalRepayable) * 100) },
                ].map(({ label, value, pct }) => (
                  <div key={label} className="text-center p-4 bg-[#f8fafc] rounded-xl">
                    <p className="text-xs text-[#64748b] mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>{label}</p>
                    <p className="text-[#0a0a0a] text-sm" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}>{value}</p>
                    {pct !== null && <p className="text-xs text-[#94a3b8] mt-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>{pct}% of total</p>}
                  </div>
                ))}
              </div>

              {/* Principal vs Interest bar */}
              <div className="mt-4">
                <div className="flex text-xs text-[#64748b] mb-2 gap-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-[#0a0a0a] inline-block" /> Principal</span>
                  <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-[#e11d2e] inline-block" /> Interest</span>
                </div>
                <div className="h-4 bg-[#f1f5f9] rounded-full overflow-hidden flex">
                  <div
                    className="h-full bg-[#0a0a0a] transition-all duration-500"
                    style={{ width: `${(financeAmount / totalRepayable) * 100}%` }}
                  />
                  <div className="h-full bg-[#e11d2e] flex-1" />
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-[#94a3b8] text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
              This calculator provides an indicative estimate only. Actual rates and payments vary by lender, credit profile, and loan conditions.
              All figures are in Sri Lankan Rupees (LKR). Contact our finance team for a personalised quote.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
