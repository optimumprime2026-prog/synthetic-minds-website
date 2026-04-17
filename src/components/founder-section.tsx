import { FadeInSection } from '@/components/fade-in-section';

const founders = [
  {
    name: 'Pascal de Wit',
    body: 'Commercial and strategic AI background with experience in AI and high-performance computing consultancy.',
  },
  {
    name: 'Elger Bouwman',
    body: 'Commercial and operational hardware background with deep access to healthcare and public-sector markets.',
  },
];

export function FounderSection() {
  return (
    <section id="about">
      <FadeInSection className="container section-heading">
        <p className="eyebrow">Founders</p>
        <h2>Built by founders who understand both AI and infrastructure.</h2>
        <p>
          Together, they combine AI commercialization, infrastructure expertise,
          and a track record of execution.
        </p>
      </FadeInSection>

      <FadeInSection className="container card-grid two-up">
        {founders.map((founder) => (
          <article className="card" key={founder.name}>
            <h3>{founder.name}</h3>
            <p>{founder.body}</p>
          </article>
        ))}
      </FadeInSection>
    </section>
  );
}
