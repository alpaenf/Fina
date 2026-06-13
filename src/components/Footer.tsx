"use client";

interface FooterProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  return (
    <footer className="bg-surface-container-low w-full py-stack-lg border-t border-outline-variant/10">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-stack-md">
        <div>
          <a
            className="font-headline-md text-headline-md font-bold text-on-surface mb-2 block hover:text-secondary transition-colors"
            href="#home"
            onClick={(e) => onNavClick(e, "home")}
          >
            Fina Julianti
          </a>
          <p className="font-body-md text-body-md text-on-surface-variant">
            © 2026 Fina Julianti. Premium Professional Portfolio.
          </p>
        </div>
        <div className="flex gap-8">
          <a
            className="text-on-surface-variant hover:text-secondary font-label-md text-label-md transition-all hover:translate-y-[-2px] inline-block"
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            className="text-on-surface-variant hover:text-secondary font-label-md text-label-md transition-all hover:translate-y-[-2px] inline-block"
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="text-on-surface-variant hover:text-secondary font-label-md text-label-md transition-all hover:translate-y-[-2px] inline-block"
            href="mailto:fina.julianti@example.com"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
