"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Images,
  PawPrint,
  Play,
  X,
} from "lucide-react";
import data from "@/data/data.json";

type VideoItem = { title: string; description: string; src: string };

function VideoGallerySection({
  videos,
}: {
  videos: { eyebrow: string; title: string; description: string; items: VideoItem[] };
}) {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const modalRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!activeVideo) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setActiveVideo(null); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [activeVideo]);

  useEffect(() => {
    if (activeVideo && modalRef.current) {
      modalRef.current.load();
      modalRef.current.play().catch(() => {});
    }
  }, [activeVideo]);

  return (
    <>
      <section className="site-section relative overflow-hidden bg-[#F7F8FA]">
        <div className="site-container relative z-10">
          <SectionHeader
            eyebrow={videos.eyebrow}
            title={videos.title}
            description={videos.description}
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:gap-5">
            {videos.items.map((video) => (
              <VideoCard key={video.src} video={video} onPlay={() => setActiveVideo(video)} />
            ))}
          </div>
        </div>
      </section>

      {/* Video lightbox modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Video player"
          onClick={() => setActiveVideo(null)}
        >
          <button
            type="button"
            onClick={() => setActiveVideo(null)}
            className="absolute top-4 right-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close video"
          >
            <X className="h-6 w-6" strokeWidth={2.25} />
          </button>
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={modalRef}
              src={activeVideo.src}
              controls
              autoPlay
              className="w-full rounded-xl bg-black"
              style={{ maxHeight: "80vh" }}
            />
            <p className="mt-3 text-center text-sm font-semibold text-white">
              {activeVideo.title}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

function VideoCard({ video, onPlay }: { video: VideoItem; onPlay: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (isHovered) {
      el.play().catch(() => {});
    } else {
      el.pause();
      el.currentTime = 0;
    }
  }, [isHovered]);

  return (
    <article
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onPlay}
    >
      <div className="relative mb-3 aspect-video overflow-hidden rounded-xl bg-[#0b1324]">
        <video
          ref={videoRef}
          src={video.src}
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-60"
        />
        {/* Play overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform duration-300 group-hover:scale-110">
            <Play className="ml-0.5 h-5 w-5 fill-[#0b1324] text-[#0b1324]" strokeWidth={0} />
          </span>
        </div>
      </div>
      <h3 className="text-[0.9rem] font-bold leading-snug text-[#0b1324] sm:text-[0.95rem]">
        {video.title}
      </h3>
      <p className="mt-1 text-sm leading-relaxed text-[#5a6577]">
        {video.description}
      </p>
    </article>
  );
}


function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
      <div className="mb-3 flex items-center justify-center gap-3">
        <span className="h-[2px] w-8 bg-[#ffb016] sm:w-10" />
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#ffb016]">
          {eyebrow}
        </p>
        <span className="h-[2px] w-8 bg-[#ffb016] sm:w-10" />
      </div>

      <h2 className="text-3xl font-extrabold tracking-tight text-[#0b1324] sm:text-4xl lg:text-[2.5rem]">
        {title}
      </h2>

      <PawPrint
        className="mx-auto mt-3 h-4 w-4 text-[#ffb016]"
        strokeWidth={2.5}
        fill="#ffb016"
      />

      <p className="mx-auto mt-3 max-w-lg text-[0.95rem] leading-relaxed text-[#5a6577] sm:text-base">
        {description}
      </p>
    </div>
  );
}

export default function GallerySection() {
  const { images, videos } = data.gallery;
  const items = images.items;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setActiveIndex(null), []);

  const showPrev = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current - 1 + items.length) % items.length,
    );
  }, [items.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % items.length,
    );
  }, [items.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, closeLightbox, showPrev, showNext]);

  const activeImage = activeIndex !== null ? items[activeIndex] : null;

  return (
    <>
      {/* Image Gallery */}
      <section className="site-section relative overflow-hidden bg-white">
        <div className="site-container relative z-10">
          <SectionHeader
            eyebrow={images.eyebrow}
            title={images.title}
            description={images.description}
          />

          <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
            {items.map((item, index) => (
              <button
                key={item.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffb016]"
                aria-label={`View ${item.alt}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>
            ))}
          </div>

          <div className="mt-10 flex justify-center sm:mt-12">
            <Link
              href={images.cta.href}
              className="inline-flex items-center gap-2.5 rounded-lg border border-[#ffb016] bg-white px-5 py-2.5 text-sm font-semibold text-[#ffb016] transition-colors hover:bg-[#ffb016] hover:text-white"
            >
              <Images className="h-4 w-4" strokeWidth={2} />
              {images.cta.text}
              <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
            </Link>
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <VideoGallerySection videos={videos} />

      {/* Fullscreen lightbox */}
      {activeImage && activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery viewer"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:top-6 sm:right-6"
            aria-label="Close gallery"
          >
            <X className="h-6 w-6" strokeWidth={2.25} />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrev();
            }}
            className="absolute left-3 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6 sm:h-12 sm:w-12"
            aria-label="Previous image"
          >
            <ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.25} />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            className="absolute right-3 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6 sm:h-12 sm:w-12"
            aria-label="Next image"
          >
            <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.25} />
          </button>

          <div
            className="relative h-full max-h-[85vh] w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm font-medium text-white/80">
            {activeIndex + 1} / {items.length}
          </p>
        </div>
      )}
    </>
  );
}
