import { motion } from "framer-motion";
import { useMemo } from "react";
import { useActiveSection } from "../hooks/useActiveSection";

const navItems = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const activeSectionIds = ["about", ...navItems.map((item) => item.id)];

export function Nav() {
  const sectionIds = useMemo(() => activeSectionIds, []);
  const activeSection = useActiveSection(sectionIds);
  const isAboutActive = activeSection === "about";

  return (
    <header className="floating-nav-wrap">
      <nav className="floating-nav" aria-label="주요 섹션">
        <a className={`nav-dots focus-ring ${isAboutActive ? "active" : ""}`} href="#about" aria-label="About으로 이동">
          <span />
          <span />
          <span />
        </a>
        <div className="nav-scroll">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a key={item.id} href={`#${item.id}`} className={`nav-link focus-ring ${isActive ? "active" : ""}`}>
                {item.label}
                {isActive ? <motion.span layoutId="nav-active" className="nav-active" /> : null}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
