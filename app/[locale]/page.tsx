import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Portfolio } from "../../components/portfolio";
import en from "../../messages/en.json";
import ar from "../../messages/ar.json";

const messages = { en, ar };
type Locale = keyof typeof messages;

export function generateStaticParams() { return [{ locale: "en" }, { locale: "ar" }]; }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!(locale in messages)) return {};
  const m = messages[locale as Locale];
  return { title: m.seo.title, description: m.seo.description, alternates: { canonical: `/${locale}`, languages: { en: "/en", ar: "/ar" } }, openGraph: { title: m.seo.title, description: m.seo.description, locale: locale === "ar" ? "ar_JO" : "en_US" }, twitter: { title: m.seo.title, description: m.seo.description } };
}

export default async function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!(locale in messages)) notFound();
  return <Portfolio locale={locale as Locale} m={messages[locale as Locale]} />;
}
