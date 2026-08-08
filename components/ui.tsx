export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`container ${className}`}>{children}</div>;
}

export function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return <div className="section-heading reveal"><span>{eyebrow}</span><h2>{title}</h2>{intro && <p>{intro}</p>}</div>;
}

export function TechBadge({ children }: { children: React.ReactNode }) { return <span className="tech-badge">{children}</span>; }

export function Arrow({ rtl = false }: { rtl?: boolean }) { return <span aria-hidden="true">{rtl ? "←" : "→"}</span>; }
