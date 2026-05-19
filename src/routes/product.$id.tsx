import { createFileRoute, Link, notFound, useParams } from "@tanstack/react-router";
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
      { title: `${loaderData?.product?.name ?? "Perfume"} — Éclat Essence` },
      { name: "description", content: loaderData?.product?.description ?? "" },
      { property: "og:title", content: `${loaderData?.product?.name ?? ""} — Éclat Essence` },
      { property: "og:description", content: loaderData?.product?.tagline ?? "" },
      { property: "og:image", content: loaderData?.product?.image ?? "" },
    ],
  }),

  component: ProductPage,
});

function ProductPage() {
  // 1. Get the data from the loader
  const { product } = Route.useLoaderData();

  // 2. Destructure the store methods (Make sure this only appears ONCE)
  const { addToCart, toggleWishlist, isWished } = useStore();

  // 3. Set local state variables
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("50ml");

  const wished = isWished(product.id);

  // Reset selections when switching products
  useEffect(() => {
    setQty(1);
    setSize("50ml");
  }, [product.id]);

  // Related products (filters out the current open product completely)
  const related = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      {/* BREADCRUMB */}
      <nav className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <Link to="/" className="hover:text-foreground">Home</Link>
        {" / "}
        <Link to="/shop" className="hover:text-foreground">Shop</Link>
        {" / "}
        <span className="text-foreground">{product.name}</span>
      </nav>

      {/* PRODUCT SECTION */}
      <div className="mt-8 grid gap-12 md:grid-cols-2">
        {/* IMAGE */}
        <div className="relative">
          <div className="absolute -inset-6 rounded-full bg-gradient-luxe opacity-60 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.5rem] glass sparkle">
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
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {product.fragrance}
            </p>
            <h1 className="mt-2 font-display text-5xl">
              {product.name}
            </h1>
            <p className="mt-2 italic text-muted-foreground">
              {product.tagline}
            </p>
          </div>

          {/* PRICE */}
          <p className="font-display text-3xl text-gradient-gold">
            GH₵{product.price}
          </p>

          {/* DESCRIPTION */}
          <p className="leading-relaxed text-foreground/80">
            {product.description}
          </p>

          {/* SIZE */}
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Size
            </p>
            <div className="mt-3 flex gap-2">
              {["30ml", "50ml", "100ml"].map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`rounded-full border px-5 py-2 text-xs uppercase tracking-[0.2em] transition-all ${
                    size === s
                      ? "border-foreground bg-foreground text-background"
                      : "border-border hover:border-foreground/60"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* QUANTITY + ACTIONS */}
          <div className="flex flex-wrap items-center gap-4">
            {/* QUANTITY */}
            <div className="inline-flex items-center rounded-full border border-border">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="p-3">
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-8 text-center text-sm">{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} className="p-3">
                <Plus className="h-4 w-4" />
              </button>
            </div>

            {/* ADD TO CART */}
            <button
              onClick={() => addToCart(product, qty)}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-xs uppercase tracking-[0.25em] text-background transition-transform hover:scale-[1.01]"
            >
              <ShoppingBag className="h-4 w-4" />
              Add to Bag
            </button>

            {/* WISHLIST */}
            <button
              onClick={() => toggleWishlist(product.id)}
              aria-label="wishlist"
              className={`rounded-full border p-3 transition-all ${
                wished ? "border-primary text-primary" : "border-border"
              }`}
            >
              <Heart className={`h-5 w-5 ${wished ? "fill-primary" : ""}`} />
            </button>
          </div>

          {/* NOTES */}
          <div className="grid gap-3 rounded-2xl glass p-5 text-sm">
            <p className="font-display text-lg">Olfactive Pyramid</p>
            <p>
              <span className="text-muted-foreground">Top — </span>
              {product.notes?.top?.join(", ") || "N/A"}
            </p>
            <p>
              <span className="text-muted-foreground">Heart — </span>
              {product.notes?.heart?.join(", ") || "N/A"}
            </p>
            <p>
              <span className="text-muted-foreground">Base — </span>
              {product.notes?.base?.join(", ") || "N/A"}
            </p>
          </div>

          {/* FEATURES */}
          <div className="grid grid-cols-3 gap-3 text-xs">
            {[
              { icon: Truck, text: "Free Shipping" },
              { icon: RotateCcw, text: "30-Day Returns" },
              { icon: ShieldCheck, text: "Authentic Guarantee" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 rounded-2xl border border-border p-4 text-center text-muted-foreground"
              >
                <item.icon className="h-5 w-5 text-primary" />
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      {related.length > 0 && (
        <section className="mt-24">
          <h2 className="font-display text-3xl">You May Also Love</h2>
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
