import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import {Bai_600} from "@/components/fontAids/Fonts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NIHUB",
  description: "The HUB of NI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      
      <body className="min-h-full flex-col ">
      <div className=" md:block hidden ">
        <Navbar />
        {children}
      </div>

        <div className="flex-col md:hidden flex items-center justify-center min-h-screen">
          <Bai_600 className={'text-center text-2xl base-grey-text-200'} text={'Mobile View Under Construction, Please View On Desktop'} />
        </div>
      </body>


    </html>
  );
}
