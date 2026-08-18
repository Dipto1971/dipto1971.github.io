import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageHeader from "@/components/ui/PageHeader";
import ExperienceList from "@/components/sections/ExperienceList";

export const metadata: Metadata = pageMetadata({
  title: "Experience",
  description:
    "Engineering roles at RN Jobforce, Progress IT Solutions, and Pryntmart: platform architecture with Django and Next.js, cloud deployment with Terraform and AWS, and C# desktop applications.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Professional experience"
      />
      <div className="mt-8 sm:mt-12">
        <ExperienceList />
      </div>
    </>
  );
}
