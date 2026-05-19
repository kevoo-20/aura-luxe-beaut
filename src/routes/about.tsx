import { createFileRoute } from "@tanstack/react-router";
import aboutImg from "@/assets/about-hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Éclat Essence" },
      { name: "description", content: "Founded in Grasse, Éclat Essence reimagines luxury perfumery for the modern woman. Discover our maison, values, and craft." },
      { property: "og:title", content: "Our Story — Éclat Essence" },
      { property: "og:description", content: "A maison of modern luxury perfumery." },
      { property: "og:image", content: aboutImg },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Our maison</p>
          <h1 className="font-display text-5xl md:text-6xl">A modern ode to <span className="italic text-gradient-gold">femininity</span></h1>
          <p className="text-muted-foreground">
          At Aura Luxe Beauty, we curate long-lasting fragrances designed to evoke elegance and celebrate individuality. From delicate floral and fruity undertones to bold, sophisticated notes, our collection offers the perfect match for every personality and occasion. Discover your signature scent with us and elevate your personal presence.
          </p>
          <p className="text-muted-foreground">
            Each scent is composed by master perfumers, hand-poured in our atelier, and finished with a ribbon of intention. We blend the rare with the responsible — sustainably sourced ingredients, recycled glass, refillable bottles.
          </p>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-full bg-gradient-luxe opacity-60 blur-3xl" />
          <img src={aboutImg} alt="Éclat Essence atelier flat lay" className="relative rounded-[2.5rem] object-cover ring-gold" />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Our values</p>
        <h2 className="mt-2 font-display text-4xl">Crafted with conscience</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { t: "Slow Luxury", d: "Small batches, rare ingredients, no compromise." },
            { t: "Cruelty-Free", d: "Vegan formulas, never tested on animals." },
            { t: "Refill, Reuse", d: "Our bottles are made to be loved for years." },
          ].map((v, i) => (
            <div key={i} className="hover-lift glass rounded-3xl p-8 text-left">
              <h3 className="font-display text-2xl">{v.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <blockquote className="font-display text-3xl italic leading-snug md:text-4xl">
          "Perfume is the most intense form of memory. We craft yours."
        </blockquote>
        <p className="mt-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">— Camille Laurent, Founder</p>
      </section>
    </div>
  );
}
