"use client";

interface FooterProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  return (
    <footer className="bg-primary text-primary-inverse py-12 w-full border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <a
            href="#home"
            onClick={(e) => onNavClick(e, "home")}
            className="text-2xl font-bold tracking-tight text-white mb-2 block hover:text-accent transition-colors"
          >
            Fina<span className="text-accent">.</span>
          </a>
          <p className="text-white/60 text-sm font-medium">
            © {new Date().getFullYear()} Fina Julianti. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:bg-accent hover:text-white transition-all duration-300">
            <span className="material-symbols-outlined text-[20px]">language</span>
          </a>
          <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:bg-accent hover:text-white transition-all duration-300">
            <span className="material-symbols-outlined text-[20px]">mail</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
