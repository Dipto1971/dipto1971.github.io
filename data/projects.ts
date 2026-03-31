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
];
export default data;
