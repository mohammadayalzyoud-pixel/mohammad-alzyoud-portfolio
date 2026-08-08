/* eslint-disable @typescript-eslint/no-explicit-any */
import { ThemeToggle, MobileNav, LanguageSwitcher } from "./client-controls";

export function Navbar({ locale, m }: { locale: "en" | "ar"; m: any }) {
  const links = ["home", "about", "projects", "skills", "services", "contact"];
  const navLinks = <>{links.map((id) => <a key={id} href={`#${id}`}>{m.nav[id]}</a>)}</>;
  return <header className="site-header"><div className="container nav-wrap"><a className="monogram" href="#home" aria-label={m.nav.home}>MA<span>.</span></a><nav className="desktop-nav" aria-label={m.nav.label}>{navLinks}</nav><div className="nav-actions"><LanguageSwitcher locale={locale} /><ThemeToggle label={m.actions.theme} /><MobileNav label={m.actions.menu}><nav aria-label={m.nav.label}>{navLinks}</nav></MobileNav></div></div></header>;
}
