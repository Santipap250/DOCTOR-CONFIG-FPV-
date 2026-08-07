(function () {
  const topbar = document.getElementById('topbar');
  const launcher = document.getElementById('toolLauncher');
  const backdrop = document.getElementById('launcherBackdrop');
  const openers = document.querySelectorAll('.js-launcher-open');
  const closeBtn = document.getElementById('launcherClose');
  const search = document.getElementById('launcherSearch');
  const count = document.getElementById('launcherCount');
  const tabs = Array.from(document.querySelectorAll('.lp-tab'));
  const grid = document.getElementById('launcherGrid');
  const empty = document.getElementById('launcherEmpty');

  const tools = Array.isArray(window.__CONFIGDOCTOR_TOOL_LAUNCHER__)
    ? window.__CONFIGDOCTOR_TOOL_LAUNCHER__
    : [];

  let activeCat = 'ALL';
  let scrollLock = false;

  const icons = {
    core: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="4"></rect><path d="M7 12h2l1-3 2 6 1-3h2"></path></svg>',
    tune: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="5" x2="8" y2="19"></line><line x1="12" y1="5" x2="12" y2="19"></line><line x1="16" y1="5" x2="16" y2="19"></line><circle cx="8" cy="12" r="2" fill="currentColor"></circle><circle cx="12" cy="8" r="2" fill="currentColor"></circle><circle cx="16" cy="16" r="2" fill="currentColor"></circle></svg>',
    hw: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l2.2 5.7L20 10l-5 3.3L16.2 19 12 15.9 7.8 19 9 13.3 4 10l5.8-2.3z"></path></svg>',
    explore: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l3.2 6.5L22 10l-5 4.9L18.4 22 12 18.7 5.6 22 7 14.9 2 10l6.8-.5z"></path></svg>'
  };

  function matches(tool, query) {
    if (activeCat !== 'ALL' && tool.cat !== activeCat) return false;
    if (!query) return true;
    const hay = `${tool.name} ${tool.desc} ${tool.cat}`.toLowerCase();
    return hay.includes(query);
  }

  function render() {
    const q = (search.value || '').trim().toLowerCase();
    const filtered = tools.filter((tool) => matches(tool, q));

    count.textContent = String(filtered.length);
    empty.hidden = filtered.length !== 0;
    grid.innerHTML = filtered.map((tool) => `
      <a class="lp-launcher-item" href="${tool.href}">
        <span class="lp-launcher-item__icon is-${tool.icon}">${icons[tool.icon] || icons.core}</span>
        <strong>${tool.name}</strong>
        <p>${tool.desc}</p>
      </a>
    `).join('');

    tabs.forEach((tab) => tab.classList.toggle('is-active', tab.dataset.cat === activeCat));
  }

  function openLauncher() {
    if (!launcher || !backdrop) return;
    launcher.classList.add('is-open');
    backdrop.classList.add('is-open');
    launcher.setAttribute('aria-hidden', 'false');
    backdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    scrollLock = true;
    render();
    setTimeout(() => search?.focus(), 120);
  }

  function closeLauncher() {
    if (!launcher || !backdrop) return;
    launcher.classList.remove('is-open');
    backdrop.classList.remove('is-open');
    launcher.setAttribute('aria-hidden', 'true');
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    scrollLock = false;
  }

  openers.forEach((btn) => btn.addEventListener('click', openLauncher));
  closeBtn?.addEventListener('click', closeLauncher);
  backdrop?.addEventListener('click', closeLauncher);

  search?.addEventListener('input', render);
  tabs.forEach((tab) => tab.addEventListener('click', () => {
    activeCat = tab.dataset.cat || 'ALL';
    render();
  }));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && launcher?.classList.contains('is-open')) closeLauncher();
  });

  document.addEventListener('scroll', () => {
    if (!topbar) return;
    topbar.classList.toggle('is-scrolled', window.scrollY > 8);
  }, { passive: true });

  render();
})();
