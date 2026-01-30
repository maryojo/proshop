"use client"

import * as React from "react"
import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BlockViewer } from "@/components/block-viewer"
import { NicheSwitcher } from "@/components/niche-switcher"
import { productPresets, type ProductNiche } from "@/registry/new-york/blocks/product-grid/product-data"
import { HelloWorld } from "@/registry/new-york/blocks/hello-world/hello-world"
import { ExampleForm } from "@/registry/new-york/blocks/example-form/example-form"
import { ExampleCard } from "@/registry/new-york/blocks/example-with-css/example-card"
import { ProductGrid } from "@/registry/new-york/blocks/product-grid/product-grid"
import { ProductCard } from "@/registry/new-york/blocks/product-grid/product-card"
import { ProductCardBrutalist } from "@/registry/new-york/blocks/product-grid/product-card-brutalist"

export default function BlocksPage() {
  const [niche, setNiche] = useState<ProductNiche>("general")
  const products = productPresets[niche]
  const sampleProduct = products[0]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="flex flex-col gap-6 mb-12">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold tracking-tight">Blocks</h1>
            <p className="text-xl text-muted-foreground">
              A collection of beautiful, handcrafted ecommerce blocks.
            </p>
          </div>
          <NicheSwitcher current={niche} onSelect={setNiche} />
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <BlockViewer 
            title="Brutalist Product Card" 
            name="product-card-brutalist" 
            description="A bold, high-contrast product card with neo-brutalist styling."
          >
            <ProductCardBrutalist product={sampleProduct} />
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
            description={`A stylish product grid optimized for ${niche} ecommerce.`}
            className="lg:col-span-2"
          >
            <ProductGrid products={products} />
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
