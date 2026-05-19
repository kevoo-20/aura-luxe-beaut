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
        title: "Contact — Éclat Essence",
      },
      {
        name: "description",
        content:
          "Get in touch with Éclat Essence for fragrance consultations, orders, and luxury perfume inquiries.",
      },
      {
        property: "og:title",
        content: "Contact — Éclat Essence",
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
    "Hello Éclat Essence ✨ I would like to inquire about your perfumes."
  );

  const whatsappUrl = `https://wa.me/233509689565?text=${whatsappMessage}`;

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      {/* HEADER */}
      <header className="text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          We'd love to hear from you
        </p>

        <h1 className="mt-2 font-display text-5xl md:text-6xl">
          Contact Us
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">
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
              detail: "hello@eclatessence.com",
            },
            {
              icon: Phone,
              title: "Phone",
              detail: "+233 509 689 565",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="glass flex items-start gap-4 rounded-3xl p-6"
            >
              <div className="rounded-full bg-secondary p-3">
                <item.icon className="h-5 w-5 text-primary" />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  {item.title}
                </p>

                <p className="mt-1 text-sm">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="glass flex flex-col items-center justify-center rounded-[2rem] p-10 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10">
            <MessageSquare className="h-10 w-10 text-green-500" />
          </div>

          <h2 className="mt-6 font-display text-3xl md:text-4xl">
            Chat Directly on WhatsApp
          </h2>

          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Have questions about our fragrances, delivery,
            gifting, or recommendations? Message us directly
            and receive a quick personalized response.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-green-500 px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-white transition-transform hover:scale-[1.03]"
          >
            <MessageSquare className="h-5 w-5" />
            Open WhatsApp Chat
          </a>

          <p className="mt-4 text-xs text-muted-foreground">
            Available daily • Fast response time
          </p>
        </div>
      </div>
    </div>
  );
}