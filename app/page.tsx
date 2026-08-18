import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import FactList from "@/components/sections/FactList";
import SkillMatrix from "@/components/sections/SkillMatrix";
import Section from "@/components/ui/Section";
import about from "@/data/about";

export const metadata: Metadata = {
  title: "Mahir Faysal Haque Dipto - Lead Full Stack Engineer",
  description:
    "Lead Full Stack Engineer at RN Jobforce. Backend system design with Django and Python, Next.js frontends, and cloud infrastructure on Terraform, AWS EC2, and NGINX.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section title="At a glance">
        <FactList />
      </Section>

      <Section title="About">
        <div className="max-w-content space-y-5">
          <p className="text-base leading-relaxed text-fg">{about.lead}</p>
          {about.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="text-base leading-relaxed text-muted"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      <Section
        title="Technical skills"
        description="Tools and technologies I work with regularly across backend, frontend, and infrastructure."
      >
        <SkillMatrix />
      </Section>
    </>
  );
}
