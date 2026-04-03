import { CtaSection } from '@/components/cta-section';
import { DifferentiatorSection } from '@/components/differentiator-section';
import { FounderSection } from '@/components/founder-section';
import { HeroSection } from '@/components/hero-section';
import { IndustrySection } from '@/components/industry-section';
import { ProcessSection } from '@/components/process-section';
import { ProblemSection } from '@/components/problem-section';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { SolutionSection } from '@/components/solution-section';

export default function HomePage() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ProcessSection />
      <IndustrySection />
      <DifferentiatorSection />
      <FounderSection />
      <CtaSection />
      <SiteFooter />
    </main>
  );
}
