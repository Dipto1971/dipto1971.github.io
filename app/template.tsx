import PageTransition from "@/components/layout/PageTransition";

// A template remounts on each navigation, which keeps tab changes client-side
// while still replaying the entry animation.
export default function Template({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
