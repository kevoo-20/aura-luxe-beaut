import { Link } from "@tanstack/react-router";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border/50 bg-gradient-to-b from-transparent to-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div>
          <h3 className="font-display text-2xl">Aura Luxe<span className="text-gradient-gold"> Beauty</span></h3>
          <p className="mt-3 text-sm text-muted-foreground">Maison of modern fragrance — crafted in Grasse, worn around the world.</p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Shop</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/shop" className="hover:text-primary">All Perfumes</Link></li>
            <li><Link to="/shop" className="hover:text-primary">Bestsellers</Link></li>
            <li><Link to="/shop" className="hover:text-primary">New Arrivals</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Maison</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-primary">Our Story</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            <li><Link to="/about" className="hover:text-primary">Sustainability</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/50 px-6 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Éclat Essence. All rights reserved.
      </div>
    </footer>
  );
}
