export interface ContactLink {
  id: string;
  label: string;
  value: string;
  href: string;
  external: boolean;
}

const profile = {
  name: "Mahir Faysal Haque Dipto",
  title: "Full Stack Engineer",
  titleLong: "Full Stack Engineer | System Architecture & DevOps",
  location: "Dhaka, Bangladesh",
  currentCompany: "RN Jobforce",
  email: "dipto.haq771@gmail.com",
  summary:
    "I currently serve as the Lead Full Stack Engineer at RN Jobforce driving the technical development of the job search platform. My core expertise centers on designing scalable web architectures and establishing secure cloud deployment pipelines. I specialize in backend system design, modern full-stack frameworks, and DevOps engineering.",
  facts: [
    { label: "Role", value: "Lead Full Stack Engineer, RN Jobforce" },
    { label: "Focus", value: "System architecture, backend, DevOps" },
    { label: "Based in", value: "Dhaka, Bangladesh" },
    { label: "Education", value: "B.Sc. CSE, East West University" },
  ],
  siteUrl: "https://dipto1971.github.io",
  image: "/images/profile.jpeg",
};

export const contacts: ContactLink[] = [
  {
    id: "email",
    label: "Email",
    value: "dipto.haq771@gmail.com",
    href: "mailto:dipto.haq771@gmail.com",
    external: false,
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/dipto1971",
    href: "https://github.com/dipto1971",
    external: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "Mahir Faysal Haque Dipto",
    href: "https://www.linkedin.com/in/mahir-faysal-haque-dipto-6911a4245/",
    external: true,
  },
  {
    id: "scholar",
    label: "Google Scholar",
    value: "Publications",
    href: "https://scholar.google.com/citations?user=_1C7uuwAAAAJ&hl=en",
    external: true,
  },
  {
    id: "cv",
    label: "CV",
    value: "Download PDF",
    href: "/files/cv.pdf",
    external: true,
  },
];

export default profile;
