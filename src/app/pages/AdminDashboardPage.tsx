import { useState } from 'react';
import { Link } from 'react-router';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Car, Users, TrendingUp, DollarSign, Plus, Eye, Edit2, Trash2, Search, Bell, Settings, LogOut, ChevronRight, LayoutDashboard, FileText, Star, MessageSquare, BarChart2 } from 'lucide-react';
import { vehicles, formatPrice } from '../data/vehicles';
import { blogPosts } from '../data/blog';

const monthlySales = [
  { month: 'Jul', sales: 8, revenue: 72000000 },
  { month: 'Aug', sales: 12, revenue: 108000000 },
  { month: 'Sep', sales: 9, revenue: 81000000 },
  { month: 'Oct', sales: 15, revenue: 142000000 },
  { month: 'Nov', sales: 11, revenue: 99000000 },
  { month: 'Dec', sales: 18, revenue: 168000000 },
  { month: 'Jan', sales: 14, revenue: 126000000 },
  { month: 'Feb', sales: 16, revenue: 152000000 },
  { month: 'Mar', sales: 20, revenue: 185000000 },
  { month: 'Apr', sales: 17, revenue: 163000000 },
  { month: 'May', sales: 22, revenue: 204000000 },
  { month: 'Jun', sales: 19, revenue: 178000000 },
];

const brandDistribution = [
  { name: 'Toyota', value: 35, color: '#e11d2e' },
  { name: 'Honda', value: 22, color: '#0a0a0a' },
  { name: 'BMW', value: 18, color: '#64748b' },
  { name: 'Mercedes', value: 14, color: '#94a3b8' },
  { name: 'Others', value: 11, color: '#e2e8f0' },
];

const leads = [
  { id: 1, name: 'Ruwan Jayasinghe', phone: '+94 77 123 4567', vehicle: 'BMW 3 Series 2023', status: 'Hot', date: 'Today', source: 'WhatsApp' },
  { id: 2, name: 'Dilhani Perera', phone: '+94 71 234 5678', vehicle: 'Toyota Camry Hybrid', status: 'Warm', date: 'Yesterday', source: 'Website' },
  { id: 3, name: 'Asanka Fernando', phone: '+94 76 345 6789', vehicle: 'Honda CR-V Hybrid', status: 'Hot', date: 'Yesterday', source: 'WhatsApp' },
  { id: 4, name: 'Chamari Silva', phone: '+94 77 456 7890', vehicle: 'Nissan X-Trail', status: 'Cold', date: '2 days ago', source: 'Website' },
  { id: 5, name: 'Nimal Bandara', phone: '+94 71 567 8901', vehicle: 'Toyota Prius 2023', status: 'Warm', date: '3 days ago', source: 'Phone' },
];

const pendingReviews = [
  { id: 1, name: 'Kamal Rajapaksa', rating: 5, vehicle: 'Suzuki Swift Hybrid', date: '2h ago', preview: 'SST Auto went out of their way to help me...' },
  { id: 2, name: 'Sanjeewa De Silva', rating: 4, vehicle: 'Honda Civic RS', date: '5h ago', preview: 'Great experience overall. The Civic was in...' },
];

type AdminPage = 'dashboard' | 'vehicles' | 'leads' | 'reviews' | 'blog' | 'analytics';

const navItems: { id: AdminPage; label: string; icon: typeof LayoutDashboard }[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'vehicles', label: 'Vehicles', icon: Car },
  { id: 'leads', label: 'Leads', icon: Users },
  { id: 'reviews', label: 'Reviews', icon: Star },
  { id: 'blog', label: 'Blog', icon: FileText },
  { id: 'analytics', label: 'Analytics', icon: BarChart2 },
];

const statusColor = (status: string) => {
  if (status === 'Hot') return 'bg-red-100 text-red-700';
  if (status === 'Warm') return 'bg-amber-100 text-amber-700';
  return 'bg-blue-100 text-blue-700';
};

