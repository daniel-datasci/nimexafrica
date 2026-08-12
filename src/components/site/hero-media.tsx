import { useEffect, useState } from "react";

type Source = { src: string; type: string; media?: string };

/**
 * Renders the hero poster as a high-priority image (the LCP candidate) and only
 * mounts the looping video once the page is idle, so video bytes never compete
 * with first paint. On slow connections or reduced-data mode the video is skipped.
 */
export function HeroMedia({
  poster,
  sources,
  alt,
  className = "",
}: {
  poster: string;
  sources: Source[];
  alt: string;
  className?: string;
}) {
  const [showVideo, setShowVideo] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    if (conn?.saveData || (conn?.effectiveType && /2g/.test(conn.effectiveType))) return;

    let cancelled = false;
    const start = () => {
      if (!cancelled) setShowVideo(true);
    };
    const idle = (window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number })
      .requestIdleCallback;
    const id = idle ? idle(start, { timeout: 2500 }) : window.setTimeout(start, 1200);
    return () => {
      cancelled = true;
      if (!idle) window.clearTimeout(id as number);
    };
  }, []);

  return (
    <>
      <img
        src={poster}
        alt={alt}
        fetchPriority="high"
        decoding="async"
        className={`hero-zoom absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          ready ? "opacity-0" : "opacity-100"
        } ${className}`}
      />
      {showVideo ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          aria-hidden
          onCanPlay={() => setReady(true)}
          onEnded={(event) => {
            const video = event.currentTarget;
            video.currentTime = 0;
            void video.play();
          }}
          className={`hero-zoom absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            ready ? "opacity-100" : "opacity-0"
          } ${className}`}
        >
          {sources.map((s) => (
            <source key={s.src} src={s.src} type={s.type} media={s.media} />
          ))}
        </video>
      ) : null}
    </>
  );
}

/**
 * Below-the-fold video: renders the poster only until the element scrolls near
 * the viewport, so no video bytes are fetched during initial page load.
 */
export function LazyVideo({
  poster,
  sources,
  alt,
  className = "",
}: {
  poster: string;
  sources: Source[];
  alt: string;
  className?: string;
}) {
  const [node, setNode] = useState<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!node || visible) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [node, visible]);

  return (
    <div ref={setNode} className={className}>
      {visible ? (
        <video
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          aria-label={alt}
          className="h-full w-full object-cover"
        >
          {sources.map((s) => (
            <source key={s.src} src={s.src} type={s.type} media={s.media} />
          ))}
        </video>
      ) : (
        <img src={poster} alt={alt} loading="lazy" decoding="async" className="h-full w-full object-cover" />
      )}
    </div>
  );
}
