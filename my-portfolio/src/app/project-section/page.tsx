import Link from "next/link";

const featuredProjects = [
  {
    title: "🔐 Auth & User Management API",
    description:
      "Production-ready JWT authentication system with token refresh, protected routes, RBAC middleware, and full profile CRUD with validation.",
    tech: ["Node.js", "TypeScript", "Express.js", "MongoDB", "JWT"],
  },
  {
    title: "🏨 Hotel Management API",
    description:
      "Full hotel and room inventory management system with availability tracking, booking logic support, and relational PostgreSQL schema design.",
    tech: ["Node.js", "TypeScript", "Express.js", "PostgreSQL"],
  },
  {
    title: "📦 Inventory & Billing Service",
    description:
      "Microservice for managing product inventory, stock alerts, and invoice generation with REST APIs and PostgreSQL.",
    tech: ["Node.js", "TypeScript", "PostgreSQL", "REST APIs"],
  },
];

const inProgressProjects = [
  {
    label: "Building now",
    title: "Developer Portfolio v2 (Full Stack)",
    description:
      "Experimenting with a fully dynamic portfolio with CMS-driven projects, blog, and analytics.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
  },
  {
    label: "Exploring",
    title: "System Design Practice Repo",
    description:
      "Documenting small backend prototypes focused on queues, caching, and background jobs.",
    tech: ["Node.js", "Redis", "BullMQ"],
  },
];

export default function ProjectSectionPage() {
  return (
    <main
      id="projects"
      className="min-h-screen bg-[#0a0c10] text-[#e8edf5] pt-16 md:pt-6 md:ml-[220px]"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 pb-16 pt-4 sm:px-6 lg:px-10">
        {/* Header */}
        <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-[#00d4aa]/80">
              PROJECTS
            </p>
            <h1 className="mt-1 font-display text-[26px] font-extrabold tracking-[-0.05em] sm:text-[30px]">
              Backend systems I&apos;ve built
            </h1>
            <p className="mt-2 max-w-2xl text-[12.5px] leading-7 text-[#8892a4]">
              A deeper look at the APIs, services, and experiments I&apos;ve
              shipped. This page will grow as I add more real-world projects.
            </p>
          </div>
          <Link
            href="/dashboard#projects"
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

        {/* Featured projects grid */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.28em]">
            <span>Featured builds</span>
            <span className="h-px flex-1 bg-[#1e2630]" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {featuredProjects.map((project) => (
              <article
                key={project.title}
                className="group relative flex h-full flex-col overflow-hidden rounded-md border border-[#1e2630] bg-[#0f1318] p-5 transition hover:border-emerald-400/40 hover:shadow-[0_0_0_1px_rgba(16,185,129,0.35)]"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#00d4aa] to-[#0077ff] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                <h2 className="font-display text-[13px] font-bold text-[#e8edf5]">
                  {project.title}
                </h2>
                <p className="mt-2 mb-3 text-[11.5px] leading-relaxed text-[#8892a4]">
                  {project.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-1.5 text-[10px]">
                  {project.tech.map((stack, idx) => (
                    <span
                      key={stack}
                      className={
                        idx < 2
                          ? "rounded border border-emerald-400/40 bg-emerald-400/10 px-2 py-0.5 text-emerald-300"
                          : "rounded border border-[#1e2630] bg-[#151a22] px-2 py-0.5 text-[#8892a4]"
                      }
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Currently working / in-progress */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.28em]">
            <span>Currently working on</span>
            <span className="h-px flex-1 bg-[#1e2630]" />
          </div>
          <div className="space-y-3">
            {inProgressProjects.map((item) => (
              <article
                key={item.title}
                className="flex flex-col gap-2 rounded-md border border-[#1e2630] bg-[#0f1318] p-4 sm:flex-row sm:items-start sm:justify-between"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded border border-emerald-400/50 bg-emerald-400/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.22em] text-emerald-300">
                      {item.label}
                    </span>
                    <h3 className="font-display text-[13px] font-bold text-[#e8edf5]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-1 text-[11.5px] leading-relaxed text-[#8892a4]">
                    {item.description}
                  </p>
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5 text-[10px] sm:mt-0 sm:justify-end">
                  {item.tech.map((stack) => (
                    <span
                      key={stack}
                      className="rounded border border-[#1e2630] bg-[#151a22] px-2 py-0.5 text-[#8892a4]"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Note about future projects */}
        <section className="rounded-md border border-dashed border-[#1e2630] bg-[#050816] p-4 text-[11.5px] text-[#8892a4]">
          <p>
            As I add more projects (hackathons, open‑source contributions, and
            production systems), they&apos;ll appear here instead of crowding
            the main dashboard. This page is meant to scale to{" "}
            <span className="font-medium text-[#00d4aa]">10+ projects</span>{" "}
            without becoming messy.
          </p>
        </section>
      </div>
    </main>
  );
}

