// Builds the <head> tags (title, description, link-preview card, JSON-LD) from
// profile.js at build time, so search results and shared links never drift from the page.
import { links, person } from "./src/data/profile.js";

const meta = (attrs) => ({ tag: "meta", attrs, injectTo: "head" });

export function seoPlugin(siteUrl) {
  const title = `${person.name} – ${person.headline}`;
  const description = `${person.name}, ${person.headline}. ${person.tagline}`;
  const image = `${siteUrl}og.png`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.headline,
    description: person.tagline,
    url: siteUrl,
    image,
    sameAs: links.map((link) => link.href),
  };

  return {
    name: "seo-tags",
    transformIndexHtml: () => [
      { tag: "title", children: title, injectTo: "head" },
      meta({ name: "description", content: description }),
      { tag: "link", attrs: { rel: "canonical", href: siteUrl }, injectTo: "head" },
      meta({ property: "og:type", content: "profile" }),
      meta({ property: "og:title", content: title }),
      meta({ property: "og:description", content: description }),
      meta({ property: "og:url", content: siteUrl }),
      meta({ property: "og:image", content: image }),
      meta({ name: "twitter:card", content: "summary_large_image" }),
      { tag: "script", attrs: { type: "application/ld+json" }, children: JSON.stringify(jsonLd), injectTo: "head" },
    ],
  };
}
