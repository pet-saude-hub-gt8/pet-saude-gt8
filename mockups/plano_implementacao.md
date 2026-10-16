# 📋 Plano de Implementação Técnica (MkDocs) • PET-Saúde GT 8

Este documento estabelece o checklist operacional, os padrões visuais e a arquitetura técnica para aplicar as decisões consolidadas no repositório `pet-saude-gt8`, garantindo conformidade estrita com o padrão **Docs-as-Code**, acessibilidade e manutenibilidade.

---

## 1. Alterações no `mkdocs.yml` (Arquitetura da Informação)

A navegação global (`nav`) será atualizada para consolidar as abas antigas em duas novas seções focadas:

```yaml
nav:
  - Início: index.md
  - Objetivos: objetivos.md
  - Equipe: equipe.md
  - Contribuição: contribuicao.md
  - Resultados: resultados.md
```

- **O que muda**:
  - Remoção de `Encaminhamentos: encaminhamentos.md`.
  - Remoção de `Protótipo: prototipo.md`.
  - Inclusão de `Contribuição: contribuicao.md` e `Resultados: resultados.md`.

---

## 2. Gerenciamento de Arquivos em `docs/`

### 2.1. Arquivos a Criar

1. **`docs/contribuicao.md`**:
   - Cabeçalho padronizado (`page-header-banner`) com minicard do HUB.
   - Stepper horizontal de etapas (`01 Etapa 1` → `02 Etapa 2` → `03 Etapa 3`).
   - **Sumário lateral à direita (Table of Contents)**: no estilo "Nesta página" do MkDocs Material, com posicionamento `sticky`, rolagem suave e destaque automático do item visível. Oculto nas Etapas 2 e 3.
   - **Painel da Etapa 1**:
     - **Objetivo Específico 01**: Título, descrição oficial, resultados esperados em *bullet points* simples (`<ul>`), Tabela A (especialidades com *rowspan* para Cargo e Integrante, cabeçalho agrupado *Resultado / Especialidade*), legenda discreta em linha única no rodapé (~0.75rem) e bloco de notas consolidado com link do Google Docs.
     - **Objetivo Específico 02 (Opção Híbrida da RLS)**: Título, descrição oficial, resultados esperados em *bullet points* simples, Tabela da RLS (Cargo com *rowspan*, Paula Lira indicada como "Revisora", cabeçalho agrupado *Rascunho do Artigo* com subcolunas *Artigo* e *Registro das Pesquisas*), legenda discreta no rodapé e bloco de notas com requisitos de pesquisa, diretriz de armazenamento e link para o *Esboço da RSL* (`<!-- TODO: URL oficial do Esboço da RSL -->`).
     - **Objetivo Específico 03**: Título, descrição oficial, resultados esperados em *bullet points* simples, tabela de preceptores e monitores (com status "⚪ A definir") e legenda discreta.
   - **Painéis das Etapas 2 e 3**: estado limpo de *"Em breve"* sem poluição visual.

2. **`docs/resultados.md`**:
   - Cabeçalho padronizado (`page-header-banner`).
   - Seletor de Etapas (`01 Etapa 1`, `02 Etapa 2`, `03 Etapa 3`).
   - **Sem resumo numérico poluído** no topo.
   - **Sem integrantes**: foco restrito nos produtos e entregáveis técnicos, sem listagem de nomes ou cargos.
   - **Sub-abas por Objetivo (Resultados C)**:
     - **Objetivo 01**: Tabela com cabeçalho agrupado *Resultado / Especialidade* (`Formulário de Encaminhamento` e `Protótipo Digital`), 7 especialidades médicas reais desduplicadas (Ginecologia em linha única) em ordem alfabética (A-Z), rodapé discreto com *"📌 1 especialidade a definir"* e legenda pequena abaixo.
     - **Objetivo 02**: Tabela com cabeçalho agrupado *Rascunho do Artigo* e subcolunas *Artigo* e *Registro das Pesquisas* (ambos com status 🟡 Em elaboração, sem membros/integrantes) e link para o *Esboço da RSL* no rodapé.
     - **Objetivo 03**: Painel informativo enxuto sobre a Minuta v0.9 do protocolo clínico e critérios gerais de regulação assistencial.
   - Painéis das Etapas 2 e 3 em estado *"Em breve"*.

### 2.2. Arquivos a Remover ou Redirecionar

1. **`docs/encaminhamentos.md`**:
   - *Ação recomendada*: Remoção do arquivo ou substituição por página transitória de redirecionamento automático para `contribuicao/`.
