import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BlockViewer } from "@/components/block-viewer"
import PokemonPage from "@/registry/new-york/blocks/complex-component/page"
import LoginTemplate from "@/registry/new-york/blocks/login-template/page"

export default function TemplatesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="flex flex-col gap-4 mb-12">
          <h1 className="text-4xl font-bold tracking-tight">Templates</h1>
          <p className="text-xl text-muted-foreground">
            Full-page patterns and complex templates for your application.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          <BlockViewer 
            title="Search & Filter Page" 
            name="complex-component" 
            description="A comprehensive template featuring search, interactive cards, and state management."
          >
            <div className="w-full max-w-5xl max-h-[800px] overflow-auto border rounded-2xl bg-background p-4 sm:p-8">
              <PokemonPage />
            </div>
          </BlockViewer>

          <BlockViewer 
            title="Authentication" 
            name="login-template" 
            description="A modern login page with glassmorphism and interactive particle background."
          >
            <div className="w-full max-w-5xl border rounded-2xl overflow-hidden shadow-xl">
              <LoginTemplate />
            </div>
          </BlockViewer>

          <div className="rounded-3xl border border-dashed p-20 flex flex-col items-center justify-center text-center gap-4 bg-muted/20">
            <h3 className="text-xl font-semibold text-muted-foreground">More Templates Coming Soon</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              We're working on full-page Dashboard, Landing Page, and SaaS templates.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
