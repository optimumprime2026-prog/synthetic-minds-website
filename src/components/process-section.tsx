import { FadeInSection } from '@/components/fade-in-section';

export function ProcessSection() {
  return (
    <section>
      <FadeInSection className="container split-section">
        <div>
          <p className="eyebrow">How it works</p>
          <h2>Assess. Optimize. Scale.</h2>
        </div>
        <div className="steps">
          <div className="step">
            <strong>Assess</strong>
            <p>
              We identify where infrastructure waste, bottlenecks, and cost
              inefficiencies exist.
            </p>
          </div>
          <div className="step">
            <strong>Optimize</strong>
            <p>
              We improve software performance, automate workflows, and make AI
              workloads fit for purpose.
            </p>
          </div>
          <div className="step">
            <strong>Scale</strong>
            <p>
              We help deploy the right infrastructure once the software and
              economics are aligned.
            </p>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
