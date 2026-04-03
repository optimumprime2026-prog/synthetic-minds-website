import { ContactForm } from '@/components/contact-form';

const contactPoints = [
  'Discuss your AI infrastructure or automation challenge',
  'Explore where compute waste and bottlenecks may exist',
  'Assess whether a consultation or deeper engagement makes sense',
];

const trustPoints = [
  'Enterprise-focused, no hype',
  'Technical and commercial understanding in one team',
  'Designed for serious AI and infrastructure conversations',
];

export default function ContactPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container page-grid">
          <div className="section-heading page-intro">
            <p className="eyebrow">Contact</p>
            <h1>Let’s explore how to make your AI infrastructure efficient.</h1>
            <p>
              Share your challenge, and we will discuss where your organization can
              reduce compute waste, improve performance, and scale with confidence.
            </p>

            <div className="info-stack">
              <div className="info-block">
                <h3>What we can discuss</h3>
                <ul className="bullet-list compact-list">
                  {contactPoints.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="info-block">
                <h3>What to expect</h3>
                <p>
                  This is an initial conversation to understand fit, urgency, and
                  opportunity. If there is a strong match, we can define the next
                  step together.
                </p>
              </div>

              <div className="info-block">
                <h3>Why teams reach out</h3>
                <ul className="bullet-list compact-list">
                  {trustPoints.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
