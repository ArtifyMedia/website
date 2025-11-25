export function Team() {
  const teamMembers = [
    {
      name: 'Moiz Khan',
      title: 'Director of AI',
      image: '/WhatsApp Image 2025-11-26 at 1.55.02 AM.jpeg',
      bio: "I'm Moiz - I can't sort my own life out, but I can turn your business into a high-efficiency, revenue-producing machine.",
      description: (
        <>
          I build <span className="text-[#ccff00] font-semibold">AI automations</span> and{' '}
          <span className="text-[#ccff00] font-semibold">custom workflows</span> that remove bottlenecks, eliminate wasted time, and fix every system draining your revenue. If it repeats, I automate it. If it leaks money, I plug it.
        </>
      )
    },
    {
      name: 'Haad Alvi',
      title: 'Director of Marketing',
      image: '/WhatsApp Image 2025-11-26 at 1.52.55 AM.jpeg',
      bio: "I misplace my own charger daily, but I can turn your entire funnel into a predictable revenue machine.",
      description: (
        <>
          I'm Haad. I take broken pixels, chaotic <span className="text-[#ccff00] font-semibold">CRMs</span>, and leaky workflows and rebuild them into clean, efficient{' '}
          <span className="text-[#ccff00] font-semibold">growth systems</span>.
        </>
      )
    }
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(204,255,0,0.03)_0%,transparent_70%)]"></div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-6xl mx-auto mb-16 text-center">
          <div className="inline-block mb-6">
            <div className="px-4 py-2 bg-[#ccff00]/10 border border-[#ccff00]/30 rounded-full">
              <span className="text-primary-dark text-sm font-semibold">MEET THE TEAM</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            The minds behind{' '}
            <span className="highlight-text">your success</span>
          </h2>
        </div>

        <div className="space-y-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="backdrop-blur-sm bg-gray-50/80 border border-[#ccff00]/20 rounded-3xl p-8 md:p-12 relative shadow-lg shadow-[#ccff00]/5"
            >
              <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.title}`}
                    className="w-full h-auto rounded-2xl shadow-xl object-cover aspect-video"
                  />
                </div>

                <div className={`text-center md:text-left ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                  <div className="mb-6">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-[#ccff00] text-lg font-semibold">{member.title}</p>
                  </div>

                  <div className="space-y-4">
                    <p className="text-lg md:text-xl text-gray-900 font-medium leading-relaxed">
                      {member.bio}
                    </p>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
