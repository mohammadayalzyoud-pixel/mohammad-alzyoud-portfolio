export const projects = [
  {
    slug: "nexus-pos",
    technologies: ["Flutter", "Dart", "Riverpod", "Drift", "SQLite", "Windows Desktop"],
    image: "/projects/nexus-pos/dashboard.png",
    heroImage: { src: "/projects/nexus-pos/dashboard.png", altKey: "dashboard" },
    gallery: [
      { src: "/projects/nexus-pos/pos.png", altKey: "pos" },
      { src: "/projects/nexus-pos/products.png", altKey: "products" },
      { src: "/projects/nexus-pos/inventory.png", altKey: "inventory" },
      { src: "/projects/nexus-pos/reports.png", altKey: "reports" },
      { src: "/projects/nexus-pos/settings.png", altKey: "settings" }
    ],
    links: { store: null, live: null, github: null }
  },
  {
    slug: "delni-app",
    technologies: ["Flutter", "Dart", "Firebase", "Riverpod"],
    image: "/projects/delni-app/home-screen.jpg",
    heroImage: { src: "/projects/delni-app/home-screen.jpg", altKey: "home" },
    gallery: [
      { src: "/projects/delni-app/job-details-1.jpg", altKey: "jobDetails" },
      { src: "/projects/delni-app/job-details-2.jpg", altKey: "jobDetailsMore" },
      { src: "/projects/delni-app/saved-jobs.jpg", altKey: "savedJobs" },
      { src: "/projects/delni-app/applied-jobs.jpg", altKey: "appliedJobs" },
      { src: "/projects/delni-app/login.jpg", altKey: "login" },
      { src: "/projects/delni-app/notifications.jpg", altKey: "notifications" },
      { src: "/projects/delni-app/account-screen.jpg", altKey: "account" },
      { src: "/projects/delni-app/splash-screen.jpg", altKey: "splash" }
    ],
    distribution: { platform: "Uptodown", url: null },
    links: { store: null, live: null, github: null }
  },
  {
    slug: "delni-web",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    image: "/projects/delni-website/home-hero.png",
    heroImage: { src: "/projects/delni-website/home-hero.png" },
    gallery: [
      { src: "/projects/delni-website/about-page.png" },
      { src: "/projects/delni-website/download-page.png" },
      { src: "/projects/delni-website/download-gallery.png" },
      { src: "/projects/delni-website/faq-page.png" },
      { src: "/projects/delni-website/contact-page.png" }
    ],
    links: { store: null, live: null, github: null }
  },
  {
    slug: "almondas",
    technologies: ["Flutter", "Dart", "Riverpod", "SharedPreferences"],
    image: "/projects/almondas/home-screen.jpg",
    heroImage: { src: "/projects/almondas/home-screen.jpg", altKey: "home" },
    gallery: [
      { src: "/projects/almondas/categories-top.jpg", altKey: "categoriesTop" },
      { src: "/projects/almondas/categories-bottom.jpg", altKey: "categoriesBottom" },
      { src: "/projects/almondas/players-setup.jpg", altKey: "playersSetup" },
      { src: "/projects/almondas/side-menu.jpg", altKey: "sideMenu" },
      { src: "/projects/almondas/about-game.jpg", altKey: "about" }
    ],
    version: "1.0.0",
    developer: "Nexus Team",
    links: { store: null, live: null, github: null }
  },
] as const;
