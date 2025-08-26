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
        {/* Plausible */}
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

        {/* PostHog */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){
              function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){
              t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}var u=e;"undefined"!==
              typeof a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){
              var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=
              function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags reloadFeatureFlags".split(" ");
              for(n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1.2);
              posthog.init('phc_AqdCjyLV8H79u7HiARctDyahve6fYJM0tFsGMEpkNSW',{
                api_host:'https://us.i.posthog.com',
                capture_pageview:true,
                capture_pageleave:true
              });
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        {/* Fire an explicit pageview after hydration to ensure Safari records it */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try { window.posthog && window.posthog.capture('$pageview'); } catch(e){}
            `,
          }}
        />
      </body>
    </html>
  );
}
