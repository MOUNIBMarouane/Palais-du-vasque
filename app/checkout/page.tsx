"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import { formatPrice } from "@/lib/products";
import { createPaymentIntent } from "./actions";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const result = await createPaymentIntent(subtotal);
    if (result.error) {
      setError(result.error);
      setLoading(false);
      return;
    }

    // TODO: Use result.clientSecret with Stripe.js to confirm payment
    // Example: stripe.confirmPayment({ elements, clientSecret: result.clientSecret })
    clearCart();
    setLoading(false);
  };

  if (items.length === 0) {
    return (
      <>
        <Navbar />
        <main className="pt-40 pb-32 px-12 md:px-24 bg-surface min-h-screen flex items-center justify-center">
          <div className="text-center">
            <p className="text-on-surface-variant font-light text-lg mb-8">
              Your cart is empty.
            </p>
            <Link href="/products">
              <button className="bg-primary text-on-primary px-10 py-4 font-label uppercase tracking-widest text-xs hover:bg-primary-container transition-all">
                Explore Collection
              </button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-40 pb-32 px-12 md:px-24 bg-surface min-h-screen">
        <div className="max-w-[1920px] mx-auto">
          <div className="mb-16">
            <span className="font-label uppercase tracking-[0.3rem] text-primary text-xs mb-4 block">
              Secure Checkout
            </span>
            <h1 className="text-5xl font-serif italic text-on-surface">
              Complete Your Order
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Checkout Form */}
            <form
              onSubmit={handleSubmit}
              className="lg:col-span-2 space-y-8"
            >
              {/* Contact Info */}
              <section className="space-y-6">
                <h2 className="font-serif text-xl">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant block">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-transparent border-b border-outline-variant/40 py-3 text-sm font-light focus:outline-none focus:border-primary transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant block">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-transparent border-b border-outline-variant/40 py-3 text-sm font-light focus:outline-none focus:border-primary transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant block">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-transparent border-b border-outline-variant/40 py-3 text-sm font-light focus:outline-none focus:border-primary transition-all"
                  />
                </div>
              </section>

              {/* Shipping */}
              <section className="space-y-6 pt-8 border-t border-outline-variant/20">
                <h2 className="font-serif text-xl">Shipping Address</h2>
                <div className="space-y-2">
                  <label className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant block">
                    Address
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent border-b border-outline-variant/40 py-3 text-sm font-light focus:outline-none focus:border-primary transition-all"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant block">
                      City
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-transparent border-b border-outline-variant/40 py-3 text-sm font-light focus:outline-none focus:border-primary transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant block">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-transparent border-b border-outline-variant/40 py-3 text-sm font-light focus:outline-none focus:border-primary transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant block">
                      Country
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-transparent border-b border-outline-variant/40 py-3 text-sm font-light focus:outline-none focus:border-primary transition-all"
                    />
                  </div>
                </div>
              </section>

              {/* Payment — Stripe placeholder */}
              <section className="space-y-6 pt-8 border-t border-outline-variant/20">
                <h2 className="font-serif text-xl">Payment</h2>
                <div className="bg-surface-container p-6 text-sm font-light text-on-surface-variant">
                  {/* TODO: Mount Stripe Elements here */}
                  <p className="text-[11px] font-label uppercase tracking-widest">
                    Payment integration coming soon — see{" "}
                    <code className="lowercase">app/checkout/actions.ts</code>
                  </p>
                </div>
              </section>

              {error && (
                <p className="text-error text-sm font-light">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-on-primary py-5 font-label uppercase tracking-widest text-xs hover:bg-primary-container transition-all duration-300 disabled:opacity-50"
              >
                {loading ? "Processing..." : `Pay ${formatPrice(subtotal)}`}
              </button>
            </form>

            {/* Order Summary */}
            <div className="bg-surface-container-lowest p-8 shadow-sm h-fit">
              <h2 className="font-serif text-2xl mb-8">Your Order</h2>
              <div className="space-y-4 pb-8 border-b border-outline-variant/20">
                {items.map(({ product, quantity }) => (
                  <div key={product.id} className="flex justify-between text-sm">
                    <span className="font-light text-on-surface-variant">
                      {product.name} × {quantity}
                    </span>
                    <span className="font-serif">
                      {formatPrice(product.price * quantity)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between pt-8">
                <span className="font-label uppercase tracking-widest text-sm">
                  Total
                </span>
                <span className="font-serif text-xl text-primary">
                  {formatPrice(subtotal)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
