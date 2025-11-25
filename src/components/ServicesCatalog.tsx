import { useState, useEffect } from 'react';
import { Film, Megaphone, Bot, Plus, Check, Sparkles, TrendingUp, Zap, Code } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useCart } from '../contexts/CartContext';
import { GlowCard } from './ui/glow-card';
import { LiquidButton } from './ui/button';

interface Service {
  id: string;
  name: string;
  category: string;
  description: string;
  detailed_description: string;
  features: string[];
  benefits: string[];
  use_cases: string[];
  is_active: boolean;
}

const categoryInfo = {
  creative: {
    icon: Film,
    name: 'Creative & Production',
    headline: "Make 'Em <span class=\"highlight-text\">Cry</span> (Or <span class=\"highlight-text\">Laugh</span>, Or <span class=\"highlight-text\">Buy</span>)",
    description: 'We don\'t just shoot pretty videos—we create <span class=\"highlight-text\">visual vibes</span> that <span class=\"highlight-text\">actually convert</span>. Whether you\'re launching a product, flexing your brand story, or showing off that sick penthouse, we make it look so good people can\'t help but <span class=\"highlight-text\">whip out their wallets</span>.',
    stats: [
      { value: '80%', label: 'Increase in Brand Recall' },
      { value: '3-5x', label: 'Higher Engagement Rates' },
      { value: '500+', label: 'Projects Delivered' }
    ],
    benefits: [
      'Professional cinematography that elevates brand perception',
      'Multi-platform optimization for maximum reach',
      'Fast turnaround without compromising quality',
      'Collaborative process with full creative control'
    ],
    perfectFor: [
      'Real estate agencies showcasing luxury properties',
      'Automotive dealerships launching new models',
      'Fashion brands creating lifestyle content',
      'Restaurants and hospitality businesses'
    ]
  },
  marketing: {
    icon: Megaphone,
    name: 'Marketing & Growth',
    headline: 'Marketing That <span class=\"highlight-text\">Actually Makes Money</span>',
    description: 'Tired of <span class=\"highlight-text\">throwing money at ads</span> and getting crickets? We build marketing systems that <span class=\"highlight-text\">work harder</span> than your overachieving coworker. <span class=\"highlight-text\">Leads on autopilot</span>, sales funnels that <span class=\"highlight-text\">actually funnel</span>, and campaigns that make your <span class=\"highlight-text\">accountant smile</span>.',
    stats: [
      { value: '3-5x', label: 'Average ROAS' },
      { value: '60%', label: 'Lower Cost Per Lead' },
      { value: '$50M+', label: 'Revenue Generated' }
    ],
    benefits: [
      'Proven systems that work while you sleep',
      'Full attribution and tracking across all channels',
      'Continuous optimization for maximum ROI',
      'Transparent reporting and weekly strategy calls'
    ],
    perfectFor: [
      'E-commerce stores wanting to scale revenue',
      'Service businesses needing consistent leads',
      'SaaS companies looking to reduce CAC',
      'Local businesses expanding their reach'
    ]
  },
  ai_automation: {
    icon: Bot,
    name: 'AI & Automation Suite',
    headline: 'AI That <span class=\"highlight-text\">Works</span> (Not The <span class=\"highlight-text\">Skynet Kind</span>)',
    description: 'Let <span class=\"highlight-text\">robots do the boring stuff</span> while you focus on being brilliant. We set up AI that <span class=\"highlight-text\">qualifies leads</span>, answers FAQs, and handles repetitive tasks <span class=\"highlight-text\">24/7</span>—so you can <span class=\"highlight-text\">scale without hiring an army</span>. It\'s like having a <span class=\"highlight-text\">super-efficient intern</span> who never sleeps or asks for coffee breaks.',
    stats: [
      { value: '20+hrs', label: 'Saved Per Week' },
      { value: '70%', label: 'Reduction in Support Load' },
      { value: '24/7', label: 'Lead Qualification' }
    ],
    benefits: [
      'Custom automation tailored to your workflows',
      'Seamless integration with existing tools',
      'ROI typically within 60 days',
      'Training and ongoing support included'
    ],
    perfectFor: [
      'Agencies managing multiple client accounts',
      'Sales teams with high lead volumes',
      'Customer service departments',
      'Businesses with repetitive processes'
    ]
  },
  web_development: {
    icon: Code,
    name: 'Web & System Development',
    headline: "Websites That <span class=\"highlight-text\">Don't Suck</span>",
    description: 'Your website should <span class=\"highlight-text\">work as hard as your sales team</span> (maybe harder). We build custom sites and systems that <span class=\"highlight-text\">load fast</span>, <span class=\"highlight-text\">convert like crazy</span>, and <span class=\"highlight-text\">scale with your growth</span>. No templates, no cookie-cutter BS—just <span class=\"highlight-text\">solid code that makes money</span>.',
    stats: [
      { value: '2-3x', label: 'Higher Conversions' },
      { value: '100%', label: 'Custom-Built Solutions' },
      { value: '60d', label: 'Typical ROI Timeline' }
    ],
    benefits: [
      'Built specifically for your business needs',
      'Scalable architecture that grows with you',
      'Ongoing support and optimization included',
      'Full ownership of your digital assets'
    ],
    perfectFor: [
      'Businesses outgrowing their current website',
      'E-commerce stores needing custom features',
      'Companies requiring specific integrations',
      'Startups building their digital presence'
    ]
  },
  consulting: {
    icon: Sparkles,
    name: 'Free Consultation',
    headline: '<span class=\"highlight-text\">Free</span> Brain-Picking Session',
    description: 'Confused about what you actually need? <span class=\"highlight-text\">No worries!</span> Hop on a <span class=\"highlight-text\">45-min call</span> with our team. We\'ll <span class=\"highlight-text\">roast your current setup</span> (nicely), spot <span class=\"highlight-text\">opportunities you\'re missing</span>, and give you a <span class=\"highlight-text\">game plan</span>—totally free. <span class=\"highlight-text\">No pushy sales tactics</span>, just straight-up helpful advice.',
    stats: [
      { value: '45min', label: 'Expert Consultation' },
      { value: '100%', label: 'Free, No Strings' },
      { value: '24h', label: 'Response Time' }
    ],
    benefits: [
      'Clear understanding of your biggest opportunities',
      'Expert perspective from experienced strategists',
      'Actionable recommendations you can implement immediately',
      'Risk-free way to experience our expertise'
    ],
    perfectFor: [
      'Business owners unsure of their next steps',
      'Companies planning major growth initiatives',
      'Entrepreneurs validating their ideas',
      'Anyone wanting expert guidance risk-free'
    ]
  }
};

