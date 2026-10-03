/**
 * PET-Saúde GT 8 | HUB - UnB
 * Scripts de Acessibilidade, Layout e Interatividade do Protótipo
 */

/**
 * Altera o tamanho da fonte global do documento.
 * @param {number} step - Quantidade em pixels a somar/subtrair (ex: +2 ou -2)
 */
function changeFontSize(step) {
  const root = document.documentElement;
  const currentVal = getComputedStyle(root).getPropertyValue('--md-text-font-size').trim();
  let currentSize = parseFloat(currentVal);

  if (isNaN(currentSize)) {
    currentSize = 16;
  }

  // Aplica limites mínimo (12px) e máximo (24px)
  const newSize = Math.min(24, Math.max(12, currentSize + Number(step)));
  root.style.setProperty('--md-text-font-size', `${newSize}px`);
}

/**
 * Restaura o tamanho da fonte para o valor padrão de 16px.
 */
function resetFontSize() {
  const root = document.documentElement;
  root.style.setProperty('--md-text-font-size', '16px');
}

/**
 * Alterna o modo de alto contraste adicionando/removendo o atributo data-contrast="high" no <body>.
 */
function toggleHighContrast() {
  const body = document.body;
  if (body.getAttribute('data-contrast') === 'high') {
    body.removeAttribute('data-contrast');
  } else {
    body.setAttribute('data-contrast', 'high');
  }
}

// Disponibiliza as funções de acessibilidade no escopo global
window.changeFontSize = changeFontSize;
window.resetFontSize = resetFontSize;
window.toggleHighContrast = toggleHighContrast;

/**
 * Detecta os tipos de banner na página e adiciona classes no <body> para layout 100% full-width
 */
function checkPageLayout() {
  if (document.querySelector('.hero-full')) {
    document.body.classList.add('page-home-hero');
  } else {
    document.body.classList.remove('page-home-hero');
  }

  if (document.querySelector('.page-header-banner')) {
    document.body.classList.add('page-internal-banner');
  } else {
    document.body.classList.remove('page-internal-banner');
  }

  // Inicializa interatividade do protótipo se estiver na página prototipo
  initPrototypeInteractions();
}

/**
 * Interatividade do Protótipo Clínico do Ambulatório de Pneumologia
 */
function initPrototypeInteractions() {
  const subspecSelect = document.getElementById('proto-subspec');
  if (!subspecSelect) return;

  // Atualiza exibição dos critérios específicos por subespecialidade
  function updateSubspecCriteria() {
    const val = subspecSelect.value;
    const allCriteria = document.querySelectorAll('.proto-criteria-group');
    allCriteria.forEach(el => {
      if (el.getAttribute('data-subspec') === val) {
        el.style.display = 'block';
      } else {
        el.style.display = 'none';
      }
    });
  }

  subspecSelect.removeEventListener('change', updateSubspecCriteria);
  subspecSelect.addEventListener('change', updateSubspecCriteria);
  updateSubspecCriteria();

  // Seleção de Badges de Regulação (P1, P2, P3)
  const priorityBadges = document.querySelectorAll('.proto-priority-badge');
  priorityBadges.forEach(badge => {
    badge.onclick = function() {
      priorityBadges.forEach(b => b.classList.remove('is-selected'));
      this.classList.add('is-selected');
      const radioInput = this.querySelector('input[type="radio"]');
      if (radioInput) radioInput.checked = true;
    };
  });
}

/**
 * Avalia as regras clínicas do formulário de triagem e sugere a regulação
 */
