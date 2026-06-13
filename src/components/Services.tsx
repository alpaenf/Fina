"use client";

interface ServicesProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

export default function Services({ onNavClick }: ServicesProps) {
  const serviceItems = [
    {
      icon: "dashboard",
      title: "UI/UX Design",
      description: "Menciptakan antarmuka yang intuitif dan menarik secara visual untuk pengalaman pengguna yang luar biasa.",
      delay: "0ms",
    },
    {
      icon: "edit_note",
      title: "Content Creation",
      description: "Produksi konten kreatif berupa tulisan, grafis, dan video yang mampu menyampaikan pesan brand Anda secara efektif.",
      delay: "100ms",
    },
    {
      icon: "campaign",
      title: "Social Media",
      description: "Strategi dan manajemen media sosial untuk meningkatkan engagement dan kehadiran digital yang profesional.",
      delay: "200ms",
    },
  ];

  return (
    <section className="py-stack-lg" id="layanan">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-stack-lg reveal">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">
            Layanan
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Providing high-end digital solutions tailored to your professional and creative needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {serviceItems.map((service) => (
            <div
              key={service.title}
              className="group bg-white p-8 rounded-2xl soft-shadow transition-all duration-300 hover:-translate-y-2 hover-shadow reveal"
              style={{ transitionDelay: service.delay }}
            >
              <div className="w-16 h-16 bg-soft-pink/10 rounded-xl flex items-center justify-center mb-6 text-rose-pink group-hover:bg-rose-pink group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-4xl">{service.icon}</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm mb-4">{service.title}</h3>
              <p className="text-on-surface-variant font-body-md text-body-md mb-6">
                {service.description}
              </p>
              <a
                className="text-rose-pink font-label-md text-label-md flex items-center gap-2 hover:gap-4 transition-all"
                href="#kontak"
                onClick={(e) => onNavClick(e, "kontak")}
              >
                Pelajari Lebih Lanjut <span className="material-symbols-outlined text-base">arrow_forward</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
