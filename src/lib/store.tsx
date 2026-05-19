import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Product } from "./products";

type CartItem = { product: Product; qty: number };

type StoreCtx = {
  cart: CartItem[];
  wishlist: string[];
  theme: "light" | "dark";
  addToCart: (p: Product, qty?: number) => void;
  removeFromCart: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  toggleWishlist: (id: string) => void;
  isWished: (id: string) => boolean;
  toggleTheme: () => void;
  cartTotal: number;
  cartCount: number;
  clearCart: () => void;
};

const Ctx = createContext<StoreCtx | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    try {
      const c = localStorage.getItem("ee_cart");
      const w = localStorage.getItem("ee_wish");
      const t = localStorage.getItem("ee_theme") as "light" | "dark" | null;
      if (c) setCart(JSON.parse(c));
      if (w) setWishlist(JSON.parse(w));
      if (t) setTheme(t);
    } catch {}
  }, []);

  useEffect(() => { localStorage.setItem("ee_cart", JSON.stringify(cart)); }, [cart]);
  useEffect(() => { localStorage.setItem("ee_wish", JSON.stringify(wishlist)); }, [wishlist]);
  useEffect(() => {
    localStorage.setItem("ee_theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const addToCart = (p: Product, qty = 1) =>
    setCart((c) => {
      const found = c.find((i) => i.product.id === p.id);
      if (found) return c.map((i) => i.product.id === p.id ? { ...i, qty: i.qty + qty } : i);
      return [...c, { product: p, qty }];
    });
  const removeFromCart = (id: string) => setCart((c) => c.filter((i) => i.product.id !== id));
  const setQty = (id: string, qty: number) =>
    setCart((c) => qty <= 0 ? c.filter((i) => i.product.id !== id) : c.map((i) => i.product.id === id ? { ...i, qty } : i));
  const toggleWishlist = (id: string) =>
    setWishlist((w) => w.includes(id) ? w.filter((x) => x !== id) : [...w, id]);
  const isWished = (id: string) => wishlist.includes(id);
  const toggleTheme = () => setTheme((t) => t === "light" ? "dark" : "light");
  const clearCart = () => setCart([]);

  const cartTotal = cart.reduce((s, i) => s + i.product.price * i.qty, 0);
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <Ctx.Provider value={{ cart, wishlist, theme, addToCart, removeFromCart, setQty, toggleWishlist, isWished, toggleTheme, cartTotal, cartCount, clearCart }}>
      {children}
    </Ctx.Provider>
  );
}

export function useStore() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useStore must be used inside StoreProvider");
  return c;
}
