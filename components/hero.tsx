import Link from "next/link"
import { Button } from "@/registry/new-york/ui/button"
import { ArrowRight, Layers, Layout, Zap } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#040e11] via-[#0a1520] to-[#040e11] mx-2 py-32 lg:py-48 rounded-3xl">
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[64px_64px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-sm font-semibold mb-8 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-1000 shadow-lg shadow-primary/5">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2.5 animate-ping"></span>
            <span className="text-primary-foreground">Ecommerce & SaaS UI Blocks Built on shadcn</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-6xl font-black tracking-tight sm:text-7xl lg:text-8xl mb-8 leading-[1.05] text-white animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Ship Your Store
            <br />
            <span className="bg-linear-to-r from-[#59d3ff] via-[#7c9aff] to-[#e37e26] bg-clip-text text-transparent relative inline-block">
              10x Faster
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-slate-300 mb-6 max-w-3xl leading-relaxed font-medium animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            Complete UI blocks for ecommerce websites, marketplaces, and commerce SaaS platforms.
          </p>
          
          <p className="text-lg text-slate-400 mb-12 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
            Storefronts, admin dashboards, vendor portals, analytics panels, and customer experiences. Everything from product catalogs to order management systems. 
            Built with <span className="text-white font-semibold">shadcn/ui</span>, <span className="text-white font-semibold">Tailwind v4</span>, and <span className="text-white font-semibold">React 19</span>.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            <Button size="lg" className="rounded-2xl px-12 h-16 text-lg shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all font-bold group bg-linear-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary" asChild>
              <Link href="/blocks">
                Browse Components <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-2xl px-12 h-16 text-lg backdrop-blur-sm border-2 border-white/20 hover:border-white/40 font-bold text-white hover:bg-white/5" asChild>
              <a href="https://github.com/maryojo/shadcn-shopkit" target="_blank" rel="noreferrer">
                View on GitHub
              </a>
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-3 justify-center items-center text-sm animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-600">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-slate-300 hover:bg-white/10 transition-colors">
              <Zap className="h-4 w-4 text-amber-400" />
              <span>Conversion Optimized</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-slate-300 hover:bg-white/10 transition-colors">
              <Layers className="h-4 w-4 text-blue-400" />
              <span>50+ Components</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-slate-300 hover:bg-white/10 transition-colors">
              <Layout className="h-4 w-4 text-emerald-400" />
              <span>Fully Responsive</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
