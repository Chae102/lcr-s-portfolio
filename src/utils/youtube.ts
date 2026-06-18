export function getYouTubeVideoId(src: string) {
  const trimmedSrc = src.trim();

  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmedSrc)) {
    return trimmedSrc;
  }

  try {
    const parsedUrl = new URL(trimmedSrc);
    let videoId = "";

    if (parsedUrl.hostname.includes("youtu.be")) {
      videoId = parsedUrl.pathname.split("/").filter(Boolean)[0] ?? "";
    }

    if (parsedUrl.hostname.includes("youtube.com")) {
      if (parsedUrl.pathname === "/watch") {
        videoId = parsedUrl.searchParams.get("v") ?? "";
      }

      if (parsedUrl.pathname.startsWith("/shorts/")) {
        videoId = parsedUrl.pathname.split("/shorts/")[1]?.split("/")[0] ?? "";
      }

      if (parsedUrl.pathname.startsWith("/embed/")) {
        videoId = parsedUrl.pathname.split("/embed/")[1]?.split("/")[0] ?? "";
      }
    }

    return videoId || null;
  } catch {
    return null;
  }
}

export function getYouTubeThumbnailUrl(src: string) {
  const videoId = getYouTubeVideoId(src);
  return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null;
}

export function getYouTubeEmbedUrl(src: string) {
  const videoId = getYouTubeVideoId(src);

  if (!videoId) {
    return src;
  }

  return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&playsinline=1&rel=0&modestbranding=1`;
}
