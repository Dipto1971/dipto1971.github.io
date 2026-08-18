import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import FactList from "@/components/sections/FactList";
import SkillMatrix from "@/components/sections/SkillMatrix";
import Section from "@/components/ui/Section";
import about from "@/data/about";

export const metadata: Metadata = {
  title: "Mahir Faysal Haque Dipto - Full Stack Engineer",
  description:
    "Full Stack Engineer based in Dhaka. Backend system design with Django and Python, Next.js frontends, and cloud infrastructure on Terraform, AWS EC2, and NGINX.",
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
          <p className="text-[0.9375rem] leading-relaxed text-fg sm:text-base">
            {about.lead}
          </p>
          {about.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="text-[0.9375rem] leading-relaxed text-muted sm:text-base"
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
