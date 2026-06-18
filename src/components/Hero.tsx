import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { GitBranch, Mail, NotebookTabs } from "lucide-react";

const email = "coth4498@naver.com";
const notionUrl = "https://app.notion.com/p/38198896a76e80f0aeb3dca2a4d5fc4e?source=copy_link";

const links = [
  { label: "GitHub", href: "https://github.com/Chae102", icon: GitBranch },
  { label: "Email", action: "copyEmail", icon: Mail },
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

export function Hero() {
  const reduceMotion = useReducedMotion();
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
    <section id="about" className="hero-shell">
      <motion.div
        className="hero-mark"
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
      >
        <video
          className="hero-symbol hero-face-video"
          src="/videos/face.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Chaerin Lee profile video"
        />
      </motion.div>

      <motion.div
        className="hero-copy"
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.12, duration: 0.7, ease: "easeOut" }}
      >
        <p className="hero-kicker">Chaerin Lee · Frontend Developer</p>
        <h1>
          안녕하세요.
          <br />
          프론트엔드 개발자
          <br />
          <span>이채린</span>입니다.
        </h1>
        <p className="hero-summary">
          HTML/CSS 기초부터 React, TypeScript, AI API 연동까지 직접 구현하며 성장하는 프론트엔드 개발자입니다.
        </p>
      </motion.div>

      <motion.div
        className="hero-actions"
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.32, duration: 0.55 }}
      >
        {links.map((link) => {
          const Icon = link.icon;
          if ("action" in link) {
            return (
              <button
                key={link.label}
                className="text-link email-copy-button focus-ring"
                type="button"
                onClick={handleEmailCopy}
                aria-describedby="hero-email-copy-status"
              >
                <Icon size={18} aria-hidden="true" />
                {link.label}
              </button>
            );
          }

          return (
            <a
              key={link.label}
              className="text-link focus-ring"
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
            >
              <Icon size={18} aria-hidden="true" />
              {link.label}
            </a>
          );
        })}
        <span id="hero-email-copy-status" className="copy-status" role="status" aria-live="polite">
          {isEmailCopied ? "이메일복사완료" : ""}
        </span>
      </motion.div>
    </section>
  );
}
