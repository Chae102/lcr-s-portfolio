import { projects } from "../data/projects";
import { ProjectShowcaseItem } from "./ProjectShowcaseItem";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      intro="대표 프로젝트를 간단히 확인하고, 상세 페이지에서 목적과 구현 과정을 자세히 볼 수 있습니다."
      variant="showcase"
    >
      <div className="project-showcase-list">
        {projects.map((project, index) => (
          <ProjectShowcaseItem project={project} index={index} key={project.slug} />
        ))}
      </div>
    </Section>
  );
}
