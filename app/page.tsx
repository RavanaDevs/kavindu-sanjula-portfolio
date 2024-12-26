import { HeroSection } from '@/components/sections/hero';
import { Navigation } from '@/components/navigation';
import { AboutSection } from '@/components/sections/about';
import { SkillsSection } from '@/components/sections/skills/index';
import { ProjectsSection } from '@/components/sections/projects/index';
import { ContactSection } from '@/components/sections/contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}