import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://infinexhub.com",
      lastModified: new Date(),
    },
    {
      url: "https://infinexhub.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://infinexhub.com/services",
      lastModified: new Date(),
    },
    {
      url: "https://infinexhub.com/portfolio",
      lastModified: new Date(),
    },
    {
      url: "https://infinexhub.com/contact",
      lastModified: new Date(),
    },
  ];
}