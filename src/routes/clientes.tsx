import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import { Construction } from "lucide-react";

export const Route = createFileRoute("/clientes")({
  head: () => ({ meta: [{ title: "Clientes · Solvent" }] }),
  component: () => (
    <AppShell>
      <PageHeader eyebrow="Base" title="Clientes" description="Perfil 360°, histórico de apólices e interações." />
      <Placeholder text="Listagem de clientes com timeline, documentos e propostas será conectada na próxima iteração." />
    </AppShell>
  ),
});

function Placeholder({ text }: { text: string }) {
  return (
    <div className="rounded-xl border border-dashed border-border bg-card/40 p-16 text-center">
      <div className="size-12 rounded-xl bg-secondary mx-auto grid place-items-center mb-4">
        <Construction className="size-5 text-muted-foreground" />
      </div>
      <p className="text-sm text-muted-foreground max-w-md mx-auto">{text}</p>
    </div>
  );
}
