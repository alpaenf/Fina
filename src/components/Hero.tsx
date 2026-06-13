"use client";

import Image from "next/image";

interface HeroProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

export default function Hero({ onNavClick }: HeroProps) {
  return (
    <section
      className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden bg-background"
      id="home"
    >
      {/* Absolute Grid Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 z-0"></div>
      
      {/* Decorative Gradient Orbs */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-accent-soft/40 rounded-full blur-3xl z-0"></div>
      
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center w-full relative z-10">
        
        {/* Left Content Area */}
        <div className="reveal order-2 lg:order-1 pt-8 lg:pt-0">
          <div className="inline-flex items-center space-x-2 bg-surface-muted border border-outline-variant/40 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-on-surface-variant font-label-md text-[12px] tracking-widest uppercase">
              Available for Work
            </span>
          </div>
          
          <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface mb-6 leading-tight tracking-tight">
            Hi, I'm <span className="text-accent">Fina Julianti</span>
          </h1>
          
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-md max-w-lg leading-relaxed">
            A creative digital enthusiast crafting premium, user-centric experiences that blend elegant aesthetics with functional clarity. Let's build something extraordinary.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              className="bg-primary text-primary-inverse px-8 py-4 rounded-full font-label-md hover:bg-accent transition-all duration-300 hover-shadow text-center flex items-center justify-center space-x-2"
              href="#proyek"
              onClick={(e) => onNavClick(e, "proyek")}
            >
              <span>View My Work</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
            <a
              className="bg-surface border border-outline text-on-surface px-8 py-4 rounded-full font-label-md hover:bg-surface-muted transition-all duration-300 text-center flex items-center justify-center space-x-2"
              href="#tentang"
              onClick={(e) => onNavClick(e, "tentang")}
            >
              <span>Learn More</span>
            </a>
          </div>
        </div>

        {/* Right Content Area (Image) */}
        <div className="reveal relative flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative w-[280px] h-[360px] md:w-[380px] md:h-[480px]">
            {/* Minimalist Backdrop element */}
            <div className="absolute -inset-4 bg-accent-soft rounded-[40px] -rotate-3 scale-100 opacity-60 z-0"></div>
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
            <div className="absolute -bottom-6 -left-6 bg-white border border-outline-variant/30 p-4 rounded-2xl soft-shadow z-20 animate-floating flex items-center space-x-3">
              <div className="w-12 h-12 bg-accent-soft rounded-full flex items-center justify-center text-accent">
                <span className="material-symbols-outlined">workspace_premium</span>
              </div>
              <div>
                <p className="font-headline-sm text-[18px] mb-0 leading-none">12+</p>
                <p className="font-label-md text-[11px] text-on-surface-variant">Projects Done</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
