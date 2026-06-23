"use client";

import { useState, useEffect } from "react";

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Footer */}
      <footer
        className="border-t"
        style={{
          background: "var(--bg-secondary)",
          borderColor: "var(--border-color)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="text-lg font-bold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span className="gradient-text">&lt;Profile</span>
              <span style={{ color: "var(--text-primary)" }}>/&gt;</span>
            </a>

            {/* Copyright */}
            <p
              className="text-sm"
              style={{ color: "var(--text-tertiary)" }}
            >
              © {new Date().getFullYear()} Adisorn Wongtip. Built with{" "}
              <span style={{ color: "#6c5ce7" }}>Next.js</span> &{" "}
              <span style={{ color: "#00d2ff" }}>TailwindCSS</span>
            </p>

            {/* Made with love */}
            <p
              className="text-sm flex items-center gap-1"
              style={{ color: "var(--text-tertiary)" }}
            >
              Made with{" "}
              <span className="text-red-500 animate-pulse">❤️</span> in
              Bangkok
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 z-40 cursor-pointer ${
          showBackToTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        style={{
          background: "linear-gradient(135deg, #6c5ce7, #00d2ff)",
          boxShadow: "var(--shadow-glow)",
        }}
        aria-label="Back to top"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </>
  );
}
