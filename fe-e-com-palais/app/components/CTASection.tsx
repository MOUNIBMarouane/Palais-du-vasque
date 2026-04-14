import Image from "next/image";
import Link from "next/link";
import AnimateInView from "@/app/components/AnimateInView";

export default function CTASection() {
  return (
    <section className="py-24 px-12 md:px-24">
      <div className="max-w-[1920px] mx-auto relative overflow-hidden bg-on-surface p-12 md:p-24 text-center">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqKg1WJu0NvuVaQ5YGGwO2H1GTCnu4Te4zEtKPSuqZJT-EUqh1OQ2DKYibQZnxlVesl7D7WpTUV7svPpqNepgnE397fnKkTebzrquaw274K1FEXFeN8vtM9vgQQjH6waEAmuoGO0viS35PllS7g6Oln8-1z7HIkSAdIE3pDgP9dqBQjp1cFDmKF6eMJWcZ1NhWYB-5I2JsyvZtwjxAKv2Jd1efZqQStS6OhKLTcNeS60rLnSsgprtAocI2zUEiKN1NRwXTN8nUih4"
            alt="Subtle background texture of brushed metallic gold with soft lighting reflections"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="relative z-10">
          <AnimateInView direction="up" duration={0.9}>
            <h2 className="text-4xl md:text-6xl font-serif text-surface mb-8">
              Transform Your Space Today
            </h2>
          </AnimateInView>

          <AnimateInView direction="up" delay={0.15} duration={0.8}>
            <p className="text-surface-variant/80 text-lg max-w-2xl mx-auto mb-12 font-light">
              Connect with our concierge team to begin your journey toward a
              truly exceptional bathroom sanctuary.
            </p>
          </AnimateInView>

          <AnimateInView direction="up" delay={0.3} duration={0.7}>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Link href="/contact">
                <button className="bg-primary-container text-on-primary-container px-12 py-5 font-label uppercase tracking-widest text-xs hover:scale-[1.02] transition-all">
                  Book A Consultation
                </button>
              </Link>
              <button className="border border-surface-variant/30 text-surface px-12 py-5 font-label uppercase tracking-widest text-xs hover:bg-surface/10 transition-all">
                Download Catalog
              </button>
            </div>
          </AnimateInView>
        </div>
      </div>
    </section>
  );
}
