import * as React from "react"
import { ProductCard } from "./product-card"
import { productPresets, type Product } from "./product-data"

interface ProductGridProps {
  products?: Product[]
}

export function ProductGrid({ products = productPresets.general }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mx-auto px-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
