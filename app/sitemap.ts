import type { MetadataRoute } from "next";
import { site } from "./data/site";
import { nav } from "./data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = [...nav.map((n) => n.href), "/book"];

  return routes.map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
