import { createFileRoute, redirect } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import { Construction } from "lucide-react";
import { getAuthToken, getUserRole } from "@/lib/auth";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Administração · Dicoon Seguros" }] }),
  beforeLoad: () => {
    if (!getAuthToken()) {
      throw redirect({ to: "/login" });
    }
    if (getUserRole() !== "admin") {
      throw redirect({ to: "/" });
    }
  },
  component: () => (
    <AppShell>
      <PageHeader eyebrow="Configurações" title="Administração" description="Usuários, permissões, integrações e regras comerciais." />
      <div className="rounded-xl border border-dashed border-border bg-card/40 p-16 text-center">
        <div className="size-12 rounded-xl bg-secondary mx-auto grid place-items-center mb-4">
          <Construction className="size-5 text-muted-foreground" />
        </div>
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          Painel de seguradoras, credenciais e RBAC será habilitado quando ativarmos Lovable Cloud.
        </p>
      </div>
    </AppShell>
  ),
});
