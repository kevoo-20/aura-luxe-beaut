import { T as jsxRuntimeExports } from "./server-C45MDBF2.js";
import { c as createLucideIcon } from "./router-BP5-iCT1.js";
import { M as MessageSquare } from "./message-square-D-Y_15df.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$2 = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode);
function Contact() {
  const whatsappMessage = encodeURIComponent("Hello Éclat Essence ✨ I would like to inquire about your perfumes.");
  const whatsappUrl = `https://wa.me/233509689565?text=${whatsappMessage}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6 py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground", children: "We'd love to hear from you" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 font-display text-5xl md:text-6xl", children: "Contact Us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-2xl text-sm text-muted-foreground", children: "Speak directly with our fragrance concierge on WhatsApp for orders, consultations, gifting, and personalized recommendations." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 grid gap-10 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: [{
        icon: MapPin,
        title: "Location",
        detail: "Accra, Ghana"
      }, {
        icon: Mail,
        title: "Email",
        detail: "hello@eclatessence.com"
      }, {
        icon: Phone,
        title: "Phone",
        detail: "+233 509 689 565"
      }].map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass flex items-start gap-4 rounded-3xl p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-full bg-secondary p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "h-5 w-5 text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-muted-foreground", children: item.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm", children: item.detail })
        ] })
      ] }, index)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass flex flex-col items-center justify-center rounded-[2rem] p-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-10 w-10 text-green-500" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 font-display text-3xl md:text-4xl", children: "Chat Directly on WhatsApp" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-md text-sm text-muted-foreground", children: "Have questions about our fragrances, delivery, gifting, or recommendations? Message us directly and receive a quick personalized response." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: whatsappUrl, target: "_blank", rel: "noopener noreferrer", className: "mt-8 inline-flex items-center gap-3 rounded-full bg-green-500 px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-white transition-transform hover:scale-[1.03]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-5 w-5" }),
          "Open WhatsApp Chat"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs text-muted-foreground", children: "Available daily • Fast response time" })
      ] })
    ] })
  ] });
}
export {
  Contact as component
};
