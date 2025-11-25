import { ArrowRight, Sparkles, Play } from 'lucide-react';
import { LiquidButton } from './ui/button';
import { LogoCarousel } from './LogoCarousel';

export function Hero() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Geometric Shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#ccff00]/20 to-[#ccff00]/5 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '6s' }}></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-yellow-300/15 to-transparent rounded-lg rotate-45 animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
          <div className="absolute bottom-32 left-20 w-20 h-20 bg-gradient-to-br from-[#ccff00]/25 to-transparent rounded-full animate-ping" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
          <div className="absolute top-60 left-1/3 w-16 h-16 bg-gradient-to-br from-amber-200/20 to-transparent rounded-full animate-bounce" style={{ animationDelay: '3s', animationDuration: '7s' }}></div>
          <div className="absolute bottom-40 right-1/4 w-28 h-28 bg-gradient-to-br from-[#ccff00]/15 to-transparent rounded-lg rotate-12 animate-pulse" style={{ animationDelay: '4s', animationDuration: '6s' }}></div>

          {/* Flowing Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#ccff00]/8 to-transparent rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-yellow-200/10 to-transparent rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-br from-amber-100/12 to-transparent rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-br from-[#ccff00]/6 to-transparent rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000"></div>

          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(204, 255, 0, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(204, 255, 0, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              animation: 'gridMove 20s linear infinite'
            }}></div>
          </div>

          {/* Floating Particles */}
          <div className="absolute top-20 left-1/4 w-2 h-2 bg-[#ccff00] rounded-full animate-ping" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
          <div className="absolute top-32 right-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
          <div className="absolute bottom-20 left-1/2 w-3 h-3 bg-[#ccff00]/70 rounded-full animate-ping" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
          <div className="absolute top-1/2 right-20 w-2 h-2 bg-amber-300 rounded-full animate-ping" style={{ animationDelay: '3s', animationDuration: '3.5s' }}></div>
          <div className="absolute bottom-40 left-10 w-1 h-1 bg-[#ccff00] rounded-full animate-ping" style={{ animationDelay: '4s', animationDuration: '4.5s' }}></div>

          {/* Animated Lines */}
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ccff00]/30 to-transparent animate-pulse" style={{ animationDelay: '1s', animationDuration: '6s' }}></div>
          <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-300/20 to-transparent animate-pulse" style={{ animationDelay: '3s', animationDuration: '8s' }}></div>

          {/* Rotating Elements */}
          <div className="absolute top-1/3 right-10 w-40 h-40 border border-[#ccff00]/10 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute bottom-1/4 left-1/4 w-32 h-32 border border-yellow-300/15 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>

          {/* Pulsing Gradient Overlays */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#ccff00]/2 via-transparent to-yellow-100/3 animate-pulse" style={{ animationDuration: '8s' }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ccff00]/10 border border-[#ccff00]/20 mb-8 backdrop-blur-sm animate-pulse">
                <Sparkles className="w-4 h-4 text-[#ccff00] animate-spin" style={{ animationDuration: '3s' }} />
                <span className="text-sm text-primary-dark font-medium">Your brand's glow-up starts here</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-[1.1] tracking-tight">
                We turn boring brands into{' '}
                <span className="inline-block relative">
                  <span className="absolute inset-0 bg-[#ccff00] rounded-lg -skew-x-12 transform"></span>
                  <span className="relative text-black font-bold px-2">
                    main characters
                  </span>
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
                Cinematic vibes + AI wizardry = brands that make people stop scrolling and start spending.
                Real estate, luxury cars, high-end fashion - we make 'em look absolutely chef's kiss.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <LiquidButton
                  variant="primary"
                  onClick={() => {
                    const servicesSection = document.getElementById('services-catalog');
                    servicesSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="animate-pulse hover:animate-none"
                >
                  Let's Create Something Epic
                </LiquidButton>
                <LiquidButton
                  variant="default"
                  onClick={() => {
                    const portfolioSection = document.getElementById('portfolio');
                    portfolioSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Show Me The Magic
                </LiquidButton>
              </div>

              <div className="mt-16 grid grid-cols-2 gap-8">
                {[
                  { value: '504', label: 'Happy Clients' },
                  { value: '50M+', label: 'Eyeballs Captured' },
                  { value: '98%', label: 'Come Back For More' },
                  { value: '24h', label: 'We Reply Fast AF' },
                ].map((stat, index) => (
                  <div key={stat.label} className="group">
                    <div className="text-3xl md:text-4xl font-bold text-primary-dark mb-2 group-hover:scale-110 transition-transform animate-pulse" style={{ animationDelay: `${index * 0.5}s` }}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-primary-dark">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              {/* Animated border around video */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#ccff00]/20 via-yellow-300/10 to-[#ccff00]/20 rounded-3xl blur-lg animate-pulse"></div>
              <div className="relative rounded-2xl overflow-hidden bg-gray-900 border-2 border-[#ccff00]/30 shadow-2xl shadow-[#ccff00]/20 animate-pulse" style={{ padding: '56.25% 0 0 0' }}>
                <iframe
                  src="https://player.vimeo.com/video/1129683678?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1"
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Artify Media Showreel"
                ></iframe>
              </div>
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
                  <Play className="w-4 h-4 text-primary-dark animate-pulse" />
                  Our showreel (warning: may cause jaw drops)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
          <div className="w-6 h-10 border-2 border-[#ccff00]/30 rounded-full p-1">
            <div className="w-1.5 h-3 bg-[#ccff00] rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>
      </section>

      <LogoCarousel heading="Brands that trust us (flex moment)" />

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </>
  );
}