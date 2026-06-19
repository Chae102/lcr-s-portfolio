import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { GitBranch, Mail, NotebookTabs } from "lucide-react";
import { Section } from "./Section";

const email = "coth4498@naver.com";
const notionUrl = "https://app.notion.com/p/PortFolio-b4398896a76e8229b0568142e8c56173?source=copy_link";

const contactLinks = [
  { label: "Email", action: "copyEmail", icon: Mail },
  { label: "GitHub", href: "https://github.com/Chae102", icon: GitBranch },
  { label: "Notion", href: notionUrl, icon: NotebookTabs },
];

async function copyEmailToClipboard() {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(email);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = email;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

export function Contact() {
  const shouldReduceMotion = useReducedMotion();
  const [isEmailCopied, setIsEmailCopied] = useState(false);

  useEffect(() => {
    if (!isEmailCopied) {
      return;
    }

    const timeoutId = window.setTimeout(() => setIsEmailCopied(false), 1800);
    return () => window.clearTimeout(timeoutId);
  }, [isEmailCopied]);

  const handleEmailCopy = async () => {
    await copyEmailToClipboard();
    setIsEmailCopied(true);
  };

  return (
    <Section id="contact" title="CONTACT" variant="showcase">
      <div className="contact-layout">
        <p className="contact-lead">함께 만들어갈 기회를 기다리고 있습니다.</p>
        <motion.a
          className="email-display contact-email-wave focus-ring"
          href={`mailto:${email}`}
          aria-label={`${email}로 이메일 보내기`}
          initial="initial"
          whileInView={shouldReduceMotion ? undefined : "wave"}
          viewport={{ once: false, amount: 0.6 }}
        >
          {email.split("").map((char, index) => (
            <motion.span
              className="contact-email-char"
              key={`${char}-${index}`}
              variants={{
                initial: shouldReduceMotion ? { y: 0, opacity: 1 } : { y: 72, opacity: 0 },
                wave: {
                  y: [50, -50, 8, -4, 0],
                  opacity: [0, 1, 1, 1, 1],
                  transition: {
                    duration: 1.8,
                    delay: index * 0.055,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.a>
        <div className="contact-columns">
          <p>
            프론트엔드 개발, 프로젝트 협업, 포트폴리오 관련 문의가 있다면 편하게 연락 주세요. 빠르게 확인하고
            답장드리겠습니다.
          </p>
          <div className="contact-actions">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              if ("action" in link) {
                return (
                  <button
                    key={link.label}
                    className="arrow-link focus-ring"
                    type="button"
                    onClick={handleEmailCopy}
                    aria-describedby="contact-email-copy-status"
                  >
                    <Icon size={16} aria-hidden="true" />
                    {link.label}
                    <span aria-hidden="true">→</span>
                  </button>
                );
              }

              return (
                <a
                  key={link.label}
                  className="arrow-link focus-ring"
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                >
                  <Icon size={16} aria-hidden="true" />
                  {link.label}
                  <span aria-hidden="true">→</span>
                </a>
              );
            })}
            <span id="contact-email-copy-status" className="copy-status" role="status" aria-live="polite">
              {isEmailCopied ? "이메일복사완료" : ""}
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}
