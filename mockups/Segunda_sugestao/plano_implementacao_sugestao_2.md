# 📋 Plano de Implementação Técnica • Sugestão 2: Página Contínua (Timeline)
## PET-Saúde: Informação e Saúde Digital • GT 8 (HUB / UnB)

Este documento detalha o plano de engenharia de software e UI/UX para implementar a **Sugestão 2 (Página Contínua com Linha do Tempo Vertical)** na aba **Contribuição** (`docs/contribuicao.md`) do portal MkDocs Material.

---

## 1. Visão Geral da Mudança e Racional de UX

A versão atual da aba Contribuição divide as Etapas 1, 2 e 3 em painéis ocultos via JavaScript (`display: none`), deixando as Etapas 2 e 3 como "Em breve" e escondendo o sumário lateral nas outras etapas. Além disso, a legenda de status se repete no rodapé de cada tabela.

A **Sugestão 2 (Página Contínua)** resolve definitivamente essas limitações:
1. **Fluxo Unificado (Scroll Contínuo):** Todas as etapas e seus objetivos ficam na mesma página, conectados por um stepper vertical contínuo (`.timeline-continuous-spine`) com nós numerados (`1`, `2`, `3`).
2. **Fim do "Em Breve" Vazio:** As Etapas 2 e 3 são preenchidas com as metas reais do projeto extraídas de `docs/objetivos.md` (Governança SES-HUB, Conclusão da RLS com link para PDF, Mapeamento Inter-ambulatórios e Homologação nas 4 UBSs piloto).
3. **Legenda Global Única no Topo:** Fim da redundância visual de repetir a legenda sob cada tabela.
4. **TOC Lateral Sticky Hierárquico:** O sumário acompanha toda a rolagem da página, destacando em tempo real se o leitor está na Etapa 1 (e em qual objetivo), Etapa 2 ou Etapa 3 via `IntersectionObserver`.
5. **Ergonomia e Docs-as-Code:** Detalhes metodológicos longos da RLS são recolhidos em `<details class="clean-accordion">`, e os botões de ação fornecem acesso imediato aos PDFs e protótipo.

---

## 2. Mapa de Arquivos Afetados

```
pet-saude-gt8/
├── docs/
│   ├── contribuicao.md              <-- REESTRUTURAÇÃO COMPLETA DO CONTEÚDO
│   ├── stylesheets/
│   │   └── extra.css                <-- ADIÇÃO DOS ESTILOS DA TIMELINE, NÓS E GRIDS
│   └── javascripts/
│       └── extra.js                 <-- AJUSTE DO TOC OBSERVER E REMOÇÃO DE CONTRIBSELECTSTEP
└── mockups/
    └── Segunda_sugestao/
        ├── prototipos_contribuicao.html    <-- PROTÓTIPO DE REFERÊNCIA
        └── plano_implementacao_sugestao_2.md <-- ESTE DOCUMENTO
```

---

## 3. Passo a Passo da Implementação

### Passo 1: Atualização do CSS (`docs/stylesheets/extra.css`)

Adicionar ao final da seção de Contribuição os seletores validados no protótipo:

