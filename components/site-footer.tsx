import Link from "next/link"
import { ShoppingBag, Github, Twitter, Instagram } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/40 py-20">
      <div className="container mx-auto px-4 text-sm">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                <ShoppingBag className="h-6 w-6" />
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase">Shopkit</span>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Premium ecommerce building blocks for modern developers. Built with precision and passion.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-wider text-xs">Resources</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link href="/blocks" className="hover:text-primary transition-colors">Components</Link></li>
              <li><Link href="/templates" className="hover:text-primary transition-colors">Templates</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Design Kit</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-wider text-xs">Project</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><a href="https://github.com/shadcn/shadcn-shopkit" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-2"><Github className="h-4 w-4" /> GitHub</a></li>
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2"><Twitter className="h-4 w-4" /> Twitter</a></li>
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2"><Instagram className="h-4 w-4" /> Instagram</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-wider text-xs">Stay Updated</h4>
            <p className="text-muted-foreground mb-4">Subscribe to our newsletter for new blocks and templates.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="flex-1 px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50" />
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-bold hover:opacity-90 transition-opacity">Join</button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/50 gap-4">
          <div className="text-muted-foreground">
            © {new Date().getFullYear()} Shopkit. Project by <a href="#" className="font-bold text-foreground">Acme Corp</a>.
          </div>
          <div className="flex gap-8 text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
