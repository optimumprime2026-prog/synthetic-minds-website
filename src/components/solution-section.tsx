import { FadeInSection } from '@/components/fade-in-section';

const solutions = [
  {
    title: 'Administrative Automation',
    body: 'Invoicing, contracting, procurement, and internal workflows — your back office runs itself.',
  },
  {
    title: 'Marketing Automation',
    body: 'Content creation in your brand voice, automated scheduling and distribution. Your marketing never stops.',
  },
  {
    title: 'Lead Generation',
    body: 'Outbound campaigns, targeting and qualification, pipeline building. A steady flow of qualified leads.',
  },
  {
    title: 'Lead Nurturing',
    body: 'Automated follow-ups, AI-driven conversations, qualification until sales-ready. No lead is ever lost.',
  },
];

export function SolutionSection() {
  return (
    <section id="services">
      <FadeInSection className="container section-heading">
        <p className="eyebrow">What we do</p>
        <h2>Replace manual work with AI systems that run your business.</h2>
        <p>
          We design, build, and operate custom AI agents that automate key
          business workflows — from operations to marketing and sales.
        </p>
      </FadeInSection>

      <FadeInSection className="container card-grid four-up">
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
