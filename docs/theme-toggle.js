(function () {
  const saved = localStorage.getItem('theme');
  if (saved) {
    document.documentElement.setAttribute('data-theme', saved);
  }
})();

window.toggleTheme = () => {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateToggleIcon();
};

function updateToggleIcon() {
  const btn = document.querySelector('.theme-toggle');
  if (!btn) return;

  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  btn.textContent = isLight ? '🌙 Dark' : '☀️ Light';
  btn.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
  btn.setAttribute('aria-pressed', String(!isLight));
}

document.addEventListener('DOMContentLoaded', updateToggleIcon);
