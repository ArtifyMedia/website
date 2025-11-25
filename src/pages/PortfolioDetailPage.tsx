import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, Sparkles } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { supabase } from '../lib/supabase';

interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  video_url: string;
  thumbnail_url: string | null;
  duration: string | null;
  tags: string[];
  services_used: string[];
  ai_enhanced: boolean;
  created_at: string;
}

export function PortfolioDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<PortfolioItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadPortfolioItem();
  }, [id]);

  const loadPortfolioItem = async () => {
    try {
      const { data, error } = await supabase
        .from('portfolio_items')
        .select('*')
        .eq('id', id)
        .eq('is_published', true)
        .maybeSingle();

      if (error) throw error;
      setItem(data);
    } catch (error) {
      console.error('Error loading portfolio item:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getVimeoEmbedCode = (embedUrl: string) => {
    // Handle iframe embed codes
    if (embedUrl.includes('<iframe')) {
      const srcMatch = embedUrl.match(/src="([^"]+)"/);
      return srcMatch ? srcMatch[1] : embedUrl;
    }
    
    // Handle YouTube URLs
    if (embedUrl.includes('youtube.com/embed/')) {
      return embedUrl;
    }
    
    // Handle Vimeo URLs
    if (embedUrl.includes('vimeo.com')) {
      const vimeoId = embedUrl.match(/vimeo\.com\/(\d+)/)?.[1];
      return vimeoId ? `https://player.vimeo.com/video/${vimeoId}` : embedUrl;
    }
    
    return embedUrl;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="container mx-auto px-4 py-24 text-center">
          <div className="text-[#ccff00]">Loading...</div>
        </div>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-[#ccff00] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#ccff00] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>

          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-[#C8F31D]/10 border border-[#C8F31D]/30 rounded-full text-xs text-[#C8F31D] uppercase font-semibold">
                  {item.category}
                </span>
                {item.ai_enhanced && (
                  <span className="flex items-center gap-1 px-3 py-1 bg-[#C8F31D]/10 border border-[#C8F31D]/30 rounded-full text-xs text-[#C8F31D]">
                    <Sparkles className="w-3 h-3" />
                    AI Enhanced
                  </span>
                )}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {item.title}
              </h1>

              <div className="flex items-center gap-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="text-[#C8F31D]">Client:</span>
                  <span>{item.client}</span>
                </div>
                {item.duration && (
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{item.duration}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden bg-gray-900 mb-8 border border-[#ccff00]/20" style={{ padding: '56.25% 0 0 0' }}>
              <iframe
                src={getVimeoEmbedCode(item.video_url)}
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                title={item.title}
              ></iframe>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Project</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  {item.description}
                </p>

                {item.tags.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Tag className="w-5 h-5" />
                      Tags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 bg-white border border-[#ccff00]/30 rounded-full text-sm text-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div>
                {item.services_used.length > 0 && (
                  <div className="bg-white border border-[#ccff00]/20 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Services Used</h3>
                    <ul className="space-y-3">
                      {item.services_used.map((service) => (
                        <li
                          key={service}
                          className="flex items-center gap-2 text-gray-700"
                        >
                          <div className="w-1.5 h-1.5 bg-[#C8F31D] rounded-full"></div>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
