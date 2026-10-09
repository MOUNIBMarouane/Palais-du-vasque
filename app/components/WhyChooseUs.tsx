import Image from "next/image";
import AnimateInView from "@/app/components/AnimateInView";
import { StaggerContainer, StaggerItem } from "@/app/components/StaggerInView";

const features = [
  {
    icon: "diamond",
    title: "Unrivaled Materials",
    body: "Sourced from the finest quarries in Italy and artisans in Japan, our materials are selected for their longevity and unique character.",
  },
  {
    icon: "architecture",
    title: "Modern Precision",
    body: "Every curve and angle is mathematically optimized for both visual harmony and ergonomic comfort.",
  },
  {
    icon: "eco",
    title: "Sustainable Legacy",
    body: "Our production processes minimize waste, ensuring that the luxury we create doesn't cost the earth.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-32 bg-surface-container">
      <div className="max-w-[1920px] mx-auto px-12 md:px-24 flex flex-col md:flex-row gap-24 items-center">
        {/* Marble Frame Image — slides from left */}
        <AnimateInView direction="right" duration={1} className="w-full md:w-1/2">
          <div className="relative p-6 border border-primary-container/10 bg-surface-container-lowest shadow-2xl">
            <div className="absolute inset-0 border-[0.5rem] border-surface-container m-4 pointer-events-none" />
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf_e1oBJUq3U2AC1gwlKuv95m9I9vfH2dRBXOuqJIxAQsGhlgpVvgptt1qKlxRQxsoIUuHPb9Eo8_MMUuzE0vKPYiSP1GvucrsdwbERUC7KZ5hGUhsslFxC8A0Egrry5_P1oRv1YtcIb3gCo5m-3AxIF4dvX6lDJl0x7AeEqHqji4BxvHbE6Qy5A4rjN_OUSP5M2zRIMkUdNdB_QsPFR3R_hwUek6ykOW1q-yEzmufCfqd4EhEa01APVLM0VtbqzOZy0t8cCYQDN0"
              alt="Detailed close-up of high quality grey marble with natural stone textures and veins"
              width={800}
              height={600}
              className="w-full h-[600px] object-cover"
            />
          </div>
        </AnimateInView>

        {/* Features — stagger from right */}
        <div className="w-full md:w-1/2 space-y-12">
          <AnimateInView direction="left" duration={0.8} delay={0.1}>
            <div className="space-y-4">
              <h2 className="text-5xl font-serif italic">Why Palais Du Vasque</h2>
              <p className="text-on-surface-variant font-light text-lg">
                We export excellence to over 40 countries, ensuring that luxury
                knows no borders.
              </p>
            </div>
          </AnimateInView>

          <StaggerContainer className="space-y-10" delay={0.2}>
            {features.map((feat) => (
              <StaggerItem key={feat.title} className="flex gap-6">
                <span className="material-symbols-outlined text-4xl text-primary-container shrink-0">
                  {feat.icon}
                </span>
                <div>
                  <h4 className="font-serif text-xl mb-2">{feat.title}</h4>
                  <p className="text-sm font-light text-on-surface-variant leading-relaxed">
                    {feat.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
