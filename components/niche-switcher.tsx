import * as React from "react"
import { Button } from "@/registry/new-york/ui/button"
import { type ProductNiche } from "@/registry/new-york/blocks/product-grid/product-data"
import { cn } from "@/lib/utils"

interface NicheSwitcherProps {
  current: ProductNiche
  onSelect: (niche: ProductNiche) => void
}

const niches: { value: ProductNiche; label: string }[] = [
  { value: "general", label: "General" },
  { value: "fashion", label: "Fashion" },
  { value: "food", label: "Food" },
  { value: "skincare", label: "Skincare" },
]

export function NicheSwitcher({ current, onSelect }: NicheSwitcherProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 p-1 bg-muted rounded-2xl w-fit mx-auto">
      {niches.map((niche) => (
        <Button
          key={niche.value}
          variant={current === niche.value ? "secondary" : "ghost"}
          size="sm"
          className={cn(
            "rounded-xl px-6 h-9 font-bold transition-all",
            current === niche.value ? "bg-background shadow-sm" : "hover:bg-background/50"
          )}
          onClick={() => onSelect(niche.value)}
        >
          {niche.label}
        </Button>
      ))}
    </div>
  )
}
