/* eslint-disable @typescript-eslint/no-explicit-any */
import { profile } from "../data/profile";
import { projects } from "../data/projects";
import { Navbar } from "./navbar";
import { ProjectShowcase } from "./project-showcase";
import { Arrow, Container, SectionHeading } from "./ui";
import { LocaleDocument } from "./client-controls";

export function Portfolio({ locale, m }: { locale: "en" | "ar"; m: any }) {
  const rtl = locale === "ar";
  return <div dir={rtl ? "rtl" : "ltr"} className={rtl ? "arabic" : "english"}><LocaleDocument locale={locale} />
    <Navbar locale={locale} m={m} />
    <main>
      <section id="home" className="hero"><Container><div className="hero-grid"><div className="hero-copy"><div className="availability"><i />{m.hero.availability}</div><p className="hero-kicker">{m.hero.student} · {m.profile.country}</p><h1>{m.profile.name}</h1><h2>{m.hero.title}</h2><p className="specialization">{m.hero.specialization}</p><p className="hero-intro">{m.hero.intro}</p><div className="hero-actions"><a className="button primary" href="#projects">{m.actions.projects}<Arrow rtl={rtl} /></a><a className="button secondary" href="#contact">{m.actions.contact}</a></div></div><div className="hero-art" aria-hidden="true"><div className="code-card"><div className="code-top"><span /><span /><span /></div><p><b>01</b> <span>const</span> developer = {'{'}</p><p><b>02</b> &nbsp;focus: <em>&quot;Flutter + Web&quot;</em>,</p><p><b>03</b> &nbsp;approach: <em>&quot;Practical&quot;</em>,</p><p><b>04</b> &nbsp;location: <em>&quot;Jordan&quot;</em></p><p><b>05</b> {'}'}</p></div><div className="floating-label">{m.hero.productLabel}</div></div></div><div className="hero-foot"><span>{m.hero.scroll}</span><div /></div></Container></section>

      <section id="about" className="section about"><Container><div className="about-grid"><SectionHeading eyebrow={m.about.eyebrow} title={m.about.title} /><div className="about-copy reveal"><p>{m.about.p1}</p><p>{m.about.p2}</p><div className="facts"><div><span>{m.about.based}</span><strong>{m.profile.country}</strong></div><div><span>{m.about.focus}</span><strong>{m.about.focusValue}</strong></div><div><span>{m.about.status}</span><strong>{m.hero.student}</strong></div></div></div></div></Container></section>

      <section id="projects" className="section projects"><Container><SectionHeading eyebrow={m.projects.eyebrow} title={m.projects.title} intro={m.projects.intro} />{projects.map((p, i) => <ProjectShowcase key={p.slug} project={p} content={m.projects.items[p.slug]} index={i} />)}</Container></section>

      <section id="skills" className="section skills"><Container><SectionHeading eyebrow={m.skills.eyebrow} title={m.skills.title} intro={m.skills.intro} /><div className="skill-grid">{Object.entries(m.skills.groups).map(([key, group]: any, i) => <div className="skill-group reveal" key={key}><span className="group-number">0{i + 1}</span><h3>{group.title}</h3><div>{group.items.map((x: string) => <span key={x}>{x}</span>)}</div></div>)}</div></Container></section>

      <section id="services" className="section services"><Container><SectionHeading eyebrow={m.services.eyebrow} title={m.services.title} intro={m.services.intro} /><div className="service-grid">{m.services.items.map((s: any, i: number) => <article className="service-card reveal" key={s.title}><span>0{i + 1}</span><h3>{s.title}</h3><p>{s.description}</p></article>)}</div></Container></section>

      <section className="section education"><Container><div className="education-card reveal"><div><span>{m.education.eyebrow}</span><h2>{m.education.degree}</h2><p>{m.education.university}</p><strong>{m.education.graduation}</strong></div><div className="languages"><h3>{m.education.languages}</h3>{m.education.spoken.map((x: string) => <p key={x}>{x}</p>)}</div></div></Container></section>

      <section id="contact" className="section contact"><Container><div className="contact-grid"><div><span className="eyebrow">{m.contact.eyebrow}</span><h2>{m.contact.title}</h2><p>{m.contact.intro}</p><a className="button light" href={`mailto:${profile.email}`}>{m.contact.emailCta}<Arrow rtl={rtl} /></a></div><div className="contact-links"><a href={`mailto:${profile.email}`}><span>{m.contact.email}</span><strong>{profile.email}</strong></a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><span>LinkedIn</span><strong>{m.contact.connect}<Arrow rtl={rtl} /></strong></a><div><span>{m.contact.location}</span><strong>{m.profile.country}</strong></div><a href={`tel:${profile.phone.replace(/\s/g, "")}`}><span>{m.contact.phone}</span><strong dir="ltr">{profile.phone}</strong></a></div></div></Container></section>
    </main>
    <footer><Container><div><a className="monogram" href="#home">MA<span>.</span></a><p>{m.footer.line}</p><span>{m.footer.rights}</span></div></Container></footer>
  </div>;
}
