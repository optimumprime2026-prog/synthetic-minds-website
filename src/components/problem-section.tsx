import { FadeInSection } from '@/components/fade-in-section';

const problems = [
  {
    title: 'Rising compute costs',
    body: 'AI is becoming more expensive to run as models and data volumes grow.',
  },
  {
    title: 'Limited infrastructure visibility',
    body: 'Most companies do not know whether they are compute-bound, memory-bound, or I/O-bound.',
  },
  {
    title: 'GPU scarcity',
    body: 'The era of solving performance problems by simply buying more compute is ending.',
  },
  {
    title: 'Business-critical AI risk',
    body: 'When AI systems become essential to operations, inefficiency and fragility become unacceptable.',
  },
];

export function ProblemSection() {
  return (
    <section>
      <FadeInSection className="container section-heading">
        <p className="eyebrow">Problem</p>
        <h2>AI demand is growing. Compute is becoming the bottleneck.</h2>
        <p>
          As AI workloads become more compute-intensive and business-critical,
          many organizations face rising infrastructure costs, limited
          visibility, and growing pressure on internal systems.
        </p>
      </FadeInSection>

      <FadeInSection className="container card-grid four-up">
        {problems.map((item) => (
          <article className="card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </FadeInSection>
    </section>
  );
}
