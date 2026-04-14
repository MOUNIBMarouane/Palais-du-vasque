import { Product, ProductCategory } from "@/types";

export const products: Product[] = [
  {
    id: "aurelius-basin-001",
    slug: "aurelius-basin",
    name: "The Aurelius Basin",
    subtitle: "Matte White Porcelain • Limited Edition",
    category: "vanities-counters",
    price: 329500,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD4kknFoUkeFeWgVuyXVTDqIbWeeNvGx8y31SSu1LQE-bcGZM70o5eFlMnSXbbu7ccVFlqiLdYmVkQlWiYxMFfQKj4U3VqmICb-5A0Em42yz5Vf4yguCLOQfjyOjwx4SHC_iLP_OEhjQ2duZJ_3rRrkwZAb3tAHG2cj2GQmYwmEXZMzTx0kG0mBM02c3OQzrH3FsG6K9r4aNtC1heBi9Q7Qq6LdMlfM625S3stgC9QFHekWHEn-s_NHPpAhPMStYNOcHdq6A586XJY",
    ],
    description:
      "An architectural statement in matte white porcelain. The Aurelius Basin merges sharp geometric lines with tactile warmth, transforming the washbasin into a centrepiece of spatial design.",
    material: "Matte White Porcelain",
    origin: "Italy",
    isLimitedEdition: true,
    featured: true,
  },
  {
    id: "titan-mixer-001",
    slug: "titan-mixer",
    name: "Titan Mixer",
    subtitle: "Brushed Steel",
    category: "flow-control",
    price: 189500,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBEifdvNfXJtOa3Tx4yNa6-FH9gE3aN5EaqSypOHlwnYlJxbLYch5BcF6rUkAXKBL7DOVT8i8zbtdrP09INiQ70wXdDnqzRXOfo7sQ_BSp95Iiw94x0cMDkdxk6HtEs5ELBuCz9mJaxUlk4i1NDV4S4XEvs2LXRVPXmMCs31MOmh5EU-SXlMEeq8VwzxOD1k-sQ4CfhOM3SPoYeCIecl-QEE-cYTA3RNmwIOIUhOVHXN5McWo24yp8HuPyQn7gu4VyStKypFlmtmmg",
    ],
    description:
      "Wall-mounted precision. The Titan Mixer balances minimalist control with industrial-grade brushed steel, engineered for decades of flawless performance.",
    material: "Brushed Steel",
    origin: "Germany",
    isLimitedEdition: false,
    featured: true,
  },
  {
    id: "opal-bath-001",
    slug: "opal-bath",
    name: "Opal Bath",
    subtitle: "Cast Stone",
    category: "vanities-counters",
    price: 589500,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCWVo2PoIYpb4UH23IYwoT2MiN4YPtpAyYbeqnhtrSpX3U1yNW3pf6GEUoSZ9F-BhyWmQr5sWcDqZ1b7aUUB9bvz9ikSVfya-EIVGLDlXh4UHoAWIl6Tt9JoJOZsn2AE5M_FuZsWuWXJCW2v1W-lDaFUXct4jlktfAWZTWyzW2JB-lw4yBvRhaCQljI-MH5__ZRB0dLDDh4nOLiKkLGGc9zmdOg6_6Mv9acPZlr0gqXvbtz-po0yhIKNnklYaGep-gj2fdeVIeuKGw",
    ],
    description:
      "A freestanding cast stone bath sculpted for meditative immersion. Opal's sun-drenched silhouette belongs equally in a Parisian pied-à-terre and a Mediterranean villa.",
    material: "Cast Stone",
    origin: "France",
    isLimitedEdition: false,
    featured: true,
  },
  {
    id: "noire-collection-001",
    slug: "noire-collection",
    name: "Noire Collection",
    subtitle: "Italian Black Marble Accessories",
    category: "marble-ceramics",
    price: 124500,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB7gBbXOlUYypIbDzfc3hemDIngj-8Lp8YX3y-q4FnwKB27HdoGGGfO0DNZ1sKTzSt5_QZ-TPa6Y8HoHl258BPx93o9g0pQlyDk4HwTfzi0iUJ2rIrWe-OAVCb9QogjvBugIh4Dl2jL5sy0Y3aidGJiUeWxoebTz63ylmDrBAeq3GPi3xUzkWrcNvJi1bXdjgSmT-eyjzLuu7R4P19kCRHc8qIhn8RP1AZodtjFNS6A3Yn_U0_qk3IvKcYOMjr-LdtsVLZHySJUCgc",
    ],
    description:
      "Italian marble accessories for the discerning home. The Noire Collection — soap dispenser, tray, and vessel — brings polished black marble drama to every surface.",
    material: "Polished Black Marble",
    origin: "Italy",
    isLimitedEdition: false,
    featured: true,
  },
];

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}

export function formatPrice(cents: number, locale = "en-US"): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(cents / 100);
}
