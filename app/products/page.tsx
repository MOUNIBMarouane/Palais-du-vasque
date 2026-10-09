import Link from "next/link";
import Image from "next/image";
import { getFeaturedProducts, getProductsByCategory, formatPrice } from "@/lib/products";
import { ProductCategory } from "@/types";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

interface Props {
  searchParams: Promise<{ category?: ProductCategory }>;
}

const categoryLabels: Record<string, string> = {
  "vanities-counters": "Vanities & Counters",
  "flow-control": "Flow Control",
  "marble-ceramics": "Marble & Ceramics",
  collections: "Collections",
};

const filterTabs = [
  { key: undefined, label: "All Pieces" },
  { key: "vanities-counters", label: "Vanities & Counters" },
  { key: "flow-control", label: "Flow Control" },
  { key: "marble-ceramics", label: "Marble & Ceramics" },
];

export default async function ProductsPage({ searchParams }: Props) {
  const { category } = await searchParams;
  const products = category
    ? getProductsByCategory(category as ProductCategory)
    : getFeaturedProducts();

  return (
    <>
      <Navbar />
      <main className="pt-40 pb-32 px-12 md:px-24 bg-surface min-h-screen">
        <div className="max-w-[1920px] mx-auto">
          {/* Page Header */}
          <div className="mb-16">
            <span className="font-label uppercase tracking-[0.3rem] text-primary text-xs mb-4 block">
              The Collection
            </span>
            <h1 className="text-5xl md:text-6xl font-serif italic text-on-surface">
              {category ? categoryLabels[category] ?? "Products" : "All Pieces"}
            </h1>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-6 mb-20 border-b border-outline-variant/20 pb-8">
            {filterTabs.map((tab) => (
              <Link
                key={tab.label}
                href={tab.key ? `/products?category=${tab.key}` : "/products"}
                className={`font-label uppercase tracking-widest text-xs pb-2 transition-all ${
                  category === tab.key
                    ? "text-primary border-b border-primary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {tab.label}
              </Link>
            ))}
          </div>

          {/* Product Grid */}
          {products.length === 0 ? (
            <p className="text-on-surface-variant font-light text-lg">
              No products found in this category yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  className="group bg-surface-container-lowest p-8 shadow-sm hover:shadow-2xl transition-all duration-700 cursor-pointer"
                >
                  <div className="relative h-72 w-full mb-6">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      style={{ objectFit: "contain" }}
                      className="group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-xl font-serif mb-1">{product.name}</h3>
                      <p className="text-[10px] font-label uppercase tracking-widest opacity-50">
                        {product.subtitle}
                      </p>
                    </div>
                    <p className="font-serif text-lg text-primary">
                      {formatPrice(product.price)}
                    </p>
                  </div>
                  {product.isLimitedEdition && (
                    <span className="mt-4 inline-block text-[9px] font-label uppercase tracking-widest bg-primary text-on-primary px-3 py-1">
                      Limited Edition
                    </span>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
