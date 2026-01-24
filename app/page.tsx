import * as React from "react"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { TechStack } from "@/components/tech-stack"
import { BlockViewer } from "@/components/block-viewer"
import { SiteFooter } from "@/components/site-footer"
import { HelloWorld } from "@/registry/new-york/blocks/hello-world/hello-world"
import { ExampleForm } from "@/registry/new-york/blocks/example-form/example-form"
import PokemonPage from "@/registry/new-york/blocks/complex-component/page"
import { ExampleCard } from "@/registry/new-york/blocks/example-with-css/example-card"
import { ProductGrid } from "@/registry/new-york/blocks/product-grid/product-grid"

import { CTA } from "@/components/cta"
import { Features } from "@/components/features"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col ">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <TechStack />
        
        <section id="blocks" className="relative py-24 sm:py-32">
          {/* Subtle separator */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-px bg-linear-to-r from-transparent via-border to-transparent"></div>
          
          <div className="container mx-auto px-4">
            <div className="mb-20 flex flex-col gap-4 text-center items-center">
              <div className="h-1 w-20 bg-primary rounded-full mb-4"></div>
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">Browse Registry</h2>
              <p className="text-muted-foreground text-lg max-w-2xl">
                A carefully curated selection of modular, copy-paste components optimized for high-conversion ecommerce stores.
              </p>
            </div>
          </div>
          
          <div className="container mx-auto px-4 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <BlockViewer 
              title="Product Grid" 
              name="product-grid" 
              description="A stylish product grid with hover interactions and card actions."
              className="lg:col-span-2"
            >
              <ProductGrid />
            </BlockViewer>

            <BlockViewer 
              title="Hello World" 
              name="hello-world" 
              description="A simple hello world component starting point."
            >
              <HelloWorld />
            </BlockViewer>

            <BlockViewer 
              title="Contact Form" 
              name="example-form" 
              description="A professional contact form with Zod validation."
            >
              <ExampleForm />
            </BlockViewer>

            <BlockViewer 
              title="Complex Dashboard" 
              name="complex-component" 
              description="A multi-part component featuring hooks, libs, and custom UI."
              className="lg:col-span-2"
            >
              <div className="w-full max-w-4xl max-h-[600px] overflow-auto border rounded-xl bg-background p-4 sm:p-8">
                <PokemonPage />
              </div>
            </BlockViewer>

            <BlockViewer 
              title="Styled Login Card" 
              name="example-with-css" 
              description="A login interface utilizing custom CSS modules for unique styling."
            >
              <ExampleCard />
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
