import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import { leads } from "@/lib/mock-data";
import { Flame, Snowflake, ThermometerSun } from "lucide-react";

export const Route = createFileRoute("/leads")({
  head: () => ({ meta: [{ title: "Leads · Solvent" }] }),
  component: LeadsPage,
});

function LeadsPage() {
  return (
    <AppShell>
      <PageHeader
        eyebrow="Captação"
        title="Leads"
        description="Origens conectadas: 3 landing pages, formulário de indicação e campanhas Meta Ads."
      />
      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-secondary/50 text-xs uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="text-left font-medium px-6 py-3">Lead</th>
              <th className="text-left font-medium px-4 py-3">Origem</th>
              <th className="text-left font-medium px-4 py-3 w-48">Score IA</th>
              <th className="text-left font-medium px-4 py-3">Status</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody>
            {leads.map(l => {
              const Icon = l.status === "Quente" ? Flame : l.status === "Morno" ? ThermometerSun : Snowflake;
              const tone = l.status === "Quente" ? "text-destructive" : l.status === "Morno" ? "text-warning" : "text-accent";
              return (
                <tr key={l.name} className="border-t border-border hover:bg-surface transition-colors">
                  <td className="px-6 py-4 font-medium">{l.name}</td>
                  <td className="px-4 py-4 text-muted-foreground">{l.origin}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 rounded-full bg-secondary overflow-hidden">
                        <div className="h-full bg-gradient-amber" style={{ width: `${l.score}%` }} />
                      </div>
                      <span className="font-mono text-xs w-8 text-right">{l.score}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`inline-flex items-center gap-1.5 text-xs ${tone}`}>
                      <Icon className="size-3.5" /> {l.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-right">
                    <button className="text-xs px-3 py-1.5 rounded-md border border-border hover:bg-surface-elevated transition-colors">
                      Abrir oportunidade
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </AppShell>
  );
}
