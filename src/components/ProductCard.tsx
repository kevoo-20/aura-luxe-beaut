import { Link } from "@tanstack/react-router";
import { Heart, ShoppingBag } from "lucide-react";
import type { Product } from "@/lib/products";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart, toggleWishlist, isWished } = useStore();
  const wished = isWished(product.id);
  return (
    /* Changed bg-card/60 to zinc-900/60 and changed border to white/10 for a sleek dark look */
    <div className="group hover-lift relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/60 backdrop-blur-sm text-white">
      <Link to="/product/$id" params={{ id: product.id }} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-zinc-800 to-black">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="sparkle absolute inset-0" />
          {product.bestseller && (
            /* Changed badge background to dark glass with white text */
            <span className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-zinc-300 backdrop-blur">
              Bestseller
            </span>
          )}
        </div>
      </Link>

      <button
        onClick={() => toggleWishlist(product.id)}
        aria-label="Wishlist"
        /* Changed button background to translucent black circle */
        className="absolute right-4 top-4 rounded-full bg-black/60 p-2 backdrop-blur transition-colors hover:bg-black/80"
      >
        {/* Updated pink active fill state to match your Aura Luxe branding */}
        <Heart className={cn("h-4 w-4 transition-colors", wished ? "fill-pink-500 text-pink-500" : "text-white/70")} />
      </button>

      <div className="space-y-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            {/* Swapped text-muted-foreground for a permanent light gold/gray tone */}
            <p className="text-[10px] uppercase tracking-[0.2em] text-yellow-600/80 font-medium">{product.fragrance}</p>
            <Link to="/product/$id" params={{ id: product.id }}>
              {/* Changed hover title color to transition into pink accents */}
              <h3 className="font-display text-xl leading-tight text-white hover:text-pink-400 transition-colors mt-0.5">{product.name}</h3>
            </Link>
          </div>
          {/* Changed text gold gradient color styling directly to a bright gold text class */}
          <p className="font-display text-lg font-semibold text-amber-400">GH₵{product.price}</p>
        </div>
        {/* Soft white tone for product descriptions */}
        <p className="line-clamp-2 text-sm text-zinc-400">{product.tagline}</p>
        <button
          onClick={() => addToCart(product)}
          /* Rewrote button color styles: deep brown-charcoal background, thin borders, hover turns pink */
          className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-[#2d2222] py-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-white transition-all hover:bg-pink-500/20 hover:border-pink-500/40 hover:text-pink-300"
        >
          <ShoppingBag className="h-3.5 w-3.5" />
          Add to bag
        </button>
      </div>
    </div>
  );
}
