import Image from "next/image";
import Link from "next/link";
import { getFeaturedProducts } from "@/lib/products";
import AnimateInView from "@/app/components/AnimateInView";
import { StaggerContainer, StaggerItem } from "@/app/components/StaggerInView";

export default function ProductShowcase() {
  const products = getFeaturedProducts();
  const [aurelius, titan, opal, noire] = products;

  return (
    <section className="py-32 bg-surface-container-low px-12 md:px-24">
      <div className="max-w-[1920px] mx-auto">
        {/* Header */}
        <AnimateInView direction="up" className="flex justify-between items-end mb-20">
          <div>
            <span className="font-label uppercase tracking-widest text-primary text-xs mb-4 block">
              Selection 2024
            </span>
            <h2 className="text-5xl font-serif">Featured Masterpieces</h2>
          </div>
          <Link
            href="/products"
            className="font-label uppercase tracking-widest text-xs border-b border-primary/40 pb-2 hover:text-primary transition-all"
          >
            View All Products
          </Link>
        </AnimateInView>

        {/* Bento Grid — staggered cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-6 h-auto md:h-[800px]">
          {/* Aurelius Basin — Large featured 2×2 */}
          {aurelius && (
            <StaggerItem className="md:col-span-2 md:row-span-2">
              <Link
                href={`/products/${aurelius.slug}`}
                className="group relative h-full overflow-hidden bg-surface-container-lowest p-8 cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-700 flex"
              >
                <div className="h-full w-full flex flex-col justify-between">
                  <div className="relative h-[70%] w-full">
                    <Image
                      src={aurelius.images[0]}
                      alt={aurelius.name}
                      fill
                      style={{ objectFit: "contain" }}
                      className="group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif mb-2">{aurelius.name}</h3>
                    <p className="text-xs font-label uppercase tracking-widest opacity-50">
                      {aurelius.subtitle}
                    </p>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          )}

          {/* Titan Mixer */}
          {titan && (
            <StaggerItem>
              <Link
                href={`/products/${titan.slug}`}
                className="group relative overflow-hidden bg-surface-container-lowest p-6 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-700 flex flex-col h-full"
              >
                <div className="relative h-48 w-full mb-4">
                  <Image
                    src={titan.images[0]}
                    alt={titan.name}
                    fill
                    style={{ objectFit: "contain" }}
                    className="group-hover:-translate-y-1 transition-transform"
                  />
                </div>
                <h3 className="text-lg font-serif">{titan.name}</h3>
                <p className="text-[10px] font-label uppercase tracking-widest opacity-50">
                  {titan.subtitle}
                </p>
              </Link>
            </StaggerItem>
          )}

          {/* Opal Bath */}
          {opal && (
            <StaggerItem>
              <Link
                href={`/products/${opal.slug}`}
                className="group relative overflow-hidden bg-surface-container-lowest p-6 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-700 flex flex-col h-full"
              >
                <div className="relative h-48 w-full mb-4">
                  <Image
                    src={opal.images[0]}
                    alt={opal.name}
                    fill
                    style={{ objectFit: "contain" }}
                    className="group-hover:-translate-y-1 transition-transform"
                  />
                </div>
                <h3 className="text-lg font-serif">{opal.name}</h3>
                <p className="text-[10px] font-label uppercase tracking-widest opacity-50">
                  {opal.subtitle}
                </p>
              </Link>
            </StaggerItem>
          )}

          {/* Noire Collection — Wide bottom 2×1 */}
          {noire && (
            <StaggerItem className="md:col-span-2">
              <Link
                href={`/products/${noire.slug}`}
                className="group relative h-full overflow-hidden bg-surface-container-lowest p-8 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-700 flex items-center gap-8"
              >
                <div className="relative w-1/2 h-full min-h-[160px]">
                  <Image
                    src={noire.images[0]}
                    alt={noire.name}
                    fill
                    style={{ objectFit: "cover" }}
                    className="group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-serif mb-4">{noire.name}</h3>
                  <p className="text-sm font-light text-on-surface-variant mb-6">
                    Italian marble accessories for the discerning home.
                  </p>
                  <span className="material-symbols-outlined text-primary">
                    arrow_right_alt
                  </span>
                </div>
              </Link>
            </StaggerItem>
          )}
        </StaggerContainer>
      </div>
    </section>
  );
}
