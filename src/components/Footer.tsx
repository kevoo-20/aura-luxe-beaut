import { Link } from "@tanstack/react-router";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    /* Changed background from secondary tokens to a rich dark zinc fade */
    <footer className="mt-32 border-t border-white/5 bg-gradient-to-b from-transparent to-zinc-950/80 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="space-y-4">
          <h3 className="font-display text-2xl tracking-wide">
            Aura Luxe<span className="text-pink-400"> Beauty</span>
          </h3>
          {/* Swapped Grasse for your local storefront headquarters origin location text */}
          <p className="text-sm text-zinc-400 leading-relaxed">
            Maison of modern fragrance — curated in Accra, worn around the world.
          </p>
          {/* Added visual anchors for social media profiles */}
          <div className="flex items-center gap-4 text-zinc-500">
            <a href="#" className="hover:text-pink-400 transition-colors" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
            <a href="#" className="hover:text-pink-400 transition-colors" aria-label="Twitter"><Twitter className="h-4 w-4" /></a>
            <a href="#" className="hover:text-pink-400 transition-colors" aria-label="Facebook"><Facebook className="h-4 w-4" /></a>
            <a href="#" className="hover:text-pink-400 transition-colors" aria-label="Youtube"><Youtube className="h-4 w-4" /></a>
          </div>
        </div>
        
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-medium">Shop</p>
          <ul className="mt-4 space-y-2 text-sm text-zinc-400">
            <li><Link to="/shop" className="hover:text-pink-400 transition-colors">All Perfumes</Link></li>
            <li><Link to="/shop" className="hover:text-pink-400 transition-colors">Bestsellers</Link></li>
            <li><Link to="/shop" className="hover:text-pink-400 transition-colors">New Arrivals</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-medium">Maison</p>
          <ul className="mt-4 space-y-2 text-sm text-zinc-400">
            <li><Link to="/about" className="hover:text-pink-400 transition-colors">Our Story</Link></li>
            <li><Link to="/contact" className="hover:text-pink-400 transition-colors">Contact</Link></li>
            <li><Link to="/about" className="hover:text-pink-400 transition-colors">Sustainability</Link></li>
          </ul>
        </div>
      </div>

      {/* Corrected the hardcoded legal trademark attribution to your brand name */}
      <div className="border-t border-white/5 px-6 py-6 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Aura Luxe Beauty. All rights reserved.
      </div>
    </footer>
  );
}
