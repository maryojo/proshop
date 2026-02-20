import * as React from "react"
import { ShoppingCart, Heart, Eye } from "lucide-react"
import { Button } from "@/registry/new-york/ui/button"
import { Card, CardContent, CardFooter } from "@/registry/new-york/ui/card"
import { cn } from "@/lib/utils"

export interface Product {
  id: number
  name: string
  price: string
  image: string
  category: string
}

interface ProductCardProps {
  product: Product
  className?: string
}

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <Card className={cn("group/card overflow-hidden border-none bg-background shadow-none", className)}>
      <CardContent className="p-0 relative aspect-4/5 overflow-hidden rounded-2xl bg-muted border border-border/50">
        <img 
          src={product.image} 
          alt={product.name} 
          className="object-cover w-full h-full transition-transform duration-500 group-hover/card:scale-105"
        />
        <div className="absolute top-3 right-3 flex flex-col gap-2 translate-x-12 opacity-0 transition-all duration-300 group-hover/card:translate-x-0 group-hover/card:opacity-100">
          <Button size="icon" variant="secondary" className="h-9 w-9 rounded-full shadow-lg">
            <Heart className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="secondary" className="h-9 w-9 rounded-full shadow-lg">
            <Eye className="h-4 w-4" />
          </Button>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full transition-transform duration-300 group-hover/card:translate-y-0">
          <Button className="w-full shadow-xl bg-white text-black hover:bg-neutral-100 border-none rounded-xl">
            Add to Cart <ShoppingCart className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-1 p-4 bg-transparent border-none">
        <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{product.category}</span>
        <h3 className="font-semibold text-base leading-tight">{product.name}</h3>
        <p className="font-bold text-lg">{product.price}</p>
      </CardFooter>
    </Card>
  )
}
