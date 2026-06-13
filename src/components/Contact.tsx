"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{ type: "success" | "error" | ""; message: string }>({
    type: "",
    message: "",
  });

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ type: "error", message: "Mohon isi semua data yang wajib." });
      return;
    }

    setIsSubmitting(true);
    setFormStatus({ type: "", message: "" });

    try {
      // Simulate API request delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFormStatus({
        type: "success",
        message: "Terima kasih! Pesan Anda telah berhasil dikirim. Saya akan segera menghubungi Anda.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setFormStatus({
        type: "error",
        message: "Maaf, terjadi kesalahan saat mengirim pesan. Silakan coba kembali.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-stack-lg" id="kontak">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg">
          <div className="reveal">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6">
              Let's Create Something Great Together
            </h2>
            <p className="font-body-lg text-on-surface-variant mb-stack-md">
              Ingin berkolaborasi atau sekadar menyapa? Jangan ragu untuk menghubungi saya melalui formulir ini atau media sosial.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-soft-pink/10 flex items-center justify-center text-rose-pink shadow-sm">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <p className="text-sm text-on-surface-variant">Email</p>
                  <p className="font-bold">fina.julianti@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-soft-pink/10 flex items-center justify-center text-rose-pink shadow-sm">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <p className="text-sm text-on-surface-variant">Lokasi</p>
                  <p className="font-bold">Jakarta, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-2xl soft-shadow reveal border border-outline-variant/10">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-label-md text-label-md mb-2 text-on-surface-variant">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-surface p-4 rounded-xl border border-outline-variant/30 focus:border-rose-pink focus:ring-2 focus:ring-rose-pink focus:outline-none transition-all text-on-surface font-body-md"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block font-label-md text-label-md mb-2 text-on-surface-variant">
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-surface p-4 rounded-xl border border-outline-variant/30 focus:border-rose-pink focus:ring-2 focus:ring-rose-pink focus:outline-none transition-all text-on-surface font-body-md"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div>
                <label className="block font-label-md text-label-md mb-2 text-on-surface-variant">
                  Pesan
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-surface p-4 rounded-xl border border-outline-variant/30 focus:border-rose-pink focus:ring-2 focus:ring-rose-pink focus:outline-none transition-all text-on-surface font-body-md"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-rose-pink text-white py-4 rounded-xl font-headline-sm text-[18px] hover:bg-secondary transition-all active:scale-95 soft-shadow hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Mengirim...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <span className="material-symbols-outlined text-xl">send</span>
                  </>
                )}
              </button>
            </form>

            {formStatus.type && (
              <div
                className={`mt-4 p-4 rounded-xl text-center text-sm font-semibold transition-all duration-300 ${
                  formStatus.type === "success"
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                {formStatus.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
