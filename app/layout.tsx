import type { Metadata } from "next";
import type { ReactNode } from "react";

import Footer from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import { QuoteModalProvider } from "@/components/QuoteModalProvider";
import {
  absoluteUrl,
  createOrganizationSchema,
  createWebsiteSchema
} from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Premium Digital Growth Agency`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        width: 3235,
        height: 1212,
        alt: `${siteConfig.name} preview image`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [absoluteUrl(siteConfig.ogImage)]
  },
  icons: {
    icon: "/influence-axis-logo.png",
    shortcut: "/influence-axis-logo.png",
    apple: "/influence-axis-logo.png"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-mist text-ink antialiased">
        <JsonLd data={createOrganizationSchema()} />
        <JsonLd data={createWebsiteSchema()} />
        <QuoteModalProvider>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </QuoteModalProvider>
      </body>
    </html>
  );
}
