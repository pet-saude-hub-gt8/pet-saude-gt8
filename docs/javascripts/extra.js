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

// Disponibiliza as funções no escopo global (window)
window.changeFontSize = changeFontSize;
window.resetFontSize = resetFontSize;
window.toggleHighContrast = toggleHighContrast;

/**
 * Adiciona a classe 'page-home-hero' no body quando a página inicial contiver o banner .hero-full.
 */
function checkHomeHero() {
  if (document.querySelector('.hero-full')) {
    document.body.classList.add('page-home-hero');
  } else {
    document.body.classList.remove('page-home-hero');
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', checkHomeHero);
} else {
  checkHomeHero();
}

if (typeof document$ !== 'undefined') {
  document$.subscribe(checkHomeHero);
}
