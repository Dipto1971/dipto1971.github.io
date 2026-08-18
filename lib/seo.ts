import type { Metadata } from "next";
import profile from "@/data/profile";

interface PageSeo {
  title: string;
  description: string;
  path: string;
}

const ogImage = {
  url: "/og.jpg",
  width: 1200,
  height: 630,
  alt: `${profile.name} - ${profile.title}`,
};

/**
 * Nested metadata objects (openGraph, twitter) replace the parent's rather
 * than merging, so every page builds its social tags through this helper.
 */
export const pageMetadata = ({ title, description, path }: PageSeo): Metadata => {
  const fullTitle = `${title} - ${profile.name}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "profile",
      siteName: profile.name,
      locale: "en_US",
      title: fullTitle,
      description,
      url: path,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/og.jpg"],
    },
  };
};
