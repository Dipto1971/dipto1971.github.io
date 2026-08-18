import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/layout/ThemeProvider";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import profile, { contacts } from "@/data/profile";

const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: `${profile.name} - Lead Full Stack Engineer`,
    template: `%s - ${profile.name}`,
  },
  description:
    "Lead Full Stack Engineer at RN Jobforce. I design backend systems with Django and Python, build Next.js frontends, and run the cloud infrastructure on Terraform, AWS EC2, and NGINX.",
  applicationName: `${profile.name} - Portfolio`,
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  keywords: [
    "Mahir Faysal Haque Dipto",
    "Lead Full Stack Engineer",
    "System architecture",
    "Django",
    "Next.js",
    "DevOps",
    "Terraform",
    "AWS",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    siteName: profile.name,
    url: profile.siteUrl,
    title: `${profile.name} - Lead Full Stack Engineer`,
    description:
      "Lead Full Stack Engineer at RN Jobforce, working on backend system design, Next.js frontends, and cloud infrastructure.",
    locale: "en_US",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: `${profile.name} - Lead Full Stack Engineer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} - Lead Full Stack Engineer`,
    description:
      "Lead Full Stack Engineer at RN Jobforce, working on backend system design, Next.js frontends, and cloud infrastructure.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.titleLong,
  url: profile.siteUrl,
  image: `${profile.siteUrl}${profile.image}`,
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
  worksFor: {
    "@type": "Organization",
    name: profile.currentCompany,
    url: "https://rnjobforce.co.uk",
  },
  alumniOf: { "@type": "CollegeOrUniversity", name: "East West University" },
  knowsAbout: [
    "System architecture",
    "Backend engineering",
    "Django",
    "Next.js",
    "PostgreSQL",
    "DevOps",
    "Terraform",
    "AWS",
  ],
  sameAs: contacts
    .filter((contact) => contact.external && contact.id !== "cv")
    .map((contact) => contact.href),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen font-sans">
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-fg focus:px-3 focus:py-2 focus:text-sm focus:text-bg"
          >
            Skip to content
          </a>
          <SiteHeader />
          <main id="main" className="mx-auto w-full max-w-wide px-5 py-14 sm:px-8">
            {children}
          </main>
          <SiteFooter />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
