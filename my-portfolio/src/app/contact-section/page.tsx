import Link from "next/link";

export default function ContactSectionPage() {
  return (
    <main
      id="contact"
      className="min-h-screen bg-[#0a0c10] text-[#e8edf5] pt-16 md:pt-6 md:ml-[220px]"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 pb-16 pt-4 sm:px-6 lg:px-10">
        {/* Header */}
        <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-[#00d4aa]/80">
              CONTACT
            </p>
            <h1 className="mt-1 font-display text-[26px] font-extrabold tracking-[-0.05em] sm:text-[30px]">
              Let&apos;s build something together
            </h1>
            <p className="mt-2 max-w-2xl text-[12.5px] leading-7 text-[#8892a4]">
              I&apos;m open to backend roles, freelance API work, and interesting side
              projects. The fastest way to reach me is email or LinkedIn.
            </p>
          </div>
          <Link
            href="/dashboard#contact"
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

        {/* Main contact cards */}
        <section className="grid gap-5 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          {/* Left: direct contact */}
          <div className="space-y-4">
            <div className="rounded-md border border-[#1e2630] bg-[#0f1318] p-5">
              <h2 className="font-display text-[14px] font-bold text-[#e8edf5]">
                Direct contact
              </h2>
              <p className="mt-2 text-[11.5px] leading-relaxed text-[#8892a4]">
                Feel free to reach out for roles, collaborations, or just to talk about
                backend architecture and APIs.
              </p>
              <div className="mt-4 space-y-3 text-[11.5px] text-[#e8edf5]">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#00d4aa]/10 text-[#00d4aa]">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      className="h-3.5 w-3.5"
                    >
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#5a6478]">
                      Phone
                    </p>
                    <a
                      href="tel:9404978460"
                      className="text-[11.5px] text-[#e8edf5] transition hover:text-[#00d4aa]"
                    >
                      9404978460
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#00d4aa]/10 text-[#00d4aa]">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      className="h-3.5 w-3.5"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,12 2,6" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#5a6478]">
                      Email
                    </p>
                    <a
                      href="mailto:moinsaokh92@gmail.com"
                      className="text-[11.5px] text-[#e8edf5] transition hover:text-[#00d4aa]"
                    >
                      moinsaokh92@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#00d4aa]/10 text-[#00d4aa]">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="h-3.5 w-3.5"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#5a6478]">
                      LinkedIn
                    </p>
                    <a
                      href="https://linkedin.com/in/moin-shaikh-dev"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[11.5px] text-[#e8edf5] transition hover:text-[#00d4aa]"
                    >
                      moin-shaikh-dev
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#00d4aa]/10 text-[#00d4aa]">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      className="h-3.5 w-3.5"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#5a6478]">
                      Location
                    </p>
                    <p className="text-[11.5px] text-[#e8edf5]">Nashik, Maharashtra</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: quick message card */}
          <div className="space-y-4">
            <div className="rounded-md border border-[#1e2630] bg-[#0f1318] p-5">
              <h2 className="font-display text-[14px] font-bold text-[#e8edf5]">
                Quick message (no form yet)
              </h2>
              <p className="mt-2 text-[11.5px] leading-relaxed text-[#8892a4]">
                For now, I&apos;m keeping things simple — the best way to connect is to send
                me an email with what you&apos;re building and how I can help. I usually
                respond within{" "}
                <span className="font-medium text-[#00d4aa]">24–48 hours</span>.
              </p>
              <div className="mt-4 rounded border border-dashed border-[#1e2630] bg-[#050816] px-4 py-3 text-[11px] text-[#8892a4]">
                <p className="font-semibold text-[#e8edf5]">Helpful details to include:</p>
                <ul className="mt-2 space-y-1.5">
                  <li className="relative pl-4 before:absolute before:left-0 before:text-[10px] before:text-[#00d4aa] before:content-['▹']">
                    Type of opportunity (internship, full-time, freelance, collaboration).
                  </li>
                  <li className="relative pl-4 before:absolute before:left-0 before:text-[10px] before:text-[#00d4aa] before:content-['▹']">
                    Tech stack you&apos;re using or planning to use.
                  </li>
                  <li className="relative pl-4 before:absolute before:left-0 before:text-[10px] before:text-[#00d4aa] before:content-['▹']">
                    Any links to docs, designs, or existing codebases.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

