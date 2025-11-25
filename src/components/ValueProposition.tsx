import { Film, Target, Crown } from 'lucide-react';

export function ValueProposition() {
  const pillars = [
    {
      icon: Film,
      title: 'Cinematic Strategy',
      description: 'Every frame tells a story that moves your audience to action',
    },
    {
      icon: Target,
      title: 'Precision Production',
      description: 'World-class execution that elevates your brand presence',
    },
    {
      icon: Crown,
      title: 'Luxury Positioning',
      description: 'Crafted for brands that refuse to be ordinary',
    },
  ];

  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(204,255,0,0.05)_0%,transparent_50%)]"></div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            We help brands craft{' '}
            <span className="inline-block relative">
              <span className="absolute inset-0 bg-[#ccff00] rounded-lg transform -skew-x-6"></span>
              <span className="relative text-black font-bold px-2">
                emotion that sells
              </span>
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Where storytelling meets intelligent systems
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#ccff00]/5 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative backdrop-blur-sm bg-white border border-[#ccff00]/20 rounded-2xl p-8 hover:border-[#ccff00]/50 transition-all duration-300 hover:-translate-y-2 shadow-lg shadow-[#ccff00]/5">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#ccff00] to-[#ccff00] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 text-primary-dark">{pillar.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}