import { ProductCard } from "@/registry/new-york/blocks/product-grid/product-card"
import { productPresets } from "@/registry/new-york/blocks/product-grid/product-data"

export function FloatingPreview() {
  const sampleProduct = productPresets.fashion[0]
  const sampleProduct2 = productPresets.general[1]

  return (
    <div className="relative w-full max-w-[500px] h-[450px] hidden lg:block animate-in fade-in slide-in-from-right-12 duration-1000 delay-300">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>

      {/* Main Card */}
      <div className="absolute top-0 right-0 w-[280px] z-20 animate-float shadow-2xl shadow-primary/20">
        <ProductCard product={sampleProduct} className="rounded-3xl border-2 border-white/50 backdrop-blur-xl bg-white/80" />
      </div>

      {/* Secondary Card (Offset) */}
      <div className="absolute bottom-0 left-0 w-[240px] z-10 animate-float-delayed shadow-2xl">
        <ProductCard product={sampleProduct2} className="rounded-3xl border-2 border-white/50 backdrop-blur-md bg-white/40 scale-90 opacity-80" />
      </div>

      {/* Floating UI Elements */}
      <div className="absolute top-1/4 -left-10 z-30 p-4 rounded-2xl bg-white shadow-xl border animate-float shadow-blue-500/10">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs uppercase tracking-tighter">
            $
          </div>
          <div>
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-none mb-1">Conversion</p>
            <p className="text-sm font-bold">+24% Increase</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-1/4 -right-12 z-30 p-4 rounded-2xl bg-black text-white shadow-2xl animate-float-delayed">
        <div className="flex items-center gap-3 text-xs font-bold leading-none tracking-tight">
          <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          Tailwind v4 Ready
        </div>
      </div>
    </div>
  )
}
