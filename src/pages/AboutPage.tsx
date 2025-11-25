import { Target, Users, Award, Rocket, Heart, Zap } from 'lucide-react';

export function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Emotion First',
      description: 'We believe in creating content that resonates on a human level, moving beyond metrics to touch hearts.',
    },
    {
      icon: Zap,
      title: 'Innovation Driven',
      description: 'Constantly pushing boundaries with cutting-edge AI and creative techniques to deliver exceptional results.',
    },
    {
      icon: Users,
      title: 'Client Partnership',
      description: 'Your success is our success. We work as an extension of your team, not just another vendor.',
    },
    {
      icon: Award,
      title: 'Excellence Standard',
      description: 'Mediocrity isn\'t in our vocabulary. Every project receives the same meticulous attention to detail.',
    },
  ];

  const stats = [
    { value: '500+', label: 'Projects Completed', desc: 'Across automotive, real estate, and luxury sectors' },
    { value: '50M+', label: 'Views Generated', desc: 'Creating viral moments for brands worldwide' },
    { value: '98%', label: 'Client Retention', desc: 'Long-term partnerships built on trust and results' },
    { value: '15+', label: 'Countries Served', desc: 'Global reach with local understanding' },
  ];

  const team = [
    {
      role: 'Creative Direction',
      description: 'Award-winning directors and cinematographers who craft visual stories that captivate and convert.',
    },
    {
      role: 'AI Engineering',
      description: 'Technical experts building intelligent automation systems that scale your operations.',
    },
    {
      role: 'Marketing Strategy',
      description: 'Data-driven strategists who ensure every campaign delivers measurable business impact.',
    },
    {
      role: 'Production Team',
      description: 'World-class crew with experience on major commercial productions and luxury campaigns.',
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
                  <span className="text-primary-dark text-sm font-semibold">ABOUT ARTIFY MEDIA</span>
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Where{' '}
                <span className="highlight-text">
                  creativity meets intelligence
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                We're not your typical agency. We're a hybrid creative studio and technology company obsessed with crafting emotion that sells.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-24">
              <div className="backdrop-blur-sm bg-white/80 border border-[#ccff00]/20 rounded-3xl p-10 shadow-lg shadow-[#ccff00]/5">
                <Target className="w-12 h-12 text-[#ccff00] mb-6" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To empower brands with cinematic storytelling and intelligent automation that doesn't just look beautiful—it drives real business results. We bridge the gap between art and science, emotion and efficiency.
                </p>
              </div>

              <div className="backdrop-blur-sm bg-white/80 border border-[#ccff00]/20 rounded-3xl p-10 shadow-lg shadow-[#ccff00]/5">
                <Rocket className="w-12 h-12 text-[#ccff00] mb-6" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To become the world's leading creative technology partner for luxury, automotive, and real estate brands. A future where every brand can access enterprise-grade creativity and AI-powered automation.
                </p>
              </div>
            </div>

            <div className="max-w-6xl mx-auto mb-24">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
                Our Core Values
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="backdrop-blur-sm bg-white/80 border border-[#ccff00]/20 rounded-2xl p-8 hover:border-[#ccff00]/50 transition-all duration-300 shadow-lg shadow-[#ccff00]/5"
                  >
                    <value.icon className="w-10 h-10 text-[#ccff00] mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="max-w-6xl mx-auto mb-24">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
                Our Impact
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="backdrop-blur-sm bg-white/80 border border-[#ccff00]/20 rounded-2xl p-8 text-center hover:border-[#ccff00]/50 transition-all duration-300 shadow-lg shadow-[#ccff00]/5"
                  >
                    <div className="text-4xl md:text-5xl font-bold text-[#ccff00] mb-2">
                      {stat.value}
                    </div>
                    <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
                    <div className="text-sm text-gray-600">{stat.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="max-w-6xl mx-auto mb-24">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-6">
                Our Story
              </h2>
              <div className="backdrop-blur-sm bg-white/80 border border-[#ccff00]/20 rounded-3xl p-12 shadow-lg shadow-[#ccff00]/5">
                <div className="prose prose-invert prose-lg max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Artify Media was born from a simple observation: brands were being forced to choose between creative excellence and operational efficiency. Beautiful campaigns that took forever to produce, or fast execution with mediocre results.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    We asked ourselves: why can't you have both? Why can't a brand get stunning cinematic content AND intelligent automation that scales? That question became our mission.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Starting with a handful of automotive clients who believed in our vision, we've grown into a team of creative directors, cinematographers, AI engineers, and marketing strategists. We've produced campaigns that have generated over 50 million views, built AI systems that save our clients hundreds of hours monthly, and created partnerships with some of the most ambitious brands in luxury, automotive, and real estate.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Today, we're proud to be more than an agency. We're a creative technology partner that helps brands craft emotion, automate intelligence, and scale success.
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
                Our Team
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {team.map((member, index) => (
                  <div
                    key={index}
                    className="backdrop-blur-sm bg-white/80 border border-[#ccff00]/20 rounded-2xl p-8 hover:border-[#ccff00]/50 transition-all duration-300 shadow-lg shadow-[#ccff00]/5"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      <span className="highlight-text">{member.role}</span>
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{member.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
