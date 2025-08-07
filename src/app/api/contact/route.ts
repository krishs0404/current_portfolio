import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL || "krishs04@stanford.edu";

    if (!apiKey) {
      // Accept the request without sending if not configured
      return new Response(JSON.stringify({ ok: true, delivered: false }), { status: 200 });
    }

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to,
      subject: `New message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    return new Response(JSON.stringify({ ok: true, delivered: true }), { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify({ error: "Internal error" }), { status: 500 });
  }
}


