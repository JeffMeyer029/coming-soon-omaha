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
  <script
    defer
    data-domain="commercialappraisersomaha.com"
    src="https://plausible.io/js/script.outbound-links.tagged-events.js"
  ></script>
  <script
    dangerouslySetInnerHTML={{
      __html: `
        window.plausible = window.plausible || function() {
          (window.plausible.q = window.plausible.q || []).push(arguments)
        }
      `,
    }}
  />
</head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
