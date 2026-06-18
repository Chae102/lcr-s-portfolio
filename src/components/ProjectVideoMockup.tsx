import type { Project, ProjectVisualType } from "../data/projects";
import { getYouTubeEmbedUrl } from "../utils/youtube";

type ProjectVideoMockupProps = {
  project?: Project;
  videoSrc?: string;
  imageSrc?: string;
  poster?: string;
  alt?: string;
  title?: string;
  visualType?: ProjectVisualType;
};

const mockupCopy = {
  rewind: {
    label: "VIDEO COMING SOON",
    detail: "1970s -> 2020s",
    extra: "OTT / MY LIST",
  },
  robot: {
    label: "ROBOT DEMO COMING SOON",
    detail: "Arduino / IoT / Sensors",
    extra: "Rescue Robot V2.0",
  },
  seogaro: {
    label: "SERVICE FLOW COMING SOON",
    detail: "Library / Books / Stamp",
    extra: "O2O Reading Flow",
  },
  rarepick: {
    label: "IDEATHON CASE STUDY",
    detail: "AI Diagnosis / Map Pin",
    extra: "Rare Animal Care",
  },
  dashboard: {
    label: "DASHBOARD DEMO COMING SOON",
    detail: "Location / Weather / Widgets",
    extra: "Personal Dashboard",
  },
  house: {
    label: "WEB UI DEMO COMING SOON",
    detail: "Booking / Calendar / Rooms",
    extra: "Responsive Web UI",
  },
} satisfies Record<ProjectVisualType, { label: string; detail: string; extra: string }>;

const autoPlayVideoProps = {
  autoPlay: true,
  muted: true,
  defaultMuted: true,
  loop: true,
  playsInline: true,
  preload: "auto",
};

export function ProjectVideoMockup({ project, videoSrc, imageSrc, poster, alt, title, visualType }: ProjectVideoMockupProps) {
  const resolvedTitle = title ?? project?.title ?? "Project";
  const resolvedVisualType = visualType ?? project?.visualType ?? "rewind";
  const previewMedia = project?.media?.[0];
  const resolvedYoutubeSrc = previewMedia?.type === "youtube" ? previewMedia.src : undefined;
  const resolvedVideoSrc = videoSrc ?? (previewMedia?.type === "video" ? previewMedia.src : undefined) ?? project?.videoSrc;
  const resolvedImageSrc = imageSrc ?? (previewMedia?.type === "image" ? previewMedia.src : undefined);
  const resolvedPoster = poster ?? (previewMedia?.type === "video" ? previewMedia.poster : undefined) ?? project?.videoPoster;
  const resolvedAlt = alt ?? previewMedia?.alt;

  if (resolvedYoutubeSrc) {
    return (
      <iframe
        className="project-video"
        src={getYouTubeEmbedUrl(resolvedYoutubeSrc)}
        title={resolvedAlt ?? `${resolvedTitle} project preview video`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    );
  }

  if (resolvedVideoSrc) {
    return (
      <video
        className="project-video"
        src={resolvedVideoSrc}
        poster={resolvedPoster}
        {...autoPlayVideoProps}
        aria-label={resolvedAlt ?? `${resolvedTitle} project preview video`}
      />
    );
  }

  if (resolvedImageSrc) {
    return <img className="project-video" src={resolvedImageSrc} alt={resolvedAlt ?? `${resolvedTitle} project preview image`} />;
  }

  const copy = mockupCopy[resolvedVisualType];

  return (
    <div className={`project-video-mockup mockup-${resolvedVisualType}`} role="img" aria-label={`${resolvedTitle} video placeholder`}>
      <div className="mockup-grid" aria-hidden="true" />
      <div className="mockup-shapes" aria-hidden="true">
        <span className="mockup-shape shape-a" />
        <span className="mockup-shape shape-b" />
        <span className="mockup-shape shape-c" />
        <span className="mockup-shape shape-d" />
      </div>
      <div className="mockup-copy">
        <p>{copy.label}</p>
        <strong>{copy.detail}</strong>
        <span>{copy.extra}</span>
      </div>
    </div>
  );
}
