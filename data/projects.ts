import { image } from "framer-motion/client";

const data = [
  {
    id: 1,
    title: "RN-JobForce: Enterprise Recruitment Platform",
    description:
      "Production-grade dual-portal recruitment platform built from scratch. Architected backend with Django, Django REST Framework, PostgreSQL, Redis, and Celery. Implemented 20+ microservices covering accounts, candidates, jobs, interviews, payments, and notifications. Built 70+ React components with Radix UI and TypeScript. Features include real-time WebSocket messaging (1500+ concurrent connections), Stripe payment integration, AI-powered interview system, document management with AWS S3, and GDPR-compliant privacy framework.",
    skills: [
      { id: 1, name: "Django", image: "/skills/django.png" },
      { id: 2, name: "DRF", image: "/skills/drf.png" },
      { id: 3, name: "PostgreSQL", image: "/skills/postgresql.png" },
      { id: 4, name: "Redis", image: "/skills/redis.png" },
      { id: 5, name: "Celery", image: "/skills/celery.png" },
      { id: 6, name: "Next.js", image: "/skills/next-js.png" },
      { id: 7, name: "TypeScript", image: "/skills/typescript.png" },
      { id: 8, name: "React", image: "/skills/react.png" },
      { id: 9, name: "Taildwind", image: "/skills/tailwind.png" },
    ],
    source_code: "https://github.com/Dipto1971/rn-jobforce",
    demo: "https://rn-jobforce.com",
    image: "/projects/rn-jobforce.png",
  },
  {
    id: 2,
    title: "Pryntmart: Custom Printing Platform with Design Editor",
    description:
      "Full-stack e-commerce platform for custom printing with browser-based design editor. Built frontend with Next.js 15 and TypeScript. Implemented backend API with Go and Gin framework. Designed Fabric.js-powered editor with design autosave, templates, and high-resolution export. Integrated Stripe for checkout and payment processing. Added Shippo for shipping management. Deployed on Hostinger VPS using Docker Compose with Nginx reverse proxy and SSL automation. Implemented secure admin panel with role-based access control and audit tracking.",
    skills: [
      { id: 1, name: "Next.js", image: "/skills/next-js.png" },
      { id: 2, name: "TypeScript", image: "/skills/typescript.png" },
      { id: 3, name: "Go", image: "/skills/go.png" },
      { id: 4, name: "PostgreSQL", image: "/skills/postgresql.png" },
      { id: 5, name: "Redis", image: "/skills/redis.png" },
      { id: 6, name: "Docker", image: "/skills/docker.png" },
      { id: 7, name: "Fabric.js", image: "/skills/fabricjs.png" },
      { id: 8, name: "Stripe", image: "/skills/stripe.png" },
    ],
    source_code: "https://github.com/Dipto1971/pryntmart",
    demo: "https://pryntmart.com",
    image: "/projects/pryntmart.png",
  },
  {
    id: 3,
    title: "PaumIoT: Protocol-Agnostic IoT Middleware (Research)",
    description:
      "Cutting-edge IoT middleware system written in C99 that unifies multi-protocol device connectivity. Implements intelligent protocol selection using reinforcement learning and machine learning. Accepted as a short paper at IEEE DCOSS-IoT 2026. Features unified multi-protocol gateway supporting MQTT, CoAP, HTTP, and QUIC on single network port. Implements decision tree plus LinUCB contextual bandit for adaptive protocol selection. Demonstrates effective knowledge distillation for embedded systems and real-time adaptation to degraded network conditions.",
    skills: [
      { id: 1, name: "C99", image: "/skills/c.png" },
      { id: 2, name: "IoT", image: "/skills/iot.png" },
      { id: 3, name: "MQTT", image: "/skills/mqtt.png" },
      { id: 4, name: "Machine Learning", image: "/skills/ml.png" },
      { id: 5, name: "Linux", image: "/skills/linux.png" },
    ],
    source_code: "https://github.com/rahmanmehraj182/PaumIoT",
    demo: "https://github.com/rahmanmehraj182/PaumIoT",
    image: "/projects/paumiiot.png",
  },
  {
    id: 4,
    title: "FFMPEG Video Processor",
    description:
      "Command-line application for video processing with 15 custom-built video shaders using FFmpeg. Implemented OpenCV for complex video processing tasks including frame interpolation between two frames. Integrated custom shader pipelines for video effect generation. Built in C# with comprehensive command-line interface for studio production workflows.",
    skills: [
      { id: 1, name: "C#", image: "/skills/csharp.png" },
      { id: 2, name: "OpenCV", image: "/skills/opencv.png" },
      { id: 3, name: "FFmpeg", image: "/skills/ffmpeg.png" },
      { id: 4, name: "Python", image: "/skills/python.png" },
    ],
    source_code: "https://github.com/Dipto1971/FFMPEG-Video-Processor",
    demo: "https://github.com/Dipto1971/FFMPEG-Video-Processor",
    image: "/projects/ffmpeg.png",
  },
  {
    id: 5,
    title: "Issue Tracking System (Bugsy)",
    description:
      "Powerful issue tracker designed for team collaboration. Built with Next.js, TypeScript, Prisma, and Tailwind CSS. Features include issue creation, status tracking, priority management, team assignments, and filtering. Implements modern web patterns with optimistic updates and real-time synchronization.",
    skills: [
      { id: 1, name: "Next.js", image: "/skills/next-js.png" },
      { id: 2, name: "TypeScript", image: "/skills/typescript.png" },
      { id: 3, name: "Prisma", image: "/skills/prisma.png" },
      { id: 4, name: "Tailwind CSS", image: "/skills/tailwind.png" },
    ],
    source_code: "https://github.com/Dipto1971/Bugsy-The-Issue-Tracker",
    demo: "https://bugsy-tracker.vercel.app",
    image: "/projects/bugsy.png",
  },
  {
    id: 6,
    title: "JSON Voyager: JSON Data Visualization",
    description:
      "React application for visualizing and interacting with JSON data in tree structure. Features include search functionality, expand/collapse operations, and data filtering. Built with React and TypeScript for strict type-checking and enhanced code quality.",
    skills: [
      { id: 1, name: "React", image: "/skills/react.png" },
      { id: 2, name: "TypeScript", image: "/skills/typescript.png" },
    ],
    source_code: "https://github.com/Dipto1971/JSON-Voyager",
    demo: "https://json-voyager-mqtx-ghixzt8ph-diptos-projects-6f0bce34.vercel.app/",
    image: "/projects/json-voyager.png",
  },
];
export default data;
