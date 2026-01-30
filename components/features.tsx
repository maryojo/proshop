import { ShieldCheck, Zap, Scissors, Smartphone, Palette, Globe } from "lucide-react"

const features = [
  {
    title: "Performance First",
    description: "Built for speed. Optimized images, lean code, and Next.js 15 features ensure your store loads in milliseconds.",
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
    title: "Tailwind v4",
    description: "The first registry built from the ground up for the latest Tailwind release. Faster builds and smaller bundles.",
    icon: Scissors,
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    title: "Mobile Optimized",
    description: "Touch-first interfaces designed for various screen sizes. Our blocks work beautifully on any device.",
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
            We've thought of everything so you don't have to. High-quality blocks designed for real-world applications.
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
