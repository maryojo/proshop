"use client"

import * as React from "react"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { TechStack } from "@/components/tech-stack"
import { BlockViewer } from "@/components/block-viewer"
import { SiteFooter } from "@/components/site-footer"
import { productPresets, type ProductNiche } from "@/registry/new-york/blocks/product-grid/product-data"
import { ExampleForm } from "@/registry/new-york/blocks/example-form/example-form"
import { ProductGrid } from "@/registry/new-york/blocks/product-grid/product-grid"
import { ProductCardBrutalist } from "@/registry/new-york/blocks/product-grid/product-card-brutalist"


import { CTA } from "@/components/cta"
import { Features } from "@/components/features"

export default function Home() {
  const niche: ProductNiche = "general"
  const products = productPresets[niche]
  const sampleProduct = products[0]

  return (
    <div className="flex min-h-screen flex-col ">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
                  {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 w-full max-w-5xl border-t pt-20">
            <div className="flex flex-col items-center md:items-start group">
              <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:scale-110 transition-transform shadow-inner shadow-primary/5">
                <Layers className="h-7 w-7" />
              </div>
              <h3 className="font-bold text-lg mb-2">Component Library</h3>
              <p className="text-muted-foreground text-center md:text-left">A growing collection of beautiful, reusable UI blocks for any project.</p>
            </div>
            <div className="flex flex-col items-center md:items-start group">
              <div className="h-14 w-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-5 group-hover:scale-110 transition-transform shadow-inner shadow-blue-500/5">
                <Layout className="h-7 w-7" />
              </div>
              <h3 className="font-bold text-lg mb-2">Radically Simple</h3>
              <p className="text-muted-foreground text-center md:text-left">Copy, paste, and customize. No complex migrations or heavy dependencies.</p>
            </div>
            <div className="flex flex-col items-center md:items-start group">
              <div className="h-14 w-14 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 mb-5 group-hover:scale-110 transition-transform shadow-inner shadow-amber-500/5">
                <Zap className="h-7 w-7" />
              </div>
              <h3 className="font-bold text-lg mb-2">Edge Ready</h3>
              <p className="text-muted-foreground text-center md:text-left">Lightweight components optimized for lightning-fast edge delivery.</p>
            </div>
          </div> */}
        <TechStack />
        
        <section id="blocks" className="relative py-24 sm:py-32">
          {/* Subtle separator */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-px bg-linear-to-r from-transparent via-border to-transparent"></div>
          
          <div className="container mx-auto px-4">
            <div className="mb-20 flex flex-col gap-4 text-center items-center">
              <div className="h-1 w-20 bg-primary rounded-full mb-4"></div>
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">Browse Registry</h2>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Modular, copy-paste components for storefronts, marketplaces, and commerce SaaS platforms. Build faster, ship sooner.
              </p>
            </div>
          </div>
          
          <div className="container mx-auto px-4 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <BlockViewer 
              title="Product Grid" 
              name="product-grid" 
              description={`A stylish product grid with ${niche} styling.`}
              className="lg:col-span-2"
            >
              <ProductGrid products={products} />
            </BlockViewer>

            <BlockViewer 
              title="Contact Form" 
              name="example-form" 
              description="A professional contact form with Zod validation."
            >
              <ExampleForm />
            </BlockViewer>

            <BlockViewer 
              title="Brutalist Card" 
              name="product-card-brutalist" 
              description="A bold, high-contrast product card with neo-brutalist styling."
            >
              <ProductCardBrutalist product={sampleProduct} />
            </BlockViewer>
          </div>
        </section>

        <Features />
        <CTA />
      </main>
      <SiteFooter />
    </div>
  )
}
