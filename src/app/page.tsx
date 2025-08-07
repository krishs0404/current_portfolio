import { Hero } from "@/components/Hero";
import { ExperienceSection } from "@/components/Experience";
import { ProjectsSection } from "@/components/Projects";
import { SkillsSection } from "@/components/Skills";
import { EducationSection } from "@/components/Education";
import { BlogSection } from "@/components/Blog";
import { ContactSection } from "@/components/Contact";

export default function Home() {
  return (
    <div className="font-sans">
      <Hero />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <BlogSection />
      <ContactSection />
    </div>
  );
}