```css
/* ==========================================================================
   TIMELINE VERTICAL CONTÍNUA (SUGESTÃO 2)
   ========================================================================== */

/* Barra de Legenda Global Única */
.global-legend-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  background: var(--bg-card, #ffffff);
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 0.75rem 1.25rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 8px rgba(12, 50, 88, 0.04);
  gap: 1rem;
}

body[data-md-color-scheme="slate"] .global-legend-bar {
  background: #0f2747 !important;
  border-color: #1a3c6b !important;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25) !important;
}

.global-legend-title {
  font-size: 0.8rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #64748b;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

body[data-md-color-scheme="slate"] .global-legend-title {
  color: #94a3b8 !important;
}

.legend-chips-wrap {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.25rem;
}

.legend-item-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.82rem;
  font-weight: 600;
  color: #475569;
}

body[data-md-color-scheme="slate"] .legend-item-pill {
  color: #cbd5e1 !important;
}

.legend-dot-indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
}

.dot-disp { background: #10b981; box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.25); }
.dot-elab { background: #f59e0b; box-shadow: 0 0 0 2px rgba(245, 158, 11, 0.25); }
.dot-defi { background: #94a3b8; box-shadow: 0 0 0 2px rgba(148, 163, 184, 0.25); }

/* Espinha Dorsal Vertical da Timeline */
.timeline-continuous-spine {
  position: relative;
  padding-left: 2.75rem;
}

.timeline-continuous-spine::before {
  content: "";
  position: absolute;
  top: 20px;
  bottom: 20px;
  left: 17px;
  width: 3px;
  background: linear-gradient(180deg, #0284c7 0%, #ea5b2d 45%, #009a44 90%);
  border-radius: 3px;
}

.timeline-stage-block {
  position: relative;
  margin-bottom: 3.5rem;
}

.timeline-node-marker {
  position: absolute;
  left: -2.75rem;
  top: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #ffffff;
  border: 3px solid #0284c7;
  color: #0284c7;
  font-weight: 800;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 4px #f8fafc;
  z-index: 2;
}

body[data-md-color-scheme="slate"] .timeline-node-marker {
  background: #0f2747 !important;
  box-shadow: 0 0 0 4px #08162b !important;
}

.timeline-node-e2 { border-color: #ea5b2d !important; color: #ea5b2d !important; }
.timeline-node-e3 { border-color: #009a44 !important; color: #009a44 !important; }

.timeline-stage-header {
  margin-bottom: 1.5rem;
}

.timeline-stage-title-wrap {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 0.35rem;
}

.timeline-stage-title {
  font-size: 1.5rem !important;
  font-weight: 800 !important;
  color: #0c3258 !important;
  margin: 0 !important;
}

body[data-md-color-scheme="slate"] .timeline-stage-title {
  color: #ffffff !important;
}

.timeline-stage-subtitle {
  font-size: 0.92rem;
  color: #64748b;
  margin: 0;
}

body[data-md-color-scheme="slate"] .timeline-stage-subtitle {
  color: #94a3b8;
}

/* Grids das Etapas 2 e 3 */
.timeline-cards-grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.timeline-cards-grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}

.timeline-subcard {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
  transition: all 0.2s ease;
}

body[data-md-color-scheme="slate"] .timeline-subcard {
  background: #0f2747 !important;
  border-color: #1a3c6b !important;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2) !important;
}

.timeline-subcard:hover {
  transform: translateY(-3px);
  border-color: #38bdf8;
  box-shadow: 0 8px 24px rgba(2, 132, 199, 0.15);
}

.timeline-subcard-top { margin-bottom: 1rem; }
.timeline-subcard-badge {
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #64748b;
  display: block;
  margin-bottom: 0.45rem;
}

body[data-md-color-scheme="slate"] .timeline-subcard-badge { color: #94a3b8; }

.timeline-subcard-title {
  font-size: 1.05rem !important;
  font-weight: 700 !important;
  color: #0c3258 !important;
  line-height: 1.35 !important;
  margin: 0 0 0.45rem 0 !important;
}

body[data-md-color-scheme="slate"] .timeline-subcard-title { color: #ffffff !important; }

.timeline-subcard-desc {
  font-size: 0.86rem;
  color: #475569;
  line-height: 1.45;
  margin: 0;
}

body[data-md-color-scheme="slate"] .timeline-subcard-desc { color: #cbd5e1; }

/* Botões de Ação para Documentos */
.doc-actions-strip {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1.25rem;
}

.btn-action-doc {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  color: #0284c7;
  text-decoration: none !important;
  font-size: 0.82rem;
  font-weight: 600;
  padding: 0.38rem 0.85rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

body[data-md-color-scheme="slate"] .btn-action-doc {
  background: #112a4d !important;
  border-color: #1a3c6b !important;
  color: #38bdf8 !important;
}

.btn-action-doc:hover {
  background: #0284c7 !important;
  color: #ffffff !important;
  border-color: #0284c7 !important;
  transform: translateY(-1px);
}

.btn-action-doc.primary {
  background: #0284c7;
  color: #ffffff !important;
  border-color: #0284c7;
}

.btn-action-doc.primary:hover {
  background: #0369a1 !important;
  border-color: #0369a1 !important;
}

/* Accordions Enxutos para Metodologia */
.clean-accordion {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  margin-top: 1.25rem;
  overflow: hidden;
}

body[data-md-color-scheme="slate"] .clean-accordion {
  background: #112a4d !important;
  border-color: #1e3a5f !important;
}

.clean-accordion summary {
  padding: 0.75rem 1rem;
  font-size: 0.84rem;
  font-weight: 700;
  color: #0c3258;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

body[data-md-color-scheme="slate"] .clean-accordion summary { color: #ffffff; }

.clean-accordion summary::after {
  content: "▾";
  font-size: 0.9rem;
  color: #64748b;
  transition: transform 0.2s ease;
}

.clean-accordion[open] summary::after { transform: rotate(180deg); }

.clean-accordion-body {
  padding: 0.85rem 1rem 1rem 1rem;
  border-top: 1px solid #e2e8f0;
  font-size: 0.84rem;
  color: #475569;
  line-height: 1.5;
}

body[data-md-color-scheme="slate"] .clean-accordion-body {
  border-top-color: #1e3a5f;
  color: #cbd5e1;
}

@media (max-width: 1024px) {
  .timeline-cards-grid-3 { grid-template-columns: 1fr; }
  .timeline-cards-grid-2 { grid-template-columns: 1fr; }
}

@media (max-width: 768px) {
  .timeline-continuous-spine { padding-left: 2rem; }
  .timeline-node-marker { left: -2rem; width: 30px; height: 30px; font-size: 0.75rem; }
}
```

