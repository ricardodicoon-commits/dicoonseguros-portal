# 🎯 Prompts Lovable - Plataforma Premium de Multicálculo de Seguros

## 📋 Visão Geral do Sistema

**Nome do Produto:** Dicoonseguros Portal  
**Tipo:** Web App SaaS Premium para Corretoras de Seguros  
**Público:** Corretores, gestores de corretora, equipes comerciais e operacionais

---

## 🎨 Design System Unificado

### Paleta de Cores
- **Primária:** Azul Petróleo / Teal (destaque, CTA, links)
- **Sucesso:** Verde
- **Alerta:** Âmbar
- **Erro:** Vermelho (apenas para erros críticos)
- **Neutros:** Cinzas suaves para backgrounds
- **Modos:** Light e Dark mode completos

### Tipografia
- Sofisticada, corporativa e moderna
- Excelente hierarquia visual
- Sem visual genérico ou ERP antigo

### Componentes Base
- Sidebar elegante e funcional
- Header superior com busca, notificações e perfil
- Cards discretos e premium
- Tabelas modernas
- Formulários em etapas
- Badges de status elegantes
- Buttons com CTA primária sempre visível

### Princípios UX
- Menos cliques para cotar
- Fluxo orientado à conversão
- Alta legibilidade
- Interface rápida e elegante
- Dados mockados realistas
- Estados vazios bem desenhados
- Filtros inteligentes
- Botão "Nova cotação" sempre visível

---

## 📱 Arquitetura das Telas

1. Login
2. Dashboard
3. Leads
4. Clientes
5. Cadastro de Cliente
6. Nova Cotação (Auto)
7. Resultado do Multicálculo
8. Comparativo Detalhado
9. Gerador de Proposta
10. Timeline da Oportunidade
11. Pipeline Comercial
12. Agenda e Tarefas
13. Renovações
14. Documentos
15. Configurações
16. Detalhes da Seguradora (Admin)
17. Mobile (navegação inferior)

---

# 🔐 PROMPT 1: LOGIN

## Objetivo
Criar tela de login premium que transmita confiança, segurança e acesso rápido ao sistema.

## Estrutura
- **Layout split:** lado esquerdo com branding, headline e benefícios
- **Lado direito:** card de login com campos e CTAs
- **Rodapé:** links discretos para termos e privacidade

## Campos
- E-mail
- Senha
- Botão "Entrar" (destaque, primária)
- Link "Esqueci minha senha"
- Opção "Entrar com ambiente da corretora" (opcional)
- Link "Solicitar demonstração ou teste"

## Texto Sugerido
**Headline:** "Centralize cotações, propostas e conversões em uma única plataforma."

**Benefícios:**
- Multicálculo em várias seguradoras simultaneamente
- Comparação lado a lado com transparência
- Geração de propostas profissionais em segundos
- Acompanhamento operacional e comercial completo
- Gestão de clientes, leads e renovações

## Estilo
- Premium, corporativo e moderno
- Visual elegante, sem exageros
- Ilustração abstrata sutil (dados, proteção, operação comercial)
- Excelente hierarquia visual

## UX
- Foco automático no campo de e-mail
- Validação clara de campos
- Botão de acesso principal em destaque
- Versão mobile impecável
- Carregamento rápido e responsivo

---

# 📊 PROMPT 2: DASHBOARD

## Objetivo
Dar visão operacional e comercial atualizada da corretora em tempo real.

## Seções

### 1. Header Superior
- Sidebar menu (hambúrguer ou expandido)
- Campo de busca global
- Bell icon (notificações)
- Avatar do usuário with menu

### 2. KPIs Principais (Topo)
Cards em grid com:
- **Cotações do dia:** número + variação
- **Propostas enviadas:** número + valor
- **Taxa de conversão:** percentual + trend
- **Produção do mês:** valor + meta
- **Renovações próximas:** número + urgência

### 3. Gráficos e Visualizações
- **Gráfico 1:** Evolução de cotações (últimos 30 dias, linha/área)
- **Gráfico 2:** Taxa de conversão por período (barras)
- **Gráfico 3:** Ranking de seguradoras mais cotadas (top 5)

### 4. Lista de Tarefas e Follow-ups
- Cards com tarefas do dia
- Status visual (pendente, vencido, hoje)
- Filtro rápido por prioridade

### 5. Pipeline Resumido
- Cards por etapa: Novo Lead | Qualificação | Cotação | Proposta | Negociação | Ganho
- Números por etapa
- Valor total em aberto

### 6. Oportunidades Recentes
- Tabela/lista com últimas oportunidades
- Cliente, produto, valor, status, corretor responsável
- Link rápido para timeline

### 7. Alertas Importantes
- Documentos pendentes
- Apólices próximas do vencimento
- Leads sem retorno há X dias
- Propostas expiradas

## Estilo
- Layout premium de dashboard SaaS
- Cores discretas, visual limpo
- Cards com sombra sutil
- Gráficos modernos e legíveis
- Grid responsivo
- Densidade ideal de informação

## CTA Principais
- **Primária:** "Nova cotação" (destaque, sempre visível)
- **Secundária:** "Novo cliente"
- **Terciárias:** abrir detalhes, reagendar tarefas

## UX
- Leitura rápida e escaneável
- Clique em cards para abrir detalhes
- Filtros contextuais por período, corretor, ramo
- Refresh automático de dados

---

# 👥 PROMPT 3: LEADS

## Objetivo
Organizar oportunidades captadas por campanhas, indicação, site, WhatsApp ou importação manual.

## Layout

### 1. Header com resumo
Cards em linha com:
- **Total de leads:** número
- **Leads novos:** 7 últimos dias
- **Leads qualificados:** prontos para cotação
- **Leads sem retorno:** há mais de 3 dias

