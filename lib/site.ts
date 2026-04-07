export const siteConfig = {
  name: "Influence Axis",
  shortName: "Influence",
  description:
    "Influence Axis is a modern growth agency helping ambitious companies scale through branding, performance, content, and web experiences.",
  url: "https://influenceaxis.com",
  ogImage: "/influence-axis-logo.png",
  email: "influenceaxis@influenceaxis.in",
  phone: "+91 98765 43210",
  location: "Mumbai, India",
  address: "Influence Axis House, BKC, Mumbai 400051",
  social: {
    instagram: "https://www.instagram.com/influenceaxis1/",
    x: "https://x.com/InfluenceAxis",
    linkedin: "https://www.linkedin.com/in/influence-axis-6b4522401/",
    youtube: "https://www.youtube.com/channel/UC2G2v7S8BMoovsbDbFwGaSg"
  }
} as const;

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" }
];

export const companyStats = [
  { label: "Brands launched", value: "120+" },
  { label: "Average ROI uplift", value: "3.8x" },
  { label: "Markets activated", value: "14" }
];

export const testimonials = [
  {
    name: "Rhea Kapoor",
    title: "CMO, Nova Commerce",
    quote:
      "Influence Axis brought clarity to our positioning and discipline to our paid growth. The team feels like an extension of our leadership bench."
  },
  {
    name: "Daniel Mercer",
    title: "Founder, Flux Systems",
    quote:
      "From brand language to web execution, every touchpoint felt elevated. We launched faster and converted better than our previous agency stack."
  },
  {
    name: "Aman Verma",
    title: "VP Growth, Cedar Health",
    quote:
      "Their mix of performance rigor and creative instinct gave us a modern demand engine instead of disconnected campaigns."
  },
  {
    name: "Sophia Chen",
    title: "Head of Marketing, Lattice Works",
    quote:
      "The work was clean, strategic, and deeply measurable. Stakeholders noticed the difference immediately."
  }
];

export const valuePillars = [
  {
    title: "Strategy before noise",
    description:
      "We align positioning, channels, and creative direction before we spend a rupee on execution."
  },
  {
    title: "Creative with accountability",
    description:
      "Every concept is designed to move a metric, not just fill a calendar."
  },
  {
    title: "Systems that scale",
    description:
      "We build repeatable frameworks for acquisition, brand consistency, and content velocity."
  }
];

export const careersBenefits = [
  "Hybrid work rhythm with flexible deep-focus days",
  "Learning stipend for courses, conferences, and certifications",
  "Quarterly strategy off-sites with the leadership team",
  "Performance bonuses tied to measurable client outcomes"
];

export const jobOpenings = [
  {
    title: "Senior Brand Strategist",
    type: "Full-time",
    location: "Mumbai / Hybrid",
    summary:
      "Lead positioning work, messaging systems, and executive workshops for B2B and growth-stage brands."
  },
  {
    title: "Performance Marketing Manager",
    type: "Full-time",
    location: "Remote",
    summary:
      "Own paid social and search across planning, experimentation, attribution, and reporting."
  },
  {
    title: "Content Producer",
    type: "Contract",
    location: "Remote",
    summary:
      "Turn strategy into crisp video, social, and editorial assets with strong taste and execution speed."
  }
];

export const privacySections = [
  {
    title: "Information We Collect",
    body:
      "We collect information you submit through our quote or contact forms, including your name, email address, selected service, budget, and project details."
  },
  {
    title: "How We Use Information",
    body:
      "We use submitted information to respond to inquiries, prepare project proposals, improve our website experience, and communicate relevant service updates."
  },
  {
    title: "Data Retention",
    body:
      "We retain business inquiry data only for as long as needed to manage conversations, fulfil legal obligations, and improve service delivery."
  },
  {
    title: "Third-Party Services",
    body:
      "Future form processing, analytics, and CRM tools may store limited data on our behalf. We only work with vendors that meet modern privacy and security expectations."
  },
  {
    title: "Your Rights",
    body:
      "You may request access, correction, or deletion of your submitted data by contacting us at influenceaxis@influenceaxis.in."
  }
];
