import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BlockViewer } from "@/components/block-viewer"
import { HelloWorld } from "@/registry/new-york/blocks/hello-world/hello-world"
import { ExampleForm } from "@/registry/new-york/blocks/example-form/example-form"
import { ExampleCard } from "@/registry/new-york/blocks/example-with-css/example-card"
import { ProductGrid } from "@/registry/new-york/blocks/product-grid/product-grid"
import { ProductCardBrutalist } from "@/registry/new-york/blocks/product-grid/product-card-brutalist"
import { ProductCard } from "@/registry/new-york/blocks/product-grid/product-card"

export default function BlocksPage() {
  const sampleProduct = {
    id: 1,
    name: "Classic Leather Boots",
    price: "$129.00",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&h=800&auto=format&fit=crop",
    category: "Footwear"
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="flex flex-col gap-4 mb-12">
          <h1 className="text-4xl font-bold tracking-tight">Blocks</h1>
          <p className="text-xl text-muted-foreground">
            A collection of beautiful, handcrafted ecommerce blocks.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <BlockViewer 
            title="Brutalist Product Card" 
            name="product-card-brutalist" 
            description="A bold, high-contrast product card with neo-brutalist styling."
          >
            <ProductCardBrutalist />
          </BlockViewer>

          <BlockViewer 
            title="Modern Product Card" 
            name="product-card" 
            description="A standalone modern product card with hover actions."
          >
            <div className="w-full max-w-sm">
              <ProductCard product={sampleProduct} />
            </div>
          </BlockViewer>

          <BlockViewer 
            title="Product Grid" 
            name="product-grid" 
            description="A stylish product grid with hover interactions and card actions."
            className="lg:col-span-2"
          >
            <ProductGrid />
          </BlockViewer>

          <BlockViewer 
            title="Login Card" 
            name="example-with-css" 
            description="Custom styled login interface."
          >
            <ExampleCard />
          </BlockViewer>

          <BlockViewer 
            title="Contact Form" 
            name="example-form" 
            description="Professional form with validation."
          >
            <ExampleForm />
          </BlockViewer>

          <BlockViewer 
            title="Hello World" 
            name="hello-world" 
            description="Minimal starting block."
          >
            <HelloWorld />
          </BlockViewer>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
