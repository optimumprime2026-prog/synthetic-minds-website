const founders = [
  {
    name: 'Pascal de Wit',
    role: 'Commercial and strategic AI lead',
    body: 'Pascal brings experience in AI and high-performance computing consultancy, with a strong background in commercial positioning, client relationships, and go-to-market development. He also contributes access to engineering talent and existing NVIDIA relationships.',
  },
  {
    name: 'Elger Bouwman',
    role: 'Commercial and operational hardware lead',
    body: 'Elger brings deep expertise in hardware commercialization, sourcing, channel relationships, and enterprise technology delivery. His background gives Synthetic Minds strong access to infrastructure execution and sector relationships in healthcare and the public sector.',
  },
];

const strengths = [
  'AI commercialization and market positioning',
  'Hardware and infrastructure execution',
  'Access to healthcare, pharma, and public-sector environments',
  'A business model that connects software and hardware optimization',
];

export default function AboutPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container section-heading page-intro">
          <p className="eyebrow">About</p>
          <h1>Commercial and technical depth across AI and infrastructure.</h1>
          <p>
            Synthetic Minds is built by founders who combine AI
            commercialization, infrastructure expertise, and sector access into
            one integrated business.
          </p>
        </div>
      </section>

      <section>
        <div className="container split-section">
          <div>
            <p className="eyebrow">Who we are</p>
            <h2>Built to bridge the gap between AI ambition and infrastructure reality.</h2>
          </div>
          <p>
            Synthetic Minds was created around a clear idea: organizations do not
            just need access to AI, they need the ability to make it efficient,
            scalable, and economically sustainable. The company combines
            commercial AI expertise with hardware and infrastructure execution to
            help clients move from experimentation to operational value.
          </p>
        </div>
      </section>

      <section>
        <div className="container section-heading">
          <p className="eyebrow">Founders</p>
          <h2>The team behind Synthetic Minds</h2>
        </div>
        <div className="container card-grid two-up">
          {founders.map((founder) => (
            <article className="card" key={founder.name}>
              <h3>{founder.name}</h3>
              <p className="card-label">{founder.role}</p>
              <p>{founder.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="container split-section">
          <div>
            <p className="eyebrow">Why this team matters</p>
            <h2>A rare founder combination across software, compute, and infrastructure.</h2>
          </div>
          <ul className="bullet-list">
            {strengths.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="container cta-panel">
          <p className="eyebrow">Talk to us</p>
          <h2>Looking for a partner that understands both AI and infrastructure?</h2>
          <p>
            Let’s discuss how Synthetic Minds can help your organization build AI
            systems that are efficient, scalable, and ready for real-world use.
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
