import { HeroSection } from '@/components/sections/hero';
import { Navigation } from '@/components/navigation';
import { AboutSection } from '@/components/sections/about/index';
import { SkillsSection } from '@/components/sections/skills/index';
import { ProjectsSection } from '@/components/sections/projects/index';
import { ContactSection } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';
import { getProjects } from '@/lib/database';

export default function Home() {
  getProjects();
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection /> 
      <Footer/>
    </main>
  );
}