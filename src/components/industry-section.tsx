import { FadeInSection } from '@/components/fade-in-section';

const services = [
  {
    title: 'AI Business Operations',
    body: 'Custom AI agents that automate admin, marketing, lead gen, and sales for startups and scale-ups.',
  },
  {
    title: 'Workshop & Garage',
    body: 'Professional automotive maintenance and repairs in Estepona, Spain. Online booking, fully automated operations.',
  },
  {
    title: 'Racing & Radical',
    body: 'Radical vehicle sales, race events across Andalusia, roadtrips and rallies for driving enthusiasts.',
  },
];

export function IndustrySection() {
  return (
    <section>
      <FadeInSection className="container section-heading">
        <p className="eyebrow">Three pillars</p>
        <h2>Performance in everything we do.</h2>
      </FadeInSection>

      <FadeInSection className="container card-grid three-up">
        {services.map((item) => (
          <article className="card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </FadeInSection>
    </section>
  );
}
