import * as React from "react"
import { ShoppingCart, Heart, Share2, Star } from "lucide-react"
import { Button } from "@/registry/new-york/ui/button"
import { Card, CardContent } from "@/registry/new-york/ui/card"
import { cn } from "@/lib/utils"
import { type Product } from "./product-data"

const defaultProduct: Product & { originalPrice?: string; rating: number; reviews: number; isNew?: boolean; discount?: string } = {
  id: 1,
  name: "Premium Wireless Noise Cancelling Headphones",
  price: "$299.00",
  originalPrice: "$349.00",
  image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&h=800&auto=format&fit=crop",
  rating: 4.8,
  reviews: 124,
  isNew: true,
  discount: "15% OFF",
  category: "Electronics"
}

interface ProductCardBrutalistProps {
  product?: Product & { originalPrice?: string; rating?: number; reviews?: number; isNew?: boolean; discount?: string }
}

export function ProductCardBrutalist({ product = defaultProduct }: ProductCardBrutalistProps) {
  return (
    <Card className="group relative w-full max-w-sm overflow-hidden border-2 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="relative aspect-square overflow-hidden border-b-2 border-black">
        <img 
          src={product.image} 
          alt={product.name} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Badges */}
        <div className="absolute left-4 top-4 flex flex-col gap-2">
          {product.isNew && (
            <span className="border-2 border-black bg-yellow-300 px-3 py-1 text-xs font-black uppercase tracking-tight shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              New Arrival
            </span>
          )}
          {product.discount && (
            <span className="border-2 border-black bg-emerald-400 px-3 py-1 text-xs font-black uppercase tracking-tight shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              {product.discount}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute right-4 top-4 flex flex-col gap-2 translate-x-12 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
           <Button size="icon" className="h-10 w-10 border-2 border-black bg-white text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-neutral-100 hover:text-black">
            <Heart className="h-5 w-5" />
          </Button>
          <Button size="icon" className="h-10 w-10 border-2 border-black bg-white text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-neutral-100 hover:text-black">
            <Share2 className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <CardContent className="flex flex-col gap-3 p-6 text-black">
        <div className="flex items-center gap-1 text-amber-500">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={cn("h-4 w-4 fill-current", i >= Math.floor(product.rating || 0) && "text-neutral-200")} 
            />
          ))}
          <span className="ml-1 text-xs font-bold text-black">({product.reviews || 0})</span>
        </div>

        <h3 className="line-clamp-2 text-xl font-black leading-tight tracking-tight uppercase">
          {product.name}
        </h3>

        <div className="flex items-baseline gap-3">
          <span className="text-2xl font-black">{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm font-bold text-neutral-400 line-through">
              {product.originalPrice}
            </span>
          )}
        </div>

        <Button className="mt-2 h-12 w-full border-2 border-black bg-black text-white text-base font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-neutral-800 transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">
          Add to Cart <ShoppingCart className="ml-2 h-5 w-5" />
        </Button>
      </CardContent>
    </Card>
  )
}
