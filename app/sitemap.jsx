import { site } from "./data/content";

export default function sitemap() {
  const routes = ["", "/about", "/services", "/industries", "/engagement", "/careers", "/contact"];
  return routes.map((r) => ({
    url: `${site.url}${r}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.8,
  }));
}
