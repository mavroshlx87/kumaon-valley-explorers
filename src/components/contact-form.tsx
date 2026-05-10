"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate Enquiry Sending
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  if (status === "success") {
    return (
      <div className="bg-primary/10 text-primary p-10 rounded-[2rem] border border-primary/20 text-center">
        <div className="text-4xl mb-4">🙏</div>
        <h3 className="text-2xl font-serif mb-2">Enquiry Received</h3>
        <p className="text-muted-foreground">Thank you for reaching out. Our team will get back to you shortly to plan your custom journey.</p>
        <button 
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold underline text-primary hover:text-primary/80"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Full Name</label>
          <input required id="name" type="text" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-sm" placeholder="Your Name" />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Email Address</label>
          <input required id="email" type="email" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-sm" placeholder="email@example.com" />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Enquiry Type</label>
        <select id="subject" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-sm">
          <option value="custom">Custom Travel Plan</option>
          <option value="taxi">Taxi Services</option>
          <option value="retreat">Periodic Retreats</option>
          <option value="general">General Inquiry</option>
        </select>
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-muted-foreground uppercase tracking-wider">How can we help?</label>
        <textarea required id="message" rows={5} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-sm" placeholder="Tell us about your requirements..."></textarea>
      </div>
      <button 
        disabled={status === "submitting"}
        type="submit" 
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-4 px-6 rounded-full shadow-lg disabled:opacity-50 transition-all active:scale-[0.98]"
      >
        {status === "submitting" ? "Sending Enquiry..." : "Submit Quick Enquiry"}
      </button>
    </form>
  );
}
