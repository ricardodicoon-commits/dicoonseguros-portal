# 🎯 PRD - Dicoonseguros Portal | Tabela de Telas

## 📋 Referência Rápida das Telas

| # | Tela | Objetivo | Componentes Principais | Ordem | Status |
|---|------|----------|------------------------|-------|--------|
| 1 | **Login** | Acesso seguro ao sistema | Card login, campos e-mail/senha, links de suporte | 1º | 📝 Pronto |
| 2 | **Dashboard** | Visão operacional da corretora | KPIs, gráficos, tarefas, pipeline, alertas | 2º | 📝 Pronto |
| 3 | **Leads** | Gestão de oportunidades captadas | Tabela de leads, filtros, painel lateral, ações rápidas | 3º | 📝 Pronto |
| 4 | **Clientes** | CRM central com dados do segurado | Tabela de clientes, drawer detalhado, apólices | 4º | 📝 Pronto |
| 5 | **Cadastro de Cliente** | Entrada de novos clientes | Wizard em 5 etapas, auto-save, validação | 5º | 📝 Pronto |
| 6 | **Nova Cotação - Auto** | Formulário de cotação para automóvel | Forms em etapas, upload placa, histórico | 6º | 📝 Pronto |
| 7 | **Resultado Multicálculo** | Cotações de múltiplas seguradoras | Tabela comparativa, ordenação, seleção | 7º | 📝 Pronto |
| 8 | **Comparativo Detalhado** | Análise lado a lado de 3 propostas | Grid 3 colunas, destaque diferenças, venda consultiva | 8º | 📝 Pronto |
| 9 | **Gerador de Proposta** | Transformação de cotação em proposta | Templates, editor visual, PDF/e-mail/WhatsApp | 9º | 📝 Pronto |
| 10 | **Timeline da Oportunidade** | Histórico comercial da negociação | Linha do tempo, eventos, tarefas, notas | 10º | 📝 Pronto |
| 11 | **Pipeline Comercial** | Kanban de vendas por etapa | Colunas kanban, drag-drop, cards, métricas | 11º | 📝 Pronto |
| 12 | **Agenda e Tarefas** | Produtividade diária do corretor | Calendário, tarefas, follow-ups, renovações | 12º | 📝 Pronto |
| 13 | **Renovações** | Gestão de apólices vencendo | Tabela com urgência, ações de recontato, comissão | 13º | 📝 Pronto |
| 14 | **Documentos** | Biblioteca documental | Categorias, busca, upload, compartilhamento, preview | 14º | 📝 Pronto |
| 15 | **Configurações** | Admin da plataforma | 10 abas (perfil, usuarios, seguradoras, integrações) | 15º | 📝 Pronto |
| 16 | **Detalhes da Seguradora** | Painel operacional por seguradora | 8 abas (info, ramos, credenciais, comissão, histórico) | 16º | 📝 Pronto |
| 17 | **Mobile** | Versão responsiva para campo | Bottom nav, cards, forms simplificados, FAB | 17º | 📝 Pronto |

---

## 🎨 Design System Unificado

### Cores
- **Primária:** Azul Petróleo / Teal
- **Sucesso:** Verde
- **Alerta:** Âmbar
- **Erro:** Vermelho (apenas crítico)
- **Neutros:** Cinzas suaves
- **Modos:** Light + Dark

### Navegação
- **Sidebar:** Elegante, sempre visível desktop
- **Header:** Menu, busca, notificações, perfil
- **Mobile:** Bottom nav (5 abas)
- **CTA Principal:** "Nova cotação" sempre visível

### Componentes
- Tabelas modernas
- Cards discretos
- Badges elegantes
- Avatares com iniciais
- Formulários em wizard
- Gráficos/charts modernos
- Modais/drawers elegantes

---

## 📊 Fluxos Principais

### 🔄 Fluxo de Cotação (Core)
1. **Leads** → 2. **Cadastro Cliente** → 3. **Nova Cotação** → 4. **Resultado Multicálculo** → 5. **Comparativo** → 6. **Proposta** → 7. **Pipeline**

### 🔄 Fluxo de Renovação
1. **Renovações** → 2. **Recotar** (nova cotação baseada em apólice) → 3. **Resultado** → 4. **Proposta** → 5. **Acompanhamento**

### 🔄 Fluxo de CRM
1. **Clientes** → 2. **Timeline** (histórico) → 3. **Agenda** (follow-ups) → 4. **Documentos** (armazenagem)

### 🔄 Fluxo de Gestão
1. **Dashboard** → 2. **Pipeline** → 3. **Renovações** → 4. **Configurações** (ajustes)

---

## 🎯 Funcionalidades Essenciais

### ✅ Multicálculo
- Cotação simultânea em várias seguradoras
- Ordenação por preço, cobertura, comissão
- Comparação lado a lado
- Recálculo individual

### ✅ Gestão Comercial
- Pipeline kanban
- Timeline de oportunidade
- Tarefas e follow-ups agendados
- Integração com calendário

