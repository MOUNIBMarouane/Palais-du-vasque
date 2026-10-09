"use client";

import { useState } from "react";

export default function NewsletterInput() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: wire to email provider (Mailchimp, Klaviyo, etc.)
    setSubmitted(true);
    setEmail("");
  };

  if (submitted) {
    return (
      <p className="text-[10px] font-label uppercase tracking-widest text-primary opacity-80">
        Thank you for subscribing.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative group">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="EMAIL ADDRESS"
        required
        className="w-full bg-transparent border-b border-[#D4AF37]/20 py-2 text-[10px] font-label uppercase tracking-widest focus:outline-none focus:border-primary transition-all"
      />
      <button
        type="submit"
        aria-label="Subscribe"
        className="absolute right-0 bottom-2 material-symbols-outlined text-sm text-primary"
      >
        arrow_forward
      </button>
    </form>
  );
}
