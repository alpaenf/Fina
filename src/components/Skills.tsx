export default function Skills() {
  const skillCategories = [
    {
      title: "Design & Prototyping",
      skills: ["Figma", "Adobe XD", "UI/UX Design", "Wireframing", "Design Systems"]
    },
    {
      title: "Digital Marketing",
      skills: ["Social Media Strategy", "Content Creation", "Copywriting", "SEO Basics", "Data Analytics"]
    },
    {
      title: "Development Tools",
      skills: ["HTML & CSS", "Next.js Basics", "Tailwind CSS", "Git / GitHub", "WordPress"]
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-surface-muted transform -skew-x-12 translate-x-20 z-0 opacity-50 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="text-center md:text-left mb-16 reveal">
          <span className="text-accent text-sm font-bold tracking-widest uppercase mb-3 block">Toolkit</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight">
            Keahlian & Teknologi
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="reveal bg-surface p-8 rounded-[24px] border border-outline-variant/30 soft-shadow" style={{ transitionDelay: `${idx * 150}ms` }}>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  <span className="material-symbols-outlined text-[24px]">
                    {idx === 0 ? "design_services" : idx === 1 ? "campaign" : "code"}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-on-surface">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="px-4 py-2 bg-background border border-outline-variant/40 rounded-full text-on-surface-variant font-semibold text-xs md:text-sm hover:border-accent hover:text-accent hover:shadow-sm transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
