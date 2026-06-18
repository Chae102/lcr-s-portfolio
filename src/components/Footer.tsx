import { useEffect, useState } from "react";

const email = "coth4498@naver.com";
const notionUrl = "https://app.notion.com/p/38198896a76e80f0aeb3dca2a4d5fc4e?source=copy_link";

const quickLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const connectLinks = [
  { label: "GitHub", href: "https://github.com/Chae102" },
  { label: "Notion", href: notionUrl },
  { label: "Email", action: "copyEmail" },
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

export function Footer() {
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
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <h2>이채린</h2>
          <p className="footer-role">Frontend Developer</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          {quickLinks.map((link) => (
            <a className="focus-ring" key={link.id} href={`#${link.id}`}>
              {link.label}
            </a>
          ))}
        </div>
        <div>
          <h3>Connect Links</h3>
          {connectLinks.map((link) => {
            if ("action" in link) {
              return (
                <button
                  className="footer-link-button focus-ring"
                  key={link.label}
                  type="button"
                  onClick={handleEmailCopy}
                  aria-describedby="footer-email-copy-status"
                >
                  {link.label}
                </button>
              );
            }

            return (
              <a
                className="focus-ring"
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
              >
                {link.label}
              </a>
            );
          })}
          <span id="footer-email-copy-status" className="copy-status footer-copy-status" role="status" aria-live="polite">
            {isEmailCopied ? "이메일복사완료" : ""}
          </span>
        </div>
      </div>
      <p className="copyright">Copyright © 2026 이채린. All rights reserved.</p>
    </footer>
  );
}
