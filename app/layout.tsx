import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Separate viewport export for Next.js 14+
export const viewport: Viewport = {
  themeColor: "#2B1043", // Your brand purple
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  // 1. Metadata Base: Change this to your actual production domain
  metadataBase: new URL("https://nihub.org"), 

  // 2. Title Template: Sub-pages will look like "About Us | NIHUB"
  title: {
    default: "NIHUB | Nigeria Innovation Hub",
    template: "%s | NIHUB",
  },
  
  description: "NIHUB — the Nigeria Innovation Hub — is the technology incubator of FUTMinna, empowering students and entrepreneurs to turn bold ideas into scalable solutions.",
  
  keywords: ["NIHUB", "Nigeria Innovation Hub", "FUTMinna", "Tech Incubator Nigeria", "Entrepreneurship", "Innovation Hub Minna", "Student Startups"],
  authors: [{ name: "NIHUB Team" }],
  creator: "NIHUB",
  publisher: "Federal University of Technology, Minna",

  // 3. Open Graph (Facebook, LinkedIn, Discord)
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://nihub.org",
    siteName: "NIHUB",
    title: "NIHUB | The hub where ideas become impact",
    description: "Technology incubator of the Federal University of Technology, Minna. Bridging academia and entrepreneurship.",
    images: [
      {
        url: "/opengraph-image.png", // Point to your static image in /app or /public
        width: 1200,
        height: 630,
        alt: "NIHUB - Nigeria Innovation Hub",
      },
    ],
  },

  // 4. Twitter (X)
  twitter: {
    card: "summary_large_image",
    title: "NIHUB | Nigeria Innovation Hub",
    description: "The intersection of academia, entrepreneurship, and cutting-edge technology at FUTMinna.",
    // site: "@your_twitter_handle", 
    // creator: "@your_twitter_handle",
    images: ["/opengraph-image.PNG"], 
  },

  // 5. Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // 6. Icons (Favicon)
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased max-w-screen overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col">
        {/* Simplified structure to prevent unnecessary div nesting */}
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}