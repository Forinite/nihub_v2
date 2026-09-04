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
  title: 'NIHUB',
  description: 'NIHUB — the Nigeria Innovation Hub — is the technology incubator of the Federal University of Technology, Minna. Since our founding, we have served as the intersection of academia, entrepreneurship, and cutting-edge technology.',

  openGraph: {
    title: 'NIHUB',
    description: 'NIHUB — the Nigeria Innovation Hub — is the technology incubator of the Federal University of Technology, Minna. Since our founding, we have served as the intersection of academia, entrepreneurship, and cutting-edge technology.',
    url: 'https://www.nihub.org.ng',
    type: 'website',
    images: [ 
      {
        url: 'og-image.png',
        alt: 'NIHUB - Nigeria Innovation Hub',
        width: 1200,
        height: 630,
      }
    ]
    

  }
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