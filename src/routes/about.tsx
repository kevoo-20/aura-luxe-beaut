import { createFileRoute } from "@tanstack/react-router";
/* Updated to use relative path and correct asset extension */
import aboutImg from "../assets/real.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      /* Updated meta values to match your new Aura Luxe branding */
      { title: "Our Story — Aura Luxe Beauty" },
      { name: "description", content: "Aura Luxe Beauty reimagines luxury perfumery. Discover our collection, values, and craft." },
      { property: "og:title", content: "Our Story — Aura Luxe Beauty" },
      { property: "og:description", content: "A curation of modern luxury perfumery." },
      { property: "og:image", content: aboutImg },
    ],
  }),
  component: About,
});

function About() {
  return (
    /* Added mt-16 layout spacing to prevent your sticky header from blocking content */
    <div className="text-white mt-16">
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <div className="space-y-6">
          {/* Swapped out muted text tokens for dark theme compatible zinc classes */}
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">Our maison</p>
          <h1 className="font-display text-5xl md:text-6xl text-white">
            A modern ode to <span className="italic text-amber-400">elegance</span>
          </h1>
          <p className="text-zinc-300">
            At Aura Luxe Beauty, we curate long-lasting fragrances designed to evoke elegance and celebrate individuality. From delicate floral and fruity undertones to bold, sophisticated notes, our collection offers the perfect match for every personality and occasion. Discover your signature scent with us and elevate your personal presence.
          </p>
          <p className="text-zinc-400 text-sm">
            Each scent is composed by master perfumers, hand-poured in our atelier, and finished with a ribbon of intention. We blend the rare with the responsible — sustainably sourced ingredients, recycled glass, refillable bottles.
          </p>
        </div>
        <div className="relative">
          {/* Replaced old pink layout glow overlay with a subtle purple background glow */}
          <div className="absolute -inset-6 rounded-full bg-pink-500/10 opacity-60 blur-3xl" />
          <img 
            src={aboutImg} 
            alt="Aura Luxe Beauty atelier flat lay" 
            className="relative rounded-[2.5rem] object-cover border border-white/10 w-full aspect-[4/5]" 
          />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">Our values</p>
        <h2 className="mt-2 font-display text-4xl text-white">Crafted with conscience</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { t: "Slow Luxury", d: "Small batches, rare ingredients, no compromise." },
            { t: "Cruelty-Free", d: "Vegan formulas, never tested on animals." },
            { t: "Refill, Reuse", d: "Our bottles are made to be loved for years." },
          ].map((v, i) => (
            <div 
              key={i} 
              /* Swapped glass token for an explicit dark charcoal container background */
              className="hover-lift rounded-3xl p-8 text-left bg-zinc-900/60 border border-white/10 backdrop-blur-sm"
            >
              <h3 className="font-display text-2xl text-white">{v.t}</h3>
              <p className="mt-3 text-sm text-zinc-400">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <blockquote className="font-display text-3xl italic leading-snug md:text-4xl text-zinc-200">
          "Perfume is the most intense form of memory. We craft yours."
        </blockquote>
        <p className="mt-6 text-xs uppercase tracking-[0.3em] text-zinc-500">— Aura Luxe Beauty</p>
      </section>
    </div>
  );
}
