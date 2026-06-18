import { Play } from "lucide-react";
import { useEffect, useState } from "react";
import { getYouTubeEmbedUrl, getYouTubeThumbnailUrl } from "../utils/youtube";

type YouTubePreviewProps = {
  src: string;
  title: string;
  className?: string;
  isInteractive?: boolean;
};

export function YouTubePreview({ src, title, className = "project-video", isInteractive = true }: YouTubePreviewProps) {
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [isFrameLoaded, setIsFrameLoaded] = useState(false);
  const thumbnailUrl = getYouTubeThumbnailUrl(src);

  useEffect(() => {
    setIsPlayerReady(false);
    setIsFrameLoaded(false);
  }, [src]);

  const activatePlayer = () => {
    setIsPlayerReady(true);
  };

  if (isPlayerReady || !thumbnailUrl) {
    return (
      <div className={`youtube-player-preview ${className}${isFrameLoaded ? " is-loaded" : ""}`}>
        <iframe
          src={getYouTubeEmbedUrl(src)}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          onLoad={() => setIsFrameLoaded(true)}
        />
        {thumbnailUrl ? <img className="video-thumbnail-overlay" src={thumbnailUrl} alt="" aria-hidden="true" /> : null}
      </div>
    );
  }

  return (
    <div
      className={`youtube-preview ${className}`}
      role={isInteractive ? "button" : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      aria-label={isInteractive ? `${title} play video` : undefined}
      onMouseEnter={activatePlayer}
      onFocus={isInteractive ? activatePlayer : undefined}
      onClick={isInteractive ? activatePlayer : undefined}
      onKeyDown={
        isInteractive
          ? (event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                activatePlayer();
              }
            }
          : undefined
      }
    >
      <img src={thumbnailUrl} alt={title} loading="lazy" />
      <span className="youtube-preview__play" aria-hidden="true">
        <Play size={28} fill="currentColor" />
      </span>
    </div>
  );
}
