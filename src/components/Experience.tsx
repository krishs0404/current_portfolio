"use client";

import { profile } from "@/data/profile";
import { Section, Heading, Card } from "@/components/ui";

export function ExperienceSection() {
  return (
    <Section id="experience">
      <Heading kicker="Experience">Impactful work</Heading>
      <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
        {profile.experiences.map((exp) => (
          <Card key={`${exp.title}-${exp.organization}`}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-semibold text-lg">{exp.title}</h3>
                <p className="text-foreground/70">{exp.organization}</p>
              </div>
              <div className="text-sm text-foreground/60 whitespace-nowrap">
                {exp.start} – {exp.end}
              </div>
            </div>
            <ul className="mt-3 list-disc pl-5 text-sm leading-relaxed text-foreground/80">
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}


