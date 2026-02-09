import Link from "next/link"
import { Button } from "@/registry/new-york/ui/button"
import { ArrowRight, ShoppingBag, ShoppingBasket, ShoppingCart } from "lucide-react"

export function CTA() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div 
        className="absolute inset-0 bg-[url('/shopping.jpg')] bg-cover bg-fixed bg-center"
        style={{ zIndex: -1 }}
      ></div>
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      <div className="absolute inset-0 bg-linear-to-b from-background via-transparent to-background -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-primary/10 blur-[120px] rounded-full -z-10"></div>
      
      <div className="container mx-auto px-4 ">
        <div className="relative rounded-[3rem] text-background p-8 sm:p-16 overflow-hidden shadow-2xl bg-linear-to-br from-[#040e11] via-[#0a1520] to-[#040e11] ">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <ShoppingCart className="h-40 w-40 rotate-12" />
          </div>
          
          <div className="max-w-2xl relative z-10">
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-6">
              Ready to build your <br />
              <span className="text-orange-300">online store?</span>
            </h2>
            <p className="text-xl text-background/70 mb-10 leading-relaxed">
              Join hundreds of developers building storefronts, marketplaces, and commerce SaaS platforms with ProShop&apos;s UI blocks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-2xl h-14 px-8 text-lg font-bold group" asChild>
                <Link href="/blocks">
                  Get Started for Free <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-2xl h-14 px-8 text-lg font-bold border-background/20 bg-background/5 hover:bg-background/10 text-background" asChild>
                <a href="https://github.com/maryojo/shadcn-shopkit" target="_blank" rel="noreferrer">
                  Star on GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
