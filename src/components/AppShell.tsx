import { Link, useLocation } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard, Users, UserPlus, Calculator, GitCompare,
  FileText, Kanban, RefreshCw, Settings, Search, Bell, Plus,
} from "lucide-react";

const nav = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/pipeline", label: "Pipeline", icon: Kanban },
  { to: "/leads", label: "Leads", icon: UserPlus },
  { to: "/clientes", label: "Clientes", icon: Users },
  { to: "/multicalculo", label: "Multicálculo", icon: Calculator },
  { to: "/comparador", label: "Comparador", icon: GitCompare },
  { to: "/propostas", label: "Propostas", icon: FileText },
  { to: "/renovacoes", label: "Renovações", icon: RefreshCw },
  { to: "/admin", label: "Administração", icon: Settings },
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  const loc = useLocation();
  return (
    <div className="min-h-screen flex bg-background text-foreground">
      <aside className="w-64 shrink-0 border-r border-sidebar-border bg-sidebar flex flex-col sticky top-0 h-screen">
        <div className="px-5 pt-6 pb-8">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="size-8 rounded-lg bg-gradient-amber grid place-items-center shadow-glow">
              <span className="font-display font-bold text-primary-foreground text-sm">S</span>
            </div>
            <div className="leading-tight">
              <div className="font-display font-semibold text-base">Solvent</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">CRM Seguros</div>
            </div>
          </Link>
        </div>

        <nav className="flex-1 px-3 space-y-0.5">
          {nav.map(({ to, label, icon: Icon }) => {
            const active = loc.pathname === to || (to !== "/" && loc.pathname.startsWith(to));
            return (
              <Link
                key={to}
                to={to}
                className={`relative flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                  active
                    ? "text-sidebar-accent-foreground bg-sidebar-accent"
                    : "text-sidebar-foreground hover:text-sidebar-accent-foreground hover:bg-sidebar-accent/60"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute left-0 top-1.5 bottom-1.5 w-0.5 rounded-r bg-primary"
                  />
                )}
                <Icon className="size-4" />
                <span>{label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-full bg-secondary grid place-items-center font-display font-semibold">JM</div>
            <div className="leading-tight min-w-0">
              <div className="text-sm font-medium truncate">Júlia Marques</div>
              <div className="text-xs text-muted-foreground truncate">Corretora · Aral</div>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 min-w-0">
        <header className="sticky top-0 z-20 bg-background/80 backdrop-blur-xl border-b border-border">
          <div className="flex items-center gap-4 px-8 h-16">
            <div className="flex-1 max-w-xl relative">
              <Search className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                placeholder="Buscar cliente, apólice, oportunidade…"
                className="w-full h-9 pl-9 pr-3 rounded-md bg-surface border border-border text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/40 focus:border-border-strong"
              />
            </div>
            <button className="size-9 rounded-md border border-border bg-surface grid place-items-center hover:bg-surface-elevated transition-colors">
              <Bell className="size-4" />
            </button>
            <button className="h-9 px-4 rounded-md bg-gradient-amber text-primary-foreground font-medium text-sm flex items-center gap-2 shadow-glow hover:opacity-95 transition-opacity">
              <Plus className="size-4" /> Nova oportunidade
            </button>
          </div>
        </header>
        <div className="px-8 py-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