### 2. Ações e Filtros
- Botão "Novo lead"
- Botão "Importar leads"
- Toggle: Visualização em lista / cards
- Filtros: origem, status, ramo, corretor
- Busca por nome, telefone ou e-mail

### 3. Tabela/Cards de Leads
Colunas ou fields:
- **Nome** (destaque)
- **Origem** (badge: campanhas, indicação, site, WhatsApp, manual)
- **Produto de interesse** (icon + texto)
- **Status** (badge: novo, qualificado, descartado, em negociação)
- **Corretor responsável**
- **Data de entrada**
- **Ações rápidas** (ícones: qualificar, descartar, converter, iniciar cotação)

### 4. Painel Lateral (ao clicar no lead)
- Dados completos do lead
- Histórico de contatos
- Tarefas relacionadas
- Botão "Converter em cliente"
- Botão "Iniciar cotação"
- Botão "Criar tarefa"
- Observações e notas internas

## Estilo
- Muito organizado
- Foco em produtividade comercial
- Cores discretas e profissionais
- Badges de status elegantes
- Cards limpos se em visualização de cards

## UX
- Ações rápidas com ícones
- Priorização visual dos leads mais quentes
- Drag-and-drop para assignment
- Busca inteligente

---

# 👤 PROMPT 4: CLIENTES

## Objetivo
Centralizar dados cadastrais, apólices, histórico de propostas, cotações e interações.

## Layout

### 1. Cards de Resumo (Topo)
- **Total de clientes:** PF + PJ
- **Clientes novos mês:** número
- **Clientes com apólice:** valor em carteira
- **Clientes em risco:** vencimento próximo

### 2. Filtros e Busca
- Filtro por tipo (PF/PJ)
- Filtro por cidade
- Filtro por status
- Filtro por corretor
- Filtro por ramo contratado
- Filtro por mês de aniversário de renovação
- Busca global por nome, CPF/CNPJ, telefone, e-mail
- Botão "Novo cliente"

### 3. Tabela de Clientes
Colunas:
- **Nome/Razão Social** (destaque, clickable)
- **CPF/CNPJ**
- **Telefone**
- **E-mail**
- **Cidade**
- **Último contato** (data/hora)
- **Próxima renovação** (destaque se próximo)
- **Status** (cliente ativo, inativo, em risco)
- **Ações rápidas** (ícones: cotação, proposta, documento, tarefa, atendimento)

### 4. Drawer/Página de Detalhes (ao clicar)
**Abas:**
- **Dados cadastrais:** todas as informações
- **Apólices ativas:** tabela com apólices vigentes
- **Histórico de cotações:** lista de cotações realizadas
- **Propostas enviadas:** lista de propostas geradas
- **Documentos:** anexados, RG, comprovante, etc
- **Timeline:** interações, chamados, contatos
- **Tarefas:** pendentes e concluídas

**Ações:**
- Editar dados
- Iniciar cotação
- Gerar proposta
- Upload de documento
- Criar tarefa
- Registrar atendimento
- Marcar cliente como inativo

## Estilo
- CRM premium
- Interface limpa e legível
- Componentes elegantes e discretos
- Tabela moderna com hover effects
- Drawer lateral elegante

## UX
- Ações rápidas para fluxos principais
- Filtros inteligentes e persistentes
- Busca instantânea
- Preview rápido antes de abrir drawer

---

# ➕ PROMPT 5: CADASTRO DE CLIENTE

## Objetivo
Cadastrar segurados de forma rápida, confiável e sem fricção.

## Estrutura do Wizard

### Etapa 1: Tipo de Cliente
- Radio buttons: **Pessoa Física** ou **Pessoa Jurídica**
- Animação suave para próxima etapa
- Descrição breve do tipo

### Etapa 2: Dados Básicos (PF)
- **Nome completo** (texto)
- **CPF** (máscara: XXX.XXX.XXX-XX, validação em tempo real)
- **Data de nascimento** (picker)
- **Telefone** (máscara, validação)
- **E-mail** (validação)

### Etapa 2: Dados Básicos (PJ)
- **Razão social** (texto)
- **CNPJ** (máscara: XX.XXX.XXX/XXXX-XX, validação)
- **Data de fundação** (picker)
- **Telefone** (máscara)
- **E-mail** (validação)

### Etapa 3: Endereço
- **CEP** (máscara, auto-fill de endereço)
- **Rua/Avenida** (texto)
- **Número** (texto)
- **Complemento** (opcional)
- **Bairro** (texto, preenchimento automático)
- **Cidade** (select com autocomplete)
- **Estado** (select)

### Etapa 4: Dados Complementares
- **Profissão/Segmento** (select com opciones)
- **Preferência de contato** (checkboxes: e-mail, telefone, whatsapp, sms)
- **Tags ou segmento** (multi-select ou input com tokens)
- **Observações** (textarea)

### Etapa 5: Revisão Final
- Resumo de todos os dados preenchidos
- Botões para editar cada seção
- **Botão primário:** "Salvar e iniciar cotação"
- **Botão secundário:** "Salvar para depois"

## Estilo
- Wizard elegante com progress indicator
- Visual premium
- Formulários espaçosos, bem organizados
- Good whitespace
- Nada apertado ou poluído

## UX
- **Auto-save visual** de cada etapa
- **Validação instantânea** com feedback claro
- **Máscaras inteligentes** para campos numéricos
- **Autocomplete** para cidades, segmentos
- **Progress bar** mostrando etapa atual
- **Botão sempre visível** para próxima etapa
- **Navegação backward** para editar etapas anteriores

---

# 🚗 PROMPT 6: NOVA COTAÇÃO - SEGURO AUTO

