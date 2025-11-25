import { Handshake, Users, TrendingUp, Shield, Zap, CheckCircle2, ArrowRight, Briefcase, UserCheck, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PartnerPage() {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Lucrative Revenue Share',
      description: 'Earn 20-30% recurring commissions on all client projects and subscriptions.',
    },
    {
      icon: Shield,
      title: 'White-Label Solutions',
      description: 'Deliver our services under your brand. Your clients, your brand, our execution.',
    },
    {
      icon: Zap,
      title: 'Priority Support',
      description: '24-hour dedicated partner support with direct access to our team.',
    },
    {
      icon: Users,
      title: 'Co-Marketing Opportunities',
      description: 'Joint case studies, referrals, and collaborative marketing initiatives.',
    },
    {
      icon: TrendingUp,
      title: 'Exclusive Pricing',
      description: 'Partner-only pricing structure with volume discounts and flexible terms.',
    },
    {
      icon: Briefcase,
      title: 'Complete Training',
      description: 'Comprehensive onboarding, sales enablement, and ongoing education.',
    },
  ];

  const partnerTypes = [
    {
      title: 'For Agencies',
      icon: Briefcase,
      description: 'Expand your service portfolio without the overhead.',
      benefits: [
        'White-label our entire service suite',
        'No need to hire specialized talent',
        'Maintain client relationships directly',
        'Scale revenue without scaling headcount',
        'Access enterprise-grade production',
        'Dedicated partner success manager',
      ],
      ideal: 'Digital agencies, marketing firms, consultancies looking to expand creative and AI capabilities.',
    },
    {
      title: 'For Freelancers',
      icon: UserCheck,
      description: 'Compete with agencies while maintaining independence.',
      benefits: [
        'Deliver premium services solo',
        'No need to hire a team',
        'Focus on client relationships',
        'Scale beyond your time limitations',
        'Professional execution guaranteed',
        'Flexible project-by-project basis',
      ],
      ideal: 'Independent consultants, solopreneurs, and freelancers wanting to scale their offerings.',
    },
    {
      title: 'For Resellers',
      icon: DollarSign,
      description: 'Earn recurring commissions connecting businesses with solutions.',
      benefits: [
        'No technical knowledge required',
        'Recurring commission structure',
        'Support through entire sales cycle',
        'Marketing materials provided',
        'Lead nurturing assistance',
        'Performance-based bonuses',
      ],
      ideal: 'Business development professionals, industry connectors, and sales-focused partners.',
    },
  ];

  const howItWorks = [
    {
      step: '01',
      title: 'Apply',
      description: 'Submit your application with business details and why you want to partner.',
    },
    {
      step: '02',
      title: 'Onboarding',
      description: 'Complete partner training covering our services, processes, and best practices.',
    },
    {
      step: '03',
      title: 'Integration',
      description: 'Get set up with partner portal, materials, pricing, and support channels.',
    },
    {
      step: '04',
      title: 'Launch',
      description: 'Start bringing projects to us or reselling under your brand.',
    },
    {
      step: '05',
      title: 'Grow',
      description: 'Scale together with ongoing support, training, and collaborative opportunities.',
    },
  ];

  const faqs = [
    {
      question: 'What is the commission structure?',
      answer: 'Partners earn 20-30% recurring commission on all referred or white-labeled projects. The exact percentage depends on partner tier and project volume. We also offer performance bonuses for high-volume partners.',
    },
    {
      question: 'Do I need technical expertise?',
      answer: 'Not at all. We handle all technical execution. Your role is client relationships and project coordination. We provide comprehensive training to help you sell and manage projects effectively.',
    },
    {
      question: 'Can I use my own branding?',
      answer: 'Absolutely. White-label partners deliver our services completely under their brand. Your clients never know we\'re involved. Reseller partners can choose their level of co-branding.',
    },
    {
      question: 'What services can I offer?',
      answer: 'Full access to our creative production, digital marketing, AI automation, and brand strategy services. You can offer our complete suite or cherry-pick specific services that fit your clients.',
    },
    {
      question: 'How quickly can I get started?',
      answer: 'Once approved, onboarding takes 1-2 weeks. This includes training, portal setup, and materials preparation. You can bring your first project to us immediately after onboarding.',
    },
    {
      question: 'What support do I receive?',
      answer: 'Dedicated partner success manager, 24-hour support response time, sales enablement materials, technical consultation, and ongoing training. We\'re invested in your success.',
    },
    {
      question: 'Are there any fees to join?',
      answer: 'No joining fees. No monthly fees. No minimum commitments. We only succeed when you succeed. This is a true partnership built on mutual value.',
    },
    {
      question: 'How do payments work?',
      answer: 'Commissions are paid monthly, net 30 days after project completion or subscription payment. You receive detailed statements through the partner portal with full transparency.',
    },
  ];

  return (
    <div className="relative min-h-screen bg-white pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(204,255,0,0.03)_0%,transparent_50%)]"></div>

      <div className="relative">
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <div className="inline-block mb-6">
                <div className="px-4 py-2 bg-[#ccff00]/10 border border-[#ccff00]/30 rounded-full">
                  <span className="text-primary-dark text-sm font-semibold">PARTNER PROGRAM</span>
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Build your empire on{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] to-[#ccff00]">
                  our backbone
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
                White-label our world-class creative production and AI automation systems. Deliver enterprise-grade results under your brand, without the overhead.
              </p>
              <Link
                to="/partner/apply"
                className="inline-block px-8 py-4 bg-gradient-to-r from-[#ccff00] to-[#ccff00] hover:from-yellow-400 hover:to-[#ccff00] text-black font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-[#ccff00]/20"
              >
                Apply for Partnership
              </Link>
            </div>

            <div className="max-w-6xl mx-auto mb-24">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
                Partnership Benefits
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="backdrop-blur-sm bg-white/80 border border-[#ccff00]/20 rounded-2xl p-8 hover:border-[#ccff00]/50 transition-all duration-300 shadow-lg shadow-[#ccff00]/5"
                  >
                    <benefit.icon className="w-12 h-12 text-[#ccff00] mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="max-w-6xl mx-auto mb-24">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
                Partnership Types
              </h2>
              <div className="grid lg:grid-cols-3 gap-8">
                {partnerTypes.map((type, index) => (
                  <div
                    key={index}
                    className="backdrop-blur-sm bg-white/80 border border-[#ccff00]/20 rounded-3xl p-8 hover:border-[#ccff00]/50 transition-all duration-300 shadow-lg shadow-[#ccff00]/5"
                  >
                    <type.icon className="w-16 h-16 text-[#ccff00] mb-6" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{type.title}</h3>
                    <p className="text-gray-600 mb-6">{type.description}</p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-primary-dark mb-3">KEY BENEFITS:</h4>
                      <ul className="space-y-2">
                        {type.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle2 className="w-4 h-4 text-primary-dark flex-shrink-0 mt-0.5" />
                            <span className="highlight-text">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 border-t border-[#ccff00]/20">
                      <p className="text-xs text-gray-600 mb-4">
                        <span className="font-semibold text-gray-700">Ideal for:</span> {type.ideal}
                      </p>
                      <Link
                        to="/partner/apply"
                        className="block w-full px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary-dark font-semibold rounded-xl transition-all text-center"
                      >
                        <span className="flex items-center justify-center gap-2">
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="max-w-6xl mx-auto mb-24">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
                How It Works
              </h2>
              <div className="relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#ccff00]/20 hidden md:block"></div>
                <div className="space-y-12">
                  {howItWorks.map((item, index) => (
                    <div key={index} className="relative grid md:grid-cols-2 gap-8 items-center">
                      <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:order-2'}`}>
                        <div className="inline-block backdrop-blur-sm bg-white/80 border border-[#ccff00]/20 rounded-2xl p-8 hover:border-[#ccff00]/50 transition-all duration-300 shadow-lg shadow-[#ccff00]/5">
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                      <div className={`flex items-center justify-center ${index % 2 === 0 ? 'md:order-2' : ''}`}>
                        <div className="w-20 h-20 bg-gradient-to-br from-[#ccff00] to-[#ccff00] rounded-full flex items-center justify-center text-3xl font-bold text-black shadow-lg shadow-[#ccff00]/20">
                          {item.step}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto mb-24">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="backdrop-blur-sm bg-white/80 border border-[#ccff00]/20 rounded-2xl p-8 hover:border-[#ccff00]/50 transition-all duration-300 shadow-lg shadow-[#ccff00]/5"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="max-w-4xl mx-auto text-center">
              <div className="backdrop-blur-sm bg-gradient-to-br from-[#ccff00]/10 to-transparent border border-[#ccff00]/20 rounded-3xl p-12 shadow-lg shadow-[#ccff00]/5">
                <Handshake className="w-20 h-20 text-[#ccff00] mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Ready to Partner with Us?
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Join our network of successful partners delivering world-class results to their clients. No upfront fees, no minimums, just mutual success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/partner/apply"
                    className="px-8 py-4 bg-gradient-to-r from-[#ccff00] to-[#ccff00] hover:from-yellow-400 hover:to-[#ccff00] text-black font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-[#ccff00]/20 text-center"
                  >
                    Apply Now
                  </Link>
                  <Link
                    to="/partner/apply"
                    className="px-8 py-4 border border-[#ccff00]/30 hover:border-[#ccff00] text-[#ccff00] font-bold rounded-xl transition-all duration-300 hover:bg-[#ccff00]/10 text-center"
                  >
                    Schedule a Call
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}