### ✅ Propostas
- Gerador visual com templates
- Envio por e-mail (com tracking)
- Compartilhamento via WhatsApp
- Exportação para PDF

### ✅ CRM
- Cadastro de cliente (wizard)
- Histórico de cotações e propostas
- Apólices e renovações
- Documentos centralizados

### ✅ Produtividade
- Dashboard com KPIs
- Agenda diária
- Lembretes automáticos
- Tarefas prioritizadas

### ✅ Administrativo
- Gestão de usuários e permissões
- Configuração de seguradoras
- Templates de proposta
- Integrações externas

---

## 📱 Responsividade

| Dispositivo | Navegação | Layout | Prioridades |
|-------------|-----------|--------|-------------|
| **Desktop** | Sidebar + Header | Horizontal, grid | Tabelas, gráficos, détalhes |
| **Tablet** | Toggle sidebar | Flexible | Cards e tabs |
| **Mobile** | Bottom nav | Vertical stacks | Ações de toque, formulários simples, FAB |

---

## 🔐 Segurança & Permissões

### Roles
- **Admin:** Acesso total a tudo
- **Gestor:** Dashboard, leads, clientes, cotações, renovações, financeiro
- **Corretor:** Seus dados, seus leads/clientes, suas cotações
- **Operacional:** Processamento, documentos, suporte
- **Leitor:** Visualização apenas

### Features
- Two-factor authentication
- IP whitelist
- Session timeout
- Histórico de logins
- Log de ações críticas

---

## 📈 Métricas Principais (Dashboard)

### KPIs Diários
- Cotações feitas hoje
- Propostas enviadas
- Taxa de conversão
- Produção do mês
- Renovações próximas

### Gráficos
- Evolução de cotações (30 dias)
- Taxa de conversão (período)
- Ranking de seguradoras

### Pipeline
- Total em aberto
- Taxa de ganho (%)
- Valor potencial
- Cards parados >7 dias (alerta)

---

## 🔗 Integrações Suportadas

- Zapier
- Google Sheets
- E-mail automático (SMTP)
- SMS/WhatsApp
- Webhooks personalizados
- API por seguradoras (credenciais configuráveis)

---

## 📞 Seguradoras Base (Mockadas)

Para testes iniciais, considere incluir:
- **Seguradoras Auto (principais):** Itau, Bradesco, Allianz, Sompo, Zurich, MSO, Zurich, Porto, Liberty
- **Dados mockados realistas:** tempos de retorno variados, comissões diferentes, coberturas customizadas

---

## 🎯 Dados Mockados Recomendados

### Clientes
- 20-30 clientes (PF e PJ) com histórico
- Apólices ativas e vencidas
- Propostas enviadas e aceitas

### Leads
- 15-20 leads em diferentes etapas
- Múltiplas origens (site, indicação, campanha, WhatsApp)
- Status variado (novo, qualificado, descartado)

### Cotações
- 5-10 resultados de multicálculo
- Diferentes ramos (auto principal, saúde, residencial)
- Histórico de 30 dias

### Propostas
- 6-8 propostas com templates diversos
- Status: enviada, aberta, aceita, rejeitada

### Tarefas
- 20-25 tarefas com prioridades
- Distribuição entre corretores
- Renovações urgentes (7, 15, 30 dias)

---

## 🚀 Próximas Fases (Roadmap Sugerido)

### Fase 1: MVP (Telas Essenciais)
- Login
- Dashboard
- Clientes
- Nova Cotação
- Resultado Multicálculo
- Proposta

### Fase 2: Gestão Completa
- Leads
- Pipeline
- Agenda e Tarefas
- Timeline
- Renovações

### Fase 3: Administrativo
- Configurações
- Detalhes da Seguradora
- Documentos
- Financeiro (opcional)

### Fase 4: Mobile
- Versão mobile completa
- App nativa (opcional)

---

## 📝 Checklist de Consistência

Ao implementar cada tela, verifique:

- ✅ Paleta de cores mantida (azul teal, verde, âmbar, vermelho)
- ✅ Tipografia sofisticada (nada genérico)
- ✅ Sidebar e header consistentes
- ✅ Componentes reutilizáveis (buttons, inputs, cards)
- ✅ Light e dark mode funcionando
- ✅ Responsividade (desktop, tablet, mobile)
- ✅ Mockdata realista
- ✅ CTA "Nova cotação" visível
- ✅ Validações claras em formulários
- ✅ Nenhum visual de ERP antigo/genérico

---

## 💡 Dica de Uso

1. **Acesse o arquivo `LOVABLE_PROMPTS.md`** para ver cada prompt completo
2. **Copie um prompt por vez** e cole no Lovable
3. **Customizador nomes** (Dicoonseguros, produtos específicos, textos)
4. **Adicione a instrução de consistência visual** ao fim de cada prompt
5. **Trabalhe em ordem** (1-17) para manter coerência de design

---

Qualquer dúvida ou ajuste, basta pedir! 🎯
