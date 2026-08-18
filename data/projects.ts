export interface Project {
  id: number;
  title: string;
  year?: string;
  description: string;
  stack: string[];
  links: { label: string; href: string }[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "FFmpeg Video Processor",
    description:
      "Command-line application for video processing with 15 custom-built video shaders on top of FFmpeg. Uses OpenCV for frame interpolation and other computer-vision work, with batch processing for high-resolution footage in studio production workflows.",
    stack: ["C#", ".NET Core", "FFmpeg", "OpenCvSharp", "OpenCV"],
    links: [
      {
        label: "Source",
        href: "https://github.com/Dipto1971/FFMPEG-Video-Processor",
      },
    ],
  },
  {
    id: 2,
    title: "HyperSec Platform Integration Collector",
    description:
      "Windows desktop application for a cybersecurity client. Automates registration of domain computers in the Windows Event Viewer and simplifies GPO management across multiple domains, handling XML extraction, manipulation, and generation as part of the integration workflow.",
    stack: ["C#", "WPF", "WinForms", "Windows Event Log"],
    links: [{ label: "GitHub", href: "https://github.com/Dipto1971" }],
  },
  {
    id: 3,
    title: "Google Meet Clone",
    description:
      "Real-time video conferencing application built to work through the four pillars of WebRTC: a WebSocket signaling server, STUN for public address discovery, TURN relays for restrictive networks, and ICE candidate negotiation for route selection.",
    stack: ["React", "Node.js", "WebRTC", "Socket.io", "MongoDB", "Express"],
    links: [
      { label: "Source", href: "https://github.com/Dipto1971/GMeet-Clone" },
    ],
  },
  {
    id: 4,
    title: "EWU Data Automation",
    description:
      "Internal tool for East West University that extracts data from Excel sheets, converts it to JSON, and writes it to the database. Removed manual entry from semester result submission and shortened student record processing.",
    stack: ["C#", "WPF", "Python"],
    links: [{ label: "GitHub", href: "https://github.com/Dipto1971" }],
  },
];

export default projects;
