import { Award, Sparkle } from "lucide-react";
import { experiences } from "../data/experience";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={
        <>
          활동과 수상 경험을 통해
          <br />
          프론트엔드 개발 흐름을 익히고 있습니다.
        </>
      }
    >
      <div className="resume-list" aria-label="활동 및 수상 경험">
        <div className="resume-divider">
          <span>Activity & Award</span>
        </div>
        {experiences.map((experience) => {
          const Icon = experience.category === "Award" ? Award : Sparkle;

          return (
            <article className="resume-item" data-nav-section="experience" key={experience.title}>
              <div className="resume-date">
                <Icon size={18} aria-hidden="true" />
                <span>{experience.period}</span>
              </div>
              <div className="resume-content">
                <div className="resume-title-row">
                  <div>
                    <span className="experience-kind">{experience.category}</span>
                    <h3>{experience.title}</h3>
                    <p className="resume-role">{experience.project ?? experience.role}</p>
                  </div>
                  <span className="award-badge" aria-label={experience.category}>
                    <Icon size={18} aria-hidden="true" />
                  </span>
                </div>
                {experience.description.map((line) => (
                  <p key={line}>{line}</p>
                ))}
                <div className="chip-row">
                  {experience.tags.map((tag) => (
                    <span className={experience.category === "Award" ? "chip accent-chip" : "chip"} key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
