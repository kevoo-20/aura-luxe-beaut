import { r as reactExports, T as jsxRuntimeExports } from "./server-C45MDBF2.js";
import { p as products, S as Search, f as fragranceTypes } from "./router-BP5-iCT1.js";
import { P as ProductCard } from "./ProductCard-DL1w38f2.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function Shop() {
  const [filter, setFilter] = reactExports.useState("All");
  const [q, setQ] = reactExports.useState("");
  const list = reactExports.useMemo(() => products.filter((p) => {
    const matchesFilter = filter === "All" || p.fragrance === filter;
    const matchesQ = !q || (p.name + p.tagline + p.fragrance).toLowerCase().includes(q.toLowerCase());
    return matchesFilter && matchesQ;
  }), [filter, q]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground", children: "The Collection" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 font-display text-5xl md:text-6xl", children: "Shop Perfumes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-xl text-muted-foreground", children: "A curated wardrobe of fragrance — find the one that feels like you." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-col items-center gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full max-w-md items-center gap-3 rounded-full glass px-5 py-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Search rose, oud, lavender…", className: "w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-2", children: ["All", ...fragranceTypes].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setFilter(f), className: `rounded-full border px-5 py-2 text-xs uppercase tracking-[0.2em] transition-all ${filter === f ? "border-foreground bg-foreground text-background" : "border-border bg-card/40 hover:border-foreground/60"}`, children: f }, f)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3", children: list.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p }, p.id)) }),
    list.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-20 text-center text-muted-foreground", children: "No fragrances match — try another note." })
  ] });
}
export {
  Shop as component
};
