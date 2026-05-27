import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { fragranceTypes, products, type Fragrance } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { Search } from "lucide-react";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      /* Updated header metadata strings to match your new Aura Luxe branding */
      { title: "Shop Perfumes — Aura Luxe Beauty" },
      { name: "description", content: "Browse the full Aura Luxe Beauty perfume collection. Filter by floral, woody, oriental, citrus, and fresh fragrance families." },
      { property: "og:title", content: "Shop Perfumes — Aura Luxe Beauty" },
      { property: "og:description", content: "The full Aura Luxe Beauty collection." },
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
    /* Added mt-16 to shift everything safely downward from your top navigation layer */
    <div className="mx-auto max-w-7xl px-6 py-16 mt-16 text-white">
      <header className="text-center">
        {/* Adjusted typography style states away from default gray muted variables */}
        <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">The Collection</p>
        <h1 className="mt-2 font-display text-5xl md:text-6xl text-white">Shop Perfumes</h1>
        <p className="mx-auto mt-4 max-w-xl text-zinc-400 text-sm">A curated wardrobe of fragrance — find the one that feels like you.</p>
      </header>

      <div className="mt-12 flex flex-col items-center gap-5">
        {/* Swapped general glass container for a rich translucent charcoal wrapper */}
        <div className="flex w-full max-w-md items-center gap-3 rounded-full bg-zinc-900/60 border border-white/10 px-5 py-3 backdrop-blur-sm">
          <Search className="h-4 w-4 text-zinc-400" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search rose, oud, lavender…"
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {(["All", ...fragranceTypes] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f as Fragrance | "All")}
              /* Re-styled search category bubbles to follow the pink highlight and slate theme */
              className={`rounded-full border px-5 py-2 text-xs uppercase tracking-[0.2em] transition-all duration-300 ${
                filter === f
                  ? "border-pink-500 bg-pink-500 text-white shadow-[0_0_15px_rgba(244,114,182,0.3)]"
                  : "border-white/10 bg-zinc-900/40 text-zinc-300 hover:border-white/30 hover:text-white"
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
        <p className="mt-20 text-center text-zinc-500 text-sm">No fragrances match — try another note.</p>
      )}
    </div>
  );
}
