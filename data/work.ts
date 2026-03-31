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
    image: "https://via.placeholder.com/400x300/1f2937/ffffff?text=RN-JobForce",
    company: "RN-JobForce",
    role: "Lead Full Stack Developer & System Designer",
    type: "Remote",
    date: "2024 - Present",
    description: "Architected and built a production-grade enterprise recruitment platform from scratch. Designed multi-portal system (employer + jobseeker) with 20+ integrated services, real-time WebSocket communication, payment processing, and AI integrations. Managing technical architecture, system design, and full-stack implementation.",
    skills: [
      { id: 1, name: "Django", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-line.svg" },
      { id: 2, name: "Django REST", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-line.svg" },
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
    image: "https://via.placeholder.com/400x300/1f2937/ffffff?text=Pryntmart",
    company: "Pryntmart",
    role: "Full Stack Developer",
    type: "Remote",
    date: "2023 - 2024",
    description: "Built a full-stack custom printing platform with Canva-like design editor. Implemented product configuration, design workflow, checkout integration, and admin panel. Deployed containerized stack on Hostinger VPS with Docker, Nginx, and SSL automation. Integrated Stripe for payments and Shippo for shipping.",
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
