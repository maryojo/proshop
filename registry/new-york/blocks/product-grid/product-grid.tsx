import * as React from "react"
import { ProductCard, type Product } from "./product-card"

const products: Product[] = [
  {
    id: 1,
    name: "Classic Leather Boots",
    price: "$129.00",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&h=800&auto=format&fit=crop",
    category: "Footwear"
  },
  {
    id: 2,
    name: "Minimalist Watch",
    price: "$89.00",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600&h=800&auto=format&fit=crop",
    category: "Accessories"
  },
  {
    id: 3,
    name: "Canvas Backpack",
    price: "$65.00",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600&h=800&auto=format&fit=crop",
    category: "Bags"
  },
  {
    id: 4,
    name: "Wireless Headphones",
    price: "$199.00",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&h=800&auto=format&fit=crop",
    category: "Electronics"
  }
]

export function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mx-auto px-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
