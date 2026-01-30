import Link from "next/link"
import { Sparkles, Github } from "lucide-react"
import { Button } from "@/registry/new-york/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/20 bg-white/10 backdrop-blur backdrop-saturate-[1.8] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ring-1 ring-white/10">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Sparkles className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold tracking-tight">Crisp UI</span>
          </Link>
          <nav className="hidden md:ml-6 md:flex md:gap-4 lg:gap-6">
            <Link href="/blocks" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Blocks
            </Link>
            <Link href="/templates" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Templates
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Documentation
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/crisp-ui/crisp-ui" target="_blank" rel="noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </div>
    </header>
  )
}
