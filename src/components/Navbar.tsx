"use client";

interface NavbarProps {
  activeSection: string;
  scrolled: boolean;
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

export default function Navbar({ activeSection, scrolled, onNavClick }: NavbarProps) {
  const navLinks = [
    { id: "home", label: "Home" },
    { id: "tentang", label: "Tentang" },
    { id: "layanan", label: "Layanan" },
    { id: "proyek", label: "Proyek" },
    { id: "pengalaman", label: "Pengalaman" },
    { id: "kontak", label: "Kontak" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-surface/95 backdrop-blur-md border-outline-variant/20 shadow-md h-16"
          : "bg-surface/90 backdrop-blur-md border-outline-variant/10 shadow-sm h-20"
      }`}
    >
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto h-full">
        <a
          className="font-headline-sm text-headline-sm font-bold tracking-tight text-on-surface hover:text-secondary transition-colors"
          href="#home"
          onClick={(e) => onNavClick(e, "home")}
        >
          Fina Julianti
        </a>
        <div className="hidden md:flex items-center gap-stack-md">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => onNavClick(e, link.id)}
              className={`transition-colors duration-300 font-label-md text-label-md ${
                activeSection === link.id
                  ? "text-secondary font-bold border-b-2 border-secondary pb-1"
                  : "text-on-surface-variant font-medium hover:text-secondary"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#kontak"
          onClick={(e) => onNavClick(e, "kontak")}
          className="bg-rose-pink text-white px-6 py-2.5 rounded-full font-label-md text-label-md hover:bg-secondary transition-all active:scale-95 shadow-sm hover:shadow-md hover:translate-y-[-1px]"
        >
          Let's Talk
        </a>
      </div>
    </nav>
  );
}
