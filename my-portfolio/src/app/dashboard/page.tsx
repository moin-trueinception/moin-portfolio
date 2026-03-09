import Image from "next/image";

export default function Dashboard() {
  return (
    <main
      id="home"
      className="ml-[220px] min-h-screen bg-[#0a0c10] text-[#e8edf5]"
    >
      {/* Hero banner */}
      <section className="relative h-[260px] overflow-hidden border-b border-[#1e2630] bg-[#050816]">
        <Image
          src="/cover-photo.png"
          alt="Moinuddin Shaikh cover banner"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </section>

      {/* Profile strip */}
      <section className="relative flex min-h-[110px] items-center gap-6 border-b border-[#1e2630] bg-[#0f1318] px-12 py-5">
        <div className="mt-[-60px] flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full border-[5px] border-[#050816] bg-gradient-to-br from-[#00d4aa] to-[#0077ff] font-sans text-2xl font-extrabold text-[#0a0c10]">
          MS
        </div>
        <div className="flex flex-1 flex-col gap-1">
          <h1 className="font-display text-[24px] font-extrabold tracking-[-0.04em]">
            Moinuddin Shaikh
          </h1>
          <p className="inline-flex items-center text-[11px] font-medium uppercase tracking-[0.22em] text-[#00d4aa]">
            Backend Developer · Node.js · TypeScript · REST APIs
            <span className="ml-1 inline-block h-[14px] w-2 animate-pulse bg-[#00d4aa]" />
          </p>
        </div>
        <div className="flex gap-2">
          <a
            href="mailto:moinsaokh92@gmail.com"
            className="inline-flex items-center gap-2 rounded border border-[#1e2630] bg-transparent px-4 py-2 text-[11px] font-medium tracking-[0.18em] text-[#8892a4] transition hover:border-[#00d4aa] hover:text-[#00d4aa]"
          >
            <svg
              width="12"
              height="12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,12 2,6" />
            </svg>
            Email Me
          </a>
          <a
            href="#"
            className="no-link-color inline-flex items-center gap-2 rounded border border-[#00d4aa] bg-[#00d4aa] px-4 py-2 text-[11px] font-medium tracking-[0.18em] text-[#0a0c10] transition hover:bg-transparent hover:text-[#00d4aa]"
          >
            <svg
              width="12"
              height="12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download CV
          </a>
        </div>
      </section>

      {/* Content grid */}
      <section className="grid gap-8 px-12 py-9 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        {/* Left column */}
        <div className="space-y-8">
          {/* About */}
          <section id="about" className="space-y-4">
            <div className="flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.28em]">
              <span>About Me</span>
              <span className="h-px flex-1 bg-[#1e2630]" />
            </div>
            <p className="max-w-xl text-[12.5px] leading-7 text-[#8892a4]">
              Backend Developer with hands-on experience building{" "}
              <span className="font-medium text-[#00d4aa]">RESTful APIs</span>,{" "}
              <span className="font-medium text-[#00d4aa]">
                JWT authentication systems
              </span>
              , and scalable{" "}
              <span className="font-medium text-[#00d4aa]">
                Node.js / TypeScript
              </span>{" "}
              applications. Currently working at a{" "}
              <span className="font-medium text-[#00d4aa]">
                Microsoft-partnered startup
              </span>{" "}
              on production-grade backend systems.
              <br />
              <br />
              Skilled in Express.js, MongoDB, PostgreSQL, and Redis with a
              strong foundation in API development, database architecture, and
              system design. Previously worked as a UI/UX Engineer — bridging
              design thinking with backend logic for a full-stack perspective.
            </p>
          </section>

          {/* Experience */}
          <section id="experience" className="space-y-4">
            <div className="flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.28em]">
              <span>Work Experience</span>
              <span className="h-px flex-1 bg-[#1e2630]" />
            </div>

            <div className="space-y-3">
              <article className="rounded-md border border-[#1e2630] bg-[#0f1318] p-5 transition hover:border-emerald-400/40">
                <div className="mb-1 flex items-start justify-between gap-3">
                  <h3 className="font-display text-sm font-bold">
                    Junior Backend Developer
                  </h3>
                  <span className="rounded border border-emerald-400/50 bg-emerald-400/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-emerald-300">
                    Current
                  </span>
                </div>
                <p className="text-[11px] text-[#0077ff]">
                  Truelink · Microsoft Partnered Startup
                </p>
                <p className="mb-3 text-[10px] text-[#5a6478]">
                  06/2025 – Present · Nashik, Maharashtra
                </p>
                <ul className="space-y-1.5 text-[11.5px] text-[#8892a4]">
                  <li className="relative pl-4 before:absolute before:left-0 before:text-[10px] before:text-[#00d4aa] before:content-['▸']">
                    Developing and maintaining RESTful APIs for production-grade
                    systems
                  </li>
                  <li className="relative pl-4 before:absolute before:left-0 before:text-[10px] before:text-[#00d4aa] before:content-['▸']">
                    Implementing authentication and role-based access control
                    (RBAC) logic
                  </li>
                  <li className="relative pl-4 before:absolute before:left-0 before:text-[10px] before:text-[#00d4aa] before:content-['▸']">
                    Structuring databases (MongoDB, PostgreSQL) and handling
                    data validation
                  </li>
                  <li className="relative pl-4 before:absolute before:left-0 before:text-[10px] before:text-[#00d4aa] before:content-['▸']">
                    Writing middleware and error handling logic for robust API
                    performance
                  </li>
                  <li className="relative pl-4 before:absolute before:left-0 before:text-[10px] before:text-[#00d4aa] before:content-['▸']">
                    Collaborating with frontend and design teams for seamless
                    integration
                  </li>
                </ul>
              </article>

              <article className="rounded-md border border-[#1e2630] bg-[#0f1318] p-5 transition hover:border-emerald-400/40">
                <div className="mb-1 flex items-start justify-between gap-3">
                  <h3 className="font-display text-sm font-bold">
                    UI/UX Engineer
                  </h3>
                  <span className="rounded border border-[#1e2630] bg-[#5a6478]/20 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-[#8892a4]">
                    Previous
                  </span>
                </div>
                <p className="text-[11px] text-[#0077ff]">
                  Truelink · Microsoft Partnered Startup
                </p>
                <p className="mb-3 text-[10px] text-[#5a6478]">
                  08/2024 – 03/2025 · Nashik, Maharashtra
                </p>
                <ul className="space-y-1.5 text-[11.5px] text-[#8892a4]">
                  <li className="relative pl-4 before:absolute before:left-0 before:text-[10px] before:text-[#00d4aa] before:content-['▸']">
                    Designed user flows and high-fidelity UI mockups in Figma
                  </li>
                  <li className="relative pl-4 before:absolute before:left-0 before:text-[10px] before:text-[#00d4aa] before:content-['▸']">
                    Worked closely with developers for implementation clarity
                    and handoff
                  </li>
                  <li className="relative pl-4 before:absolute before:left-0 before:text-[10px] before:text-[#00d4aa] before:content-['▸']">
                    Bridged design thinking with backend system logic for
                    full-stack understanding
                  </li>
                </ul>
              </article>
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="space-y-4">
            <div className="flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.28em]">
              <span>Projects</span>
              <span className="h-px flex-1 bg-[#1e2630]" />
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <article className="relative cursor-pointer overflow-hidden rounded-md border border-[#1e2630] bg-[#0f1318] p-5 transition hover:border-emerald-400/40">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#00d4aa] to-[#0077ff] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                <h3 className="font-display text-[13px] font-bold text-[#e8edf5]">
                  🔐 Auth &amp; User Management API
                </h3>
                <p className="mt-1 mb-3 text-[11px] leading-relaxed text-[#8892a4]">
                  Production-ready JWT authentication system with token refresh,
                  protected routes, RBAC middleware, and full profile CRUD with
                  validation.
                </p>
                <div className="flex flex-wrap gap-1.5 text-[10px]">
                  <span className="rounded border border-emerald-400/40 bg-emerald-400/10 px-2 py-0.5 text-emerald-300">
                    Node.js
                  </span>
                  <span className="rounded border border-emerald-400/40 bg-emerald-400/10 px-2 py-0.5 text-emerald-300">
                    TypeScript
                  </span>
                  <span className="rounded border border-[#1e2630] bg-[#151a22] px-2 py-0.5 text-[#8892a4]">
                    Express.js
                  </span>
                  <span className="rounded border border-[#1e2630] bg-[#151a22] px-2 py-0.5 text-[#8892a4]">
                    MongoDB
                  </span>
                  <span className="rounded border border-[#1e2630] bg-[#151a22] px-2 py-0.5 text-[#8892a4]">
                    JWT
                  </span>
                </div>
              </article>

              <article className="relative cursor-pointer overflow-hidden rounded-md border border-[#1e2630] bg-[#0f1318] p-5 transition hover:border-emerald-400/40">
                <h3 className="font-display text-[13px] font-bold text-[#e8edf5]">
                  🏨 Hotel Management API
                </h3>
                <p className="mt-1 mb-3 text-[11px] leading-relaxed text-[#8892a4]">
                  Full hotel and room inventory management system with
                  availability tracking, booking logic support, and relational
                  PostgreSQL schema design.
                </p>
                <div className="flex flex-wrap gap-1.5 text-[10px]">
                  <span className="rounded border border-emerald-400/40 bg-emerald-400/10 px-2 py-0.5 text-emerald-300">
                    Node.js
                  </span>
                  <span className="rounded border border-emerald-400/40 bg-emerald-400/10 px-2 py-0.5 text-emerald-300">
                    TypeScript
                  </span>
                  <span className="rounded border border-[#1e2630] bg-[#151a22] px-2 py-0.5 text-[#8892a4]">
                    Express.js
                  </span>
                  <span className="rounded border border-[#1e2630] bg-[#151a22] px-2 py-0.5 text-[#8892a4]">
                    PostgreSQL
                  </span>
                </div>
              </article>
            </div>
          </section>
        </div>

        {/* Right column */}
        <div className="space-y-5 lg:sticky lg:top-6">
          {/* Achievement */}
          <section className="rounded-md border border-emerald-400/40 bg-gradient-to-br from-emerald-400/10 to-sky-400/10 p-4 flex gap-3 items-start">
            <span className="text-2xl" aria-hidden>
              🏆
            </span>
            <div className="text-[12px] leading-relaxed text-[#8892a4]">
              <strong className="mb-1 block font-display text-[13px] font-bold text-[#00d4aa]">
                Key Achievement
              </strong>
              Built JWT-secured authentication systems across multiple projects
              with zero reported security incidents.
            </div>
          </section>

          {/* Skills */}
          <section id="skills" className="space-y-4 rounded-lg border border-[#1e2630] bg-[#0f1318] p-5">
            <div className="flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.28em]">
              <span>I Build With</span>
              <span className="h-px flex-1 bg-[#1e2630]" />
            </div>

            <div className="space-y-4 text-[11px] text-[#8892a4]">
              <div>
                <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#5a6478]">
                  Backend
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "TypeScript", "Express.js", "JavaScript"].map(
                    (item, idx) => (
                      <span
                        key={item}
                        className={`rounded border px-2 py-1 text-[11px] ${
                          idx < 3
                            ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-300"
                            : "border-[#1e2630] bg-[#0f1318] text-[#8892a4]"
                        }`}
                      >
                        {item}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <div>
                <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#5a6478]">
                  Databases &amp; Caching
                </p>
                <div className="flex flex-wrap gap-2">
                  {["MongoDB", "PostgreSQL", "Mongoose", "Redis"].map(
                    (item, idx) => (
                      <span
                        key={item}
                        className={`rounded border px-2 py-1 text-[11px] ${
                          idx < 2
                            ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-300"
                            : "border-[#1e2630] bg-[#0f1318] text-[#8892a4]"
                        }`}
                      >
                        {item}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <div>
                <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#5a6478]">
                  Auth &amp; Security
                </p>
                <div className="flex flex-wrap gap-2">
                  {["JWT Auth", "RBAC", "Middleware"].map((item, idx) => (
                    <span
                      key={item}
                      className={`rounded border px-2 py-1 text-[11px] ${
                        idx === 0
                          ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-300"
                          : "border-[#1e2630] bg-[#0f1318] text-[#8892a4]"
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#5a6478]">
                  API &amp; Docs
                </p>
                <div className="flex flex-wrap gap-2">
                  {["REST APIs", "Swagger", "Postman"].map((item, idx) => (
                    <span
                      key={item}
                      className={`rounded border px-2 py-1 text-[11px] ${
                        idx === 0
                          ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-300"
                          : "border-[#1e2630] bg-[#0f1318] text-[#8892a4]"
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#5a6478]">
                  Tools
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Git", "GitHub", "Docker", "VS Code"].map((item) => (
                    <span
                      key={item}
                      className="rounded border border-[#1e2630] bg-[#0f1318] px-2 py-1 text-[11px] text-[#8892a4]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="space-y-3 rounded-lg border border-[#1e2630] bg-[#0f1318] p-5">
            <div className="flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.28em]">
              <span>Education</span>
              <span className="h-px flex-1 bg-[#1e2630]" />
            </div>
            <div className="space-y-1 text-[11px] text-[#8892a4]">
              <p className="font-display text-[13px] font-bold text-[#e8edf5]">
                B.Sc. Computer Science
              </p>
              <p>SavitriBai Phule Pune University</p>
              <div className="flex gap-4 text-[10px] text-[#5a6478]">
                <span>Jun 2022 – May 2026</span>
                <span className="font-semibold text-[#00d4aa]">
                  CGPA: 8.45 / 10
                </span>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section
            id="contact"
            className="space-y-3 rounded-lg border border-[#1e2630] bg-[#0f1318] p-5"
          >
            <div className="flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.28em]">
              <span>Contact</span>
              <span className="h-px flex-1 bg-[#1e2630]" />
            </div>
            <div className="space-y-2 text-[11px] text-[#8892a4]">
              <div className="flex items-center gap-2 border-b border-[#1e2630] pb-2">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 text-[#00d4aa]"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
                </svg>
                <a
                  href="tel:9404978460"
                  className="transition hover:text-[#00d4aa]"
                >
                  9404978460
                </a>
              </div>
              <div className="flex items-center gap-2 border-b border-[#1e2630] pb-2">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 text-[#00d4aa]"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,12 2,6" />
                </svg>
                <a
                  href="mailto:moinsaokh92@gmail.com"
                  className="transition hover:text-[#00d4aa]"
                >
                  moinsaokh92@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 border-b border-[#1e2630] pb-2">
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 text-[#00d4aa]"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <a
                  href="https://linkedin.com/in/moin-shaikh-dev"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-[#00d4aa]"
                >
                  moin-shaikh-dev
                </a>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 text-[#00d4aa]"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Nashik, Maharashtra</span>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}