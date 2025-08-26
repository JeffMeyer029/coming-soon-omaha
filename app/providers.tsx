"use client";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { useEffect } from "react";

const apiKey = process.env.NEXT_PUBLIC_POSTHOG_KEY || "phc_AqdCjyLV8H79u7HiARctDyahve6fYJM0tFsGMEpkNSW";

if (typeof window !== "undefined" && !(posthog as any).__initialized) {
  posthog.init(apiKey, {
    api_host: "https://us.i.posthog.com",
    capture_pageview: true,
    capture_pageleave: true,
  });
  (posthog as any).__initialized = true;   // mark so we don't double-init
  (window as any).posthog = posthog;       // expose for console testing
}

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    try { posthog.capture("$pageview"); } catch {}
  }, []);

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}