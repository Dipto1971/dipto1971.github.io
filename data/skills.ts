export interface SkillGroup {
  id: number;
  title: string;
  items: string[];
}

const skills: SkillGroup[] = [
  {
    id: 1,
    title: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Go", "C#", "C / C++", "SQL"],
  },
  {
    id: 2,
    title: "Backend",
    items: [
      "Django",
      "Django REST Framework",
      "Node.js",
      "Express",
      "Celery / Celery Beat",
      "WebSockets",
      "WebRTC",
      "REST API design",
    ],
  },
  {
    id: 3,
    title: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Server-side rendering", "Technical SEO"],
  },
  {
    id: 4,
    title: "Data",
    items: ["PostgreSQL", "MongoDB", "Redis", "Schema design", "Query optimization", "Indexing"],
  },
  {
    id: 5,
    title: "Infrastructure & DevOps",
    items: [
      "Terraform",
      "AWS EC2",
      "AWS S3",
      "NGINX",
      "Docker",
      "Linux",
      "Cloudflare (DNS, SSL, CDN)",
      "CI/CD pipelines",
      "Staging / production workflows",
    ],
  },
  {
    id: 6,
    title: "Integrations",
    items: [
      "OpenAI API",
      "Companies House API",
      "Stripe",
    ],
  },
];

export default skills;
