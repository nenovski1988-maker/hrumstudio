import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.hrumstudio.online"),

  title: {
    default: "HRUM STUDIO — Software Developer & Product Builder",
    template: "%s — HRUM STUDIO",
  },

  description:
    "Independent software developer and product builder based in Bulgaria. I build custom software, websites and digital products from idea to working product.",

  keywords: [
    "software developer",
    "software development",
    "custom software",
    "web developer",
    "web development",
    "digital products",
    "SaaS development",
    "Bulgaria",
    "Gabrovo",
  ],

  authors: [{ name: "HRUM STUDIO" }],
  creator: "HRUM STUDIO",
  publisher: "HRUM STUDIO",

  alternates: {
    canonical: "https://www.hrumstudio.online",
  },

  openGraph: {
    title: "HRUM STUDIO — Software Developer & Product Builder",
    description:
      "I build custom software, websites and digital products from idea to working product.",
    url: "https://www.hrumstudio.online",
    siteName: "HRUM STUDIO",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "HRUM STUDIO — Software Developer & Product Builder",
    description:
      "I build custom software, websites and digital products from idea to working product.",
  },

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: "GE4v3c7Ci7iyU6v1UYD-crAhTwJ3LCG-f9fJEL-OX7g",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}