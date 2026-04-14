import AnimateInView from "@/app/components/AnimateInView";

export default function Testimonials() {
  return (
    <section className="py-32 px-12 md:px-24 bg-surface text-center">
      <div className="max-w-4xl mx-auto">
        <AnimateInView direction="fade" duration={0.7}>
          <span className="material-symbols-outlined text-6xl text-primary-container/20 mb-12 block">
            format_quote
          </span>
        </AnimateInView>

        <AnimateInView direction="up" delay={0.15} duration={0.9}>
          <blockquote className="text-3xl md:text-4xl font-serif italic text-on-surface leading-snug mb-12">
            &ldquo;Palais Du Vasque transformed our penthouse project into a
            gallery of architectural beauty. Their attention to material finish
            is simply unparalleled in the export market.&rdquo;
          </blockquote>
        </AnimateInView>

        <AnimateInView direction="up" delay={0.3} duration={0.7}>
          <div className="flex flex-col items-center">
            <p className="font-label uppercase tracking-[0.2rem] text-sm mb-1">
              Adrian Thorne
            </p>
            <p className="text-[10px] font-label uppercase tracking-widest text-primary opacity-60">
              Lead Architect, Skyline Studios
            </p>
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
