---
hide:
  - navigation
  - toc
---

<div class="page-header-banner">
  <div class="page-header-container">
    <div class="page-header-left">
      <span class="page-header-kicker">PET-Saúde: Informação e Saúde Digital • GT 8</span>
      <h1 class="page-header-title">Protótipo Digital de Triagem</h1>
      <p class="page-header-subtitle">
        Formulário didático e estruturado de encaminhamento para o Ambulatório de Pneumologia do HUB | UnB.
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

  <!-- Card de Contexto Clínico Obrigatório -->
  <div class="clinical-alert-card">
    <span class="clinical-alert-kicker">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: -2px; margin-right: 4px;"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
      Contexto Clínico & Diagnóstico do Ambulatório
    </span>
    <h3 class="clinical-alert-title">Superando a Fragilidade do "Papel de Parecer" e o Gargalo das Devoluções</h3>
    <p class="clinical-alert-desc">
      Este protótipo foi concebido para <strong>eliminar o preenchimento livre e despadronizado em "papel de parecer"</strong> — principal causa que leva atualmente <strong>cerca de 80% das solicitações a serem devolvidas como P3</strong> pelo Responsável Técnico da regulação interna. Por meio de critérios objetivos pré-formatados, o sistema apoia a tomada de decisão médica no momento da solicitação e qualifica a fila da atenção terciária no SUS.
    </p>
  </div>

  <!-- Botões Rápidos para Demonstração Interativa -->
  <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1rem 1.25rem; margin-bottom: 2rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem;">
    <div>
      <strong style="color: #0c3258; font-size: 0.92rem;">Simulação Rápida para Demonstração:</strong>
      <span style="font-size: 0.85rem; color: #64748b; margin-left: 0.5rem;">Clique para carregar cenários clínicos didáticos</span>
    </div>
    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
      <button type="button" class="btn-proto-secondary" style="background: #fee2e2; border-color: #fca5a5; color: #991b1b; font-weight: 700;" onclick="preencherExemplo('p1')">
        Exemplo P1 (Urgente)
      </button>
      <button type="button" class="btn-proto-secondary" style="background: #fef3c7; border-color: #fde68a; color: #92400e; font-weight: 700;" onclick="preencherExemplo('p2')">
        Exemplo P2 (Prioritário)
      </button>
      <button type="button" class="btn-proto-secondary" style="background: #e0f2fe; border-color: #bae6fd; color: #075985; font-weight: 700;" onclick="preencherExemplo('p3')">
        Exemplo P3 (Devolução UBS)
      </button>
      <button type="button" class="btn-proto-secondary" onclick="resetarFormulario()">
        Limpar
      </button>
    </div>
  </div>

  <!-- Formulário de Triagem Interativo -->
  <div class="proto-form-wrapper">
    <form id="proto-form" onsubmit="event.preventDefault(); avaliarRegulacaoClinica();">

      <!-- Bloco 1: Identificação -->
      <fieldset class="proto-fieldset">
        <legend class="proto-legend">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          1. Identificação do Paciente e do Solicitante
        </legend>
        <div class="proto-grid-2">
          <div class="proto-field">
            <label class="proto-label" for="proto-nome">Nome Completo do Paciente *</label>
            <input type="text" id="proto-nome" class="proto-input" placeholder="Ex.: Maria Aparecida da Silva" required>
          </div>
          <div class="proto-field">
            <label class="proto-label" for="proto-sus">Cartão SUS / Nº Prontuário HUB *</label>
            <input type="text" id="proto-sus" class="proto-input" placeholder="Ex.: 898.0012.3456.7890" required>
          </div>
        </div>

        <div class="proto-grid-2" style="margin-top: 1rem;">
          <div class="proto-field">
            <label class="proto-label" for="proto-ubs">Unidade Básica de Origem (UBS) *</label>
            <select id="proto-ubs" class="proto-select" required>
              <option value="UBS 1 Asa Sul">UBS 1 Asa Sul (Região Central)</option>
              <option value="UBS 17 Ceilândia">UBS 17 Ceilândia (Região Oeste)</option>
              <option value="UBS 1 Itapoã">UBS 1 Itapoã (Região Leste)</option>
              <option value="UBS 1 Santa Maria">UBS 1 Santa Maria (Região Sul)</option>
              <option value="Ambulatório de Saúde Integral HUB">Ambulatório de Saúde Integral HUB (Inter-ambulatório)</option>
              <option value="Outra Unidade do DF">Outra UBS do Distrito Federal</option>
            </select>
          </div>
          <div class="proto-field">
            <label class="proto-label" for="proto-crm">Médico Solicitante / CRM *</label>
            <input type="text" id="proto-crm" class="proto-input" placeholder="Ex.: Dr. Roberto Guimarães - CRM-DF 21450" required>
          </div>
        </div>
      </fieldset>

      <!-- Bloco 2: Dados Clínicos Gerais -->
      <fieldset class="proto-fieldset">
        <legend class="proto-legend">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><activity width="20" height="20"></activity><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
          2. Dados Clínicos Gerais
        </legend>

        <div class="proto-field" style="margin-bottom: 1rem;">
          <label class="proto-label" for="proto-queixa">Queixa Principal e Histórico Clínico Resumido *</label>
          <textarea id="proto-queixa" class="proto-textarea" rows="3" placeholder="Descreva os sintomas primários, evolução temporal e tratamentos já instituídos na Atenção Básica..." required></textarea>
        </div>

        <div class="proto-grid-4">
          <div class="proto-field">
            <label class="proto-label" for="proto-tempo">Tempo de Evolução (semanas) *</label>
            <input type="number" id="proto-tempo" class="proto-input" min="1" max="520" value="8" required>
          </div>

          <div class="proto-field">
            <label class="proto-label" for="proto-tabaco">Tabagismo (anos/maço)</label>
            <input type="number" id="proto-tabaco" class="proto-input" min="0" max="200" value="0" placeholder="0 se não fumante">
          </div>

          <div class="proto-field">
            <label class="proto-label" for="proto-spo2">Oximetria SpO2 em Ar Ambiente (%) *</label>
            <input type="number" id="proto-spo2" class="proto-input" min="50" max="100" value="96" required>
          </div>

          <div class="proto-field" style="justify-content: flex-end;">
            <label class="proto-checkbox-card" style="margin: 0; height: 42px;">
              <input type="checkbox" id="proto-o2">
              <span class="proto-checkbox-label">Uso de O2 Domiciliar</span>
            </label>
          </div>
        </div>
      </fieldset>

      <!-- Bloco 3: Exames Realizados -->
      <fieldset class="proto-fieldset">
        <legend class="proto-legend">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line></svg>
          3. Exames Complementares Realizados
        </legend>
        <div class="proto-grid-4">
          <label class="proto-checkbox-card">
            <input type="checkbox" id="proto-ex-rx">
            <span class="proto-checkbox-label">Radiografia (RX) de Tórax</span>
          </label>

          <label class="proto-checkbox-card">
            <input type="checkbox" id="proto-ex-tc">
            <span class="proto-checkbox-label">Tomografia (TC) de Tórax</span>
          </label>

          <label class="proto-checkbox-card">
            <input type="checkbox" id="proto-ex-espiro">
            <span class="proto-checkbox-label">Espirometria c/ BD</span>
          </label>

          <label class="proto-checkbox-card">
            <input type="checkbox" id="proto-ex-gaso">
            <span class="proto-checkbox-label">Gasometria Arterial</span>
          </label>
        </div>
      </fieldset>

      <!-- Bloco 4: Subespecialidade Alvo -->
      <fieldset class="proto-fieldset">
        <legend class="proto-legend">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
          4. Subespecialidade Alvo (Ambulatório de Pneumologia)
        </legend>

        <div class="proto-field" style="margin-bottom: 1.25rem;">
          <label class="proto-label" for="proto-subspec">Selecione o Ambulatório Especializado Específico *</label>
          <select id="proto-subspec" class="proto-select" style="font-weight: 600; font-size: 1rem;">
            <option value="pneumo-geral">Pneumologia Geral (Tosse crônica, hemoptise, perda ponderal)</option>
            <option value="asma">Asma Grave (Refratariedade GINA 4/5, histórico de intubação)</option>
            <option value="dpoc">DPOC Grave (≥2 exacerbações/ano, VEF1 < 30%, cor pulmonale)</option>
            <option value="sono">Distúrbios do Sono (Epworth, Mallampati, obesidade/circunferência)</option>
          </select>
        </div>

        <!-- Critérios específicos dinâmicos para Pneumologia Geral -->
        <div class="proto-criteria-group" data-subspec="pneumo-geral" style="background: #f0f7ff; border: 1px solid #bae6fd; border-radius: 10px; padding: 1.2rem; margin-top: 0.5rem;">
          <strong style="color: #0c3258; display: block; margin-bottom: 0.6rem; font-size: 0.92rem;">
            Critérios Específicos para Pneumologia Geral:
          </strong>
          <div style="display: flex; flex-direction: column; gap: 0.6rem;">
            <label class="proto-checkbox-card" style="background: #ffffff;">
              <input type="checkbox" id="crit-p-tosse">
              <span class="proto-checkbox-label"><strong>Tosse crônica persistente > 8 semanas</strong> (investigação e refratariedade inicial na Atenção Básica)</span>
            </label>
            <label class="proto-checkbox-card" style="background: #ffffff;">
              <input type="checkbox" id="crit-p-hemoptise">
              <span class="proto-checkbox-label"><strong>Hemoptise</strong> (escarro hemóico ou exteriorização de sangue com origem nas vias aéreas) — <em>Critério Urgente</em></span>
            </label>
            <label class="proto-checkbox-card" style="background: #ffffff;">
              <input type="checkbox" id="crit-p-peso">
              <span class="proto-checkbox-label"><strong>Perda ponderal inexplicada</strong> associada a sintomas respiratórios (suspeita neoplásica ou micobacteriose)</span>
            </label>
          </div>
        </div>

        <!-- Critérios específicos dinâmicos para Asma Grave -->
        <div class="proto-criteria-group" data-subspec="asma" style="background: #f0f7ff; border: 1px solid #bae6fd; border-radius: 10px; padding: 1.2rem; margin-top: 0.5rem; display: none;">
          <strong style="color: #0c3258; display: block; margin-bottom: 0.6rem; font-size: 0.92rem;">
            Critérios Específicos para Asma Grave:
          </strong>
          <div style="display: flex; flex-direction: column; gap: 0.6rem;">
            <label class="proto-checkbox-card" style="background: #ffffff;">
              <input type="checkbox" id="crit-a-estagio">
              <span class="proto-checkbox-label"><strong>Tratamento em Estágio 4 ou 5 (GINA) mantido por > 6 meses</strong> sem controle clínico adequado dos sintomas</span>
            </label>
            <label class="proto-checkbox-card" style="background: #ffffff;">
              <input type="checkbox" id="crit-a-intubacao">
              <span class="proto-checkbox-label"><strong>Histórico prévio de intubação orotraqueal</strong> ou internação em Unidade de Terapia Intensiva (UTI) por crise asmática — <em>Critério Urgente</em></span>
            </label>
          </div>
        </div>

        <!-- Critérios específicos dinâmicos para DPOC Grave -->
        <div class="proto-criteria-group" data-subspec="dpoc" style="background: #f0f7ff; border: 1px solid #bae6fd; border-radius: 10px; padding: 1.2rem; margin-top: 0.5rem; display: none;">
          <strong style="color: #0c3258; display: block; margin-bottom: 0.6rem; font-size: 0.92rem;">
            Critérios Específicos para DPOC Grave:
          </strong>
          <div style="display: flex; flex-direction: column; gap: 0.6rem;">
            <label class="proto-checkbox-card" style="background: #ffffff;">
              <input type="checkbox" id="crit-d-exacerbacao">
              <span class="proto-checkbox-label"><strong>Frequência de ≥ 2 exacerbações no último ano</strong> com necessidade de corticoide sistêmico e/ou antibioticoterapia</span>
            </label>
            <label class="proto-checkbox-card" style="background: #ffffff;">
              <input type="checkbox" id="crit-d-vef1">
              <span class="proto-checkbox-label"><strong>VEF1 < 30% do predito</strong> na espirometria pós-broncodilatador (GOLD Estágio 4)</span>
            </label>
            <label class="proto-checkbox-card" style="background: #ffffff;">
              <input type="checkbox" id="crit-d-cor">
              <span class="proto-checkbox-label"><strong>Evidência de Cor Pulmonale</strong> ou Hipertensão Arterial Pulmonar documentada — <em>Critério de Alta Gravidade</em></span>
            </label>
          </div>
        </div>

        <!-- Critérios específicos dinâmicos para Distúrbios do Sono -->
        <div class="proto-criteria-group" data-subspec="sono" style="background: #f0f7ff; border: 1px solid #bae6fd; border-radius: 10px; padding: 1.2rem; margin-top: 0.5rem; display: none;">
          <strong style="color: #0c3258; display: block; margin-bottom: 0.6rem; font-size: 0.92rem;">
            Critérios Específicos para Distúrbios do Sono:
          </strong>
          <div style="display: flex; flex-direction: column; gap: 0.6rem;">
            <label class="proto-checkbox-card" style="background: #ffffff;">
              <input type="checkbox" id="crit-s-epworth">
              <span class="proto-checkbox-label"><strong>Escala de Sonolência de Epworth > 10 pontos</strong> (sonolência diurna excessiva relevante)</span>
            </label>
            <label class="proto-checkbox-card" style="background: #ffffff;">
              <input type="checkbox" id="crit-s-mallampati">
              <span class="proto-checkbox-label"><strong>Avaliação de Mallampati Grau III ou IV</strong> (estreitamento evidente da via aérea superior)</span>
            </label>
            <label class="proto-checkbox-card" style="background: #ffffff;">
              <input type="checkbox" id="crit-s-obesidade">
              <span class="proto-checkbox-label"><strong>Obesidade (IMC > 35) e/ou circunferência cervical aumentada</strong> (> 43cm em homens / > 40cm em mulheres)</span>
            </label>
          </div>
        </div>
      </fieldset>

      <!-- Bloco 5: Classificação da Regulação -->
      <fieldset class="proto-fieldset">
        <legend class="proto-legend">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
          5. Classificação da Regulação (Nível de Prioridade Clínica)
        </legend>

        <p style="font-size: 0.9rem; color: #64748b; margin: 0 0 0.85rem 0;">
          A regulação interna do HUB avalia os critérios informados e emite a classificação técnica. Selecione uma opção ou clique no botão de avaliação automática abaixo:
        </p>

        <div class="proto-priority-container">
          <!-- P1 -->
          <div class="proto-priority-badge p1" data-priority="P1">
            <input type="radio" name="proto-priority" value="P1">
            <div class="badge-tag-head">
              <span class="badge-tag-code">P1</span>
              <span class="badge-tag-title">Urgente</span>
            </div>
            <p class="badge-tag-desc">
              Alto risco, hemoptise, instabilidade respiratória, histórico de intubação ou risco iminente de óbito.
            </p>
          </div>

          <!-- P2 -->
          <div class="proto-priority-badge p2" data-priority="P2">
            <input type="radio" name="proto-priority" value="P2">
            <div class="badge-tag-head">
              <span class="badge-tag-code">P2</span>
              <span class="badge-tag-title">Prioritário</span>
            </div>
            <p class="badge-tag-desc">
              Critérios de subespecialidade terciária confirmados; refratariedade comprovada na Atenção Primária.
            </p>
          </div>

          <!-- P3 -->
          <div class="proto-priority-badge p3 is-selected" data-priority="P3">
            <input type="radio" name="proto-priority" value="P3" checked>
            <div class="badge-tag-head">
              <span class="badge-tag-code">P3</span>
              <span class="badge-tag-title">Devolução para UBS</span>
            </div>
            <p class="badge-tag-desc">
              Casos sem critérios de atenção terciária ou passíveis de condução segura na UBS com apoio matricial.
            </p>
          </div>
        </div>
      </fieldset>

      <!-- Painel Dinâmico de Feedback da Regulação -->
      <div id="proto-result-box" class="proto-feedback-panel badge-p3">
        <span id="proto-result-badge" class="proto-feedback-badge">P3 — Devolução para UBS (APS)</span>
        <h4 id="proto-result-title" class="proto-feedback-title">Parecer Técnico da Regulação do HUB</h4>
        <p id="proto-result-desc" class="proto-feedback-desc">
          O caso informado foi analisado pelas regras clínicas do Ambulatório de Saúde Integral.
        </p>
      </div>

      <!-- Botões de Ação do Formulário -->
      <div class="proto-actions">
        <button type="button" class="btn-proto-primary" onclick="avaliarRegulacaoClinica()">
          Avaliar Critérios & Simular Decisão da Regulação
        </button>
        <button type="button" class="btn-proto-secondary" onclick="resetarFormulario()">
          Limpar Formulário
        </button>
      </div>
    </form>
  </div>

</div>
