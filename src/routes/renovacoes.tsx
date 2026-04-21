import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import { renewals } from "@/lib/mock-data";
import { AlertTriangle, RefreshCw } from "lucide-react";

export const Route = createFileRoute("/renovacoes")({
  head: () => ({ meta: [{ title: "Renovações · Solvent" }] }),
  component: RenewalsPage,
});

function RenewalsPage() {
  return (
    <AppShell>
      <PageHeader
        eyebrow="Retenção"
        title="Central de renovações"
        description="Apólices vencendo nos próximos 30 dias. Recotação automática 45 dias antes do vencimento."
      />
      <div className="grid gap-3">
        {renewals.map(r => {
          const tone = r.risk === "alto" ? "border-destructive/40 bg-destructive/5"
            : r.risk === "medio" ? "border-warning/30 bg-warning/5"
            : "border-border bg-card";
          return (
            <div key={r.client} className={`rounded-xl border p-5 flex items-center gap-6 ${tone}`}>
              <div className="size-11 rounded-lg grid place-items-center bg-secondary border border-border">
                {r.risk === "alto"
                  ? <AlertTriangle className="size-5 text-destructive" />
                  : <RefreshCw className="size-5 text-muted-foreground" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-3">
                  <div className="font-medium">{r.client}</div>
                  <div className="text-xs text-muted-foreground">{r.product} · {r.insurer}</div>
                </div>
                <div className="text-xs text-muted-foreground mt-1">Prêmio atual: <span className="font-mono text-foreground">R$ {r.premium.toLocaleString("pt-BR")}</span></div>
              </div>
              <div className="text-right">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Vence</div>
                <div className="font-display font-semibold">{r.due}</div>
              </div>
              <button className="h-9 px-4 rounded-md bg-surface border border-border hover:bg-surface-elevated text-sm transition-colors">
                Recotar
              </button>
            </div>
          );
        })}
      </div>
    </AppShell>
  );
}
