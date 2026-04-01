import type { MetadataRoute } from "next";

import { blogPosts } from "@/lib/blog";
import { absoluteUrl } from "@/lib/seo";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/blog",
    "/contact",
    "/careers",
    "/privacy-policy"
  ].map((path) => ({
    url: absoluteUrl(path || "/"),
    lastModified: new Date(),
    changeFrequency: (path === "" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: path === "" ? 1 : 0.7
  }));

  const serviceRoutes = services.map((service) => ({
    url: absoluteUrl(`/services/${service.slug}`),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
