"use client";

import { useState } from "react";

interface NavbarProps {
  activeSection: string;
  scrolled: boolean;
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

export default function Navbar({ activeSection, scrolled, onNavClick }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Beranda" },
    { id: "tentang", label: "Tentang" },
    { id: "layanan", label: "Layanan" },
    { id: "proyek", label: "Proyek" },
    { id: "pengalaman", label: "Pengalaman" },
    { id: "kontak", label: "Kontak" },
  ];

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    setIsMobileMenuOpen(false);
    onNavClick(e, id);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex justify-between items-center">
        {/* Logo / Brand Name */}
        <a
          href="#home"
          onClick={(e) => handleMobileNavClick(e, "home")}
          className="font-headline-sm text-2xl tracking-tight text-on-surface hover:text-accent transition-colors"
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
                className={`font-label-md text-sm transition-all duration-300 relative group uppercase tracking-wide ${
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
            className="px-6 py-2.5 rounded-full bg-primary text-primary-inverse text-sm font-semibold hover:bg-accent hover:shadow-lg transition-all duration-300"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <button 
          className="md:hidden text-on-surface p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span className="material-symbols-outlined text-[28px]">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-outline-variant/30 shadow-lg transition-all duration-300 ease-in-out overflow-hidden origin-top ${
          isMobileMenuOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <ul className="flex flex-col px-6 space-y-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleMobileNavClick(e, item.id)}
                className={`block text-base font-semibold uppercase tracking-wider ${
                  activeSection === item.id
                    ? "text-accent"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-4 border-t border-outline-variant/30">
            <a
              href="#kontak"
              onClick={(e) => handleMobileNavClick(e, "kontak")}
              className="inline-block px-6 py-3 rounded-full bg-primary text-primary-inverse font-semibold hover:bg-accent transition-colors w-full text-center"
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
