import Link from "next/link";
import CartIcon from "@/app/components/CartIcon";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fafaf5]/80 backdrop-blur-xl shadow-[0_12px_40px_rgba(26,28,25,0.04)]">
      <div className="flex justify-between items-center px-12 py-8 w-full max-w-[1920px] mx-auto">
        {/* Logo + Nav Links */}
        <div className="flex items-center gap-12">
          <Link
            href="/"
            className="text-2xl font-serif tracking-tight text-[#1a1c19]"
          >
            Palais Du Vasque
          </Link>
          <div className="hidden md:flex gap-8">
            <Link
              href="/products"
              className="text-[#735c00] border-b border-[#D4AF37]/40 pb-1 font-label uppercase tracking-[0.15rem] text-[11px]"
            >
              Collections
            </Link>
            <Link
              href="#about"
              className="text-[#1a1c19]/60 hover:text-[#735c00] transition-all duration-500 ease-out font-label uppercase tracking-[0.15rem] text-[11px]"
            >
              Atelier
            </Link>
            <Link
              href="#"
              className="text-[#1a1c19]/60 hover:text-[#735c00] transition-all duration-500 ease-out font-label uppercase tracking-[0.15rem] text-[11px]"
            >
              Heritage
            </Link>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-8">
          <div className="flex gap-4 items-center">
            <button
              aria-label="Search"
              className="material-symbols-outlined text-on-surface cursor-pointer hover:text-primary transition-all"
            >
              search
            </button>
            <CartIcon />
          </div>
          <Link href="/contact">
            <button className="bg-primary text-on-primary px-6 py-2 text-[11px] font-label uppercase tracking-widest hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
              Private Appointment
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
