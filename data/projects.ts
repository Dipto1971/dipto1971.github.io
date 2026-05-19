import { image } from "framer-motion/client";

const data = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
  {
    id: 4,
    title: "HyperSec Platform Integration Collector",
    description:
      "Windows desktop application built for HyperSec, a cybersecurity company. Automates registration of domain computers in Windows Event Viewer and simplifies GPO management across multiple domains. Handles XML extraction, manipulation, and generation as part of the integration workflow.",
    skills: [
      { id: 1, name: "C#", image: "/skills/csharp.png" },
      { id: 2, name: "WPF", image: "/skills/windows.png" },
      { id: 3, name: "WinForms", image: "/skills/windows-2.png" },
    ],
    source_code: "https://github.com/Dipto1971",
    demo: "https://github.com/Dipto1971",
    image: "/work/No-pic.png",
  },
  {
    id: 5,
    title: "EWU Data Automation",
    description:
      "C# application built for East West University that extracts data from Excel sheets, converts it to JSON, and pushes it to a database. Removed manual entry for semester result submissions and sped up student record processing.",
    skills: [
      { id: 1, name: "C#", image: "/skills/csharp.png" },
      { id: 2, name: "WPF", image: "/skills/windows.png" },
      { id: 3, name: "Python", image: "/skills/python.png" },
    ],
    source_code: "https://github.com/Dipto1971",
    demo: "https://github.com/Dipto1971",
    image: "/work/No-pic.png",
  },
  {
    id: 6,
    title: "Route Recon",
    description:
      "Pathfinder game built to visualise Dijkstra's algorithm in action. The backend runs the algorithm and returns the shortest path, while the React frontend renders the grid and animates the search. A hands-on way to see graph traversal working in real time.",
    skills: [
      { id: 1, name: "Node.js", image: "/skills/node-js.png" },
      { id: 2, name: "React", image: "/skills/react.png" },
      { id: 3, name: "JavaScript", image: "/skills/javascript.png" },
    ],
    source_code: "https://github.com/Dipto1971",
    demo: "https://github.com/Dipto1971",
    image: "/work/No-pic.png",
  },
  {
    id: 7,
    title: "GMeet Clone",
    description:
      "Google Meet clone built from scratch using the MERN stack. Covers real-time video/audio communication, room creation, and participant management using WebRTC and Socket.io.",
    skills: [
      { id: 1, name: "React", image: "/skills/react.png" },
      { id: 2, name: "Node.js", image: "/skills/node-js.png" },
      { id: 3, name: "MongoDB", image: "/skills/mongodb.png" },
      { id: 4, name: "Express", image: "/skills/express.png" },
    ],
    source_code: "https://github.com/Dipto1971/GMeet-Clone",
    demo: "https://github.com/Dipto1971/GMeet-Clone",
    image: "/work/No-pic.png",
  },
  {
    id: 8,
    title: "Ludo Dice Casino",
    description:
      "Go backend for a Ludo-style dice casino game with user auth, game logic, betting, payment processing (deposits and withdrawals), admin dashboard, Redis caching, and PostgreSQL persistence. Rate limiting and security measures included.",
    skills: [
      { id: 1, name: "Go", image: "/skills/go.png" },
      { id: 2, name: "PostgreSQL", image: "/skills/postgresql.png" },
      { id: 3, name: "Redis", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
      { id: 4, name: "Docker", image: "/skills/docker.png" },
    ],
    source_code: "https://github.com/Dipto1971/Ludo-Dice-Casino",
    demo: "https://github.com/Dipto1971/Ludo-Dice-Casino",
    image: "/work/No-pic.png",
  },
];
export default data;
