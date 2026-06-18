import { ArrowLeft, ArrowRight, ExternalLink, GitBranch } from "lucide-react";
import type { ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import { ProjectMediaSlider } from "../components/ProjectMediaSlider";
import type { Project } from "../data/projects";
import { projects } from "../data/projects";

type DetailSectionProps = {
  eyebrow?: string;
  title: string;
  children: ReactNode;
};

function DetailSection({ eyebrow, title, children }: DetailSectionProps) {
  return (
    <section className="detail-article-section">
      {eyebrow ? <p className="detail-section-eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function DetailCardList({ items }: { items: string[] }) {
  return (
    <ul className="detail-card-list">
      {items.map((item, index) => (
        <li key={item}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <p>{item}</p>
        </li>
      ))}
    </ul>
  );
}

function HighlightList({ items }: { items: string[] }) {
  const keyTerms = ["Median Filter", "millis()", "Non-blocking", "safeDelay", "Hysteresis Control", "TMDB API", "Context", "localStorage"];

  return (
    <ul className="detail-highlight-list">
      {items.map((item) => {
        const isKey = keyTerms.some((term) => item.includes(term));
        return (
          <li className={isKey ? "is-key-highlight" : undefined} key={item}>
            {item}
          </li>
        );
      })}
    </ul>
  );
}

function ParagraphList({ items }: { items: string[] }) {
  return (
    <div className="detail-learning-list">
      {items.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
}

function ProblemList({ problems }: { problems: NonNullable<Project["problems"]> }) {
  return (
    <ul className="detail-card-list">
      {problems.map((item, index) => (
        <li key={item.title}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <div>
            <p>
              <strong>{item.title}</strong>
            </p>
            <p>문제: {item.problem}</p>
            {item.cause ? <p>원인: {item.cause}</p> : null}
            <p>해결: {item.solution}</p>
            {item.result ? <p>결과: {item.result}</p> : null}
          </div>
        </li>
      ))}
    </ul>
  );
}

export function ProjectDetailPage() {
  const { slug } = useParams();
  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const project = projects[projectIndex];
  const previousProject = projectIndex > 0 ? projects[projectIndex - 1] : undefined;
  const nextProject = projectIndex >= 0 && projectIndex < projects.length - 1 ? projects[projectIndex + 1] : undefined;

  if (!project) {
    return (
      <main className="project-detail-page project-not-found">
        <Link className="detail-back-link focus-ring" to="/">
          <ArrowLeft size={16} aria-hidden="true" />
          Back to Portfolio
        </Link>
        <h1>프로젝트를 찾을 수 없습니다.</h1>
        <p>요청한 프로젝트 주소를 다시 확인해 주세요.</p>
      </main>
    );
  }

  const projectNumber = String(projectIndex + 1).padStart(2, "0");
  const metaLine = [project.type, project.period, project.members].filter(Boolean).join(" · ");
  const hasLinks = Boolean(project.githubUrl || project.deployUrl);
  const hasDetailedSections = Boolean(
    project.roleDescription ||
      project.roles?.length ||
      project.developmentGoal?.length ||
      project.whyThisProject?.length ||
      project.hardware?.length ||
      project.hardwareDescription?.length ||
      project.software?.length ||
      project.stateSystem?.length ||
      project.problems?.length ||
      project.pageStructure?.length ||
      project.userFlow?.length ||
      project.limitations?.length ||
      project.futureImprovements?.length,
  );

  return (
    <main className="project-detail-page detail-reference-layout">
      <article className="detail-article">
        <div className="detail-topbar">
          <Link className="detail-back-link focus-ring" to="/">
            <ArrowLeft size={16} aria-hidden="true" />
            Back to Portfolio
          </Link>
        </div>

        <header className="detail-hero-block">
          <p className="detail-project-number">PROJECT {projectNumber}</p>
          <h1>
            {project.title}
            {project.englishTitle ? <span>{project.englishTitle}</span> : null}
            {project.koreanTitle ? <span>{project.koreanTitle}</span> : null}
          </h1>
          <p className="detail-hero-subtitle">{project.subtitle}</p>
          <p className="detail-hero-meta">
            {metaLine}
            {project.award ? ` · ${project.award}` : ""}
            {project.awardDate ? ` · ${project.awardDate}` : ""}
          </p>
        </header>

        <div className="detail-main-visual">
          <ProjectMediaSlider media={project.media} fallbackVideoSrc={project.videoSrc} visualType={project.visualType} title={project.title} />
        </div>

        <div className="detail-action-row">
          <div className="detail-title-summary">
            <strong>{project.title}</strong>
            <p>{project.summary}</p>
          </div>
          {hasLinks ? (
            <div className="detail-link-buttons">
              {project.githubUrl ? (
                <a className="detail-pill-button focus-ring" href={project.githubUrl} target="_blank" rel="noreferrer">
                  <GitBranch size={16} aria-hidden="true" />
                  GitHub
                </a>
              ) : null}
              {project.deployUrl ? (
                <a className="detail-pill-button focus-ring" href={project.deployUrl} target="_blank" rel="noreferrer">
                  <ExternalLink size={16} aria-hidden="true" />
                  Demo
                </a>
              ) : null}
            </div>
          ) : null}
        </div>

        <div className="detail-tag-row" aria-label={`${project.title} 기술스택`}>
          {project.tags.map((tag) => (
            <span className="detail-tech-chip" key={tag}>
              {tag}
            </span>
          ))}
        </div>

        <section className="detail-info-grid" aria-label="프로젝트 기본 정보">
          <div>
            <span>Period</span>
            <strong>{project.period}</strong>
          </div>
          <div>
            <span>Members</span>
            <strong>{project.members}</strong>
          </div>
          <div>
            <span>Type</span>
            <strong>{project.type}</strong>
          </div>
          <div>
            <span>Role</span>
            <strong>{project.role ?? "Frontend 개발"}</strong>
          </div>
          {project.award ? (
            <div>
              <span>Award</span>
              <strong>
                {project.award}
                {project.awardDate ? ` · ${project.awardDate}` : ""}
              </strong>
            </div>
          ) : null}
          {hasLinks ? (
            <div>
              <span>Links</span>
              <strong>{[project.githubUrl ? "GitHub" : "", project.deployUrl ? "Demo" : ""].filter(Boolean).join(" · ")}</strong>
            </div>
          ) : null}
        </section>

        <DetailSection eyebrow="PROJECT OVERVIEW" title="Overview">
          <div className="detail-copy-block">
            <p>{project.summary}</p>
            <p>{project.description}</p>
          </div>
        </DetailSection>

        {project.developmentGoal?.length ? (
          <DetailSection eyebrow="DEVELOPMENT GOAL" title="Development Goal">
            <ParagraphList items={project.developmentGoal} />
          </DetailSection>
        ) : null}

        {project.whyThisProject?.length ? (
          <DetailSection eyebrow="WHY THIS PROJECT" title="Why This Project">
            <ParagraphList items={project.whyThisProject} />
          </DetailSection>
        ) : null}

        {project.roleDescription || project.roles?.length ? (
          <DetailSection eyebrow="MY ROLE" title="My Role">
            {project.roleDescription ? (
              <div className="detail-copy-block">
                <p>{project.roleDescription}</p>
              </div>
            ) : null}
            {project.roles?.length ? <DetailCardList items={project.roles} /> : null}
          </DetailSection>
        ) : null}

        {project.hardware?.length || project.hardwareDescription?.length ? (
          <DetailSection eyebrow="HARDWARE" title="Hardware">
            {project.hardwareDescription?.length ? <ParagraphList items={project.hardwareDescription} /> : null}
            {project.hardware?.length ? <DetailCardList items={project.hardware} /> : null}
          </DetailSection>
        ) : null}

        {project.software?.length ? (
          <DetailSection eyebrow="SOFTWARE" title="Software">
            <ParagraphList items={project.software} />
            {project.codeKeywords?.length ? (
              <div className="detail-tag-row" aria-label={`${project.title} core code keywords`}>
                {project.codeKeywords.map((keyword) => (
                  <span className="detail-tech-chip" key={keyword}>
                    {keyword}
                  </span>
                ))}
              </div>
            ) : null}
          </DetailSection>
        ) : null}

        <DetailSection eyebrow="WHAT I BUILT" title="Features">
          <DetailCardList items={project.features} />
        </DetailSection>

        {project.pageStructure?.length ? (
          <DetailSection eyebrow="PAGE STRUCTURE" title="Page Structure">
            <DetailCardList items={project.pageStructure} />
          </DetailSection>
        ) : null}

        {project.userFlow?.length ? (
          <DetailSection eyebrow="USER FLOW" title="User Flow">
            <DetailCardList items={project.userFlow} />
          </DetailSection>
        ) : null}

        {!hasDetailedSections || project.showHighlights ? (
          <DetailSection eyebrow="IMPLEMENTATION POINTS" title="Highlights">
            <HighlightList items={project.highlights} />
          </DetailSection>
        ) : null}

        {project.stateSystem?.length ? (
          <DetailSection eyebrow="STATE SYSTEM" title="State System">
            <DetailCardList items={project.stateSystem} />
          </DetailSection>
        ) : null}

        {project.problems?.length ? (
          <DetailSection eyebrow="PROBLEMS & SOLUTIONS" title="Problems & Solutions">
            <ProblemList problems={project.problems} />
          </DetailSection>
        ) : null}

        {project.limitations?.length ? (
          <DetailSection eyebrow="LIMITATIONS" title="Limitations">
            <ParagraphList items={project.limitations} />
          </DetailSection>
        ) : null}

        <DetailSection eyebrow="RETROSPECTIVE" title="Learnings">
          <ParagraphList items={project.learnings} />
        </DetailSection>

        {project.futureImprovements?.length ? (
          <DetailSection eyebrow="FUTURE IMPROVEMENTS" title="Future Improvements">
            <DetailCardList items={project.futureImprovements} />
          </DetailSection>
        ) : null}

        <DetailSection eyebrow="TECH STACK" title="Tech Stack">
          <div className="detail-tag-row" aria-label={`${project.title} 기술스택`}>
            {project.tags.map((tag) => (
              <span className="detail-tech-chip" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </DetailSection>

        <nav className="detail-bottom-nav" aria-label="프로젝트 상세 이동">
          <Link className="detail-bottom-card detail-bottom-home focus-ring" to="/">
            <span>Back</span>
            <strong>Portfolio 메인으로</strong>
          </Link>
          {previousProject ? (
            <Link className="detail-bottom-card focus-ring" to={`/projects/${previousProject.slug}`}>
              <span>Previous Project</span>
              <strong>{previousProject.title}</strong>
            </Link>
          ) : null}
          {nextProject ? (
            <Link className="detail-bottom-card focus-ring" to={`/projects/${nextProject.slug}`}>
              <span>Next Project</span>
              <strong>
                {nextProject.title}
                <ArrowRight size={16} aria-hidden="true" />
              </strong>
            </Link>
          ) : null}
        </nav>
      </article>
    </main>
  );
}
