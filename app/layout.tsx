import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohammad Alzyoud | Software Developer",
  description: "Mohammad Alzyoud builds practical Flutter mobile apps and modern Next.js web experiences in Jordan.",
  icons: { icon: "/favicon.svg" },
  openGraph: { type: "website", images: ["/og.png"] },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.dataset.theme=d?'dark':'light'}catch(e){}})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body>{children}</body>
    </html>
  );
}
