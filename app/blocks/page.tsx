"use client"

import * as React from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BlockViewer } from "@/components/block-viewer"
import { productPresets, type ProductNiche } from "@/registry/new-york/blocks/product-grid/product-data"
import { HelloWorld } from "@/registry/new-york/blocks/hello-world/hello-world"
import { ExampleForm } from "@/registry/new-york/blocks/example-form/example-form"
import { ExampleCard } from "@/registry/new-york/blocks/example-with-css/example-card"
import { ProductGrid } from "@/registry/new-york/blocks/product-grid/product-grid"
import { ProductCard } from "@/registry/new-york/blocks/product-grid/product-card"
import { ProductCardBrutalist } from "@/registry/new-york/blocks/product-grid/product-card-brutalist"
import { cn } from "@/lib/utils"
import { ChevronRight, Layout, LayoutGrid, CreditCard, FormInput, MessageSquare, Monitor, Copy, Check } from "lucide-react"

export default function BlocksPage() {
  const niche: ProductNiche = "general"
  const products = productPresets[niche]
  const sampleProduct = products[0]
  const [copiedId, setCopiedId] = React.useState<string | null>(null)

  const blocks = [
    {
      id: "product-card-brutalist",
      title: "Brutalist Card",
      viewTitle: "Brutalist Product Card",
      category: "E-commerce",
      description: "A bold, high-contrast product card with neo-brutalist styling.",
      icon: <CreditCard className="h-4 w-4" />,
      content: <ProductCardBrutalist product={sampleProduct} />,
    },
    {
      id: "product-card",
      title: "Modern Card",
      viewTitle: "Modern Product Card",
      category: "E-commerce",
      description: "A standalone modern product card with hover actions.",
      icon: <Layout className="h-4 w-4" />,
      content: (
        <div className="w-full max-w-sm">
          <ProductCard product={sampleProduct} />
        </div>
      ),
    },
    {
      id: "product-grid",
      title: "Product Grid",
      viewTitle: "Product Grid",
      category: "E-commerce",
      description: `A stylish responsive grid with ${niche} styling.`,
      icon: <LayoutGrid className="h-4 w-4" />,
      content: <ProductGrid products={products} />,
    },
    {
      id: "example-with-css",
      title: "Login Card",
      viewTitle: "Login Card",
      category: "Forms",
      description: "Custom styled login interface.",
      icon: <Monitor className="h-4 w-4" />,
      content: <ExampleCard />,
    },
    {
      id: "example-form",
      title: "Contact Form",
      viewTitle: "Contact Form",
      category: "Forms",
      description: "Professional form with validation.",
      icon: <FormInput className="h-4 w-4" />,
      content: <ExampleForm />,
    },
    {
      id: "hello-world",
      title: "Hello World",
      viewTitle: "Hello World",
      category: "Examples",
      description: "Minimal starting block.",
      icon: <MessageSquare className="h-4 w-4" />,
      content: <HelloWorld />,
    },
  ]

  const [selectedBlockId, setSelectedBlockId] = React.useState(blocks[0].id)
  const selectedBlock = React.useMemo(() => 
    blocks.find((b) => b.id === selectedBlockId) || blocks[0],
    [selectedBlockId, blocks]
  )

  const groupedBlocks = React.useMemo(() => {
    const groups: { [key: string]: typeof blocks } = {}
    blocks.forEach((block) => {
      if (!groups[block.category]) {
        groups[block.category] = []
      }
      groups[block.category].push(block)
    })
    return groups
  }, [blocks])

  const handleCopyBlock = async (blockId: string) => {
    const block = blocks.find((b) => b.id === blockId)
    if (!block) return

    try {
      await navigator.clipboard.writeText(
        `import { ${block.title.replace(/\s+/g, "")} } from "@/registry/new-york/blocks/${blockId}/${blockId}"`
      )
      setCopiedId(blockId)
      setTimeout(() => setCopiedId(null), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-50/50 dark:bg-slate-950/50">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 lg:py-12">
          <div className="flex flex-col gap-4 mb-8">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Blocks</h1>
            <p className="text-lg text-muted-foreground">
              Beautiful UI blocks for ecommerce storefronts, marketplaces, and commerce SaaS platforms.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Sidebar */}
            <aside className="w-full lg:w-64 flex-shrink-0">
              <nav className="flex flex-col gap-1 sticky top-24">
                {Object.entries(groupedBlocks).map(([category, categoryBlocks]) => (
                  <div key={category} className="mb-6">
                    <h3 className="px-4 py-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      {category}
                    </h3>
                    <div className="flex flex-col gap-1">
                      {categoryBlocks.map((block) => {
                        const isActive = selectedBlockId === block.id
                        return (
                          <button
                            key={block.id}
                            onClick={() => setSelectedBlockId(block.id)}
                            className={cn(
                              "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all text-left",
                              isActive 
                                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 ring-1 ring-primary" 
                                : "bg-background hover:bg-muted text-muted-foreground hover:text-foreground border border-transparent"
                            )}
                          >
                            <span className={cn(
                              "p-1.5 rounded-lg transition-colors",
                              isActive ? "bg-primary-foreground/20" : "bg-muted"
                            )}>
                              {block.icon}
                            </span>
                            <span className="flex-1">{block.title}</span>
                            <ChevronRight className={cn(
                              "h-4 w-4 transition-transform",
                              isActive ? "rotate-90" : "opacity-0 -translate-x-2"
                            )} />
                          </button>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </nav>
            </aside>

            {/* Content Area */}
            <div className="flex-1 w-full min-w-0">
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <BlockViewer 
                  title={selectedBlock.viewTitle} 
                  name={selectedBlock.id} 
                  description={selectedBlock.description}
                  className="border-none shadow-none bg-transparent p-0"
                  actionButton={
                    <button
                      onClick={() => handleCopyBlock(selectedBlock.id)}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors text-sm font-medium text-muted-foreground hover:text-foreground"
                    >
                      {copiedId === selectedBlock.id ? (
                        <>
                          <Check className="h-4 w-4" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" />
                          Copy
                        </>
                      )}
                    </button>
                  }
                >
                  <div className="w-full py-8">
                    {selectedBlock.content}
                  </div>
                </BlockViewer>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
