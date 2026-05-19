import { createFileRoute, Link } from "@tanstack/react-router";
import { useStore } from "@/lib/store";
import { Minus, Plus, Trash2, ShoppingBag, Lock } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Bag — Éclat Essence" },
      { name: "description", content: "Review your Éclat Essence bag and proceed to a secure, beautifully packaged checkout." },
    ],
  }),
  component: Cart,
});

function Cart() {
  const { cart, setQty, removeFromCart, cartTotal, clearCart } = useStore();
  const [step, setStep] = useState<"bag" | "checkout" | "done">("bag");
  const shipping = cartTotal > 0 ? (cartTotal > 150 ? 0 : 12) : 0;
  const total = cartTotal + shipping;

  if (cart.length === 0 && step !== "done") {
    return (
      <div className="mx-auto max-w-xl px-6 py-32 text-center">
        <ShoppingBag className="mx-auto h-12 w-12 text-muted-foreground" />
        <h1 className="mt-6 font-display text-4xl">Your bag is empty</h1>
        <p className="mt-3 text-muted-foreground">Discover the maison and find your signature scent.</p>
        <Link to="/shop" className="mt-8 inline-flex rounded-full bg-foreground px-7 py-3.5 text-xs uppercase tracking-[0.25em] text-background">Shop perfumes</Link>
      </div>
    );
  }

  if (step === "done") {
    return (
      <div className="mx-auto max-w-xl px-6 py-32 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-2xl">✨</div>
        <h1 className="mt-6 font-display text-4xl">Order confirmed</h1>
        <p className="mt-3 text-muted-foreground">Your fragrances are being hand-wrapped. A confirmation has been sent to your inbox.</p>
        <Link to="/shop" className="mt-8 inline-flex rounded-full bg-foreground px-7 py-3.5 text-xs uppercase tracking-[0.25em] text-background">Continue shopping</Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="font-display text-5xl">{step === "bag" ? "Your Bag" : "Checkout"}</h1>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-4">
          {step === "bag" && cart.map((item) => (
            <div key={item.product.id} className="glass flex gap-4 rounded-2xl p-4">
              <img src={item.product.image} alt={item.product.name} className="h-28 w-28 rounded-xl object-cover" />
              <div className="flex flex-1 flex-col">
                <div className="flex justify-between gap-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{item.product.fragrance}</p>
                    <h3 className="font-display text-xl">{item.product.name}</h3>
                  </div>
                  <p className="font-display text-lg text-gradient-gold">${(item.product.price * item.qty).toFixed(2)}</p>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <div className="inline-flex items-center rounded-full border border-border">
                    <button onClick={() => setQty(item.product.id, item.qty - 1)} className="p-2"><Minus className="h-3 w-3" /></button>
                    <span className="w-8 text-center text-sm">{item.qty}</span>
                    <button onClick={() => setQty(item.product.id, item.qty + 1)} className="p-2"><Plus className="h-3 w-3" /></button>
                  </div>
                  <button onClick={() => removeFromCart(item.product.id)} className="text-muted-foreground hover:text-destructive">
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
                  <Field label="Country"><input required defaultValue="France" className="field" /></Field>
                </div>
              </Section>
              <Section title="Payment">
                <Field label="Card number"><input required placeholder="•••• •••• •••• ••••" className="field" /></Field>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Expiry"><input required placeholder="MM / YY" className="field" /></Field>
                  <Field label="CVC"><input required placeholder="•••" className="field" /></Field>
                </div>
              </Section>
              <button className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground py-4 text-xs uppercase tracking-[0.25em] text-background transition-transform hover:scale-[1.01]">
                <Lock className="h-4 w-4" /> Place order — ${total.toFixed(2)}
              </button>
            </form>
          )}
        </div>

        <aside className="h-fit space-y-4 rounded-3xl glass p-6">
          <h2 className="font-display text-2xl">Order summary</h2>
          <div className="space-y-2 text-sm">
            <Row k="Subtotal" v={`$${cartTotal.toFixed(2)}`} />
            <Row k="Shipping" v={shipping === 0 ? "Complimentary" : `$${shipping.toFixed(2)}`} />
            <div className="border-t border-border pt-3" />
            <Row k="Total" v={`$${total.toFixed(2)}`} bold />
          </div>
          {step === "bag" && (
            <button onClick={() => setStep("checkout")} className="mt-4 w-full rounded-full bg-foreground py-3.5 text-xs uppercase tracking-[0.25em] text-background">
              Proceed to checkout
            </button>
          )}
          <p className="text-xs text-muted-foreground">Free shipping on orders over $150 · Hand-wrapped in our atelier.</p>
        </aside>
      </div>

      <style>{`.field { width: 100%; border-radius: 9999px; border: 1px solid var(--color-border); background: color-mix(in oklab, var(--card) 80%, transparent); padding: 0.85rem 1.25rem; font-size: 0.875rem; outline: none; }
      .field:focus { box-shadow: 0 0 0 2px color-mix(in oklab, var(--gold) 40%, transparent); }`}</style>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="glass space-y-4 rounded-3xl p-6">
      <h2 className="font-display text-xl">{title}</h2>
      {children}
    </div>
  );
}
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
function Row({ k, v, bold }: { k: string; v: string; bold?: boolean }) {
  return (
    <div className={`flex justify-between ${bold ? "font-display text-lg" : ""}`}>
      <span className={bold ? "" : "text-muted-foreground"}>{k}</span>
      <span>{v}</span>
    </div>
  );
}
