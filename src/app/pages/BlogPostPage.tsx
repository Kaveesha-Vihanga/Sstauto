import { useParams, Link } from 'react-router';
import { Clock, Calendar, ArrowLeft, Tag, Share2, Facebook, Twitter, MessageCircle, ChevronRight } from 'lucide-react';
import { blogPosts } from '../data/blog';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const related = blogPosts.filter((p) => p.slug !== slug && p.category === post?.category).slice(0, 3);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#f8fafc] pt-24 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-[#0a0a0a]" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>Article not found</h2>
          <Link to="/blog" className="text-[#e11d2e] mt-3 block" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const contentLines = post.content.trim().split('\n');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative">
        <div className="h-72 sm:h-96 overflow-hidden bg-[#f8fafc]">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6 pb-8 pt-20">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs text-[#e11d2e] bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>
                {post.category}
              </span>
            </div>
            <h1 className="text-white" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Breadcrumb + nav */}
      <div className="border-b border-[#f1f5f9] bg-white sticky top-16 z-10">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <Link to="/blog" className="flex items-center gap-2 text-sm text-[#64748b] hover:text-[#e11d2e] transition-colors" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600 }}>
            <ArrowLeft size={14} />
            Back to Blog
          </Link>
          <div className="flex gap-3">
            <a href="#" className="w-8 h-8 bg-[#1877f2] rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity">
              <Facebook size={14} />
            </a>
            <a href="#" className="w-8 h-8 bg-[#1da1f2] rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity">
              <Twitter size={14} />
            </a>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(post.title + ' - ' + window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-[#25d366] rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
            >
              <MessageCircle size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 py-12">
        {/* Author + meta */}
        <div className="flex items-center gap-4 mb-8 pb-8 border-b border-[#f1f5f9]">
          <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full object-cover" />
          <div>
            <p className="text-[#0a0a0a] text-sm" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>{post.author.name}</p>
            <p className="text-[#64748b] text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>{post.author.role}</p>
          </div>
          <div className="ml-auto flex items-center gap-4 text-xs text-[#94a3b8]" style={{ fontFamily: 'Inter, sans-serif' }}>
            <span className="flex items-center gap-1">
              <Calendar size={11} />
              {new Date(post.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={11} />
              {post.readTime} min read
            </span>
          </div>
        </div>

        {/* Article body */}
        <div className="prose-content">
          {contentLines.map((line, i) => {
            const trimmed = line.trim();
            if (trimmed.startsWith('## ')) {
              return (
                <h2 key={i} className="text-[#0a0a0a] mt-10 mb-4" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.02em' }}>
                  {trimmed.replace('## ', '')}
                </h2>
              );
            }
            if (trimmed.startsWith('### ')) {
              return (
                <h3 key={i} className="text-[#0a0a0a] mt-6 mb-3" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: '1.2rem' }}>
                  {trimmed.replace('### ', '')}
                </h3>
              );
            }
            if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
              return (
                <p key={i} className="text-[#0a0a0a] mb-2" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>
                  {trimmed.replace(/\*\*/g, '')}
                </p>
              );
            }
            if (trimmed.startsWith('- ')) {
              return (
                <div key={i} className="flex items-start gap-2 mb-2">
                  <span className="w-1.5 h-1.5 bg-[#e11d2e] rounded-full mt-2 shrink-0" />
                  <p className="text-[#374151]" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.8 }}>
                    {trimmed.replace('- ', '')}
                  </p>
                </div>
              );
            }
            if (trimmed === '') return <div key={i} className="h-2" />;
            return (
              <p key={i} className="text-[#374151] mb-4" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.85 }}>
                {trimmed}
              </p>
            );
          })}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-[#f1f5f9]">
          {post.tags.map((tag) => (
            <span key={tag} className="flex items-center gap-1.5 text-xs text-[#64748b] bg-[#f8fafc] border border-[#e2e8f0] px-3 py-1.5 rounded-full" style={{ fontFamily: 'Inter, sans-serif' }}>
              <Tag size={10} /> {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 bg-[#0a0a0a] rounded-2xl p-8 text-center">
          <p className="text-white/60 text-xs mb-1 uppercase tracking-wider" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>Ready to find your car?</p>
          <h3 className="text-white mb-4" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.5rem' }}>
            Browse SST Auto's Inventory
          </h3>
          <Link
            to="/vehicles"
            className="inline-flex items-center gap-2 bg-[#e11d2e] hover:bg-[#c01727] text-white px-6 py-3 rounded-xl text-sm transition-all"
            style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
          >
            View All Vehicles <ChevronRight size={15} />
          </Link>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div className="border-t border-[#f1f5f9] bg-[#f8fafc] py-12">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-[#0a0a0a] mb-6" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.25rem' }}>
              Related Articles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link key={p.id} to={`/blog/${p.slug}`} className="group block bg-white rounded-2xl overflow-hidden border border-[#f1f5f9] hover:shadow-lg transition-all">
                  <div className="aspect-video overflow-hidden bg-[#f8fafc]">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-[#e11d2e] mb-1" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>{p.category}</p>
                    <h4 className="text-[#0a0a0a] text-sm group-hover:text-[#e11d2e] transition-colors" style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, lineHeight: 1.4 }}>
                      {p.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
