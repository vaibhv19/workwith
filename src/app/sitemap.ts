import { MetadataRoute } from "next";
import { CASE_STUDIES } from "@/data/caseStudies";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mywork.vaibhv19.dev";
  const currentDate = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/case-study`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/start-conversation`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const caseStudyRoutes: MetadataRoute.Sitemap = CASE_STUDIES.map((study) => ({
    url: `${baseUrl}/case-study/${study.slug}`,
    lastModified: new Date(study.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...caseStudyRoutes];
}
