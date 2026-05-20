import { r as reactExports, T as jsxRuntimeExports } from "./server-C45MDBF2.js";
import { c as createLucideIcon, R as Route, u as useStore, p as products, L as Link, a as ShoppingBag, H as Heart } from "./router-BP5-iCT1.js";
import { P as ProductCard } from "./ProductCard-DL1w38f2.js";
import { M as Minus, P as Plus } from "./plus-BJXb_TwU.js";
import { T as Truck } from "./truck-BUn-tiVk.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
];
const RotateCcw = createLucideIcon("rotate-ccw", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const ShieldCheck = createLucideIcon("shield-check", __iconNode);
function ProductPage() {
  const {
    product
  } = Route.useLoaderData();
  const {
    addToCart,
    toggleWishlist,
    isWished
  } = useStore();
  const [qty, setQty] = reactExports.useState(1);
  const [size, setSize] = reactExports.useState("50ml");
  const wished = isWished(product.id);
  reactExports.useEffect(() => {
    setQty(1);
    setSize("50ml");
  }, [product.id]);
  const related = products.filter((p) => p.id !== product.id).slice(0, 3);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-foreground", children: "Home" }),
      " / ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", className: "hover:text-foreground", children: "Shop" }),
      " / ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: product.name })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid gap-12 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-6 rounded-full bg-gradient-luxe opacity-60 blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden rounded-[2.5rem] glass sparkle", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: product.image, alt: product.name, className: "aspect-[4/5] w-full object-cover" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground", children: product.fragrance }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 font-display text-5xl", children: product.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 italic text-muted-foreground", children: product.tagline })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-3xl text-gradient-gold", children: [
          "GH₵",
          product.price
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed text-foreground/80", children: product.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-muted-foreground", children: "Size" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex gap-2", children: ["30ml", "50ml", "100ml"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSize(s), className: `rounded-full border px-5 py-2 text-xs uppercase tracking-[0.2em] transition-all ${size === s ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground/60"}`, children: s }, s)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center rounded-full border border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setQty((q) => Math.max(1, q - 1)), className: "p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-8 text-center text-sm", children: qty }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setQty((q) => q + 1), className: "p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => addToCart(product, qty), className: "inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-xs uppercase tracking-[0.25em] text-background transition-transform hover:scale-[1.01]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-4 w-4" }),
            "Add to Bag"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => toggleWishlist(product.id), "aria-label": "wishlist", className: `rounded-full border p-3 transition-all ${wished ? "border-primary text-primary" : "border-border"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: `h-5 w-5 ${wished ? "fill-primary" : ""}` }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 rounded-2xl glass p-5 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg", children: "Olfactive Pyramid" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Top — " }),
            product.notes?.top?.join(", ") || "N/A"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Heart — " }),
            product.notes?.heart?.join(", ") || "N/A"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Base — " }),
            product.notes?.base?.join(", ") || "N/A"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3 text-xs", children: [{
          icon: Truck,
          text: "Free Shipping"
        }, {
          icon: RotateCcw,
          text: "30-Day Returns"
        }, {
          icon: ShieldCheck,
          text: "Authentic Guarantee"
        }].map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2 rounded-2xl border border-border p-4 text-center text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "h-5 w-5 text-primary" }),
          item.text
        ] }, index)) })
      ] })
    ] }),
    related.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl", children: "You May Also Love" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3", children: related.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p }, p.id)) })
    ] })
  ] });
}
export {
  ProductPage as component
};
