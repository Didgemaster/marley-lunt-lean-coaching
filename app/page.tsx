import Link from "next/link";

const services = [
  {
    title: "1:1 Lean Coaching",
    description:
      "Personalized coaching sessions to help individuals apply lean principles to their work and routines.",
  },
  {
    title: "Process Workshop",
    description:
      "Guided workshops to surface waste, map value, and build an actionable improvement backlog.",
  },
  {
    title: "Team Sprint",
    description:
      "Short, focused sprints that help teams reframe problems and ship measurable results with lean practice.",
  },
  {
    title: "Systems Mapping",
    description:
      "Visual frameworks to understand how work flows through your organization so bottlenecks are easier to target.",
  },
];

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-neutral-50 text-neutral-900">
      <header className="sticky top-0 z-20 border-b border-neutral-200/80 bg-neutral-50/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="text-sm font-semibold tracking-wide uppercase">
            Marley Lunt
          </span>
          <nav className="flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-neutral-500"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-neutral-200/80 bg-white">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-neutral-500">
                Lean Coaching
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Build clarity, remove waste, and ship what matters.
              </h1>
              <p className="mt-6 text-lg text-neutral-600">
                Marley Lunt helps teams and individuals apply lean thinking with
                practical coaching, clear process design, and short, measurable
                improvement cycles.
              </p>
              <div className="mt-10">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Link
                    href="#contact"
                    className="inline-flex h-12 w-full items-center justify-center rounded-full bg-neutral-900 px-6 text-sm font-medium text-neutral-50 transition-colors hover:bg-neutral-700 sm:w-auto"
                  >
                    Start a conversation
                  </Link>
                  <Link
                    href="#services"
                    className="inline-flex h-12 w-full items-center justify-center rounded-full border border-neutral-200 px-6 text-sm font-medium transition-colors hover:border-neutral-300 hover:bg-neutral-100 sm:w-auto"
                  >
                    Explore coaching options
                  </Link>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 -skew-y-3 opacity-60 select-none">
              <div className="absolute -right-24 top-20 h-96 w-96 rounded-3xl bg-neutral-100 blur-3xl" />
              <div className="absolute -left-16 top-48 h-80 w-80 rounded-3xl bg-neutral-200/60 blur-3xl" />
            </div>
          </div>
        </section>

        <section id="services" className="border-b border-neutral-200/80 bg-neutral-50">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-neutral-500">
                Services
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                Coaching engagements built for real work.
              </h2>
              <p className="mt-4 text-lg text-neutral-600">
                Every engagement is customized, but these are the formats that
                create the most consistent results.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-2xl border border-neutral-200/80 bg-white p-6 transition-colors hover:border-neutral-300"
                >
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-neutral-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <div className="rounded-2xl border border-neutral-200/80 bg-neutral-50 p-8 sm:p-12">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-widest text-neutral-500">
                  Contact
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                  Next step
                </h2>
                <p className="mt-4 text-lg text-neutral-600">
                  Ready to talk about your project or team? Reach out and share
                  what you are trying to improve. Expect a clear, practical
                  response.
                </p>
                <form className="mt-10 flex flex-col gap-4">
                  <label className="flex flex-col gap-2 text-sm font-medium">
                    <span>Name</span>
                    <input
                      type="text"
                      name="name"
                      className="h-12 rounded-lg border border-neutral-200 bg-white px-4 outline-none transition-colors focus:border-neutral-400"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm font-medium">
                    <span>Email</span>
                    <input
                      type="email"
                      name="email"
                      className="h-12 rounded-lg border border-neutral-200 bg-white px-4 outline-none transition-colors focus:border-neutral-400"
                      placeholder="you@example.com"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm font-medium">
                    <span>What would you like coaching on?</span>
                    <textarea
                      name="message"
                      rows={4}
                      className="rounded-lg border border-neutral-200 bg-white px-4 py-3 outline-none transition-colors focus:border-neutral-400"
                      placeholder="Workflow, team collaboration, backlog clarity..."
                    />
                  </label>
                  <button
                    type="button"
                    className="h-12 w-full rounded-full bg-neutral-900 px-6 text-sm font-medium text-neutral-50 transition-colors hover:bg-neutral-700 sm:w-auto"
                  >
                    Send inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200/80 bg-neutral-50">
        <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-neutral-500">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} Marley Lunt Lean Coaching</span>
            <span>Crafted with practical iteration.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
