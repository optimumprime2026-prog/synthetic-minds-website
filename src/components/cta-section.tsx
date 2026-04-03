import { FadeInSection } from '@/components/fade-in-section';

export function CtaSection() {
  return (
    <section id="contact">
      <FadeInSection className="container cta-panel">
        <p className="eyebrow">Get in touch</p>
        <h2>Ready to make AI infrastructure efficient?</h2>
        <p>
          Let’s explore where your organization can reduce compute waste,
          improve performance, and scale AI with confidence.
        </p>
        <div className="button-row centered">
          <a className="button button-primary" href="mailto:hello@syntheticminds.ai">
            Book a call
          </a>
          <a className="button button-secondary" href="mailto:hello@syntheticminds.ai">
            Request a consultation
          </a>
        </div>
      </FadeInSection>
    </section>
  );
}
