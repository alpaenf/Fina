"use client";

import { useState } from "react";
import Image from "next/image";

interface Certificate {
  id: number;
  year: string;
  title: string;
  issuer: string;
  description: string;
  image: string;
}

export default function Certificates() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const certificatesData: Certificate[] = [
    {
      id: 1,
      year: "2023",
      title: "Sertifikat Pertama",
      issuer: "Lembaga Sertifikasi A",
      description: "Deskripsi singkat tentang pencapaian pada sertifikat pertama ini. Penghargaan atas dedikasi dan keterampilan dalam bidang digital.",
      image: "https://placehold.co/800x600/e2e8f0/0f172a?text=Sertifikat+1"
    },
    {
      id: 2,
      year: "2024",
      title: "Sertifikat Kedua",
      issuer: "Penyelenggara Bootcamp B",
      description: "Deskripsi singkat tentang pencapaian pada sertifikat kedua ini. Bukti kelulusan bootcamp intensif front-end development.",
      image: "https://placehold.co/800x600/e2e8f0/0f172a?text=Sertifikat+2"
    },
    {
      id: 3,
      year: "2025",
      title: "Sertifikat Ketiga",
      issuer: "Penyelenggara / Lembaga",
      description: "Deskripsi singkat tentang pencapaian pada sertifikat ketiga ini. Keikutsertaan sebagai Panitia Workshop tingkat nasional.",
      image: "https://placehold.co/800x600/e2e8f0/0f172a?text=Sertifikat+3"
    }
  ];

  const nextCert = () => {
    setCurrentIndex((prev) => (prev + 1) % certificatesData.length);
  };

  const prevCert = () => {
    setCurrentIndex((prev) => (prev - 1 + certificatesData.length) % certificatesData.length);
  };

  const current = certificatesData[currentIndex];

  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden" id="sertifikat">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16 lg:mb-24 reveal">
          <span className="text-accent text-sm font-bold tracking-widest uppercase mb-3 block">Penghargaan</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight">
            Sertifikat & Lisensi
          </h2>
        </div>

        {/* Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Image Stack with Animation */}
          <div className="relative reveal">
            {/* Background stacked cards effect (Light theme version) */}
            <div className="absolute inset-0 bg-outline-variant/30 rounded-[32px] transform translate-x-4 translate-y-4 -z-20"></div>
            <div className="absolute inset-0 bg-outline-variant/60 rounded-[32px] transform translate-x-2 translate-y-2 -z-10"></div>
            
            {/* Main Certificate Card with key attribute to trigger animation on change */}
            <div 
              key={`image-${current.id}`}
              className="relative rounded-[32px] overflow-hidden aspect-[4/3] w-full border border-outline-variant/40 shadow-xl cursor-pointer bg-surface animate-fade-in-up"
              onClick={nextCert}
            >
              <Image
                src={current.image}
                alt={current.title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              {/* Gradient Overlay & Text (Light Theme Adaptation) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex flex-col justify-end p-6 md:p-8 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-white text-xl md:text-2xl font-bold">{current.title}</h4>
                <p className="text-white/80 text-sm md:text-base">{current.issuer}</p>
              </div>
            </div>

            {/* Magnifier Icon below image */}
            <div className="flex justify-center mt-8">
              <button className="w-12 h-12 rounded-full border border-outline-variant bg-surface flex items-center justify-center text-on-surface-variant hover:text-accent hover:border-accent hover:shadow-md transition-all duration-300">
                <span className="material-symbols-outlined text-[20px]">search</span>
              </button>
            </div>
          </div>

          {/* Right: Content Details */}
          <div className="reveal delay-100 flex flex-col">
            <div key={`text-${current.id}`} className="animate-fade-in-up">
              {/* Accent Line */}
              <div className="w-12 h-1.5 bg-accent rounded-full mb-8"></div>
              
              <span className="text-on-surface-variant text-sm font-bold tracking-widest mb-2 uppercase">
                {current.year}
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-on-surface mb-3 leading-tight">
                {current.title}
              </h3>
              <p className="text-accent font-semibold text-lg mb-6">
                {current.issuer}
              </p>
              
              <p className="text-on-surface-variant text-base md:text-lg leading-relaxed mb-10 max-w-lg">
                {current.description}
              </p>
            </div>
            
            <div>
              <button className="px-6 py-3 bg-primary hover:bg-accent hover:shadow-lg text-primary-inverse text-sm font-bold rounded-full inline-flex items-center space-x-2 transition-all duration-300">
                <span>Lihat detail</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>

            {/* Navigation Controls */}
            <div className="mt-16 pt-8 border-t border-outline-variant/40">
              <div className="flex items-center space-x-6">
                <button 
                  onClick={prevCert}
                  className="w-12 h-12 rounded-full border border-outline-variant bg-surface flex items-center justify-center text-on-surface hover:text-accent hover:border-accent hover:shadow-md transition-all duration-300"
                >
                  <span className="material-symbols-outlined text-[24px]">chevron_left</span>
                </button>
                
                {/* Dots indicator */}
                <div className="flex items-center space-x-2">
                  {certificatesData.map((_, idx) => (
                    <div 
                      key={idx}
                      className={`h-2.5 rounded-full transition-all duration-500 ease-out ${
                        idx === currentIndex ? "w-8 bg-accent" : "w-2.5 bg-outline-variant"
                      }`}
                    ></div>
                  ))}
                </div>

                <button 
                  onClick={nextCert}
                  className="w-12 h-12 rounded-full border border-outline-variant bg-surface flex items-center justify-center text-on-surface hover:text-accent hover:border-accent hover:shadow-md transition-all duration-300"
                >
                  <span className="material-symbols-outlined text-[24px]">chevron_right</span>
                </button>
              </div>
              <p className="text-on-surface-variant text-sm mt-5 font-semibold">
                {currentIndex + 1} / {certificatesData.length} · Klik kartu atau {'->'} untuk next
              </p>
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
  );
}