---

### Passo 2: Atualização do JavaScript (`docs/javascripts/extra.js`)

1. **Remover a função legada `contribSelectStep(stepNum)`**: não é mais necessária, pois a página agora é contínua e não oculta blocos.
2. **Atualizar `initTocObserver()`**: ampliar o observador para rastrear as seções da linha do tempo (`.timeline-stage-block` e `.objective-section`) e destacar o link correto no sumário à direita:

```javascript
/**
 * Inicializa o IntersectionObserver para o sumário lateral contínuo da aba Contribuição
 */
function initTocObserver() {
  const sections = document.querySelectorAll('.timeline-stage-block, .objective-section');
  const tocLinks = document.querySelectorAll('.toc-link');
  if (!sections.length || !tocLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: "-90px 0px -65% 0px",
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        tocLinks.forEach(link => {
          link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => observer.observe(sec));
}
```

---

### Passo 3: Reestruturação do Conteúdo (`docs/contribuicao.md`)

Substituir o stepper horizontal e os painéis de abas pela estrutura contínua:

1. **Banner de Cabeçalho**: Mantido intacto com o logo do HUB e metadados.
2. **Legenda Global Única**: Inserida no início de `.page-main-container`.
3. **Layout em Grid de 2 Colunas**: Coluna da Timeline + Coluna do Sumário Lateral.
4. **Espinha Dorsal (`.timeline-continuous-spine`)**:
   - `timeline-stage-block#etapa-1`:
     - Marcador `1`.
     - Objetivos 01, 02 e 03 com tabelas limpas, barra de links para PDFs/App e `<details>` para diretrizes.
   - `timeline-stage-block#etapa-2`:
     - Marcador `2` (`.timeline-node-e2`).
     - Título: *Etapa 2: Integração & Fluxos*.
     - Grid com 3 cards: GT SES/HUB/Regulação, Conclusão da RLS (com link do PDF) e Mapeamento Inter-ambulatórios & UBSs.
   - `timeline-stage-block#etapa-3`:
     - Marcador `3` (`.timeline-node-e3`).
     - Título: *Etapa 3: Consolidação & Homologação*.
     - Grid com 2 cards: Operacionalização Permanente do GT e Homologação na Rede APS (UBS 1 Asa Sul, UBS 17 Ceilândia, UBS 1 Itapoã e UBS 1 Santa Maria).
