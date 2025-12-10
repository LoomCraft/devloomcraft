

// Injects shared banner.html into the #banner element
async function loadBanner(targetId = 'banner') {
    const el = document.getElementById(targetId);
    if (!el) return;
    try {
      const res = await fetch('./banner.html', { cache: 'no-cache' });
      if (!res.ok) throw new Error('Failed to load banner');
      el.innerHTML = await res.text();
    } catch (err) {
      console.error('Banner load error:', err);
      el.innerHTML = '<div style="background:#222;color:#fff;padding:8px">Welcome</div>';
    }
  }
  document.addEventListener('DOMContentLoaded', () => loadBanner());

  // Injects shared banner.html into the #footer element
async function loadFooter(targetId = 'footer') {
    const el = document.getElementById(targetId);
    if (!el) return;
    try {
      const res = await fetch('./footer.html', { cache: 'no-cache' });
      if (!res.ok) throw new Error('Failed to load banner');
      el.innerHTML = await res.text();
    } catch (err) {
      console.error('Banner load error:', err);
      el.innerHTML = '<div style="background:#222;color:#fff;padding:8px">Welcome</div>';
    }
  }
  document.addEventListener('DOMContentLoaded', () => loadFooter());
