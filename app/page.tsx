const services = [
  {
    title: "1:1 Lean Coaching",
    description:
      "Personalized sessions to apply lean principles directly to your work and decision-making.",
    icon: (
      <svg className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "Process Workshop",
    description:
      "Guided sessions to surface waste, map value, and create an actionable improvement backlog.",
    icon: (
      <svg className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: "Team Sprint",
    description:
      "Focused sprints that help teams reframe problems and ship measurable results faster.",
    icon: (
      <svg className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Systems Mapping",
    description:
      "Visual frameworks to understand work flow across your organization, so bottlenecks become easier to target.",
    icon: (
      <svg className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    title: "Operational Cadence Review",
    description:
      "A focused reset for meetings, metrics, and decision loops so teams can spot constraints sooner.",
    icon: (
      <svg className="h-6 w-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8.89M9 11l3 3L22 4" />
      </svg>
    ),
  },
  {
    title: "Leadership Arch Framework",
    description:
      "A structured coaching approach built around four pillars — Awareness, Responsibility, Decision clarity, Actionability — helping leaders build repeatable decision-making habits.",
    icon: (
      <svg className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a9 9 0 00-9 9v9h4v-9a5 5 0 0110 0v9h4v-9a9 9 0 00-9-9z M12 7v4" />
      </svg>
    ),
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

const leanBenefits = [
  {
    title: "Speed to Value",
    description:
      "Focus effort on the smallest useful change that creates measurable progress.",
  },
  {
    title: "Less Waste",
    description:
      "Expose handoffs, delays, and unclear work so teams can remove friction with confidence.",
  },
  {
    title: "Team Alignment",
    description:
      "Create shared language around priorities, constraints, and next best actions.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-100">
      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-24">
        <p className="mb-4 inline-flex rounded-full border border-gray-800 bg-gray-900/60 px-3 py-1 text-xs font-medium tracking-wide text-gray-300">
          Marley Lunt Lean Coaching
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          Build clarity, remove waste, and ship what matters.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
          Practical lean coaching for individuals and teams — less noise, more progress.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <a href="/contact" className="w-full rounded-lg bg-white px-5 py-3 text-center font-medium text-gray-900 transition hover:bg-gray-100 sm:w-auto">
            Get started
          </a>
          <a href="#services" className="w-full rounded-lg border border-gray-700 px-5 py-3 text-center font-medium text-gray-200 transition hover:border-gray-500 sm:w-auto">
            Explore services
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Why Lean
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-50">
            Improvement that fits the way work actually happens.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {leanBenefits.map((benefit) => (
            <article
              key={benefit.title}
              className="rounded-lg border border-gray-800 bg-gray-900/40 p-6"
            >
              <h3 className="text-lg font-semibold text-gray-100">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-400">{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-50">
            Better flow, clearer decisions, calmer teams.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="relative overflow-hidden rounded-lg border border-gray-800 bg-gray-900/60 p-6 shadow-sm shadow-black/20 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-white/50 before:via-gray-500/40 before:to-transparent"
            >
              <span aria-hidden="true" className="block text-5xl font-serif leading-none text-gray-700">
                &ldquo;
              </span>
              <p className="-mt-2 text-base leading-7 text-gray-200">{testimonial.quote}</p>
              <div className="mt-6 border-t border-gray-800 pt-4">
                <h3 className="font-medium text-gray-100">{testimonial.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-24">
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

        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-lg border border-gray-800 bg-gray-900/50 p-6 transition hover:border-gray-700 hover:bg-gray-900/80 flex flex-col justify-between"
            >
              <div>
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800/80 text-gray-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-100">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-400">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-gray-800/80 px-5 py-8 sm:px-6">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Marley Lunt Lean Coaching</p>
          <nav aria-label="Footer navigation" className="flex gap-5">
            <a href="#services" className="transition hover:text-gray-300">
              Services
            </a>
            <a href="/contact" className="transition hover:text-gray-300">
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
