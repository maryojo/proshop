"use client"

import { Activity, Bell, Check, Search, TrendingUp, Users, Zap, MoreHorizontal } from "lucide-react"
import { cn } from "@/lib/utils"

export function HeroDesignElements({ className }: { className?: string }) {
  return (
    <div className={cn("relative  w-full h-full flex items-center justify-center p-4 lg:p-12", className)}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Main Dashboard UI Block */}
      <div className="relative z-10 w-full max-w-[460px] bg-white border border-slate-200/60 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.02)] rounded-[2.5rem] overflow-hidden animate-in fade-in slide-in-from-right-12 duration-1000">
        
        {/* Browser-like Header */}
        <div className="px-6 py-4 border-b border-slate-100/80 bg-slate-50/30 flex items-center justify-between">
          <div className="flex gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-slate-200/70 border border-slate-300/20"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-slate-200/70 border border-slate-300/20"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-slate-200/70 border border-slate-300/20"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-7 w-40 bg-white border border-slate-100 rounded-full flex items-center px-3 shadow-sm">
               <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 mr-2 shadow-[0_0_5px_rgba(16,185,129,0.5)]"></div>
               <div className="h-1 w-20 bg-slate-200 rounded-full"></div>
            </div>
          </div>
          <MoreHorizontal className="h-4 w-4 text-slate-300/80 hover:text-slate-400 transition-colors cursor-pointer" />
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          
          {/* Header Info */}
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-bold text-slate-900 tracking-tight">Main Dashboard</h4>
              <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest mt-0.5">Jan 20-26, 2026</p>
            </div>
            <div className="flex -space-x-2">
                {[1,2,3].map((i) => (
                   <div key={i} className="h-7 w-7 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center overflow-hidden">
                      <div className={cn("h-full w-full", i % 2 === 0 ? "bg-primary/20" : "bg-blue-100")}></div>
                   </div>
                ))}
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <div className="p-1.5 bg-slate-50 rounded-lg border border-slate-100">
                  <Users className="h-3.5 w-3.5 text-slate-500" />
                </div>
                <div className="flex items-center gap-1 px-1.5 py-0.5 bg-emerald-50 border border-emerald-100 rounded-full">
                  <TrendingUp className="h-2.5 w-2.5 text-emerald-500" />
                  <span className="text-[9px] font-bold text-emerald-600">+8%</span>
                </div>
              </div>
              <span className="text-xl font-bold text-slate-900 tabular-nums tracking-tight">1,280</span>
              <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mt-1">New Users</p>
            </div>
            <div className="p-5 rounded-2xl bg-primary/5 border border-primary/10 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <div className="p-1.5 bg-primary/10 rounded-lg border border-primary/10">
                  <Zap className="h-3.5 w-3.5 text-primary/70" />
                </div>
                <div className="flex items-center gap-1 px-1.5 py-0.5 bg-primary/10 border border-primary/10 rounded-full">
                  <span className="text-[9px] font-bold text-primary">+12%</span>
                </div>
              </div>
              <span className="text-xl font-bold text-slate-900 tabular-nums tracking-tight">84.2%</span>
              <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mt-1">Retention</p>
            </div>
          </div>

          {/* Simulated Chart Area */}
          <div className="space-y-4 pt-2">
             <div className="h-28 flex items-end gap-2.5 px-1 relative">
                {/* Reference line */}
                <div className="absolute top-1/2 left-0 w-full border-t border-slate-100/80 border-dashed z-0"></div>
                
                {[30, 50, 40, 80, 60, 45, 90, 70, 55, 100].map((h, i) => (
                   <div 
                    key={i} 
                    className={cn(
                      "flex-1 rounded-full transition-all duration-1000 relative z-10",
                      i === 7 ? "bg-primary shadow-[0_8px_16px_rgba(255,158,89,0.2)]" : "bg-slate-100/80 hover:bg-slate-200/80"
                    )}
                    style={{ height: `${h}%` }}
                   ></div>
                ))}
             </div>
             <div className="flex justify-between px-2">
                {[1,2,3,4,5,6].map((i) => (
                   <div key={i} className="h-1.5 w-1.5 bg-slate-100 rounded-full"></div>
                ))}
             </div>
          </div>

          {/* Action Footer */}
          <button className="w-full py-3.5 bg-slate-900 text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-slate-800 transition-all hover:translate-y-[-2px] hover:shadow-xl hover:shadow-slate-200 active:translate-y-0 active:shadow-lg">
             Generate Weekly Report
          </button>
        </div>
      </div>

      {/* Secondary Complementary Block - "Live Feed" */}
      <div className="absolute -bottom-10 -left-6 z-20 w-60 bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-2xl rounded-[1.5rem] p-5 animate-in fade-in slide-in-from-left-8 duration-700 delay-300">
         <div className="flex items-center justify-between mb-5">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500/80">Live Activity</span>
            <div className="flex items-center gap-1.5">
               <span className="text-[9px] font-bold text-emerald-500">Live</span>
               <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
            </div>
         </div>
         <div className="space-y-4">
            {[1,2].map((i) => (
               <div key={i} className="flex items-center gap-3 group">
                  <div className="h-9 w-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-white group-hover:shadow-sm transition-all">
                     <Check className="h-4 w-4 text-emerald-500" />
                  </div>
                  <div>
                     <p className="text-[11px] font-bold text-slate-900 leading-tight">Order #{1024 + i} completed</p>
                     <p className="text-[9px] font-medium text-slate-400 mt-1">Today {i * 2}m ago</p>
                  </div>
               </div>
            ))}
         </div>
      </div>

      {/* Tertiary Small Accent - "Search Tool" */}
      <div className="absolute -top-10 right-0 z-20 px-4 py-2.5 bg-white/95 backdrop-blur-md border border-slate-200/60 shadow-xl rounded-2xl flex items-center gap-3 animate-in fade-in zoom-in duration-1000 delay-500 group cursor-text">
         <div className="h-7 w-7 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
            <Search className="h-4 w-4" />
         </div>
         <div className="flex items-center gap-1">
            <span className="text-[11px] font-semibold text-slate-500">Quick search...</span>
            <div className="h-3 w-[1.5px] bg-primary/40 animate-pulse"></div>
         </div>
         <div className="ml-4 flex items-center gap-1">
            <span className="px-1.5 py-0.5 rounded border border-slate-200 bg-slate-50 text-[8px] font-bold text-slate-400">⌘</span>
            <span className="px-1.5 py-0.5 rounded border border-slate-200 bg-slate-50 text-[8px] font-bold text-slate-400">K</span>
         </div>
      </div>

      {/* Quaternary Tiny Accent - "Status" */}
      <div className="absolute top-1/2 -right-12 z-0 p-3 bg-white/40 backdrop-blur-sm border border-slate-200/30 rounded-full shadow-lg animate-in fade-in slide-in-from-right-20 duration-1000 delay-700">
         <div className="h-10 w-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
            <Activity className="h-5 w-5 text-emerald-500" />
         </div>
      </div>
    </div>
  )
}
