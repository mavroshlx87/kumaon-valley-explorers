"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div className="mb-2 h-96 w-80 rounded-3xl border border-border bg-background p-5 shadow-2xl flex flex-col">
          <div className="flex justify-between items-center border-b pb-3 mb-3">
            <h3 className="font-medium text-primary font-serif">Support Agent</h3>
            <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground">
              ✕
            </button>
          </div>
          <div className="flex-1 overflow-y-auto text-sm text-muted-foreground">
            {/* Agent integration placeholder */}
            <p className="p-3 bg-muted rounded-2xl rounded-tl-sm inline-block shadow-sm">
              Namaste! How can I help you plan your peaceful retreat to Kumaon?
            </p>
          </div>
          <div className="mt-4 flex gap-2">
            <input 
              type="text" 
              placeholder="Type your message..." 
              className="flex-1 rounded-full border border-border px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-sm"
            />
            <button className="rounded-full bg-primary hover:bg-primary/90 px-5 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors">
              Send
            </button>
          </div>
        </div>
      )}
      
      {/* Action Buttons Container */}
      <div className="flex flex-col gap-3">
        {/* Call Button */}
        <a
          href={`tel:${siteConfig.contact.phone}`}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary shadow-lg hover:scale-105 transition-transform border border-border"
          aria-label="Call Us"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.273-3.973-6.869-6.869l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${siteConfig.contact.phone.replace(/[^0-9]/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition-transform"
          aria-label="WhatsApp Us"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75 0 1.954.57 3.774 1.558 5.305l-1.38 4.606 4.793-1.202a9.711 9.711 0 004.779 1.241h.005c5.385 0 9.75-4.365 9.75-9.75 0-5.385-4.365-9.75-9.75-9.75zm0 17.854h-.004a8.04 8.04 0 01-4.088-1.111l-.293-.174-3.037.762.875-2.923-.191-.304a8.038 8.038 0 01-1.226-4.251c0-4.444 3.616-8.058 8.06-8.058 4.444 0 8.058 3.614 8.058 8.058s-3.614 8.058-8.054 8.058zm4.423-6.027c-.242-.122-1.436-.71-1.659-.79-.222-.08-.384-.122-.545.122-.162.242-.626.79-.768.95-.141.162-.283.182-.525.061-.242-.122-1.026-.379-1.955-1.205-.722-.643-1.209-1.439-1.351-1.681-.141-.242-.015-.373.106-.494.109-.109.242-.283.364-.424.121-.141.162-.242.242-.404.08-.162.04-.303-.02-.424-.061-.122-.545-1.314-.748-1.802-.197-.472-.397-.408-.545-.415-.141-.007-.303-.007-.464-.007-.162 0-.424.061-.647.303-.222.242-.848.829-.848 2.022s.869 2.345.99 2.507c.121.162 1.708 2.611 4.135 3.659.577.249 1.027.397 1.378.508.58.185 1.107.159 1.523.097.466-.07 1.436-.587 1.638-1.153.202-.566.202-1.05.141-1.153-.06-.103-.222-.162-.464-.283z" clipRule="evenodd" />
          </svg>
        </a>

        {/* AI Chat Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg hover:scale-105 transition-transform"
          aria-label="Chat with Support Agent"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 11.996c0 2.29.968 4.346 2.534 5.822C5.352 19.345 5.093 21 4.5 22.5c1.802-.68 3.518-1.574 4.887-2.738A8.905 8.905 0 0012 20.25z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
