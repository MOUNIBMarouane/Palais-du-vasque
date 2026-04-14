import Image from "next/image";
import Link from "next/link";
import AnimateInView from "@/app/components/AnimateInView";
import { StaggerContainer, StaggerItem } from "@/app/components/StaggerInView";

const categories = [
  {
    label: "Foundations",
    name: "Vanities & Counters",
    href: "/products?category=vanities-counters",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC42_Q_6uFVWIAYSs2Uk2vEd_N9S0PrHRcIrtmG30ZCgrGDS1UXnYk_Bpt3c50QWI0ARtWrYbMWVDor0aj4NSwI3_s40dP38X2PJqdXsCnfVQooeyUOsvk3NqUcpU2ALgK-DirkJpxB7t4Gmv_qG89bPUyPdsDl9N8pi2Nh4Hn3v5aRa9teaJXCSP_fMyK5-Z1ThYiDsHzI3sKOgMqqk8kNPR299PLIm-N4k7zreIWHDwHM551dDUvcxzkQvBNogTh6QaPuf7uhF20",
    alt: "Luxury bathroom vanity with large circular mirror and modern lighting fixtures",
  },
  {
    label: "Precision",
    name: "Flow Control",
    href: "/products?category=flow-control",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCAdzU27ES9j2_2ageqvDKnlK0EFuIIj62eCvEuF97lXt9vTmbhJ4-Hs-tC54tcdQqbErxYdmVji95mLEfpnKXDJMxFXV3EsxFCcniP2gV90wz163bxCuTC2PCFq8XqTuMN50wPfT7DybZMkwLWe0dnetI69aO9b2uU_hGT807G0L7A5Zi0O-sqsv8tiA7ZcxB4lqrDuxEGOO42PvMMgRQnakEGx7MQxSniP9aJIiSZiJ60UzRP9g4GqRNYXrVYlkEEMT9b5mY5iHI",
    alt: "Minimalist shower area with glass partition and designer rain shower head",
  },
  {
    label: "Surfaces",
    name: "Marble & Ceramics",
    href: "/products?category=marble-ceramics",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCYwYA_tv6YOOvugTJmCz9NPWFZZJlThgRU_CpxPTG3t-Lzmdj3sgwPRRLxbcRcj5l4aM6GGE2TAVDOuMtxHhq2M89eXppZIks1AnueQ-IrmmtYGm8bF9BKJ-PgDNLQWr_0zLUNZJEpMpUFFfH_DuFGD0r-XeRe5ETlaK6N5ZsPer7ziv2_1tfbW4BokGWpNtxusL0HR2Mqfwj0fm9n2KnCXK12FzA7-EX4_Tz7H2ug0_WaoVm5joHJLeDbo3KSQPcV3OtUPsHE_uU",
    alt: "Artistic shot of high-end ceramic tiles in shades of beige and cream with natural texture",
  },
];

export default function CategoriesSection() {
  return (
    <section className="py-32 px-12 md:px-24">
      <div className="max-w-[1920px] mx-auto">
        <AnimateInView direction="up" className="mb-24">
          <h2 className="text-center text-4xl font-serif italic">
            Architectural Tiers
          </h2>
        </AnimateInView>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {categories.map((cat) => (
            <StaggerItem key={cat.name}>
              <Link
                href={cat.href}
                className="relative h-[600px] group cursor-pointer overflow-hidden block"
              >
                <Image
                  src={cat.image}
                  alt={cat.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-12 left-12 right-12">
                  <span className="text-[10px] font-label uppercase tracking-widest text-primary mb-2 block">
                    {cat.label}
                  </span>
                  <h3 className="text-3xl font-serif text-on-surface">
                    {cat.name}
                  </h3>
                  <div className="h-[1px] w-0 group-hover:w-full bg-primary-container/40 transition-all duration-700 mt-4" />
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
