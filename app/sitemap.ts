import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://the-koi.my.id",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}