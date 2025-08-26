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
    posthog.capture("$pageview");
  }, []);

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}