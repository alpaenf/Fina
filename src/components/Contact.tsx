"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section className="py-20 lg:py-32 bg-surface-muted relative" id="kontak">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="reveal">
            <span className="text-accent text-sm font-bold tracking-widest uppercase mb-3 block">Get in Touch</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface mb-6 tracking-tight">
              Mari Berkolaborasi!
            </h2>
            <p className="text-base text-on-surface-variant mb-10 max-w-md">
              Tertarik untuk bekerja sama, berdiskusi mengenai proyek, atau sekadar menyapa? Jangan ragu untuk menghubungi saya melalui formulir ini atau langsung melalui email.
            </p>
            
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-center md:items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm shrink-0">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-on-surface uppercase tracking-wider mb-1">Email</h4>
                  <a href="mailto:hello@finajulianti.com" className="text-sm md:text-base font-semibold text-on-surface-variant hover:text-accent transition-colors">
                    hello@finajulianti.com
                  </a>
                </div>
              </div>
              <div className="flex items-center md:items-start space-x-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm shrink-0">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-on-surface uppercase tracking-wider mb-1">Lokasi</h4>
                  <p className="text-sm md:text-base font-semibold text-on-surface-variant">
                    Jakarta, Indonesia <br className="hidden md:block"/> <span className="font-normal">(Available for remote work)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal delay-100 mt-12 lg:mt-0">
            <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 md:p-12 rounded-[32px] soft-shadow border border-outline-variant/30">
              <h3 className="text-2xl font-bold mb-8 text-on-surface">Kirim Pesan</h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-surface-muted border border-outline-variant/50 rounded-xl px-4 py-3 text-sm md:text-base text-on-surface focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                    placeholder="Masukkan nama Anda"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">Alamat Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-surface-muted border border-outline-variant/50 rounded-xl px-4 py-3 text-sm md:text-base text-on-surface focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                    placeholder="email@anda.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">Pesan</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full bg-surface-muted border border-outline-variant/50 rounded-xl px-4 py-3 text-sm md:text-base text-on-surface focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none"
                    placeholder="Ceritakan tentang proyek Anda..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl text-sm font-bold flex items-center justify-center space-x-2 transition-all duration-300 ${
                    isSubmitting ? "bg-outline text-on-surface-variant cursor-not-allowed" : "bg-primary text-primary-inverse hover:bg-accent hover:shadow-lg"
                  }`}
                >
                  <span>{isSubmitting ? "Mengirim..." : "Kirim Pesan"}</span>
                  {!isSubmitting && <span className="material-symbols-outlined text-[18px]">send</span>}
                </button>

                {submitStatus === "success" && (
                  <div className="p-4 bg-green-50 text-green-700 rounded-xl text-sm font-semibold text-center border border-green-200 animate-fade-in-up">
                    Pesan Anda berhasil dikirim! Saya akan segera merespons.
                  </div>
                )}
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
