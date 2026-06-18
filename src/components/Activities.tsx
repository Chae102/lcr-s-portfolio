import { Sparkle } from "lucide-react";
import { activities } from "../data/activities";
import { Section } from "./Section";

export function Activities() {
  return (
    <Section
      id="activities"
      eyebrow="Activities"
      title="배우고 협업하며 실무에 가까운 개발 흐름을 익히고 있습니다."
    >
      <div className="resume-list" aria-label="활동 내역">
        <div className="resume-divider">
          <span>학생 활동</span>
        </div>
        {activities.map((activity) => (
          <article className="resume-item" key={activity.title}>
            <div className="resume-date">
              <Sparkle size={18} aria-hidden="true" />
              <span>{activity.period}</span>
            </div>
            <div className="resume-content">
              <h3>{activity.title}</h3>
              <p className="resume-role">{activity.role}</p>
              {activity.description.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <div className="chip-row">
                {activity.keywords.map((keyword) => (
                  <span className="chip" key={keyword}>
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
