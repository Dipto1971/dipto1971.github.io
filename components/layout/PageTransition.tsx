"use client";

import { motion, useReducedMotion } from "framer-motion";

// Rendered from app/template.tsx, so it remounts on every route change and
// gives each tab a short fade-in - client-side, no full page reload.
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: reduceMotion ? 0 : 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.25, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
