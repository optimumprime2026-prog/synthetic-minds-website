import { FadeInSection } from '@/components/fade-in-section';

export function ProcessSection() {
  return (
    <section id="how">
      <FadeInSection className="container split-section">
        <div>
          <p className="eyebrow">How it works</p>
          <h2>Analyze. Build. Operate.</h2>
        </div>
        <div className="steps">
          <div className="step">
            <strong>Analyze</strong>
            <p>
              We map your current processes and identify where AI agents
              can replace manual work.
            </p>
          </div>
          <div className="step">
            <strong>Build</strong>
            <p>
              We design custom AI workflows and deploy agents tailored
              to your business operations.
            </p>
          </div>
          <div className="step">
            <strong>Operate</strong>
            <p>
              We continuously manage and optimize your AI systems.
              We don't just build — we run them.
            </p>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
