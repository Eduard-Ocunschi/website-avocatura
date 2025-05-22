import Area from "./_components/Area/Area";
import LogoCarousel from "./_components/CarouselBrands/LogoCarousel";

import Hero from "./_components/Hero/Hero";
import Testimonials from "./_components/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Area />
      <LogoCarousel />
      <Testimonials />
    </>
  );
}
