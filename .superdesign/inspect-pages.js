(async () => {
  const checks = [];
  for (const path of ['/', '/food', '/recipes', '/users', '/analytics', '/costs', '/logs', '/settings']) {
    const link = [...document.querySelectorAll('.side a')].find(a => a.getAttribute('href') === path);
    if (!link) throw new Error(`Missing navigation: ${path}`);
    link.click();
    for (let i = 0; i < 50; i++) {
      await new Promise(resolve => setTimeout(resolve, 100));
      if (location.pathname === path && document.querySelector('h1') && !document.querySelector('.page .spinner')) break;
    }
    await document.fonts.ready;
    checks.push({ path, title: document.querySelector('h1')?.textContent, viewport: innerWidth,
      overflow: document.documentElement.scrollWidth > innerWidth,
      error: document.querySelector('.page .state.error')?.textContent ?? null,
      removedLinks: document.querySelectorAll('.side a[href="/review"], .side a[href="/chatbot"]').length,
      font: getComputedStyle(document.querySelector('h1')).fontFamily,
      brokenImages: [...document.querySelectorAll('.page img')].filter(img => img.complete && !img.naturalWidth).map(img => img.src)
    });
  }
  return checks;
})()
