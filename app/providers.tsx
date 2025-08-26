import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Commercial Appraisers Omaha",
  description: "Our site is launching soon. Please check back!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Plausible only */}
        <Script
          strategy="afterInteractive"
          data-domain="commercialappraisersomaha.com"
          src="https://plausible.io/js/script.outbound-links.tagged-events.js"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
"use client";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { useEffect } from "react";

if (typeof window !== "undefined") {
  posthog.init("phc_AqdCjyLV8H79u7HiARctDyahve6fYJM0tFsGMEpkNSW", {
    api_host: "https://us.i.posthog.com",
    capture_pageview: true,
    capture_pageleave: true,
  });
}

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    try {
      posthog.capture("$pageview");
    } catch {}
  }, []);

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}