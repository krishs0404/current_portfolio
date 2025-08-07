"use client";

import { useState } from "react";
import { Section, Heading, Card } from "@/components/ui";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "pending" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(formData: FormData) {
    setStatus("pending");
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });
      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
    } catch (e) {
      setStatus("error");
      setError("Could not send message. You can also email me directly.");
    }
  }

  return (
    <Section id="contact">
      <Heading kicker="Contact">Get in touch</Heading>
      <Card>
        <form
          action={async (fd) => {
            await onSubmit(fd);
          }}
          className="grid gap-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm text-foreground/80">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="rounded-lg border border-foreground/15 bg-transparent px-3 py-2 outline-none focus:border-foreground/30"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm text-foreground/80">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="rounded-lg border border-foreground/15 bg-transparent px-3 py-2 outline-none focus:border-foreground/30"
              />
            </div>
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm text-foreground/80">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="rounded-lg border border-foreground/15 bg-transparent px-3 py-2 outline-none focus:border-foreground/30"
            />
          </div>
          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={status === "pending"}
              className="rounded-lg border border-foreground/15 px-4 py-2 hover:bg-foreground/5 disabled:opacity-60"
            >
              {status === "pending" ? "Sending..." : "Send"}
            </button>
            <a href="mailto:krishs04@stanford.edu" className="text-sm underline">
              Or email directly
            </a>
          </div>
          {status === "success" && (
            <p className="text-sm text-emerald-400">Message sent. Thanks!</p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-400">{error}</p>
          )}
        </form>
      </Card>
    </Section>
  );
}


