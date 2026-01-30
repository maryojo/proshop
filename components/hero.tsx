import Link from "next/link"
import { Button } from "@/registry/new-york/ui/button"
import { ArrowRight, Layers, Layout, Zap } from "lucide-react"
import { GridBackground } from "./grid-background"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-24 lg:py-40">
      <GridBackground />
      
      {/* Decorative Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -animate-pulse pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium mb-8 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-ping"></span>
            Building the future of UI design
          </div>
          
          <h1 className="text-5xl font-black tracking-tight sm:text-7xl mb-8 bg-linear-to-br from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent leading-[1.1]">
            Build Interfaces with 
            <span className="text-primary block sm:inline ml-0 sm:ml-4 relative">
              UI Blocks
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/30" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10C50 2 150 2 198 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed">
            Beautifully designed, accessible UI building blocks. Built with 
            <span className="text-foreground font-semibold"> Tailwind v4</span>, 
            <span className="text-foreground font-semibold"> React 19</span>, and 
            <span className="text-foreground font-semibold"> Radix UI</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 mb-24">
            <Button size="lg" className="rounded-2xl px-10 h-14 text-lg shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all font-bold group" asChild>
              <Link href="/blocks">
                Explore Components <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-2xl px-10 h-14 text-lg backdrop-blur-sm border-2 font-bold" asChild>
              <a href="https://github.com/crisp-ui/crisp-ui" target="_blank" rel="noreferrer">
                GitHub Repo
              </a>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 w-full max-w-5xl border-t pt-20">
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
          </div>
        </div>
      </div>
    </section>
  )
}
