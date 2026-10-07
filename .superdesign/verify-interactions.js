(async () => {
  const results = [];
  const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
  const assert = (label, ok) => { if (!ok) throw new Error(label); results.push(label); };
  const go = async path => { [...document.querySelectorAll('.side a')].find(a => a.getAttribute('href') === path).click(); await wait(500); };
  const button = text => [...document.querySelectorAll('.page button')].find(b => b.textContent.trim() === text);
  const setField = (el, value) => {
    Object.getOwnPropertyDescriptor(el instanceof HTMLSelectElement ? HTMLSelectElement.prototype : HTMLInputElement.prototype, 'value').set.call(el, value);
    el.dispatchEvent(new Event(el instanceof HTMLSelectElement ? 'change' : 'input', { bubbles: true }));
  };
  await go('/food');
  [...document.querySelectorAll('.category-tabs button')].find(b => b.textContent.startsWith('Produce')).click(); await wait(150);
  assert('Pantry category filter shows only produce', [...document.querySelectorAll('tbody tr')].every(r => r.cells[1].textContent === 'Produce') && document.querySelectorAll('tbody tr').length > 0);
  setField(document.querySelector('.page input[type=search]'), 'no-such-food-123'); await wait(200);
  assert('Pantry search has an empty state', document.querySelector('.page').textContent.includes('No food matches'));
  await go('/recipes');
  setField(document.querySelector('.page select'), 'name'); await wait(150);
  const names = [...document.querySelectorAll('.recipe-card h2')].map(e => e.textContent);
  assert('Recipe alphabetical sort works', names.join() === [...names].sort((a,b) => a.localeCompare(b)).join());
  setField(document.querySelector('.page input[type=search]'), 'Adobo'); await wait(150);
  assert('Recipe search finds the matching dish', document.querySelectorAll('.recipe-card').length === 1 && document.querySelector('.recipe-card h2').textContent.includes('Adobo'));
  await go('/users');
  setField(document.querySelector('.page input[type=search]'), 'Maricel'); await wait(800);
  assert('Account search filters server results', document.querySelectorAll('tbody tr').length === 1 && document.querySelector('tbody').textContent.includes('Maricel'));
  document.querySelector('.row-btn').click(); await wait(400);
  assert('Account drawer loads pantry', document.querySelector('[role=dialog]')?.textContent.includes('Bigas'));
  document.querySelector('[role=dialog] button[aria-label=Close]').click(); await wait(400);
  assert('Account drawer closes', !document.querySelector('[role=dialog]'));
  await go('/');
  const previous = document.querySelector('.strip').textContent;
  button('7 days').click(); await wait(400);
  assert('Dashboard period changes the metrics', button('7 days').getAttribute('aria-pressed') === 'true' && document.querySelector('.strip').textContent !== previous);
  const theme = document.querySelector('.pz').dataset.theme;
  document.querySelector('button[aria-label^="Switch to"]').click(); await wait(700);
  assert('Theme switch updates workspace', document.querySelector('.pz').dataset.theme !== theme);
  document.querySelector('button[aria-label^="Switch to"]').click(); await wait(700);
  document.querySelector('.search-global input').click(); await wait(150);
  assert('Command search omits removed screens', !/Conversations|Needs review/.test(document.querySelector('.palette').textContent));
  document.querySelector('.palette a[href="/recipes"]').click(); await wait(400);
  assert('Command search navigates', location.pathname === '/recipes');
  if (innerWidth < 861) {
    document.querySelector('button[aria-label="Open navigation"]').click(); await wait(300);
    assert('Mobile navigation opens', document.querySelector('.side').classList.contains('on'));
    [...document.querySelectorAll('.side a')].find(a => a.getAttribute('href') === '/food').click(); await wait(400);
    assert('Mobile navigation closes after selecting a page', !document.querySelector('.side').classList.contains('on') && location.pathname === '/food');
  }
  return results;
})()