2. **`docs/prototipo.md`**:
   - *Ação recomendada*: Remoção do arquivo Markdown.
3. **`docs/assets/prototipo_app.html`**:
   - **Manter intacto em `docs/assets/`**. Servirá como destino dos links dos protótipos conforme forem disponibilizados pelas equipes.

---

## 3. Mudanças no CSS e JavaScript

### 3.1. Em `docs/stylesheets/extra.css`
- **Código a remover / limpar**:
  - Classes da antiga árvore lateral do Explorer: `.encaminhamentos-layout`, `.folder-sidebar`, `.tree-view-wrapper`, `.tree-folder`, `.tree-file`.
  - Estilos de painéis legados: `.active-folder-banner`, `.folder-content-panel`.
- **Código novo a adicionar**:
  - Grid de layout de contribuição com sumário lateral (`.contrib-layout-grid`, `.toc-sidebar`, `.toc-link.is-active`).
  - Stepper Horizontal (`.stepper-nav`, `.step-card`, `.step-card.active`).
  - Tabelas limpas com cabeçalhos agrupados (`.clean-table`, `.header-group`, `.member-cell`).
  - Sub-abas da aba Resultados (`.rc-etapas-nav`, `.rc-obj-subtabs`, `.rc-obj-tab-btn`).
  - Legenda minimalista de rodapé (`.table-legend-footer`, `.legend-dot`).
  - Bloco de notas consolidado (`.table-note-box`, `.note-link`).

### 3.2. Em `docs/javascripts/extra.js`
- **Código a remover**:
  - Função legada `switchFolderPanel(folderId)` e listeners da árvore de pastas.
- **Funções novas a adicionar**:
  - `contribSelectStep(stepNum)`: alternância das Etapas 1, 2 e 3 na aba Contribuição (e controle de visibilidade do TOC).
  - `resSelectEtapa(stepNum)`: alternância das Etapas 1, 2 e 3 na aba Resultados.
  - `resSelectObj(objNum)`: alternância das sub-abas de Objetivo na aba Resultados.
  - `smoothScrollTo(targetId)`: rolagem suave para as âncoras dos objetivos com compensação de cabeçalho fixo.
  - `IntersectionObserver`: detecção da seção visível para destaque em tempo real no sumário lateral da Etapa 1.

---

## 4. Guia de Manutenibilidade Futura (Docs-as-Code)

1. **Quando um Formulário/Protótipo for Disponibilizado**:
   - Em `docs/contribuicao.md`: alterar a tag da especialidade de `🟡 Em elaboração` para `<a href="../assets/prototipo_app.html" class="status-cell-tag tag-disponivel">🟢 Disponível ↗</a>`.
   - Em `docs/resultados.md`: aplicar o mesmo link na linha correspondente da especialidade.
2. **Quando a Preceptora Fernanda Definir sua Especialidade**:
   - Em `docs/contribuicao.md`: substituir *"⚪ A definir"* pela especialidade clínica atribuída.
   - Em `docs/resultados.md`: adicionar a nova linha em ordem alfabética na tabela do Objetivo 01 e remover a nota de pendência do rodapé.
3. **Quando a URL do Esboço da RSL for Informada**:
   - Substituir `href="#"` pela URL oficial nos blocos de notas do Objetivo 02 em `docs/contribuicao.md` e no rodapé da tabela em `docs/resultados.md`.
4. **Transição para a Etapa 2**:
   - Substituir os blocos de *"Em breve"* das Etapas 2 pela estrutura de objetivos e tabelas conforme as metas forem definidas pelo GT.

---

## 5. Riscos e Pontos Pendentes

| Ponto Pendente | Impacto | Ação de Mitigação |
| :--- | :--- | :--- |
| **URL Oficial do Esboço da RSL** | Link provisório com `href="#"` marcado com `<!-- TODO: URL oficial do Esboço da RSL -->`. | Aguardar a disponibilização do link do Google Docs/Drive da equipe para inserção definitiva. |
| **Especialidade da Preceptora Fernanda** | Indefinição temporária no Objetivo 01. | Mantida como *"⚪ A definir"* na Contribuição e contabilizada no rodapé de Resultados (*"📌 1 especialidade a definir"*). |
| **Redirecionamento de URLs Legadas** | Usuários com URLs salvas em favoritos de `/encaminhamentos/` e `/prototipo/`. | Implementar redirecionamento automático para `/contribuicao/`. |
