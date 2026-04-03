const industries = [
  {
    title: 'Healthcare',
    description:
      'Reliable AI systems and infrastructure for high-stakes operational environments.',
    points: [
      'Operational continuity matters',
      'Infrastructure reliability is critical',
      'AI adoption needs trust, control, and performance',
    ],
  },
  {
    title: 'Pharmaceutical & Life Sciences',
    description:
      'Compute-efficient support for research, modelling, and data-intensive innovation.',
    points: [
      'Accelerated computing demand is rising',
      'Research environments need scalable infrastructure',
      'Compute economics matter alongside performance',
    ],
  },
  {
    title: 'Food & Agriculture',
    description:
      'Optimization for emerging AI and infrastructure use cases across the value chain.',
    points: [
      'Operational AI use cases are increasing',
      'Infrastructure maturity varies widely',
      'Efficiency gains can create direct business value',
    ],
  },
  {
    title: 'Government & Universities',
    description:
      'Secure, reliable, and scalable environments for public and research-driven organizations.',
    points: [
      'Trust, continuity, and public accountability are essential',
      'Research workloads can be compute-intensive',
      'Long-term scalability needs structured infrastructure decisions',
    ],
  },
];

const whyThese = [
  'Strong AI relevance and operational complexity',
  'Growing infrastructure and compute demands',
  'High need for reliability, trust, and continuity',
  'Clear founder access and domain credibility',
];

export default function IndustriesPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container section-heading page-intro">
          <p className="eyebrow">Industries</p>
          <h1>Built for sectors where performance, continuity, and trust matter.</h1>
          <p>
            Synthetic Minds focuses on industries where AI adoption, compute
            intensity, and operational reliability create a strong need for
            specialized support.
          </p>
        </div>
      </section>

      <section>
        <div className="container split-section">
          <div>
            <p className="eyebrow">Industry focus</p>
            <h2>We prioritize sectors where infrastructure decisions matter most.</h2>
          </div>
          <ul className="bullet-list">
            {whyThese.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="container section-heading">
          <p className="eyebrow">Where we focus</p>
          <h2>Initial sectors</h2>
        </div>
        <div className="container card-grid two-up">
          {industries.map((industry) => (
            <article className="card" key={industry.title}>
              <h3>{industry.title}</h3>
              <p>{industry.description}</p>
              <ul className="bullet-list compact-list">
                {industry.points.map((point) => (
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
            <p className="eyebrow">Why this matters</p>
            <h2>These sectors need more than generic AI support.</h2>
          </div>
          <p>
            In these environments, performance, compliance, continuity, and
            infrastructure economics are closely linked. Synthetic Minds is built
            to help organizations move beyond isolated AI experiments and toward
            efficient, scalable systems that match real-world operational needs.
          </p>
        </div>
      </section>

      <section>
        <div className="container cta-panel">
          <p className="eyebrow">Talk to us</p>
          <h2>Looking for AI infrastructure that fits your sector?</h2>
          <p>
            Let’s explore where your organization can reduce waste, improve
            performance, and scale intelligently.
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
