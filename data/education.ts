export interface Education {
  id: number;
  institution: string;
  degree: string;
  period: string;
  description: string;
  activities: string[];
}

const education: Education[] = [
  {
    id: 1,
    institution: "East West University",
    degree: "B.Sc. in Computer Science & Engineering",
    period: "2022 - Present",
    description:
      "During my university journey at East West University, I had the privilege of acquiring valuable skills in software engineering, strategic communication, youth mentoring, project management, and critical thinking. Through rigorous coursework and relentless self-study, I honed these abilities. I secured top academic rankings in my cohort while independently preparing myself for a successful career in tech. Engaging in youth mentoring programs allowed me to make a positive impact on others, guiding and empowering them on their unique paths. Embracing project management and architectural challenges, I learned to plan, coordinate, and deliver complex systems. I expanded my focus from mastering C and C++ to independently building advanced web applications and modern frameworks. Meanwhile, through participating in the 2022 ICPC Regionals and solving algorithmic challenges on platforms like Codeforces, I developed a sharp and analytical mindset. This rigorous environment equipped me with the critical thinking skills required to tackle complex problems and design scalable software architectures.",
    activities: [
      "Inter-University Programming Contests",
      "Competitive Programming (Codeforces, LeetCode, CodeChef)",
      "Youth Mentoring and Academic Tutoring",
    ],
  },
];

export default education;
