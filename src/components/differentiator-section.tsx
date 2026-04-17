import { FadeInSection } from '@/components/fade-in-section';

const differentiators = [
  'Deep AI expertise — we build and operate the systems, not just advise',
  'Low upfront cost with equity participation — fully aligned incentives',
  'Experienced entrepreneurs who understand scaling challenges firsthand',
  'Based in Andalusia with a strong local founder network',
];

export function DifferentiatorSection() {
  return (
    <section>
      <FadeInSection className="container split-section">
        <div>
          <p className="eyebrow">Why MM Workshop</p>
          <h2>Not just technology — real business impact.</h2>
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
