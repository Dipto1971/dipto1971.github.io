interface work {
  id: number;
  role: string;
  company: string;
  type: string;
  date: string;
  image: string;
  description?: string;
  skills?: skills[];
}
interface skills {
  id: number;
  name: string;
  image: string;
}

const data: work[] = [
  {
    id: 1,
    image: "/work/rn-jobforce.png",
    company: "RN-JobForce",
    role: "Lead Full Stack Developer & System Designer",
    type: "Remote",
    date: "2024 - Present",
    description: "Architected and built a production-grade enterprise recruitment platform from scratch. Designed multi-portal system (employer + jobseeker) with 20+ integrated services, real-time WebSocket communication, payment processing, and AI integrations. Managing technical architecture, system design, and full-stack implementation.",
    skills: [
      { id: 1, name: "Django", image: "/skills/django.png" },
      { id: 2, name: "Django REST", image: "/skills/drf.png" },
      { id: 3, name: "Next.js", image: "/skills/next-js.png" },
      { id: 4, name: "TypeScript", image: "/skills/typescript.png" },
      { id: 5, name: "PostgreSQL", image: "/skills/postgresql.png" },
      { id: 6, name: "Redis", image: "/skills/redis.png" },
      { id: 7, name: "Celery", image: "/skills/celery.png" },
      { id: 8, name: "Stripe", image: "/skills/stripe.png" },
      { id: 9, name: "AWS S3", image: "/skills/aws.png" },
      { id: 10, name: "WebSocket", image: "/skills/websocket.png" },
      { id: 11, name: "React", image: "/skills/react.png" },
      { id: 12, name: "Tailwind CSS", image: "/skills/tailwind.png" },
    ],
  },
  {
    id: 2,
    image: "/work/pryntmart.png",
    company: "Pryntmart",
    role: "Full Stack Developer",
    type: "Remote",
    date: "2023 - 2024",
    description: "Built a full-stack custom printing platform with Canva-like design editor. Implemented product configuration, design workflow, checkout integration, and admin panel. Deployed containerized stack on Hostinger VPS with Docker, Nginx, and SSL automation. Integrated Stripe for payments and Shippo for shipping.",
    skills: [
      { id: 1, name: "Next.js", image: "/skills/next-js.png" },
      { id: 2, name: "TypeScript", image: "/skills/typescript.png" },
      { id: 3, name: "Go", image: "/skills/go.png" },
      { id: 4, name: "PostgreSQL", image: "/skills/postgresql.png" },
      { id: 5, name: "Redis", image: "/skills/redis.png" },
      { id: 6, name: "Fabric.js", image: "/skills/fabricjs.png" },
      { id: 7, name: "Stripe", image: "/skills/stripe.png" },
      { id: 8, name: "Docker", image: "/skills/docker.png" },
      { id: 9, name: "S3", image: "/skills/aws.png" },
      { id: 10, name: "Tailwind CSS", image: "/skills/tailwind.png" },
    ],
  },
];
export default data;
