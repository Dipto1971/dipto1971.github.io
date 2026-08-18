import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageHeader from "@/components/ui/PageHeader";
import EducationList from "@/components/sections/EducationList";

export const metadata: Metadata = pageMetadata({
  title: "Education",
  description:
    "B.Sc. in Computer Science and Engineering at East West University, with competitive programming, ICPC Regionals 2022, and youth mentoring alongside coursework.",
  path: "/education",
});

export default function EducationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Education"
        title="Education and background"
      />
      <div className="mt-8 sm:mt-12">
        <EducationList />
      </div>
    </>
  );
}
