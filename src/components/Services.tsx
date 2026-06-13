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
    <section className="py-20 lg:py-32 bg-surface relative" id="layanan">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <span className="text-accent text-sm font-bold tracking-widest uppercase mb-3 block">Expertise</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface mb-6 tracking-tight">
            Layanan & Keahlian
          </h2>
          <p className="text-base text-on-surface-variant max-w-2xl mx-auto">
            Menyediakan solusi komprehensif dari desain hingga strategi konten untuk membantu Anda mencapai tujuan digital.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {serviceItems.map((service, index) => (
            <div 
              key={service.title} 
              className="group bg-surface border border-outline-variant/40 p-8 md:p-10 rounded-[24px] hover-shadow reveal transition-all duration-300 hover:border-accent/30 relative overflow-hidden"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Background Hover Effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-soft rounded-full blur-2xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-surface-muted border border-outline-variant/50 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-accent group-hover:text-primary-inverse transition-colors duration-300 shadow-sm">
                  <span className="material-symbols-outlined text-[28px]">{service.icon}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-on-surface tracking-tight group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
                  {service.description}
                </p>
                <a 
                  href="#kontak"
                  onClick={(e) => onNavClick(e, "kontak")}
                  className="inline-flex items-center space-x-2 text-primary font-bold text-[13px] uppercase tracking-wider group-hover:text-accent transition-colors"
                >
                  <span>Mulai Proyek</span>
                  <span className="material-symbols-outlined text-[18px] transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
