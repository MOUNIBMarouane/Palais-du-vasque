"use client";

import { useCart } from "@/app/context/CartContext";
import { Product } from "@/types";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <button
      onClick={() => addItem(product)}
      className="w-full bg-primary text-on-primary py-5 font-label uppercase tracking-widest text-xs hover:bg-primary-container transition-all duration-300"
    >
      Add to Selection
    </button>
  );
}