## Objetivo
Permitir preencher dados do segurado e do veículo para consultar várias seguradoras em um multicálculo.

## Estrutura do Formulário em Etapas

### Etapa 1: Seleção de Cliente
- **Cliente existente** (searchable select)
  - Ou **novo cliente** (atalho para cadastro rápido)

### Etapa 2: Dados do Segurado
- **Nome completo** (pré-preenchido se cliente existente)
- **CPF** (pré-preenchido)
- **Data de nascimento** (pré-preenchido)
- **Profissão**
- **Telefone**
- **E-mail**

### Etapa 3: Dados do Veículo
- **Placa** (máscara, auto-fetch de dados do Denatran)
- **Marca** (select, pré-preenchido se placa buscada)
- **Modelo** (select, pré-preenchido)
- **Ano modelo** (number)
- **Combustível** (select: gasolina, álcool, diesel, flex, híbrido, elétrico)
- **Tipo de uso** (select: particular, comercial, profissional)
- **Valor do veículo** (number com máscara monetária)

### Etapa 4: Utilização e CEP
- **CEP de pernoite** (máscara, validação)
- **Utilização** (select: família, trabalho, ambos)
- **Km médio mensal** (number)

### Etapa 5: Historico e Condutor
- **Condutor principal** (nome, obrigatório)
- **Idade do condutor** (number)
- **Bônus anterior** (selec: 0~50%)
- **Seguradora anterior** (select)
- **Histórico de sinistros** (checkbox list: nenhum, 1 sinistro, 2+ sinistros)

### Etapa 6: Coberturas Desejadas
- **Franquia desejada** (select: R$500, R$750, R$1000, R$1500, R$2000)
- **Terceiros** (checkbox)
- **Casco** (checkbox)
- **Vidros** (checkbox)
- **Assistência 24h** (checkbox)
- **Proteção contra furto/roubo** (checkbox)
- **Cobertura de acidentes pessoais** (checkbox)
- **Cobertura em viagem** (checkbox)

### Etapa 7: Observações e Revisão
- **Observações** (textarea)
- Resumo visual com todos os dados
- Botão para duplicar cotação
- Botão para salvar rascunho (gray)
- **Botão primário:** "Rodar multicálculo" (destaque azul teal)

## Resumo Lateral
- Mini card com **perfil do risco** resumido
- Ícones visuais para cada dado-chave
- Atualiza em tempo real conforme preenchimento

## Estilo
- Premium e corporativo
- Pensado para produtividade
- Formulário com bom espaçamento
- Good visual hierarchy
- Inputs com placeholder texto sugestivo

## UX
- **Formulário dividido em etapas** (máx. 7 etapas)
- **Auto-fill** quando possível
- **Validação instantânea** com visual claro
- **Progress bar** sempre visível
- **Duplicar cotação** para rodar novamente com pequenas mudanças
- **Salvar rascunho** para voltar depois
- Botão "Rodar multicálculo" sempre visível no fim

---

# 📈 PROMPT 7: RESULTADO DO MULTICÁLCULO

## Objetivo
Exibir cotações das seguradoras de forma comparável, clara e comercialmente útil.

## Layout

### 1. Header
- Nome da oportunidade / cliente
- Info resumida do risco (e.g., "Auto - VW Gol 2020")
- Botões: "Editar dados do risco", "Redarar multicálculo", "Salvar como proposta"

### 2. Opções de Ordenação (abaixo do header)
- **Botões filter/sort:**
  - Menor preço
  - Melhor cobertura
  - Maior comissão
  - Melhor custo-benefício (default recomendado)

### 3. Tabela/Cards de Cotações
Colunas ou fields:
- **Seguradora** (logo + nome)
- **Prêmio total** (destaque, maior)
- **Valor mensal** (parcelamento)
- **Cobertura principal** (badge)
- **Franquia** (número)
- **Assistências** (ícones: 24h, viagem, etc)
- **Comissão** (info do corretor, pode estar oculta)
- **Vigência** (período válido)
- **Tempo de retorno** (e.g., "2 horas")
- **Status** (badge: cotado, processando, erro)
- **Ações** (botão "Selecionar para comparar", botão "Gerar proposta")

### 4. Seleção para Comparação
- Checkboxes para selecionar até 3 opções
- Ao atingir 3 seleções, ativar botão "Comparar opções"
- Preview inline das seleções

### 5. Recomendação Principal
- Card destacado com recomendação do sistema
- Motivo: "Melhor equilíbrio entre preço e cobertura"
- Opção de "Gerar proposta com esta cotação"

### 6. Ações Suplementares
- Botão "Editar coberturas e recalcular" (select seguradora)
- Botão "Recalcular seguradora individual"
- Botão "Exportar resultado"

## Estilo
- Tabela moderna e premium
- Cards ou linhas muito elegantes
- Badges de status discretas
- Visual orientado à decisão
- CTA primária "Gerar proposta" sempre visível

## UX
- Tabela responsiva (stack em mobile)
- Hover effects com informações complementares
- Clique em seguradora abre drawer com detalhes
- Botão "Comparar opções" ativa visualização lado a lado

---

# 🔍 PROMPT 8: COMPARATIVO DETALHADO

## Objetivo
Permitir análise lado a lado de até 3 cotações com máxima clareza (venda consultiva).

## Layout

### 1. Header
- Breadcrumb: Dashboard > Cotações > Comparativo
- Botão "Voltar"
- Botão "Gerar proposta com melhor opção"

### 2. Seleção de Seguradoras
- 3 colunas lado a lado
- Cada coluna com logo e nome da seguradora
- Botão (X) para trocar uma seguradora
- Indicadores visuais: melhor preço, melhor cobertura, melhor balanço

