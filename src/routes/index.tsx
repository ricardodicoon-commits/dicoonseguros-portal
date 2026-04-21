import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import { kpis, productionSeries, tasks, opportunities } from "@/lib/mock-data";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight, Phone, FileText, Users2, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  component: DashboardPage,
});

function DashboardPage() {
  return (
    <AppShell>
      <PageHeader
        eyebrow="Hoje · Quinta, 21 de novembro"
        title="Bom dia, Júlia."
        description="Você tem 4 follow-ups, 2 propostas para enviar e 3 renovações vencendo nesta semana."
        actions={
          <button className="h-9 px-4 rounded-md bg-surface border border-border text-sm hover:bg-surface-elevated transition-colors flex items-center gap-2">
            <Sparkles className="size-3.5 text-primary" /> Insights da semana
          </button>
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {kpis.map((k, i) => (
          <motion.div
            key={k.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="rounded-xl border border-border bg-gradient-surface p-5 shadow-elegant"
          >
            <div className="text-xs text-muted-foreground">{k.label}</div>
            <div className="font-display text-2xl font-semibold mt-2">{k.value}</div>
            <div className={`mt-3 inline-flex items-center gap-1 text-xs font-medium ${
              k.trend === "up" ? "text-success" : "text-destructive"
            }`}>
              {k.trend === "up" ? <ArrowUpRight className="size-3.5" /> : <ArrowDownRight className="size-3.5" />}
              {k.delta}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
        <div className="lg:col-span-2 rounded-xl border border-border bg-card p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-display text-lg font-semibold">Produção · últimos 6 meses</h2>
              <p className="text-xs text-muted-foreground mt-1">Prêmio emitido em milhares (R$)</p>
            </div>
            <div className="text-xs text-muted-foreground">acumulado <span className="text-foreground font-medium">R$ 1,12M</span></div>
          </div>
          <ProductionChart />
        </div>

        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="font-display text-lg font-semibold mb-1">Agenda do dia</h2>
          <p className="text-xs text-muted-foreground mb-5">{tasks.length} tarefas</p>
          <ul className="space-y-3">
            {tasks.map(t => {
              const Icon = t.type === "call" ? Phone : t.type === "doc" ? FileText : Users2;
              return (
                <li key={t.id} className="flex items-start gap-3 group">
                  <div className="mt-0.5 size-8 rounded-md bg-secondary border border-border grid place-items-center shrink-0 group-hover:border-primary/40 transition-colors">
                    <Icon className="size-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-mono text-primary">{t.time}</div>
                    <div className="text-sm leading-snug">{t.title}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card p-6">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="font-display text-lg font-semibold">Oportunidades recentes</h2>
            <p className="text-xs text-muted-foreground mt-1">Últimas 5 movimentações no pipeline</p>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="bg-secondary/50 text-xs uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="text-left font-medium px-4 py-2.5">ID</th>
                <th className="text-left font-medium px-4 py-2.5">Cliente</th>
                <th className="text-left font-medium px-4 py-2.5">Produto</th>
                <th className="text-right font-medium px-4 py-2.5">Valor</th>
                <th className="text-left font-medium px-4 py-2.5">Etapa</th>
              </tr>
            </thead>
            <tbody>
              {opportunities.slice(0, 5).map(o => (
                <tr key={o.id} className="border-t border-border hover:bg-surface transition-colors">
                  <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{o.id}</td>
                  <td className="px-4 py-3 font-medium">{o.client}</td>
                  <td className="px-4 py-3 text-muted-foreground">{o.product}</td>
                  <td className="px-4 py-3 text-right font-mono">R$ {o.value.toLocaleString("pt-BR")}</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-secondary border border-border">{o.stage}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AppShell>
  );
}

function ProductionChart() {
  const max = Math.max(...productionSeries.map(p => p.v));
  return (
    <div className="flex items-end gap-3 h-44">
      {productionSeries.map((p, i) => {
        const h = (p.v / max) * 100;
        return (
          <div key={p.m} className="flex-1 flex flex-col items-center gap-2">
            <div className="w-full flex items-end h-full">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: i * 0.07, duration: 0.6, ease: "easeOut" }}
                className={`w-full rounded-t-md ${i === productionSeries.length - 1 ? "bg-gradient-amber shadow-glow" : "bg-secondary border border-border"}`}
              />
            </div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{p.m}</div>
          </div>
        );
      })}
    </div>
  );
}
