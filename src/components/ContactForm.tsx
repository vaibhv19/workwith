"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2, AlertCircle, Mail } from "lucide-react";
import Button from "@/components/ui/Button";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string; // Honeypot
}

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "Engineering Role / Opportunity",
    message: "",
    website: "",
  });

  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fallbackEmail, setFallbackEmail] = useState<string | null>(null);

  const validate = (): boolean => {
    const errors: FieldErrors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errors.email = "Please enter a valid email address.";
      }
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required.";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (fieldErrors[name as keyof FieldErrors]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setStatus("loading");
    setErrorMessage("");
    setFallbackEmail(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          honeypot: formData.website,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        if (data.fallbackEmail) {
          setFallbackEmail(data.fallbackEmail);
        }
        throw new Error(data.error || "Unable to send message. Please reach out directly via email.");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "Engineering Role / Opportunity",
        message: "",
        website: "",
      });
      setFieldErrors({});
    } catch (err: unknown) {
      setStatus("error");
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("Something went wrong. Please email directly at contact@vaibhv19.dev.");
      }
    }
  };

  return (
    <div className="surface-card bg-surface border border-border p-6 sm:p-8 rounded-md transition-colors">
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Honeypot field (hidden from real users) */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Inline Success Notification */}
        {status === "success" && (
          <div className="flex items-start gap-3 p-4 bg-emerald-950/30 border border-emerald-500/30 rounded text-emerald-200 text-sm">
            <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-400 mt-0.5" />
            <div>
              <p className="font-semibold text-emerald-100">Message sent successfully</p>
              <p className="text-xs text-emerald-300/80 mt-1 leading-relaxed">
                Thank you for reaching out. I review all inquiries and will respond within 24–48 hours.
              </p>
            </div>
          </div>
        )}

        {/* Inline Error Notification */}
        {status === "error" && (
          <div className="flex items-start gap-3 p-4 bg-rose-950/30 border border-rose-500/30 rounded text-rose-200 text-sm">
            <AlertCircle className="w-5 h-5 flex-shrink-0 text-rose-400 mt-0.5" />
            <div className="space-y-3 flex-1">
              <div>
                <p className="font-semibold text-rose-100">Unable to send message</p>
                <p className="text-xs text-rose-300/80 mt-1 leading-relaxed">{errorMessage}</p>
              </div>
              <a
                href={`mailto:${fallbackEmail || "contact@vaibhv19.dev"}?subject=${encodeURIComponent(
                  formData.subject || "Project / Opportunity Inquiry"
                )}&body=${encodeURIComponent(
                  `Hi Vaibhav,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
                )}`}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-accent text-[#0B0B0B] font-semibold text-xs transition-colors hover:bg-accent-champagne"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Open in Email Client ({fallbackEmail || "contact@vaibhv19.dev"})</span>
              </a>
            </div>
          </div>
        )}

        {/* Name & Email Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="contact-name" className="block text-[11px] font-mono uppercase tracking-[0.14em] text-foreground-muted">
              Your Name <span className="text-accent">*</span>
            </label>
            <input
              type="text"
              id="contact-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Jane Doe"
              disabled={status === "loading"}
              className={`w-full px-3.5 py-2.5 text-xs sm:text-sm text-foreground bg-surface-elevated border rounded-[2px] placeholder:text-foreground-subtle/50 transition-colors focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent ${
                fieldErrors.name ? "border-rose-500/80" : "border-border hover:border-border-light"
              }`}
            />
            {fieldErrors.name && (
              <p className="text-xs text-rose-400 font-mono mt-1">{fieldErrors.name}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="contact-email" className="block text-[11px] font-mono uppercase tracking-[0.14em] text-foreground-muted">
              Your Email <span className="text-accent">*</span>
            </label>
            <input
              type="email"
              id="contact-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. jane@company.com"
              disabled={status === "loading"}
              className={`w-full px-3.5 py-2.5 text-xs sm:text-sm text-foreground bg-surface-elevated border rounded-[2px] placeholder:text-foreground-subtle/50 transition-colors focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent ${
                fieldErrors.email ? "border-rose-500/80" : "border-border hover:border-border-light"
              }`}
            />
            {fieldErrors.email && (
              <p className="text-xs text-rose-400 font-mono mt-1">{fieldErrors.email}</p>
            )}
          </div>
        </div>

        {/* Topic / Subject Selection */}
        <div className="space-y-1.5">
          <label htmlFor="contact-subject" className="block text-[11px] font-mono uppercase tracking-[0.14em] text-foreground-muted">
            Conversation Topic
          </label>
          <select
            id="contact-subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            disabled={status === "loading"}
            className="w-full px-3.5 py-2.5 text-xs sm:text-sm text-foreground bg-surface-elevated border border-border hover:border-border-light rounded-[2px] focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-colors"
          >
            <option value="Engineering Role / Opportunity" className="bg-[#121212] text-[#F4EFE6]">
              Full-Time Software Engineering Role
            </option>
            <option value="System Architecture / Consulting" className="bg-[#121212] text-[#F4EFE6]">
              Technical Architecture / Consulting
            </option>
            <option value="Freelance / Contract Project" className="bg-[#121212] text-[#F4EFE6]">
              Contract / Full-Stack Web Platform
            </option>
            <option value="Open-Source Collaboration" className="bg-[#121212] text-[#F4EFE6]">
              Open-Source Collaboration
            </option>
            <option value="General Technical Inquiry" className="bg-[#121212] text-[#F4EFE6]">
              General Technical Inquiry
            </option>
          </select>
        </div>

        {/* Message Field */}
        <div className="space-y-1.5">
          <label htmlFor="contact-message" className="block text-[11px] font-mono uppercase tracking-[0.14em] text-foreground-muted">
            Your Note <span className="text-accent">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Share details about the role, project requirements, architectural challenges, or collaboration scope..."
            disabled={status === "loading"}
            className={`w-full px-3.5 py-2.5 text-xs sm:text-sm text-foreground bg-surface-elevated border rounded-[2px] placeholder:text-foreground-subtle/50 transition-colors resize-y min-h-[110px] focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent ${
              fieldErrors.message ? "border-rose-500/80" : "border-border hover:border-border-light"
            }`}
          />
          {fieldErrors.message && (
            <p className="text-xs text-rose-400 font-mono mt-1">{fieldErrors.message}</p>
          )}
        </div>

        {/* Submit Row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
          <p className="text-xs text-foreground-subtle italic">
            Directly delivered to personal inbox · Response within 24–48 hours.
          </p>

          <Button
            type="submit"
            variant="accent"
            size="md"
            disabled={status === "loading"}
            className="shrink-0"
          >
            {status === "loading" ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                <span>Sending...</span>
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <span>Send Note</span>
                <Send className="w-3.5 h-3.5" />
              </span>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
