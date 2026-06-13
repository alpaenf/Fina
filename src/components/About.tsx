import Image from "next/image";

export default function About() {
  return (
    <section className="py-stack-lg bg-surface" id="tentang">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-stack-lg reveal">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">
            Tentang Saya
          </h2>
          <div className="h-1 w-20 bg-rose-pink mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center">
          <div className="reveal">
            <div className="aspect-square rounded-2xl overflow-hidden soft-shadow relative w-full h-full min-h-[300px] md:min-h-[450px]">
              <Image
                alt="Professional portrait of Fina Julianti"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1TOWvlZumSmRQ7dny64t9kyRwiB8lt-LsOLjShARuxOO3Mk8ikoBcQHCHugyF4li2qCkQdtfKV8d-4mX4Njue9eeSmpmLfyV7CREI60cfRsiDEeyBexB8Rub8lt-LsOLjShARuxOO3Mk8ikoBcQHCHugyF4li2qCkQdtfKV8d-4mX4Njue9eeSmpmLfyV7CREI60cfRsiDEeyBexB8pu0xT7MTOTICZAJXlqYTou0sFMwIph9JdbIPvqQQVqlPISU7jKP26MiQvS6UET8UrEqcehumF9VuRNPy3AzyN6Mx9H41rXjfTaSZ5HGq79YcLm7rwwREl5-1uZaqPLVbkWhX0XdCdt1onCtNzIYTaMQ"
              />
            </div>
          </div>
          <div className="space-y-stack-md reveal">
            <h3 className="font-headline-md text-headline-md text-on-surface">
              Building the Future Through Design & Strategy
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Saya adalah seorang profesional muda yang berdedikasi tinggi dengan minat mendalam di dunia digital dan kreativitas. Dengan latar belakang yang kuat dalam organisasi dan proyek akademik, saya terus mengasah kemampuan saya untuk memberikan solusi digital yang berdampak.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-gutter">
              <div className="bg-white p-6 rounded-xl soft-shadow text-center hover:scale-105 transition-transform">
                <span className="text-rose-pink font-headline-sm text-headline-sm block">12+</span>
                <span className="font-label-md text-label-md text-on-surface-variant">Projects Done</span>
              </div>
              <div className="bg-white p-6 rounded-xl soft-shadow text-center hover:scale-105 transition-transform">
                <span className="text-rose-pink font-headline-sm text-headline-sm block">5+</span>
                <span className="font-label-md text-label-md text-on-surface-variant">Organizations</span>
              </div>
              <div className="bg-white p-6 rounded-xl soft-shadow text-center hover:scale-105 transition-transform">
                <span className="text-rose-pink font-headline-sm text-headline-sm block">10+</span>
                <span className="font-label-md text-label-md text-on-surface-variant">Skills Mastered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
