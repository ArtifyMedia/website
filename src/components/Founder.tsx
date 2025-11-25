import { Quote } from 'lucide-react';

export function Founder() {
  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(204,255,0,0.03)_0%,transparent_70%)]"></div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="backdrop-blur-sm bg-white/80 border border-[#ccff00]/20 rounded-3xl p-8 md:p-12 relative shadow-lg shadow-[#ccff00]/5">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#ccff00] to-[#ccff00] rounded-full flex items-center justify-center shadow-lg shadow-[#ccff00]/20">
                <Quote className="w-8 h-8 text-black" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <img
                  src="/DSC08329.jpg"
                  alt="Farrukh Ali - Founder & Creative Director"
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
              </div>

              <div className="order-1 md:order-2 text-center md:text-left">
                <blockquote className="text-xl md:text-2xl lg:text-3xl text-gray-900 font-light leading-relaxed mb-8">
                  "Cinematography isn't about cameras — it's about{' '}
                  <span className="text-[#ccff00] font-semibold">emotion</span>,{' '}
                  <span className="text-[#ccff00] font-semibold">timing</span>, and{' '}
                  <span className="text-[#ccff00] font-semibold">precision</span>."
                </blockquote>

                <div className="flex items-center justify-center md:justify-start gap-4">
                  <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#ccff00]/50 to-transparent"></div>
                  <div className="text-left">
                    <p className="text-xl font-bold text-gray-900">Farrukh Ali</p>
                    <p className="text-primary-dark">Founder & Creative Director</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}