import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    description: "15 lat doświadczenia: od systemów e-commerce po zaawansowaną analitykę danych. Zobacz moje projekty.",
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
    <html lang="pl" className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}>
      <body className="min-h-screen text-foreground selection:bg-primary/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
