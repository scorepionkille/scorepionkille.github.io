"use client";

import { useEffect, useRef } from "react";
import { personalInfo } from "@/data/data";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-in").forEach((el) => {
              el.classList.add("visible");
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Background Effects */}
      <div className="hero-gradient" />
      <div className="dot-pattern" />

      {/* Content */}
      <div className="relative z-10 section-container flex flex-col items-center text-center pt-24">
        {/* Avatar */}
        <div className="fade-in mb-8">
          <div className="avatar-ring">
            <div
              className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden z-10 flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #6c5ce7, #00d2ff)" }}
            >
              <span className="text-5xl md:text-6xl text-white font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                {personalInfo.nameEn.charAt(0)}
              </span>
            </div>
          </div>
        </div>

        {/* Status Badge */}
        <div className="fade-in stagger-1 mb-4">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium"
            style={{
              background: "rgba(108, 92, 231, 0.1)",
              color: "#6c5ce7",
              border: "1px solid rgba(108, 92, 231, 0.2)",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            พร้อมรับงานใหม่
          </span>
        </div>

        {/* Name */}
        <h1
          className="fade-in stagger-2 text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
          style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
        >
          สวัสดี, ผม{" "}
          <span className="gradient-text">{personalInfo.nameEn.split(" ")[0]}</span>
        </h1>

        {/* Title */}
        <p
          className="fade-in stagger-3 text-xl md:text-2xl font-medium mb-3"
          style={{ color: "var(--text-secondary)" }}
        >
          {personalInfo.title}
        </p>

        {/* Subtitle */}
        <p
          className="fade-in stagger-3 text-base md:text-lg max-w-xl mb-8"
          style={{ color: "var(--text-tertiary)" }}
        >
          {personalInfo.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="fade-in stagger-4 flex flex-col sm:flex-row gap-4 mb-16">
          <a href="#contact" className="btn-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            ติดต่อฉัน
          </a>
          <a href={personalInfo.resumeUrl} className="btn-secondary" download>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7,10 12,15 17,10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            ดาวน์โหลด Resume
          </a>
        </div>

        {/* Stats */}
        <div className="fade-in stagger-5 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full max-w-2xl">
          {personalInfo.stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card p-4 md:p-5 text-center"
            >
              <div
                className="text-2xl md:text-3xl font-bold gradient-text mb-1"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {stat.value}
              </div>
              <div
                className="text-xs md:text-sm"
                style={{ color: "var(--text-tertiary)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="fade-in mt-12 flex flex-col items-center gap-2" style={{ color: "var(--text-tertiary)" }}>
          <span className="text-xs tracking-widest uppercase">Scroll Down</span>
          <div className="w-5 h-8 border-2 rounded-full flex justify-center pt-1" style={{ borderColor: "var(--text-tertiary)" }}>
            <div
              className="w-1 h-2 rounded-full"
              style={{
                background: "#6c5ce7",
                animation: "float 2s ease-in-out infinite",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
