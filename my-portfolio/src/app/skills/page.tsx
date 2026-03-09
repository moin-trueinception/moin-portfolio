import Link from "next/link";

const skillGroups = [
  {
    title: "Backend",
    items: [
      "Node.js",
      "TypeScript",
      "Express.js",
      "JavaScript",
      "REST APIs",
      "Swagger / OpenAPI",
    ],
  },
  {
    title: "Databases & Caching",
    items: ["MongoDB", "PostgreSQL", "Mongoose", "Redis"],
  },
  {
    title: "Auth & Security",
    items: ["JWT Auth", "RBAC", "Access & Refresh Tokens", "Middleware"],
  },
  {
    title: "Tools & Platform",
    items: ["Git", "GitHub", "Docker", "VS Code", "Postman"],
  },
];

const learningTracks = [
  {
    title: "System design & scalability",
    description:
      "Focusing on queues, background jobs, caching layers, and designing APIs that scale.",
    level: "In progress",
  },
  {
    title: "Testing for backend services",
    description:
      "Improving my habits with unit tests, integration tests, and contract testing for APIs.",
    level: "In progress",
  },
];

export default function SkillsPage() {
  return (
    <main
      id="skills"
      className="min-h-screen bg-[#0a0c10] text-[#e8edf5] pt-16 md:pt-6 md:ml-[220px]"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 pb-16 pt-4 sm:px-6 lg:px-10">
        {/* Header */}
        <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-[#00d4aa]/80">
              SKILLS
            </p>
            <h1 className="mt-1 font-display text-[26px] font-extrabold tracking-[-0.05em] sm:text-[30px]">
              Tech I build with
            </h1>
            <p className="mt-2 max-w-2xl text-[12.5px] leading-7 text-[#8892a4]">
              A focused stack around Node.js, TypeScript, and building reliable backend
              systems. These are the tools I reach for in most projects.
            </p>
          </div>
          <Link
            href="/dashboard#skills"
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

        {/* Skills grid */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.28em]">
            <span>Core stack</span>
            <span className="h-px flex-1 bg-[#1e2630]" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-md border border-[#1e2630] bg-[#0f1318] p-5"
              >
                <h2 className="font-display text-[13px] font-bold text-[#e8edf5]">
                  {group.title}
                </h2>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-[#8892a4]">
                  {group.items.map((item, idx) => (
                    <span
                      key={item}
                      className={
                        idx < 2
                          ? "rounded border border-emerald-400/40 bg-emerald-400/10 px-2 py-1 text-emerald-300"
                          : "rounded border border-[#1e2630] bg-[#151a22] px-2 py-1"
                      }
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Learning / growth */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.28em]">
            <span>Currently growing in</span>
            <span className="h-px flex-1 bg-[#1e2630]" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {learningTracks.map((track) => (
              <article
                key={track.title}
                className="rounded-md border border-emerald-400/30 bg-gradient-to-br from-emerald-400/10 to-sky-400/10 p-5"
              >
                <div className="mb-2 flex items-center justify-between gap-2">
                  <h3 className="font-display text-[13px] font-bold text-[#e8edf5]">
                    {track.title}
                  </h3>
                  <span className="rounded border border-emerald-400/60 bg-emerald-400/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.22em] text-emerald-300">
                    {track.level}
                  </span>
                </div>
                <p className="text-[11.5px] leading-relaxed text-[#d1e3ff]">
                  {track.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

