import Link from "next/link";
import Navbar from "@/app/components/Navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="h-screen flex flex-col items-center justify-center bg-surface">
        <span className="font-label uppercase tracking-[0.3rem] text-primary text-sm mb-6 block">
          404
        </span>
        <h1 className="text-5xl md:text-7xl font-serif italic text-on-surface mb-6">
          Page Not Found
        </h1>
        <p className="text-on-surface-variant font-light text-lg mb-12 max-w-md text-center">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/">
          <button className="bg-primary text-on-primary px-10 py-4 font-label uppercase tracking-widest text-xs hover:bg-primary-container transition-all">
            Return Home
          </button>
        </Link>
      </main>
    </>
  );
}
