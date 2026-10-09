export type ProductCategory =
  | "vanities-counters"
  | "flow-control"
  | "marble-ceramics"
  | "collections";

export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  category: ProductCategory;
  /** Price in cents — Stripe-compatible */
  price: number;
  images: string[];
  description: string;
  material: string;
  origin: string;
  isLimitedEdition: boolean;
  featured: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  /** Subtotal in cents */
  subtotal: number;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatarUrl?: string;
}
