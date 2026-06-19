import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "../data/projects";
import { ProjectVideoMockup } from "./ProjectVideoMockup";

type ProjectShowcaseItemProps = {
  project: Project;
  index: number;
};

export function ProjectShowcaseItem({ project, index }: ProjectShowcaseItemProps) {
  const reduceMotion = useReducedMotion();
  const isReversed = index % 2 === 1;
  const projectNumber = String(index + 1).padStart(2, "0");
  const featuredTags = project.cardTags ?? project.tags.slice(0, 6);
  const statusLabel = project.status ?? project.award;
  const titleLength = [...project.title].length;
  const previewTitleClass =
    titleLength > 14 ? "project-preview-title is-extra-long" : titleLength > 7 ? "project-preview-title is-long" : "project-preview-title";
  const contentTitleClass =
    titleLength > 14 ? "project-content-title is-extra-long" : titleLength > 7 ? "project-content-title is-long" : "project-content-title";

  return (
    <motion.article
      className={`project-showcase-item project-summary-card project-${project.slug} ${isReversed ? "is-reversed" : ""}`}
      data-nav-section="projects"
      initial={reduceMotion ? false : { opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.24 }}
      transition={{ duration: 0.56, ease: "easeOut" }}
    >
      <Link className="project-media-panel project-card-link focus-ring" to={`/projects/${project.slug}`}>
        <ProjectVideoMockup project={project} />
        <span className="project-media-overlay" aria-hidden="true">
          <strong className={previewTitleClass}>{project.title}</strong>
          <span>Project Detail</span>
        </span>
      </Link>

      <div className="project-info-panel">
        <div className="project-title-row">
          <div>
            <p className="project-number">{projectNumber}</p>
            <p className="project-kicker">{project.type}</p>
            <h3 className={contentTitleClass}>{project.title}</h3>
            {project.englishTitle ? <p className="project-english">{project.englishTitle}</p> : null}
          </div>
          {statusLabel ? <span className="status-pill">{statusLabel}</span> : null}
        </div>

        <p className="project-summary">{project.subtitle}</p>

        <dl className="project-meta compact-project-meta">
          <div>
            <dt>기간</dt>
            <dd>{project.period}</dd>
          </div>
          <div>
            <dt>인원</dt>
            <dd>{project.members}</dd>
          </div>
          {project.role ? (
            <div>
              <dt>Role</dt>
              <dd>{project.role}</dd>
            </div>
          ) : null}
        </dl>

        <div className="chip-row" aria-label={`${project.title} 대표 기술스택`}>
          {featuredTags.map((tag) => (
            <span className="chip" key={tag}>
              {tag}
            </span>
          ))}
        </div>

        <div className="project-actions">
          <Link className="outline-button focus-ring project-detail-link" to={`/projects/${project.slug}`}>
            Project Detail
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
