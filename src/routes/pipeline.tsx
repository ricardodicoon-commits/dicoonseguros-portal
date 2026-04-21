import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import { opportunities, type Stage } from "@/lib/mock-data";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

export const Route = createFileRoute("/pipeline")({
  head: () => ({ meta: [{ title: "Pipeline · Solvent" }] }),
  component: PipelinePage,
});

const stages: Stage[] = ["Novo", "Cotando", "Proposta", "Negociação", "Fechado"];

function PipelinePage() {
  return (
    <AppShell>
      <PageHeader
        eyebrow="Vendas"
        title="Pipeline de oportunidades"
        description="Arraste para mover entre etapas. O caminho de ouro vai do lead à proposta em até 7 passos."
      />

      <div className="grid grid-cols-5 gap-4 min-w-[1000px]">
        {stages.map((stage, si) => {
          const items = opportunities.filter(o => o.stage === stage);
          const total = items.reduce((s, i) => s + i.value, 0);
          return (
            <div key={stage} className="rounded-xl border border-border bg-card/40 p-3 flex flex-col">
              <div className="flex items-center justify-between px-2 pb-3 border-b border-border mb-3">
                <div className="flex items-center gap-2">
                  <span className={`size-2 rounded-full ${
                    stage === "Novo" ? "bg-accent" :
                    stage === "Cotando" ? "bg-chart-5" :
                    stage === "Proposta" ? "bg-primary" :
                    stage === "Negociação" ? "bg-warning" : "bg-success"
                  }`} />
                  <span className="text-sm font-medium">{stage}</span>
                  <span className="text-xs text-muted-foreground">· {items.length}</span>
                </div>
                <span className="text-[10px] font-mono text-muted-foreground">
                  R$ {(total / 1000).toFixed(1)}k
                </span>
              </div>
              <div className="space-y-2.5">
                {items.map((o, i) => (
                  <motion.div
                    key={o.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: si * 0.05 + i * 0.04 }}
                    className="rounded-lg border border-border bg-surface p-3 hover:border-border-strong hover:bg-surface-elevated transition-all cursor-pointer"
                  >
                    <div className="font-mono text-[10px] text-muted-foreground">{o.id}</div>
                    <div className="font-medium text-sm mt-1">{o.client}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{o.product}</div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="font-mono text-sm text-primary">R$ {o.value.toLocaleString("pt-BR")}</div>
                      <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                        <Clock className="size-3" /> {o.days}d
                      </div>
                    </div>
                    {o.insurer && (
                      <div className="mt-2 inline-block text-[10px] px-1.5 py-0.5 rounded bg-secondary border border-border">
                        {o.insurer}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </AppShell>
  );
}
