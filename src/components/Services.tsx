"use client";

interface ServicesProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

export default function Services({ onNavClick }: ServicesProps) {
  const serviceItems = [
    {
      icon: "dashboard",
      title: "UI/UX Design",
      description: "Merancang antarmuka pengguna yang intuitif dan estetis, memastikan pengalaman digital yang mulus dan memuaskan."
    },
    {
      icon: "edit_note",
      title: "Content Creation",
      description: "Memproduksi konten kreatif yang relevan dan menarik untuk berbagai platform media sosial dan kebutuhan digital."
    },
    {
      icon: "campaign",
      title: "Social Media",
      description: "Mengelola kampanye dan strategi media sosial untuk meningkatkan engagement dan reach audiens yang tepat."
    }
  ];

  return (
    <section className="py-stack-lg bg-surface relative" id="layanan">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-stack-lg reveal">
          <span className="text-accent font-label-md tracking-widest uppercase mb-3 block">Expertise</span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4 tracking-tight">
            Layanan & Keahlian
          </h2>
          <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
            Menyediakan solusi komprehensif dari desain hingga strategi konten untuk membantu Anda mencapai tujuan digital.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <div 
              key={service.title} 
              className="group bg-surface border border-outline-variant/40 p-8 rounded-[24px] hover-shadow reveal transition-all duration-300 hover:border-accent/30 relative overflow-hidden"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Background Hover Effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-soft rounded-full blur-2xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-surface-muted border border-outline-variant/50 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-accent group-hover:text-primary-inverse transition-colors duration-300">
                  <span className="material-symbols-outlined text-[28px]">{service.icon}</span>
                </div>
                <h3 className="font-headline-sm text-[22px] mb-4 text-on-surface tracking-tight group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <a 
                  href="#kontak"
                  onClick={(e) => onNavClick(e, "kontak")}
                  className="inline-flex items-center space-x-2 text-primary font-label-md text-[13px] group-hover:text-accent transition-colors"
                >
                  <span>Mulai Proyek</span>
                  <span className="material-symbols-outlined text-[16px] transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
