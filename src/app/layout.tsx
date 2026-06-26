import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bartosz Wójtowicz | Frontend & Fullstack Developer",
  description: "Portfolio doświadczonego programisty Fullstack z zacięciem e-sportowym. Od LAMP po Next.js Edge Runtime.",
  keywords: ["Bartosz Wójtowicz", "Frontend Developer", "Fullstack Developer", "Next.js", "React", "Portfolio", "Programista", "TFT"],
  authors: [{ name: "Bartosz Wójtowicz" }],
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://bartoszwojtowicz.pl",
    title: "Bartosz Wójtowicz | Frontend & Fullstack Developer",
    description: "Wieloletnie doświadczenie: od systemów e-commerce po zaawansowaną analitykę danych. Zobacz moje projekty.",
    siteName: "Bartosz Wójtowicz Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bartosz Wójtowicz | Frontend & Fullstack Developer",
    description: "Gotowy na nowe wyzwania programistyczne. Zobacz moje nowoczesne portfolio.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="antialiased dark">
      <head>
        <link
          rel="preload"
          href="/fonts/geist-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="/fonts/geist-mono-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          fetchPriority="high"
        />
      </head>
      <body className="min-h-screen text-foreground selection:bg-primary/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
