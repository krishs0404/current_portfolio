import { profile } from "@/data/profile";
import { Section, Heading, Card } from "@/components/ui";

export function EducationSection() {
  const e = profile.education;
  return (
    <Section id="education">
      <Heading kicker="Education">{e.school}</Heading>
      <Card>
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-semibold text-lg">{e.degree}</h3>
            <p className="text-foreground/70">{e.location}</p>
          </div>
          <div className="text-sm text-foreground/60 whitespace-nowrap">
            {e.start} – {e.end}
          </div>
        </div>
        <div className="mt-3">
          <h4 className="text-sm font-medium text-foreground/80">Relevant Coursework</h4>
          <p className="mt-1 text-sm text-foreground/75">{e.coursework.join(", ")}</p>
        </div>
      </Card>
    </Section>
  );
}


