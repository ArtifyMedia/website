import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  featured_image: string;
  published_at: string;
  read_time: number;
}

export function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('id, title, slug, excerpt, category, featured_image, published_at, read_time')
        .eq('published', true)
        .order('published_at', { ascending: false })
        .limit(3);

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="relative py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-[#ccff00]">Loading articles...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Insights &{' '}
            <span className="inline-block relative">
              <span className="absolute inset-0 bg-[#ccff00] rounded-lg transform -skew-x-6"></span>
              <span className="relative text-black font-bold px-2">
                Inspiration
              </span>
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Educational content for creative and business growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                <img
                  src={post.featured_image}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/50 backdrop-blur-sm border border-[#ccff00]/30 rounded-full text-xs text-[#ccff00] font-semibold">
                    {post.category}
                  </span>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#ccff00]/50 rounded-xl transition-colors duration-300"></div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-dark transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 text-primary-dark">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.published_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.read_time} min</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-primary-text font-semibold group-hover:gap-3 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/blog"
            className="inline-block px-8 py-3 border border-[#ccff00]/30 hover:border-[#ccff00] text-primary-dark font-semibold rounded-xl transition-all duration-300 hover:bg-[#ccff00]/10"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
