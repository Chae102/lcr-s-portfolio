import type { Project } from "../data/projects";
import { ProjectShowcaseItem } from "./ProjectShowcaseItem";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return <ProjectShowcaseItem project={project} index={index} />;
}
