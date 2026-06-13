"use client";

import Image from "next/image";

interface HeroProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

export default function Hero({ onNavClick }: HeroProps) {
  return (
    <section
      className="min-h-screen pt-32 pb-16 flex items-center relative overflow-hidden bg-background"
      id="home"
    >
      {/* Absolute Grid Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 z-0"></div>
      
      {/* Decorative Gradient Orbs */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-accent-soft/40 rounded-full blur-3xl z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full relative z-10">
        
        {/* Left Content Area */}
        <div className="reveal order-2 lg:order-1 pt-8 lg:pt-0">
          <div className="inline-flex items-center space-x-2 bg-surface-muted border border-outline-variant/40 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-on-surface-variant font-semibold text-[11px] md:text-[12px] tracking-widest uppercase">
              Available for Work
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-on-surface mb-6 leading-[1.1] tracking-tight">
            Hi, I'm <span className="text-accent block mt-2">Fina Julianti</span>
          </h1>
          
          <p className="text-base md:text-lg text-on-surface-variant mb-10 max-w-lg leading-relaxed">
            A creative digital enthusiast crafting premium, user-centric experiences that blend elegant aesthetics with functional clarity. Let's build something extraordinary.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              className="bg-primary text-primary-inverse px-8 py-4 rounded-full font-semibold text-sm hover:bg-accent transition-all duration-300 hover-shadow text-center flex items-center justify-center space-x-2"
              href="#proyek"
              onClick={(e) => onNavClick(e, "proyek")}
            >
              <span>View My Work</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
            <a
              className="bg-surface border border-outline-variant text-on-surface px-8 py-4 rounded-full font-semibold text-sm hover:bg-surface-muted transition-all duration-300 text-center flex items-center justify-center space-x-2"
              href="#tentang"
              onClick={(e) => onNavClick(e, "tentang")}
            >
              <span>Learn More</span>
            </a>
          </div>
        </div>

        {/* Right Content Area (Image) */}
        <div className="reveal relative flex justify-center lg:justify-end order-1 lg:order-2 mt-8 lg:mt-0">
          <div className="relative w-[280px] h-[360px] md:w-[380px] md:h-[480px]">
            {/* Minimalist Backdrop element */}
            <div className="absolute -inset-4 bg-accent-soft rounded-[40px] -rotate-3 scale-100 opacity-60 z-0 hidden md:block"></div>
            <div className="absolute inset-0 bg-surface border border-outline-variant/50 rounded-[32px] overflow-hidden z-10 soft-shadow">
              <Image
                alt="Fina Julianti"
                fill
                sizes="(max-width: 768px) 280px, 380px"
                priority
                className="object-cover hover:scale-105 transition-transform duration-700"
                src="/saya.png"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-2 md:-left-6 bg-white border border-outline-variant/30 p-3 md:p-4 rounded-2xl soft-shadow z-20 animate-floating flex items-center space-x-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-accent-soft rounded-full flex items-center justify-center text-accent shrink-0">
                <span className="material-symbols-outlined text-[20px] md:text-[24px]">workspace_premium</span>
              </div>
              <div>
                <p className="font-extrabold text-[16px] md:text-[18px] mb-0 leading-none">12+</p>
                <p className="font-semibold text-[10px] md:text-[11px] text-on-surface-variant uppercase tracking-wider mt-1">Projects Done</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
