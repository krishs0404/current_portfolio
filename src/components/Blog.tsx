import { Section, Heading, Card } from "@/components/ui";
import { posts } from "@/data/posts";

export function BlogSection() {
  return (
    <Section id="blog">
      <Heading kicker="Writing">Blog</Heading>
      <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
        {posts.map((post) => (
          <Card key={post.title}>
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-semibold text-lg">{post.title}</h3>
              <div className="text-sm text-foreground/60 whitespace-nowrap">
                {new Date(post.date).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </div>
            </div>
            <p className="mt-2 text-foreground/75">{post.summary}</p>
            {post.tags && (
              <div className="mt-3 flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs rounded-full border border-foreground/15 px-2 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
            {post.href && (
              <div className="mt-4">
                <a
                  href={post.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm underline underline-offset-4 hover:no-underline"
                >
                  Read more
                </a>
              </div>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}


