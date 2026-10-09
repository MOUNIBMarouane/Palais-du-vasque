"use client";

import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

export default function CartIcon() {
  const { totalItems } = useCart();

  return (
    <Link href="/cart" className="relative cursor-pointer group">
      <span className="material-symbols-outlined text-on-surface group-hover:text-primary transition-all">
        shopping_bag
      </span>
      {totalItems > 0 && (
        <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-primary text-on-primary text-[9px] font-label flex items-center justify-center">
          {totalItems > 9 ? "9+" : totalItems}
        </span>
      )}
    </Link>
  );
}
