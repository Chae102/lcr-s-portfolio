export function TopFaceVideo() {
  return (
    <section className="top-face-video" aria-label="Face video">
      <video
        className="top-face-video__media"
        src="/videos/face.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    </section>
  );
}
