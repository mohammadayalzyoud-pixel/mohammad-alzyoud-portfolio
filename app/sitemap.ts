import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { return ["en", "ar"].map((l) => ({ url: `/${l}`, changeFrequency: "monthly", priority: 1, alternates: { languages: { en: "/en", ar: "/ar" } } })); }
