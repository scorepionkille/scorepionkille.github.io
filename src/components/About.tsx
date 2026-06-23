"use client";

import { useEffect, useRef } from "react";
import { personalInfo } from "@/data/data";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-in, .fade-in-left, .fade-in-right").forEach((el) => {
              el.classList.add("visible");
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="section-container">
        <h2 className="section-title fade-in">About Me</h2>
        <p className="section-subtitle fade-in">
          เกี่ยวกับตัวผมและสิ่งที่ผมทำ
        </p>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left - Info Card */}
          <div className="fade-in-left">
            <div className="glass-card p-6 md:p-8">
              {/* Quick Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "rgba(108, 92, 231, 0.1)" }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6c5ce7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs" style={{ color: "var(--text-tertiary)" }}>ชื่อ</div>
                    <div className="font-medium" style={{ color: "var(--text-primary)" }}>
                      {personalInfo.name}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "rgba(0, 210, 255, 0.1)" }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00d2ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs" style={{ color: "var(--text-tertiary)" }}>ตำแหน่ง</div>
                    <div className="font-medium" style={{ color: "var(--text-primary)" }}>
                      {personalInfo.title}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "rgba(0, 200, 83, 0.1)" }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00c853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs" style={{ color: "var(--text-tertiary)" }}>ที่อยู่</div>
                    <div className="font-medium" style={{ color: "var(--text-primary)" }}>
                      {personalInfo.location}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "rgba(255, 171, 0, 0.1)" }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffab00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs" style={{ color: "var(--text-tertiary)" }}>อีเมล</div>
                    <div className="font-medium" style={{ color: "var(--text-primary)" }}>
                      {personalInfo.email}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Bio */}
          <div className="fade-in-right">
            <h3
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
            >
              ยินดีที่ได้รู้จัก! 👋
            </h3>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              <p>{personalInfo.bio}</p>
              <p>
                นอกจากงาน Coding แล้ว ปัจจุบันกำลังศึกษาด้าน AI และ DevOps Engineer
              </p>
            </div>

            {/* Highlight Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {["Problem Solver", "Team Player", "Clean Code", "Agile", "Continuous Learner"].map(
                (tag) => (
                  <span key={tag} className="tech-tag">
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
