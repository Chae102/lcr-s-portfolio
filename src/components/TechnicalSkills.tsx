import { motion, useReducedMotion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  SiCss,
  SiDiscord,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNotion,
  SiReact,
  SiReactquery,
  SiReactrouter,
  SiSpring,
  SiSupabase,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaJava } from "react-icons/fa";
import { skillGroups } from "../data/skills";
import { Section } from "./Section";

const skillIcons: Record<string, IconType> = {
  React: SiReact,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  HTML5: SiHtml5,
  CSS3: SiCss,
  "Tailwind CSS": SiTailwindcss,
  Vite: SiVite,
  "React Router": SiReactrouter,
  "TanStack Query": SiReactquery,
  Java: FaJava,
  Spring: SiSpring,
  MySQL: SiMysql,
  Supabase: SiSupabase,
  Git: SiGit,
  GitHub: SiGithub,
  Figma: SiFigma,
  Discord: SiDiscord,
  Swagger: SiSwagger,
  Notion: SiNotion,
  Vercel: SiVercel,
  "VS Code": VscVscode,
};

export function TechnicalSkills() {
  const reduceMotion = useReducedMotion();

  return (
    <Section id="skills" title="Technical Skills" variant="showcase">
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-group" key={group.category}>
            <div className="skill-heading">
              <h3>{group.category}</h3>
              <p>{group.description}</p>
            </div>
            <div className="skill-logo-grid">
              {group.skills.map((skill) => {
                const Icon = skillIcons[skill.name];
                return (
                  <motion.div
                    className={skill.featured ? "skill-logo skill-logo-featured" : "skill-logo"}
                    key={skill.name}
                    whileHover={reduceMotion ? undefined : { y: -5, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 420, damping: 20 }}
                  >
                    {Icon ? (
                      <Icon className="skill-logo-icon" aria-hidden="true" />
                    ) : (
                      <span className="skill-text-logo" aria-hidden="true">
                        {skill.name}
                      </span>
                    )}
                    <span>{skill.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
