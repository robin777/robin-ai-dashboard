"use client";

import { useState } from "react";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import AboutSection from "@/components/landing/AboutSection";
import ContactSection from "@/components/landing/ContactSection";
import Marquee from "@/components/landing/Marquee";
import FeaturesSection from "@/components/landing/FeaturesSection";
import DepartmentBoxes from "@/components/landing/DepartmentBoxes";
import Footer from "@/components/landing/Footer";
import AnimatedBackground from "@/components/shared/AnimatedBackground";
import ScrollReveal from "@/components/landing/ScrollReveal";

export default function HomePage() {
  const [activeView, setActiveView] = useState("home");

  return (
    <>
      <AnimatedBackground intensity="hero" />
      <div className="noise-overlay"></div>
      <Navbar activeView={activeView} setActiveView={setActiveView} />
      <main className="tw-relative tw-z-10">
        {activeView === "home" ? (
          <>
            <ScrollReveal>
              <Hero />
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <Marquee />
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <FeaturesSection />
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <DepartmentBoxes />
            </ScrollReveal>
          </>
        ) : activeView === "about" ? (
          <ScrollReveal>
            <AboutSection />
          </ScrollReveal>
        ) : (
          <ScrollReveal>
            <ContactSection />
          </ScrollReveal>
        )}
        <ScrollReveal delay={400}>
          <Footer />
        </ScrollReveal>
      </main>
    </>
  );
}
