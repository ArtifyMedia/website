import { Bot, Phone, RefreshCw, Search, Zap } from 'lucide-react';

export function AISuite() {
  const aiModules = [
    {
      icon: Search,
      title: 'AI Audit & Consultation',
      description: 'Free initial audit to identify workflow bottlenecks and growth opportunities',
    },
    {
      icon: RefreshCw,
      title: 'Lead Reactivation Agents',
      description: 'AI voice/text reactivation for old leads that went cold',
    },
    {
      icon: Phone,
      title: 'AI Receptionist',
      description: 'Handles calls, FAQs, and after-hours booking automatically',
    },
    {
      icon: Zap,
      title: 'Outbound AI Agent',
      description: 'Calls new leads instantly and follows up 24/7',
    },
    {
      icon: Bot,
      title: 'AI Automations',
      description: 'Custom CRM, workflows, and marketing system setups',
    },
  ];

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.1)_0%,transparent_70%)]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C8F31D]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <div className="px-4 py-2 bg-[#C8F31D]/10 border border-[#C8F31D]/30 rounded-full">
              <span className="text-primary-dark text-sm font-semibold">AI SUITE</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Multiply performance with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8F31D] to-[#C8F31D]">
              intelligent automation
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            We bring the power of AI to creative and service businesses — not to replace people, but to multiply performance and profit
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {aiModules.map((module, index) => {
            const Icon = module.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative backdrop-blur-sm bg-white/5 border border-[#C8F31D]/20 rounded-2xl p-6 hover:border-[#C8F31D]/50 hover:bg-white/10 transition-all duration-300 h-full flex flex-col">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#C8F31D] to-[#C8F31D] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {module.title}
                  </h3>
                  <p className="text-gray-400 text-sm flex-grow">
                    {module.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-[#C8F31D]/10">
                    <button className="text-[#C8F31D] text-sm font-semibold hover:text-[#C8F31D]300 transition-colors">
                      <span className="text-primary-dark">Learn More →</span>
                    </button>
                  </div>
                <span className="text-primary-dark text-sm font-semibold">AI SUITE</span>
              </div>
            );
          })}
        </div>
            )

        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-[#C8F31D] to-[#C8F31D] hover:from-green-600 hover:to-[#B8E30D] text-black font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-[#C8F31D]/20">
            Get Your Free AI Audit
          </button>
        </div>
      </div>
    }
    )
    }
    </section>
  );
}
