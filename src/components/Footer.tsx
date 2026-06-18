const quickLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const connectLinks = [
  { label: "GitHub", href: "https://github.com/Chae102" },
  { label: "Notion", href: "https://app.notion.com/p/36198896a76e8082968ef10ee1b78656" },
  { label: "Email", href: "mailto:coth4498@naver.com" },
];

export function Footer() {
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
          {connectLinks.map((link) => (
            <a
              className="focus-ring"
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <p className="copyright">Copyright © 2026 이채린. All rights reserved.</p>
    </footer>
  );
}
