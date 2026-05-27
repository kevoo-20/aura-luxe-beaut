import { createFileRoute, Link } from "@tanstack/react-router";
import { useStore } from "@/lib/store";
import { Minus, Plus, Trash2, ShoppingBag, Lock } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      /* Updated header title meta to Aura Luxe Beauty */
      { title: "Your Bag — Aura Luxe Beauty" },
      { name: "description", content: "Review your Aura Luxe Beauty bag and proceed to a secure, beautifully packaged checkout." },
    ],
  }),
  component: Cart,
});

function Cart() {
  const { cart, setQty, removeFromCart, cartTotal, clearCart } = useStore();
  const [step, setStep] = useState<"bag" | "checkout" | "done">("bag");
  /* Changed complimentary threshold from $150 to GH₵150, flat shipping rate to GH₵20 */
  const shipping = cartTotal > 0 ? (cartTotal > 150 ? 0 : 20) : 0;
  const total = cartTotal + shipping;

  if (cart.length === 0 && step !== "done") {
    return (
      /* Added mt-16 to clear the fixed navigation header */
      <div className="mx-auto max-w-xl px-6 py-32 mt-16 text-center text-white">
        <ShoppingBag className="mx-auto h-12 w-12 text-zinc-500" />
        <h1 className="mt-6 font-display text-4xl">Your bag is empty</h1>
        <p className="mt-3 text-zinc-400 text-sm">Discover the maison and find your signature scent.</p>
        {/* Changed button styling to match pink theme accent */}
        <Link to="/shop" className="mt-8 inline-flex rounded-full bg-pink-500 px-7 py-3.5 text-xs uppercase font-semibold tracking-[0.25em] text-white hover:bg-pink-600 transition-colors">
          Shop perfumes
        </Link>
      </div>
    );
  }

  if (step === "done") {
    return (
      <div className="mx-auto max-w-xl px-6 py-32 mt-16 text-center text-white">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-pink-500/10 border border-pink-500/30 text-2xl">✨</div>
        <h1 className="mt-6 font-display text-4xl">Order confirmed</h1>
        <p className="mt-3 text-zinc-400 text-sm">Your fragrances are being hand-wrapped. A confirmation will be sent to you shortly.</p>
        <Link to="/shop" className="mt-8 inline-flex rounded-full bg-pink-500 px-7 py-3.5 text-xs uppercase font-semibold tracking-[0.25em] text-white hover:bg-pink-600 transition-colors">
          Continue shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 mt-16 text-white">
      <h1 className="font-display text-5xl text-white">{step === "bag" ? "Your Bag" : "Checkout"}</h1>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-4">
          {step === "bag" && cart.map((item) => (
            /* Swapped glass container token with explicit zinc background layout styles */
            <div key={item.product.id} className="flex gap-4 rounded-2xl p-4 bg-zinc-900/60 border border-white/10 backdrop-blur-sm">
              <img src={item.product.image} alt={item.product.name} className="h-28 w-28 rounded-xl object-cover border border-white/5" />
              <div className="flex flex-1 flex-col">
                <div className="flex justify-between gap-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-medium">{item.product.fragrance}</p>
                    <h3 className="font-display text-xl text-white mt-0.5">{item.product.name}</h3>
                  </div>
                  {/* Replaced $ character token symbols with local Ghanaian Cedis (GH₵) */}
                  <p className="font-display text-lg text-amber-400 font-medium">GH₵{(item.product.price * item.qty).toFixed(2)}</p>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <div className="inline-flex items-center rounded-full border border-white/10 bg-black/40">
                    <button onClick={() => setQty(item.product.id, item.qty - 1)} className="p-2 text-zinc-400 hover:text-white transition-colors"><Minus className="h-3 w-3" /></button>
                    <span className="w-8 text-center text-sm font-semibold">{item.qty}</span>
                    <button onClick={() => setQty(item.product.id, item.qty + 1)} className="p-2 text-zinc-400 hover:text-white transition-colors"><Plus className="h-3 w-3" /></button>
                  </div>
                  <button onClick={() => removeFromCart(item.product.id)} className="text-zinc-500 hover:text-pink-400 transition-colors">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {step === "checkout" && (
            <form
              onSubmit={(e) => { e.preventDefault(); clearCart(); setStep("done"); }}
              className="space-y-6"
            >
              <Section title="Contact">
                <Field label="Email"><input type="email" required className="field" /></Field>
              </Section>
              <Section title="Shipping">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="First name"><input required className="field" /></Field>
                  <Field label="Last name"><input required className="field" /></Field>
                </div>
                <Field label="Address"><input required className="field" /></Field>
                <div className="grid gap-4 sm:grid-cols-3">
                  <Field label="City"><input required className="field" /></Field>
                  <Field label="Postcode"><input required className="field" /></Field>
                  {/* Default checkout country value altered from France to Ghana */}
                  <Field label="Country"><input required defaultValue="Ghana" className="field" /></Field>
                </div>
              </Section>
              <Section title="Payment">
                <Field label="Card number"><input required placeholder="•••• •••• •••• ••••" className="field" /></Field>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Expiry"><input required placeholder="MM / YY" className="field" /></Field>
                  <Field label="CVC"><input required placeholder="•••" className="field" /></Field>
                </div>
              </Section>
              {/* Changed payment trigger action button style to pink palette design styles */}
              <button className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-pink-500 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-white transition-transform hover:scale-[1.01] hover:bg-pink-600 shadow-[0_0_20px_rgba(244,114,182,0.2)]">
                <Lock className="h-4 w-4" /> Place order — GH₵{total.toFixed(2)}
              </button>
            </form>
          )}
        </div>

        {/* Swapped aside layout token with dark luxury panels */}
        <aside className="h-fit space-y-4 rounded-3xl bg-zinc-900/60 border border-white/10 p-6 backdrop-blur-sm">
          <h2 className="font-display text-2xl text-white">Order summary</h2>
          <div className="space-y-2 text-sm">
            <Row k="Subtotal" v={`GH₵${cartTotal.toFixed(2)}`} />
            <Row k="Shipping" v={shipping === 0 ? "Complimentary" : `GH₵${shipping.toFixed(2)}`} />
            <div className="border-t border-white/10 pt-3" />
            <Row k="Total" v={`GH₵${total.toFixed(2)}`} bold />
          </div>
          {step === "bag" && (
            <button onClick={() => setStep("checkout")} className="mt-4 w-full rounded-full bg-pink-500 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] text-white hover:bg-pink-600 transition-colors shadow-[0_0_20px_rgba(244,114,182,0.2)]">
              Proceed to checkout
            </button>
          )}
          <p className="text-xs text-zinc-500 mt-2 leading-relaxed">Free shipping on orders over GH₵150 · Safely wrapped and dispatched locally.</p>
        </aside>
      </div>

      {/* Overrode style variables dynamically to implement dark charcoal field colors */}
      <style>{`.field { width: 100%; border-radius: 9999px; border: 1px solid rgba(255,255,255,0.1); background: rgba(24,24,27,0.8); color: #ffffff; padding: 0.85rem 1.25rem; font-size: 0.875rem; outline: none; transition: all 0.3s ease; }
      .field:focus { border-color: rgba(244,114,182,0.5); box-shadow: 0 0 0 2px rgba(244,114,182,0.15); }
      .field::placeholder { color: #52525b; }`}</style>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-zinc-900/60 border border-white/10 backdrop-blur-sm space-y-4 rounded-3xl p-6">
      <h2 className="font-display text-xl text-white">{title}</h2>
      {children}
    </div>
  );
}
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-zinc-400 font-medium">{label}</span>
      {children}
    </label>
  );
}
function Row({ k, v, bold }: { k: string; v: string; bold?: boolean }) {
  return (
    <div className={`flex justify-between ${bold ? "font-display text-lg text-amber-400 font-semibold" : "text-zinc-300"}`}>
      <span className={bold ? "text-white font-normal" : "text-zinc-400"}>{k}</span>
      <span>{v}</span>
    </div>
  );
}
