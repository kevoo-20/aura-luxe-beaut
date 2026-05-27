import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { products } from "@/lib/products";
import { useStore } from "@/lib/store";

import { ProductCard } from "@/components/ProductCard";

import {
  Heart,
  Minus,
  Plus,
  ShoppingBag,
  Truck,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";

export const Route = createFileRoute("/product/$id")({
  loader: ({ params }) => {
    const product = products.find((p) => p.id === params.id);
    if (!product) {
      throw notFound();
    }
    return { product };
  },

  head: ({ loaderData }) => ({
    meta: [
      /* Swapped out the old brand name inside page meta tab templates */
      { title: `${loaderData?.product?.name ?? "Perfume"} — Aura Luxe Beauty` },
      { name: "description", content: loaderData?.product?.description ?? "" },
      { property: "og:title", content: `${loaderData?.product?.name ?? ""} — Aura Luxe Beauty` },
      { property: "og:description", content: loaderData?.product?.tagline ?? "" },
      { property: "og:image", content: loaderData?.product?.image ?? "" },
    ],
  }),

  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { addToCart, toggleWishlist, isWished } = useStore();

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("50ml");

  const wished = isWished(product.id);

  useEffect(() => {
    setQty(1);
    setSize("50ml");
  }, [product.id]);

  const related = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    /* Added mt-16 layout offset to prevent content overlapping with fixed header element */
    <div className="mx-auto max-w-7xl px-6 py-12 mt-16 text-white">
      {/* BREADCRUMB */}
      <nav className="text-xs uppercase tracking-[0.2em] text-zinc-400">
        <Link to="/" className="hover:text-white transition-colors">Home</Link>
        {" / "}
        <Link to="/shop" className="hover:text-white transition-colors">Shop</Link>
        {" / "}
        <span className="text-zinc-200">{product.name}</span>
      </nav>

      {/* PRODUCT SECTION */}
      <div className="mt-8 grid gap-12 md:grid-cols-2">
        {/* IMAGE */}
        <div className="relative">
          <div className="absolute -inset-6 rounded-full bg-pink-500/10 opacity-60 blur-3xl" />
          {/* Swapped generic glass classes out for a dark framed canvas border wrapper */}
          <div className="relative overflow-hidden rounded-[2.5rem] bg-zinc-900 border border-white/10 shadow-2xl">
            <img
              src={product.image}
              alt={product.name}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>

        {/* DETAILS */}
        <div className="space-y-6">
          {/* TITLE */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-pink-400 font-semibold">
              {product.fragrance}
            </p>
            <h1 className="mt-2 font-display text-5xl text-white">
              {product.name}
            </h1>
            <p className="mt-2 italic text-zinc-400">
              {product.tagline}
            </p>
          </div>

          {/* PRICE */}
          <p className="font-display text-3xl font-semibold text-amber-400">
            GH₵{product.price}
          </p>

          {/* DESCRIPTION */}
          <p className="leading-relaxed text-zinc-300 text-sm">
            {product.description}
          </p>

          {/* SIZE */}
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-medium">
              Size
            </p>
            <div className="mt-3 flex gap-2">
              {["30ml", "50ml", "100ml"].map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  /* Re-styled option tags to switch explicitly between zinc surfaces and branding pink */
                  className={`rounded-full border px-5 py-2 text-xs uppercase tracking-[0.2em] transition-all duration-300 ${
                    size === s
                      ? "border-pink-500 bg-pink-500 text-white shadow-[0_0_15px_rgba(244,114,182,0.3)]"
                      : "border-white/10 bg-zinc-900/40 text-zinc-300 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* QUANTITY + ACTIONS */}
          <div className="flex flex-wrap items-center gap-4">
            {/* QUANTITY COUNTER */}
            <div className="inline-flex items-center rounded-full border border-white/10 bg-zinc-900/40">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="p-3 text-zinc-400 hover:text-white transition-colors">
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-8 text-center text-sm font-semibold">{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} className="p-3 text-zinc-400 hover:text-white transition-colors">
                <Plus className="h-4 w-4" />
              </button>
            </div>

            {/* ADD TO CART ACTION */}
            <button
              onClick={() => addToCart(product, qty)}
              /* Refactored button class variables to use deep rich pink brand themes */
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-pink-500 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-white transition-all hover:bg-pink-600 shadow-[0_0_20px_rgba(244,114,182,0.2)]"
            >
              <ShoppingBag className="h-4 w-4" />
              Add to Bag
            </button>

            {/* WISHLIST TOGGLE */}
            <button
              onClick={() => toggleWishlist(product.id)}
              aria-label="wishlist"
              className={`rounded-full border p-3 transition-all duration-300 ${
                wished 
                  ? "border-pink-500 text-pink-500 bg-pink-500/10 shadow-[0_0_15px_rgba(244,114,182,0.2)]" 
                  : "border-white/10 bg-zinc-900/40 text-zinc-400 hover:border-white/30 hover:text-white"
              }`}
            >
              <Heart className={`h-5 w-5 ${wished ? "fill-pink-500" : ""}`} />
            </button>
          </div>

          {/* NOTES GRID PANEL */}
          <div className="grid gap-3 rounded-2xl p-5 text-sm bg-zinc-900/60 border border-white/10 backdrop-blur-sm">
            <p className="font-display text-lg text-white">Olfactive Pyramid</p>
            <p className="text-zinc-200">
              <span className="text-zinc-400 font-medium">Top — </span>
              {product.notes?.top?.join(", ") || "N/A"}
            </p>
            <p className="text-zinc-200">
              <span className="text-zinc-400 font-medium">Heart — </span>
              {product.notes?.heart?.join(", ") || "N/A"}
            </p>
            <p className="text-zinc-200">
              <span className="text-zinc-400 font-medium">Base — </span>
              {product.notes?.base?.join(", ") || "N/A"}
            </p>
          </div>

          {/* TRUST BADGE FEATURES */}
          <div className="grid grid-cols-3 gap-3 text-xs">
            {[
              { icon: Truck, text: "Free Shipping" },
              { icon: RotateCcw, text: "30-Day Returns" },
              { icon: ShieldCheck, text: "Authentic Guarantee" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-zinc-900/30 p-4 text-center text-zinc-400"
              >
                <item.icon className="h-5 w-5 text-pink-400" />
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      {related.length > 0 && (
        <section className="mt-24">
          <h2 className="font-display text-3xl text-white">You May Also Love</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
