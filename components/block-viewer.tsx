import { OpenInV0Button } from "@/components/open-in-v0-button"
import { cn } from "@/lib/utils"

interface BlockViewerProps {
  title: string
  description: string
  name: string
  children: React.ReactNode
  className?: string
}

export function BlockViewer({
  title,
  description,
  name,
  children,
  className,
}: BlockViewerProps) {
  return (
    <div className={cn("group flex flex-col gap-4 rounded-3xl border bg-card p-6 transition-all hover:shadow-xl hover:shadow-primary/5", className)}>
      <div className="flex items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="font-bold tracking-tight text-lg">{title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-1">{description}</p>
        </div>
        <OpenInV0Button name={name} className="shrink-0 h-9 rounded-xl px-4" />
      </div>
      <div className="relative mt-2 flex min-h-[400px] w-full items-center justify-center rounded-2xl border bg-muted/30 p-4 transition-colors group-hover:bg-muted/50">
        {children}
      </div>
    </div>
  )
}
