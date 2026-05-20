import { T as jsxRuntimeExports } from "./server-C45MDBF2.js";
import { c as createLucideIcon, p as products, L as Link } from "./router-BP5-iCT1.js";
import { P as ProductCard } from "./ProductCard-DL1w38f2.js";
import { T as Truck } from "./truck-BUn-tiVk.js";
import { M as MessageSquare } from "./message-square-D-Y_15df.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$3 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
];
const Award = createLucideIcon("award", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
      key: "nnexq3"
    }
  ],
  ["path", { d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12", key: "mt58a7" }]
];
const Leaf = createLucideIcon("leaf", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
      key: "1s2grr"
    }
  ],
  ["path", { d: "M20 2v4", key: "1rf3ol" }],
  ["path", { d: "M22 4h-4", key: "gwowj6" }],
  ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
];
const Sparkles = createLucideIcon("sparkles", __iconNode);
const heroImg = "/assets/coco-Dwviaa9I.jpeg";
function Home() {
  const featured = products.filter((p) => p.featured);
  const bestsellers = products.filter((p) => p.bestseller);
  const whatsappMessage = encodeURIComponent("Hello Aura Luxe Beauty! I would like to discover your new scents and receive a complimentary sample with my first order. ✨");
  const whatsappUrl = `https://wa.me/233509689565?text=${whatsappMessage}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8 animate-fade-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-gold/40 bg-card/40 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-muted-foreground backdrop-blur", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3 text-gold" }),
          "New Maison Collection"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl leading-[1.05] md:text-7xl", children: [
          "Discover your",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-gradient-gold", children: "signature" }),
          " ",
          "scent"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-md text-base text-muted-foreground md:text-lg", children: "Long-lasting fragrances crafted to elevate your presence. From soft florals to bold woody accords, discover a signature scent for every personality, gender, and occasion." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/shop", className: "inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-xs uppercase tracking-[0.25em] text-background transition-transform hover:scale-[1.02]", children: [
            "Shop the Collection",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "inline-flex items-center rounded-full border border-foreground/30 px-7 py-3.5 text-xs uppercase tracking-[0.25em] hover:border-foreground", children: "Our Story" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6 pt-4 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "★★★★★ 4.9 / 5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "•" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Crafted in Grasse, France" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-8 rounded-full bg-gradient-luxe opacity-70 blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden rounded-[2.5rem] glass ring-gold sparkle", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "Éclat Essence signature perfume bottle", width: 1600, height: 1280, className: "aspect-[5/6] w-full object-cover animate-float" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-6 -left-6 hidden rounded-2xl glass p-4 md:block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.25em] text-muted-foreground", children: "Notes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg", children: "Rose · Iris · Amber" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12 flex items-end justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground", children: "Maison Edit" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 font-display text-4xl md:text-5xl", children: "Featured Fragrances" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/shop", className: "hidden items-center gap-2 text-xs uppercase tracking-[0.25em] hover:text-primary md:inline-flex", children: [
          "View All",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-3", children: featured.map((product) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product }, product.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-luxe/30 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground", children: "Loved by All" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 font-display text-4xl md:text-5xl", children: "Bestsellers" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex gap-6 overflow-x-auto pb-6 [scrollbar-width:thin]", children: bestsellers.map((product) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-[280px] max-w-[320px] flex-1 sm:min-w-[320px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product }) }, product.id)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground", children: "The Éclat Promise" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 font-display text-4xl md:text-5xl", children: "Why Choose Us" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-6 md:grid-cols-4", children: [{
        icon: Award,
        title: "Master Perfumers",
        text: "Crafted in Grasse by award-winning noses."
      }, {
        icon: Leaf,
        title: "Clean Ingredients",
        text: "Ethically sourced, cruelty-free, vegan."
      }, {
        icon: Sparkles,
        title: "Hand-Poured",
        text: "Each bottle finished by hand in our atelier."
      }, {
        icon: Truck,
        title: "Complimentary Shipping",
        text: "On every order, beautifully packaged."
      }].map((feature, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hover-lift glass rounded-3xl p-8 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(feature.icon, { className: "h-6 w-6 text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display text-xl", children: feature.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: feature.text })
      ] }, index)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground", children: "Whispers from the World" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 font-display text-4xl md:text-5xl", children: "She Wears Éclat" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-6 md:grid-cols-3", children: [{
        name: "Amélie R.",
        quote: "Rose Éclat is the most romantic scent I've ever owned. People stop me on the street.",
        role: "Accra"
      }, {
        name: "Léa M.",
        quote: "Violette Nuit feels like silk on the skin. My new evening signature.",
        role: "Kumasi"
      }, {
        name: "Saanvi K.",
        quote: "The packaging alone is a gift. The fragrance is poetry.",
        role: "Koforidua"
      }].map((testimonial, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "hover-lift glass rounded-3xl p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gold", children: "★★★★★" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "mt-4 font-display text-lg italic leading-relaxed", children: [
          '"',
          testimonial.quote,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-6 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: testimonial.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
            " ",
            "· ",
            testimonial.role
          ] })
        ] })
      ] }, index)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-[2.5rem] bg-gradient-luxe p-10 text-center md:p-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sparkle absolute inset-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-foreground/60", children: "Connect With Us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mx-auto mt-3 max-w-2xl font-display text-4xl md:text-5xl", children: [
          "Discover New",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-gradient-gold", children: "Scents" }),
          " ",
          "on WhatsApp"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-md text-sm text-foreground/70", children: "Get access to private launches, direct consultations, and a complimentary sample with your first order." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-8 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: whatsappUrl, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-background transition-transform hover:scale-[1.02]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-4 w-4" }),
          "Chat Directly via WhatsApp"
        ] }) })
      ] })
    ] }) })
  ] });
}
export {
  Home as component
};
