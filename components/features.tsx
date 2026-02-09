import Image from "next/image"
import AccessibilityImage from "@/assets/accessibility.png"
import ConversionImage from "@/assets/conversion.png"
import ThemeImage from "@/assets/theme.png"

interface FeatureIconProps {
  className?: string
}

const features = [
  {
    title: "Conversion Optimized",
    description: "Built to convert. Every component is designed with ecommerce best practices to maximize sales and reduce cart abandonment.",
    icon: (props: FeatureIconProps) => (
      <Image 
        src={ConversionImage} 
        alt="Conversion" 
        className={props.className}
      />
    )
  },
  {
    title: "Accessibility",
    description: "Fully compliant with WCAG standards. Every component is tested with screen readers and keyboard navigation.",
    icon: (props: FeatureIconProps) => (
      <Image 
        src={AccessibilityImage} 
        alt="Accessibility" 
        className={props.className}
      />
    ),
  },
  {
    title: "Easy Theming",
    description: "Using CSS variables and Tailwind theme. Change your brand's look in seconds by updating a few tokens.",
    icon: (props: FeatureIconProps) => (
      <Image 
        src={ThemeImage} 
        alt="Theme" 
        className={props.className}
      />
    )
  }
  // {
  //   title: "Global CDN",
  //   description: "Registry items are served via static JSON, making them ready for local or remote distribution to any project.",
  //   icon: Globe,
  //   color: "text-sky-500",
  //   bg: "bg-sky-500/10"
  // }
]

export function Features() {
  return (
    <section id="features" className="py-24 sm:pt-10 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl font-black mb-4 tracking-tight">Everything You Need</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We&apos;ve thought of everything so you don&apos;t have to. High-quality blocks for storefronts, marketplaces, and commerce SaaS platforms.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-start p-2 group">
              <div className={`h-14 w-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="h-14 w-14" />
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
