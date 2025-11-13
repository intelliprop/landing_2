import MotionProvider from '@/components/providers/MotionProvider';
import Hero from '@/components/hero/Hero';
import Mission from '@/components/sections/Mission';
import HowItWorks from '@/components/sections/HowItWorks';
import Intelliscore from '@/components/sections/Intelliscore';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';

export default function HomePage() {
  return (
    <MotionProvider>
      <Hero />
      <Mission />
      <HowItWorks />
      <Intelliscore />
      <Testimonials />
      <Pricing />
    </MotionProvider>
  );
}
