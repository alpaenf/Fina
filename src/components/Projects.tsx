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
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Learning Platform UI",
      category: "Web Design • Branding",
      description: "Redesain antarmuka platform pembelajaran untuk meningkatkan retensi pengguna.",
      tags: ["Figma", "UI/UX"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcMvM3761yC09XSZFJCMmPmKxIla_Ym6YXqNurKn6JSl4lKfCVOVkhuVPqLUJnPP-W-v-1Zc7Lk7MJh0D-UCnUcO8jAeNIa0lxpXfYbS9IyrhVbt8oCZ2qlpBVJOWzMGS2rJdFsL0dXA85FNhxXUcHJLa1in9_1XO0ON7Yd7dD15C5iDcLzm9FfVd9cqLZ-B7Lpu-Fk8I2of2-6cFUKMhM4I1CKq_y25aWGp_BThJhHCROUviPVyufEbFqhwLobju9w8iCjI8H4oU",
    },
    {
      id: 2,
      title: "Social Brand Campaign",
      category: "Social Media • Marketing",
      description: "Strategi konten organik yang meningkatkan engagement brand hingga 40% dalam 3 bulan.",
      tags: ["Canva", "Strategy"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2XBabVpnTvPhAEM04sX4vk4AG7kXEhWde23tzqg3IRABXaoOAnkPUlkNVMawv187TRw-FMpVqYEFzsb6dCX9DV7v8MS6qG_hGluSqfxS364iYXKdhffsdrqXEDC2YC_FPhLfeJe3tvcHzBC3cgkAIRqqe9DAKisjQt7ivo8tR8lLFwQslrq2f7oWYD-djl3_KLoqiq_ngZO0T1tgg0IjXMWClamLgdGCQqBrYUe7uBJB1cyMT9a-9OLPuMCf5fKhZsqQjiV7b-Tc",
    },
    {
      id: 3,
      title: "E-Commerce Dashboard",
      category: "UI/UX • Development",
      description: "Desain sistem administrasi penjualan online dengan modul analitik dan manajemen inventaris.",
      tags: ["Figma", "Next.js"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcMvM3761yC09XSZFJCMmPmKxIla_Ym6YXqNurKn6JSl4lKfCVOVkhuVPqLUJnPP-W-v-1Zc7Lk7MJh0D-UCnUcO8jAeNIa0lxpXfYbS9IyrhVbt8oCZ2qlpBVJOWzMGS2rJdFsL0dXA85FNhxXUcHJLa1in9_1XO0ON7Yd7dD15C5iDcLzm9FfVd9cqLZ-B7Lpu-Fk8I2of2-6cFUKMhM4I1CKq_y25aWGp_BThJhHCROUviPVyufEbFqhwLobju9w8iCjI8H4oU",
    },
    {
      id: 4,
      title: "Creative Branding Identity",
      category: "Branding • Content",
      description: "Pengembangan visual identity lengkap mulai dari logo, palet warna, hingga panduan media sosial.",
      tags: ["Canva", "Branding"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2XBabVpnTvPhAEM04sX4vk4AG7kXEhWde23tzqg3IRABXaoOAnkPUlkNVMawv187TRw-FMpVqYEFzsb6dCX9DV7v8MS6qG_hGluSqfxS364iYXKdhffsdrqXEDC2YC_FPhLfeJe3tvcHzBC3cgkAIRqqe9DAKisjQt7ivo8tR8lLFwQslrq2f7oWYD-djl3_KLoqiq_ngZO0T1tgg0IjXMWClamLgdGCQqBrYUe7uBJB1cyMT9a-9OLPuMCf5fKhZsqQjiV7b-Tc",
    },
  ];

  const handlePrevProject = () => {
    setCurrentProjectIndex((prev) => (prev === 0 ? Math.ceil(projects.length / 2) - 1 : prev - 1));
  };

  const handleNextProject = () => {
    setCurrentProjectIndex((prev) => (prev >= Math.ceil(projects.length / 2) - 1 ? 0 : prev + 1));
  };

  const displayedProjects = projects.slice(currentProjectIndex * 2, currentProjectIndex * 2 + 2);

  return (
    <section className="py-stack-lg bg-surface" id="proyek">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row justify-between items-end mb-stack-lg gap-6 reveal">
          <div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">
              Proyek Pilihan
            </h2>
            <p className="text-on-surface-variant max-w-xl">
              Intip beberapa karya terbaik saya yang menggabungkan strategi bisnis dengan eksekusi kreatif yang matang.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handlePrevProject}
              aria-label="Previous Projects"
              className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-rose-pink hover:text-white hover:border-rose-pink transition-all active:scale-90"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button
              onClick={handleNextProject}
              aria-label="Next Projects"
              className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-rose-pink hover:text-white hover:border-rose-pink transition-all active:scale-90"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              className="group reveal transition-all duration-500"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 soft-shadow h-[400px] w-full">
                <Image
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  src={project.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <span className="text-white font-label-md text-label-md">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-headline-sm text-headline-sm mb-2">{project.title}</h4>
                  <p className="text-on-surface-variant font-body-md text-body-md mb-4">
                    {project.description}
                  </p>
                  <div className="flex gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-surface-container px-3 py-1 rounded text-[12px] font-bold text-on-surface-variant"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center soft-shadow text-rose-pink hover:bg-rose-pink hover:text-white transition-all hover:scale-105"
                  href="#kontak"
                  onClick={(e) => onNavClick(e, "kontak")}
                >
                  <span className="material-symbols-outlined text-base">north_east</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
