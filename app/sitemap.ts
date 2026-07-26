import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/projects";
import { siteUrl } from "./layout";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/work", "/about", "/contact"];
  return [
    ...routes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date("2026-07-26"),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...caseStudies.map((project) => ({
      url: `${siteUrl}/work/${project.slug}`,
      lastModified: new Date("2026-07-26"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];
}