export function ServicesCatalog() {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart, cartItems } = useCart();
  const [addedServices, setAddedServices] = useState<Set<string>>(new Set());

  useEffect(() => {
    loadServices();
  }, []);

  useEffect(() => {
    const serviceIds = new Set(cartItems.map(item => item.service.id));
    setAddedServices(serviceIds);
  }, [cartItems]);

  const loadServices = async () => {
    try {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('is_active', true)
        .order('category', { ascending: true });

      if (error) throw error;
      setServices(data || []);
    } catch (error) {
      console.error('Error loading services:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddToCart = async (service: Service) => {
    await addToCart(service);
    setAddedServices(prev => new Set([...prev, service.id]));
  };

  const servicesByCategory = services.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, Service[]>);

  const categoryOrder = ['creative', 'marketing', 'ai_automation', 'web_development', 'consulting'];
  const sortedCategories = Object.keys(servicesByCategory).sort((a, b) => {
    const indexA = categoryOrder.indexOf(a);
    const indexB = categoryOrder.indexOf(b);
    return indexA - indexB;
  });

  if (isLoading) {
    return (
      <section className="relative py-24 px-4 bg-[#060606]">
        <div className="container mx-auto text-center">
          <div className="text-[#C8F31D]">Loading services...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="services-catalog" className="relative py-24 px-4 bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Your One-Stop{' '}
            <span className="text-primary-dark">
              Creative Shop
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            From "hmm that\'s cool" to "TAKE MY MONEY"—we\'ve got you covered
          </p>
        </div>

        {sortedCategories.map((category) => {
          const categoryServices = servicesByCategory[category];
          const info = categoryInfo[category as keyof typeof categoryInfo];
          const Icon = info.icon;

          return (
            <div key={category} className="mb-32 last:mb-0">
              <div className="max-w-6xl mx-auto">
                <div className="mb-16 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ccff00] rounded-2xl mb-6">
                    <Icon className="w-8 h-8 text-black" />
                  </div>

                  <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    {info.name}
                  </h3>

                  <p className="text-2xl md:text-3xl text-primary-dark font-bold mb-6">
                    <span dangerouslySetInnerHTML={{ __html: info.headline }} />
                  </p>

                  <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: info.description }}>
                  </p>

                  <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mb-8">
                    {info.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-primary-dark mb-2">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-600">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-50 border border-[#ccff00]/20 rounded-2xl p-6 max-w-3xl mx-auto">
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles className="w-5 h-5 text-primary-dark" />
                      <span className="text-sm font-semibold text-primary-dark uppercase tracking-wider">
                        Why Choose {info.name}
                      </span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3 text-left">
                      {info.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-primary-dark">
                          <div className="w-1.5 h-1.5 bg-primary-dark rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-primary-dark">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-[#ccff00]/50 via-[#ccff00]/20 to-transparent"></div>

                  <div className={`grid gap-6 ${
                    categoryServices.length === 1
                      ? 'md:grid-cols-1 max-w-xl mx-auto'
                      : 'md:grid-cols-2 lg:grid-cols-3'
                  }`}>
                    {categoryServices.map((service) => {
                      const isAdded = addedServices.has(service.id);
                      return (
                        <GlowCard
                          key={service.id}
                          glowColor="neon"
                          customSize={true}
                          className="group flex flex-col h-full bg-white/90 backdrop-blur-sm"
                        >
                          <h4 className="text-xl font-bold text-gray-900 mb-3">
                            {service.name}
                          </h4>

                          <p className="text-gray-700 text-sm mb-4 leading-relaxed flex-grow">
                            {service.detailed_description}
                          </p>

                          <div className="mb-4">
                            <div className="flex items-center gap-2 mb-3 text-primary-dark">
                              <TrendingUp className="w-4 h-4" />
                              <h5 className="font-semibold text-xs uppercase tracking-wider text-primary-dark">Key Benefits</h5>
                            </div>
                            <div className="space-y-2">
                              {service.benefits.slice(0, 3).map((benefit, idx) => (
                                <div key={idx} className="flex items-start gap-2 text-xs text-gray-700 text-primary-dark">
                                  <div className="w-1.5 h-1.5 bg-primary-dark rounded-full mt-1.5 flex-shrink-0"></div>
                                  <span>{benefit}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <LiquidButton
                            variant="primary"
                            onClick={() => handleAddToCart(service)}
                            disabled={isAdded}
                            className="w-full inline-flex items-center justify-center gap-2 text-sm px-6 py-3 whitespace-nowrap"
                          >
                            {isAdded ? (
                              <>
                                <Check className="w-4 h-4" />
                                Hell Yeah, Added!
                              </>
                            ) : (
                              <>
                                <Plus className="w-4 h-4" />
                                I'm Interested!
                              </>
                            )}
                          </LiquidButton>
                        </GlowCard>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}