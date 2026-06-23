"use client";

import { useEffect, useRef } from "react";
import { education } from "@/data/data";

export default function Education() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="section-container">
        <h2 className="section-title fade-in">Education</h2>
        <p className="section-subtitle fade-in">
          ประวัติการศึกษา
        </p>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="timeline-line" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={edu.id}
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
                      background: "rgba(0, 210, 255, 0.1)",
                      color: "#00b4d8",
                    }}
                  >
                    {edu.period}
                  </span>

                  {/* Institution */}
                  <h3
                    className="text-lg font-bold mb-1"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "var(--text-primary)",
                    }}
                  >
                    {edu.institution}
                  </h3>

                  {/* Degree */}
                  <p
                    className="text-sm font-medium mb-1 flex items-center gap-1.5"
                    style={{
                      color: "#6c5ce7",
                      justifyContent: index % 2 === 0 ? "" : "flex-start",
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5" />
                    </svg>
                    {edu.degree}
                  </p>

                  {/* Field */}
                  <p
                    className="text-sm mb-2"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    สาขา {edu.field}
                  </p>

                  {/* GPA */}
                  {edu.gpa && (
                    <div
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-sm font-medium mb-3"
                      style={{
                        background: "rgba(0, 200, 83, 0.1)",
                        color: "#00c853",
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      GPA: {edu.gpa}
                    </div>
                  )}

                  {/* Achievements */}
                  {edu.achievements && edu.achievements.length > 0 && (
                    <ul className="space-y-2 text-left">
                      {edu.achievements.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00d2ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