### 3. Comparação Lado a Lado
**Seções:**

**Prêmio e Parcelamento**
- Prêmio total
- Valor da parcela mensal
- (Destaque: melhor preço com badge)

**Franquia**
- Valor/percentual
- (Destaque visual das diferenças)

**Coberturas**
- Lista de coberturas (checkbox "Esconder itens iguais")
- Diferenças destacadas em cor
- Ícones visuais

**Assistências**
- Lista de assistências incluídas
- Marcação de diferenças

**Adicionais e Limitações**
- Limite de indenização
- Prazo de vigência
- Restrições ou observações

**Comissão do Corretor**
- Valor/percentual
- Info de repasse

**Observações Importantes**
- Texto destacado com regras ou considerações

### 4. Funcionalidades

**Hide Equal Items**
- Checkbox top para esconder coberturas idênticas
- Foco apenas nas diferenças

**Destaque Visual**
- Melhor preço: badge verde
- Melhor cobertura: badge azul
- Melhor equilíbrio: badge âmbar
- Diferenças: cor de destaque sutil

**Ações Finais**
- Radio/button para selecionar "opção vencedora"
- Botão **"Gerar proposta com esta cotação"** (destacado)
- Botão "Voltar para resultado"
- Botão "Editar e recalcular"

## Estilo
- Comparador sofisticado
- Visual muito limpo
- Excelente hierarquia de informação
- Sensação de ferramenta consultiva premium
- 3 colunas em desktop, stack em mobile

## UX
- Leitura rápida das diferenças
- Destaque automático de melhor escolha
- Navegação fluida para próxima etapa (proposta)

---

# 📝 PROMPT 9: GERADOR DE PROPOSTA

## Objetivo
Transformar a cotação escolhida em proposta profissional pronta para apresentação ao cliente.

## Layout

### 1. Cabeçalho Funcional
- Seleção de **template** (dropdown: Template Premium v1, v2, minimalista, etc)
- Toggle: **Preview | Editar**
- Botões: "Salvar proposta", "Salvar como rascunho"

### 2. Seção de Edição (se aba Editar)

**Logo e Branding**
- Upload/select logo da corretora
- Preview de como aparecerá no documento

**Dados do Cliente**
- Nome, CPF/CNPJ, telefone, e-mail
- (pré-preenchidos, editáveis)

**Seguradora Escolhida**
- Logo + nome (destaque)
- Resumo de coberturas
- Valor total e parcelamento

**Resumo de Coberturas**
- Lista elegante das coberturas incluídas
- Destaque visual de adicionais

**Valor Total e Parcelamento**
- Prêmio anual
- Valor de parcela
- Distribuição de pagamento

**Diferenciais da Oferta**
- Campo para destacar pontos fortes: "Melhor preço do mercado", "Melhor cobertura", "Melhor atendimento"

**Mensagem Personalizada do Corretor**
- Textarea para adicionar nota consultiva
- (e.g., "Esta é minha recomendação porque...")

**Recomendação do Corretor**
- Checkbox para destacar visualmente a recomendação

### 3. Preview (aba Preview)
- Visualização em tempo real do documento PDF
- Muito elegante, profissional
- Responsive e pronto para impressão
- Brands da corretora bem integrados

### 4. Ações Finais

**Botões:**
- **"Gerar PDF"** (download direto)
- **"Enviar por e-mail"** (abre modal com destinatário e assunto pré-preenchidos; tracking de abertura opcional)
- **"Enviar por WhatsApp"** (gera link de compartilhamento com prévia)
- **"Salvar como rascunho"** (gray button)
- **"Salvar e finalizar"** (primary, destaque)

## Estilo
- Visual elegante, confiável e comercial
- Template layout de documento premium
- Design que ajude a vender
- Cores e tipografia sofisticadas
- Logo e branding bem integrados

## UX
- Edição fácil e intuitiva
- Templates modernos e customizáveis
- CTA principal "Gerar proposta" bem destacado
- CTA secundária "Enviar ao cliente"
- Preview atualiza em tempo real conforme edições
- Tracking de envio (email aberto, clique em links, etc)

---

# ⏳ PROMPT 10: TIMELINE DA OPORTUNIDADE

## Objetivo
Mostrar toda a evolução comercial de uma oportunidade em uma única visão (CRM premium).

## Layout

### 1. Cabeçalho
- Nome do cliente
- Ramo de interesse (icon + texto)
- Valor estimado (destaque)
- Etapa atual (badge: novo lead | qualificação | cotação | proposta | negociação | ganho | perdido)
- Corretor responsável (avatar + nome)
- Dropdown de ações: "Mover etapa", "Criar tarefa", "Registrar contato", "Iniciar nova cotação"

### 2. Corpo Principal: Linha do Tempo Vertical
Eventos em ordem cronológica (recentest first):

**Cartão de evento:**
- **Ícone visual:** 📌 para lead criado, 👤 para cliente cadastrado, 📊 para cotação, 📄 para proposta, ☎️ para follow-up, ✅ para fechamento, ❌ para perda
- **Título do evento** (e.g., "Proposta enviada ao cliente")
- **Descrição resumida**
- **Data e hora**
- **Usuário** (quem registrou)
- **Ação rápida:** expandir para ver detalhes

Tipos de evento suportados:
- Lead criado
- Cliente cadastrado
- Cotação realizada
- Proposta enviada (com status: aberta, clicada, etc)
- Follow-up agendado
- Retorno do cliente (simples ou marcado como negociação)
- Proposta aceita / ganho
- Cliente perdido (com motivo)

### 3. Sidebar Direita (Fixed)

**Tarefas Pendentes**
- Cards de tarefas relacionadas
- Status (vencido, hoje, próximo)
- Checkbox para marcar concluído
- Botão "+ Nova tarefa"

