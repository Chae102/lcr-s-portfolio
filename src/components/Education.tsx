import { Sparkle } from "lucide-react";
import { education } from "../data/education";
import { Section } from "./Section";

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="학교에서 기본기를 쌓고 프론트엔드로 확장하고 있습니다.">
      <div className="resume-list" aria-label="교육 정보">
        <div className="resume-divider">
          <span>교육</span>
        </div>
        <article className="resume-item">
          <div className="resume-date">
            <Sparkle size={18} aria-hidden="true" />
            <span>{education.status}</span>
          </div>
          <div className="resume-content">
            <h3>{education.school}</h3>
            <p className="resume-role">{education.major}</p>
            <ul className="education-keywords">
              {education.keywords.map((keyword) => (
                <li key={keyword}>{keyword}</li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </Section>
  );
}
