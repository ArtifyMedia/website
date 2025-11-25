import { useState, useEffect } from 'react';
import { Play } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface PortfolioItem {
  id: string;
  title: string;
  video_url: string;
  featured: boolean;
}

export function Reel() {
  const [showReel, setShowReel] = useState(false);
  const [featuredVideo, setFeaturedVideo] = useState<PortfolioItem | null>(null);

  useEffect(() => {
    loadFeaturedVideo();
  }, []);

  const loadFeaturedVideo = async () => {
    try {
      const { data, error } = await supabase
        .from('portfolio_items')
        .select('id, title, video_url, featured')
        .eq('is_published', true)
        .eq('featured', true)
        .order('order_index', { ascending: true })
        .limit(1)
        .maybeSingle();

      if (error) throw error;
      setFeaturedVideo(data);
    } catch (error) {
      console.error('Error loading featured video:', error);
    }
  };

  const getVimeoEmbedUrl = (url: string) => {
    if (url.includes('player.vimeo.com')) {
      return url.includes('?') ? url : `${url}?autoplay=1&loop=1&title=0&byline=0&portrait=0`;
    }
    const vimeoId = url.match(/vimeo\.com\/(\d+)/)?.[1];
    return vimeoId ? `https://player.vimeo.com/video/${vimeoId}?autoplay=1&loop=1&title=0&byline=0&portrait=0` : url;
  };

  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              See what your brand could look like
            </h2>
            <p className="text-xl text-gray-600">through our lens</p>
          </div>

          <div
            className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer"
            onClick={() => featuredVideo && setShowReel(true)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 border border-[#ccff00]/20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(204,255,0,0.1)_0%,transparent_70%)]"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-[#ccff00] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-12 h-12 text-black ml-2" fill="currentColor" />
                  </div>
                  <p className="text-gray-900 text-lg font-semibold">Watch Our Showreel</p>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 border-2 border-[#ccff00]/20 group-hover:border-[#ccff00]/50 rounded-2xl transition-colors duration-300"></div>
          </div>

          <div className="mt-8 text-center text-gray-600 text-sm">
            Cinematic storytelling for automotive, real estate, and luxury brands
          </div>
        </div>
      </div>

      {showReel && featuredVideo && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setShowReel(false)}
        >
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowReel(false)}
              className="absolute -top-12 right-0 text-white hover:text-[#ccff00] transition-colors text-sm"
            >
              Close ✕
            </button>
            <div className="aspect-video rounded-xl overflow-hidden bg-black">
              <iframe
                src={getVimeoEmbedUrl(featuredVideo.video_url)}
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