**Anexos e Documentos**
- Lista de documentos vinculados
- Upload rápido
- Download direto

**Notas Internas**
- Textarea para notas rápidas
- Histórico de notas anteriores
- Timestamp de cada nota

**Motivo de Perda** (se aplicável)
- Campo para registrar por que a oportunidade foi perdida
- (Apenas visível se estado = "perdido")

### 4. Área de Registro de Interação (topo da timeline)
- Campo "Registre uma interação..."
- Dropdown: "Chamada", "E-mail", "WhatsApp", "Presencial"
- Textarea para descrever
- Botão "Registrar"
- Opção de agendar follow-up

## Estilo
- Visual CRM premium
- Linha do tempo clara, elegante
- Ícones intuitivos
- Cards de evento bem espaçados
- Transições suaves

## UX
- Ação rápida para mover etapa (arraste ou click)
- Timeline atualiza em tempo real
- Clique em evento para expandir detalhes
- Filtros por tipo de evento (opcional)
- Scroll infinito para histórico completo

---

# 📋 PROMPT 11: PIPELINE COMERCIAL

## Objetivo
Gerenciar oportunidades por etapa do funil de vendas – Kanban board.

## Layout

### 1. Cabeçalho
- Métrica 1: "Total em aberto" (valor)
- Métrica 2: "Taxa de ganho" (percentual)
- Métrica 3: "Valor potencial" (montante em pipeline)
- Botón: "Nova oportunidade"
- Botón: "Importar oportunidades"
- Botón: "Exportar dados"

### 2. Filtros Superiores (Sticky)
- Filter por: corretor, ramo, origem, etapa, período
- Botón "Limpar filtros"
- Toggle: "Mostrar cards perdidos" (on/off)

### 3. Boards Kanban (Colunas)

**Coluna 1: Novo Lead**
- Cards de leads não qualificados
- Metadata: origem, data de entrada

**Coluna 2: Qualificação**
- Leads em análise
- Metadata: corretor, prioridade

**Coluna 3: Cotação**
- Oportunidades com cotação em andamento
- Metadata: seguradora, tempo em andamento

**Coluna 4: Proposta Enviada**
- Propostas aguardando resposta do cliente
- Metadata: data de envio, valor

**Coluna 5: Negociação**
- Oportunidades em negociação de preço/cobertura
- Metadata: última ação, dias em etapa

**Coluna 6: Ganho**
- Oportunidades ganhas/fechadas
- Metadata: data de fechamento, valor final

**Coluna 7: Perdido**
- Oportunidades perdidas
- Metadata: motivo, data de perda

### 4. Card de Oportunidade (em cada coluna)
- **Nome do cliente** (destaque)
- **Produto/ramo** (badge)
- **Valor estimado** (destacado)
- **Seguradora principal** (logo pequena)
- **Corretor** (avatar + inicial)
- **Próxima ação** (texto em gray)
- **Dias nesta etapa** (badge: verde se <7d, âmbar se 7-15d, vermelho se >15d)
- **Drag handle** (indicador visual que pode ser arrastado)

### 5. Ações em Card
- **Hover:** exibe botões de ação rápida
  - Abrir detalhes (click no card)
  - Criar tarefa (icon)
  - Registrar contato (icon)
  - Iniciar nova cotação (icon)
  - Mover para outra etapa (icon)
  - Deletar ou arquivar (icon)

### 6. Detalhes em Modal (ao clicar no card)
- Timeline resumida da oportunidade
- Dados do cliente
- Última interação
- Botões de ação principal

## Estilo
- Kanban premium
- Limpo e executivo
- Muito fluido visualmente
- Cards com shadow sutil
- Cores de coluna (bordas coloridas por etapa)

## UX
- **Drag-and-drop fluido:** arrastar card entre colunas para mover etapa
- Abrir quick details com clique
- Destaque visual de cards parados há muitos dias
- Filtros aplicam em tempo real
- Animações suaves

---

# 📅 PROMPT 12: AGENDA E TAREFAS

## Objetivo
Ajudar corretores a acompanhar retornos, follow-ups, vencimentos e tarefas operacionais.

## Estrutura

### 1. Calendário (Topo, 60% do espaço)
- **Visualização padrão:** mês
- **Mini calendarios:** semana ou dia (clicável)
- Eventos marcados visual nas datas:
  - Dots coloridos por tipo (tarefa, follow-up, vencimento)
  - Números de eventos na data

### 2. Agenda (Abaixo, 40% do espaço)

**Seção 1: Tarefas Atrasadas**
- Cards em vermelho/âmbar
- Listar tarefas vencidas
- Ação: marcar concluída, reagendar

**Seção 2: Tarefas de Hoje**
- Cards destacados
- Tarefas por prioridade (alta, média, baixa)
- Checkbox para concluir
- Link rápido para cliente/oportunidade

**Seção 3: Próximas Tarefas**
- Cards em sequência cronológica
- Próximos 7-14 dias
- Ação: reagendar, editar, concluir

**Seção 4: Renovações Próximas**
- Apólices vencendo em 7, 15, 30, 60 dias
- Tabela ou cards com cliente, apólice, data
- Ação: "Recotar", "Iniciar contato"

**Seção 5: Follow-ups Agendados**
- Lembrete de retornos agendados
- Cliente, assunto, data/hora
- Ação: "Fazer contato", "Reagendar"

**Seção 6: Lembretes de Documentos**
- Documentos vencidos ou pendentes
- Cliente, tipo, data
- Ação: "Solicitar", "Upload"

### 3. Filtros (Sidebar)
- Filtro por corretor
- Filtro por cliente
- Filtro por prioridade
- Filtro por tipo (tarefa, follow-up, vencimento)
- Toggle: "Mostrar concluídas"

