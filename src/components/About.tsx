import { profile } from "@/data/profile";
import { Section, Heading, Card } from "@/components/ui";

export function AboutSection() {
  if (!profile.about) return null;
  return (
    <Section id="about">
      <Heading kicker="About">A little more human</Heading>
      <Card>
        <div className="prose prose-invert max-w-none">
          {profile.about.map((p, i) => (
            <p key={i} className="text-foreground/80 leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </Card>
    </Section>
  );
}


