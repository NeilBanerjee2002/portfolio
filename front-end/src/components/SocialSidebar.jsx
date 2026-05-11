import { useState } from "react";

const links = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
    label: "GitHub",
    href: "https://github.com/neilbanerjee2002",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
      </svg>
    ),
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/neil-banerjee-71a83324a/",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email",
    href: "mailto:neilbanerjee.22.5.2002@gmail.com",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    label: "Contact",
    href: "/contact",
  },
];

export default function SocialSidebar() {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap');

        .sidebar-root {
            position: fixed;
            left: 16px;
            top: 65%;
            transform: translateY(-50%);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 14px;
            z-index: 100;
          }

        .sidebar-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 8px;
          border: 0.5px solid rgba(255,255,255,0.1);
          background: rgba(13, 17, 23, 0.7);
          backdrop-filter: blur(8px);
          color: #8b949e;
          text-decoration: none;
          position: relative;
          transition: color 0.2s ease, border-color 0.2s ease, transform 0.2s ease, background 0.2s ease;
        }

        .sidebar-link:hover {
          color: #22d3ee;
          border-color: rgba(34, 211, 238, 0.4);
          background: rgba(34, 211, 238, 0.06);
          transform: translateX(3px);
        }

        .sidebar-tooltip {
          position: absolute;
          left: 48px;
          background: #161b22;
          border: 0.5px solid rgba(34, 211, 238, 0.3);
          color: #22d3ee;
          font-size: 11px;
          font-weight: 500;
          padding: 4px 10px;
          border-radius: 5px;
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          transform: translateX(-6px);
          transition: opacity 0.15s ease, transform 0.15s ease;
          letter-spacing: 0.3px;
        }

        .sidebar-tooltip::before {
          content: '';
          position: absolute;
          left: -4px;
          top: 50%;
          transform: translateY(-50%);
          border-width: 4px 4px 4px 0;
          border-style: solid;
          border-color: transparent rgba(34,211,238,0.3) transparent transparent;
        }

        .sidebar-link:hover .sidebar-tooltip {
          opacity: 1;
          transform: translateX(0);
        }

        @media (max-width: 768px) {
          .sidebar-root {
            display: none;
          }
        }

        
      `}</style>

      <aside className="sidebar-root" aria-label="Social links">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="sidebar-link"
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            aria-label={link.label}
            onMouseEnter={() => setHovered(link.label)}
            onMouseLeave={() => setHovered(null)}
          >
            {link.icon}
            <span className="sidebar-tooltip">{link.label}</span>
          </a>
        ))}
        <div className="sidebar-line" aria-hidden="true" />
      </aside>
    </>
  );
}
