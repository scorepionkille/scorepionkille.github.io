"use client";

import { useEffect, useRef } from "react";
import { experiences } from "@/data/data";

export default function Experience() {
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
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="section-container">
        <h2 className="section-title fade-in">Work Experience</h2>
        <p className="section-subtitle fade-in">
          ประสบการณ์การทำงานที่ผ่านมา
        </p>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="timeline-line" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative pl-12 md:pl-0 ${
                  index % 2 === 0
                    ? "md:pr-[calc(50%+2rem)] md:text-right"
                    : "md:pl-[calc(50%+2rem)]"
                }`}
              >
                {/* Timeline Dot */}
                <div className="timeline-dot" />

                {/* Card */}
                <div
                  className={`glass-card p-6 ${
                    index % 2 === 0 ? "fade-in-left" : "fade-in-right"
                  }`}
                  style={{ transitionDelay: `${index * 0.15}s` }}
                >
                  {/* Period Badge */}
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3"
                    style={{
                      background: "rgba(108, 92, 231, 0.1)",
                      color: "#6c5ce7",
                    }}
                  >
                    {exp.period}
                  </span>

                  {/* Role */}
                  <h3
                    className="text-lg font-bold mb-1"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "var(--text-primary)",
                    }}
                  >
                    {exp.role}
                  </h3>

                  {/* Company */}
                  <p
                    className="text-sm font-medium mb-1 flex items-center gap-1.5"
                    style={{
                      color: "#6c5ce7",
                      justifyContent: index % 2 === 0 ? "" : "flex-start",
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                    </svg>
                    {exp.company}
                  </p>

                  {/* Location */}
                  <p
                    className="text-xs mb-3 flex items-center gap-1.5"
                    style={{
                      color: "var(--text-tertiary)",
                      justifyContent: index % 2 === 0 ? "" : "flex-start",
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {exp.location}
                  </p>

                  {/* Description */}
                  <p
                    className="text-sm mb-4 leading-relaxed"
                    style={{
                      color: "var(--text-secondary)",
                      textAlign: "left",
                    }}
                  >
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-2 mb-4 text-left">
                    {exp.achievements.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00c853" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5" style={{ justifyContent: "flex-start" }}>
                    {exp.techStack.map((tech) => (
                      <span key={tech} className="tech-tag text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