export default function AdminDashboardPage() {
  const [activePage, setActivePage] = useState<AdminPage>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const kpis = [
    { icon: Car, label: 'Active Listings', value: vehicles.length.toString(), change: '+2 this week', color: '#e11d2e' },
    { icon: Users, label: 'New Leads', value: '23', change: '+8 vs last week', color: '#059669' },
    { icon: DollarSign, label: 'Revenue (June)', value: 'LKR 178M', change: '+12% vs May', color: '#7c3aed' },
    { icon: TrendingUp, label: 'Avg. Sale Price', value: 'LKR 9.4M', change: '+5% vs last month', color: '#0284c7' },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] flex">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-60' : 'w-16'} bg-[#0a0a0a] flex flex-col transition-all duration-300 shrink-0`}>
        {/* Logo */}
        <div className="h-16 flex items-center px-4 border-b border-white/10">
          {sidebarOpen ? (
            <div className="flex items-center gap-1">
              <span className="text-white" style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.25rem', fontWeight: 800 }}>SST</span>
              <span className="text-[#e11d2e]" style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.25rem', fontWeight: 800 }}>Auto</span>
              <span className="ml-1 text-white/30 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>Admin</span>
            </div>
          ) : (
            <div className="w-8 h-8 bg-[#e11d2e] rounded-lg flex items-center justify-center">
              <span className="text-white text-xs" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}>S</span>
            </div>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4 overflow-y-auto">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActivePage(id)}
              className={`w-full flex items-center gap-3 px-4 py-3 transition-colors ${activePage === id ? 'bg-white/10 text-white border-r-2 border-[#e11d2e]' : 'text-white/50 hover:text-white hover:bg-white/5'}`}
            >
              <Icon size={18} className="shrink-0" />
              {sidebarOpen && <span className="text-sm" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600 }}>{label}</span>}
            </button>
          ))}
        </nav>

        {/* Bottom */}
        <div className="border-t border-white/10 p-4 space-y-2">
          <button className="w-full flex items-center gap-3 text-white/50 hover:text-white py-2 transition-colors">
            <Settings size={16} />
            {sidebarOpen && <span className="text-xs" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600 }}>Settings</span>}
          </button>
          <Link to="/" className="w-full flex items-center gap-3 text-white/50 hover:text-white py-2 transition-colors">
            <LogOut size={16} />
            {sidebarOpen && <span className="text-xs" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600 }}>View Site</span>}
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="h-16 bg-white border-b border-[#f1f5f9] flex items-center justify-between px-6 shrink-0">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-[#64748b] hover:text-[#0a0a0a] transition-colors">
              <LayoutDashboard size={18} />
            </button>
            <div className="relative hidden sm:block">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94a3b8]" />
              <input
                type="text"
                placeholder="Search…"
                className="pl-9 pr-4 py-2 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm text-[#0a0a0a] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#e11d2e] w-48"
                style={{ fontFamily: 'Inter, sans-serif' }}
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative text-[#64748b] hover:text-[#0a0a0a]">
              <Bell size={18} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#e11d2e] text-white text-xs rounded-full flex items-center justify-center" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>3</span>
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#e11d2e] rounded-full flex items-center justify-center">
                <span className="text-white text-xs" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}>A</span>
              </div>
              {sidebarOpen && <span className="text-sm text-[#0a0a0a] hidden sm:block" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600 }}>Admin</span>}
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto p-6">
          {activePage === 'dashboard' && (
            <div className="space-y-6">
              <div>
                <h1 className="text-[#0a0a0a]" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '1.5rem', letterSpacing: '-0.02em' }}>Dashboard</h1>
                <p className="text-[#64748b] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>Wednesday, 10 June 2026</p>
              </div>

              {/* KPIs */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {kpis.map(({ icon: Icon, label, value, change, color }) => (
                  <div key={label} className="bg-white rounded-2xl border border-[#e2e8f0] p-5">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${color}15` }}>
                        <Icon size={16} style={{ color }} />
                      </div>
                    </div>
                    <p className="text-[#0a0a0a]" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '1.5rem', letterSpacing: '-0.02em' }}>{value}</p>
                    <p className="text-[#64748b] text-xs mt-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>{label}</p>
                    <p className="text-xs text-[#059669] mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>{change}</p>
                  </div>
                ))}
              </div>

              {/* Charts row */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {/* Monthly sales line chart */}
                <div className="lg:col-span-2 bg-white rounded-2xl border border-[#e2e8f0] p-5">
                  <h3 className="text-[#0a0a0a] mb-4" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '0.95rem' }}>Monthly Vehicle Sales</h3>
                  <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={monthlySales} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                      <XAxis dataKey="month" tick={{ fontSize: 11, fontFamily: 'Inter, sans-serif', fill: '#94a3b8' }} tickLine={false} axisLine={false} />
                      <YAxis tick={{ fontSize: 11, fontFamily: 'Inter, sans-serif', fill: '#94a3b8' }} tickLine={false} axisLine={false} />
                      <Tooltip contentStyle={{ background: '#0a0a0a', border: 'none', borderRadius: '10px', color: '#fff', fontSize: '12px', fontFamily: 'Outfit, sans-serif' }} />
                      <Line type="monotone" dataKey="sales" stroke="#e11d2e" strokeWidth={2.5} dot={{ fill: '#e11d2e', r: 3 }} activeDot={{ r: 5 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                {/* Brand pie chart */}
                <div className="bg-white rounded-2xl border border-[#e2e8f0] p-5">
                  <h3 className="text-[#0a0a0a] mb-4" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '0.95rem' }}>Sales by Brand</h3>
                  <div className="flex items-center justify-center mb-3">
                    <ResponsiveContainer width="100%" height={150}>
                      <PieChart>
                        <Pie data={brandDistribution} cx="50%" cy="50%" innerRadius={40} outerRadius={65} dataKey="value" paddingAngle={2}>
                          {brandDistribution.map((entry, i) => (
                            <Cell key={`cell-${i}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip contentStyle={{ background: '#0a0a0a', border: 'none', borderRadius: '10px', color: '#fff', fontSize: '11px', fontFamily: 'Outfit, sans-serif' }} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="space-y-1">
                    {brandDistribution.map((b) => (
                      <div key={b.name} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: b.color }} />
                          <span className="text-xs text-[#64748b]" style={{ fontFamily: 'Inter, sans-serif' }}>{b.name}</span>
                        </div>
                        <span className="text-xs text-[#0a0a0a]" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>{b.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Revenue bar chart */}
              <div className="bg-white rounded-2xl border border-[#e2e8f0] p-5">
                <h3 className="text-[#0a0a0a] mb-4" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '0.95rem' }}>Monthly Revenue (LKR Millions)</h3>
                <ResponsiveContainer width="100%" height={180}>
                  <BarChart data={monthlySales} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                    <XAxis dataKey="month" tick={{ fontSize: 11, fontFamily: 'Inter, sans-serif', fill: '#94a3b8' }} tickLine={false} axisLine={false} />
                    <YAxis tick={{ fontSize: 11, fontFamily: 'Inter, sans-serif', fill: '#94a3b8' }} tickLine={false} axisLine={false} tickFormatter={(v) => `${v / 1000000}M`} />
                    <Tooltip contentStyle={{ background: '#0a0a0a', border: 'none', borderRadius: '10px', color: '#fff', fontSize: '12px', fontFamily: 'Outfit, sans-serif' }} formatter={(v: number) => [`LKR ${(v / 1000000).toFixed(0)}M`, 'Revenue']} />
                    <Bar dataKey="revenue" fill="#e11d2e" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Leads & reviews side by side */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {/* Recent Leads */}
                <div className="bg-white rounded-2xl border border-[#e2e8f0] p-5">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-[#0a0a0a]" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '0.95rem' }}>Recent Leads</h3>
                    <button onClick={() => setActivePage('leads')} className="text-xs text-[#e11d2e]" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>View All</button>
                  </div>
                  <div className="space-y-3">
                    {leads.slice(0, 4).map((lead) => (
                      <div key={lead.id} className="flex items-center justify-between py-2 border-b border-[#f8fafc] last:border-0">
                        <div>
                          <p className="text-[#0a0a0a] text-sm" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600 }}>{lead.name}</p>
                          <p className="text-xs text-[#64748b]" style={{ fontFamily: 'Inter, sans-serif' }}>{lead.vehicle}</p>
                        </div>
                        <div className="text-right">
                          <span className={`text-xs px-2 py-0.5 rounded-full ${statusColor(lead.status)}`} style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>{lead.status}</span>
                          <p className="text-xs text-[#94a3b8] mt-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>{lead.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pending Reviews */}
                <div className="bg-white rounded-2xl border border-[#e2e8f0] p-5">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-[#0a0a0a]" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '0.95rem' }}>Pending Reviews</h3>
                    <span className="text-xs bg-[#fef2f2] text-[#e11d2e] px-2 py-0.5 rounded-full" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>{pendingReviews.length} pending</span>
                  </div>
                  <div className="space-y-4">
                    {pendingReviews.map((review) => (
                      <div key={review.id} className="p-3 bg-[#f8fafc] rounded-xl">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-[#0a0a0a] text-sm" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>{review.name}</p>
                          <div className="flex gap-0.5">
                            {[...Array(review.rating)].map((_, i) => (
                              <span key={i} className="text-amber-400">★</span>
                            ))}
                          </div>
                        </div>
                        <p className="text-[#64748b] text-xs mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>{review.preview}</p>
                        <div className="flex gap-2">
                          <button className="text-xs bg-[#059669] text-white px-3 py-1 rounded-lg" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>Approve</button>
                          <button className="text-xs bg-[#e2e8f0] text-[#64748b] px-3 py-1 rounded-lg" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>Reject</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activePage === 'vehicles' && (
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-[#0a0a0a]" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '1.5rem', letterSpacing: '-0.02em' }}>Vehicle Management</h1>
                  <p className="text-[#64748b] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>{vehicles.length} vehicles listed</p>
                </div>
                <button className="flex items-center gap-2 bg-[#e11d2e] hover:bg-[#c01727] text-white px-4 py-2.5 rounded-xl text-sm transition-colors" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>
                  <Plus size={15} />
                  Add Vehicle
                </button>
              </div>
              <div className="bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-[#f1f5f9]">
                        {['Vehicle', 'Year', 'Price', 'Mileage', 'Fuel', 'Status', 'Actions'].map((h) => (
                          <th key={h} className="text-left px-5 py-3 text-xs text-[#94a3b8] uppercase tracking-wider" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#f8fafc]">
                      {vehicles.map((v) => (
                        <tr key={v.id} className="hover:bg-[#f8fafc] transition-colors">
                          <td className="px-5 py-3">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-8 bg-[#f8fafc] rounded-lg overflow-hidden">
                                <img src={v.images[0]} alt="" className="w-full h-full object-cover" />
                              </div>
                              <div>
                                <p className="text-[#0a0a0a] text-sm" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>{v.brand} {v.model}</p>
                                <p className="text-[#94a3b8] text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>{v.variant}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-5 py-3 text-sm text-[#64748b]" style={{ fontFamily: 'Inter, sans-serif' }}>{v.year}</td>
                          <td className="px-5 py-3 text-sm text-[#0a0a0a]" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>{formatPrice(v.price)}</td>
                          <td className="px-5 py-3 text-sm text-[#64748b]" style={{ fontFamily: 'Inter, sans-serif' }}>{v.mileage.toLocaleString()} km</td>
                          <td className="px-5 py-3">
                            <span className={`text-xs px-2 py-0.5 rounded-full ${v.fuel === 'Hybrid' ? 'bg-emerald-100 text-emerald-700' : v.fuel === 'Electric' ? 'bg-blue-100 text-blue-700' : 'bg-[#f8fafc] text-[#64748b]'}`} style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>
                              {v.fuel}
                            </span>
                          </td>
                          <td className="px-5 py-3">
                            <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>Active</span>
                          </td>
                          <td className="px-5 py-3">
                            <div className="flex gap-2">
                              <button className="text-[#64748b] hover:text-[#0a0a0a] transition-colors"><Eye size={14} /></button>
                              <button className="text-[#64748b] hover:text-[#0a0a0a] transition-colors"><Edit2 size={14} /></button>
                              <button className="text-[#64748b] hover:text-[#e11d2e] transition-colors"><Trash2 size={14} /></button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activePage === 'leads' && (
            <div className="space-y-5">
              <h1 className="text-[#0a0a0a]" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '1.5rem' }}>Lead Management</h1>
              <div className="bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-[#f1f5f9]">
                        {['Lead', 'Phone', 'Vehicle Interested', 'Status', 'Source', 'Date', 'Actions'].map((h) => (
                          <th key={h} className="text-left px-5 py-3 text-xs text-[#94a3b8] uppercase tracking-wider" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#f8fafc]">
                      {leads.map((lead) => (
                        <tr key={lead.id} className="hover:bg-[#f8fafc] transition-colors">
                          <td className="px-5 py-3 text-sm text-[#0a0a0a]" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>{lead.name}</td>
                          <td className="px-5 py-3 text-sm text-[#64748b]" style={{ fontFamily: 'Inter, sans-serif' }}>{lead.phone}</td>
                          <td className="px-5 py-3 text-sm text-[#64748b]" style={{ fontFamily: 'Inter, sans-serif' }}>{lead.vehicle}</td>
                          <td className="px-5 py-3">
                            <span className={`text-xs px-2 py-0.5 rounded-full ${statusColor(lead.status)}`} style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>{lead.status}</span>
                          </td>
                          <td className="px-5 py-3 text-sm text-[#64748b]" style={{ fontFamily: 'Inter, sans-serif' }}>{lead.source}</td>
                          <td className="px-5 py-3 text-sm text-[#64748b]" style={{ fontFamily: 'Inter, sans-serif' }}>{lead.date}</td>
                          <td className="px-5 py-3">
                            <div className="flex gap-2">
                              <a href={`https://wa.me/${lead.phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-xs bg-[#25d366] text-white px-2 py-1 rounded-lg" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>WhatsApp</a>
                              <a href={`tel:${lead.phone}`} className="text-xs border border-[#e2e8f0] text-[#64748b] px-2 py-1 rounded-lg" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>Call</a>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activePage === 'reviews' && (
            <div className="space-y-5">
              <h1 className="text-[#0a0a0a]" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '1.5rem' }}>Review Moderation</h1>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[{ label: 'Pending', value: pendingReviews.length, color: '#f59e0b' }, { label: 'Approved', value: 847, color: '#059669' }, { label: 'Rejected', value: 12, color: '#e11d2e' }].map(({ label, value, color }) => (
                  <div key={label} className="bg-white rounded-2xl border border-[#e2e8f0] p-5">
                    <p style={{ color, fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '2rem', letterSpacing: '-0.02em' }}>{value}</p>
                    <p className="text-[#64748b] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>{label} Reviews</p>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-2xl border border-[#e2e8f0] p-5">
                <h3 className="text-[#0a0a0a] mb-4" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}>Awaiting Moderation</h3>
                <div className="space-y-4">
                  {pendingReviews.map((review) => (
                    <div key={review.id} className="p-4 bg-[#f8fafc] rounded-xl flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <p className="text-[#0a0a0a] text-sm" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>{review.name}</p>
                          <div className="flex gap-0.5 text-amber-400 text-sm">{[...Array(review.rating)].map((_, i) => <span key={i}>★</span>)}</div>
                          <span className="text-xs text-[#94a3b8]" style={{ fontFamily: 'Inter, sans-serif' }}>{review.date}</span>
                        </div>
                        <p className="text-xs text-[#e11d2e] mb-1" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>{review.vehicle}</p>
                        <p className="text-[#64748b] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>{review.preview}</p>
                      </div>
                      <div className="flex gap-2 shrink-0">
                        <button className="bg-[#059669] text-white text-xs px-3 py-2 rounded-lg" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>Approve</button>
                        <button className="bg-[#f1f5f9] text-[#64748b] text-xs px-3 py-2 rounded-lg" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>Reject</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activePage === 'blog' && (
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <h1 className="text-[#0a0a0a]" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '1.5rem' }}>Blog Management</h1>
                <button className="flex items-center gap-2 bg-[#e11d2e] hover:bg-[#c01727] text-white px-4 py-2.5 rounded-xl text-sm transition-colors" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>
                  <Plus size={15} />
                  New Article
                </button>
              </div>
              <div className="bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-[#f1f5f9]">
                        {['Title', 'Category', 'Author', 'Published', 'Actions'].map((h) => (
                          <th key={h} className="text-left px-5 py-3 text-xs text-[#94a3b8] uppercase tracking-wider" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#f8fafc]">
                      {blogPosts.map((post) => (
                        <tr key={post.id} className="hover:bg-[#f8fafc] transition-colors">
                          <td className="px-5 py-3">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-8 bg-[#f8fafc] rounded-lg overflow-hidden">
                                <img src={post.image} alt="" className="w-full h-full object-cover" />
                              </div>
                              <p className="text-[#0a0a0a] text-sm max-w-xs truncate" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600 }}>{post.title}</p>
                            </div>
                          </td>
                          <td className="px-5 py-3">
                            <span className="text-xs bg-[#fef2f2] text-[#e11d2e] px-2 py-0.5 rounded-full" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>{post.category}</span>
                          </td>
                          <td className="px-5 py-3 text-sm text-[#64748b]" style={{ fontFamily: 'Inter, sans-serif' }}>{post.author.name}</td>
                          <td className="px-5 py-3 text-sm text-[#64748b]" style={{ fontFamily: 'Inter, sans-serif' }}>{new Date(post.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</td>
                          <td className="px-5 py-3">
                            <div className="flex gap-2">
                              <button className="text-[#64748b] hover:text-[#0a0a0a]"><Eye size={14} /></button>
                              <button className="text-[#64748b] hover:text-[#0a0a0a]"><Edit2 size={14} /></button>
                              <button className="text-[#64748b] hover:text-[#e11d2e]"><Trash2 size={14} /></button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activePage === 'analytics' && (
            <div className="space-y-5">
              <h1 className="text-[#0a0a0a]" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '1.5rem' }}>Analytics Overview</h1>
              <div className="bg-white rounded-2xl border border-[#e2e8f0] p-5">
                <h3 className="text-[#0a0a0a] mb-4" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}>Revenue by Month (LKR Millions)</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={monthlySales} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                    <XAxis dataKey="month" tick={{ fontSize: 12, fontFamily: 'Inter, sans-serif', fill: '#94a3b8' }} tickLine={false} axisLine={false} />
                    <YAxis tick={{ fontSize: 12, fontFamily: 'Inter, sans-serif', fill: '#94a3b8' }} tickLine={false} axisLine={false} tickFormatter={(v) => `${v / 1000000}M`} />
                    <Tooltip contentStyle={{ background: '#0a0a0a', border: 'none', borderRadius: '10px', color: '#fff', fontSize: '12px', fontFamily: 'Outfit, sans-serif' }} formatter={(v: number) => [`LKR ${(v / 1000000).toFixed(0)}M`, 'Revenue']} />
                    <Bar dataKey="revenue" fill="#e11d2e" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
