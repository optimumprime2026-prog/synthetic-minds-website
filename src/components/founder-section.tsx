import { FadeInSection } from '@/components/fade-in-section';

const founders = [
  {
    name: 'Pascal de Wit',
    body: 'AI strategist and experienced entrepreneur with deep expertise in scaling businesses through technology and automation.',
  },
  {
    name: 'Elger Bouwman',
    body: 'Operations and hardware specialist with a track record of building and exiting technology companies.',
  },
];

export function FounderSection() {
  return (
    <section id="about">
      <FadeInSection className="container section-heading">
        <p className="eyebrow">Founders</p>
        <h2>Built by entrepreneurs who know what it takes to scale.</h2>
        <p>
          Together, they combine AI expertise, operational depth, and a
          firsthand understanding of the challenges startups face.
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
