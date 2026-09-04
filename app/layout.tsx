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

export const metadata :Metadata ={
  title: 'NIHUB | FUTMinna - Nigeria Innovation Hub | FUTMinna',
  description: 'NIHUB is the technology incubator of the Federal University of Technology, Minna — empowering students, entrepreneurs, and innovators to build the future. ',

  openGraph: {
    title: 'NIHUB | FUTMinna - Nigeria Innovation Hub | FUTMinna',
    description: 'NIHUB is the technology incubator of the Federal University of Technology, Minna — empowering students, entrepreneurs, and innovators to build the future. ',
    url: 'https://nihub.futminna.edu.ng/',
    type: 'website',
    siteName: 'NIHUB FUTMinna',
    images: [ 
      {
        url: 'og-image.png',
        alt: 'NIHUB - Nigeria Innovation Hub',
        width: 1200,
        height: 630,
      }
    ]
  },



  alternates: {
    canonical: 'https://nihub.futminna.edu.ng/'
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

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