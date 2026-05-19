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
    image: "/rnjopbforce-logo.jpeg",
    company: "RN-JobForce",
    role: "Lead Full Stack Engineer & System Designer",
    type: "Remote",
    date: "2024 - Present",
    description: "Designed and built a full enterprise recruitment platform from scratch, dual portals (employer + job seeker), real-time WebSocket messaging, Stripe subscriptions, AI interview tools, document signing, and Celery task queues. Deployed on Hetzner VPS with Nginx, Docker, and S3 for storage.",
    skills: [
      { id: 1, name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { id: 2, name: "Nginx", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg" },
      { id: 3, name: "Next.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { id: 4, name: "TypeScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { id: 5, name: "PostgreSQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
      { id: 6, name: "Redis", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
      { id: 7, name: "Celery", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { id: 8, name: "Stripe", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { id: 9, name: "AWS S3", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg" },
      { id: 10, name: "WebSocket", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      { id: 11, name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { id: 12, name: "Tailwind CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    ],
  },
  {
    id: 2,
    image: "/work/No-pic.png",
    company: "Progress IT Solutions",
    role: "Software Developer Lead",
    type: "On-site",
    date: "May 2024 - Present",
    description: "Delivered client-specific desktop applications across two projects. Built a C# CLI tool for a studio company with 15 custom FFmpeg video shaders and OpenCV-based frame interpolation. Built a Windows application (C# WPF/WinForms) for a cybersecurity company, automating domain computer registration in Windows Event Viewer and simplifying GPO management across multiple domains.",
    skills: [
      { id: 1, name: "C#", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
      { id: 2, name: "WPF", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" },
      { id: 3, name: "OpenCV", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" },
      { id: 4, name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    ],
  },
  {
    id: 3,
    image: "/pryntmart-logo.png",
    company: "Pryntmart",
    role: "Full Stack Developer",
    type: "Remote",
    date: "2023 - 2024",
    description: "Built a full-stack custom printing platform with a browser-based design editor (Fabric.js) for creating print-ready designs. Handled product configuration, cart and checkout flow, admin panel, and third-party integrations (Stripe, Shippo). Deployed on Hetzner VPS using Docker Compose, Nginx, and SSL.",
    skills: [
      { id: 1, name: "Next.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { id: 2, name: "TypeScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { id: 3, name: "Go", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg" },
      { id: 4, name: "PostgreSQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
      { id: 5, name: "Redis", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
      { id: 6, name: "Fabric.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { id: 7, name: "Stripe", image: "https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/stripe.svg" },
      { id: 8, name: "Docker", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
      { id: 9, name: "S3", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg" },
      { id: 10, name: "Tailwind CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    ],
  },
];
export default data;
