import { ShieldCheck, Zap, Scissors, Smartphone, Palette, Globe } from "lucide-react"

const features = [
  {
    title: "Conversion Optimized",
    description: "Built to convert. Every component is designed with ecommerce best practices to maximize sales and reduce cart abandonment.",
    icon: Zap,
    color: "text-amber-500",
    bg: "bg-amber-500/10"
  },
  {
    title: "Accessibility",
    description: "Fully compliant with WCAG standards. Every component is tested with screen readers and keyboard navigation.",
    icon: ShieldCheck,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  },
  {
    title: "Product Displays",
    description: "Stunning product cards, grids, and galleries. Showcase your products with beautiful layouts that drive engagement.",
    icon: Scissors,
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    title: "Shopping Ready",
    description: "Complete shopping experiences. Product pages, carts, checkout flows, and order confirmations ready to customize.",
    icon: Smartphone,
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  {
    title: "Easy Theming",
    description: "Using CSS variables and Tailwind theme. Change your brand's look in seconds by updating a few tokens.",
    icon: Palette,
    color: "text-rose-500",
    bg: "bg-rose-500/10"
  },
  {
    title: "Global CDN",
    description: "Registry items are served via static JSON, making them ready for local or remote distribution to any project.",
    icon: Globe,
    color: "text-sky-500",
    bg: "bg-sky-500/10"
  }
]

export function Features() {
  return (
    <section id="features" className="py-24 sm:py-32 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4 uppercase">Everything you need</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We&apos;ve thought of everything so you don&apos;t have to. High-quality blocks for storefronts, marketplaces, and commerce SaaS platforms.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-start p-2 group">
              <div className={`h-12 w-12 rounded-xl ${feature.bg} ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-tight">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
