import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Calendar, ArrowLeft, Share2, Tag } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image: string;
  category: string;
  tags: string[];
  meta_title: string;
  meta_description: string;
  keywords: string[];
  author: string;
  read_time: number;
  published_at: string;
  views: number;
}

export function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetchPost();
    }
  }, [slug]);

  const fetchPost = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .maybeSingle();

      if (error) throw error;

      if (data) {
        setPost(data);

        await supabase
          .from('blog_posts')
          .update({ views: (data.views || 0) + 1 })
          .eq('id', data.id);

        const { data: related } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('published', true)
          .eq('category', data.category)
          .neq('id', data.id)
          .limit(3);

        setRelatedPosts(related || []);
      }
    } catch (error) {
      console.error('Error fetching post:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (post) {
      document.title = post.meta_title || post.title;

      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', post.meta_description || post.excerpt);
      }
    }
  }, [post]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <div className="text-[#C8F31D] text-xl">Loading article...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <Link to="/blog" className="text-[#C8F31D] hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gray-50 pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(204,255,0,0.03)_0%,transparent_50%)]"></div>

      <div className="relative">
        <article className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-primary-dark transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>

              <div className="mb-8">
                <span className="px-4 py-2 bg-[#C8F31D]/20 text-[#C8F31D] text-sm font-semibold rounded-full">
                  <span className="text-primary-dark">{post.category}</span>
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-8 pb-8 border-b border-primary/20">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary-dark font-bold">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <span className="text-gray-900">{post.author}</span>
                </div>
                <div className="flex items-center gap-2 text-primary-dark">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.published_at).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </div>
                <div className="flex items-center gap-2 text-primary-dark">
                  <Clock className="w-4 h-4" />
                  {post.read_time} min read
                </div>
                <button className="ml-auto flex items-center gap-2 text-primary-dark hover:text-primary-dark/80 transition-colors">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>

              <div className="aspect-video mb-12 rounded-2xl overflow-hidden">
                <img
                  src={post.featured_image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <div
                  className="text-gray-700 leading-relaxed space-y-6"
                  dangerouslySetInnerHTML={{
                    __html: post.content
                      .split('\n') // Split by newline to process each line
                      .map(line => {
                        if (line.startsWith('# ')) return `<h1 class="text-4xl font-bold text-gray-900 mt-12 mb-6">${line.substring(2)}</h1>`;
                        if (line.startsWith('## ')) return `<h2 class="text-3xl font-bold text-gray-900 mt-10 mb-4">${line.substring(3)}</h2>`;
                        if (line.startsWith('### ')) return `<h3 class="text-2xl font-bold text-gray-900 mt-8 mb-3">${line.substring(4)}</h3>`;
                        if (line.startsWith('**') && line.endsWith('**')) return `<p class="font-bold text-[#C8F31D] mt-4">${line.substring(2, line.length - 2)}</p>`;
                        if (line.startsWith('- ')) return `<li class="ml-6">${line.substring(2)}</li>`;
                        if (line.trim() === '') return '<br/>';
                        return `<p>${line}</p>`;
                      })
                      .join('')
                  }}
                />
              </div>

              {post.tags && post.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-primary/20">
                  <div className="flex items-center gap-3 flex-wrap">
                    <Tag className="w-5 h-5 text-gray-600" />
                    {post.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white text-gray-600 text-sm rounded-full border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </article>

        {relatedPosts.length > 0 && ( // Only render if there are related posts
          <section className="py-16 border-t border-[#C8F31D]/20">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
                  Related Articles
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.slug}`}
                      className="group backdrop-blur-sm bg-white/5 border border-[#C8F31D]/20 rounded-2xl overflow-hidden hover:border-[#C8F31D]/50 transition-all duration-300"
                    >
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={relatedPost.featured_image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#C8F31D] transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}