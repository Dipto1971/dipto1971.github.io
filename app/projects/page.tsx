import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageHeader from "@/components/ui/PageHeader";
import ProjectList from "@/components/sections/ProjectList";

export const metadata: Metadata = pageMetadata({
  title: "Projects",
  description:
    "Selected engineering projects: FFmpeg and OpenCV media processing in C#, a Windows event collector for a cybersecurity client, a WebRTC conferencing application, and a Go game backend.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Selected projects"
      />
      <div className="mt-8 sm:mt-12">
        <ProjectList />
      </div>
    </>
  );
}
