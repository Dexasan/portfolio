import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { projects } from "@/lib/collection";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/work",
    "/about",
    "/contact",
    "/direction",
    "/thoughts",
    ...projects.map((project) => `/work/${project.slug}`),
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date("2026-11-02"),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : route === "/work" ? 0.9 : 0.7,
  }));
}