### 4. Ações Principais
- Botão "+ Nova tarefa" (destaque primário)
- Botão "+ Nova lembrança"

### 5. Criar/Editar Tarefa (Modal)
- **Título**
- **Descrição**
- **Cliente** (search select)
- **Oportunidade** (search select, optional)
- **Prioridade** (radio: alta, média, baixa)
- **Data/hora** (date + time picker)
- **Tipo** (checkbox: tarefa, follow-up, vencimento)
- **Lembrete** (X minutos/horas antes)
- **Atribuído a** (select, default = usuário atual)
- Botão "Salvar tarefa"

## Estilo
- Produtividade premium
- Muito claro
- Elegante e funcional
- Cores por prioridade (red/amber/green)
- Bom contraste

## UX
- Marcar concluída com checkbox direto
- Reagendar com clique (date picker rápido)
- Clique em cliente/oportunidade abre drawer
- Calendar e list sincronizados
- Notificações (opcional) para tarefas próximas
- Auto-criar tarefa de follow-up ao enviar proposta (workflow)

---

# 🔄 PROMPT 13: RENOVAÇÕES

## Objetivo
Gerenciar clientes com apólices próximas do vencimento e acelerar a recotação.

## Layout

### 1. Cards de Resumo (Topo)
- **Vencimentos em 7 dias:** número de apólices
- **Vencimentos em 15 dias:** número de apólices
- **Vencimentos em 30 dias:** número de apólices
- **Vencimentos em 60 dias:** número de apólices
- **Sem ação registrada:** número de apólices em risco

### 2. Filtros
- Filtro por período (7, 15, 30, 60 dias; custom)
- Filtro por ramo
- Filtro por corretor
- Filtro por seguradora
- Filtro por status (não contatado, em negociação, renovado, perdido)
- Ordem por: urgência (default), valor, cliente, seguradora

### 3. Tabela de Renovações
Colunas:
- **Cliente** (nome, destaque)
- **Apólice** (número)
- **Ramo** (badge: auto, saúde, residencial, etc)
- **Vigência final** (destaque em vermelho se <7d)
- **Prêmio atual** (valor)
- **Corretor responsável** (avatar + nome)
- **Status renovação** (badge: não contatado, em negociação, renovado, perdido)
- **Dias para vencer** (badge vermelha, amarela ou verde)
- **Ações rápidas** (buttons: recotar, contato, proposta, marcar perdido)

### 4. Ações Principais

**Botão "Recotar"**
- Abre formulário de cotação pré-preenchido com dados da apólice anterior
- CTA: "Rodar multicálculo com dados anteriores"

**Botão "Iniciar contato"**
- Abre modal para registrar tentativa de contato
- Canais: chamada, WhatsApp, e-mail
- Auto-cria tarefa de follow-up

**Botão "Gerar proposta renovação"**
- Abre gerador de proposta com dados do cliente
- Permite selecionar a cotação

**Botão "Marcar risco de perda"**
- Sinaliza cliente em risco
- Campo para motivo
- Destaca cliente para ação de retenção

### 5. Visualização em Cards (alternativa à tabela)
- Card por apólice
- Info resumida
- Ações em botões
- Melhor para mobile

## Estilo
- Tela executiva
- Foco em retenção e ação rápida
- Cores por urgência (red/amber/green)
- Muito legível

## UX
- Tabela muito rápida de ler
- Clique em cliente abre drawer
- Ações rápidas sem sair da tela
- Ordenação inteligente por urgência (default)
- Priorização visual de vencimentos mais próximos
- Workflow automático: ao recotar, cria nova cotação e lembra de proposta

---

# 📄 PROMPT 14: DOCUMENTOS

## Objetivo
Centralizar documentos relacionados a clientes, apólices, propostas e processos.

## Layout

### 1. Categorias (Sidebar ou Tabs)
- **Propostas** (enviadas e em andamento)
- **Apólices** (ativas e histórico)
- **Endossos**
- **Sinistros/Avisos**
- **Comissões** (documentos de repasse)
- **Anexos gerais**
- **Recibos e comprovantes**

### 2. Filtros Superiores
- Busca global (nome, número, cliente)
- Filtro por cliente (search select)
- Filtro por seguradora
- Filtro por período (data)
- Filtro por status (pendente, processado, rejeitado)

### 3. Tabela de Documentos
Colunas:
- **Tipo** (badge: proposta, apólice, endosso, etc)
- **Nome/Número** (destaque)
- **Cliente** (link)
- **Seguradora** (logo pequeña)
- **Data** (quando foi criado/recebido)
- **Status** (badge: pendente, processado, erro)
- **Vínculo** (oportunidade ou cliente)
- **Ações** (buttons: preview, download, compartilhar, deletar)

### 4. Upload de Documentos
**Drag-and-drop area:**
- "Arraste arquivos aqui ou clique para selecionar"
- Aceita: PDF, PNG, JPG, XLSX, DOC
- Pré-visualização instantânea
- Associação automática com cliente (se em contexto de cliente)
- Categorização automática por tipo

### 5. Preview
- Modal ou drawer com visualização do documento
- PDFs renderizados in-browser
- Imagens em lightbox
- Metadados do documento

### 6. Compartilhamento
- Botão "Compartilhar"
- Opção: e-mail, link compartilhável, WhatsApp
- Configuração de permissões (visualização, download)
- Histórico de compartilhamentos

## Estilo
- Biblioteca documental premium
- Limpa e segura
- Excelente organização visual

## UX
- Drag-and-drop muito fluido
- Busca inteligente (busca em nome, número, cliente)
- Visualização rápida sem abrir novo tab
- Histórico de atualizações (quem fez upload, quando)
- Sincronização com timeline da oportunidade (proposta aparece no histórico do cliente)
- Notificação automática quando documento é adicionado

