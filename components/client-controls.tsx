"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function LocaleDocument({ locale }: { locale: "en" | "ar" }) {
  useEffect(() => { document.documentElement.lang = locale; document.documentElement.dir = locale === "ar" ? "rtl" : "ltr"; }, [locale]);
  return null;
}

export function LanguageSwitcher({ locale }: { locale: "en" | "ar" }) {
  const router = useRouter();
  const other = locale === "en" ? "ar" : "en";
  return <a className="language" href={`/${other}`} onClick={(event) => { event.preventDefault(); router.push(`/${other}${window.location.hash}`); }}>{locale === "en" ? "العربية" : "EN"}</a>;
}

export function ThemeToggle({ label }: { label: string }) {
  const [dark, setDark] = useState(() => typeof document !== "undefined" && document.documentElement.dataset.theme === "dark");
  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    localStorage.setItem("theme", next ? "dark" : "light");
  }
  return <button className="icon-button" onClick={toggle} aria-label={label} title={label}><span aria-hidden="true">{dark ? "☀" : "☾"}</span></button>;
}

export function MobileNav({ label, children }: { label: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return <><button className="menu-button" aria-label={label} aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /></button><div className={`mobile-panel ${open ? "open" : ""}`} onClick={() => setOpen(false)}>{children}</div></>;
}
