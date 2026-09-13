export default function sitemap() {
  return [
    {
      url: "https://www.hrumstudio.online",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.hrumstudio.online/products/shotfactory",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}