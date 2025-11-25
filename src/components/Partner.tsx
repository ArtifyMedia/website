import { Handshake, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Partner() {
  const benefits = [
    'White-label our creative and AI systems',
    'Deliver world-class results under your brand',
    'Access to exclusive pricing and priority support',
    'Complete partner onboarding and training',
    'Co-marketing opportunities',
    'Revenue share program',
  ];

  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(204,255,0,0.03)_0%,transparent_50%)]"></div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <div className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
                <span className="text-primary-dark text-sm font-semibold">PARTNER PROGRAM</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Build your agency on{' '}
              <span className="inline-block relative">
                <span className="absolute inset-0 bg-[#ccff00] rounded-lg transform -skew-x-6"></span>
                <span className="relative text-black font-bold px-2">
                  our backbone
                </span>
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              White-label our creative production and AI automation systems to deliver world-class results under your brand
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ccff00]/10 to-transparent rounded-3xl blur-2xl"></div>
              <div className="relative backdrop-blur-sm bg-white border border-[#ccff00]/20 rounded-3xl p-12 shadow-lg shadow-[#ccff00]/5">
                <div className="w-20 h-20 bg-gradient-to-br from-[#ccff00] to-[#ccff00] rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Handshake className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                  Partner Benefits
                </h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary-dark flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <Link
                to="/partner"
                className="block backdrop-blur-sm bg-white border border-[#ccff00]/20 rounded-2xl p-8 hover:border-[#ccff00]/50 transition-all duration-300 shadow-lg shadow-[#ccff00]/5"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  For Agencies
                </h4>
                <p className="text-gray-600 mb-4">
                  Expand your service offerings with our premium creative and AI automation solutions. No overhead, just pure profit margin.
                </p>
                <div className="flex items-center gap-2 text-primary-dark font-semibold">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>

              <Link
                to="/partner"
                className="block backdrop-blur-sm bg-white border border-[#ccff00]/20 rounded-2xl p-8 hover:border-[#ccff00]/50 transition-all duration-300 shadow-lg shadow-[#ccff00]/5"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  For Freelancers
                </h4>
                <p className="text-gray-600 mb-4">
                  Scale your solo operation with enterprise-grade capabilities. Compete with agencies while maintaining your independence.
                </p>
                <div className="flex items-center gap-2 text-primary-dark font-semibold">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>

              <Link
                to="/partner"
                className="block backdrop-blur-sm bg-white border border-[#ccff00]/20 rounded-2xl p-8 hover:border-[#ccff00]/50 transition-all duration-300 shadow-lg shadow-[#ccff00]/5"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  For Resellers
                </h4>
                <p className="text-gray-600 mb-4">
                  Earn recurring commissions by connecting businesses with our solutions. Comprehensive support every step of the way.
                </p>
                <div className="flex items-center gap-2 text-primary-dark font-semibold">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>

              <Link
                to="/partner"
                className="block w-full px-8 py-4 bg-gradient-to-r from-[#ccff00] to-[#ccff00] hover:from-yellow-400 hover:to-[#ccff00] text-black font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-[#ccff00]/20 text-center"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}