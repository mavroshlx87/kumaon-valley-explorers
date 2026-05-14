"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Add Web3Forms config
    // GET YOUR FREE KEY AT: https://web3forms.com/
    data.access_key = "65792d1e-5d4c-4122-8939-603b8bfe96cd"; 
    data.subject = `New Enquiry from ${data.name}`;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-primary/10 text-primary p-10 rounded-[2rem] border border-primary/20 text-center">
        <div className="text-4xl mb-4">🙏</div>
        <h3 className="text-2xl font-serif mb-2">Enquiry Sent Successfully</h3>
        <p className="text-muted-foreground">Thank you for reaching out. Our team will review your requirements and get back to you shortly.</p>
        <button 
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold underline text-primary hover:text-primary/80"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="bg-red-50 text-red-600 p-10 rounded-[2rem] border border-red-200 text-center">
        <div className="text-4xl mb-4">⚠️</div>
        <h3 className="text-2xl font-serif mb-2">Something went wrong</h3>
        <p className="text-red-600/80">We couldn't send your enquiry. Please try again or contact us directly via email.</p>
        <button 
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold underline hover:text-red-800"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Full Name</label>
          <input required id="name" name="name" type="text" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-sm" placeholder="Your Name" />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Email Address</label>
          <input required id="email" name="email" type="email" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-sm" placeholder="email@example.com" />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Enquiry Type</label>
        <select id="subject" name="subject" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-sm">
          <option value="custom">Custom Travel Plan</option>
          <option value="taxi">Taxi Services</option>
          <option value="retreat">Periodic Retreats</option>
          <option value="general">General Inquiry</option>
        </select>
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-muted-foreground uppercase tracking-wider">How can we help?</label>
        <textarea required id="message" name="message" rows={5} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-sm" placeholder="Tell us about your requirements..."></textarea>
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
