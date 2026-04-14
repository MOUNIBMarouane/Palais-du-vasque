"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";
import { formatPrice } from "@/lib/products";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  return (
    <>
      <Navbar />
      <main className="pt-40 pb-32 px-12 md:px-24 bg-surface min-h-screen">
        <div className="max-w-[1920px] mx-auto">
          <div className="mb-16">
            <span className="font-label uppercase tracking-[0.3rem] text-primary text-xs mb-4 block">
              Your Selection
            </span>
            <h1 className="text-5xl font-serif italic text-on-surface">
              Cart{" "}
              {totalItems > 0 && (
                <span className="text-on-surface-variant text-3xl">
                  ({totalItems})
                </span>
              )}
            </h1>
          </div>

          {items.length === 0 ? (
            <div className="text-center py-32">
              <p className="text-on-surface-variant font-light text-lg mb-8">
                Your selection is empty.
              </p>
              <Link href="/products">
                <button className="bg-primary text-on-primary px-10 py-4 font-label uppercase tracking-widest text-xs hover:bg-primary-container transition-all">
                  Explore Collection
                </button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                {items.map(({ product, quantity }) => (
                  <div
                    key={product.id}
                    className="flex gap-8 bg-surface-container-lowest p-6 shadow-sm"
                  >
                    <div className="relative w-32 h-32 shrink-0">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="font-serif text-lg">{product.name}</h3>
                      <p className="text-[10px] font-label uppercase tracking-widest opacity-50">
                        {product.subtitle}
                      </p>
                      <p className="font-serif text-primary">
                        {formatPrice(product.price)}
                      </p>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <button
                        onClick={() => removeItem(product.id)}
                        className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-all text-base"
                      >
                        close
                      </button>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          className="material-symbols-outlined text-sm text-on-surface-variant hover:text-primary transition-all"
                        >
                          remove
                        </button>
                        <span className="font-label text-sm w-4 text-center">
                          {quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          className="material-symbols-outlined text-sm text-on-surface-variant hover:text-primary transition-all"
                        >
                          add
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="bg-surface-container-lowest p-8 shadow-sm h-fit">
                <h2 className="font-serif text-2xl mb-8">Order Summary</h2>
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
                <div className="flex justify-between pt-8 mb-10">
                  <span className="font-label uppercase tracking-widest text-sm">
                    Subtotal
                  </span>
                  <span className="font-serif text-xl text-primary">
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <Link href="/checkout">
                  <button className="w-full bg-primary text-on-primary py-5 font-label uppercase tracking-widest text-xs hover:bg-primary-container transition-all duration-300">
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
