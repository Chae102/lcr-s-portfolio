import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";
import type { Project, ProjectMedia } from "../data/projects";
import { getYouTubeEmbedUrl } from "../utils/youtube";
import { ProjectVideoMockup } from "./ProjectVideoMockup";

type ProjectMediaSliderProps = {
  media?: ProjectMedia[];
  fallbackVideoSrc?: string;
  visualType?: Project["visualType"];
  title: string;
};

const autoPlayVideoProps = {
  autoPlay: true,
  muted: true,
  defaultMuted: true,
  loop: true,
  playsInline: true,
  preload: "auto",
};

export function ProjectMediaSlider({ media, fallbackVideoSrc, visualType, title }: ProjectMediaSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = useMemo<ProjectMedia[]>(() => {
    if (media?.length) {
      return media;
    }

    if (fallbackVideoSrc) {
      return [
        {
          type: "video",
          src: fallbackVideoSrc,
          alt: `${title} project video`,
        },
      ];
    }

    return [];
  }, [fallbackVideoSrc, media, title]);

  if (!items.length) {
    return <ProjectVideoMockup title={title} visualType={visualType} />;
  }

  const currentItem = items[currentIndex] ?? items[0];
  const hasMultipleItems = items.length > 1;

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="project-media-slider">
      <div className="project-media-slide">
        {currentItem.type === "youtube" ? (
          <iframe
            key={`${currentIndex}-${currentItem.src}`}
            src={getYouTubeEmbedUrl(currentItem.src)}
            title={currentItem.alt ?? `${title} YouTube video`}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : currentItem.type === "video" ? (
          <video
            key={`${currentIndex}-${currentItem.src}`}
            src={currentItem.src}
            poster={currentItem.poster}
            {...autoPlayVideoProps}
            aria-label={currentItem.alt ?? `${title} project detail video`}
          />
        ) : (
          <img src={currentItem.src} alt={currentItem.alt ?? `${title} project image`} />
        )}
      </div>

      {hasMultipleItems ? (
        <>
          <button className="project-slider-button prev focus-ring" type="button" onClick={goPrev} aria-label="Previous media">
            <ChevronLeft size={20} aria-hidden="true" />
          </button>
          <button className="project-slider-button next focus-ring" type="button" onClick={goNext} aria-label="Next media">
            <ChevronRight size={20} aria-hidden="true" />
          </button>
          <span className="project-slider-count">
            {currentIndex + 1} / {items.length}
          </span>
        </>
      ) : null}

      {currentItem.caption ? <p className="project-slider-caption">{currentItem.caption}</p> : null}
    </div>
  );
}
