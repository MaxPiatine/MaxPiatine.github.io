function updateTheme() {
  const hour = new Date().getHours();
  let theme;
  if (hour >= 6 && hour < 18) {
    theme = {
      bg1: '#f8fbff', bg2: '#eef5ff', card: 'rgba(255,255,255,0.88)',
      text: '#0f172a', muted: '#475569',
      tagBg: 'rgba(58,134,255,0.1)', tagColor: '#2563eb',
      detailBg: 'rgba(58,134,255,0.04)', detailBorder: 'rgba(58,134,255,0.25)',
      divider: 'rgba(58,134,255,0.12)', sectionLabel: '#94a3b8'
    };
  } else {
    theme = {
      bg1: '#020617', bg2: '#020617', card: 'rgba(15,23,42,0.75)',
      text: '#e5e7eb', muted: '#94a3b8',
      tagBg: 'rgba(58,134,255,0.15)', tagColor: '#93c5fd',
      detailBg: 'rgba(58,134,255,0.06)', detailBorder: 'rgba(58,134,255,0.3)',
      divider: 'rgba(255,255,255,0.08)', sectionLabel: '#64748b'
    };
  }
  const r = document.documentElement;
  r.style.setProperty('--bg-1', theme.bg1);
  r.style.setProperty('--bg-2', theme.bg2);
  r.style.setProperty('--card-bg', theme.card);
  r.style.setProperty('--text', theme.text);
  r.style.setProperty('--muted', theme.muted);
  r.style.setProperty('--tag-bg', theme.tagBg);
  r.style.setProperty('--tag-color', theme.tagColor);
  r.style.setProperty('--detail-bg', theme.detailBg);
  r.style.setProperty('--detail-border', theme.detailBorder);
  r.style.setProperty('--divider', theme.divider);
  r.style.setProperty('--section-label', theme.sectionLabel);
}

const bg = document.querySelector('.background');
window.addEventListener('load', () => { updateTheme(); setInterval(updateTheme, 5 * 60 * 1000); });
window.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 8;
  const y = (e.clientY / window.innerHeight - 0.5) * 8;
  bg.style.transform = `translate(${x}px, ${y}px) scale(1.02)`;
});
