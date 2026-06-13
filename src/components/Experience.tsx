export default function Experience() {
  const experiences = [
    {
      period: "2023 - Sekarang",
      role: "Internship Product Designer",
      company: "Creative Agency XYZ",
      description: "Membantu merancang antarmuka pengguna untuk aplikasi klien korporat. Melakukan user research dasar dan menyusun wireframe interaktif."
    },
    {
      period: "2022 - 2023",
      role: "Ketua Divisi Komunikasi",
      company: "BEM Fakultas",
      description: "Memimpin tim beranggotakan 10 orang untuk mengelola seluruh kanal media sosial fakultas. Meningkatkan engagement rate Instagram sebesar 45%."
    },
    {
      period: "2021 - 2022",
      role: "Freelance Social Media Specialist",
      company: "Berbagai UMKM Lokal",
      description: "Menyusun strategi konten dan kalender editorial untuk 3 UMKM, membantu mereka membangun brand identity digital dari nol."
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-surface-muted relative" id="pengalaman">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        <div className="text-center mb-16 reveal">
          <span className="text-accent text-sm font-bold tracking-widest uppercase mb-3 block">Journey</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight">
            Pengalaman
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Vertical line indicator */}
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-outline-variant/60 before:to-transparent">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group reveal is-active`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Timeline Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-surface-muted bg-surface text-accent shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform group-hover:scale-110 group-hover:bg-accent group-hover:text-white group-hover:border-accent-soft">
                  <span className="material-symbols-outlined text-[16px]">work</span>
                </div>
                
                {/* Content Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-surface border border-outline-variant/30 p-6 md:p-8 rounded-2xl soft-shadow group-hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col mb-3">
                    <span className="text-accent text-[12px] font-bold tracking-wider uppercase mb-2">
                      {exp.period}
                    </span>
                    <h4 className="text-lg md:text-xl font-bold text-on-surface leading-tight">
                      {exp.role}
                    </h4>
                  </div>
                  <p className="text-on-surface-variant font-bold text-[13px] mb-4 uppercase tracking-widest">
                    {exp.company}
                  </p>
                  <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
