import { FadeInSection } from '@/components/fade-in-section';

const solutions = [
  {
    title: 'AI Agents as a Service',
    body: 'Automate repetitive workflows and create immediate productivity gains.',
  },
  {
    title: 'Compute Optimization Services',
    body: 'Identify bottlenecks, reduce compute cost, and refactor workloads for better performance.',
  },
  {
    title: 'Optimized Enterprise Infrastructure',
    body: 'Design and deliver NVIDIA-based environments once workloads are ready to scale.',
  },
];

export function SolutionSection() {
  return (
    <section id="solutions">
      <FadeInSection className="container section-heading">
        <p className="eyebrow">Solution</p>
        <h2>We optimize the full stack.</h2>
        <p>
          Synthetic Minds connects software, compute optimization, and
          infrastructure into one integrated model.
        </p>
      </FadeInSection>

      <FadeInSection className="container card-grid three-up">
        {solutions.map((item) => (
          <article className="card card-accent" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </FadeInSection>
    </section>
  );
}
