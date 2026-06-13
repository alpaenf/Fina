"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Scroll handler for navbar styling and active nav link highlighting
  useEffect(() => {
    const handleScroll = () => {
      // Toggle navbar height and shadows on scroll
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Detect active section based on current scroll position
      const scrollPos = window.scrollY + 150;
      const sections = ["home", "tentang", "layanan", "proyek", "sertifikat", "pengalaman", "kontak"];
      
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Trigger scroll detection on load
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for scroll reveal animations
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => {
      reveals.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Handle smooth offset scrolling for inner links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const offset = 80; // Height of the fixed navigation bar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen">
      {/* Scroll-reactive Navigation Bar */}
      <Navbar activeSection={activeSection} scrolled={scrolled} onNavClick={handleNavClick} />
      
      {/* Main Page Sections */}
      <main>
        <Hero onNavClick={handleNavClick} />
        <About />
        <Services onNavClick={handleNavClick} />
        <Projects onNavClick={handleNavClick} />
        <Certificates />
        <Experience />
        <Skills />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer onNavClick={handleNavClick} />
    </div>
  );
}
