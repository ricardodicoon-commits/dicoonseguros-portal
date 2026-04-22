

## Objetivo
Corrigir o erro de build e tornar todas as abas do CRM funcionais e sincronizadas entre si.

## Problemas identificados

1. **Erro de build** (`src/routes/index.tsx` linha 188): falta o `}` de fechamento da função `DashboardPage` — o `return` foi fechado mas a função não.
2. **Botão "Nova Cotação" do dashboard** navega para `/cotacao` (rota inexistente) — deveria ir para `/nova-cotacao`.
3. **Sidebar (AppShell)** não inclui links para rotas que já existem no projeto: `/nova-cotacao`, `/documentos`, `/timeline`, `/proposta`. Algumas dessas (`proposta` singular vs `propostas` plural) também estão desconectadas do fluxo.
4. **Botão "+ Nova oportunidade"** no header global não faz nada (sem `onClick`).
5. **Cards de oportunidade no Dashboard** não levam à `/pipeline` nem à timeline.
6. **Header do AppShell** não mostra o usuário logado nem oferece logout — o card lateral está hardcoded como "Júlia Marques".
7. **Dados desconectados**: `pipeline`, `index` e `propostas` cada um tem seu próprio mock; mover uma oportunidade no pipeline não reflete no dashboard. Para um MVP coeso, tudo deve ler de `mock-data.ts`.

## Mudanças propostas

### 1. Corrigir o erro de build
`src/routes/index.tsx`: adicionar o `}` final que fecha `function DashboardPage()`.

### 2. Sincronizar a navegação (AppShell)
- Adicionar no menu lateral: **Nova Cotação** (`/nova-cotacao`), **Documentos** (`/documentos`), **Timeline** (`/timeline`).
- Reorganizar em grupos visuais: *Visão Geral* (Dashboard), *Vendas* (Pipeline, Leads, Nova Cotação, Multicálculo, Comparador, Propostas), *Pós-venda* (Clientes, Renovações, Documentos, Timeline), *Sistema* (Administração).
- Botão **+ Nova oportunidade** do header passa a navegar para `/nova-cotacao`.
- Card de usuário lê o `user_email` do `sessionStorage` (mesma chave usada pelo login) e ganha botão **Sair** que limpa o sessionStorage e redireciona para `/login`.

### 3. Conectar o Dashboard ao resto do app
- Botão "Nova Cotação" → `/nova-cotacao` (corrigir URL).
- Cada linha da tabela de Oportunidades vira link para `/timeline?op={id}` (timeline já existe).
- Card "Renovações 30d" e "Cotações ativas" do KPI ganham clique para `/renovacoes` e `/pipeline`.

### 4. Centralizar dados em `mock-data.ts`
- Mover `mockPropostas` (que hoje vive em `propostas.tsx`) e dados de leads/renovações que estiverem espalhados para `mock-data.ts`.
- Garantir que: **Pipeline**, **Dashboard** e **Propostas** leiam do mesmo array `opportunities` (filtros por `stage`).
- Adicionar um helper `getOpportunityById(id)` para a Timeline e Proposta.

### 5. Fluxo "Caminho de Ouro" funcional ponta-a-ponta
Garantir que o usuário consiga percorrer: **Leads → (botão "Converter") → Nova Cotação → Multicálculo → Comparador → Proposta → Pipeline → Timeline**, com botões de "próximo passo" no rodapé de cada tela apontando para a etapa seguinte.

### 6. Proteção de rotas consistente
Toda rota (exceto `/login`) já usa `beforeLoad` checando `sessionStorage`. Manter o padrão e garantir que **todas** as 14 rotas tenham essa verificação (verificar `documentos`, `timeline`, `proposta` que podem estar sem).

### 7. Verificar arquivos órfãos
- `propostas.tsx` (plural — lista) e `proposta.tsx` (singular — detalhe/gerador): manter ambas, garantindo que da lista clica-se para a singular com `?id=`.
- Confirmar que `routeTree.gen.ts` será regenerado pelo Vite plugin no próximo build (não editar manualmente).

## Detalhes técnicos

- Stack: TanStack Start + React 19 + Tailwind v4. Roteamento file-based em `src/routes/`.
- Persistência de sessão: `sessionStorage` (`auth_token`, `user_email`) — sem backend ainda; manter mock até o usuário pedir Lovable Cloud.
- Sidebar usa `framer-motion` com `layoutId="nav-indicator"` — preservar ao agrupar itens.
- Nenhuma nova dependência necessária.
- `routeTree.gen.ts` é auto-gerado; não tocar.

## Fora de escopo (sugerir como próximo passo)
- Persistência real (Lovable Cloud + Supabase) com tabela de oportunidades e RLS.
- Geração real de PDF da proposta (atualmente mockada).
- Integração com APIs de seguradoras.

