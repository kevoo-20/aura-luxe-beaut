import { createFileRoute } from "@tanstack/react-router";
import {
  Mail,
  MapPin,
  Phone,
  MessageSquare,
} from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        /* Updated head metadata title to Aura Luxe Beauty */
        title: "Contact — Aura Luxe Beauty",
      },
      {
        name: "description",
        /* Updated meta description branding */
        content:
          "Get in touch with Aura Luxe Beauty for fragrance consultations, orders, and luxury perfume inquiries.",
      },
      {
        property: "og:title",
        content: "Contact — Aura Luxe Beauty",
      },
      {
        property: "og:description",
        content: "Speak directly with our fragrance concierge.",
      },
    ],
  }),

  component: Contact,
});

function Contact() {
  const whatsappMessage = encodeURIComponent(
    /* Updated automated template message to match your new brand name */
    "Hello Aura Luxe Beauty ✨ I would like to inquire about your perfumes."
  );

  const whatsappUrl = `https://wa.me/233509689565?text=${whatsappMessage}`;

  return (
    /* Added mt-16 layout spacing to prevent content hiding behind your sticky header */
    <div className="mx-auto max-w-6xl px-6 py-20 mt-16 text-white">
      {/* HEADER */}
      <header className="text-center">
        {/* Changed text color utility to zinc-400 for dark mode compatibility */}
        <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
          We'd love to hear from you
        </p>

        <h1 className="mt-2 font-display text-5xl md:text-6xl text-white">
          Contact Us
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-sm text-zinc-400">
          Speak directly with our fragrance concierge on
          WhatsApp for orders, consultations, gifting, and
          personalized recommendations.
        </p>
      </header>

      {/* CONTENT */}
      <div className="mt-16 grid gap-10 md:grid-cols-2">
        {/* LEFT SIDE */}
        <div className="space-y-6">
          {[
            {
              icon: MapPin,
              title: "Location",
              detail: "Accra, Ghana",
            },
            {
              icon: Mail,
              title: "Email",
              /* Updated support contact email address string */
              detail: "hello@auraluxebeauty.com",
            },
            {
              icon: Phone,
              title: "Phone",
              detail: "+233 509 689 565",
            },
          ].map((item, index) => (
            <div
              key={index}
              /* Hardcoded background/border color variables instead of systemic tokens */
              className="flex items-start gap-4 rounded-3xl p-6 bg-zinc-900/60 border border-white/10 backdrop-blur-sm"
            >
              {/* Swapped secondary background for an elegant dark plum circular badge layer */}
              <div className="rounded-full bg-pink-500/10 p-3">
                {/* Changed layout icon text color modifier to match your signature pink accent */}
                <item.icon className="h-5 w-5 text-pink-400" />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">
                  {item.title}
                </p>

                <p className="mt-1 text-sm text-white">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        {/* Swapped generic glass layouts with rich charcoal frames matching your product items */}
        <div className="flex flex-col items-center justify-center rounded-[2rem] p-10 text-center bg-zinc-900/60 border border-white/10 backdrop-blur-sm">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10">
            <MessageSquare className="h-10 w-10 text-green-400" />
          </div>

          <h2 className="mt-6 font-display text-3xl md:text-4xl text-white">
            Chat Directly on WhatsApp
          </h2>

          <p className="mt-4 max-w-md text-sm text-zinc-400">
            Have questions about our fragrances, delivery,
            gifting, or recommendations? Message us directly
            and receive a quick personalized response.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-green-600 px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-white transition-transform hover:scale-[1.03]"
          >
            <MessageSquare className="h-5 w-5" />
            Open WhatsApp Chat
          </a>

          <p className="mt-4 text-xs text-zinc-500">
            Available daily • Fast response time
          </p>
        </div>
      </div>
    </div>
  );
}
