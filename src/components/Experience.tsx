export default function Experience() {
  const experiences = [
    {
      period: "2023 - Sekarang",
      role: "Internship Product Designer",
      company: "Creative Agency XYZ",
      description: "Bertanggung jawab dalam merancang user flow dan prototyping untuk klien-klien tier-1.",
      align: "right", // align timeline text relative to center line on desktop
    },
    {
      period: "2022 - 2023",
      role: "Ketua Divisi Kreatif",
      company: "BEM Fakultas",
      description: "Memimpin tim 15 orang dalam produksi konten digital untuk acara-acara berskala nasional.",
      align: "left",
    },
    {
      period: "2021 - 2022",
      role: "Relawan Digital Marketing",
      company: "NGO Lingkungan Hidup",
      description: "Membantu meningkatkan awareness kampanye melalui optimalisasi platform media sosial.",
      align: "right",
    },
  ];

  return (
    <section className="py-stack-lg" id="pengalaman">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-stack-lg reveal">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">
            Pengalaman
          </h2>
          <div className="h-1 w-20 bg-rose-pink mx-auto rounded-full"></div>
        </div>
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Center Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-soft-pink/30 -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-stack-md">
            {experiences.map((exp, index) => (
              <div
                key={exp.role}
                className="relative flex flex-col md:flex-row items-center md:justify-between group reveal"
              >
                {/* Desktop Left Side Period (for right-aligned cards) */}
                {exp.align === "right" ? (
                  <div className="hidden md:block w-[45%] text-right pr-stack-md">
                    <span className="text-rose-pink font-label-md text-label-md font-semibold">
                      {exp.period}
                    </span>
                  </div>
                ) : (
                  <div className="hidden md:block w-[45%]"></div>
                )}

                {/* Timeline Pin */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-white border-2 border-rose-pink rounded-full -translate-x-1/2 z-10 hidden md:block group-hover:bg-rose-pink transition-colors"></div>

                {/* Card Container */}
                <div
                  className={`md:w-[45%] bg-white p-6 rounded-xl soft-shadow relative w-full border border-outline-variant/10 hover:border-rose-pink/20 transition-all hover:shadow-md ${
                    exp.align === "right" ? "md:ml-stack-md" : "md:mr-stack-md text-left md:text-right"
                  }`}
                >
                  <span className="md:hidden text-rose-pink font-label-md text-label-md mb-2 block font-semibold">
                    {exp.period}
                  </span>
                  <h4 className="font-headline-sm text-[20px] mb-1 font-bold">
                    {exp.role}
                  </h4>
                  <p className="text-secondary font-medium text-sm mb-3">{exp.company}</p>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                {/* Desktop Right Side Period (for left-aligned cards) */}
                {exp.align === "left" ? (
                  <div className="hidden md:block w-[45%] text-left pl-stack-md">
                    <span className="text-rose-pink font-label-md text-label-md font-semibold">
                      {exp.period}
                    </span>
                  </div>
                ) : (
                  <div className="hidden md:block w-[45%]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
