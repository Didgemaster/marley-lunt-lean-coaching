const services = [
  {
    title: "1:1 Lean Coaching",
    description:
      "Personalized sessions to apply lean principles directly to your work and decision-making.",
  },
  {
    title: "Process Workshop",
    description:
      "Guided sessions to surface waste, map value, and create an actionable improvement backlog.",
  },
  {
    title: "Team Sprint",
    description:
      "Focused sprints that help teams reframe problems and ship measurable results faster.",
  },
  {
    title: "Systems Mapping",
    description:
      "Visual frameworks to understand work flow across your organization, so bottlenecks become easier to target.",
  },
  {
    title: "Operational Cadence Review",
    description:
      "A focused reset for meetings, metrics, and decision loops so teams can spot constraints sooner.",
  },
];

const testimonials = [
  {
    quote:
      "Marley helped us turn a messy backlog into a clear weekly operating rhythm. The team shipped faster without adding more meetings.",
    name: "Dana Kim",
    role: "Product Lead, Northstar Labs",
  },
  {
    quote:
      "The coaching was practical from day one. We left each session with sharper decisions and visible next steps.",
    name: "Ravi Patel",
    role: "Director of Operations, Clearpath Studio",
  },
  {
    quote:
      "Our team finally had a shared picture of the work. Bottlenecks became obvious, and improvement stopped feeling abstract.",
    name: "Elena Morris",
    role: "Engineering Manager, Fieldstone",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-100">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="mb-4 inline-flex rounded-full border border-gray-800 bg-gray-900/60 px-3 py-1 text-xs font-medium tracking-wide text-gray-300">
          Marley Lunt Lean Coaching
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          Build clarity, remove waste, and ship what matters.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
          Practical lean coaching for individuals and teams — less noise, more progress.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="/contact" className="rounded-lg bg-white px-5 py-3 font-medium text-gray-900 transition hover:bg-gray-100">
            Get started
          </a>
          <a href="/services" className="rounded-lg border border-gray-700 px-5 py-3 font-medium text-gray-200 transition hover:border-gray-500">
            Explore services
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-50">
            Better flow, clearer decisions, calmer teams.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-lg border border-gray-800 bg-gray-900/60 p-6 shadow-sm shadow-black/20"
            >
              <p className="text-sm leading-6 text-gray-300">&quot;{testimonial.quote}&quot;</p>
              <div className="mt-6 border-t border-gray-800 pt-4">
                <h3 className="font-medium text-gray-100">{testimonial.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-5xl px-6 pb-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-50">
            Coaching engagements built for real work.
          </h2>
          <p className="mt-4 text-gray-300">
            Every engagement is customized to your context, with formats designed to create durable improvement.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-lg border border-gray-800 bg-gray-900/50 p-6 transition hover:border-gray-700 hover:bg-gray-900/80"
            >
              <h3 className="text-lg font-semibold text-gray-100">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-400">{service.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
