import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    let frameId = 0;

    const getSectionTarget = (element: HTMLElement) => element.dataset.navSection ?? element.id;

    const getObservedElements = () => {
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter((section): section is HTMLElement => Boolean(section));
      const sectionItems = Array.from(document.querySelectorAll<HTMLElement>("[data-nav-section]")).filter((element) =>
        sectionIds.includes(getSectionTarget(element)),
      );

      return [...sections, ...sectionItems];
    };

    const updateActiveSection = () => {
      const elements = getObservedElements();
      const activationLine = window.innerHeight * 0.42;

      const containing = elements
        .map((element) => ({ element, rect: element.getBoundingClientRect() }))
        .filter(({ rect }) => rect.top <= activationLine && rect.bottom >= activationLine)
        .sort((a, b) => a.rect.height - b.rect.height)[0];

      if (containing) {
        setActiveSection(getSectionTarget(containing.element));
        return;
      }

      const nearest = elements
        .map((element) => ({ element, rect: element.getBoundingClientRect() }))
        .filter(({ rect }) => rect.bottom > 0 && rect.top < window.innerHeight)
        .sort((a, b) => Math.abs(a.rect.top - activationLine) - Math.abs(b.rect.top - activationLine))[0];

      if (nearest) {
        setActiveSection(getSectionTarget(nearest.element));
      }
    };

    const requestUpdate = () => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        frameId = 0;
        updateActiveSection();
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [sectionIds]);

  return activeSection;
}
