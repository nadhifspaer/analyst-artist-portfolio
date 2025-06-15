
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-background flex flex-col relative font-inter">
      {/* Theme Switch */}
      <div className="absolute top-6 left-6 z-50">
        <ThemeToggle />
      </div>
      {/* HERO SECTION */}
      <HeroSection />
      {/* PROJECTS SECTION */}
      <ProjectsSection />
      {/* CONTACT SECTION */}
      <ContactSection />
    </div>
  );
};

export default Index;
