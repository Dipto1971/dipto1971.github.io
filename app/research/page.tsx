import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageHeader from "@/components/ui/PageHeader";
import ResearchList from "@/components/sections/ResearchList";

export const metadata: Metadata = pageMetadata({
  title: "Research",
  description:
    "PaumIoT, a protocol-agnostic IoT middleware written in C99 that serves MQTT, CoAP, HTTP, and QUIC on a single port. Accepted at IEEE DCOSS-IoT 2026.",
  path: "/research",
});

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="Research"
        title="Research and publications"
      />
      <div className="mt-12">
        <ResearchList />
      </div>
    </>
  );
}
