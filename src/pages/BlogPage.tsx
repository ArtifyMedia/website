import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, ArrowRight, Search, Tag } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featured_image: string;
  category: string;
  tags: string[];
  author: string;
  read_time: number;
  published_at: string;
  views: number;
}

export function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('published_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const categories = ['All', ...Array.from(new Set(posts.map(post => post.category)))];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = filteredPosts[0];
  const regularPosts = filteredPosts.slice(1);

  if (loading) {
    return (
      <div className="min-h-screen bg-white pt-20 flex items-center justify-center">
        <div className="text-[#C8F31D] text-xl">Loading articles...</div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-white pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(204,255,0,0.03)_0%,transparent_50%)]"></div>

      <div className="relative">
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-block mb-6">
                <div className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
                  <span className="text-primary-dark text-sm font-semibold">INSIGHTS & EXPERTISE</span>
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Stories, strategies &{' '}
                <span className="highlight-text">
                  insights
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Expert guidance on creative production, digital marketing, AI automation, and brand strategy
              </p>
            </div>

            <div className="max-w-6xl mx-auto mb-12">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative flex-1 w-full">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white border border-[#ccff00]/20 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#ccff00]/50"
                  />
                </div>

                <div className="flex gap-2 flex-wrap">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selectedCategory === category
                          ? 'bg-[#ccff00] text-black'
                          : 'bg-white text-gray-600 border border-[#ccff00]/20 hover:border-[#ccff00]/50'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {featuredPost && (
              <div className="max-w-6xl mx-auto mb-16">
                <Link
                  to={`/blog/${featuredPost.slug}`}
                  className="group block backdrop-blur-sm bg-white border border-[#ccff00]/20 rounded-3xl overflow-hidden hover:border-[#ccff00]/50 transition-all duration-300 shadow-lg shadow-[#ccff00]/5"
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
                      <img
                        src={featuredPost.featured_image}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-[#ccff00]/20 text-[#ccff00] text-sm font-semibold rounded-full">
                          Featured
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                          {featuredPost.category}
                        </span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 group-hover:text-[#ccff00] transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-gray-600 mb-6 line-clamp-3">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                        <div className="flex items-center gap-2 text-primary-dark">
                          <Calendar className="w-4 h-4" />
                          {new Date(featuredPost.published_at).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </div>
                        <div className="flex items-center gap-2 text-primary-dark">
                          <Clock className="w-4 h-4" />
                          {featuredPost.read_time} min read
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-primary-dark font-semibold group-hover:gap-4 transition-all">
                        Read Article
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="group backdrop-blur-sm bg-white border border-[#ccff00]/20 rounded-2xl overflow-hidden hover:border-[#ccff00]/50 transition-all duration-300 flex flex-col shadow-lg shadow-[#ccff00]/5"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={post.featured_image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#ccff00] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 text-primary-dark">
                      <div className="flex items-center gap-1 ">
                        <Clock className="w-3 h-3" />
                        {post.read_time} min
                      </div>
                      <div className="flex items-center gap-1 ">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.published_at).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                        })}
                      </div>
                    </div>
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex items-center gap-2 flex-wrap text-primary-dark">
                        <Tag className="w-3 h-3 text-gray-500" />
                        {post.tags.slice(0, 3).map((tag, idx) => (
                          <span key={idx} className="text-xs text-gray-500">
                            {tag}
                            {idx < Math.min(post.tags.length, 3) - 1 && ','}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-600 text-xl">No articles found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
