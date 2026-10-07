(async () => {
  const results = [];
  const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
  const check = (name, pass) => { if (!pass) throw new Error(name); results.push(name); };
  const card = () => document.querySelector('.mascot-card');
  const portrait = () => document.querySelector('.mascot-portrait');
  const hello = () => document.querySelector('.mascot-hello');
  const sheets = () => [...document.querySelectorAll('.mascot-sheet')];
  const move = () => window.dispatchEvent(new PointerEvent('pointermove', { clientX: 1200, clientY: 100, pointerType: 'mouse' }));
  [...document.querySelectorAll('.side .nav-link')].find(a => a.getAttribute('href') === '/').click();
  await wait(150);
  for (const sheet of sheets()) {
    const image = new Image();
    image.src = getComputedStyle(sheet).backgroundImage.slice(5, -2);
    await image.decode();
    check('Sprite sheet loads: ' + image.src.split('/').pop(), image.naturalWidth > 0 && image.naturalWidth === image.naturalHeight);
  }
  check('No error overlay', !document.querySelector('vite-error-overlay'));
  card().scrollIntoView();
  await wait(150);
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
    move(); await wait(250);
    check('Portrait follows mouse', sheets()[0].style.backgroundPosition !== '50% 50%');
    // Return the pointer to the stable button center before tapping.
    const box = hello().getBoundingClientRect();
    window.dispatchEvent(new PointerEvent('pointermove', { clientX: box.x + box.width / 2, clientY: box.y + box.height / 2, pointerType: 'mouse' }));
    await wait(50);
    const seen = [];
    for (let tap = 0; tap < 4; tap++) {
      hello().click();
      for (let sample = 0; sample < 4; sample++) {
        await wait(30);
        seen.push(sheets()[1].style.backgroundPosition);
        check('Tap keeps button anchored ' + tap + '/' + sample, hello().getBoundingClientRect().x === box.x);
        check('Rapid taps keep a single squash animation ' + tap + '/' + sample, portrait().getAnimations().length <= 1);
      }
    }
    check('All tap frames face forward without a left blink', seen.every(position => position.startsWith('50%')));
    check('Rapid tapping reaches dizzy reaction', sheets()[1].style.backgroundPosition === '50% 100%');
    await wait(1150);
    check('Reaction settles back to centered idle', sheets()[1].style.opacity === '0' && sheets()[0].style.backgroundPosition === '50% 50%');
    hello().click(); await wait(40);
    document.querySelector('.mascot-motion').click(); await wait(50);
    move(); await wait(100);
    check('Pause cancels active motion and persists preference', portrait().getAnimations().length === 0 && sheets()[1].style.opacity === '0' && localStorage.getItem('panzi.admin.companion-motion') === 'paused');
    hello().click(); await wait(50);
    check('Paused taps greet without animation or sprite switching', card().textContent.includes('Hello, pantry pal!') && portrait().getAnimations().length === 0 && sheets()[1].style.opacity === '0');
    document.querySelector('.mascot-motion').click(); await wait(50);
  } else {
    move(); await wait(100);
    check('Reduced motion keeps portrait still', getComputedStyle(portrait()).transform === 'none' && sheets()[0].style.backgroundPosition === '50% 50%');
  }
  document.querySelector('.mascot-hello').click(); await wait(50);
  check('Tap greeting works', card().textContent.includes('Hello, pantry pal!'));
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    check('Reduced motion disables tap animation and sprite switching', portrait().getAnimations().length === 0 && sheets()[1].style.opacity === '0');
  }
  check('Both sheets soften the bottom crop', sheets().every(sheet => getComputedStyle(sheet).maskImage.includes('93%')));
  const expected = { '/food': '/analytics', '/recipes': '/users', '/users': '/food', '/analytics': '/food', '/costs': '/logs', '/logs': '/costs', '/settings': '/', '/': '/food' };
  for (const [route, target] of Object.entries(expected)) {
    [...document.querySelectorAll('.side .nav-link')].find(a => a.getAttribute('href') === route).click();
    await wait(150);
    check('Relevant shortcut on ' + route, document.querySelector('.mascot-shortcut').getAttribute('href') === target && !card().textContent.includes('Hello, pantry pal!'));
  }
  document.querySelector('.mascot-shortcut').click(); await wait(150);
  check('Companion shortcut navigates', location.pathname === '/food');
  if (innerWidth > 860) {
    document.querySelector('.sidebar-control').click(); await wait(400);
    check('Collapsed rail hides companion and stops motion', getComputedStyle(card()).visibility === 'hidden' && portrait().getAnimations().length === 0);
    document.querySelector('.sidebar-control').click(); await wait(400);
  }
  check('No horizontal overflow', document.documentElement.scrollWidth <= innerWidth);
  return results;
})()
