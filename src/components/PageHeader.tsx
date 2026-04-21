import type { ReactNode } from "react";

export function PageHeader({
  eyebrow, title, description, actions,
}: { eyebrow?: string; title: string; description?: string; actions?: ReactNode }) {
  return (
    <div className="flex items-end justify-between gap-6 mb-8">
      <div>
        {eyebrow && (
          <div className="text-[11px] uppercase tracking-[0.22em] text-primary mb-2 font-medium">
            {eyebrow}
          </div>
        )}
        <h1 className="font-display text-3xl font-semibold text-balance">{title}</h1>
        {description && (
          <p className="mt-2 text-sm text-muted-foreground max-w-2xl">{description}</p>
        )}
      </div>
      {actions && <div className="flex items-center gap-2 shrink-0">{actions}</div>}
    </div>
  );
}
