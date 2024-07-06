"use client";

import { Herosection } from "./components/Herosection";
import Navbar from "./components/Navbar";
import { AboutSection } from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchieventsSection from "./components/AchieventsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
    <Navbar />
    <div className="container mt-24 mx-auto px-12 py-4">
      <Herosection />
      <AchieventsSection />
      <AboutSection />
      <ProjectsSection />
      <EmailSection />
    </div>
    <Footer />
  </main>
  );
}