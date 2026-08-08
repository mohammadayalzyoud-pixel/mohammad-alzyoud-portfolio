/* eslint-disable @typescript-eslint/no-explicit-any */
import { TechBadge } from "./ui";
import { ProjectImageLightbox } from "./project-image-lightbox";

export function ProjectShowcase({ project, content, index, viewer }: { project: any; content: any; index: number; viewer: any }) {
  const images = project.slug === "delni-web"
    ? [project.heroImage, ...project.gallery].map((image: any) => ({ src: image.src, alt: content.imageAlt }))
    : [project.heroImage, ...project.gallery].map((image: any) => ({ src: image.src, alt: content.screenshotAlts[image.altKey] }));
  return <article className={`project-showcase reveal ${index % 2 ? "reverse" : ""}`}>
    <ProjectImageLightbox images={images} variant={project.slug === "delni-app" ? "delni" : project.slug === "delni-web" ? "website" : "almondas"} index={index} galleryLabel={content.galleryLabel} labels={viewer} />
    <div className="project-copy"><div className="project-meta"><span>{content.type}</span><span className="status"><i />{content.status}</span></div><h3>{content.title}</h3><p className="project-description">{content.description}</p><div className="purpose"><strong>{content.purposeLabel}</strong><p>{content.purpose}</p></div><h4>{content.featuresLabel}</h4><ul>{content.features.map((f: string) => <li key={f}>{f}</li>)}</ul><div className="tech-list">{project.technologies.map((t: string) => <TechBadge key={t}>{t}</TechBadge>)}</div>{project.distribution?.url ? <a className="button secondary project-download" href={project.distribution.url} target="_blank" rel="noopener noreferrer">{content.downloadLabel}</a> : <span className="coming-soon">{content.comingSoon}</span>}</div>
  </article>;
}