function avaliarRegulacaoClinica() {
  const resultBox = document.getElementById('proto-result-box');
  const resultTitle = document.getElementById('proto-result-title');
  const resultDesc = document.getElementById('proto-result-desc');
  const resultBadge = document.getElementById('proto-result-badge');
  
  if (!resultBox) return;

  const subspec = document.getElementById('proto-subspec')?.value || 'pneumo-geral';
  const spo2 = parseFloat(document.getElementById('proto-spo2')?.value || '98');
  const o2Dom = document.getElementById('proto-o2')?.checked || false;

  // Critérios marcados
  const cPneumo1 = document.getElementById('crit-p-tosse')?.checked;
  const cPneumo2 = document.getElementById('crit-p-hemoptise')?.checked;
  const cPneumo3 = document.getElementById('crit-p-peso')?.checked;

  const cAsma1 = document.getElementById('crit-a-estagio')?.checked;
  const cAsma2 = document.getElementById('crit-a-intubacao')?.checked;

  const cDpoc1 = document.getElementById('crit-d-exacerbacao')?.checked;
  const cDpoc2 = document.getElementById('crit-d-vef1')?.checked;
  const cDpoc3 = document.getElementById('crit-d-cor')?.checked;

  const cSono1 = document.getElementById('crit-s-epworth')?.checked;
  const cSono2 = document.getElementById('crit-s-mallampati')?.checked;
  const cSono3 = document.getElementById('crit-s-obesidade')?.checked;

  let nivel = 'P3';
  let badgeClass = 'badge-p3';
  let badgeText = 'P3 — Devolução Orientada para UBS (APS)';
  let titulo = 'Caso Elegível para Acompanhamento na Atenção Primária';
  let descricao = 'Os dados clínicos inseridos não preenchem critérios de gravidade ou refratariedade para vaga de atenção terciária no HUB. A recomendação é a manutenção do cuidado na UBS com contrarreferência assistida e otimização terapêutica conforme diretrizes da APS.';

  // Regras de P1 (Urgente / Risco Crítico)
  if (spo2 < 90 || cPneumo2 || cAsma2 || (cDpoc2 && cDpoc3) || (o2Dom && spo2 < 92)) {
    nivel = 'P1';
    badgeClass = 'badge-p1';
    badgeText = 'P1 — Urgente (Atenção Imediata HUB)';
    titulo = 'Indicação de Alta Gravidade / Risco Iminente';
    descricao = 'Identificados critérios de alarme respiratório (ex.: hemoptise ativa, hipoxemia severa SpO2 < 90%, histórico de intubação por crise asmática ou cor pulmonale descompensado). Necessário agendamento prioritário e avaliação especializada imediata no HUB.';
  } 
  // Regras de P2 (Prioritário / Complexidade Intermediária)
  else if (
    (subspec === 'pneumo-geral' && (cPneumo1 || cPneumo3)) ||
    (subspec === 'asma' && cAsma1) ||
    (subspec === 'dpoc' && (cDpoc1 || cDpoc2)) ||
    (subspec === 'sono' && (cSono1 || (cSono2 && cSono3)))
  ) {
    nivel = 'P2';
    badgeClass = 'badge-p2';
    badgeText = 'P2 — Prioritário (Ambulatório Especializado HUB)';
    titulo = 'Indicação Elegível para Atenção Terciária Especializada';
    descricao = 'O paciente cumpre os critérios técnicos definidos pelo protocolo do HUB (refratariedade terapêutica na APS ou critérios diagnósticos de subespecialidade). Encaminhamento validado com sucesso pela regulação interna.';
  }

  // Atualiza os badges visuais na interface
  const priorityBadges = document.querySelectorAll('.proto-priority-badge');
  priorityBadges.forEach(b => {
    b.classList.remove('is-selected');
    if (b.getAttribute('data-priority') === nivel) {
      b.classList.add('is-selected');
      const radio = b.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;
    }
  });

  // Atualiza o painel de feedback
  resultBox.style.display = 'block';
  resultBox.className = 'proto-feedback-panel ' + badgeClass;
  if (resultBadge) resultBadge.textContent = badgeText;
  if (resultTitle) resultTitle.textContent = titulo;
  if (resultDesc) resultDesc.textContent = descricao;

  // Scroll suave até o resultado
  resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/**
 * Preenche o formulário com dados pré-configurados de exemplo didático
 */
function preencherExemplo(tipo) {
  const nome = document.getElementById('proto-nome');
  const sus = document.getElementById('proto-sus');
  const ubs = document.getElementById('proto-ubs');
  const crm = document.getElementById('proto-crm');
  const queixa = document.getElementById('proto-queixa');
  const tempo = document.getElementById('proto-tempo');
  const tabaco = document.getElementById('proto-tabaco');
  const spo2 = document.getElementById('proto-spo2');
  const subspec = document.getElementById('proto-subspec');

  // Limpa checkboxes
  document.querySelectorAll('#proto-form input[type="checkbox"]').forEach(c => c.checked = false);

  if (tipo === 'p1') {
    if (nome) nome.value = 'Maria Aparecida da Silva';
    if (sus) sus.value = '898.0012.3456.7890';
    if (ubs) ubs.value = 'UBS 1 Asa Sul';
    if (crm) crm.value = 'CRM-DF 24512';
    if (queixa) queixa.value = 'Dispneia progressiva aos mínimos esforços, tosse persistente e episódio recente de hemoptise com expectoração com sangue vivo.';
    if (tempo) tempo.value = '12';
    if (tabaco) tabaco.value = '35';
    if (spo2) spo2.value = '88';
    if (subspec) subspec.value = 'pneumo-geral';

    const exTc = document.getElementById('proto-ex-tc');
    if (exTc) exTc.checked = true;
    const cHemoptise = document.getElementById('crit-p-hemoptise');
    if (cHemoptise) cHemoptise.checked = true;
    const cTosse = document.getElementById('crit-p-tosse');
    if (cTosse) cTosse.checked = true;
    const cPeso = document.getElementById('crit-p-peso');
    if (cPeso) cPeso.checked = true;

  } else if (tipo === 'p2') {
    if (nome) nome.value = 'Carlos Eduardo de Oliveira';
    if (sus) sus.value = '702.1154.9823.1102';
    if (ubs) ubs.value = 'UBS 1 Itapoã';
    if (crm) crm.value = 'CRM-DF 19844';
    if (queixa) queixa.value = 'Asma grave refratária em uso contínuo de corticoide inalatório em dose alta associado a LABA (Etapa 5 GINA) com frequentes despertares noturnos.';
    if (tempo) tempo.value = '24';
    if (tabaco) tabaco.value = '0';
    if (spo2) spo2.value = '94';
    if (subspec) subspec.value = 'asma';

    const exEsp = document.getElementById('proto-ex-espiro');
    if (exEsp) exEsp.checked = true;
    const cEstagio = document.getElementById('crit-a-estagio');
    if (cEstagio) cEstagio.checked = true;

  } else if (tipo === 'p3') {
    if (nome) nome.value = 'Sebastião Pereira Santos';
    if (sus) sus.value = '801.3321.4456.9012';
    if (ubs) ubs.value = 'UBS 17 Ceilândia';
    if (crm) crm.value = 'CRM-DF 31050';
    if (queixa) queixa.value = 'Tosse seca eventual há 2 semanas após resfriado comum. Solicitado parecer para especialista por ansiedade familiar.';
    if (tempo) tempo.value = '2';
    if (tabaco) tabaco.value = '5';
    if (spo2) spo2.value = '98';
    if (subspec) subspec.value = 'pneumo-geral';

    const exRx = document.getElementById('proto-ex-rx');
    if (exRx) exRx.checked = true;
  }

  initPrototypeInteractions();
  avaliarRegulacaoClinica();
}

/**
 * Reseta o formulário
 */
function resetarFormulario() {
  const form = document.getElementById('proto-form');
  if (form) form.reset();
  const resultBox = document.getElementById('proto-result-box');
  if (resultBox) resultBox.style.display = 'none';

  const priorityBadges = document.querySelectorAll('.proto-priority-badge');
  priorityBadges.forEach(b => b.classList.remove('is-selected'));

  initPrototypeInteractions();
}

// Expõe funções do formulário no escopo global
window.avaliarRegulacaoClinica = avaliarRegulacaoClinica;
window.preencherExemplo = preencherExemplo;
window.resetarFormulario = resetarFormulario;

/**
 * Alterna a pasta ativa no layout de Encaminhamentos
 * @param {string} folderId - ID da pasta ('etapa-1', 'etapa-2', 'etapa-3', 'modelos')
 * @param {string} [targetAnchorId] - ID opcional da âncora interna para scroll
 */
function switchFolderPanel(folderId, targetAnchorId) {
  const panels = document.querySelectorAll('.folder-content-panel');
  if (!panels.length) return;

  // Ativa o painel correspondente e oculta os demais
  let targetPanel = null;
  panels.forEach(panel => {
    if (panel.getAttribute('data-folder') === folderId) {
      panel.classList.add('active');
      targetPanel = panel;
    } else {
      panel.classList.remove('active');
    }
  });

  if (!targetPanel) return;

  // Atualiza estado visual das pastas na sidebar
  const folders = document.querySelectorAll('.tree-folder');
  let activeFolderEl = null;
  folders.forEach(folder => {
    if (folder.getAttribute('data-folder-id') === folderId) {
      folder.classList.add('active-folder');
      folder.classList.add('open');
      const icon = folder.querySelector('.folder-icon');
      if (icon) icon.textContent = '📂';
      activeFolderEl = folder;
    } else {
      folder.classList.remove('active-folder');
    }
  });

  // Atualiza banner de contexto
  if (activeFolderEl) {
    const folderNameEl = activeFolderEl.querySelector('.folder-name');
    const folderBadgeEl = activeFolderEl.querySelector('.status-badge');
    const titleEl = document.getElementById('folder-current-title');
    const badgeWrapEl = document.getElementById('folder-current-badge-wrap');

    if (titleEl && folderNameEl) {
      titleEl.textContent = folderNameEl.textContent.trim();
    }
    if (badgeWrapEl) {
      if (folderBadgeEl) {
        badgeWrapEl.innerHTML = folderBadgeEl.outerHTML;
      } else {
        badgeWrapEl.innerHTML = '';
      }
    }
  }

  // Scroll suave para a âncora desejada dentro do painel
  if (targetAnchorId) {
    const cleanId = targetAnchorId.replace('#', '');
    const anchorEl = document.getElementById(cleanId);
    if (anchorEl) {
      setTimeout(() => {
        anchorEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 60);
      return;
    }
  }

  // Se não tem âncora específica, rola até o topo da área de documentos
  const banner = document.querySelector('.active-folder-banner');
  if (banner) {
    const topOffset = banner.getBoundingClientRect().top + window.scrollY - 85;
    if (window.scrollY > topOffset) {
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  }
}

window.switchFolderPanel = switchFolderPanel;

/**
 * Manipulador interativo para a árvore de pastas em Encaminhamentos
 */
function initFolderTree() {
  const folders = document.querySelectorAll('.tree-folder');
  if (!folders.length) return;

  folders.forEach(folder => {
    const header = folder.querySelector('.tree-folder-header');
    if (!header || header.dataset.hasListener) return;
    header.dataset.hasListener = 'true';

    header.addEventListener('click', (e) => {
      const folderId = folder.getAttribute('data-folder-id');
      const isAlreadyActive = folder.classList.contains('active-folder');

      if (!isAlreadyActive && folderId) {
        // Se clicar em outra pasta, ativa o painel dela
        switchFolderPanel(folderId);
        // Ativa o primeiro arquivo por padrão
        const firstFile = folder.querySelector('.tree-file');
        if (firstFile) {
          document.querySelectorAll('.tree-file').forEach(f => f.classList.remove('active'));
          firstFile.classList.add('active');
        }
      } else {
        // Se já estiver ativa, apenas alterna expandir/recolher
        folder.classList.toggle('open');
        const icon = header.querySelector('.folder-icon');
        if (icon) {
          icon.textContent = folder.classList.contains('open') ? '📂' : '📁';
        }
      }
    });
  });

  const files = document.querySelectorAll('.tree-file');
  files.forEach(file => {
    if (file.dataset.hasListener) return;
    file.dataset.hasListener = 'true';

    file.addEventListener('click', (e) => {
      const parentFolder = file.closest('.tree-folder');
      const folderId = parentFolder ? parentFolder.getAttribute('data-folder-id') : null;
      const targetAnchor = file.getAttribute('href');

      if (folderId) {
        switchFolderPanel(folderId, targetAnchor);
      }
      files.forEach(f => f.classList.remove('active'));
      file.classList.add('active');
    });
  });

  // Se houver âncora na URL ao carregar a página, abre a pasta correspondente
  if (window.location.hash) {
    const targetEl = document.querySelector(window.location.hash);
    if (targetEl) {
      const parentPanel = targetEl.closest('.folder-content-panel');
      if (parentPanel) {
        const folderId = parentPanel.getAttribute('data-folder');
        if (folderId) {
          switchFolderPanel(folderId, window.location.hash);
          const activeFile = document.querySelector(`.tree-file[href="${window.location.hash}"]`);
          if (activeFile) {
            files.forEach(f => f.classList.remove('active'));
            activeFile.classList.add('active');
          }
          return;
        }
      }
    }
  }

  // Inicializa com a primeira pasta ('etapa-1') se nenhuma estiver ativa
  const currentActivePanel = document.querySelector('.folder-content-panel.active');
  if (!currentActivePanel) {
    switchFolderPanel('etapa-1');
  }
}

function initPageScripts() {
  checkPageLayout();
  initFolderTree();
}

// Disparo inicial e subscrição a mudanças de página no MkDocs Material
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPageScripts);
} else {
  initPageScripts();
}

if (typeof document$ !== 'undefined') {
  document$.subscribe(initPageScripts);
}

