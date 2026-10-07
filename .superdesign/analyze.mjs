import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
const root = process.cwd();
const out = path.join(root, '.superdesign/init');
fs.mkdirSync(out, { recursive: true });
const read = p => fs.readFileSync(path.join(root, p), 'utf8');
const source = p => `\n## ${p}\n\n\`\`\`${path.extname(p).slice(1)}\n${read(p)}\n\`\`\`\n`;
const put = (name, body) => fs.writeFileSync(path.join(out, name + '.md'), body);
put('components', '# Shared primitives\nReact 19, Vite 7, React Router 7, Lucide, vanilla CSS.\nPageHead, Panel, buttons, search, pagination, segmented controls, drawers, status, charts, and loading states are centralized here.\n' + source('admin/src/components/pz.tsx'));
put('layouts', '# Layout\nAuthenticated shell, sidebar, topbar, command search, and protected routes. Login is excluded from this redesign.\n' + source('admin/src/App.tsx') + source('admin/src/components/navigation.ts'));
const screens = fs.readdirSync(path.join(root, 'admin/src/screens')).filter(f => f.endsWith('.tsx'));
put('routes', '# Routes\n/ Dashboard; /users Users; /food Pantry insights; /recipes Recipes; /analytics Food outcomes; /costs API costs; /logs System logs; /settings Settings. Remove /review and /chatbot; old links fall back to /.\n' + source('admin/src/components/navigation.ts') + source('admin/src/App.tsx'));
put('theme', '# Tokens\nCurrent admin: Schibsted Grotesk, gray-green background #f3f4f1, white cards, green #1f6b45, 6/8/12px radii; dark #111613.\nTarget Panzi app: Nunito body, Baloo 2 headings; cream #FFF8E8 / #F3E9D4, green #6CBF3F / #3E7D2A / #234A1B, peach #FBE5D6. Warm charcoal dark #161411, #252119, #2E2921. Rounded 16-24px cards and pill filters.\n' + source('admin/src/styles/panzi.css') + source('admin/src/styles/global.css') + source('admin/src/lib/useTheme.ts'));
function tree(file, depth = 0, seen = new Set()) {
  if (seen.has(file)) return '  '.repeat(depth) + '- ' + file + ' (shared)\n';
  seen.add(file);
  let result = '  '.repeat(depth) + '- ' + file + '\n';
  for (const m of read(file).matchAll(/(?:from\s+|import\s*)['"](\.[^'"]+)['"]/g)) {
    const base = path.resolve(root, path.dirname(file), m[1]);
    const found = ['', '.tsx', '.ts', '.css', '/index.ts', '/index.tsx'].map(s => base + s).find(p => fs.existsSync(p) && fs.statSync(p).isFile());
    if (found) result += tree(path.relative(root, found).replaceAll('\\', '/'), depth + 1, seen);
  }
  return result;
}
put('pages', '# Page dependencies\n' + screens.map(s => '\n## ' + s + '\n' + tree('admin/src/screens/' + s)).join(''));
put('extractable-components', '# Reusable components\n## Shell\nSource: admin/src/App.tsx. Layout. Sidebar, topbar, page container. State: current route, collapsed, theme. Labels/icons/logo fixed.\n## PageHead\nSource: admin/src/components/pz.tsx. Basic. title, text, tools, updatedAt.\n## Panel\nSource: admin/src/components/pz.tsx. Basic. title, aside, children.\n## Segmented\nSource: admin/src/components/pz.tsx. Basic. options, value, onChange.\n## Drawer\nSource: admin/src/components/pz.tsx. Layout. title, subtitle, children, onClose.\n## Metric and table patterns\nSource: admin/src/styles/panzi.css. Shared surface treatments and typography.\n');
const protectedFiles = ['admin/src/components/SignIn.tsx', 'admin/src/styles/global.css', 'admin/src/components/ui/SignInHelp.tsx', 'admin/src/components/ui/FoodShowcase.tsx', 'admin/src/components/ui/AnimatedPantryWord.tsx', 'admin/src/components/Swirling.tsx'];
fs.writeFileSync(path.join(root, '.superdesign/login-baseline.json'), JSON.stringify(Object.fromEntries(protectedFiles.map(p => [p, crypto.createHash('sha256').update(read(p)).digest('hex')])), null, 2));
console.log('Created six design context files and login baseline hashes.');
