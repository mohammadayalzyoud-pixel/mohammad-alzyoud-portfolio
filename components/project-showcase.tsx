/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { TechBadge } from "./ui";

export function ProjectShowcase({ project, content, index }: { project: any; content: any; index: number }) {
  return <article className={`project-showcase reveal ${index % 2 ? "reverse" : ""}`}>
    <div className="project-visual"><div className="project-index">0{index + 1}</div><Image src={project.image} alt={content.imageAlt} width={1200} height={820} sizes="(max-width: 800px) 100vw, 56vw" /></div>
    <div className="project-copy"><div className="project-meta"><span>{content.type}</span><span className="status"><i />{content.status}</span></div><h3>{content.title}</h3><p className="project-description">{content.description}</p><div className="purpose"><strong>{content.purposeLabel}</strong><p>{content.purpose}</p></div><h4>{content.featuresLabel}</h4><ul>{content.features.map((f: string) => <li key={f}>{f}</li>)}</ul><div className="tech-list">{project.technologies.map((t: string) => <TechBadge key={t}>{t}</TechBadge>)}</div><span className="coming-soon">{content.comingSoon}</span></div>
  </article>;
}
