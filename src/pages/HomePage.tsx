import { Hero } from '../components/Hero';
import { ValueProposition } from '../components/ValueProposition';
import { Reel } from '../components/Reel';
import { ServicesCatalog } from '../components/ServicesCatalog';
import { WhyChoose } from '../components/WhyChoose';
import { Portfolio } from '../components/Portfolio';
import { Founder } from '../components/Founder';
import { Blog } from '../components/Blog';
import { Partner } from '../components/Partner';

export function HomePage() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <Reel />
      <ServicesCatalog />
      <WhyChoose />
      <Portfolio />
      <Founder />
      <Blog />
      <Partner />
    </>
  );
}
