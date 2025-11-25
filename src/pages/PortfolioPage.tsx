import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, ExternalLink, Award } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  thumbnail_url: string;
  video_url: string;
  description: string;
  client: string;
  services_used: string[];
  tags: string[];
}

export function PortfolioPage() {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPortfolio();
  }, []);

  const fetchPortfolio = async () => {
    try {
      console.log('Fetching portfolio for portfolio page...');
      const { data, error } = await supabase
        .from('portfolio_items')
        .select('*')
        .eq('is_published', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      console.log('Portfolio page data:', data);
      setItems(data || []);
    } catch (error) {
      console.error('Error fetching portfolio:', error);
    } finally {
      setLoading(false);
    }
  };

  const categories = ['All', ...Array.from(new Set(items.map(item => item.category)))];

  const filteredItems = selectedCategory === 'All'
    ? items
    : items.filter(item => item.category === selectedCategory);

  const stats = [
    { value: '500+', label: 'Projects Completed' },
    { value: '50M+', label: 'Views Generated' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '15+', label: 'Industries Served' },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-white pt-20 flex items-center justify-center">
        <div className="text-[#ccff00] text-xl">Loading portfolio...</div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-white pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(204,255,0,0.03)_0%,transparent_50%)]"></div>

      <div className="relative">
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <div className="inline-block mb-6">
                <div className="px-4 py-2 bg-[#ccff00]/10 border border-[#ccff00]/30 rounded-full">
                  <span className="text-primary-dark text-sm font-semibold">OUR WORK</span>
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Campaigns that{' '}
                <span className="inline-block relative">
                  <span className="absolute inset-0 bg-[#ccff00] rounded-lg transform -skew-x-6"></span>
                  <span className="relative text-black font-bold px-2">
                  captivate & convert
                  </span>
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                Real projects. Real results. From cinematic brand films to performance-driven campaigns, see what we create for brands that refuse to be ordinary.
              </p>
            </div>

            <div className="max-w-6xl mx-auto mb-16">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="backdrop-blur-sm bg-white/80 border border-[#ccff00]/20 rounded-2xl p-6 text-center hover:border-[#ccff00]/50 transition-all duration-300 shadow-lg shadow-[#ccff00]/5"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-[#ccff00] mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="max-w-6xl mx-auto mb-12">
              <div className="flex gap-3 flex-wrap justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
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

            <div className="max-w-6xl mx-auto">
              {filteredItems.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-gray-600 text-xl">No projects found in this category.</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-8">
                  {filteredItems.map((item) => (
                    <Link
                      to={`/portfolio/${item.id}`}
                      key={item.id}
                      className="group backdrop-blur-sm bg-white border border-[#ccff00]/20 rounded-3xl overflow-hidden hover:border-[#ccff00]/50 transition-all duration-300 block shadow-lg shadow-[#ccff00]/5"
                    >
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={item.thumbnail_url}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="w-16 h-16 bg-[#C8F31D] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                            <Play className="w-8 h-8 text-black ml-1" />
                          </div>
                        </div>
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-[#ccff00]/90 text-black text-xs font-semibold rounded-full">
                            {item.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-8">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#ccff00] transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-sm text-gray-600">Client: {item.client}</p>
                          </div>
                          <div className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                            <ExternalLink className="w-5 h-5 text-gray-600 hover:text-[#ccff00]" />
                          </div>
                        </div>

                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {item.description}
                        </p>

                        {item.services_used && item.services_used.length > 0 && (
                          <div className="mb-6">
                            <h4 className="text-sm font-semibold text-primary-dark mb-3 flex items-center gap-2">
                              <Award className="w-4 h-4" />
                              SERVICES USED
                            </h4>
                            <ul className="space-y-2">
                              {item.services_used.slice(0, 3).map((service, idx) => (
                                <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                                  <span className="text-primary-dark mt-1">•</span>
                                  <span className="text-primary-dark">{service}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {item.tags && item.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full border border-[#ccff00]/20"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="max-w-4xl mx-auto text-center mt-20">
              <div className="backdrop-blur-sm bg-gradient-to-br from-[#ccff00]/10 to-transparent border border-[#ccff00]/20 rounded-3xl p-12 shadow-lg shadow-[#ccff00]/5">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Ready to Create Your <span className="highlight-text">Success Story</span>?
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Let's craft a campaign that not only <span className="highlight-text">looks stunning</span> but drives <span className="highlight-text">real business results</span> for your brand.
                </p>
                <button
                  onClick={() => {
                    const servicesSection = document.getElementById('services-catalog');
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.location.href = '/#services-catalog';
                    }
                  }}
                  className="px-8 py-4 bg-gradient-to-r from-[#ccff00] to-[#ccff00] hover:from-yellow-400 hover:to-[#ccff00] text-black font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-[#ccff00]/20"
                >
                  Start Your Project
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}