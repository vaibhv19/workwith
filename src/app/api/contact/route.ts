import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message, subject, honeypot } = body;

    // Honeypot check for spam bots
    if (honeypot) {
      // Silently ignore bot submission
      return NextResponse.json({ success: true });
    }

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "Name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || email.trim().length === 0) {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_EMAIL || "contact@vaibhv19.dev";

    // If RESEND_API_KEY is not configured in local environment, report transparently
    if (!apiKey) {
      console.warn("RESEND_API_KEY is not set in environment variables.");
      return NextResponse.json(
        {
          error: "Direct API email dispatch is not configured locally (missing RESEND_API_KEY). Please email directly at contact@vaibhv19.dev.",
          fallbackEmail: "contact@vaibhv19.dev"
        },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);
    const sanitizedName = name.trim();
    const sanitizedEmail = email.trim();
    const sanitizedSubject = (subject && typeof subject === "string" && subject.trim().length > 0)
      ? subject.trim()
      : `New message from ${sanitizedName} via mywork.vaibhv19.dev`;
    const sanitizedMessage = message.trim();

    const { error } = await resend.emails.send({
      from: "MyWork Contact <contact@vaibhv19.dev>",
      to: [recipientEmail],
      replyTo: sanitizedEmail,
      subject: sanitizedSubject,
      text: `Name: ${sanitizedName}\nEmail: ${sanitizedEmail}\nSubject: ${sanitizedSubject}\n\nMessage:\n${sanitizedMessage}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1e293b; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #0f172a; margin-top: 0; border-bottom: 1px solid #e2e8f0; padding-bottom: 12px;">New Contact Submission — mywork.vaibhv19.dev</h2>
          <p><strong>From:</strong> ${sanitizedName}</p>
          <p><strong>Email:</strong> <a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a></p>
          <p><strong>Topic / Subject:</strong> ${sanitizedSubject}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; white-space: pre-wrap; color: #334155;">${sanitizedMessage
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")}</div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: error.message || "Failed to dispatch email via Resend." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API route error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your message." },
      { status: 500 }
    );
  }
}
