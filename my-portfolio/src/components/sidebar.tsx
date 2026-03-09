"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Sidebar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const baseLinkClasses =
    "relative flex items-center gap-3 px-7 py-3 text-[12px] font-medium tracking-[0.16em] transition hover:bg-emerald-400/5";

  useEffect(() => {
    if (typeof window === "undefined") return;

    const sections = document.querySelectorAll<HTMLElement>("[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [pathname]);

  const renderNav = (onNavigate?: () => void) => (
    <>
      <Link
        href="/dashboard#home"
        onClick={() => {
          setActiveSection("home");
          onNavigate?.();
        }}
        className={`${baseLinkClasses} ${
          activeSection === "home"
            ? "before:absolute before:left-0 before:top-0 before:h-full before:w-[3px] before:rounded-r before:bg-[#00d4aa]"
            : "hover:text-[#00d4aa]"
        }`}
        style={{
          color: activeSection === "home" ? "#00d4aa" : "#8892a4",
        }}
      >
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          className="h-[15px] w-[15px] flex-shrink-0"
        >
          <path d="M3 12L12 3l9 9M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9" />
        </svg>
        Home
      </Link>
      <Link
        href="/experience-section#experience"
        onClick={() => {
          setActiveSection("experience");
          onNavigate?.();
        }}
        className={`${baseLinkClasses} ${
          activeSection === "experience"
            ? "before:absolute before:left-0 before:top-0 before:h-full before:w-[3px] before:rounded-r before:bg-[#00d4aa]"
            : "hover:text-[#00d4aa]"
        }`}
        style={{
          color: activeSection === "experience" ? "#00d4aa" : "#8892a4",
        }}
      >
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          className="h-[15px] w-[15px] flex-shrink-0"
        >
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        </svg>
        Experience
      </Link>
      <Link
        href="/project-section"
        onClick={() => {
          setActiveSection("projects");
          onNavigate?.();
        }}
        className={`${baseLinkClasses} ${
          activeSection === "projects"
            ? "before:absolute before:left-0 before:top-0 before:h-full before:w-[3px] before:rounded-r before:bg-[#00d4aa]"
            : "hover:text-[#00d4aa]"
        }`}
        style={{
          color: activeSection === "projects" ? "#00d4aa" : "#8892a4",
        }}
      >
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          className="h-[15px] w-[15px] flex-shrink-0"
        >
          <path d="M3 3h6l2 3H21a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V5a2 2 0 012-2z" />
        </svg>
        Projects
      </Link>
      <Link
        href="/blog-section#blog"
        onClick={() => {
          setActiveSection("blog");
          onNavigate?.();
        }}
        className={`${baseLinkClasses} ${
          activeSection === "blog"
            ? "before:absolute before:left-0 before:top-0 before:h-full before:w-[3px] before:rounded-r before:bg-[#00d4aa]"
            : "hover:text-[#00d4aa]"
        }`}
        style={{
          color: activeSection === "blog" ? "#00d4aa" : "#8892a4",
        }}
      >
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          className="h-[15px] w-[15px] flex-shrink-0"
        >
          <path d="M4 4h16v14H4z" />
          <path d="M8 8h8M8 12h5" />
        </svg>
        Blogs
      </Link>
      <Link
        href="/skills#skills"
        onClick={() => {
          setActiveSection("skills");
          onNavigate?.();
        }}
        className={`${baseLinkClasses} ${
          activeSection === "skills"
            ? "before:absolute before:left-0 before:top-0 before:h-full before:w-[3px] before:rounded-r before:bg-[#00d4aa]"
            : "hover:text-[#00d4aa]"
        }`}
        style={{
          color: activeSection === "skills" ? "#00d4aa" : "#8892a4",
        }}
      >
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          className="h-[15px] w-[15px] flex-shrink-0"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        Skills
      </Link>
      <Link
        href="/contact-section#contact"
        onClick={() => {
          setActiveSection("contact");
          onNavigate?.();
        }}
        className={`${baseLinkClasses} ${
          activeSection === "contact"
            ? "before:absolute before:left-0 before:top-0 before:h-full before:w-[3px] before:rounded-r before:bg-[#00d4aa]"
            : "hover:text-[#00d4aa]"
        }`}
        style={{
          color: activeSection === "contact" ? "#00d4aa" : "#8892a4",
        }}
      >
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          className="h-[15px] w-[15px] flex-shrink-0"
        >
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
        </svg>
        Contact
      </Link>
      <a
        href="https://github.com"
        target="_blank"
        rel="noreferrer"
        onClick={() => {
          setActiveSection("github");
          onNavigate?.();
        }}
        className={`${baseLinkClasses} ${
          activeSection === "github"
            ? "before:absolute before:left-0 before:top-0 before:h-full before:w-[3px] before:rounded-r before:bg-[#00d4aa]"
            : "hover:text-[#00d4aa]"
        }`}
        style={{
          color: activeSection === "github" ? "#00d4aa" : "#8892a4",
        }}
      >
        <svg
          fill="currentColor"
          viewBox="0 0 24 24"
          className="h-[15px] w-[15px] flex-shrink-0"
        >
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z" />
        </svg>
        GitHub
      </a>
    </>
  );

  return (
    <>
      {/* Mobile top bar */}
      <header className="fixed left-0 right-0 top-0 z-40 flex items-center justify-between border-b border-[#1e2630] bg-[#050816]/95 px-4 py-3 backdrop-blur md:hidden">
        <div className="font-display text-[18px] font-extrabold tracking-[-0.04em] text-[#e8edf5]">
          moin<span className="text-[#00d4aa]">.</span>dev
        </div>
        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="inline-flex h-9 w-9 items-center justify-center rounded border border-[#1e2630] text-[#e8edf5] hover:border-[#00d4aa] hover:text-[#00d4aa]"
          onClick={() => setIsMobileOpen((prev) => !prev)}
        >
          <span className="sr-only">Open navigation</span>
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="h-4 w-4"
          >
            {isMobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <>
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </>
            )}
          </svg>
        </button>
      </header>

      {/* Mobile slide-out sidebar */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/60 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        >
          <aside
            className="absolute left-0 top-0 flex h-full w-[220px] flex-col border-r border-[#1e2630] bg-[#0f1318] px-0 py-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-7 pb-8 font-display text-[22px] font-extrabold tracking-[-0.04em] text-[#e8edf5]">
              moin<span className="text-[#00d4aa]">.</span>dev
            </div>
            <nav className="flex-1 overflow-y-auto">{renderNav(() => setIsMobileOpen(false))}</nav>
            <div className="border-t border-[#1e2630] px-7 pt-4 text-[10px] tracking-[0.22em] text-[#5a6478]">
              <span className="mr-1 inline-block h-[6px] w-[6px] rounded-full bg-[#00d4aa] align-middle" />
              OPEN TO WORK
            </div>
          </aside>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="fixed left-0 top-0 z-20 hidden h-screen w-[220px] flex-col border-r border-[#1e2630] bg-[#0f1318] px-0 py-8 md:flex">
        <div className="px-7 pb-8 font-display text-[22px] font-extrabold tracking-[-0.04em] text-[#e8edf5]">
          moin<span className="text-[#00d4aa]">.</span>dev
        </div>
        <nav className="flex-1">{renderNav()}</nav>
        <div className="border-t border-[#1e2630] px-7 pt-4 text-[10px] tracking-[0.22em] text-[#5a6478]">
          <span className="mr-1 inline-block h-[6px] w-[6px] rounded-full bg-[#00d4aa] align-middle" />
          OPEN TO WORK
        </div>
      </aside>
    </>
  );
};

