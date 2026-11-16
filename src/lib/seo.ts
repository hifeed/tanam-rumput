import type { Metadata } from "next";
import { site } from "@/content/site";

const DEFAULT_OG_IMAGE = {
  url: "/images/logo-bg.jpg",
  width: 1024,
  height: 1024,
  alt: "Carbon Bank",
};

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
};

/** Per-page metadata: unique title/description, canonical on https://carbonbank.id, OG/Twitter. */
export function pageMetadata({ title, description, path, absoluteTitle }: PageMetaInput): Metadata {
  const url = `${site.url}${path === "/" ? "" : path}`;
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: site.name,
      title: fullTitle,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [DEFAULT_OG_IMAGE.url],
    },
  };
}
