"use client"

import * as React from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BlockViewer } from "@/components/block-viewer"
import { cn } from "@/lib/utils"
import PokemonPage from "@/registry/new-york/blocks/example-complex-component/page"
import LoginTemplate from "@/registry/new-york/blocks/login-template/page"
import { ChevronRight, LogIn, Grid3x3, Zap, ExternalLink } from "lucide-react"

const templates = [
  {
    id: "login-template",
    title: "Login Page",
    category: "Authentication",
    description: "A modern login page with glassmorphism and interactive particle background.",
    icon: <LogIn className="h-4 w-4" />,
    fullPageUrl: "/template/login-template",
    content: (
      <div className="w-full max-w-5xl border rounded-2xl overflow-hidden shadow-xl">
        <LoginTemplate />
      </div>
    ),
  },
  {
    id: "complex-component",
    title: "Search & Filter",
    category: "E-Commerce",
    description: "A comprehensive template featuring search, interactive cards, and state management.",
    icon: <Grid3x3 className="h-4 w-4" />,
    fullPageUrl: "/template/complex-component",
    content: (
      <div className="w-full max-w-5xl max-h-[800px] overflow-auto border rounded-2xl bg-background p-4 sm:p-8">
        <PokemonPage />
      </div>
    ),
  },
]

const upcomingTemplates = [
  { title: "Dashboard", icon: <Grid3x3 className="h-4 w-4" /> },
  { title: "Landing Page", icon: <Zap className="h-4 w-4" /> },
  { title: "SaaS Template", icon: <Zap className="h-4 w-4" /> },
]

export default function TemplatesPage() {

  const [selectedTemplateId, setSelectedTemplateId] = React.useState(templates[0].id)
  const selectedTemplate = React.useMemo(
    () => templates.find((t) => t.id === selectedTemplateId) || templates[0],
    [selectedTemplateId]
  )

  const groupedTemplates = React.useMemo(() => {
    const groups: { [key: string]: typeof templates } = {}
    templates.forEach((template) => {
      if (!groups[template.category]) {
        groups[template.category] = []
      }
      groups[template.category].push(template)
    })
    return groups
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-slate-50/50 dark:bg-slate-950/50">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 lg:py-12">
          <div className="flex flex-col gap-4 mb-8">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Templates</h1>
            <p className="text-lg text-muted-foreground">
              Full-page patterns and complex templates for your application.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start pointer-events-auto">
            {/* Sidebar */}
            <aside className="w-full lg:w-64 flex-shrink-0 pointer-events-auto">
              <nav className="flex flex-col gap-1 sticky top-24 pointer-events-auto">
                {/* Available Templates */}
                {Object.entries(groupedTemplates).map(([category, categoryTemplates]) => (
                  <div key={category} className="mb-6">
                    <h3 className="px-4 py-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      {category}
                    </h3>
                    <div className="flex flex-col gap-1">
                      {categoryTemplates.map((template) => {
                        const isActive = selectedTemplateId === template.id
                        return (
                          <button
                            key={template.id}
                            onClick={() => setSelectedTemplateId(template.id)}
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
                              {template.icon}
                            </span>
                            <span className="flex-1">{template.title}</span>
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

                {/* Upcoming Templates */}
                <div className="mb-6">
                  <h3 className="px-4 py-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Coming Soon
                  </h3>
                  <div className="flex flex-col gap-1">
                    {upcomingTemplates.map((template, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium opacity-50 cursor-not-allowed bg-muted/30 text-muted-foreground border border-muted"
                      >
                        <span className="p-1.5 rounded-lg bg-muted/50">
                          {template.icon}
                        </span>
                        <span className="flex-1">{template.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </nav>
            </aside>

            {/* Content Area */}
            <div className="flex-1 w-full min-w-0 pointer-events-auto">
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pointer-events-auto">
                <BlockViewer
                  title={selectedTemplate.title}
                  name={selectedTemplate.id}
                  description={selectedTemplate.description}
                  className="border-none shadow-none bg-transparent p-0"
                  actionButton={
                    <a
                      href={selectedTemplate.fullPageUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors text-sm font-medium text-primary hover:text-primary"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Full Page
                    </a>
                  }
                >
                  <div className="w-full py-8">
                    {selectedTemplate.content}
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
