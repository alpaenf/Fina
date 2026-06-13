import Image from "next/image";

export default function About() {
  return (
    <section className="py-20 lg:py-32 bg-surface-muted" id="tentang">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 reveal">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface mb-3 tracking-tight">
              About Me
            </h2>
            <div className="h-1.5 w-16 bg-accent rounded-full"></div>
          </div>
          <p className="hidden md:block text-sm font-semibold text-on-surface-variant max-w-xs text-right mt-4 md:mt-0 uppercase tracking-widest">
            Passionate about creating digital solutions that make a real impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left: Image Card */}
          <div className="lg:col-span-5 reveal">
            <div className="aspect-[4/5] rounded-[32px] overflow-hidden soft-shadow relative w-full border border-outline-variant/30">
              <Image
                alt="Professional portrait of Fina Julianti"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
                src="/saya.png"
              />
            </div>
          </div>

          {/* Right: Bio & Stats */}
          <div className="lg:col-span-7 space-y-8 reveal delay-100">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-on-surface leading-tight tracking-tight">
              Building the Future Through <br className="hidden lg:block"/> Design & Strategy
            </h3>
            <p className="text-base text-on-surface-variant leading-relaxed text-justify">
              Saya adalah seorang profesional muda yang berdedikasi tinggi dengan minat mendalam di dunia digital dan kreativitas. Dengan latar belakang yang kuat dalam organisasi dan proyek akademik, saya terus mengasah kemampuan saya untuk memberikan solusi digital yang estetis namun tetap fungsional dan berdampak nyata.
            </p>
            
            {/* Minimalist Stats Divider */}
            <div className="pt-8 border-t border-outline-variant/50">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                <div className="group">
                  <span className="text-primary text-4xl font-bold block mb-2 group-hover:text-accent transition-colors">12+</span>
                  <span className="text-xs font-semibold text-on-surface-variant tracking-wider uppercase">Projects Done</span>
                </div>
                <div className="group">
                  <span className="text-primary text-4xl font-bold block mb-2 group-hover:text-accent transition-colors">5+</span>
                  <span className="text-xs font-semibold text-on-surface-variant tracking-wider uppercase">Organizations</span>
                </div>
                <div className="group col-span-2 sm:col-span-1">
                  <span className="text-primary text-4xl font-bold block mb-2 group-hover:text-accent transition-colors">10+</span>
                  <span className="text-xs font-semibold text-on-surface-variant tracking-wider uppercase">Skills Mastered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
