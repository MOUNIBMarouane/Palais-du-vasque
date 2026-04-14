import Image from "next/image";
import AnimateInView from "@/app/components/AnimateInView";

export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-12 md:px-24 bg-surface-container-lowest">
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
        {/* Text Column — slides from left */}
        <AnimateInView direction="right" duration={0.9} className="md:col-span-5 space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif text-on-surface leading-snug">
            The Pursuit of Architectural Perfection
          </h2>
          <p className="text-on-surface-variant font-light text-lg leading-relaxed">
            At Palais Du Vasque, we believe the bathroom is a sanctuary of quiet
            reflection. Our products are more than utilities; they are sculptural
            elements that define the spatial geometry of modern luxury living.
          </p>
          <div className="pt-8 border-t border-primary-container/10 flex items-center gap-4">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmauFTdRzaZ2ozbEnIe9jESZJTUAHTeyaBIBbAR4jYxwy2kKxy44Wyvca1kPzbt_iMT2jDC2gEQwLoa8qYWrOCh4Ob5NVudqtaRRYAP9l7U64nUa5weA6g99ze3mJKFLOdjNGjHbf4-SBOxxO-oHUnlx5uppXPHvG_JpA45R4_07kMO1qGbm1hHUalJp06eUIUafoOMsfC1yP9ptqM8dTQ_To4CmFVRQkfEGpQ_vpw_oZr9QbQD8jSERlJ6MZf_RYctPLUJ6c3yiY"
              alt="Black and white close-up portrait of a senior architect in a minimal studio setting"
              width={64}
              height={64}
              className="object-cover grayscale"
            />
            <div>
              <p className="font-serif italic text-primary">FULL NAME</p>
              <p className="text-[10px] font-label uppercase tracking-widest opacity-60">
                Chief Curator
              </p>
            </div>
          </div>
        </AnimateInView>

        {/* Image Column — slides from right */}
        <AnimateInView direction="left" duration={0.9} delay={0.15} className="md:col-span-7 relative">
          <div className="relative aspect-[4/5] md:aspect-video overflow-hidden shadow-2xl">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOxdf7aC2JKhrxiFus8zGspXX_c3Sw3ZiSQUlYgsJTs24gFZx7ODhNDjxwnUAlLYDTiNzKO68STKHQ1eGGYQ-bM1MjqntKuw7kK8lkph97JGfHJSkHT9NyBZN25i8ZUd2Jpo_zWlmsJ1VNMIaFbXF9GCE-e99BNFGiJwxmGFBsRxlN89mxgdpEsTk83Q0Aa8Vy3C3XHBAVdH3dlPOBSgGmdAAaYSWSYUFJQ_5Sn1Vnz_adW7gDqa2lnFv-HFvDDnoUhU_HBQ_N07w"
              alt="Close-up detail of a brushed gold faucet on a dark gray textured stone countertop with water droplets"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          {/* Overlapping accent image */}
          <div className="absolute -bottom-12 -left-12 hidden lg:block w-64 h-80 bg-surface-container p-4 shadow-xl border border-primary-container/5">
            <div className="relative w-full h-full">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAejGkZgIMjO976PzU9ClekLzM7REg9oJ3N2wOx5U8caLdJFmZO6Ll043Y_lFVkIymm8bqKR34qp9YoB6p5QZS1OL4GaLlQ-gG2DaoIOvy8tdpXRO76PsdzZoKbHxDLvWc1tFqjy8VNXyBFKg51BUaHAWUreQL2yQxj1kAFntnmq3JuI0xaG7UAYDQpK9nANovsu_rb1ZkFFB4iu_67oIntU3lr12dd03SvNyVMa4MTSI9lWlR_uvYi1odOP9WL48E_O1tVfF3SsEU"
                alt="A stack of luxury white marble tiles with delicate grey veining, beautifully lit"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
