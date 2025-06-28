import { Header } from "@/components/devfolio/Header";
import { HeroSection } from "@/components/devfolio/HeroSection";
import { AboutSection } from "@/components/devfolio/AboutSection";
import { ProjectShowcase } from "@/components/devfolio/ProjectShowcase";
import { ContactForm } from "@/components/devfolio/ContactForm";
import { Footer } from "@/components/devfolio/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ProjectShowcase />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
