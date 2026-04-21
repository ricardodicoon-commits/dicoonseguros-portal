import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import { Construction } from "lucide-react";

export const Route = createFileRoute("/comparador")({
  head: () => ({ meta: [{ title: "Comparador · Solvent" }] }),
  component: () => (
    <AppShell>
      <PageHeader eyebrow="Decisão" title="Comparador" description="Comparativo lado a lado com cobertura, franquia e assistências." />
      <div className="rounded-xl border border-dashed border-border bg-card/40 p-16 text-center">
        <div className="size-12 rounded-xl bg-secondary mx-auto grid place-items-center mb-4">
          <Construction className="size-5 text-muted-foreground" />
        </div>
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          A comparação detalhada já está integrada ao Multicálculo. Em breve, visão lado a lado focada em coberturas.
        </p>
      </div>
    </AppShell>
  ),
});
