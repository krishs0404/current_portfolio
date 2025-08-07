"use client";

import { profile } from "@/data/profile";
import { Section, Heading, Card } from "@/components/ui";

export function ProjectsSection() {
  return (
    <Section id="projects">
      <Heading kicker="Projects">Selected builds</Heading>
      <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
        {profile.projects.map((p) => (
          <Card key={p.name}>
            <h3 className="font-semibold text-lg">{p.name}</h3>
            <p className="mt-2 text-foreground/75">{p.description}</p>
            {p.tags && (
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs rounded-full border border-foreground/15 px-2 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
            {p.links && p.links.length > 0 && (
              <div className="mt-4 flex gap-3">
                {p.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm underline underline-offset-4 hover:no-underline"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}


