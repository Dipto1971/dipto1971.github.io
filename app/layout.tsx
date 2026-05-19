import "./globals.css";
import Theme from "@/components/Theme";
export const metadata = {
  title: "Mahir Faysal Haque Dipto",
  description:
    "Full Stack Engineer & DevOps with 4 years of experience building production-grade systems. Lead engineer at RN-JobForce. IEEE-published researcher (DCOSS-IoT 2026). Specialised in Next.js, TypeScript, Go, PostgreSQL, Redis, Docker, and AWS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Theme>
          {children}
        </Theme>
      </body>
    </html>
  );
}
