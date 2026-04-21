import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import { quotes, rankBy } from "@/lib/mock-data";
import { motion } from "framer-motion";
import { Trophy, Shield, Percent, Scale, Check, FileDown, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/multicalculo")({
  head: () => ({
    meta: [
      { title: "Multicálculo — Resultado · Solvent" },
      { name: "description", content: "Compare seguradoras por preço, cobertura, comissão e equilíbrio." },
    ],
  }),
  component: MulticalcPage,
});

function MulticalcPage() {
  const r = rankBy(quotes);
  return (
    <AppShell>
      <PageHeader
        eyebrow="Cotação · OP-1042 · Marina Souza"
        title="Resultado do multicálculo"
        description="Honda Civic Touring 2022 · CEP 04543-000 · Perfil 32 anos, sem sinistros. 6 seguradoras consultadas em 4,2s."
        actions={
          <>
            <button className="h-9 px-4 rounded-md border border-border bg-surface text-sm hover:bg-surface-elevated transition-colors flex items-center gap-2">
              <MessageCircle className="size-4" /> WhatsApp
            </button>
            <button className="h-9 px-4 rounded-md bg-gradient-amber text-primary-foreground text-sm font-medium flex items-center gap-2 shadow-glow">
              <FileDown className="size-4" /> Gerar proposta
            </button>
          </>
        }
      />

      {/* Ranking cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <RankCard icon={Trophy} label="Melhor preço" tone="accent" insurer={r.bestPrice.insurer}
          metric={`R$ ${r.bestPrice.price.toLocaleString("pt-BR")}`} sub={`Franquia R$ ${r.bestPrice.franchise.toLocaleString("pt-BR")}`} />
        <RankCard icon={Shield} label="Melhor cobertura" tone="success" insurer={r.bestCoverage.insurer}
          metric={`${r.bestCoverage.coverage}/100`} sub={`${r.bestCoverage.assistance} assistências`} />
        <RankCard icon={Percent} label="Melhor comissão" tone="warning" insurer={r.bestCommission.insurer}
          metric={`${r.bestCommission.commission}%`} sub={`R$ ${Math.round(r.bestCommission.price * r.bestCommission.commission / 100).toLocaleString("pt-BR")} estimado`} />
        <RankCard icon={Scale} label="Melhor equilíbrio" tone="primary" insurer={r.bestBalance.insurer}
          metric={`Score ${r.score(r.bestBalance)}`} sub="Recomendação Solvent" highlight />
      </div>

      {/* Detailed table */}
      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <div className="px-6 py-4 border-b border-border flex items-center justify-between">
          <h2 className="font-display text-lg font-semibold">Comparativo detalhado</h2>
          <div className="text-xs text-muted-foreground">Ordenado por score de equilíbrio</div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-secondary/40 text-xs uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="text-left font-medium px-6 py-3">Seguradora</th>
                <th className="text-right font-medium px-4 py-3">Prêmio</th>
                <th className="text-left font-medium px-4 py-3 w-44">Cobertura</th>
                <th className="text-right font-medium px-4 py-3">Franquia</th>
                <th className="text-center font-medium px-4 py-3">Assistências</th>
                <th className="text-right font-medium px-4 py-3">Comissão</th>
                <th className="text-center font-medium px-4 py-3">Score</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              {[...quotes].sort((a,b) => r.score(b) - r.score(a)).map((q, i) => {
                const score = r.score(q);
                const isTop = i === 0;
                return (
                  <motion.tr
                    key={q.insurer}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className={`border-t border-border ${isTop ? "bg-primary/5" : "hover:bg-surface"} transition-colors`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded-md grid place-items-center font-display font-bold text-xs"
                          style={{ background: q.logoColor, color: "white" }}>
                          {q.insurer.split(" ").map(w => w[0]).slice(0,2).join("")}
                        </div>
                        <div>
                          <div className="font-medium">{q.insurer}</div>
                          <div className="text-[11px] text-muted-foreground mt-0.5 flex gap-1.5">
                            {q.highlights.map(h => (
                              <span key={h} className="inline-flex items-center gap-1">
                                <Check className="size-2.5 text-success" />{h}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-right font-mono font-medium">R$ {q.price.toLocaleString("pt-BR")}</td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-1.5 rounded-full bg-secondary overflow-hidden">
                          <div className="h-full bg-gradient-amber" style={{ width: `${q.coverage}%` }} />
                        </div>
                        <span className="text-xs font-mono text-muted-foreground w-8 text-right">{q.coverage}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-right font-mono text-muted-foreground">R$ {q.franchise.toLocaleString("pt-BR")}</td>
                    <td className="px-4 py-4 text-center font-mono text-muted-foreground">{q.assistance}</td>
                    <td className="px-4 py-4 text-right font-mono text-success">{q.commission}%</td>
                    <td className="px-4 py-4 text-center">
                      <div className={`inline-flex items-center justify-center size-9 rounded-full font-display font-semibold text-sm ${
                        isTop ? "bg-gradient-amber text-primary-foreground shadow-glow" : "bg-secondary border border-border"
                      }`}>{score}</div>
                    </td>
                    <td className="px-4 py-4">
                      <button className={`text-xs px-3 py-1.5 rounded-md transition-colors ${
                        isTop ? "bg-primary text-primary-foreground" : "border border-border hover:bg-surface-elevated"
                      }`}>
                        Selecionar
                      </button>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </AppShell>
  );
}

function RankCard({
  icon: Icon, label, insurer, metric, sub, tone, highlight,
}: {
  icon: typeof Trophy; label: string; insurer: string; metric: string; sub: string;
  tone: "accent" | "success" | "warning" | "primary"; highlight?: boolean;
}) {
  const toneClass = {
    accent: "text-accent",
    success: "text-success",
    warning: "text-warning",
    primary: "text-primary",
  }[tone];
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative rounded-xl border p-5 overflow-hidden ${
        highlight ? "border-primary/40 bg-gradient-surface shadow-glow" : "border-border bg-card"
      }`}
    >
      {highlight && <div className="absolute inset-0 bg-gradient-amber opacity-[0.04] pointer-events-none" />}
      <div className="relative flex items-start justify-between mb-4">
        <div className={`size-9 rounded-lg grid place-items-center bg-secondary ${toneClass}`}>
          <Icon className="size-4" />
        </div>
        <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{label}</span>
      </div>
      <div className="relative">
        <div className="font-display text-xl font-semibold">{insurer}</div>
        <div className={`font-mono text-2xl mt-2 ${highlight ? "text-primary" : "text-foreground"}`}>{metric}</div>
        <div className="text-xs text-muted-foreground mt-1">{sub}</div>
      </div>
    </motion.div>
  );
}
