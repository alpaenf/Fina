"use client";

import { useState } from "react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
}

interface ProjectsProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

export default function Projects({ onNavClick }: ProjectsProps) {
  const [filter, setFilter] = useState("Semua");

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Redesign",
      category: "UI/UX Design",
      description: "Memperbarui antarmuka aplikasi belanja untuk meningkatkan konversi dan kenyamanan pengguna.",
      tags: ["Figma", "Prototyping", "UX Research"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcMvM3761yC09XSZFJCMmPmKxIla_Ym6YXqNurKn6JSl4lKfCVOVkhuVPqLUJnPP-W-v-1Zc7Lk7MJh0D-UCnUcO8jAeNIa0lxpXfYbS9IyrhVbt8oCZ2qlpBVJOWzMGS2rJdFsL0dXA85FNhxXUcHJLa1in9_1XO0ON7Yd7dD15C5iDcLzm9FfVd9cqLZ-B7Lpu-Fk8I2of2-6cFUKMhM4I1CKq_y25aWGp_BThJhHCROUviPVyufEbFqhwLobju9w8iCjI8H4oU"
    },
    {
      id: 2,
      title: "Social Media Campaign",
      category: "Content Creation",
      description: "Kampanye digital 360 derajat untuk peluncuran produk kosmetik lokal.",
      tags: ["Instagram", "TikTok", "Copywriting"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2XBabVpnTvPhAEM04sX4vk4AG7kXEhWde23tzqg3IRABXaoOAnkPUlkNVMawv187TRw-FMpVqYEFzsb6dCX9DV7v8MS6qG_hGluSqfxS364iYXKdhffsdrqXEDC2YC_FPhLfeJe3tvcHzBC3cgkAIRqqe9DAKisjQt7ivo8tR8lLFwQslrq2f7oWYD-djl3_KLoqiq_ngZO0T1tgg0IjXMWClamLgdGCQqBrYUe7uBJB1cyMT9a-9OLPuMCf5fKhZsqQjiV7b-Tc"
    },
    {
      id: 3,
      title: "Company Profile Website",
      category: "Web Development",
      description: "Desain dan pengembangan website company profile berbasis Next.js.",
      tags: ["Next.js", "Tailwind CSS", "Web Design"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcMvM3761yC09XSZFJCMmPmKxIla_Ym6YXqNurKn6JSl4lKfCVOVkhuVPqLUJnPP-W-v-1Zc7Lk7MJh0D-UCnUcO8jAeNIa0lxpXfYbS9IyrhVbt8oCZ2qlpBVJOWzMGS2rJdFsL0dXA85FNhxXUcHJLa1in9_1XO0ON7Yd7dD15C5iDcLzm9FfVd9cqLZ-B7Lpu-Fk8I2of2-6cFUKMhM4I1CKq_y25aWGp_BThJhHCROUviPVyufEbFqhwLobju9w8iCjI8H4oU"
    }
  ];

  const categories = ["Semua", "UI/UX Design", "Content Creation", "Web Development"];
  const filteredProjects = filter === "Semua" ? projects : projects.filter(p => p.category === filter);

  return (
    <section className="py-stack-lg bg-background" id="proyek">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="text-accent font-label-md tracking-widest uppercase mb-3 block">Portfolio</span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6 tracking-tight">
            Proyek Pilihan
          </h2>
          
          {/* Minimal Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full font-label-md text-[13px] transition-all duration-300 ${
                  filter === cat 
                    ? "bg-primary text-primary-inverse" 
                    : "bg-surface border border-outline-variant/40 text-on-surface-variant hover:border-outline hover:text-on-surface"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="group rounded-[24px] overflow-hidden bg-surface border border-outline-variant/30 reveal soft-shadow hover:shadow-xl transition-all duration-500"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <a href="#kontak" onClick={(e) => onNavClick(e, "kontak")} className="w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300">
                    <span className="material-symbols-outlined text-[20px]">arrow_outward</span>
                  </a>
                </div>
              </div>
              <div className="p-6">
                <p className="text-accent text-[12px] font-bold tracking-wider uppercase mb-2">
                  {project.category}
                </p>
                <h3 className="font-headline-sm text-[20px] text-on-surface mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-on-surface-variant text-sm mb-5 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-surface-muted text-on-surface-variant text-[11px] font-medium rounded-md border border-outline-variant/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
