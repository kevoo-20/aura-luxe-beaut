import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/coco.jpeg";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

import {
  ArrowRight,
  Sparkles,
  Leaf,
  Award,
  Truck,
  MessageSquare,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Éclat Essence — Discover Your Signature Scent",
      },
      {
        name: "description",
        content:
          "Luxury perfumes crafted in Grasse. Discover floral, woody, and oriental signature scents from Éclat Essence.",
      },
      {
        property: "og:title",
        content: "Éclat Essence — Discover Your Signature Scent",
      },
      {
        property: "og:description",
        content: "Luxury perfumes for the modern woman.",
      },
    ],
  }),

  component: Home,
});

function Home() {
  const featured = products.filter((p) => p.featured);
  const bestsellers = products.filter((p) => p.bestseller);

  const whatsappMessage = encodeURIComponent(
    "Hello Aura Luxe Beauty! I would like to discover your new scents and receive a complimentary sample with my first order. ✨"
  );

  const whatsappUrl = `https://wa.me/233509689565?text=${whatsappMessage}`;

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
          <div className="space-y-8 animate-fade-up">
            

            <h1 className="font-display text-5xl leading-[1.05] md:text-7xl">
              Discover your
              <br />
              <span className="italic text-gradient-gold">
                signature
              </span>{" "}
              scent
            </h1>

            <p className="max-w-md text-base text-muted-foreground md:text-lg">
              Long-lasting fragrances crafted to elevate your
              presence. From soft florals to bold woody accords,
              discover a signature scent for every personality,
              gender, and occasion.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-xs uppercase tracking-[0.25em] text-background transition-transform hover:scale-[1.02]"
              >
                Shop the Collection
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center rounded-full border border-foreground/30 px-7 py-3.5 text-xs uppercase tracking-[0.25em] hover:border-foreground"
              >
                Our Story
              </Link>
            </div>

            <div className="flex items-center gap-6 pt-4 text-xs text-muted-foreground">
              <span>★★★★★ 4.9 / 5</span>
              <span>•</span>
              <span>Crafted in Grasse, France</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-gradient-luxe opacity-70 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2.5rem] glass ring-gold sparkle">
              <img
                src={heroImg}
                alt="Éclat Essence signature perfume bottle"
                width={1600}
                height={1280}
                className="aspect-[5/6] w-full object-cover animate-float"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl glass p-4 md:block">
              <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Notes
              </p>

              <p className="font-display text-lg">
                Rose · Iris · Amber
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Maison Edit
            </p>

            <h2 className="mt-2 font-display text-4xl md:text-5xl">
              Featured Fragrances
            </h2>
          </div>

          <Link
            to="/shop"
            className="hidden items-center gap-2 text-xs uppercase tracking-[0.25em] hover:text-primary md:inline-flex"
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>

      {/* BESTSELLERS */}
      <section className="bg-gradient-luxe/30 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Loved by All
          </p>

          <h2 className="mt-2 font-display text-4xl md:text-5xl">
            Bestsellers
          </h2>

          <div className="mt-10 flex gap-6 overflow-x-auto pb-6 [scrollbar-width:thin]">
            {bestsellers.map((product) => (
              <div
                key={product.id}
                className="min-w-[280px] max-w-[320px] flex-1 sm:min-w-[320px]"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* WHY CHOOSE US */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          {/* Changed brand promise reference text to Aura Luxe */}
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
            The Aura Luxe Promise
          </p>

          <h2 className="mt-2 font-display text-4xl md:text-5xl text-white">
            Why Choose Us
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {[
            {
              icon: Award,
              title: "Premium Blends",
              text: "Long-lasting designer fragrance profiles.",
            },
            {
              icon: Leaf,
              title: "Clean Ingredients",
              text: "Ethically sourced, cruelty-free, vegan formulas.",
            },
            {
              icon: Sparkles,
              title: "Curated Layout",
              text: "Every piece selected carefully for our collection.",
            },
            {
              icon: Truck,
              title: "Complimentary Shipping",
              text: "Available locally on qualifiable basket sizes.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              /* Swapped system glass utilities with permanent dark zinc panel framing */
              className="hover-lift rounded-3xl p-8 text-center bg-zinc-900/60 border border-white/10 backdrop-blur-sm"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-pink-500/10">
                <feature.icon className="h-6 w-6 text-pink-400" />
              </div>

              <h3 className="mt-5 font-display text-xl text-white">
                {feature.title}
              </h3>

              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
            Whispers from the World
          </p>

          <h2 className="mt-2 font-display text-4xl md:text-5xl text-white">
            She Wears Aura Luxe
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              name: "Amélie R.",
              quote:
                "ARAMAN AMBER OUD is the most romantic scent I've ever owned. People stop me on the street.",
              role: "Accra",
            },
            {
              name: "Léa M.",
              quote:
                "BETRES feels like pure silk on the skin. My absolute new evening signature.",
              role: "Kumasi",
            },
            {
              name: "Saanvi K.",
              quote:
                "The custom packaging alone is a masterpiece. The product quality is incredible.",
              role: "Koforidua",
            },
          ].map((testimonial, index) => (
            <figure
              key={index}
              /* Cleaned layout wrapper frame styles into dark mode styling */
              className="hover-lift rounded-3xl p-8 bg-zinc-900/40 border border-white/5"
            >
              <div className="text-amber-400 text-sm tracking-wider">★★★★★</div>

              <blockquote className="mt-4 font-display text-lg italic leading-relaxed text-zinc-200">
                "{testimonial.quote}"
              </blockquote>

              <figcaption className="mt-6 text-sm">
                <span className="font-semibold text-white">
                  {testimonial.name}
                </span>

                <span className="text-zinc-500">
                  {" "}
                  · {testimonial.role}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* WHATSAPP CONTACT */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        {/* Changed layout background surface panel away from gradient variables to charcoal black glass boxes */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-zinc-900 border border-white/10 p-10 text-center md:p-20 shadow-2xl">
          <div className="sparkle absolute inset-0 opacity-20" />

          <div className="relative">
            <p className="text-xs uppercase tracking-[0.3em] text-pink-400 font-semibold">
              Connect With Us
            </p>

            <h2 className="mx-auto mt-3 max-w-2xl font-display text-4xl md:text-5xl text-white">
              Discover New{" "}
              <span className="italic text-amber-400">
                Scents
              </span>{" "}
              on WhatsApp
            </h2>

            <p className="mx-auto mt-4 max-w-md text-sm text-zinc-400 leading-relaxed">
              Get access to private launches, direct
              consultations, and a complimentary sample with
              your first order.
            </p>

            <div className="mx-auto mt-8 flex justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                /* Rewrote button highlight classes to match signature pink layout tags */
                className="inline-flex items-center justify-center gap-2 rounded-full bg-pink-500 px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-white transition-all hover:bg-pink-600 shadow-[0_0_20px_rgba(244,114,182,0.2)]"
              >
                <MessageSquare className="h-4 w-4" />
                Chat Directly via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
