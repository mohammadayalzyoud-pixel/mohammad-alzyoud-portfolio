"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import { useCallback, useEffect, useRef, useState } from "react";

type GalleryImage = { src: string; alt: string };

export function ProjectImageLightbox({ images, variant, index, galleryLabel, labels }: { images: GalleryImage[]; variant: "delni" | "website" | "almondas"; index: number; galleryLabel?: string; labels: { open: string; close: string; previous: string; next: string } }) {
  const [active, setActive] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const touchStart = useRef<number | null>(null);
  const rtl = typeof document !== "undefined" && document.documentElement.dir === "rtl";

  const close = useCallback(() => { const previous = active; setActive(null); if (previous !== null) requestAnimationFrame(() => triggerRefs.current[previous]?.focus()); }, [active]);
  const move = useCallback((delta: number) => { setActive((current) => current === null ? null : (current + delta + images.length) % images.length); }, [images.length]);
  useEffect(() => {
    if (active === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") move(rtl ? 1 : -1);
      if (event.key === "ArrowRight") move(rtl ? -1 : 1);
      if (event.key === "Tab") {
        const dialog = closeRef.current?.closest("[role=dialog]");
        const controls = dialog?.querySelectorAll<HTMLElement>("button");
        if (!controls?.length) return;
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = previousOverflow; document.removeEventListener("keydown", onKey); };
  }, [active, rtl, close, move]);

  function open(imageIndex: number) { setActive(imageIndex); }
  function trigger(image: GalleryImage, imageIndex: number, className?: string) {
    return <button ref={(node) => { triggerRefs.current[imageIndex] = node; }} type="button" className={`image-view-trigger ${className ?? ""}`} onClick={() => open(imageIndex)} aria-label={`${labels.open}: ${image.alt}`}><Image unoptimized src={image.src} alt={image.alt} width={variant === "website" ? 1920 : 616} height={variant === "website" ? 1080 : 1280} sizes={imageIndex === 0 ? (variant === "website" ? "(max-width: 800px) 100vw, 56vw" : "(max-width: 800px) 72vw, 340px") : (variant === "website" ? "180px" : variant === "delni" ? "110px" : "150px")} priority={variant === "delni" && imageIndex === 0} loading={variant === "delni" && imageIndex === 0 ? undefined : "lazy"} /></button>;
  }

  const visualClass = variant === "delni" ? "delni-visual" : variant === "website" ? "delni-web-visual" : "almondas-visual";
  const mainClass = variant === "delni" ? "delni-main" : variant === "website" ? "delni-web-main" : "almondas-main";
  const galleryClass = variant === "delni" ? "delni-gallery" : variant === "website" ? "delni-web-gallery" : "almondas-gallery";
  const wrapClass = variant === "delni" ? "delni-gallery-wrap" : variant === "almondas" ? "almondas-gallery-wrap" : "";

  return <>
    <div className={`project-visual ${visualClass}`}><div className="project-index">0{index + 1}</div><div className={mainClass}>{trigger(images[0], 0)}</div><div className={wrapClass}>{galleryLabel && <span>{galleryLabel}</span>}<div className={galleryClass} dir="ltr" tabIndex={0}>{images.slice(1).map((image, galleryIndex) => <figure key={image.src}>{trigger(image, galleryIndex + 1)}</figure>)}</div></div></div>
    {active !== null && createPortal(<div className="image-lightbox" role="dialog" aria-modal="true" aria-label={images[active].alt} dir={rtl ? "rtl" : "ltr"} onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }} onTouchStart={(event) => { touchStart.current = event.touches[0]?.clientX ?? null; }} onTouchEnd={(event) => { if (touchStart.current === null) return; const delta = (event.changedTouches[0]?.clientX ?? touchStart.current) - touchStart.current; if (Math.abs(delta) > 55) move(delta > 0 ? (rtl ? 1 : -1) : (rtl ? -1 : 1)); touchStart.current = null; }}>
      <button ref={closeRef} className="lightbox-close" type="button" onClick={close} aria-label={labels.close}>×</button>
      <button className="lightbox-nav lightbox-previous" type="button" onClick={() => move(-1)} aria-label={labels.previous}>‹</button>
      <figure className="lightbox-content"><Image unoptimized src={images[active].src} alt={images[active].alt} width={variant === "website" ? 1920 : 616} height={variant === "website" ? 1080 : 1280} priority /><figcaption><span>{images[active].alt}</span><span dir="ltr">{active + 1} / {images.length}</span></figcaption></figure>
      <button className="lightbox-nav lightbox-next" type="button" onClick={() => move(1)} aria-label={labels.next}>›</button>
    </div>, document.body)}
  </>;
}
