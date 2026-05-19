import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { fragranceTypes, products, type Fragrance } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { Search } from "lucide-react";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop Perfumes — Éclat Essence" },
      { name: "description", content: "Browse the full Éclat Essence perfume collection. Filter by floral, woody, oriental, citrus, and fresh fragrance families." },
      { property: "og:title", content: "Shop Perfumes — Éclat Essence" },
      { property: "og:description", content: "The full Éclat Essence collection." },
    ],
  }),
  component: Shop,
});

function Shop() {
  const [filter, setFilter] = useState<Fragrance | "All">("All");
  const [q, setQ] = useState("");

  const list = useMemo(() => products.filter((p) => {
    const matchesFilter = filter === "All" || p.fragrance === filter;
    const matchesQ = !q || (p.name + p.tagline + p.fragrance).toLowerCase().includes(q.toLowerCase());
    return matchesFilter && matchesQ;
  }), [filter, q]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <header className="text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">The Collection</p>
        <h1 className="mt-2 font-display text-5xl md:text-6xl">Shop Perfumes</h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">A curated wardrobe of fragrance — find the one that feels like you.</p>
      </header>

      <div className="mt-12 flex flex-col items-center gap-5">
        <div className="flex w-full max-w-md items-center gap-3 rounded-full glass px-5 py-3">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search rose, oud, lavender…"
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {(["All", ...fragranceTypes] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f as Fragrance | "All")}
              className={`rounded-full border px-5 py-2 text-xs uppercase tracking-[0.2em] transition-all ${
                filter === f
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-card/40 hover:border-foreground/60"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
      {list.length === 0 && (
        <p className="mt-20 text-center text-muted-foreground">No fragrances match — try another note.</p>
      )}
    </div>
  );
}
