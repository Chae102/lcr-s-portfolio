import { useEffect, useState } from "react";

type ProjectAutoPlayVideoProps = {
  src: string;
  poster?: string;
  label: string;
  className?: string;
};

const autoPlayVideoProps = {
  autoPlay: true,
  muted: true,
  defaultMuted: true,
  loop: true,
  playsInline: true,
  preload: "auto",
};

export function ProjectAutoPlayVideo({ src, poster, label, className = "project-video" }: ProjectAutoPlayVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setIsPlaying(false);
  }, [src, poster]);

  return (
    <div className={`${className} local-video-preview${isPlaying ? " is-playing" : ""}`}>
      <video
        src={src}
        poster={poster}
        {...autoPlayVideoProps}
        aria-label={label}
        onPlaying={() => setIsPlaying(true)}
        onWaiting={() => setIsPlaying(false)}
        onStalled={() => setIsPlaying(false)}
      />
      {poster ? <img className="video-thumbnail-overlay" src={poster} alt="" aria-hidden="true" /> : null}
    </div>
  );
}
