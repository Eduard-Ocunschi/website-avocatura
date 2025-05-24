import { getTranslations } from "next-intl/server";
import Area from "../_components/Area/Area";
import LogoCarousel from "../_components/CarouselBrands/LogoCarousel";

import Hero from "../_components/Hero/Hero";
import Testimonials from "../_components/Testimonials/Testimonials";

export default async function Home() {
  const t = await getTranslations("Hero");
  return (
    <>
      <Hero t={t} />
      <Area />
      <LogoCarousel />
      <Testimonials />
    </>
  );
}
