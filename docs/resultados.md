---
hide:
  - navigation
  - toc
---

<div class="page-header-banner">
  <div class="page-header-container">
    <div class="page-header-left">
      <span class="page-header-kicker">PET-Saúde: Informação e Saúde Digital • GT 8</span>
      <h1 class="page-header-title">Resultados e Entregas</h1>
      <p class="page-header-subtitle">
        Catálogo direto de formulários de encaminhamento e protótipos digitais por especialidade e objetivo.
      </p>
    </div>
    <div class="page-header-minicard">
      <div class="page-header-minicard-logo">
        <img src="../assets/img/logo_unb_hub.jpg" onerror="this.onerror=null; this.src='assets/img/logo_unb_hub.jpg';" alt="UnB HUB EBSERH">
      </div>
      <div class="page-header-minicard-text">
        <span class="minicard-sub">Hospital Parceiro</span>
        <span>HUB / UnB</span>
      </div>
    </div>
  </div>
</div>

<div class="page-main-container">

  <!-- Seletor de Etapas -->
  <div class="rc-etapas-nav">
    <button class="rc-etapa-tab active" onclick="resSelectEtapa(1, this)">01 · Etapa 1 (Ativa)</button>
    <button class="rc-etapa-tab" onclick="resSelectEtapa(2, this)">02 · Etapa 2</button>
    <button class="rc-etapa-tab" onclick="resSelectEtapa(3, this)">03 · Etapa 3</button>
  </div>

  <!-- CONTEÚDO ETAPA 1 (SEM RESUMO NUMÉRICO POLUÍDO) -->
  <div id="res-panel-etapa-1">

    <!-- Sub-abas por Objetivo (Resultados C) -->
    <div class="rc-obj-subtabs">
      <button class="rc-obj-tab-btn active" onclick="resSelectObj(1, this)">
        🎯 Objetivo 01 · Sistemas & Formulários
      </button>
      <button class="rc-obj-tab-btn" onclick="resSelectObj(2, this)">
        📚 Objetivo 02 · Revisão Rápida (RLS)
      </button>
      <button class="rc-obj-tab-btn" onclick="resSelectObj(3, this)">
        🩺 Objetivo 03 · Protocolo Clínico
      </button>
    </div>

    <!-- TABELA DO OBJETIVO 01 NA ABA RESULTADOS (7 ESPECIALIDADES ALFABÉTICAS) -->
    <div id="res-pane-obj-1">
      <div class="res-table-card">
        <div class="res-table-header">
          <div class="res-table-title-wrap">
            <span class="res-table-badge">Objetivo Específico 01</span>
            <h3 class="res-table-title">Sistemas de Informação HUB e UBSs</h3>
            <p class="res-table-summary">Mapeamento de processos e construção de formulários didáticos digitais.</p>
          </div>
        </div>

        <table class="res-table">
          <thead>
            <tr>
              <th colspan="2" class="res-super-header">Resultado / Especialidade</th>
            </tr>
            <tr>
              <th style="width: 50%;">Formulário de Encaminhamento</th>
              <th style="width: 50%;">Protótipo Digital</th>
            </tr>
          </thead>
          <tbody>
            <!-- 1. Cardiologia -->
            <tr>
              <td><div class="res-spec-name">Cardiologia</div></td>
              <td><span class="status-cell-tag tag-elaboracao">🟡 Em elaboração</span></td>
            </tr>

            <!-- 2. Cirurgia geral -->
            <tr>
              <td><div class="res-spec-name">Cirurgia geral</div></td>
              <td><span class="status-cell-tag tag-elaboracao">🟡 Em elaboração</span></td>
            </tr>

            <!-- 3. Coloproctologia -->
            <tr>
              <td><div class="res-spec-name">Coloproctologia</div></td>
              <td><span class="status-cell-tag tag-elaboracao">🟡 Em elaboração</span></td>
            </tr>

            <!-- 4. Gastroenterologia -->
            <tr>
              <td><div class="res-spec-name">Gastroenterologia</div></td>
              <td><span class="status-cell-tag tag-elaboracao">🟡 Em elaboração</span></td>
            </tr>

            <!-- 5. Ginecologia (Linha única desduplicada) -->
            <tr>
              <td><div class="res-spec-name">Ginecologia</div></td>
              <td><span class="status-cell-tag tag-elaboracao">🟡 Em elaboração</span></td>
            </tr>

            <!-- 6. Nutrição adulto -->
            <tr>
              <td><div class="res-spec-name">Nutrição adulto</div></td>
              <td><span class="status-cell-tag tag-elaboracao">🟡 Em elaboração</span></td>
            </tr>

            <!-- 7. Pneumologia -->
            <tr>
              <td><div class="res-spec-name">Pneumologia</div></td>
              <td><span class="status-cell-tag tag-elaboracao">🟡 Em elaboração</span></td>
            </tr>
          </tbody>
        </table>

        <!-- Rodapé Discreto com Contador de Pendência -->
        <div class="res-table-footer">
          <span>Ordenação alfabética (A-Z).</span>
          <span>📌 1 especialidade a definir</span>
        </div>
      </div>

      <!-- Legenda Discreta Abaixo da Tabela -->
      <div class="table-legend-footer">
        <span class="legend-item"><span class="legend-dot dot-disponivel"></span> 🟢 Disponível</span>
        <span class="legend-item"><span class="legend-dot dot-elaboracao"></span> 🟡 Em elaboração</span>
        <span class="legend-item"><span class="legend-dot dot-definir"></span> ⚪ A definir</span>
      </div>
    </div>

    <!-- TABELA DO OBJETIVO 02 NA ABA RESULTADOS (RASCUNHO DO ARTIGO - SEM INTEGRANTES) -->
    <div id="res-pane-obj-2" style="display: none;">
      <div class="res-table-card">
        <div class="res-table-header">
          <div class="res-table-title-wrap">
            <span class="res-table-badge">Objetivo Específico 02</span>
            <h3 class="res-table-title">Revisão Rápida (RLS) sobre Fluxos no Brasil</h3>
            <p class="res-table-summary">Síntese de evidências científicas de referência e contrarreferência no Brasil.</p>
          </div>
        </div>

        <!-- Tabela com Cabeçalho Agrupado 'Rascunho do Artigo' e Subcolunas 'Artigo' e 'Registro das Pesquisas' (Zero Integrantes) -->
        <table class="res-table">
          <thead>
            <tr>
              <th colspan="2" class="res-super-header">Rascunho do Artigo</th>
            </tr>
            <tr>
              <th style="width: 50%;">Artigo</th>
              <th style="width: 50%;">Registro das Pesquisas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="status-cell-tag tag-elaboracao">🟡 Em elaboração</span></td>
              <td><span class="status-cell-tag tag-elaboracao">🟡 Em elaboração</span></td>
            </tr>
          </tbody>
        </table>

        <!-- Rodapé com Link para Esboço da RSL -->
        <div class="res-table-footer">
          <span>Entrega vinculada ao rascunho metodológico do artigo da RLS.</span>
          <div>
            <!-- TODO: URL oficial do Esboço da RSL -->
            <a href="#" onclick="alert('Link para o documento oficial de Esboço da RSL!'); return false;" class="note-link">
              📄 Acessar Esboço da RSL ↗
            </a>
          </div>
        </div>
      </div>

      <!-- Legenda Discreta Abaixo da Tabela -->
      <div class="table-legend-footer">
        <span class="legend-item"><span class="legend-dot dot-disponivel"></span> 🟢 Disponível</span>
        <span class="legend-item"><span class="legend-dot dot-elaboracao"></span> 🟡 Em elaboração</span>
        <span class="legend-item"><span class="legend-dot dot-definir"></span> ⚪ A definir</span>
      </div>
    </div>

    <!-- CONTEÚDO DO OBJETIVO 03 NA ABA RESULTADOS -->
    <div id="res-pane-obj-3" style="display: none;">
      <div class="res-table-card">
        <div class="res-table-header">
          <div class="res-table-title-wrap">
            <span class="res-table-badge">Objetivo Específico 03</span>
            <h3 class="res-table-title">Protocolo de Atendimento e Encaminhamento</h3>
            <p class="res-table-summary">Normatização dos critérios de acolhimento do Ambulatório de Saúde Integral.</p>
          </div>
        </div>

        <div style="padding: 2.2rem 1.5rem; text-align: center; color: #64748b; background: #fafafa;">
          <p style="font-size: 0.95rem; margin-bottom: 0.85rem;">
            🩺 <strong>Minuta de Protocolo Clínico Geral:</strong> Os critérios clínicos regulatórios gerais estão em fase de homologação técnica junto ao corpo clínico do HUB.
          </p>
          <span class="status-cell-tag tag-elaboracao" style="background: #eff6ff; color: #1e40af; border-color: #bfdbfe; font-size: 0.85rem; padding: 0.45rem 0.9rem;">
            Minuta v0.9 em análise pelo corpo clínico
          </span>
        </div>

        <div class="res-table-footer">
          <span>Critérios gerais de regulação assistencial.</span>
          <span>Especialidades ambulatoriais vinculadas ao Objetivo 01</span>
        </div>
      </div>

      <div class="table-legend-footer">
        <span class="legend-item"><span class="legend-dot dot-disponivel"></span> 🟢 Disponível</span>
        <span class="legend-item"><span class="legend-dot dot-elaboracao"></span> 🟡 Em elaboração</span>
        <span class="legend-item"><span class="legend-dot dot-definir"></span> ⚪ A definir</span>
      </div>
    </div>

  </div>

  <!-- PAINEL ETAPA 2 (ESTADO EM BREVE) -->
  <div id="res-panel-etapa-2" style="display: none;">
    <div class="empty-simple-card">
      <span style="font-size: 2.5rem; display: block; margin-bottom: 0.5rem;">⏳</span>
      <h3 class="empty-simple-title">Etapa 2: Integração & Fluxos</h3>
      <p>Em breve.</p>
    </div>
  </div>

  <!-- PAINEL ETAPA 3 (ESTADO EM BREVE) -->
  <div id="res-panel-etapa-3" style="display: none;">
    <div class="empty-simple-card">
      <span style="font-size: 2.5rem; display: block; margin-bottom: 0.5rem;">🎯</span>
      <h3 class="empty-simple-title">Etapa 3: Consolidação & Homologação</h3>
      <p>Em breve.</p>
    </div>
  </div>

</div>