---

# ⚙️ PROMPT 15: CONFIGURAÇÕES

## Objetivo
Permitir personalização da corretora, usuários, permissões, seguradoras e integrações.

## Layout (Abas Laterais)

### Aba 1: Perfil da Corretora
- **Nome da corretora** (texto)
- **Logo** (upload, preview)
- **Cores primária e secundária** (color picker)
- **Telefone principal** (telefone)
- **E-mail principal** (email)
- **Site** (URL)
- **Endereço** (endereco completo)
- **Descrição** (textarea)
- Botão "Salvar alterações"

### Aba 2: Identidade Visual
- **Logo** (upload/crop)
- **Favicon** (upload)
- **Paleta de cores** (color board)
- **Tipografia** (select de fontes)
- **Modo claro/escuro** (toggle ou preview)
- Preview em tempo real

### Aba 3: Usuários e Permissões
- **Tabela de usuários** com nome, e-mail, role, status
- Botão "+ Novo usuário"
- Ações: editar, desativar, resetar senha, deletar

**Modal Novo Usuário:**
- Nome completo
- E-mail
- Role (dropdown: admin, gestor, corretor, operacional, leitor)
- Departamento (select)
- Status (ativo/inativo)
- Permissões customizadas (checkboxes)

**Roles padrão:**
- **Admin:** acesso total
- **Gestor:** dashboard, leads, clientes, cotações, renovações, financeiro, relatórios
- **Corretor:** seus dados, seus leads, seus clientes, suas cotações
- **Operacional:** processamento, documentos, suporte
- **Leitor:** apenas visualização

### Aba 4: Seguradoras
- **Tabela de seguradoras** com nome, logo, status, ramos disponíveis
- Toggle ativar/desativar por seguradora
- Botão "Editar" para configurações específicas

**Modal Editar Seguradora:**
- **Nome** e **logo**
- **Status** (ativo/inativo)
- **Ramos disponíveis** (checkboxes: auto, saúde, residencial, empresarial, etc)
- **Credenciais** (username, password, token – mascarado)
- **Comissão padrão** (percentual)
- **Tempo médio de retorno** (horas)
- **Template de integração** (select)
- **Observações operacionais** (textarea)
- Botão "Testar conexão"
- Botão "Salvar"

### Aba 5: Integrações
- Cards de integrações disponíveis
- Status (conectado/desconectado)
- Botões: conectar, desconectar, configurar
- Integrações suportadas: Zapier, Google Sheets, email automático, SMS, etc

**Modal de Integração:**
- Instruções de setup
- Campos de autenticação (API tokens, etc)
- Webhook URL para receber dados
- Log de sincronizações

### Aba 6: Notificações
- **E-mail:** toggles para tipos de notificação
- **In-app:** toggles para tipos de notificação
- **SMS/WhatsApp:** conectar provider, configurar números
- **Webhook:** setup para eventos customizados
- Teste de notificação

### Aba 7: Templates de Proposta
- Cards de templates disponíveis
- Preview de cada template
- Botão "Duplicar" para criar custom
- Editor visual de template (drag-and-drop)
- Campos dinâmicos: {{cliente}}, {{valor}}, {{seguradora}}, etc

### Aba 8: Campos Personalizados
- Tabela de campos adicionados pela corretora
- Botão "+ Novo campo"
- Deleter campos
- Modal de criar campo: nome, tipo (texto, número, data, select), obrigatório, etc

### Aba 9: Regras de Comissão
- Tabela de regras por seguradora e ramo
- Percentual base
- Bonus por volume
- Botão "Editar", "Duplicar", "Deletar"

### Aba 10: Segurança e Acessos
- Two-factor authentication (toggle + setup)
- IP whitelist (textarea com IPs)
- Session timeout (select)
- Histórico de logins
- Atividades (log de ações críticas)

## Estilo
- Área administrativa premium
- Organizada por abas
- Clara e profissional
- Forms bem espaçados
- Good visual hierarchy

## UX
- Abas sempre visíveis no topo
- Save automático de formulários
- Feedback claro ao alterar (notificação "Salvo com sucesso")
- Confirmação ao deletar dados sensíveis
- Preview em tempo real para identidade visual
- Teste de conexão para integraçoes

---

# 🏢 PROMPT 16: DETALHES DA SEGURADORA (Admin)

## Objetivo
Exibir e configurar o relacionamento operacional com cada seguradora (painel administrativo).

## Layout

### 1. Header
- Logo e nome da seguradora (grande)
- Status (badge: ativa, inativa, em teste)
- Botão "Editar", "Desativar", "Excluir"

### 2. Cards de Resumo
- **Ramos disponíveis:** número + lista (badge)
- **Tempo médio de retorno:** horas
- **Comissão padrão:** percentual
- **Cotações este mês:** número
- **Taxa de conversão:** percentual
- **Última cotação:** quando foi

### 3. Abas

**Aba 1: Informações Gerais**
- Logo (upload)
- Nome
- CNPJ
- Site
- Contato principal (telefone, e-mail)
- Status (ativo/inativo)

**Aba 2: Ramos e Coberturas**
- Tabela de ramos com status (ativo/inativo)
- Ramos: auto, saúde, residencial, comercial, empresarial, vida, D&O, ciberseguro, etc
- Versão de integração por ramo
- Tempo médio de retorno por ramo

**Aba 3: Credenciais**
- Username (texto)
- Password (mascarado, botão "Mostrar")
- API token (mascarado)
- Endpoint (URL)
- Autenticação type (select: Basic Auth, Bearer, API Key)
- Botão "Testar conexão"
- Botão "Resetar credenciais"
- Log das últimas tentativas