5. **Sumário Lateral Sticky Hierárquico**:
   ```html
   <aside class="toc-sidebar" id="contrib-toc-sidebar">
     <span class="toc-title">Nesta página</span>
     <nav class="toc-nav-list">
       <a href="#etapa-1" class="toc-link is-active" onclick="smoothScrollTo('etapa-1'); return false;"><strong>01 · Etapa 1: Diagnóstico</strong></a>
       <a href="#obj-01" class="toc-link" style="padding-left: 1.5rem;" onclick="smoothScrollTo('obj-01'); return false;">↳ Obj 01: Sistemas & Form.</a>
       <a href="#obj-02" class="toc-link" style="padding-left: 1.5rem;" onclick="smoothScrollTo('obj-02'); return false;">↳ Obj 02: Revisão RLS</a>
       <a href="#obj-03" class="toc-link" style="padding-left: 1.5rem;" onclick="smoothScrollTo('obj-03'); return false;">↳ Obj 03: Protocolo Atend.</a>
       <a href="#etapa-2" class="toc-link" onclick="smoothScrollTo('etapa-2'); return false;"><strong>02 · Etapa 2: Integração</strong></a>
       <a href="#etapa-3" class="toc-link" onclick="smoothScrollTo('etapa-3'); return false;"><strong>03 · Etapa 3: Homologação</strong></a>
     </nav>
   </aside>
   ```

---

## 4. Matriz de Rastreabilidade e Dados Reais

| Elemento da Sugestão 2 | Origem dos Dados | Destino em `docs/contribuicao.md` |
| :--- | :--- | :--- |
| **Pneumologia (Luanna Barros)** | `docs/assets/pdf/encaminhamento_pneumo.pdf` e `prototipo_app.html` | Objetivo 01 • Botão de ação direta e link na tabela |
| **RLS Esboço** | `docs/assets/pdf/revisao_sistematica_pet_saude.pdf` | Objetivo 02 e Card 2.2 da Etapa 2 |
| **Compilado Geral** | Google Docs da equipe | Objetivo 01 • Botão de ação rápida |
| **GT SES/HUB** | `docs/objetivos.md` (`#sec-especificos` Obj 02) | Card 2.1 da Etapa 2 |
| **Mapeamento Inter-ambulatórios** | `docs/objetivos.md` (`#sec-especificos` Obj 05) | Card 2.3 da Etapa 2 |
| **Operacionalização do GT** | `docs/objetivos.md` (`#sec-metas` Etapa 3) | Card 3.1 da Etapa 3 |
| **Homologação na APS** | `docs/objetivos.md` (`#sec-metas` Etapa 3 e `#sec-locais`) | Card 3.2 da Etapa 3 (com as 4 UBSs) |

---

## 5. Critérios de Aceite e Verificação

- [ ] **Acessibilidade & Scroll:** Rolagem contínua fluida sem travamentos; âncoras diretas na URL (ex.: `#etapa-2` ou `#obj-01`) abrem diretamente no trecho correto com compensação do cabeçalho fixo (`scroll-margin-top: 90px`).
- [ ] **Modo Escuro (Slate):** Todos os cards, nós da timeline, fundos das tabelas e bordas se adaptam com alto contraste sem elementos estourados.
- [ ] **Responsividade:** Em telas menores que 1024px, os grids das Etapas 2 e 3 colapsam para 1 coluna; o sumário lateral é ocultado graciosamente para priorizar a leitura.
- [ ] **Links de Assets:** Todos os PDFs locais abrem em nova aba (`target="_blank" rel="noopener noreferrer"`).
- [ ] **Integridade Docs-as-Code:** Nenhuma quebra de build no MkDocs (`mkdocs serve`).

