import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StoreProvider, useStore } from "@/lib/store";
import { ShoppingBag } from "lucide-react";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 bg-black text-white">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl">404</h1>
        <p className="mt-2 text-sm text-zinc-400">This page has drifted away like a forgotten scent.</p>
        <Link to="/" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-xs uppercase tracking-[0.2em] text-black">Return home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center px-4 bg-black text-white">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl">Something went wrong</h1>
        <p className="mt-2 text-sm text-zinc-400">{error.message}</p>
        <button onClick={() => { router.invalidate(); reset(); }} className="mt-6 rounded-full bg-white px-6 py-3 text-xs uppercase tracking-[0.2em] text-black">
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Éclat Essence — Luxury Perfumes for the Modern Woman" },
      { name: "description", content: "Discover Éclat Essence: a maison of modern luxury perfumes crafted in Grasse. Rose, lavender, oud and amber for your signature scent." },
      { property: "og:title", content: "Éclat Essence — Luxury Perfumes" },
      { property: "og:description", content: "Discover your signature scent." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <head><HeadContent /></head>
      {/* FIXED: Enforced strict pure black background on document body layout */}
      <body className="bg-black text-white !bg-black" style={{ backgroundColor: "#000000" }}>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function FloatingCart() {
  const { cartCount } = useStore();
  if (cartCount === 0) return null;
  return (
    <Link
      to="/cart"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-white px-5 py-3 text-black shadow-luxe transition-transform hover:scale-105 animate-float"
    >
      <ShoppingBag className="h-4 w-4" />
      <span className="text-xs uppercase tracking-[0.2em]">{cartCount} item{cartCount > 1 ? "s" : ""}</span>
    </Link>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        {/* FIXED: Overwrote ambient background gradients down to absolute pitch black */}
        <div 
          className="flex min-h-screen flex-col bg-black text-white !bg-none selection:bg-pink-500/30 selection:text-pink-200"
          style={{ backgroundColor: "#000000" }}
        >
          <Header />
          <main className="flex-1 bg-black !bg-none" style={{ backgroundColor: "#000000" }}>
            <Outlet />
          </main>
          <Footer />
          <FloatingCart />
        </div>
      </StoreProvider>
    </QueryClientProvider>
  );
}
