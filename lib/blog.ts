export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  readTime: string;
  coverImage: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "building-a-brand-engine-for-growth",
    title: "Building a Brand Engine for Sustainable Growth",
    description:
      "Why premium positioning and operational consistency outperform short-term marketing spikes.",
    category: "Brand Strategy",
    publishedAt: "2026-03-12",
    readTime: "6 min read",
    coverImage: "/images/blog-growth-engine.svg",
    sections: [
      {
        heading: "Premium brands are systems, not campaigns",
        paragraphs: [
          "High-performing companies rarely rely on isolated launches. They build a connected operating system where messaging, design, acquisition, and web experience reinforce each other.",
          "When that system is clear, marketing becomes easier to scale because every asset is rooted in the same strategic logic."
        ]
      },
      {
        heading: "Consistency creates trust at speed",
        paragraphs: [
          "Buyers make fast judgments. When your site, ads, sales material, and social presence tell the same story, trust compounds faster and conversion friction drops.",
          "This is especially true for modern SaaS and service brands competing in crowded categories."
        ]
      },
      {
        heading: "Operational clarity beats endless reinvention",
        paragraphs: [
          "Teams that build reusable messaging frameworks, content pillars, and performance dashboards gain velocity without sacrificing quality.",
          "That is where a true brand engine starts to outperform ad-hoc marketing."
        ]
      }
    ]
  },
  {
    slug: "what-modern-content-teams-do-differently",
    title: "What Modern Content Teams Do Differently",
    description:
      "A practical look at the workflows, approvals, and creative standards behind standout content operations.",
    category: "Content",
    publishedAt: "2026-03-04",
    readTime: "5 min read",
    coverImage: "/images/blog-creative-loop.svg",
    sections: [
      {
        heading: "They build content around clear roles",
        paragraphs: [
          "Strong teams define what each channel is meant to achieve. That removes guesswork and helps content ladders up to business goals.",
          "Without this clarity, content calendars become busy but ineffective."
        ]
      },
      {
        heading: "They reduce approval drag",
        paragraphs: [
          "The best content systems create guardrails instead of bottlenecks. Tone frameworks, message libraries, and design patterns make approvals faster.",
          "Speed matters because timely content often wins more attention than perfect but delayed content."
        ]
      },
      {
        heading: "They connect insights back to strategy",
        paragraphs: [
          "Performance data should influence future briefs, not just reporting decks. The feedback loop between content and strategy is what makes output smarter over time."
        ]
      }
    ]
  },
  {
    slug: "the-new-playbook-for-performance-marketing",
    title: "The New Playbook for Performance Marketing",
    description:
      "How to combine creative testing, landing page quality, and channel discipline for stronger paid returns.",
    category: "Performance",
    publishedAt: "2026-02-22",
    readTime: "7 min read",
    coverImage: "/images/blog-brand-playbook.svg",
    sections: [
      {
        heading: "Creative is now a media lever",
        paragraphs: [
          "Paid media efficiency is shaped as much by creative relevance as it is by bidding strategy. Teams that test messaging angles consistently outperform static campaign structures.",
          "Creative should be treated as part of the performance engine, not an afterthought."
        ]
      },
      {
        heading: "Landing pages deserve equal attention",
        paragraphs: [
          "Even strong ads underperform when the destination feels generic or slow. Messaging continuity and page clarity have a direct effect on CAC and conversion rate.",
          "Modern performance teams optimize the full click-to-conversion journey."
        ]
      },
      {
        heading: "Measurement needs executive readability",
        paragraphs: [
          "Reporting should help leadership make decisions quickly. Clear KPIs, testing summaries, and budget implications keep paid growth accountable and scalable."
        ]
      }
    ]
  }
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
