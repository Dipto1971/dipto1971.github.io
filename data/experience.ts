export interface Highlight {
  label: string;
  text: string;
}

export interface Role {
  id: number;
  company: string;
  url?: string;
  role: string;
  type: string;
  period: string;
  summary: string;
  highlights: Highlight[];
  stack: string[];
}

const experience: Role[] = [
  {
    id: 1,
    company: "RN Jobforce",
    url: "https://rnjobforce.co.uk",
    role: "Lead Full Stack Engineer",
    type: "Remote",
    period: "2024 - Present",
    summary:
      "Technical lead for an AI-powered job search platform, responsible for the codebase, the production infrastructure, and the development team.",
    highlights: [
      {
        label: "System Architecture",
        text: "Architected the core platform from the ground up. Built a robust backend using Django and Python. Paired this with a highly optimized Next.js frontend.",
      },
      {
        label: "Feature Engineering",
        text: "Engineered an automated RSS job-fetching system utilizing Celery and Redis. Successfully integrated multiple external data sources including OpenAI and the Companies House API.",
      },
      {
        label: "Cloud & Infrastructure",
        text: "Deployed the entire RN Jobforce cloud infrastructure. Transitioned the platform to a live production environment using Terraform, AWS EC2, and NGINX.",
      },
      {
        label: "Security & Workflows",
        text: "Established secure remote developer workspaces and strict deployment pipelines. Hardened server infrastructure by directly resolving penetration testing vulnerabilities.",
      },
      {
        label: "Engineering Leadership",
        text: "Directed a team of developers to ensure long-term maintainability. Guided the team through complex query optimizations and strict code reviews.",
      },
      {
        label: "Platform Growth",
        text: "Managed the platform's technical SEO. Optimized server responses and rendering strategies to directly increase search engine visibility and user traffic.",
      },
    ],
    stack: [
      "Django",
      "Python",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Terraform",
      "AWS EC2",
      "NGINX",
      "Cloudflare",
      "Docker",
    ],
  },
  {
    id: 2,
    company: "Progress IT Solutions",
    role: "Software Engineer",
    type: "On-site",
    period: "May 2024 - August 2024",
    summary:
      "Built C# and .NET desktop applications for enterprise clients, including an Australian cybersecurity firm.",
    highlights: [
      {
        label: "Cybersecurity Integration",
        text: "Engineered a Windows event integration collector for an Australian cybersecurity firm. Built the desktop application using C# and WPF. Securely parsed and routed critical system logs for advanced threat analysis.",
      },
      {
        label: "Advanced Media Processing",
        text: "Developed a high-performance video editing console application using .NET Core 3.1. Integrated FFmpeg and OpenCvSharp to execute complex batch media edits. Implemented features including precise cropping, temporal shifting, and custom visual effects.",
      },
      {
        label: "Performance Optimization",
        text: "Engineered the media application to process multiple high-resolution videos simultaneously. Managed complex background processes and standard output streams. Ensured highly efficient memory management during intensive frame decoding and encoding.",
      },
    ],
    stack: [".NET Core 3.1", "C#", "WPF", "WinForms", "FFmpeg", "OpenCvSharp"],
  },
  {
    id: 3,
    company: "Pryntmart",
    url: "https://pryntmart.com",
    role: "Full Stack Developer",
    type: "Remote",
    period: "2025 - Present",
    summary:
      "Built a custom printing platform end to end, from the browser-based design editor to the deployment pipeline.",
    highlights: [
      {
        label: "Product Engineering",
        text: "Built a browser-based design editor with Fabric.js for creating print-ready artwork, alongside product configuration, cart, and checkout flows.",
      },
      {
        label: "Integrations",
        text: "Integrated Stripe for payments and Shippo for fulfilment, with an admin panel for order and catalogue management.",
      },
      {
        label: "Deployment",
        text: "Deployed on a Hetzner VPS using Docker Compose, NGINX, and SSL termination.",
      },
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Go",
      "PostgreSQL",
      "Redis",
      "Fabric.js",
      "Stripe",
      "Docker",
    ],
  },
];

export default experience;
