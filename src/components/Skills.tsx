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
    <section className="py-stack-lg bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-surface-muted transform -skew-x-12 translate-x-20 z-0 opacity-50 hidden lg:block"></div>
      
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="text-center md:text-left mb-16 reveal">
          <span className="text-accent font-label-md tracking-widest uppercase mb-3 block">Toolkit</span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight">
            Keahlian & Teknologi
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="reveal" style={{ transitionDelay: `${idx * 150}ms` }}>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 rounded bg-accent/10 flex items-center justify-center text-accent">
                  <span className="material-symbols-outlined text-[18px]">
                    {idx === 0 ? "design_services" : idx === 1 ? "campaign" : "code"}
                  </span>
                </div>
                <h3 className="font-headline-sm text-[20px] text-on-surface">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="px-4 py-2 bg-surface border border-outline-variant/40 rounded-full text-on-surface-variant font-medium text-sm hover:border-accent hover:text-accent hover:shadow-md transition-all duration-300 cursor-default"
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
