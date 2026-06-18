export function getYoutubeEmbedUrl(src: string) {
  try {
    const url = new URL(src);
    const hostname = url.hostname.replace(/^www\./, "");
    let videoId: string | null = null;

    if (hostname === "youtu.be") {
      videoId = url.pathname.split("/").filter(Boolean)[0] ?? null;
    }

    if (hostname === "youtube.com" || hostname === "m.youtube.com") {
      if (url.pathname === "/watch") {
        videoId = url.searchParams.get("v");
      } else {
        const [prefix, id] = url.pathname.split("/").filter(Boolean);
        if (prefix === "embed" || prefix === "shorts") {
          videoId = id ?? null;
        }
      }
    }

    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  } catch {
    return null;
  }
}
