const solutionPillars = [
  {
    title: 'AI Agents as a Service',
    description:
      'Automate repetitive workflows and create immediate productivity gains through practical AI deployment.',
    points: [
      'Workflow automation for repetitive business tasks',
      'Shorter sales cycles and faster time-to-value',
      'Practical entry point into broader AI transformation',
    ],
  },
  {
    title: 'Compute Optimization Services',
    description:
      'Identify bottlenecks, reduce compute cost, and refactor workloads for efficiency and scale.',
    points: [
      'Compute Surveys to uncover cost and performance drivers',
      'Software refactoring for more efficient execution',
      'Optimization aligned to infrastructure economics',
    ],
  },
  {
    title: 'Optimized Enterprise Infrastructure',
    description:
      'Design and deliver NVIDIA-based environments once software and economics are aligned.',
    points: [
      'Infrastructure design around actual workload requirements',
      'Support for on-premise and private cloud environments',
      'Built for long-term performance and scale',
    ],
  },
];

const process = [
  {
    title: '1. Assess',
    body: 'We analyze workflows, workloads, and infrastructure bottlenecks to understand where cost and performance issues exist.',
  },
  {
    title: '2. Optimize',
    body: 'We improve software efficiency, automate repetitive work, and align systems for practical AI performance.',
  },
  {
    title: '3. Scale',
    body: 'We help deploy the right infrastructure once the software, workload, and economics are ready for scale.',
  },
];

const outcomes = [
  'Lower compute waste',
  'Better infrastructure visibility',
  'Higher workflow productivity',
  'Improved AI performance and reliability',
  'A clearer path from experimentation to scale',
];

export default function SolutionsPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container section-heading page-intro">
          <p className="eyebrow">Solutions</p>
          <h1>Full-stack solutions for efficient, scalable AI systems.</h1>
          <p>
            Synthetic Minds helps organizations move from fragmented AI efforts to
            efficient, production-ready systems by combining workflow automation,
            compute optimization, and infrastructure design.
          </p>
        </div>
      </section>

      <section>
        <div className="container split-section">
          <div>
            <p className="eyebrow">Overview</p>
            <h2>One integrated model across software, compute, and infrastructure.</h2>
          </div>
          <p>
            Most providers focus on one layer of the problem. Synthetic Minds
            connects them. We enter through practical AI use cases, improve the
            efficiency of the underlying workloads, and help deploy the right
            infrastructure once scale is justified.
          </p>
        </div>
      </section>

      <section>
        <div className="container section-heading">
          <p className="eyebrow">Three pillars</p>
          <h2>What we deliver</h2>
        </div>
        <div className="container card-grid three-up">
          {solutionPillars.map((pillar) => (
            <article className="card card-accent" key={pillar.title}>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
              <ul className="bullet-list compact-list">
                {pillar.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="container split-section">
          <div>
            <p className="eyebrow">How we work</p>
            <h2>Assess. Optimize. Scale.</h2>
          </div>
          <div className="steps">
            {process.map((step) => (
              <div className="step" key={step.title}>
                <strong>{step.title}</strong>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container split-section">
          <div>
            <p className="eyebrow">Outcomes</p>
            <h2>What clients gain</h2>
          </div>
          <ul className="bullet-list">
            {outcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="container cta-panel">
          <p className="eyebrow">Talk to us</p>
          <h2>Ready to make your AI systems more efficient?</h2>
          <p>
            Let’s discuss where your organization can improve performance,
            control compute cost, and scale with confidence.
          </p>
          <div className="button-row centered">
            <a className="button button-primary" href="/contact">
              Book a call
            </a>
            <a className="button button-secondary" href="/contact">
              Request a consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
