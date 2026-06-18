import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  intro?: string;
  variant?: "resume" | "showcase";
  children: ReactNode;
};

export function Section({ id, eyebrow, title, intro, variant = "resume", children }: SectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={`section-shell ${variant === "showcase" ? "section-showcase" : "section-resume"} scroll-mt-28`}
      initial={false}
      whileInView={reduceMotion ? undefined : { y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.62, ease: "easeOut" }}
    >
      <div className="section-heading">
        {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
        {intro ? <p className="section-intro">{intro}</p> : null}
      </div>
      {children}
    </motion.section>
  );
}
