import { FadeInSection } from '@/components/fade-in-section';

const problems = [
  {
    title: 'Too much manual work',
    body: 'Teams spend hours on admin, follow-ups, and repetitive tasks instead of growing the business.',
  },
  {
    title: 'No scalable marketing',
    body: 'Content creation, posting, and lead generation are inconsistent and time-consuming.',
  },
  {
    title: 'Can\'t afford full teams',
    body: 'Hiring for operations, marketing, and sales burns through limited startup cash.',
  },
  {
    title: 'Fragmented tools',
    body: 'Disconnected systems and workflows create inefficiency and lost opportunities.',
  },
];

export function ProblemSection() {
  return (
    <section>
      <FadeInSection className="container section-heading">
        <p className="eyebrow">The problem</p>
        <h2>Growing fast is hard when your team is buried in manual work.</h2>
        <p>
          Most startups and scale-ups waste time and money on operational tasks
          that should be automated. The result: slow growth, high costs, and
          missed opportunities.
        </p>
      </FadeInSection>

      <FadeInSection className="container card-grid four-up">
        {problems.map((item) => (
          <article className="card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </FadeInSection>
    </section>
  );
}
