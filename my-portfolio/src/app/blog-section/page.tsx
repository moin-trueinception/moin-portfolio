import Link from "next/link";

const blogPosts = [
  {
    title: "Designing Clean REST APIs in Node.js",
    date: "Feb 2026",
    readTime: "8 min read",
    summary:
      "My approach to structuring controllers, services, and validation layers for maintainable backend APIs.",
    tags: ["Node.js", "REST APIs", "Best Practices"],
  },
  {
    title: "JWT, Refresh Tokens, and Common Mistakes",
    date: "Jan 2026",
    readTime: "7 min read",
    summary:
      "How I structure access + refresh token flows, handle rotation, and avoid security pitfalls.",
    tags: ["JWT", "Auth", "Security"],
  },
  {
    title: "From UI/UX Engineer to Backend Developer",
    date: "Dec 2025",
    readTime: "6 min read",
    summary:
      "A personal story of moving from Figma and components to databases, APIs, and system design.",
    tags: ["Career", "Backend", "Story"],
  },
];

const notes = [
  "Notes from system design practice sessions (queues, caching, rate limiting).",
  "Short write-ups on debugging tricky production issues or local environment bugs.",
  "Quick tips on tools I use daily: Git, Docker, VS Code, and Postman.",
];

export default function BlogSection() {
  return (
    <main
      id="blog"
      className="min-h-screen bg-[#0a0c10] text-[#e8edf5] pt-16 md:pt-6 md:ml-[220px]"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 pb-16 pt-4 sm:px-6 lg:px-10">
        {/* Header */}
        <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-[#00d4aa]/80">
              BLOG
            </p>
            <h1 className="mt-1 font-display text-[26px] font-extrabold tracking-[-0.05em] sm:text-[30px]">
              Writing & backend notes
            </h1>
            <p className="mt-2 max-w-2xl text-[12.5px] leading-7 text-[#8892a4]">
              Longer posts where I explain how I think about backend systems,
              authentication, databases, and my journey as a developer.
            </p>
          </div>
          <Link
            href="/dashboard#home"
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

        {/* Blog list */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.28em]">
            <span>Latest posts</span>
            <span className="h-px flex-1 bg-[#1e2630]" />
          </div>
          <div className="space-y-3">
            {blogPosts.map((post) => (
              <article
                key={post.title}
                className="group rounded-md border border-[#1e2630] bg-[#0f1318] p-5 transition hover:border-emerald-400/40 hover:shadow-[0_0_0_1px_rgba(16,185,129,0.35)]"
              >
                <div className="flex flex-wrap items-center gap-2 text-[10px] text-[#5a6478]">
                  <span>{post.date}</span>
                  <span className="h-[1px] w-4 bg-[#1e2630]" />
                  <span>{post.readTime}</span>
                </div>
                <h2 className="mt-1 font-display text-[15px] font-bold tracking-[-0.03em] text-[#e8edf5]">
                  {post.title}
                </h2>
                <p className="mt-2 text-[11.5px] leading-relaxed text-[#8892a4]">
                  {post.summary}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5 text-[10px]">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={tag}
                      className={
                        idx === 0
                          ? "rounded border border-emerald-400/40 bg-emerald-400/10 px-2 py-0.5 text-emerald-300"
                          : "rounded border border-[#1e2630] bg-[#151a22] px-2 py-0.5 text-[#8892a4]"
                      }
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Notes / small entries */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.28em]">
            <span>Short notes & ideas</span>
            <span className="h-px flex-1 bg-[#1e2630]" />
          </div>
          <div className="rounded-md border border-[#1e2630] bg-[#0f1318] p-5 text-[11.5px] text-[#8892a4]">
            <p className="mb-2 text-[12px] font-semibold text-[#e8edf5]">
              I also keep smaller notes that may later become full blog posts:
            </p>
            <ul className="space-y-1.5">
              {notes.map((item) => (
                <li
                  key={item}
                  className="relative pl-4 before:absolute before:left-0 before:text-[10px] before:text-[#00d4aa] before:content-['▹']"
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