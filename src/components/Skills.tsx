import { profile } from "@/data/profile";
import { Section, Heading, Card } from "@/components/ui";

export function SkillsSection() {
  const { skills } = profile;
  return (
    <Section id="skills">
      <Heading kicker="Skills">Technical stack</Heading>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <Card>
          <h3 className="font-semibold">Languages</h3>
          <p className="mt-2 text-foreground/75 text-sm">
            {skills.languages.join(", ")}
          </p>
        </Card>
        <Card>
          <h3 className="font-semibold">Frameworks</h3>
          <p className="mt-2 text-foreground/75 text-sm">
            {skills.frameworks.join(", ")}
          </p>
        </Card>
        <Card>
          <h3 className="font-semibold">Tools</h3>
          <p className="mt-2 text-foreground/75 text-sm">{skills.tools.join(", ")}</p>
        </Card>
        <Card>
          <h3 className="font-semibold">Libraries</h3>
          <p className="mt-2 text-foreground/75 text-sm">
            {skills.libraries.join(", ")}
          </p>
        </Card>
      </div>
    </Section>
  );
}


