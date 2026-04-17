import { FadeInSection } from '@/components/fade-in-section';

export function CtaSection() {
  return (
    <section id="contact">
      <FadeInSection className="container cta-panel">
        <p className="eyebrow">Get in touch</p>
        <h2>Ready to put AI to work for your business?</h2>
        <p>
          Let's explore how AI agents can take over your manual work
          so you can focus on growth.
        </p>
        <div className="button-row centered">
          <a className="button button-primary" href="mailto:hello@mmworkshop.com">
            Get started
          </a>
          <a className="button button-secondary" href="mailto:hello@mmworkshop.com">
            Book a call
          </a>
        </div>
      </FadeInSection>
    </section>
  );
}
