"use client";

interface NavbarProps {
  activeSection: string;
  scrolled: boolean;
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

export default function Navbar({ activeSection, scrolled, onNavClick }: NavbarProps) {
  const navItems = [
    { id: "home", label: "Beranda" },
    { id: "tentang", label: "Tentang" },
    { id: "layanan", label: "Layanan" },
    { id: "proyek", label: "Proyek" },
    { id: "pengalaman", label: "Pengalaman" },
    { id: "kontak", label: "Kontak" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center">
        {/* Logo / Brand Name */}
        <a
          href="#home"
          onClick={(e) => onNavClick(e, "home")}
          className="font-headline-sm text-headline-sm tracking-tight text-on-surface hover:text-accent transition-colors"
        >
          Fina<span className="text-accent">.</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => onNavClick(e, item.id)}
                className={`font-label-md text-label-md transition-all duration-300 relative group ${
                  activeSection === item.id
                    ? "text-accent"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-[2px] bg-accent transition-transform duration-300 origin-left ${
                    activeSection === item.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Call to Action Button */}
        <div className="hidden md:block">
          <a
            href="#kontak"
            onClick={(e) => onNavClick(e, "kontak")}
            className="px-6 py-2.5 rounded-full bg-primary text-primary-inverse font-label-md text-label-md hover:bg-accent hover:shadow-lg transition-all duration-300"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Icon (Placeholder for simplicity) */}
        <button className="md:hidden text-on-surface p-2">
          <span className="material-symbols-outlined text-[28px]">menu</span>
        </button>
      </div>
    </nav>
  );
}
