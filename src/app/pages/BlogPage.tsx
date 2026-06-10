import { useState } from 'react';
import { Link } from 'react-router';
import { Search, Clock, ChevronRight, Tag } from 'lucide-react';
import { motion } from 'motion/react';
import { blogPosts, categories } from '../data/blog';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const featured = blogPosts.find((p) => p.featured);
  const filtered = blogPosts.filter((p) => {
    const matchCat = selectedCategory === 'All' || p.category === selectedCategory;
    const matchSearch = !searchQuery || p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <div className="bg-[#0a0a0a] pt-24 pb-12">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-px bg-[#e11d2e]" />
            <span className="text-[#e11d2e] text-xs" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Automotive Insights
            </span>
          </div>
          <h1 className="text-white" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, letterSpacing: '-0.03em', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            The SST Auto Blog
          </h1>
          <p className="text-white/50 mt-3 max-w-xl" style={{ fontFamily: 'Inter, sans-serif' }}>
            Expert buying guides, brand comparisons, and automotive news for Sri Lankan car buyers.
          </p>
        </div>
      </div>

      {/* Featured Post */}
      {featured && selectedCategory === 'All' && !searchQuery && (
        <div className="bg-white border-b border-[#f1f5f9]">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <Link to={`/blog/${featured.slug}`} className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="overflow-hidden rounded-2xl aspect-video bg-[#f8fafc]">
                  <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div>
                  <span className="inline-block text-xs text-[#e11d2e] bg-[#fef2f2] px-3 py-1 rounded-full mb-3" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>
                    Featured · {featured.category}
                  </span>
                  <h2 className="text-[#0a0a0a] mb-3 group-hover:text-[#e11d2e] transition-colors" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', letterSpacing: '-0.02em' }}>
                    {featured.title}
                  </h2>
                  <p className="text-[#64748b] mb-4 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>{featured.excerpt}</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <img src={featured.author.avatar} alt={featured.author.name} className="w-8 h-8 rounded-full object-cover" />
                      <div>
                        <p className="text-[#0a0a0a] text-xs" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>{featured.author.name}</p>
                        <p className="text-[#94a3b8] text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>{featured.author.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-[#94a3b8]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <Clock size={12} />
                      {featured.readTime} min read
                    </div>
                    <span className="text-[#e11d2e] text-sm flex items-center gap-1 ml-auto" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>
                      Read Article <ChevronRight size={15} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      )}

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1 flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${selectedCategory === cat ? 'bg-[#0a0a0a] text-white' : 'bg-white border border-[#e2e8f0] text-[#64748b] hover:border-[#0a0a0a] hover:text-[#0a0a0a]'}`}
                style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600 }}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative sm:w-64">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94a3b8]" />
            <input
              type="text"
              placeholder="Search articles…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 bg-white border border-[#e2e8f0] rounded-xl text-sm text-[#0a0a0a] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#e11d2e]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link to={`/blog/${post.slug}`} className="group block h-full">
                <div className="bg-white rounded-2xl border border-[#f1f5f9] hover:shadow-lg transition-all duration-300 h-full flex flex-col overflow-hidden">
                  <div className="overflow-hidden aspect-video bg-[#f8fafc]">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs text-[#e11d2e] bg-[#fef2f2] px-2 py-0.5 rounded-full" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-[#94a3b8]" style={{ fontFamily: 'Inter, sans-serif' }}>
                        <Clock size={11} /> {post.readTime} min
                      </span>
                    </div>
                    <h3 className="text-[#0a0a0a] mb-2 group-hover:text-[#e11d2e] transition-colors flex-1" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1rem', lineHeight: 1.4 }}>
                      {post.title}
                    </h3>
                    <p className="text-[#64748b] text-sm line-clamp-2 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {post.excerpt}
                    </p>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="flex items-center gap-1 text-xs text-[#64748b] bg-[#f8fafc] px-2 py-0.5 rounded-full" style={{ fontFamily: 'Inter, sans-serif' }}>
                          <Tag size={9} /> {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-[#f1f5f9]">
                      <div className="flex items-center gap-2">
                        <img src={post.author.avatar} alt={post.author.name} className="w-6 h-6 rounded-full object-cover" />
                        <span className="text-xs text-[#64748b]" style={{ fontFamily: 'Inter, sans-serif' }}>{post.author.name}</span>
                      </div>
                      <span className="text-xs text-[#94a3b8]" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {new Date(post.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#64748b]" style={{ fontFamily: 'Inter, sans-serif' }}>No articles found. Try a different search or category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
