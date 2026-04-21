import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import { Construction } from "lucide-react";

export const Route = createFileRoute("/propostas")({
  head: () => ({ meta: [{ title: "Propostas · Solvent" }] }),
  component: () => (
    <AppShell>
      <PageHeader eyebrow="Saída" title="Propostas" description="Geração de PDF, envio por WhatsApp e e-mail." />
      <div className="rounded-xl border border-dashed border-border bg-card/40 p-16 text-center">
        <div className="size-12 rounded-xl bg-secondary mx-auto grid place-items-center mb-4">
          <Construction className="size-5 text-muted-foreground" />
        </div>
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          Gerador de proposta com template editável será adicionado na próxima iteração.
        </p>
      </div>
    </AppShell>
  ),
});
