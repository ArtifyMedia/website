import AutoScroll from "embla-carousel-auto-scroll";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  name: string;
  className?: string;
}

interface LogoCarouselProps {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const LogoCarousel = ({
  heading = "Brands We've Worked With",
  logos = [
    { id: "logo-1", description: "Rolls-Royce", name: "Rolls-Royce", className: "h-8 w-auto text-gray-700" },
    { id: "logo-2", description: "Zainab Chottani", name: "Zainab Chottani", className: "h-8 w-auto text-gray-700" },
    { id: "logo-3", description: "Dubai Mall", name: "Dubai Mall", className: "h-8 w-auto text-gray-700" },
    { id: "logo-4", description: "Emirates", name: "Emirates", className: "h-8 w-auto text-gray-700" },
    { id: "logo-5", description: "Burj Khalifa", name: "Burj Khalifa", className: "h-8 w-auto text-gray-700" },
    { id: "logo-6", description: "Atlantis", name: "Atlantis", className: "h-8 w-auto text-gray-700" },
  ],
}: LogoCarouselProps) => {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container flex flex-col items-center text-center">
        <h2 className="mb-10 text-2xl font-bold text-gray-900 lg:text-3xl">
          {heading}
        </h2>
      </div>
      <div className="relative mx-auto flex items-center justify-center lg:max-w-6xl">
        <Carousel
          opts={{ loop: true }}
          plugins={[AutoScroll({ playOnInit: true, speed: 1 })]}
        >
          <CarouselContent className="ml-0">
            {logos.map((logo) => (
              <CarouselItem
                key={logo.id}
                className="flex basis-1/2 justify-center pl-0 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
              >
                <div className="mx-10 flex shrink-0 items-center justify-center">
                  <div className={logo.className}>
                    <span className="text-xl font-bold text-gray-600">{logo.name}</span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent"></div>
      </div>
    </section>
  );
};

export { LogoCarousel };
