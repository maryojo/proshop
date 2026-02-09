import Link from "next/link"
import { Github, Twitter, Instagram } from "lucide-react"
import Image from "next/image"
import logo from "@/public/icon.svg"

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/20 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center">
              <Image src={logo} alt="ProShop Logo" width={32} height={32} className="h-10 w-10" />
            </div>
            <span className="text-xl font-bold tracking-tight uppercase">ProShop</span>
            </Link>
            <p className="text-sm text-muted-foreground hidden md:block">
              © {new Date().getFullYear()} ProShop. Built with ❤️ for ecommerce.
            </p>
          </div>
          
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <Link href="/blocks" className="hover:text-primary transition-colors">Components</Link>
            <Link href="/templates" className="hover:text-primary transition-colors">Templates</Link>
            <a href="https://github.com/maryojo/shadcn-shopkit" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors flex items-center gap-2"><Github className="h-4 w-4" /> GitHub</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          </div>
          
          <p className="text-sm text-muted-foreground md:hidden text-center">
            © {new Date().getFullYear()} ProShop. Built with ❤️ for ecommerce.
          </p>
        </div>
      </div>
    </footer>
  )
}
