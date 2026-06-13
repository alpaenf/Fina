import Image from "next/image";

export default function About() {
  return (
    <section className="py-stack-lg bg-surface-muted" id="tentang">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row justify-between items-end mb-stack-lg reveal">
          <div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-2 tracking-tight">
              About Me
            </h2>
            <div className="h-1 w-16 bg-accent rounded-full"></div>
          </div>
          <p className="hidden md:block font-label-md text-on-surface-variant max-w-xs text-right mt-4 md:mt-0">
            Passionate about creating digital solutions that make a real impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-stack-lg items-center">
          {/* Left: Image Card */}
          <div className="lg:col-span-5 reveal">
            <div className="aspect-[4/5] rounded-[32px] overflow-hidden soft-shadow relative w-full h-full border border-outline-variant/30">
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
          <div className="lg:col-span-7 space-y-stack-md reveal delay-100">
            <h3 className="font-headline-md text-headline-md text-on-surface leading-tight tracking-tight">
              Building the Future Through <br className="hidden lg:block"/> Design & Strategy
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
              Saya adalah seorang profesional muda yang berdedikasi tinggi dengan minat mendalam di dunia digital dan kreativitas. Dengan latar belakang yang kuat dalam organisasi dan proyek akademik, saya terus mengasah kemampuan saya untuk memberikan solusi digital yang estetis namun tetap fungsional dan berdampak nyata.
            </p>
            
            {/* Minimalist Stats Divider */}
            <div className="pt-6 border-t border-outline-variant/50">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div className="group">
                  <span className="text-primary font-headline-md block mb-1 group-hover:text-accent transition-colors">12+</span>
                  <span className="font-label-md text-[12px] text-on-surface-variant tracking-wider">Projects Done</span>
                </div>
                <div className="group">
                  <span className="text-primary font-headline-md block mb-1 group-hover:text-accent transition-colors">5+</span>
                  <span className="font-label-md text-[12px] text-on-surface-variant tracking-wider">Organizations</span>
                </div>
                <div className="group col-span-2 md:col-span-1">
                  <span className="text-primary font-headline-md block mb-1 group-hover:text-accent transition-colors">10+</span>
                  <span className="font-label-md text-[12px] text-on-surface-variant tracking-wider">Skills Mastered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
