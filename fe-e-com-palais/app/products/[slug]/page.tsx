import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, formatPrice, products } from "@/lib/products";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import AddToCartButton from "./AddToCartButton";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <>
      <Navbar />
      <main className="pt-40 pb-32 px-12 md:px-24 bg-surface min-h-screen">
        <div className="max-w-[1920px] mx-auto">
          {/* Breadcrumb */}
          <nav className="flex gap-2 items-center mb-16 text-[11px] font-label uppercase tracking-widest text-on-surface-variant">
            <Link href="/" className="hover:text-primary transition-all">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-primary transition-all">
              Collection
            </Link>
            <span>/</span>
            <span className="text-primary">{product.name}</span>
          </nav>

          {/* Product Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
            {/* Image */}
            <div className="bg-surface-container-lowest p-12 shadow-sm">
              <div className="relative h-[600px] w-full">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  priority
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>

            {/* Info */}
            <div className="space-y-8 pt-4">
              {product.isLimitedEdition && (
                <span className="inline-block text-[9px] font-label uppercase tracking-widest bg-primary text-on-primary px-3 py-1">
                  Limited Edition
                </span>
              )}
              <div>
                <h1 className="text-5xl font-serif italic text-on-surface mb-3">
                  {product.name}
                </h1>
                <p className="text-[11px] font-label uppercase tracking-widest text-on-surface-variant/60">
                  {product.subtitle}
                </p>
              </div>
              <p className="text-3xl font-serif text-primary">
                {formatPrice(product.price)}
              </p>
              <p className="text-on-surface-variant font-light leading-relaxed">
                {product.description}
              </p>

              {/* Product Details */}
              <div className="space-y-4 pt-6 border-t border-outline-variant/20">
                <div className="flex justify-between text-sm">
                  <span className="font-label uppercase tracking-widest text-on-surface-variant text-[11px]">
                    Material
                  </span>
                  <span className="font-light">{product.material}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-label uppercase tracking-widest text-on-surface-variant text-[11px]">
                    Origin
                  </span>
                  <span className="font-light">{product.origin}</span>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="pt-4">
                <AddToCartButton product={product} />
              </div>

              <Link
                href="/contact"
                className="block text-center text-[11px] font-label uppercase tracking-widest text-on-surface-variant hover:text-primary transition-all pt-2"
              >
                Request Bespoke Consultation
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
