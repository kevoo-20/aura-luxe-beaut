import { r as reactExports, T as jsxRuntimeExports } from "./server-C45MDBF2.js";
import { c as createLucideIcon, u as useStore, a as ShoppingBag, L as Link } from "./router-BP5-iCT1.js";
import { M as Minus, P as Plus } from "./plus-BJXb_TwU.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
];
const Lock = createLucideIcon("lock", __iconNode$1);
const __iconNode = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
];
const Trash2 = createLucideIcon("trash-2", __iconNode);
function Cart() {
  const {
    cart,
    setQty,
    removeFromCart,
    cartTotal,
    clearCart
  } = useStore();
  const [step, setStep] = reactExports.useState("bag");
  const shipping = cartTotal > 0 ? cartTotal > 150 ? 0 : 12 : 0;
  const total = cartTotal + shipping;
  if (cart.length === 0 && step !== "done") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-xl px-6 py-32 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "mx-auto h-12 w-12 text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-6 font-display text-4xl", children: "Your bag is empty" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Discover the maison and find your signature scent." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", className: "mt-8 inline-flex rounded-full bg-foreground px-7 py-3.5 text-xs uppercase tracking-[0.25em] text-background", children: "Shop perfumes" })
    ] });
  }
  if (step === "done") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-xl px-6 py-32 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-2xl", children: "✨" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-6 font-display text-4xl", children: "Order confirmed" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Your fragrances are being hand-wrapped. A confirmation has been sent to your inbox." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/shop", className: "mt-8 inline-flex rounded-full bg-foreground px-7 py-3.5 text-xs uppercase tracking-[0.25em] text-background", children: "Continue shopping" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl", children: step === "bag" ? "Your Bag" : "Checkout" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 grid gap-10 lg:grid-cols-[1.5fr_1fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        step === "bag" && cart.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass flex gap-4 rounded-2xl p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.product.image, alt: item.product.name, className: "h-28 w-28 rounded-xl object-cover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.2em] text-muted-foreground", children: item.product.fragrance }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl", children: item.product.name })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-lg text-gradient-gold", children: [
                "$",
                (item.product.price * item.qty).toFixed(2)
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center rounded-full border border-border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setQty(item.product.id, item.qty - 1), className: "p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-3 w-3" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-8 text-center text-sm", children: item.qty }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setQty(item.product.id, item.qty + 1), className: "p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3 w-3" }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => removeFromCart(item.product.id), className: "text-muted-foreground hover:text-destructive", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) })
            ] })
          ] })
        ] }, item.product.id)),
        step === "checkout" && /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
          e.preventDefault();
          clearCart();
          setStep("done");
        }, className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Contact", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", required: true, className: "field" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "Shipping", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "First name", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, className: "field" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Last name", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, className: "field" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Address", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, className: "field" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "City", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, className: "field" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Postcode", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, className: "field" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Country", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, defaultValue: "France", className: "field" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "Payment", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Card number", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, placeholder: "•••• •••• •••• ••••", className: "field" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Expiry", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, placeholder: "MM / YY", className: "field" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "CVC", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, placeholder: "•••", className: "field" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground py-4 text-xs uppercase tracking-[0.25em] text-background transition-transform hover:scale-[1.01]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-4 w-4" }),
            " Place order — $",
            total.toFixed(2)
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "h-fit space-y-4 rounded-3xl glass p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl", children: "Order summary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "Subtotal", v: `$${cartTotal.toFixed(2)}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "Shipping", v: shipping === 0 ? "Complimentary" : `$${shipping.toFixed(2)}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border pt-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "Total", v: `$${total.toFixed(2)}`, bold: true })
        ] }),
        step === "bag" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setStep("checkout"), className: "mt-4 w-full rounded-full bg-foreground py-3.5 text-xs uppercase tracking-[0.25em] text-background", children: "Proceed to checkout" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Free shipping on orders over $150 · Hand-wrapped in our atelier." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `.field { width: 100%; border-radius: 9999px; border: 1px solid var(--color-border); background: color-mix(in oklab, var(--card) 80%, transparent); padding: 0.85rem 1.25rem; font-size: 0.875rem; outline: none; }
      .field:focus { box-shadow: 0 0 0 2px color-mix(in oklab, var(--gold) 40%, transparent); }` })
  ] });
}
function Section({
  title,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass space-y-4 rounded-3xl p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl", children: title }),
    children
  ] });
}
function Field({
  label,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-2 block text-xs uppercase tracking-[0.25em] text-muted-foreground", children: label }),
    children
  ] });
}
function Row({
  k,
  v,
  bold
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex justify-between ${bold ? "font-display text-lg" : ""}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: bold ? "" : "text-muted-foreground", children: k }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: v })
  ] });
}
export {
  Cart as component
};
