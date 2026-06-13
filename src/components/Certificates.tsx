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

  // Data sertifikat (bisa diganti dengan data asli nanti)
  const certificatesData: Certificate[] = [
    {
      id: 1,
      year: "2023",
      title: "Sertifikat Pertama",
      issuer: "Lembaga Sertifikasi A",
      description: "Deskripsi singkat tentang pencapaian pada sertifikat pertama ini. Penghargaan atas dedikasi dan keterampilan dalam bidang digital.",
      image: "https://placehold.co/800x600/1e293b/ffffff?text=Sertifikat+1"
    },
    {
      id: 2,
      year: "2024",
      title: "Sertifikat Kedua",
      issuer: "Penyelenggara Bootcamp B",
      description: "Deskripsi singkat tentang pencapaian pada sertifikat kedua ini. Bukti kelulusan bootcamp intensif front-end development.",
      image: "https://placehold.co/800x600/1e293b/ffffff?text=Sertifikat+2"
    },
    {
      id: 3,
      year: "2025",
      title: "Sertifikat Ketiga",
      issuer: "Penyelenggara / Lembaga",
      description: "Deskripsi singkat tentang pencapaian pada sertifikat ketiga ini. Keikutsertaan sebagai Panitia Workshop tingkat nasional.",
      image: "https://placehold.co/800x600/1e293b/ffffff?text=Sertifikat+3"
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
    <section className="py-20 lg:py-32 bg-[#0B1121]" id="sertifikat">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Title */}
        <div className="text-center mb-16 lg:mb-24 reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Sertifikat
          </h2>
        </div>

        {/* Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Image Stack */}
          <div className="relative reveal">
            {/* Background stacked cards effect */}
            <div className="absolute inset-0 bg-[#1E293B] rounded-2xl transform translate-x-4 translate-y-4 -z-20 opacity-40"></div>
            <div className="absolute inset-0 bg-[#334155] rounded-2xl transform translate-x-2 translate-y-2 -z-10 opacity-60"></div>
            
            {/* Main Certificate Card */}
            <div 
              className="relative rounded-2xl overflow-hidden aspect-[4/3] w-full border border-white/10 shadow-2xl group cursor-pointer"
              onClick={nextCert}
            >
              <Image
                src={current.image}
                alt={current.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient Overlay & Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1121]/90 via-[#0B1121]/20 to-transparent flex flex-col justify-end p-6 md:p-8">
                <h4 className="text-white text-xl md:text-2xl font-bold">{current.title}</h4>
                <p className="text-slate-300 text-sm md:text-base">{current.issuer}</p>
              </div>
            </div>

            {/* Magnifier Icon below image */}
            <div className="flex justify-center mt-6">
              <button className="w-12 h-12 rounded-full border border-white/20 bg-transparent flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors">
                <span className="material-symbols-outlined text-[20px]">search</span>
              </button>
            </div>
          </div>

          {/* Right: Content Details */}
          <div className="reveal delay-100 flex flex-col">
            {/* Accent Line */}
            <div className="w-12 h-1.5 bg-emerald-400 rounded-full mb-8"></div>
            
            <span className="text-slate-400 text-sm font-semibold tracking-widest mb-2">
              {current.year}
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
              {current.title}
            </h3>
            <p className="text-slate-300 text-lg mb-6">
              {current.issuer}
            </p>
            
            <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-10 max-w-lg">
              {current.description}
            </p>
            
            <div>
              <button className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold rounded-full inline-flex items-center space-x-2 transition-colors border border-slate-700">
                <span>Lihat detail</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>

            {/* Navigation Controls */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <div className="flex items-center space-x-6">
                <button 
                  onClick={prevCert}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-white/10 transition-colors"
                >
                  <span className="material-symbols-outlined text-[24px]">chevron_left</span>
                </button>
                
                {/* Dots indicator */}
                <div className="flex items-center space-x-2">
                  {certificatesData.map((_, idx) => (
                    <div 
                      key={idx}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === currentIndex ? "w-6 bg-red-500" : "w-2 bg-slate-600"
                      }`}
                    ></div>
                  ))}
                </div>

                <button 
                  onClick={nextCert}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-white/10 transition-colors"
                >
                  <span className="material-symbols-outlined text-[24px]">chevron_right</span>
                </button>
              </div>
              <p className="text-slate-500 text-sm mt-4 font-medium">
                {currentIndex + 1} / {certificatesData.length} · Klik kartu atau {'->'} untuk next
              </p>
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
  );
}
