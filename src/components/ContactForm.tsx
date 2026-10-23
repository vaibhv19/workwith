"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2, AlertCircle, Mail } from "lucide-react";

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
        throw new Error(data.error || "Failed to dispatch message. You can reach out directly via email.");
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
    <div className="rounded-md border border-white/10 bg-[#111622]/80 p-6 sm:p-8 backdrop-blur-sm shadow-xl shadow-black/20">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-[#F4EFE6] tracking-tight mb-1">
          Send a Direct Message
        </h3>
        <p className="text-xs sm:text-sm text-[#9E9A91] leading-relaxed">
          Fill out the form below or email directly. Every inquiry arrives in my primary inbox.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
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
          <div className="flex items-start gap-3 p-4 bg-emerald-950/40 border border-emerald-500/30 rounded text-emerald-300 text-sm animate-in fade-in">
            <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-400 mt-0.5" />
            <div>
              <p className="font-semibold text-emerald-200">Message dispatched successfully!</p>
              <p className="text-xs text-emerald-300/80 mt-1 leading-relaxed">
                Thank you for reaching out. I review all technical inquiries and will respond within 24–48 hours.
              </p>
            </div>
          </div>
        )}

        {/* Inline Error Notification */}
        {status === "error" && (
          <div className="flex items-start gap-3 p-4 bg-rose-950/40 border border-rose-500/30 rounded text-rose-300 text-sm animate-in fade-in">
            <AlertCircle className="w-5 h-5 flex-shrink-0 text-rose-400 mt-0.5" />
            <div className="space-y-2">
              <div>
                <p className="font-semibold text-rose-200">Message dispatch notice</p>
                <p className="text-xs text-rose-300/80 mt-0.5 leading-relaxed">{errorMessage}</p>
              </div>
              <a
                href={`mailto:${fallbackEmail || "contact@vaibhv19.dev"}?subject=${encodeURIComponent(
                  formData.subject || "Project / Opportunity Inquiry"
                )}&body=${encodeURIComponent(
                  `Hi Vaibhav,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
                )}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#E8913A] hover:bg-[#F0A04B] text-black font-semibold text-xs transition-colors"
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
            <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-[#9E9A91]">
              Your Name <span className="text-[#E8913A]">*</span>
            </label>
            <input
              type="text"
              id="contact-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Jane Doe"
              disabled={status === "loading"}
              className={`w-full px-3.5 py-2.5 text-sm text-[#F4EFE6] bg-black/40 border rounded placeholder:text-[#9E9A91]/40 focus:placeholder:text-[#9E9A91]/80 transition-colors focus:outline-none focus:ring-1 focus:ring-[#E8913A] focus:border-[#E8913A] ${
                fieldErrors.name ? "border-rose-500/80" : "border-white/10"
              }`}
            />
            {fieldErrors.name && (
              <p className="text-xs text-rose-400 font-mono">{fieldErrors.name}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-[#9E9A91]">
              Your Email <span className="text-[#E8913A]">*</span>
            </label>
            <input
              type="email"
              id="contact-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. jane@company.com"
              disabled={status === "loading"}
              className={`w-full px-3.5 py-2.5 text-sm text-[#F4EFE6] bg-black/40 border rounded placeholder:text-[#9E9A91]/40 focus:placeholder:text-[#9E9A91]/80 transition-colors focus:outline-none focus:ring-1 focus:ring-[#E8913A] focus:border-[#E8913A] ${
                fieldErrors.email ? "border-rose-500/80" : "border-white/10"
              }`}
            />
            {fieldErrors.email && (
              <p className="text-xs text-rose-400 font-mono">{fieldErrors.email}</p>
            )}
          </div>
        </div>

        {/* Topic / Subject Selection */}
        <div className="space-y-1.5">
          <label htmlFor="contact-subject" className="block text-xs font-mono uppercase tracking-wider text-[#9E9A91]">
            Topic / Conversation Type
          </label>
          <select
            id="contact-subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            disabled={status === "loading"}
            className="w-full px-3.5 py-2.5 text-sm text-[#F4EFE6] bg-black/40 border border-white/10 rounded focus:outline-none focus:ring-1 focus:ring-[#E8913A] focus:border-[#E8913A] transition-colors"
          >
            <option value="Engineering Role / Opportunity" className="bg-[#111622] text-[#F4EFE6]">
              Engineering Role / Full-Time Opportunity
            </option>
            <option value="System Architecture / Consulting" className="bg-[#111622] text-[#F4EFE6]">
              System Architecture / Technical Consulting
            </option>
            <option value="Freelance / Contract Project" className="bg-[#111622] text-[#F4EFE6]">
              Contract / Full-Stack Web Platform
            </option>
            <option value="Open-Source Collaboration" className="bg-[#111622] text-[#F4EFE6]">
              Open-Source Project Collaboration
            </option>
            <option value="General Technical Inquiry" className="bg-[#111622] text-[#F4EFE6]">
              General Technical Inquiry
            </option>
          </select>
        </div>

        {/* Message Field */}
        <div className="space-y-1.5">
          <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-[#9E9A91]">
            Your Message <span className="text-[#E8913A]">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Share details about the role, project requirements, architectural challenges, or collaboration scope..."
            disabled={status === "loading"}
            className={`w-full px-3.5 py-2.5 text-sm text-[#F4EFE6] bg-black/40 border rounded placeholder:text-[#9E9A91]/40 focus:placeholder:text-[#9E9A91]/80 transition-colors resize-y min-h-[120px] focus:outline-none focus:ring-1 focus:ring-[#E8913A] focus:border-[#E8913A] ${
              fieldErrors.message ? "border-rose-500/80" : "border-white/10"
            }`}
          />
          {fieldErrors.message && (
            <p className="text-xs text-rose-400 font-mono">{fieldErrors.message}</p>
          )}
        </div>

        {/* Submit Row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
          <p className="text-xs text-[#9E9A91] italic font-mono">
            Typical response window: 24–48 hours.
          </p>
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold tracking-wide text-black bg-[#E8913A] hover:bg-[#F0A04B] disabled:opacity-60 disabled:cursor-not-allowed rounded transition-all cursor-pointer shadow-md focus:outline-none focus:ring-2 focus:ring-[#E8913A]/50 shrink-0"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-black" />
                <span>Sending Message...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <Send className="w-4 h-4 text-black" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
