export type ProductNiche = "general" | "fashion" | "food" | "skincare"

export interface Product {
  id: number
  name: string
  price: string
  image: string
  category: string
}

export const productPresets: Record<ProductNiche, Product[]> = {
  general: [
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
  ],
  fashion: [
    {
      id: 1,
      name: "Oversized Wool Coat",
      price: "$245.00",
      image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=600&h=800&auto=format&fit=crop",
      category: "Outerwear"
    },
    {
      id: 2,
      name: "Vintage Denim Jacket",
      price: "$110.00",
      image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?q=80&w=600&h=800&auto=format&fit=crop",
      category: "Denim"
    },
    {
      id: 3,
      name: "Silk Wrap Dress",
      price: "$180.00",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&h=800&auto=format&fit=crop",
      category: "Dresses"
    },
    {
      id: 4,
      name: "Leather Chelsea Boots",
      price: "$165.00",
      image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?q=80&w=600&h=800&auto=format&fit=crop",
      category: "Footwear"
    }
  ],
  food: [
    {
      id: 1,
      name: "Organic Coffee Beans",
      price: "$18.00",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=600&h=800&auto=format&fit=crop",
      category: "Pantry"
    },
    {
      id: 2,
      name: "Artisan Sourdough",
      price: "$9.50",
      image: "https://images.unsplash.com/photo-1585478259715-876a6a81fc08?q=80&w=600&h=800&auto=format&fit=crop",
      category: "Bakery"
    },
    {
      id: 3,
      name: "Wildflower Honey",
      price: "$14.00",
      image: "https://images.unsplash.com/photo-1587049352846-46bd39c1ca?q=80&w=600&h=800&auto=format&fit=crop",
      category: "Sweeteners"
    },
    {
      id: 4,
      name: "Dark Chocolate 70%",
      price: "$6.50",
      image: "https://images.unsplash.com/photo-1548907040-4baa42d10919?q=80&w=600&h=800&auto=format&fit=crop",
      category: "Snacks"
    }
  ],
  skincare: [
    {
      id: 1,
      name: "Hydrating Face Serum",
      price: "$32.00",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=600&h=800&auto=format&fit=crop",
      category: "Serums"
    },
    {
      id: 2,
      name: "Vitamin C Cleanser",
      price: "$24.00",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=600&h=800&auto=format&fit=crop",
      category: "Cleansers"
    },
    {
      id: 3,
      name: "Night Repair Cream",
      price: "$45.00",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecee?q=80&w=600&h=800&auto=format&fit=crop",
      category: "Moisturizers"
    },
    {
      id: 4,
      name: "SPF 50 Sunscreen",
      price: "$28.00",
      image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=600&h=800&auto=format&fit=crop",
      category: "Sun Care"
    }
  ]
}
