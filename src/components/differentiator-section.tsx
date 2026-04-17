import { FadeInSection } from '@/components/fade-in-section';

const differentiators = [
  'Full-stack approach across automation, optimization, refactoring, and infrastructure',
  'NVIDIA-oriented infrastructure thinking',
  'Commercial and technical depth',
  'Relevant vertical access in healthcare, pharma, government, and related sectors',
];

export function DifferentiatorSection() {
  return (
    <section>
      <FadeInSection className="container split-section">
        <div>
          <p className="eyebrow">Why Synthetic Minds</p>
          <h2>Most providers focus on either AI workflows or infrastructure. We connect both.</h2>
        </div>
        <ul className="bullet-list">
          {differentiators.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </FadeInSection>
    </section>
  );
}
