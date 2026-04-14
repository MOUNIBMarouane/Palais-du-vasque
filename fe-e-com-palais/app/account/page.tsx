import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

// TODO: Integrate authentication with NextAuth.js v5 or Clerk
// - npm install next-auth@beta  OR  npm install @clerk/nextjs
// - Wrap layout with SessionProvider / ClerkProvider
// - Replace this page with authenticated account dashboard

export default function AccountPage() {
  return (
    <>
      <Navbar />
      <main className="pt-40 pb-32 px-12 md:px-24 bg-surface min-h-screen flex items-center justify-center">
        <div className="text-center max-w-xl">
          <span className="font-label uppercase tracking-[0.3rem] text-primary text-xs mb-6 block">
            Member Access
          </span>
          <h1 className="text-5xl font-serif italic text-on-surface mb-6">
            Your Account
          </h1>
          <p className="text-on-surface-variant font-light leading-relaxed mb-12">
            Sign in to manage your orders, track shipments, and access exclusive
            atelier services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-on-primary px-10 py-4 font-label uppercase tracking-widest text-xs hover:bg-primary-container transition-all">
              Sign In
            </button>
            <button className="border border-outline-variant/30 px-10 py-4 font-label uppercase tracking-widest text-xs hover:bg-surface-container transition-all">
              Create Account
            </button>
          </div>
          <div className="mt-16 pt-16 border-t border-outline-variant/20">
            <Link
              href="/contact"
              className="text-[11px] font-label uppercase tracking-widest text-on-surface-variant hover:text-primary transition-all"
            >
              Or request a Private Appointment
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
