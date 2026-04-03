import { FadeInSection } from '@/components/fade-in-section';

const industries = [
  {
    title: 'Healthcare',
    body: 'Reliable AI systems and infrastructure for high-stakes operational environments.',
  },
  {
    title: 'Pharmaceutical & Life Sciences',
    body: 'Compute-efficient support for research, modelling, and data-intensive innovation.',
  },
  {
    title: 'Food & Agriculture',
    body: 'Optimization for emerging AI and infrastructure use cases across the value chain.',
  },
  {
    title: 'Government & Universities',
    body: 'Secure, reliable, and scalable environments for public and research-driven organizations.',
  },
];

export function IndustrySection() {
  return (
    <section id="industries">
      <FadeInSection className="container section-heading">
        <p className="eyebrow">Industries</p>
        <h2>Built for sectors where performance, continuity, and trust matter.</h2>
      </FadeInSection>

      <FadeInSection className="container card-grid four-up">
        {industries.map((item) => (
          <article className="card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </FadeInSection>
    </section>
  );
}
