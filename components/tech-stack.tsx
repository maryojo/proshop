import { Github, Cpu, Globe, Lock } from "lucide-react"

export function TechStack() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground/60">Built with Industrial Strength</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2">
            <Cpu className="h-8 w-8" />
            <span className="text-xl font-bold tracking-tighter">React 19</span>
          </div>
          <div className="flex items-center gap-2">
            <Github className="h-8 w-8" />
            <span className="text-xl font-bold tracking-tighter">TypeScript</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="h-8 w-8" />
            <span className="text-xl font-bold tracking-tighter">Next.js 15</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="h-8 w-8" />
            <span className="text-xl font-bold tracking-tighter">Radix UI</span>
          </div>
        </div>
      </div>
    </section>
  )
}
