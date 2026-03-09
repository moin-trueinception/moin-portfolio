import Link from "next/link";

const experiences = [
  {
    title: "Junior Backend Developer",
    company: "Truelink · Microsoft Partnered Startup",
    location: "Nashik, Maharashtra",
    period: "Jun 2025 – Present",
    type: "Full-time",
    badge: "Current",
    bullets: [
      "Designing and building RESTful APIs used in production systems.",
      "Implementing authentication, authorization, and role-based access control (RBAC).",
      "Working with MongoDB/PostgreSQL schemas, indexes, and query optimisation.",
      "Improving error handling, logging, and observability for backend services.",
    ],
    stack: ["Node.js", "TypeScript", "Express.js", "MongoDB", "PostgreSQL", "JWT", "Redis"],
  },
  {
    title: "UI/UX Engineer",
    company: "Truelink · Microsoft Partnered Startup",
    location: "Nashik, Maharashtra",
    period: "Aug 2024 – Mar 2025",
    type: "Full-time",
    badge: "Previous",
    bullets: [
      "Created user flows, wireframes, and high‑fidelity UI designs in Figma.",
      "Collaborated closely with frontend and backend engineers for clean handoff.",
      "Bridged design decisions with technical constraints for a better product.",
    ],
    stack: ["Figma", "Design Systems", "Prototyping"],
  },
];

const focusAreas = [
  "Deepening my understanding of API design and system design patterns.",
  "Practising data modelling for relational and NoSQL databases.",
  "Building side projects to explore queues, background jobs, and caching.",
];

export default function ExperienceSectionPage() {
  return (
    <main
      id="experience"
      className="min-h-screen bg-[#0a0c10] text-[#e8edf5] pt-16 md:pt-6 md:ml-[220px]"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 pb-16 pt-4 sm:px-6 lg:px-10">
        {/* Header */}
        <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-[#00d4aa]/80">
              EXPERIENCE
            </p>
            <h1 className="mt-1 font-display text-[26px] font-extrabold tracking-[-0.05em] sm:text-[30px]">
              Where I&apos;ve been working
            </h1>
            <p className="mt-2 max-w-2xl text-[12.5px] leading-7 text-[#8892a4]">
              A more detailed view of my professional journey so far — from UI/UX to backend
              development — and what I focus on inside each role.
            </p>
          </div>
          <Link
            href="/dashboard#experience"
            className="mt-1 inline-flex items-center gap-2 rounded border border-[#1e2630] bg-[#050816] px-3 py-1.5 text-[11px] font-medium tracking-[0.2em] text-[#8892a4] transition hover:border-[#00d4aa] hover:text-[#00d4aa]"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="h-3 w-3"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
            BACK TO OVERVIEW
          </Link>
        </header>

        {/* Experience timeline */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.28em]">
            <span>Role timeline</span>
            <span className="h-px flex-1 bg-[#1e2630]" />
          </div>
          <div className="space-y-4">
            {experiences.map((exp) => (
              <article
                key={exp.title}
                className="relative rounded-md border border-[#1e2630] bg-[#0f1318] p-5 shadow-sm"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h2 className="font-display text-[14px] font-bold text-[#e8edf5]">
                      {exp.title}
                    </h2>
                    <p className="mt-1 text-[11px] text-[#0077ff]">{exp.company}</p>
                    <p className="text-[10px] text-[#5a6478]">
                      {exp.period} · {exp.location} · {exp.type}
                    </p>
                  </div>
                  <span
                    className={`rounded border px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.18em] ${
                      exp.badge === "Current"
                        ? "border-emerald-400/60 bg-emerald-400/15 text-emerald-300"
                        : "border-[#1e2630] bg-[#5a6478]/20 text-[#8892a4]"
                    }`}
                  >
                    {exp.badge}
                  </span>
                </div>
                <ul className="mt-3 space-y-1.5 text-[11.5px] text-[#8892a4]">
                  {exp.bullets.map((item) => (
                    <li
                      key={item}
                      className="relative pl-4 before:absolute before:left-0 before:text-[10px] before:text-[#00d4aa] before:content-['▸']"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-3 flex flex-wrap gap-1.5 text-[10px]">
                  {exp.stack.map((tech, idx) => (
                    <span
                      key={tech}
                      className={
                        idx < 3
                          ? "rounded border border-emerald-400/40 bg-emerald-400/10 px-2 py-0.5 text-emerald-300"
                          : "rounded border border-[#1e2630] bg-[#151a22] px-2 py-0.5 text-[#8892a4]"
                      }
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Current focus */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.28em]">
            <span>What I&apos;m focused on now</span>
            <span className="h-px flex-1 bg-[#1e2630]" />
          </div>
          <div className="rounded-md border border-emerald-400/40 bg-gradient-to-br from-emerald-400/10 to-sky-400/10 p-5 text-[11.5px] text-[#e8edf5]">
            <p className="mb-2 text-[12px] font-semibold text-emerald-300">
              Outside of day-to-day work, I&apos;m actively improving:
            </p>
            <ul className="space-y-1.5 text-[#d1e3ff]">
              {focusAreas.map((item) => (
                <li
                  key={item}
                  className="relative pl-4 before:absolute before:left-0 before:text-[10px] before:text-emerald-300 before:content-['▹']"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}