**Aba 4: Comissão**
- **Comissão padrão:** percentual
- **Tabela de comissão por ramo:** ramo, percentual, bônus volume
- **Bônus por colocação:** valor fixo + percentual
- **Observações:** textarea

**Aba 5: Histórico de Cotações**
- Tabela com últimas cotações: cliente, ramo, valor, data, status
- Filtres: período, ramo, resultado
- Gráfico de volume de cotações (últimos 30 dias)
- Taxa de conversão

**Aba 6: Taxa de Conversão**
- Gráfico: cotações vs propostas aceitas vs propostas geradas
- Percentual de conversão
- Comparativo com outras seguradoras
- Trend (mês anterior vs mês atual)

**Aba 7: Observações Operacionais**
- Textarea com notas de operação: "Documentação rápida", "Atendimento excelente", "Restrições em SP", etc
- Editável

**Aba 8: Configurações Avançadas**
- Regras de comissão customizadas
- Campos adicionais (por ramo)
- Parâmetros de integração
- Tratamento de erros (retry automático, etc)

## Estilo
- Painel administrativo elegante
- Profissional e analítico
- Gráficos modernos
- Tabelas claras

## UX
- Acesso rápido às informações operacionais
- Teste de conexão com feedback claro (sucesso/erro)
- Histórico e performance visíveis
- Edição rápida de configurações

---

# 📱 PROMPT 17: MOBILE (Versão Responsiva)

## Objetivo
Permitir uso rápido por corretores em campo – agregar as funcionalidades essenciais de forma mobile-first.

## Layout (Navegação Inferior - Bottom Nav)

**5 Abas:**
1. **Dashboard** (home icon)
2. **Leads** (users icon)
3. **Nova Cotação** (+ icon, destaque primário)
4. **Agenda** (calendar icon)
5. **Perfil** (user icon)

### Mobile Dashboard
- Cards de KPIs empilhados
- Gráficos simplificados (uma métrica por gráfico)
- Tarefas de hoje em cards
- Follow-ups agendados
- Botão "Nova cotação" flutuante (FAB – Floating Action Button)

### Mobile Leads
- Lista de leads com scroll infinito
- Card por lead: nome, origem, status, ações rápidas
- Busca simples (nome/telefone)
- Filtro básico (status, origem)
- Ações: qualificar, converter, cotação com swipe

### Mobile Nova Cotação
- Formulário simplificado em etapas (máx. 5 etapas)
- Campos essenciais apenas
- Validation clara
- Botão "Rodar multicálculo" sempre visível

### Mobile Resultado Multicálculo
- Cartões de seguradora empilhados (não tabela)
- Swipe para escolher
- Preço em destaque grande
- Botão "Gerar proposta" flutuante

### Mobile Agenda/Tarefas
- Tarefas de hoje em cards grandes
- Checkbox grande para concluir
- Follow-ups com data destacada
- Ícone de notificação para tarefas vencidas

### Mobile Perfil
- Avatar grande
- Nome e role
- Status de conexão
- Logout
- Suporte

## Estilo
- Premium mas simplificado
- Muito toque-friendly
- Buttons/targets >44px
- Stack vertical predominante
- Scroll horizontal apenas para tabelas críticas

## UX
- Navegação por abas simples
- Botão "Nova cotação" sempre acessível (FAB)
- Ações de um toque (swipe, tap)
- Scroll suave
- Touch feedback (ripple effect)
- Acesso rápido a WhatsApp / chamada
- Propostas compartilháveis via WhatsApp/e-mail
- Sincronização em tempo real quando possível

---

## 📌 Dica de Consistência Visual

### Instruções para cada Prompt no Lovable

**Ao final de cada prompt, adicione:**

---

> **Mantenha o mesmo design system em todas as telas:**
> - Tipografia sofisticada e corporativa
> - Paleta: azul petróleo/teal primária, verde sucesso, âmbar alerta, vermelho erro apenas
> - Sidebar elegante + header superior com menu, busca, notificações, perfil
> - Cards discretos, tabelas modernas, badges elegantes
> - Light e dark mode consistentes
> - Componentes reutilizáveis (botões, inputs, forms)
> - Dados mockados realistas
> - CTA "Nova cotação" sempre visível
> - Design premium, corporativo, moderno, zero ERP antigo

---

## 🎯 Ordem de Implementação Recomendada

1. **Login** (base de entrada)
2. **Dashboard** (visão geral)
3. **Leads** (captura)
4. **Clientes** (CRM)
5. **Cadastro de Cliente** (suporte ao CRM)
6. **Nova Cotação - Auto** (core do produto)
7. **Resultado do Multicálculo** (principal value)
8. **Comparativo Detalhado** (consultiva)
9. **Gerador de Proposta** (conversão)
10. **Timeline da Oportunidade** (histórico)
11. **Pipeline Comercial** (gestão)
12. **Agenda e Tarefas** (operacional)
13. **Renovações** (recorrência)
14. **Documentos** (suporte)
15. **Configurações** (setup)
16. **Detalhes da Seguradora** (admin)
17. **Mobile** (multiplataforma)

---

## 📝 Próximos Passos

Você pode:

✅ **Copiar cada prompt individual** e colar direto no Lovable  
✅ **Colar os prompts em sequência** para gerar o app completo  
✅ **Adicionar a instrução de consistência visual** ao final de cada prompt  
✅ **Customizar textos** conforme a identidade da sua corretora  
✅ **Expandir campos** conforme necessário para seu negócio

Quer que eu prepare:
- Versão com **textos reais em português** mais detalhados?
- Versão em **PRD/tabela estruturada**?
- Versão **compactada (prompts curtos totais)**?
