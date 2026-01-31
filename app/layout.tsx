import type { Metadata } from "next";
import { Schibsted_Grotesk,Martian_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import LightRays from "@/Components/Shared/LightRays";
import Navbar from "@/Components/Sections/Navbar";

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevEvent",
  description: "The Hub For Every Event You Mustn`t Mees.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${schibstedGrotesk.variable} ${martianMono.variable} antialiased max-w-full overflow-x-hidden min-w-full`}
      >
      <Navbar />
     <div className={'absolute top-0 z-0 '}>
       <LightRays
         raysOrigin="top-center-offset"
         raysColor="#5dfeca"
         raysSpeed={1}
         lightSpread={1}
         rayLength={1.2}
         followMouse={true}
         mouseInfluence={0.05}
         noiseAmount={0.05}
         distortion={0.05}
     />
     </div>
      <main className={'relative'}>
        {children}
      </main>
      </body>
    </html>
  );
}
