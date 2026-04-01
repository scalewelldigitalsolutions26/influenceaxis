export type ServiceIconName =
  | "pen-tool"
  | "megaphone"
  | "users"
  | "sparkles"
  | "shield"
  | "search"
  | "clapperboard"
  | "layers-3";

export type Service = {
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  banner: string;
  icon: ServiceIconName;
  benefits: string[];
  process: string[];
  cta: string;
};

export const services: Service[] = [
  {
    slug: "content-creation",
    title: "Content Creation",
    description:
      "Develop branded content for campaigns, social channels, websites, and launch moments with a consistent visual and messaging system.",
    shortDescription:
      "Branded asset creation for campaigns, social, and ongoing publishing.",
    banner:
      "Create platform-ready content that keeps your brand active, consistent, and visually sharp.",
    icon: "pen-tool",
    benefits: [
      "Consistent content quality across every publishing channel",
      "Faster campaign rollout with better creative organization",
      "Assets aligned to brand voice, goals, and audience expectations"
    ],
    process: [
      "Understand your content needs, channels, and publishing priorities",
      "Build a visual and messaging direction for the content pipeline",
      "Create approved assets in batches for planned campaigns and ongoing use",
      "Refine future output using performance, audience response, and brand feedback"
    ],
    cta: "Need content that looks premium and stays consistent across every touchpoint?"
  },
  {
    slug: "targeted-digital-ads",
    title: "Targeted Digital Ads",
    description:
      "Plan and manage precision ad campaigns across digital platforms to reach high-intent audiences with stronger creative and conversion focus.",
    shortDescription:
      "Precision campaign setup and optimization across digital ad platforms.",
    banner:
      "Run focused digital ad campaigns that reach the right audience with clearer intent and stronger creative fit.",
    icon: "megaphone",
    benefits: [
      "Better audience targeting across paid social and search channels",
      "Ad creative and messaging shaped around conversion goals",
      "Clear visibility into budget efficiency and campaign performance"
    ],
    process: [
      "Define campaign objectives, audience segments, and budget boundaries",
      "Build ad structures, targeting logic, and creative combinations",
      "Launch and optimize campaigns using live performance data",
      "Report on results with actionable recommendations for the next cycle"
    ],
    cta: "Want ad campaigns that waste less budget and hit the right audience faster?"
  },
  {
    slug: "influencer-marketing",
    title: "Influencer Marketing",
    description:
      "Identify, brief, coordinate, and manage creator collaborations that grow trust, reach, and audience relevance for your brand.",
    shortDescription:
      "Creator partnerships designed for reach, trust, and brand fit.",
    banner:
      "Build influencer campaigns that feel authentic, well-managed, and aligned with the way your audience actually discovers products.",
    icon: "users",
    benefits: [
      "Creator partnerships matched to audience fit and brand tone",
      "Structured outreach, briefing, and approval workflows",
      "Stronger trust and reach through relevant creator voices"
    ],
    process: [
      "Identify creator profiles, audience overlap, and campaign goals",
      "Shortlist influencers and manage outreach, negotiations, and timelines",
      "Prepare briefs, approvals, and deliverable tracking for each collaboration",
      "Review performance and optimize future partnerships using campaign insights"
    ],
    cta: "Need influencer campaigns that feel intentional instead of random sponsorships?"
  },
  {
    slug: "meme-marketing",
    title: "Meme Marketing",
    description:
      "Use internet-native humor and reactive creative to help your brand participate in culture with speed, relevance, and restraint.",
    shortDescription:
      "Trend-aware meme content for relevance, reach, and shareability.",
    banner:
      "Create meme-led campaigns that feel current, culturally fluent, and native to fast-moving digital platforms.",
    icon: "sparkles",
    benefits: [
      "Higher shareability and audience interaction on social platforms",
      "A more culturally relevant brand voice for digital-native audiences",
      "Fast creative formats built for attention and recall"
    ],
    process: [
      "Define tone boundaries, risk limits, and audience humor patterns",
      "Translate brand voice into meme formats that feel natural",
      "Produce reactive and planned content batches for timely publishing",
      "Track what resonates and evolve the meme playbook continuously"
    ],
    cta: "Want your meme marketing to feel sharp, relevant, and brand-safe?"
  },
  {
    slug: "online-reputation-management",
    title: "Online Reputation Management",
    description:
      "Monitor, protect, and improve how your brand appears across reviews, search results, social conversations, and public feedback channels.",
    shortDescription:
      "Brand reputation monitoring, response workflows, and public trust management.",
    banner:
      "Strengthen how your brand is perceived online by improving visibility, response quality, and trust signals across digital channels.",
    icon: "shield",
    benefits: [
      "Better control over public brand perception online",
      "Faster and more consistent response to reviews or negative sentiment",
      "Improved trust signals across search, review, and social surfaces"
    ],
    process: [
      "Audit current public sentiment, reviews, and brand search presence",
      "Set response guidelines, escalation rules, and visibility priorities",
      "Manage reputation actions across reviews, listings, and public-facing channels",
      "Track sentiment shifts and improve weak trust signals over time"
    ],
    cta: "Need stronger control over how your brand is perceived online?"
  },
  {
    slug: "market-research-and-surveys",
    title: "Market Research and Surveys",
    description:
      "Collect audience insight through market analysis, customer feedback, and survey-led research that informs decisions with real data.",
    shortDescription:
      "Audience research, survey design, and insight reporting for better decisions.",
    banner:
      "Use structured research and surveys to understand audiences, validate assumptions, and guide smarter campaigns.",
    icon: "search",
    benefits: [
      "Clearer audience insight before investing in campaigns or positioning",
      "Better decision-making backed by structured feedback and research",
      "Useful findings that can shape offers, messaging, and channel strategy"
    ],
    process: [
      "Define research goals, target audiences, and key decision questions",
      "Design surveys or research frameworks that collect practical insight",
      "Gather and organize findings into patterns, themes, and opportunity areas",
      "Translate the data into recommendations your team can act on"
    ],
    cta: "Need clearer market insight before making your next growth move?"
  },
  {
    slug: "video-editing",
    title: "Video Editing",
    description:
      "Edit short-form and campaign-ready video content for ads, reels, explainers, testimonials, and branded digital storytelling.",
    shortDescription:
      "Edited video assets for ads, reels, campaigns, and branded storytelling.",
    banner:
      "Turn raw footage into polished video content designed for attention, clarity, and platform-specific performance.",
    icon: "clapperboard",
    benefits: [
      "Cleaner and more professional video output across channels",
      "Platform-specific edits tailored for ads, reels, and social publishing",
      "Faster turnaround for recurring branded video content"
    ],
    process: [
      "Review footage, objectives, and destination platform requirements",
      "Build an edit style with pacing, captions, and visual treatment",
      "Produce first cuts, revisions, and final exports for each use case",
      "Package deliverables in the right formats for distribution and reuse"
    ],
    cta: "Need video edits that look polished and perform well across platforms?"
  },
  {
    slug: "multiplatform-management",
    title: "Multiplatform Management",
    description:
      "Coordinate publishing, audience response, reporting, and workflow management across multiple digital platforms from one structured system.",
    shortDescription:
      "Cross-platform publishing, moderation, and reporting from one operating flow.",
    banner:
      "Manage multiple digital platforms with one organized workflow for publishing, engagement, and reporting.",
    icon: "layers-3",
    benefits: [
      "A cleaner operating system across multiple brand channels",
      "More consistent publishing and moderation standards",
      "Simpler reporting across platforms without fragmented workflows"
    ],
    process: [
      "Define platform roles, content flow, and management responsibilities",
      "Set publishing calendars, asset pipelines, and response workflows",
      "Manage posts, moderation, and day-to-day coordination across channels",
      "Review cross-platform performance and improve the operating system"
    ],
    cta: "Need one reliable system to manage multiple platforms without the chaos?"
  }
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
