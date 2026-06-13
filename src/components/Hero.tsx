"use client";

import Image from "next/image";

interface HeroProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

export default function Hero({ onNavClick }: HeroProps) {
  return (
    <section
      className="min-h-screen pt-20 flex items-center relative overflow-hidden"
      id="home"
    >
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-soft-pink/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-rose-pink/5 rounded-full blur-3xl -z-10"></div>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center w-full">
        <div className="reveal">
          <span className="text-rose-pink font-label-md text-label-md uppercase tracking-widest mb-4 block animate-pulse">
            Available for New Opportunities
          </span>
          <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface mb-6">
            Hi, I'm <span className="text-secondary">Fina Julianti</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-md max-w-lg">
            Creative Digital Enthusiast & Future Professional. I craft digital experiences that blend aesthetic elegance with functional clarity.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              className="bg-rose-pink text-white px-8 py-4 rounded-full font-label-md text-label-md hover:bg-secondary transition-all soft-shadow hover:shadow-lg hover:translate-y-[-2px] active:scale-95 text-center"
              href="#proyek"
              onClick={(e) => onNavClick(e, "proyek")}
            >
              View My Work
            </a>
            <a
              className="border border-soft-pink text-secondary px-8 py-4 rounded-full font-label-md text-label-md hover:bg-soft-pink/10 transition-all hover:translate-y-[-2px] text-center"
              href="#tentang"
              onClick={(e) => onNavClick(e, "tentang")}
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="reveal relative flex justify-center lg:justify-end">
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-soft-pink rounded-full -rotate-6 scale-105 opacity-20"></div>
            <div className="absolute inset-0 bg-rose-pink rounded-full rotate-3 scale-105 opacity-10"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white soft-shadow">
              <Image
                alt="Fina Julianti"
                fill
                sizes="(max-width: 768px) 256px, 384px"
                priority
                className="object-cover hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1TOWvlZumSmRQ7dny64t9kyRwiB8lt-LsOLjShARuxOO3Mk8ikoBcQHCHugyF4li2qCkQdtfKV8d-4mX4Njue9eeSmpmLfyV7CREI60cfRsiDEeyBexB8Rub8lt-LsOLjShARuxOO3Mk8ikoBcQHCHugyF4li2qCkQdtfKV8d-4mX4Njue9eeSmpmLfyV7CREI60cfRsiDEeyBexB8pu0xT7MTOTICZAJXlqYTou0sFMwIph9JdbIPvqQQVqlPISU7jKP26MiQvS6UET8UrEqcehumF9VuRNPy3AzyN6Mx9H41rXjfTaSZ5HGq79YcLm7rwwREl5-1uZaqPLVbkWhX0XdCdt1onCtNzIYTaMQ"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
