import { Link } from "@tanstack/react-router";
import { Heart, ShoppingBag } from "lucide-react";
import type { Product } from "@/lib/products";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart, toggleWishlist, isWished } = useStore();
  const wished = isWished(product.id);
  return (
    <div className="group hover-lift relative overflow-hidden rounded-3xl border border-border/60 bg-card/60 backdrop-blur-sm">
      <Link to="/product/$id" params={{ id: product.id }} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-gradient-luxe">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="sparkle absolute inset-0" />
          {product.bestseller && (
            <span className="absolute left-4 top-4 rounded-full bg-card/80 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-foreground/80 backdrop-blur">
              Bestseller
            </span>
          )}
        </div>
      </Link>

      <button
        onClick={() => toggleWishlist(product.id)}
        aria-label="Wishlist"
        className="absolute right-4 top-4 rounded-full bg-card/80 p-2 backdrop-blur transition-colors hover:bg-card"
      >
        <Heart className={cn("h-4 w-4 transition-colors", wished ? "fill-primary text-primary" : "text-foreground/70")} />
      </button>

      <div className="space-y-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{product.fragrance}</p>
            <Link to="/product/$id" params={{ id: product.id }}>
              <h3 className="font-display text-xl leading-tight hover:text-primary">{product.name}</h3>
            </Link>
          </div>
          <p className="font-display text-lg text-gradient-gold">GH₵{product.price}</p>
        </div>
        <p className="line-clamp-2 text-sm text-muted-foreground">{product.tagline}</p>
        <button
          onClick={() => addToCart(product)}
          className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full border border-foreground/80 bg-foreground py-2.5 text-xs uppercase tracking-[0.25em] text-background transition-all hover:bg-primary hover:border-primary"
        >
          <ShoppingBag className="h-3.5 w-3.5" />
          Add to bag
        </button>
      </div>
    </div>
  );
}
