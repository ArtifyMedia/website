import { Camera, TrendingUp, Globe, Palette, Mail, Database } from 'lucide-react';

export function Services() {
  const creativeServices = [
    {
      icon: Camera,
      title: 'Automotive Films',
      description: 'Cinematic shoots, lifestyle edits, and launch promos',
    },
    {
      icon: Globe,
      title: 'Real Estate Visuals',
      description: 'Ultra-luxury property videos and aerial tours',
    },
    {
      icon: Palette,
      title: 'Brand Ads',
      description: 'Reels, campaigns, and story-driven commercials',
    },
  ];

  const digitalServices = [
    {
      icon: TrendingUp,
      title: 'Paid Ads',
      description: 'Google, Meta, and TikTok campaigns that convert',
    },
    {
      icon: Globe,
      title: 'SEO & Web Design',
      description: 'High-converting experiences that rank',
    },
    {
      icon: Palette,
      title: 'Branding & Graphics',
      description: 'Visual identity and digital packaging',
    },
    {
      icon: Mail,
      title: 'Landing Pages & Email',
      description: 'Funnel-driven creative systems',
    },
    {
      icon: Database,
      title: 'CRM Setup & Management',
      description: 'Automated pipelines and analytics',
    },
  ];

  return (
    <section className="relative py-24 bg-[#060606] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.05)_0%,transparent_50%)]"></div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Full-Spectrum{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8F31D] to-[#C8F31D]">
              Creative & Growth
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            From concept to conversion, we handle it all
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 bg-[#C8F31D] rounded-full"></div>
              <h3 className="text-2xl font-bold text-white">
                Creative & Production
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-[#C8F31D]/50 to-transparent"></div>
            </div>

            <div className="space-y-4">
              {creativeServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="group backdrop-blur-sm bg-white/5 border border-[#C8F31D]/20 rounded-xl p-6 hover:border-[#C8F31D]/50 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#C8F31D] to-[#C8F31D] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">
                          {service.title}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 bg-[#C8F31D] rounded-full"></div>
              <h3 className="text-2xl font-bold text-white">
                Digital & AI Marketing
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-[#C8F31D]/50 to-transparent"></div>
            </div>

            <div className="space-y-4">
              {digitalServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="group backdrop-blur-sm bg-white/5 border border-[#C8F31D]/20 rounded-xl p-6 hover:border-[#C8F31D]/50 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#C8F31D] to-[#C8F31D] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">
                          {service.title}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
