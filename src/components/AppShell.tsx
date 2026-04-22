import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard, Users, UserPlus, Calculator, GitCompare,
  FileText, Kanban, RefreshCw, Settings, Search, Bell, Plus,
  FilePlus2, FolderOpen, History, LogOut,
import { clearAuth, getUserEmail } from "@/lib/auth";

type NavItem = { to: string; label: string; icon: typeof LayoutDashboard };
type NavGroup = { label: string; items: NavItem[] };

const navGroups: NavGroup[] = [
  {
    label: "Visão Geral",
    items: [{ to: "/", label: "Dashboard", icon: LayoutDashboard }],
  },
  {
    label: "Vendas",
    items: [
      { to: "/pipeline", label: "Pipeline", icon: Kanban },
      { to: "/leads", label: "Leads", icon: UserPlus },
      { to: "/nova-cotacao", label: "Nova Cotação", icon: FilePlus2 },
      { to: "/multicalculo", label: "Multicálculo", icon: Calculator },
      { to: "/comparador", label: "Comparador", icon: GitCompare },
      { to: "/propostas", label: "Propostas", icon: FileText },
    ],
  },
  {
    label: "Pós-venda",
    items: [
      { to: "/clientes", label: "Clientes", icon: Users },
      { to: "/renovacoes", label: "Renovações", icon: RefreshCw },
      { to: "/documentos", label: "Documentos", icon: FolderOpen },
      { to: "/timeline", label: "Timeline", icon: History },
    ],
  },
  {
    label: "Sistema",
    items: [{ to: "/admin", label: "Administração", icon: Settings }],
  },
];

export function AppShell({ children }: { children: ReactNode }) {
  const loc = useLocation();
  const navigate = useNavigate();

  const userEmail = (typeof window !== "undefined" && sessionStorage.getItem("user_email")) || "usuario@solvent.com";
  const userName = userEmail.split("@")[0].replace(/\./g, " ");
  const initials = userName
    .split(" ")
    .map((w) => w[0]?.toUpperCase())
    .slice(0, 2)
    .join("");

  const handleLogout = () => {
    sessionStorage.removeItem("auth_token");
    sessionStorage.removeItem("user_email");
    navigate({ to: "/login" });
  };

  return (
    <div className="min-h-screen flex bg-background text-foreground">
      <aside className="w-64 shrink-0 border-r border-sidebar-border bg-sidebar flex flex-col sticky top-0 h-screen">
        <div className="px-5 pt-6 pb-6">
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

        <nav className="flex-1 px-3 space-y-4 overflow-y-auto pb-4">
          {navGroups.map((group) => (
            <div key={group.label}>
              <div className="px-3 mb-1.5 text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70 font-medium">
                {group.label}
              </div>
              <div className="space-y-0.5">
                {group.items.map(({ to, label, icon: Icon }) => {
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
              </div>
            </div>
          ))}
        </nav>

        <div className="p-4 border-t border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-full bg-secondary grid place-items-center font-display font-semibold uppercase text-xs">
              {initials || "US"}
            </div>
            <div className="leading-tight min-w-0 flex-1">
              <div className="text-sm font-medium truncate capitalize">{userName}</div>
              <div className="text-xs text-muted-foreground truncate">{userEmail}</div>
            </div>
            <button
              onClick={handleLogout}
              title="Sair"
              className="size-8 rounded-md grid place-items-center text-muted-foreground hover:text-foreground hover:bg-sidebar-accent/60 transition-colors shrink-0"
            >
              <LogOut className="size-4" />
            </button>
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
            <button
              onClick={() => navigate({ to: "/nova-cotacao" })}
              className="h-9 px-4 rounded-md bg-gradient-amber text-primary-foreground font-medium text-sm flex items-center gap-2 shadow-glow hover:opacity-95 transition-opacity"
            >
              <Plus className="size-4" /> Nova oportunidade
            </button>
          </div>
        </header>
        <div className="px-8 py-8">
          {children}
        </div>
      </main>
    </div>
  );
}
