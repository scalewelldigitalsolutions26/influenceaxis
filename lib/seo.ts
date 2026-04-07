import type { Metadata } from "next";

import type { BlogPost } from "@/lib/blog";
import type { Service } from "@/lib/services";
import { siteConfig } from "@/lib/site";

type MetadataOptions = {
  title: string;
  description: string;
  path?: string;
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function buildMetadata({
  title,
  description,
  path = "/"
}: MetadataOptions): Metadata {
  const url = absoluteUrl(path);
  const image = absoluteUrl(siteConfig.ogImage);
  const resolvedTitle =
    title === siteConfig.name || title.includes(siteConfig.name)
      ? title
      : `${title} | ${siteConfig.name}`;

  return {
    title: resolvedTitle,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title: resolvedTitle,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: image,
          width: 6250,
          height: 6250,
          alt: `${siteConfig.name} preview image`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
      images: [image]
    }
  };
}

export function createOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl("/influence-axis-logo.png"),
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: "Mumbai",
      addressCountry: "IN"
    },
    sameAs: Object.values(siteConfig.social)
  };
}

export function createWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description
  };
}

export function createServiceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: `${service.title} by ${siteConfig.name}`,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url
    },
    areaServed: "Worldwide",
    url: absoluteUrl(`/services/${service.slug}`)
  };
}

export function createArticleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: absoluteUrl(post.coverImage),
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Organization",
      name: siteConfig.name
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/influence-axis-logo.png")
      }
    },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`)
  };
}
