import { Link } from "@tanstack/react-router";
import { Heart, Search, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { useStore } from "@/lib/store";

const nav = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
] as const;

export function Header() {
  const { cartCount, wishlist } = useStore();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 glass shadow-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 backdrop-blur-xl">
        <Link
          to="/"
          className="group relative flex flex-col leading-none"
        >
          <span className="text-3xl font-black tracking-[0.25em] text-white uppercase transition-all duration-300 group-hover:scale-105">
            Aura Luxe
          </span>

          <span className="text-xs tracking-[0.45em] text-pink-400 uppercase font-semibold">
            Beauty
          </span>

          {/* glowing effect */}
          <span className="absolute -inset-2 -z-10 rounded-full bg-pink-500/20 blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white"
              activeProps={{ className: "text-white" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          
          {/* STANDOUT CONTACT BUTTON */}
          <Link
            to="/contact"
            className="rounded-full border border-pink-400/40 bg-pink-500/5 px-5 py-2 text-xs uppercase font-medium tracking-[0.2em] text-pink-300 shadow-[0_0_15px_rgba(244,114,182,0.1)] transition-all duration-300 hover:scale-105 hover:border-pink-400 hover:bg-pink-500/20 hover:text-white hover:shadow-[0_0_20px_rgba(244,114,182,0.3)]"
            activeProps={{ className: "border-pink-400 bg-pink-500/20 text-white" }}
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2 text-white">
          <button onClick={() => setSearch((s) => !s)} aria-label="Search" className="rounded-full p-2 hover:bg-white/10">
            <Search className="h-5 w-5" />
          </button>
          <Link to="/shop" className="relative rounded-full p-2 hover:bg-white/10" aria-label="Wishlist">
            <Heart className="h-5 w-5" />
            {wishlist.length > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-medium text-primary-foreground">
                {wishlist.length}
              </span>
            )}
          </Link>
          <Link to="/cart" className="relative rounded-full p-2 hover:bg-white/10" aria-label="Cart">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-medium text-primary-foreground">
                {cartCount}
              </span>
            )}
          </Link>
          <button onClick={() => setOpen((o) => !o)} className="md:hidden rounded-full p-2 hover:bg-white/10" aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {search && (
        <div className="border-t border-white/10 bg-zinc-900/90 px-6 py-3 animate-fade-up">
          <div className="mx-auto flex max-w-3xl items-center gap-3">
            <Search className="h-4 w-4 text-zinc-400" />
            <input
              autoFocus
              placeholder="Search fragrances, notes, moods…"
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
            />
          </div>
        </div>
      )}

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t border-white/10 md:hidden bg-black/95 backdrop-blur-2xl">
          <div className="flex flex-col gap-2 px-6 py-4">
            {nav.map((n) => (
              <Link 
                key={n.to} 
                to={n.to} 
                onClick={() => setOpen(false)} 
                className="py-2 text-sm uppercase tracking-[0.2em] text-white/70"
                activeProps={{ className: "text-white" }}
              >
                {n.label}
              </Link>
            ))}
            
            {/* MOBILE STANDOUT CONTACT BUTTON */}
            <Link 
              to="/contact" 
              onClick={() => setOpen(false)} 
              className="mt-2 rounded-full border border-pink-400/40 bg-pink-500/10 py-3 text-center text-xs uppercase tracking-[0.2em] text-pink-300"
              activeProps={{ className: "border-pink-400 bg-pink-500/20 text-white" }}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
