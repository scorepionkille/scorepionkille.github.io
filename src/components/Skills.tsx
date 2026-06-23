"use client";

import { useEffect, useRef, useState } from "react";
import { skillCategories } from "@/data/data";

function getProficiencyLabel(level: number): {
  label: string;
  color: string;
  bg: string;
} {
  if (level >= 90)
    return { label: "Expert", color: "#6c5ce7", bg: "rgba(108, 92, 231, 0.15)" };
  if (level >= 80)
    return { label: "Advanced", color: "#00b4d8", bg: "rgba(0, 180, 216, 0.15)" };
  if (level >= 70)
    return { label: "Intermediate", color: "#00c853", bg: "rgba(0, 200, 83, 0.15)" };
  return { label: "Beginner", color: "#ffab00", bg: "rgba(255, 171, 0, 0.15)" };
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            entry.target.querySelectorAll(".fade-in").forEach((el) => {
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
      id="skills"
      ref={sectionRef}
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="section-container">
        <h2 className="section-title fade-in">Skills & Technologies</h2>
        <p className="section-subtitle fade-in">
          เทคโนโลยีและทักษะที่ผมใช้ในการทำงาน
        </p>

        {/* Category Tabs */}
        <div className="fade-in flex flex-wrap justify-center gap-3 mb-10">
          {skillCategories.map((cat, index) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(index)}
              className="px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 cursor-pointer"
              style={{
                background:
                  activeCategory === index
                    ? "linear-gradient(135deg, #6c5ce7, #5a45d6)"
                    : "var(--skill-bg)",
                color: activeCategory === index ? "#ffffff" : "var(--text-secondary)",
                boxShadow: activeCategory === index ? "var(--shadow-glow)" : "none",
              }}
            >
              <span className="mr-1.5">{cat.icon}</span>
              {cat.category}
            </button>
          ))}
        </div>

        {/* Proficiency Legend */}
        <div className="fade-in flex flex-wrap justify-center gap-4 mb-8">
          {[
            { label: "Expert", color: "#6c5ce7" },
            { label: "Advanced", color: "#00b4d8" },
            { label: "Intermediate", color: "#00c853" },
            { label: "Beginner", color: "#ffab00" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-1.5 text-xs" style={{ color: "var(--text-tertiary)" }}>
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ background: item.color }}
              />
              {item.label}
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategories[activeCategory].skills.map((skill, index) => {
              const proficiency = getProficiencyLabel(skill.level);
              return (
                <div
                  key={skill.name}
                  className={`fade-in glass-card p-4 flex items-center justify-between gap-3 ${isVisible ? "visible" : ""}`}
                  style={{ transitionDelay: `${index * 0.06}s` }}
                >
                  <span
                    className="font-medium text-sm"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {skill.name}
                  </span>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap shrink-0"
                    style={{
                      color: proficiency.color,
                      background: proficiency.bg,
                      border: `1px solid ${proficiency.color}30`,
                    }}
                  >
                    {proficiency.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
