# Tokens
Current admin: Schibsted Grotesk, gray-green background #f3f4f1, white cards, green #1f6b45, 6/8/12px radii; dark #111613.
Target Panzi app: Nunito body, Baloo 2 headings; cream #FFF8E8 / #F3E9D4, green #6CBF3F / #3E7D2A / #234A1B, peach #FBE5D6. Warm charcoal dark #161411, #252119, #2E2921. Rounded 16-24px cards and pill filters.

## admin/src/styles/panzi.css

```css
/* Panzi admin workspace. Everything is scoped to .pz so the sign-in page keeps
   its own styles from global.css. Tokens live on .pz for the same reason. */

/* Panzi admin, draft redesign.
   Quiet workspace, one loud thing per page. Color carries meaning only:
   green = food used up / primary action, tomato = food thrown out,
   hatched gray = removed without a reason, amber = needs attention. */
.pz {
  --font: 'Schibsted Grotesk', system-ui, -apple-system, 'Segoe UI', sans-serif;

  --bg: #f3f4f1;
  --panel: #ffffff;
  --panel-2: #f7f8f6;
  --ink: #17201c;
  --ink-2: #4b5650;
  --ink-3: #69736d;
  --line: #e1e4df;
  --line-2: #cdd2cc;

  --brand: #1f6b45;
  --brand-ink: #ffffff;
  --brand-wash: #e3f0e8;

  --used: #4aa36b;
  --wasted: #a2361f;
  --unknown: #9aa39d;
  --unknown-hatch: #c9cec9;

  --warn: #8a5a00;
  --warn-wash: #fbf0d9;
  --bad: #a2361f;
  --bad-wash: #f8e4df;
  --good: #1f6b45;
  --good-wash: #e3f0e8;

  --focus: #2563a8;
  --r-sm: 6px;
  --r: 8px;
  --r-lg: 12px;
  color-scheme: light;
}
@media (prefers-color-scheme: dark) {
  .pz:not([data-theme="light"]) {
    --bg: #111613;
    --panel: #1a201c;
    --panel-2: #202722;
    --ink: #e8ece9;
    --ink-2: #b9c1bb;
    --ink-3: #939c96;
    --line: #2b332e;
    --line-2: #3a433d;
    --brand: #52aa70;
    --brand-ink: #0d1510;
    --brand-wash: #1f3326;
    --used: #52aa70;
    --wasted: #d8452f;
    --unknown: #6f7872;
    --unknown-hatch: #4a524d;
    --warn: #e6b04a;
    --warn-wash: #33290f;
    --bad: #ef7a64;
    --bad-wash: #3a1d17;
    --good: #7cc896;
    --good-wash: #1f3326;
    --focus: #8ab8f0;
    color-scheme: dark;
  }
}
.pz[data-theme="dark"] {
  --bg: #111613;
  --panel: #1a201c;
  --panel-2: #202722;
  --ink: #e8ece9;
  --ink-2: #b9c1bb;
  --ink-3: #939c96;
  --line: #2b332e;
  --line-2: #3a433d;
  --brand: #52aa70;
  --brand-ink: #0d1510;
  --brand-wash: #1f3326;
  --used: #52aa70;
  --wasted: #d8452f;
  --unknown: #6f7872;
  --unknown-hatch: #4a524d;
  --warn: #e6b04a;
  --warn-wash: #33290f;
  --bad: #ef7a64;
  --bad-wash: #3a1d17;
  --good: #7cc896;
  --good-wash: #1f3326;
  --focus: #8ab8f0;
  color-scheme: dark;
}
.pz *, .pz *::before, .pz *::after { box-sizing: border-box; }
.pz {
  margin: 0; background: var(--bg); color: var(--ink);
  font: 400 14.5px/1.5 var(--font); -webkit-font-smoothing: antialiased;
}
.pz ::selection { background: var(--brand-wash); color: var(--ink); }
.pz :focus-visible { outline: 2px solid var(--focus); outline-offset: 2px; }
.pz a { color: inherit; text-underline-offset: 3px; }
.pz button, .pz input, .pz select, .pz textarea { font: inherit; color: inherit; }
.pz button { cursor: pointer; }
.pz h1, .pz h2, .pz h3 { margin: 0; }
.pz * { scrollbar-width: thin; scrollbar-color: var(--line-2) transparent; }
.pz svg.i { width: 17px; height: 17px; stroke-width: 1.9; flex: none; }
.pz .sr-only { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }
.pz .skip { position: absolute; left: 12px; top: -40px; z-index: 60; background: var(--ink); color: var(--panel); padding: 8px 12px; border-radius: var(--r); }
.pz .skip:focus { top: 12px; }
.pz .num { font-variant-numeric: tabular-nums; }
/* ── Shell ───────────────────────── */
.pz .pz-shell {
  display: grid; grid-template-columns: 236px minmax(0, 1fr); min-height: 100vh;
  transition: grid-template-columns .3s cubic-bezier(.2, .8, .2, 1);
}
.pz .side {
  position: sticky; top: 0; height: 100vh; overflow-y: auto; overflow-x: hidden;
  display: flex; flex-direction: column; gap: 20px;
  padding: 16px 12px; border-right: 1px solid var(--line); background: var(--panel);
}
/* Labels stay on one line and fade, so the rail can close over them without
   the text rewrapping mid-animation. */
.pz .side .label, .pz .nav-group h2, .pz .me .who { white-space: nowrap; overflow: hidden; transition: opacity .18s ease; }
.pz #nav, .pz .nav-group ul, .pz .side-foot { grid-template-columns: minmax(0, 1fr); }
.pz .brand-row { position: relative; display: flex; align-items: center; gap: 4px; }
.pz .brand { flex: 1; min-width: 0; display: flex; align-items: center; gap: 9px; padding: 4px 5px; text-decoration: none; font-weight: 700; font-size: 17px; }
.pz .brand img { width: 26px; height: 26px; flex-shrink: 0; transition: opacity .18s ease; }
.pz .side-toggle { flex: none; transition: opacity .18s ease, background-color .15s ease, border-color .15s ease, color .15s ease; }
.pz .side-toggle .swap { display: grid; animation: pz-swap .34s cubic-bezier(.2, .8, .2, 1); }
@keyframes pz-swap { from { opacity: 0; transform: rotate(-90deg) scale(.6); } to { opacity: 1; transform: none; } }
.pz #nav { display: grid; gap: 16px; }
.pz .nav-group h2 { font-size: 12.5px; font-weight: 500; color: var(--ink-3); padding: 0 10px 4px; }
.pz .nav-group ul { list-style: none; margin: 0; padding: 0; display: grid; gap: 1px; }
.pz .nav-link {
  position: relative;
  display: flex; align-items: center; gap: 10px; height: 34px; padding: 0 10px;
  border-radius: var(--r); text-decoration: none; color: var(--ink-2); font-weight: 500;
}
.pz .nav-link:hover { background: var(--panel-2); color: var(--ink); }
.pz .nav-link[aria-current="page"] { background: var(--brand-wash); color: var(--ink); font-weight: 600; }
.pz .nav-link[aria-current="page"] svg.i { color: var(--brand); }
.pz .nav-link .badge { margin-left: auto; }
.pz .side-foot { margin-top: auto; display: grid; gap: 1px; }
.pz .me { display: flex; align-items: center; gap: 10px; padding: 10px; border-top: 1px solid var(--line); margin-top: 8px; font-size: 13.5px; }
.pz .me span:last-child { min-width: 0; }
.pz .me b { display: block; font-weight: 600; }
.pz .me small { color: var(--ink-3); display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
/* Pinned to the right edge, lined up under the sidebar toggle at the top. */
.pz .me .icon-btn { margin-left: auto; margin-right: -10px; transition: opacity .18s ease; }
/* Collapsed rail (wide screens only; narrow screens use the drawer below).
   Icons keep their exact positions, only the labels fade out, and the logo
   turns into the expand button on hover. */
@media (min-width: 861px) {
  .pz .pz-shell.collapsed { grid-template-columns: 60px minmax(0, 1fr); }
  .pz .collapsed .side .label, .pz .collapsed .nav-group h2,
  .pz .collapsed .me .who, .pz .collapsed .me .icon-btn { opacity: 0; visibility: hidden; }
  .pz .collapsed .side-toggle { position: absolute; left: 0; top: 50%; translate: 0 -50%; opacity: 0; }
  .pz .collapsed .brand-row:hover .side-toggle, .pz .collapsed .side-toggle:focus-visible { opacity: 1; }
  .pz .collapsed .brand-row:hover .brand img, .pz .collapsed .brand-row:has(.side-toggle:focus-visible) .brand img { opacity: 0; }
  .pz .collapsed .nav-link .badge {
    position: absolute; top: 2px; left: 20px; min-width: 16px; height: 16px; padding: 0 4px;
    font-size: 10.5px; line-height: 16px; text-align: center;
  }
  .pz .collapsed .me { padding: 10px 3px; }
}
.pz .pz-main { min-width: 0; }
.pz .top {
  position: sticky; top: 0; z-index: 10; display: flex; align-items: center; gap: 12px;
  height: 58px; padding: 0 28px; background: color-mix(in srgb, var(--bg) 92%, transparent);
  backdrop-filter: saturate(1.4) blur(8px); border-bottom: 1px solid var(--line);
}
.pz .search-global { position: relative; width: min(420px, 100%); }
.pz .search-global input, .pz .field-input {
  width: 100%; height: 36px; border: 1px solid var(--line-2); border-radius: var(--r);
  background: var(--panel); padding: 0 12px 0 36px;
}
.pz .search-global svg.i, .pz .input-icon { position: absolute; left: 11px; top: 50%; transform: translateY(-50%); color: var(--ink-3); width: 16px; height: 16px; pointer-events: none; }
.pz .search-global kbd { position: absolute; right: 8px; top: 50%; transform: translateY(-50%); }
.pz kbd { font: 500 11.5px/1 var(--font); padding: 3px 6px; border: 1px solid var(--line-2); border-bottom-width: 2px; border-radius: 5px; color: var(--ink-3); background: var(--panel-2); }
.pz input::placeholder, .pz textarea::placeholder { color: var(--ink-3); }
.pz input:focus, .pz textarea:focus, .pz select:focus { outline: none; border-color: var(--focus); box-shadow: 0 0 0 3px color-mix(in srgb, var(--focus) 22%, transparent); }
.pz .top-right { margin-left: auto; display: flex; align-items: center; gap: 8px; }
.pz .sample-note { font-size: 12.5px; color: var(--warn); background: var(--warn-wash); padding: 4px 9px; border-radius: 99px; font-weight: 500; white-space: nowrap; }
.pz .icon-btn { width: 36px; height: 36px; display: grid; place-items: center; border-radius: var(--r); border: 1px solid transparent; background: none; color: var(--ink-2); }
.pz .icon-btn:hover { background: var(--panel); border-color: var(--line); color: var(--ink); }
.pz .menu-btn { display: none; }
.pz .page { padding: 28px 28px 72px; }
/* ── Page header ─────────────────── */
.pz .page-head { display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 14px 24px; margin-bottom: 24px; }
.pz .page-head h1 { font-size: 27px; line-height: 1.15; font-weight: 700; letter-spacing: -.015em; }
.pz .page-head p { margin: 6px 0 0; color: var(--ink-2); max-width: 68ch; }
.pz .updated { color: var(--ink-3); font-size: 13px; margin-top: 4px; }
.pz .tools { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; }
.pz .btn {
  display: inline-flex; align-items: center; gap: 7px; height: 36px; padding: 0 13px;
  border-radius: var(--r); border: 1px solid var(--line-2); background: var(--panel);
  font-weight: 500; font-size: 14px; white-space: nowrap; text-decoration: none; color: var(--ink);
}
.pz .btn:hover { border-color: var(--ink-3); }
.pz .btn svg.i { width: 16px; height: 16px; }
.pz .btn.primary { background: var(--brand); border-color: var(--brand); color: var(--brand-ink); font-weight: 600; }
.pz .btn.primary:hover { filter: brightness(1.08); }
.pz .btn.danger { color: var(--bad); }
.pz .btn:disabled { opacity: .5; cursor: not-allowed; }
.pz .btn.small { height: 30px; padding: 0 10px; font-size: 13px; }
.pz .segmented { display: inline-flex; padding: 3px; gap: 2px; background: var(--panel-2); border: 1px solid var(--line); border-radius: 9px; }
.pz .segmented button { height: 28px; padding: 0 11px; border: 0; border-radius: 6px; background: none; color: var(--ink-2); font-weight: 500; font-size: 13.5px; }
.pz .segmented button[aria-pressed="true"] { background: var(--panel); color: var(--ink); box-shadow: 0 1px 2px rgba(0, 0, 0, .08), 0 0 0 1px var(--line); }
/* ── Panels ──────────────────────── */
.pz .panel { background: var(--panel); border: 1px solid var(--line); border-radius: var(--r-lg); min-width: 0; }
.pz .panel-head { display: flex; align-items: baseline; gap: 12px; padding: 16px 18px 0; }
.pz .panel-head h2 { font-size: 15.5px; font-weight: 600; }
.pz .panel-head .aside { margin-left: auto; color: var(--ink-3); font-size: 13px; white-space: nowrap; }
.pz .panel-head .aside a { color: var(--ink-2); font-weight: 500; }
.pz .panel-body { padding: 14px 18px 18px; }
.pz .panel-flush { padding: 8px 0 0; }
.pz .row { display: grid; gap: 16px; margin-bottom: 16px; }
.pz .row.hero { grid-template-columns: minmax(0, 1.75fr) minmax(300px, 1fr); }
.pz .row.two { grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr); }
.pz .row.half { grid-template-columns: repeat(2, minmax(0, 1fr)); }
/* ── The one loud thing: where the food went ── */
.pz .outcome { padding: 20px 22px 22px; }
.pz .outcome-top { display: flex; flex-wrap: wrap; gap: 20px 40px; align-items: flex-start; justify-content: space-between; }
.pz .outcome-top > div:first-child { flex: 1 1 240px; max-width: 320px; }
.pz .outcome h2 { font-size: 15.5px; font-weight: 600; }
.pz .outcome .sub { color: var(--ink-3); font-size: 13px; margin-top: 2px; }
.pz .hero-figure { font-size: 56px; line-height: 1; font-weight: 700; letter-spacing: -.03em; margin-top: 14px; }
.pz .hero-figure span { font-size: 28px; font-weight: 600; margin-left: 2px; }
.pz .delta { display: inline-flex; align-items: center; gap: 4px; font-size: 13.5px; font-weight: 500; margin-top: 8px; }
.pz .delta.good { color: var(--good); }
.pz .delta.bad { color: var(--bad); }
.pz .delta svg.i { width: 15px; height: 15px; }
.pz .delta-note { color: var(--ink-3); font-weight: 400; }
.pz .trend { width: min(340px, 100%); }
.pz .trend svg { display: block; width: 100%; height: 108px; overflow: visible; }
.pz .trend-cap { display: flex; justify-content: space-between; color: var(--ink-3); font-size: 12px; margin-top: 4px; }
.pz .ribbon { display: flex; gap: 2px; height: 36px; margin-top: 26px; animation: reveal 1s cubic-bezier(.16, 1, .3, 1) both; }
.pz .ribbon .seg { height: 100%; }
.pz .ribbon .seg:first-child { border-radius: 4px 0 0 4px; }
.pz .ribbon .seg:last-child { border-radius: 0 4px 4px 0; }
.pz .seg.used, .pz .sw.used { background: var(--used); }
.pz .seg.wasted, .pz .sw.wasted { background: var(--wasted); }
.pz .seg.unknown, .pz .sw.unknown { background: repeating-linear-gradient(45deg, var(--unknown) 0 3px, var(--unknown-hatch) 3px 7px); }
@keyframes reveal { from { clip-path: inset(0 100% 0 0); } to { clip-path: inset(0 0 0 0); } }
.pz .ribbon-key { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; margin-top: 14px; }
.pz .key { display: grid; grid-template-columns: 12px 1fr; column-gap: 9px; align-items: baseline; }
.pz .sw { width: 12px; height: 12px; border-radius: 3px; display: inline-block; transform: translateY(1px); }
.pz .key b { font-size: 22px; font-weight: 700; letter-spacing: -.01em; }
.pz .key span { color: var(--ink-2); font-size: 13.5px; }
.pz .key p { grid-column: 2; margin: 2px 0 0; color: var(--ink-3); font-size: 12.5px; }
/* ── Needs you ───────────────────── */
.pz .todo { list-style: none; margin: 0; padding: 4px 0 6px; }
.pz .todo li { border-top: 1px solid var(--line); }
.pz .todo li:first-child { border-top: 0; }
.pz .todo a { display: grid; grid-template-columns: 34px 1fr auto; gap: 12px; align-items: center; padding: 12px 18px; text-decoration: none; }
.pz .todo a:hover { background: var(--panel-2); }
.pz .todo-icon { width: 34px; height: 34px; border-radius: 9px; display: grid; place-items: center; background: var(--panel-2); color: var(--ink-2); }
.pz .todo-icon.warn { background: var(--warn-wash); color: var(--warn); }
.pz .todo-icon.bad { background: var(--bad-wash); color: var(--bad); }
.pz .todo-icon.good { background: var(--brand-wash); color: var(--brand); }
.pz .todo b { display: block; font-weight: 600; }
.pz .todo small { color: var(--ink-3); font-size: 13px; }
.pz .todo .go { color: var(--ink-3); }
/* ── Metric strip (one panel, not four cards) ── */
.pz .strip { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); margin-bottom: 16px; }
.pz .metric { padding: 16px 20px; border-left: 1px solid var(--line); text-decoration: none; display: block; }
.pz .metric:first-child { border-left: 0; }
.pz .metric:hover { background: var(--panel-2); }
.pz .metric:first-child:hover { border-radius: var(--r-lg) 0 0 var(--r-lg); }
.pz .metric:last-child:hover { border-radius: 0 var(--r-lg) var(--r-lg) 0; }
.pz .metric-label { color: var(--ink-2); font-size: 13.5px; }
.pz .metric-value { font-size: 26px; font-weight: 700; letter-spacing: -.015em; margin-top: 4px; line-height: 1.1; }
.pz .metric-value.muted { color: var(--ink-3); font-weight: 600; font-size: 20px; }
.pz .metric-note { font-size: 12.5px; color: var(--ink-3); margin-top: 4px; }
.pz .metric-note .up { color: var(--good); font-weight: 500; }
.pz .metric-note .down { color: var(--bad); font-weight: 500; }
/* ── Charts ──────────────────────── */
.pz .chart { position: relative; }
.pz .chart svg { display: block; width: 100%; overflow: visible; }
.pz .chart .grid line { stroke: var(--line); stroke-width: 1; }
.pz .chart .axis text, .pz .chart text.axis { fill: var(--ink-3); font-size: 11.5px; font-family: var(--font); }
.pz .chart .val { fill: var(--ink-2); font-size: 11.5px; font-weight: 600; font-family: var(--font); }
.pz .chart .hit { fill: transparent; cursor: default; }
.pz .chart .hit:hover + .mark, .pz .chart .mark.on { filter: brightness(.9); }
.pz .bar-ink { fill: var(--ink-2); }
.pz .legend { display: flex; gap: 16px; flex-wrap: wrap; color: var(--ink-2); font-size: 13px; margin-bottom: 8px; }
.pz .legend span { display: inline-flex; align-items: center; gap: 7px; }
.pz .tip {
  position: fixed; z-index: 70; pointer-events: none; background: var(--ink); color: var(--panel);
  padding: 7px 10px; border-radius: 7px; font-size: 12.5px; line-height: 1.45; box-shadow: 0 6px 20px -8px rgba(0, 0, 0, .5);
  opacity: 0; transform: translateY(4px); transition: opacity .12s ease, transform .12s ease; max-width: 240px;
}
.pz .tip.on { opacity: 1; transform: none; }
.pz .tip b { font-weight: 600; }
.pz .hbar { display: grid; grid-template-columns: minmax(120px, 170px) 1fr 44px; gap: 12px; align-items: center; padding: 7px 0; }
.pz .hbar-track { height: 12px; }
.pz .hbar-fill { height: 12px; border-radius: 0 4px 4px 0; background: var(--wasted); }
.pz .hbar b { text-align: right; font-weight: 600; }
/* ── Tables ──────────────────────── */
.pz .table-wrap { overflow-x: auto; }
.pz table { width: 100%; border-collapse: collapse; }
.pz th {
  text-align: left; font-weight: 500; font-size: 13px; color: var(--ink-3);
  padding: 9px 18px; border-bottom: 1px solid var(--line); white-space: nowrap; background: var(--panel);
}
.pz td { padding: 11px 18px; border-bottom: 1px solid var(--line); vertical-align: middle; }
.pz tbody tr:last-child td { border-bottom: 0; }
.pz tbody tr:hover td { background: var(--panel-2); }
.pz td.r, .pz th.r { text-align: right; font-variant-numeric: tabular-nums; }
.pz .cell-strong { font-weight: 600; }
.pz .cell-sub { display: block; color: var(--ink-3); font-size: 13px; }
.pz .row-btn { all: unset; cursor: pointer; font-weight: 600; }
.pz .row-btn:focus-visible { outline: 2px solid var(--focus); outline-offset: 2px; border-radius: 3px; }
.pz tr.clickable { cursor: pointer; }
.pz .person { display: flex; align-items: center; gap: 11px; min-width: 220px; }
.pz .avatar { width: 30px; height: 30px; border-radius: 50%; display: grid; place-items: center; font-size: 12px; font-weight: 600; color: #fff; flex: none; }
.pz .status { display: inline-flex; align-items: center; gap: 6px; font-size: 13.5px; font-weight: 500; white-space: nowrap; }
.pz .status svg.i { width: 15px; height: 15px; }
.pz .status.good { color: var(--good); }
.pz .status.warn { color: var(--warn); }
.pz .status.bad { color: var(--bad); }
.pz .status.muted { color: var(--ink-3); }
.pz .badge { font-size: 12px; font-weight: 600; padding: 1px 7px; border-radius: 99px; background: var(--ink); color: var(--panel); font-variant-numeric: tabular-nums; }
.pz .chip { display: inline-flex; align-items: center; height: 24px; padding: 0 9px; border-radius: 99px; background: var(--panel-2); border: 1px solid var(--line); font-size: 12.5px; color: var(--ink-2); white-space: nowrap; }
.pz .toolbar { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; margin-bottom: 14px; }
.pz .field-wrap { position: relative; width: min(320px, 100%); }
.pz .pager { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 10px; padding: 12px 18px; border-top: 1px solid var(--line); color: var(--ink-3); font-size: 13px; }
/* ── Provenance bar ──────────────── */
.pz .prov { display: flex; gap: 2px; height: 10px; min-width: 180px; }
.pz .prov i { height: 100%; }
.pz .prov i:first-child { border-radius: 3px 0 0 3px; }
.pz .prov i:last-child { border-radius: 0 3px 3px 0; }
.pz .p-known { background: var(--ink-2); }
.pz .p-guessed { background: var(--line-2); }
.pz .p-missing { background: repeating-linear-gradient(45deg, var(--unknown) 0 3px, var(--unknown-hatch) 3px 7px); }
/* ── Inbox (review + conversations) ── */
.pz .inbox { display: grid; grid-template-columns: minmax(300px, 380px) minmax(0, 1fr); min-height: 560px; overflow: hidden; }
.pz .inbox-list { border-right: 1px solid var(--line); display: flex; flex-direction: column; min-width: 0; }
.pz .inbox-filters { display: flex; flex-wrap: wrap; gap: 8px; padding: 12px; border-bottom: 1px solid var(--line); }
.pz .inbox-items { list-style: none; margin: 0; padding: 0; overflow-y: auto; max-height: 640px; }
.pz .inbox-item { display: grid; grid-template-columns: minmax(0, 1fr); gap: 3px; width: 100%; text-align: left; padding: 12px 14px 12px 16px; border: 0; border-bottom: 1px solid var(--line); background: none; position: relative; }
.pz .inbox-item:hover { background: var(--panel-2); }
.pz .inbox-item[aria-current="true"] { background: var(--brand-wash); }
.pz .inbox-item .line1 { display: flex; gap: 8px; align-items: center; }
.pz .inbox-item b { font-weight: 600; flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.pz .inbox-item .when { color: var(--ink-3); font-size: 12.5px; white-space: nowrap; }
.pz .inbox-item p { margin: 0; color: var(--ink-2); font-size: 13px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.pz .unread-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--focus); flex: none; }
.pz .inbox-detail { padding: 22px 26px; display: grid; gap: 20px; align-content: start; min-width: 0; }
.pz .detail-head h2 { font-size: 20px; font-weight: 700; line-height: 1.25; }
.pz .detail-head p { margin: 4px 0 0; color: var(--ink-3); font-size: 13.5px; }
.pz .quote { margin: 0; padding: 12px 14px; background: var(--panel-2); border-radius: var(--r); color: var(--ink); }
.pz .kv { display: grid; grid-template-columns: max-content 1fr; gap: 6px 18px; margin: 0; font-size: 14px; }
.pz .kv dt { color: var(--ink-3); }
.pz .kv dd { margin: 0; }
.pz .field { display: grid; gap: 6px; }
.pz .field > label, .pz .field > .label { font-weight: 600; font-size: 13.5px; }
.pz .field textarea { border: 1px solid var(--line-2); border-radius: var(--r); background: var(--panel); padding: 9px 11px; min-height: 90px; resize: vertical; }
.pz .hint { color: var(--ink-3); font-size: 12.5px; }
.pz .radio-row { display: flex; flex-wrap: wrap; gap: 8px; }
.pz .radio-row label { display: inline-flex; align-items: center; gap: 8px; height: 36px; padding: 0 12px; border: 1px solid var(--line-2); border-radius: var(--r); cursor: pointer; font-weight: 500; }
.pz .radio-row input { accent-color: var(--brand); margin: 0; }
.pz .radio-row label:has(input:checked) { border-color: var(--brand); background: var(--brand-wash); }
.pz .radio-row label:has(input:focus-visible) { outline: 2px solid var(--focus); outline-offset: 2px; }
.pz .changes { border: 1px solid var(--line); border-radius: var(--r); padding: 12px 14px; font-size: 13.5px; display: grid; gap: 5px; }
.pz .changes h3 { font-size: 13.5px; font-weight: 600; margin-bottom: 2px; }
.pz .changes div { display: flex; gap: 10px; }
.pz .changes dt, .pz .changes .k { color: var(--ink-3); min-width: 120px; }
.pz .changes .same { color: var(--good); }
.pz .detail-actions { display: flex; gap: 8px; justify-content: flex-end; align-items: center; flex-wrap: wrap; }
.pz .detail-actions .hint { margin-right: auto; }
.pz .toast {
  position: fixed; left: 50%; bottom: 24px; transform: translate(-50%, 16px); z-index: 80; opacity: 0;
  background: var(--ink); color: var(--panel); padding: 10px 16px; border-radius: var(--r); font-weight: 500;
  display: flex; gap: 8px; align-items: center; transition: opacity .18s ease, transform .18s ease;
}
.pz .toast.on { opacity: 1; transform: translate(-50%, 0); }
.pz .chat { display: grid; gap: 10px; }
.pz .msg { max-width: 78%; padding: 9px 12px; border-radius: 12px; font-size: 14px; }
.pz .msg.user { background: var(--panel-2); justify-self: start; border-bottom-left-radius: 4px; }
.pz .msg.bot { background: var(--brand-wash); justify-self: end; border-bottom-right-radius: 4px; }
/* ── Drawer ──────────────────────── */
.pz .scrim { position: fixed; inset: 0; z-index: 40; background: rgba(12, 16, 14, .38); opacity: 0; transition: opacity .2s ease; }
.pz .scrim.on { opacity: 1; }
.pz .drawer {
  position: fixed; z-index: 41; top: 0; right: 0; bottom: 0; width: min(480px, 100%);
  background: var(--panel); border-left: 1px solid var(--line); display: flex; flex-direction: column;
  transform: translateX(100%); transition: transform .26s cubic-bezier(.2, .8, .2, 1);
}
.pz .drawer.on { transform: none; }
.pz .drawer-head { display: flex; gap: 12px; align-items: center; padding: 16px 18px; border-bottom: 1px solid var(--line); }
.pz .drawer-head h2 { font-size: 18px; font-weight: 700; }
.pz .drawer-head p { margin: 1px 0 0; color: var(--ink-3); font-size: 13px; }
.pz .drawer-head .icon-btn { margin-left: auto; }
.pz .drawer-body { flex: 1; overflow-y: auto; padding: 18px; display: grid; gap: 20px; align-content: start; }
.pz .drawer-body h3 { font-size: 14px; font-weight: 600; margin-bottom: 8px; }
.pz .mini-stats { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1px; background: var(--line); border: 1px solid var(--line); border-radius: var(--r); overflow: hidden; }
.pz .mini-stats div { background: var(--panel); padding: 11px 13px; }
.pz .mini-stats b { display: block; font-size: 20px; font-weight: 700; }
.pz .mini-stats span { color: var(--ink-3); font-size: 13px; }
.pz .list { list-style: none; margin: 0; padding: 0; border: 1px solid var(--line); border-radius: var(--r); }
.pz .list li { display: flex; gap: 10px; align-items: center; padding: 9px 12px; border-top: 1px solid var(--line); }
.pz .list li:first-child { border-top: 0; }
.pz .list .right { margin-left: auto; color: var(--ink-3); font-size: 13px; white-space: nowrap; }
.pz .confirm { border: 1px solid var(--warn); background: var(--warn-wash); border-radius: var(--r); padding: 12px 14px; display: grid; gap: 10px; }
.pz .confirm p { margin: 0; }
.pz .confirm div { display: flex; gap: 8px; flex-wrap: wrap; }
.pz .callout { display: flex; gap: 12px; align-items: flex-start; padding: 14px 16px; border-radius: var(--r-lg); background: var(--warn-wash); border: 1px solid color-mix(in srgb, var(--warn) 35%, transparent); margin-bottom: 16px; }
.pz .callout svg.i { color: var(--warn); margin-top: 2px; }
.pz .callout p { margin: 2px 0 0; color: var(--ink-2); }
.pz code { font-family: ui-monospace, 'Cascadia Mono', Consolas, monospace; font-size: 12.5px; background: var(--panel-2); border: 1px solid var(--line); border-radius: 4px; padding: 1px 5px; }
.pz details.more summary { cursor: pointer; padding: 14px 18px; font-weight: 600; list-style: none; display: flex; align-items: center; gap: 8px; border-top: 1px solid var(--line); }
.pz details.more summary::-webkit-details-marker { display: none; }
.pz details.more[open] summary svg.i { transform: rotate(90deg); }
.pz details.more summary svg.i { transition: transform .15s ease; }
.pz .empty { padding: 40px 20px; text-align: center; color: var(--ink-2); }
.pz .empty b { display: block; color: var(--ink); font-size: 15px; margin-bottom: 4px; }
/* ── Command palette ─────────────── */
.pz .palette { position: fixed; z-index: 90; inset: 0; display: grid; place-items: start center; padding-top: 12vh; background: rgba(12, 16, 14, .38); }
.pz .palette[hidden] { display: none; }
.pz .palette-box { width: min(560px, calc(100% - 32px)); background: var(--panel); border: 1px solid var(--line); border-radius: var(--r-lg); box-shadow: 0 24px 60px -20px rgba(0, 0, 0, .45); overflow: hidden; }
.pz .palette-box input { width: 100%; height: 52px; border: 0; border-bottom: 1px solid var(--line); background: none; padding: 0 18px; font-size: 16px; }
.pz .palette-box input:focus { box-shadow: none; }
.pz .palette-box ul { list-style: none; margin: 0; padding: 6px; max-height: 340px; overflow-y: auto; }
.pz .palette-box li a { display: flex; gap: 10px; align-items: center; padding: 9px 12px; border-radius: var(--r); text-decoration: none; }
.pz .palette-box li a:hover, .pz .palette-box li a.active { background: var(--panel-2); }
.pz .palette-box li small { margin-left: auto; color: var(--ink-3); }
/* Bars rise from their baseline, one column at a time, when a page opens or its
   range changes. Stacked segments move together as one column. */
@keyframes rise { from { transform: scaleY(0); } }
@keyframes stretch { from { transform: scaleX(0); } }
.pz .chart.grow .col { transform-box: fill-box; transform-origin: 50% 100%; animation: rise .75s cubic-bezier(.16, 1, .3, 1) both; animation-delay: calc(var(--i) * 70ms); }
.pz .hbar-fill, .pz .share-fill { transform-origin: left; animation: stretch .8s cubic-bezier(.16, 1, .3, 1) both; animation-delay: calc(var(--i) * 60ms); }
/* Theme switch: View Transitions draws the circular wipe; the default
   crossfade on the snapshots is turned off so only the circle moves. */
::view-transition-old(root), ::view-transition-new(root) { animation: none; mix-blend-mode: normal; }
html.theme-fade, html.theme-fade *, html.theme-fade *::before, html.theme-fade *::after {
  transition: background-color .35s ease, border-color .35s ease, color .35s ease, fill .35s ease, stroke .35s ease !important;
}
@media (prefers-reduced-motion: reduce) {
  .pz *, .pz *::before, .pz *::after { animation: none !important; transition: none !important; }
}
/* ── Responsive ──────────────────── */
@media (max-width: 1100px) {
  .pz .row.hero, .pz .row.two { grid-template-columns: minmax(0, 1fr); }
  .pz .strip { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .pz .metric:nth-child(3) { border-left: 0; }
  .pz .metric:nth-child(n+3) { border-top: 1px solid var(--line); }
}
@media (max-width: 860px) {
  .pz .pz-shell { grid-template-columns: minmax(0, 1fr); }
  .pz .side { position: fixed; z-index: 50; left: 0; top: 0; bottom: 0; width: min(280px, 86vw); transform: translateX(-100%); visibility: hidden; transition: transform .24s cubic-bezier(.2, .8, .2, 1), visibility 0s .24s; }
  .pz .side.on { transform: none; visibility: visible; transition: transform .24s cubic-bezier(.2, .8, .2, 1); box-shadow: 20px 0 40px -20px rgba(0, 0, 0, .4); }
  .pz .menu-btn { display: grid; }
  .pz .top { padding: 0 16px; }
  .pz .page { padding: 20px 16px 56px; }
  .pz .row.half { grid-template-columns: minmax(0, 1fr); }
  .pz .inbox { grid-template-columns: minmax(0, 1fr); }
  .pz .inbox-list { border-right: 0; border-bottom: 1px solid var(--line); }
  .pz .inbox-items { max-height: 300px; }
  .pz .search-global kbd { display: none; }
}
@media (max-width: 560px) {
  .pz .ribbon-key { grid-template-columns: minmax(0, 1fr); }
  .pz .strip { grid-template-columns: minmax(0, 1fr); }
  .pz .metric { border-left: 0 !important; border-top: 1px solid var(--line); }
  .pz .metric:first-child { border-top: 0; }
  .pz .sample-note { display: none; }
  .pz .hero-figure { font-size: 48px; }
  .pz .tools { width: 100%; }
}

/* ── React workspace additions ───────────────── */
html[data-admin-theme="light"] body { background: #f3f4f1; }
html[data-admin-theme="dark"] body { background: #111613; }
.pz { min-height: 100vh; }
.pz a { text-decoration: none; }
.pz a:hover { color: inherit; text-decoration: none; }
.pz .panel-head .aside a, .pz .link { text-decoration: underline; text-underline-offset: 3px; }
.pz button:disabled { cursor: not-allowed; }
.pz .preview-bar { padding: 6px 28px; font-size: 12.5px; color: var(--warn); background: var(--warn-wash); border-bottom: 1px solid var(--line); }

.pz .state { display: grid; place-items: center; gap: 10px; padding: 56px 20px; color: var(--ink-2); text-align: center; }
.pz .spinner { width: 26px; height: 26px; border-radius: 50%; border: 2.5px solid var(--line-2); border-top-color: var(--brand); animation: pz-spin .8s linear infinite; }
@keyframes pz-spin { to { transform: rotate(360deg); } }
.pz .state.error { color: var(--bad); }
.pz .state b { display: block; color: var(--ink); font-size: 15px; }
.pz .notice { display: flex; gap: 12px; align-items: flex-start; padding: 12px 16px; border-radius: var(--r-lg); background: var(--panel); border: 1px solid var(--line); margin-bottom: 16px; color: var(--ink-2); }
.pz .notice svg.i { color: var(--ink-3); margin-top: 2px; }
.pz .notice b { color: var(--ink); display: block; }
.pz .notice.warn { background: var(--warn-wash); border-color: color-mix(in srgb, var(--warn) 35%, transparent); }
.pz .notice.warn svg.i { color: var(--warn); }
.pz .is-busy { opacity: .6; transition: opacity .15s ease; }

.pz .drawer.closing { transform: translateX(100%); }
.pz .scrim.closing { opacity: 0; }

.pz .pill { display: inline-flex; align-items: center; height: 24px; padding: 0 9px; border-radius: 99px; background: var(--panel-2); border: 1px solid var(--line); font-size: 12.5px; color: var(--ink-2); }
.pz .pill-row { display: flex; flex-wrap: wrap; gap: 6px; }
.pz .detail-section h3 { font-size: 13.5px; font-weight: 600; margin-bottom: 8px; }
.pz .detail-section + .detail-section { margin-top: 4px; }
.pz .unsure { padding: 10px 12px; border: 1px solid var(--line); border-radius: var(--r); display: grid; gap: 6px; }
.pz .unsure + .unsure { margin-top: 8px; }
.pz .error-text { color: var(--bad); font-size: 13.5px; margin: 0; }
.pz .recipe-thumb { width: 40px; height: 40px; border-radius: 8px; object-fit: cover; background: var(--panel-2); flex: none; }
.pz .recipe-thumb.blank { display: grid; place-items: center; color: var(--ink-3); }
.pz .avatar img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; }
.pz .log-detail { color: var(--ink-2); max-width: 70ch; }

/* Resets for class names global.css also uses (it styles the sign-in page). */
.pz .toolbar { padding: 0; justify-content: flex-start; border-bottom: 0; }
.pz .pill { font-weight: 500; cursor: default; }
.pz .page:focus, .pz .page:focus-visible { outline: none; }

/* Food outcomes carries five totals on wide screens; narrower ones keep the
   two-column and one-column strips defined above. */
@media (min-width: 1101px) {
  .pz .strip.five { grid-template-columns: repeat(5, minmax(0, 1fr)); }
}

```

## admin/src/styles/global.css

```css
/* Design tokens, lifted verbatim from the Claude Design prototype. Every
   colour in the console resolves to one of these — a hex literal inside a
   component means a token is missing, not that the token was inconvenient. */
:root {
  --green-darkest: #143324;
  --green-deep: #2c5c39;
  --green-primary: #4c8c5a;
  --green-mid: #7ba37f;
  --green-soft: #8fbe9b;
  --green-pale: #c8dcc9;
  --green-chip-bg: #e1ede3;

  --sidebar-text: #e8efe7;
  --sidebar-muted: #8fa894;
  --sidebar-idle: #a9bfae;
  --sidebar-section: #6f8a76;
  --sidebar-hairline: rgba(255, 255, 255, 0.13);
  --nav-active-fill: rgba(255, 255, 255, 0.14);
  --nav-hover-fill: rgba(255, 255, 255, 0.08);

  --canvas: #f2efe7;
  --card: #ffffff;
  --input-fill: #fafaf5;
  --subtle-fill: #f7f6ef;
  --neutral-fill: #e9eae0;
  --chip-fill: #edefe6;
  --chip-fill-border: #dde2d8;
  --chip-neutral: #ecede4;
  --track: #e9ebe2;
  --border: #e4e3d8;
  --border-strong: #d8d9ce;
  --divider: #f0f0e7;
  --divider-strong: #ebebe1;
  --scrollbar: #d3d6cb;
  --row-hover: #f6f7f1;
  --button-hover: #edeee5;

  --ink: #1a1b22;
  --ink-2: #3a3b44;
  --ink-muted: #6c6f7a;
  --ink-faint: #8a8d96;

  --amber: #de9e58;
  --amber-text: #8a5f22;
  --amber-chip-bg: #f7ecdc;
  --clay: #c0503f;
  --clay-chip-bg: #f8e7e3;
  --destructive-bg: #fcf3f1;
  --destructive-border: #e8c4bc;
  --destructive-hover: #f6e3de;
  --dashed-accent: #a9c7af;
  --placeholder-stripe: #dde2d8;
  --placeholder-label: #7c8a79;

  --scrim: rgba(20, 51, 36, 0.38);
  --shadow-modal: 0 32px 64px rgba(20, 51, 36, 0.26);

  --font: "DM Sans", system-ui, sans-serif;
  --mono: ui-monospace, Menlo, monospace;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: var(--canvas);
  font-family: var(--font);
  color: var(--ink);
  -webkit-font-smoothing: antialiased;
}

a {
  color: var(--green-primary);
  text-decoration: none;
}
a:hover {
  color: var(--green-deep);
  text-decoration: underline;
}

input,
select,
textarea,
button {
  font-family: inherit;
}

::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
::-webkit-scrollbar-thumb {
  background: var(--scrollbar);
  border-radius: 6px;
}

/* ------------------------------------------------------------------ shell */

.shell {
  display: flex;
  min-height: 100vh;
  background: var(--canvas);
}

.main {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.page-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  padding: 30px 36px 22px;
  border-bottom: 1px solid var(--border);
  background: var(--canvas);
  position: sticky;
  top: 0;
  z-index: 20;
}
.page-title {
  margin: 0;
  font-size: 30px;
  font-weight: 700;
  letter-spacing: -0.032em;
  color: var(--ink);
}
.page-sub {
  margin: 0;
  font-size: 13.5px;
  color: var(--ink-muted);
  max-width: 640px;
  text-wrap: pretty;
}
.page-body {
  flex: 1;
  padding: 28px 36px 56px;
}


/* ------------------------------------------------------------------- rail */

/* A real flex item, not an overlay. It was fixed while the rail opened on
   hover, because a layout that reflowed every time the pointer crossed the left
   edge would have been unusable. Now that it only moves when the toggle is
   pressed, sticky is right: the page gets the width back when the rail closes
   instead of leaving a dead strip, and nothing is ever covered. */
.rail {
  position: sticky;
  top: 0;
  height: 100vh;
  flex: 0 0 auto;
  z-index: 40;
  background: var(--green-darkest);
  color: var(--sidebar-text);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-right: 1px solid rgba(255, 255, 255, 0.06);
}

.rail-head {
  display: flex;
  align-items: center;
  gap: 10px;
  height: 62px;
  flex: 0 0 auto;
  padding: 0 14px;
  border-bottom: 1px solid var(--sidebar-hairline);
  white-space: nowrap;
}
/* The open/close control. Deliberately the first thing in the rail and always
   in the same place, open or closed — a toggle that moves is a toggle people
   stop trusting. */
.rail-toggle {
  margin-left: auto;
  border: none;
  background: transparent;
  color: var(--sidebar-muted);
  padding: 9px;
  border-radius: 9px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
}
.rail-toggle:hover {
  color: #ffffff;
  background: var(--nav-hover-fill);
}
.rail-toggle:focus-visible {
  outline: 2px solid var(--green-primary);
  outline-offset: -2px;
}
.rail-logo {
  width: 30px;
  height: 30px;
  border-radius: 8px;
  display: block;
  flex: 0 0 auto;
}
.rail-brand {
  display: flex;
  align-items: baseline;
  gap: 6px;
  min-width: 0;
}

/* The wordmark reads as one thing on one line: the product name carries the
   weight and "Admin" trails it, lighter, as the qualifier it is. Both classes
   had no rules at all until now, which is why this had been rendering as two
   plain stacked lines. */
.sidebar-org {
  font-size: 17px;
  font-weight: 600;
  letter-spacing: -0.012em;
  line-height: 1.1;
}
.sidebar-eyebrow {
  font-size: 15px;
  font-weight: 400;
  line-height: 1.1;
  color: var(--sidebar-muted);
}

.rail-nav {
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  /* The page's scrollbar is styled for the light canvas — a pale thumb, which
     renders as a bright strip down the dark rail. It also takes ~10px of width,
     which is what pushed every collapsed icon left of centre. The rail holds
     eight fixed items and only scrolls on a very short window, so it hides the
     bar and keeps the scrolling. */
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.rail-nav::-webkit-scrollbar {
  width: 0;
  height: 0;
}
.rail-group {
  font-size: 12px;
  letter-spacing: 0.11em;
  text-transform: uppercase;
  color: var(--sidebar-section);
  padding: 10px 8px 5px;
  height: 30px;
  white-space: nowrap;
  overflow: hidden;
}
.rail-separator {
  height: 1px;
  background: var(--sidebar-hairline);
  margin: 6px 4px;
  flex: 0 0 auto;
}

.rail-item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  height: 42px;
  padding: 0 14px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  color: var(--sidebar-idle);
  background: transparent;
  border: none;
  text-decoration: none;
  white-space: nowrap;
  flex: 0 0 auto;
  width: 100%;
}
.rail-item:hover {
  background: var(--nav-hover-fill);
  color: #ffffff;
  text-decoration: none;
}
.rail-item.active {
  background: var(--nav-active-fill);
  color: #ffffff;
}
/* The design's 3px left bar, kept — but as an inset pseudo-element so it does
   not shift the icon by three pixels when a row becomes active. */
.rail-item.active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  bottom: 8px;
  width: 3px;
  border-radius: 0 3px 3px 0;
  background: var(--green-primary);
}
.rail-item:focus-visible {
  outline: 2px solid var(--green-primary);
  outline-offset: -2px;
}
.rail-icon {
  flex: 0 0 auto;
}

.rail-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  flex: 1;
  min-width: 0;
}
.rail-label-text {
  overflow: hidden;
  text-overflow: ellipsis;
}
.rail-chevron {
  color: var(--sidebar-section);
  flex: 0 0 auto;
}
/* Collapsed stand-in for a count. */
/* Anchored to the icon so it reads as a badge on this row, not a loose dot
   sitting in the space the centred glyph left behind. The ring is the rail's
   own background, which is what keeps the dot legible where it overlaps the
   icon's stroke. */
.rail-iconwrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  /* Fixed 20px so every row — glyph, avatar, sign-out — shares one axis, and
     that axis does not move when the rail width animates. */
  width: 20px;
  height: 20px;
}
.rail-pip {
  position: absolute;
  top: -2px;
  right: -3px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--green-primary);
  box-shadow: 0 0 0 2px var(--green-darkest);
}

.rail-foot {
  flex: 0 0 auto;
  padding: 10px;
  border-top: 1px solid var(--sidebar-hairline);
  display: flex;
  align-items: center;
  gap: 4px;
}
/* Collapsed the footer is just the avatar — sign out is hidden rather than
   stacked, so a mis-click cannot end the session from a rail of bare glyphs. */
/* Identity, not a control — no hover highlight, no pointer. */
.rail-account {
  text-align: left;
  height: 44px;
  cursor: default;
  /* Takes the leftover width so the sign-out button lands at the right edge.
     min-width:0 is what lets a long username ellipsis instead of shoving the
     button off the end. */
  flex: 1;
  width: auto;
  min-width: 0;
}
.rail-account:hover {
  background: transparent;
  color: var(--sidebar-idle);
}
.rail-account-name {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: var(--sidebar-text);
  line-height: 1.25;
}
.rail-account .sidebar-role {
  display: block;
  line-height: 1.25;
}
/* Square icon button beside the profile, the way the footer read before the
   rail existed. It keeps its own width rather than stretching with the row. */
.rail-signout {
  color: var(--sidebar-muted);
  width: 40px;
  flex: 0 0 auto;
  justify-content: center;
  padding: 0;
}
.rail-signout:hover {
  color: #ffffff;
}
.rail-avatar {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: var(--green-deep);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11.5px;
  font-weight: 700;
  flex: 0 0 auto;
}
.rail-avatar.big {
  width: 28px;
  height: 28px;
  border-radius: 7px;
  font-size: 11.5px;
}

/* ----------------------------------------------------------------- pieces */

.card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 18px;
}
.card-title {
  font-size: 15px;
  font-weight: 600;
  color: var(--ink);
}
.card-sub {
  font-size: 12.5px;
  color: var(--ink-muted);
}
.eyebrow {
  font-size: 11.5px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--ink-muted);
  font-weight: 600;
}
.section-eyebrow {
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ink-muted);
  font-weight: 600;
}

.btn {
  border-radius: 8px;
  padding: 9px 15px;
  font-size: 12.5px;
  font-weight: 600;
  cursor: pointer;
}
.btn-secondary {
  border: 1px solid var(--border-strong);
  background: var(--card);
  color: var(--ink-2);
}
.btn-secondary:hover {
  background: var(--button-hover);
}
.btn-primary {
  border: none;
  background: var(--green-primary);
  color: #ffffff;
}
.btn-primary:hover {
  background: var(--green-deep);
}
.btn-destructive {
  border: 1px solid var(--destructive-border);
  background: var(--destructive-bg);
  color: var(--clay);
}
.btn-destructive:hover {
  background: var(--destructive-hover);
}
.btn:disabled,
.btn-small:disabled {
  opacity: 0.55;
  cursor: default;
}
.btn-small {
  border: 1px solid var(--border-strong);
  background: var(--card);
  color: var(--ink-2);
  border-radius: 7px;
  padding: 5px 12px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
}
.btn-small:hover {
  background: var(--button-hover);
}

.range-control {
  display: flex;
  background: var(--neutral-fill);
  border: 1px solid var(--border-strong);
  border-radius: 8px;
  padding: 2px;
  gap: 2px;
}
.range-control button {
  border: none;
  cursor: pointer;
  padding: 6px 13px;
  border-radius: 6px;
  font-size: 12.5px;
  font-weight: 600;
  background: transparent;
  color: var(--ink-muted);
}
.range-control button.on {
  background: var(--card);
  color: var(--green-darkest);
}

.field-label {
  font-size: 12px;
  font-weight: 600;
  color: var(--ink-2);
}
.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.input {
  padding: 10px 12px;
  border: 1px solid var(--border-strong);
  border-radius: 8px;
  font-size: 13px;
  background: var(--input-fill);
  color: var(--ink);
  outline: none;
}
.input:focus {
  border-color: var(--green-primary);
}
textarea.input {
  resize: vertical;
}
.search-input {
  padding: 9px 13px;
  border: 1px solid var(--border-strong);
  border-radius: 8px;
  font-size: 13px;
  background: var(--input-fill);
  color: var(--ink);
  outline: none;
  flex: 1;
  max-width: 340px;
}
.search-input:focus {
  border-color: var(--green-primary);
}

.pill {
  border-radius: 20px;
  padding: 6px 14px;
  font-size: 12.5px;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid var(--border-strong);
  background: var(--card);
  color: var(--ink-2);
}
.pill.on {
  background: var(--green-darkest);
  border-color: var(--green-darkest);
  color: var(--canvas);
}

.chip {
  font-size: 11.5px;
  font-weight: 600;
  padding: 4px 11px;
  border-radius: 20px;
}

.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 22px;
  border-bottom: 1px solid var(--divider-strong);
}
.table-head {
  padding: 11px 22px;
  background: var(--subtle-fill);
  border-bottom: 1px solid var(--divider-strong);
  font-size: 11px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ink-muted);
  font-weight: 600;
  display: grid;
  gap: 16px;
}
.table-row {
  display: grid;
  gap: 16px;
  align-items: center;
  padding: 13px 22px;
  border-bottom: 1px solid var(--divider);
}
.table-row.clickable {
  cursor: pointer;
}
.table-row:hover {
  background: var(--row-hover);
}
.table-foot {
  padding: 14px 22px;
  font-size: 12.5px;
  color: var(--ink-muted);
}

/* The prototype has no empty state. A filter that matches nothing rendering as
   a blank strip under a header reads as a broken page, so every table says so
   instead. */
.table-empty {
  padding: 30px 22px;
  font-size: 13px;
  color: var(--ink-muted);
  text-align: center;
  border-bottom: 1px solid var(--divider);
}

.progress-track {
  background: var(--track);
  border-radius: 4px;
  overflow: hidden;
}
.progress-fill {
  height: 100%;
  border-radius: 4px;
}

.avatar {
  border-radius: 50%;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  flex: 0 0 auto;
  overflow: hidden;
}
.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.icon-close {
  border: none;
  background: transparent;
  color: var(--sidebar-muted);
  font-size: 20px;
  line-height: 1;
  cursor: pointer;
  padding: 4px 6px;
}
.icon-close:hover {
  color: var(--ink-2);
}

.tabular {
  font-variant-numeric: tabular-nums;
}
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.list-row {
  padding: 11px 0;
  border-bottom: 1px solid var(--divider);
}

/* --------------------------------------------------------------- overlays */

.scrim {
  position: fixed;
  inset: 0;
  background: var(--scrim);
}
.overlay-title {
  font-size: 21px;
  font-weight: 700;
  letter-spacing: -0.028em;
  color: var(--ink);
}

/* ------------------------------------------------------------------- gate */

.gate {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background: var(--canvas);
}
.gate-card {
  width: 380px;
  max-width: 100%;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 30px 30px 26px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.gate-error {
  font-size: 12.5px;
  color: var(--clay);
  background: var(--clay-chip-bg);
  border-radius: 8px;
  padding: 10px 12px;
  text-wrap: pretty;
}
.gate-note {
  font-size: 12px;
  color: var(--ink-muted);
  text-wrap: pretty;
}

/* Banner for screens the prototype drew against data the backend does not
   store yet. Better to say so on the screen than to let a demo number be
   mistaken for a measurement. */
.sample-banner {
  display: flex;
  align-items: center;
  gap: 10px;
  background: var(--amber-chip-bg);
  border: 1px solid #eddcc2;
  border-radius: 10px;
  padding: 10px 14px;
  font-size: 12.5px;
  color: var(--amber-text);
  margin-bottom: 18px;
  text-wrap: pretty;
}

/* The prototype was drawn desktop-only. These two breakpoints keep it from
   collapsing on a laptop rather than pretending a phone layout was designed. */
@media (max-width: 1100px) {
  .grid-4 {
    grid-template-columns: repeat(2, 1fr) !important;
  }
  .grid-split,
  .grid-split-wide,
  .grid-halves {
    grid-template-columns: 1fr !important;
  }
}
@media (max-width: 820px) {
  .rail {
    display: none;
  }
  .page-header,
  .page-body {
    padding-left: 20px;
    padding-right: 20px;
  }
}

/* ------------------------------------------------------------------ login */

/* Login styles are scoped to keep the console's working screens unchanged. */
.login {
  --login-cream: #faf9f4;
  --login-sage: #d8e7bb;
  --login-muted: #b7c9ba;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  min-height: 100vh;
  min-height: 100svh;
  padding: 16px;
  background: var(--login-cream);
}
.login-brand {
  background: var(--green-darkest);
  color: var(--sidebar-text);
  padding: 36px clamp(30px, 4.4vw, 76px) 28px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 42px;
  min-width: 0;
}
.login-lockup { display: flex; align-items: center; gap: 10px; }
.login-lockup img { width: 46px; height: 46px; border-radius: 12px; }
.login-wordmark { font-size: 32px; font-weight: 700; letter-spacing: -1.6px; }
.login-wordmark > span { color: var(--login-sage); }
.login-workspace {
  margin-left: auto;
  padding: 7px 11px;
  border: 1px solid var(--sidebar-hairline);
  border-radius: 30px;
  font-size: 13px;
  color: var(--login-muted);
  white-space: nowrap;
}
.login-message { width: 100%; max-width: 500px; margin: auto; }
.login-eyebrow { display: block; font-size: 13px; font-weight: 700; letter-spacing: 2px; }
.login-message > .login-eyebrow { color: var(--login-sage); margin-bottom: 20px; }
.login-message h2 {
  margin: 0;
  font-size: clamp(40px, 4.5vw, 68px);
  line-height: 1.06;
  font-weight: 500;
  letter-spacing: -2.8px;
  color: var(--login-cream);
}
.login-message h2 em { font-family: Georgia, serif; font-weight: 400; color: var(--login-sage); }
.login-animated-word {
  position: relative;
  display: inline-grid;
  vertical-align: bottom;
  overflow: hidden;
  padding: .12em .14em;
  margin: -.12em -.14em;
  white-space: nowrap;
}
.login-word-size { grid-area: 1 / 1; visibility: hidden; }
.login-word-slide { position: absolute; top: .12em; left: .14em; }
.login .field-error { font-size: 13px; }

.login-message > p { margin: 22px 0 28px; max-width: 355px; font-size: 15px; line-height: 1.8; color: var(--login-muted); }
.login-photo { position: relative; margin: 0; overflow: hidden; border-radius: 12px; aspect-ratio: 1.85; }
.login-photo > img { position: absolute; inset: 0; width: 100%; height: 100%; display: block; object-fit: cover; object-position: 50% 53%; }
.login-photo::after { pointer-events: none; content: ''; position: absolute; inset: 35% 0 0; background: linear-gradient(transparent, rgba(12, 28, 19, .88)); }
.login-photo figcaption { position: absolute; z-index: 1; bottom: 20px; left: 20px; right: 20px; display: flex; gap: 11px; align-items: center; color: var(--card); font-size: 15px; font-weight: 500; }
.login-photo figcaption small { display: block; margin-top: 4px; font-size: 13px; font-weight: 400; color: var(--sidebar-text); }
.login-photo-count { margin-left: auto; color: var(--sidebar-text); font-size: 12px; white-space: nowrap; font-variant-numeric: tabular-nums; }
.login-photo-icon { flex-shrink: 0; display: grid; place-items: center; width: 38px; height: 38px; border: 1px solid var(--sidebar-hairline); border-radius: 50%; background: var(--nav-hover-fill); }
.login-fineprint { display: flex; justify-content: space-between; gap: 12px; font-size: 13px; color: var(--login-muted); }
.login-fineprint > span:last-child { font-size: 11px; letter-spacing: 1.5px; }
.login-panel { min-width: 0; display: flex; flex-direction: column; align-items: center; justify-content: space-between; gap: 48px; padding: 26px clamp(28px, 5vw, 88px) 16px; }
.login-panel-label { display: flex; gap: 7px; align-items: center; align-self: flex-end; font-size: 13px; color: var(--ink-muted); }
.login-form { width: 100%; max-width: 380px; margin: auto 0; }
.login-heading { margin-bottom: 32px; }
.login-heading .login-eyebrow { color: var(--green-deep); font-size: 12px; letter-spacing: 1.8px; }
.login-heading h1 { margin: 12px 0 9px; font-size: clamp(32px, 3.1vw, 44px); line-height: 1.15; letter-spacing: -1.7px; font-weight: 500; color: var(--green-darkest); }
.login-heading p { margin: 0; color: var(--ink-muted); font-size: 15px; }
.login-card { display: flex; flex-direction: column; gap: 22px; }
.login .field-label { font-size: 14px; font-weight: 600; color: var(--green-darkest); }
.login .input { min-height: 51px; border-radius: 9px; padding: 14px 15px; font-size: 15px; background: var(--card); }
.login .input::placeholder { color: var(--ink-muted); opacity: .85; }
.login .input:focus { outline: 2px solid var(--green-deep); outline-offset: 2px; }
.login .input-invalid { border-color: var(--clay); }
.login .input-invalid:focus { outline-color: var(--clay); }
.login .input-with-icon .input { padding-right: 50px; }
.login .input-icon-button { width: 40px; height: 40px; }
.login .login-submit { display: flex; justify-content: center; align-items: center; gap: 14px; margin-top: 4px; width: 100%; min-height: 52px; padding: 14px 18px; border-radius: 9px; font-size: 15px; background: var(--green-darkest); color: var(--card); }
.login .login-submit:hover:not(:disabled) { background: var(--green-deep); }
.login button:focus-visible { outline: 2px solid var(--green-deep); outline-offset: 4px; }
.login-help { margin-top: 23px; text-align: center; font-size: 14px; }
.login-help-toggle { display: flex; align-items: center; justify-content: center; gap: 5px; width: fit-content; margin: auto; padding: 7px 0; border: 0; background: none; color: var(--green-deep); font-size: inherit; cursor: pointer; text-underline-offset: 4px; }
.login-help-toggle > span { display: flex; }
.login-help-content { overflow: hidden; }
.login-help-body { padding-top: 14px; }
.login-help-toggle:hover { text-decoration: underline; }
.login-help p { margin: 0; padding: 14px; border: 1px solid var(--border); border-radius: 9px; text-align: left; line-height: 1.7; color: var(--ink-muted); }
.login-session { position: relative; margin: 30px 0 0; border-top: 1px solid var(--border); padding: 22px 0 0 25px; font-size: 13px; line-height: 1.8; color: var(--ink-muted); }
.login-session svg { position: absolute; top: 24px; left: 0; color: var(--green-deep); }
.login-panel-footer { margin: 0; font-size: 13px; color: var(--ink-muted); }

.login-banner {
  border-radius: 10px;
  padding: 11px 13px;
  font-size: 14px;
  font-weight: 500;
  text-wrap: pretty;
}
.login-banner-error {
  background: var(--destructive-bg);
  border: 1px solid var(--destructive-border);
  color: var(--clay);
}
.login-banner-warn {
  background: var(--amber-chip-bg);
  border: 1px solid #eddcc2;
  color: var(--amber-text);
}
.login-banner-ok {
  background: var(--green-chip-bg);
  border: 1px solid var(--green-pale);
  color: var(--green-deep);
}

/* A text button that reads as a link — Show/Hide and Forgot password. A real
   <button> rather than an <a href="#">: neither one navigates, and a link that
   goes nowhere is a trap for anyone using a keyboard or a screen reader. */
.login-link-button {
  border: none;
  background: none;
  padding: 0;
  font-size: 13px;
  font-weight: 600;
  color: var(--green-primary);
  cursor: pointer;
}
.login-link-button:hover {
  color: var(--green-deep);
  text-decoration: underline;
}

.input-invalid {
  border-color: var(--clay);
}
.field-error {
  font-size: 13px;
  color: var(--clay);
  text-wrap: pretty;
}

.login-foot {
  margin: 0;
  font-size: 12px;
  line-height: 1.55;
  color: var(--sidebar-muted);
  text-wrap: pretty;
}

.gate-pre {
  margin: 0;
  background: var(--subtle-fill);
  border: 1px solid var(--divider-strong);
  border-radius: 10px;
  padding: 12px 14px;
  font-family: var(--mono);
  font-size: 13px;
  color: var(--ink-2);
  overflow-x: auto;
}

@media (min-width: 1600px) {
  .login { padding: 24px; }
  .login-brand { padding-top: 44px; padding-bottom: 36px; }
}
@media (max-width: 1000px) {
  .login-brand { padding: 28px; }
  .login-workspace { display: none; }
  .login-panel { padding-left: 32px; padding-right: 24px; }
  .login-message h2 { font-size: 46px; }
  .login-photo { aspect-ratio: 1.35; }
  .login-fineprint > span:last-child { display: none; }
}
@media (max-width: 700px) {
  .login { grid-template-columns: 1fr; padding: 10px; }
  .login-brand { border-radius: 14px; padding: 18px 22px 24px; gap: 25px; }
  .login-lockup img { width: 36px; height: 36px; }
  .login-wordmark { font-size: 28px; }
  .login-workspace { display: block; font-size: 12px; }
  .login-message { max-width: none; }
  .login-message > .login-eyebrow { font-size: 11px; margin-bottom: 12px; }
  .login-message h2 { font-size: 38px; letter-spacing: -1.5px; }
  .login-message h2 br { display: none; }
  .login-message > p, .login-photo, .login-fineprint { display: none; }
  .login-panel { padding: 28px 16px 18px; gap: 30px; }
  .login-panel-label { align-self: center; }
  .login-heading { margin-bottom: 28px; }
  .login .input { font-size: 16px; }
  .login-panel-footer { margin-top: 8px; }
}

/* Password field with a keyboard-accessible reveal control. */
.input-with-icon {
  position: relative;
  display: flex;
}
.input-with-icon .input {
  width: 100%;
  padding-right: 42px;
}
.input-icon-button {
  position: absolute;
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: none;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--green-primary);
  cursor: pointer;
  border-radius: 6px;
}
.input-icon-button:hover {
  color: var(--green-deep);
  background: var(--button-hover);
}

/* ------------------------------------------------------- user modal
   The account panel opened from the users table. It centres itself rather
   than sliding in from the right: it is read once and dismissed, so it
   belongs where the eye already is.
   Fixed height so switching tabs never resizes the panel under the cursor —
   a dialog that grows when you click a tab feels broken even when it isn't. */

.modal-scrim {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  z-index: 60;
}
.user-modal {
  width: 560px;
  max-width: 100%;
  max-height: min(660px, 100%);
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 20px;
  box-shadow: var(--shadow-modal);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  outline: none;
}

.user-modal-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
  padding: 22px 24px 18px;
  background: var(--subtle-fill);
  border-bottom: 1px solid var(--divider-strong);
}

.user-modal-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 18px 24px 4px;
}
.stat-tile {
  background: var(--subtle-fill);
  border: 1px solid var(--divider-strong);
  border-radius: 12px;
  padding: 13px 15px;
}
.stat-tile-value {
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: var(--ink);
  line-height: 1.1;
}
.stat-tile-label {
  font-size: 11px;
  color: var(--ink-muted);
  margin-top: 3px;
}

.user-modal-tabs {
  display: flex;
  gap: 4px;
  padding: 14px 24px 0;
  border-bottom: 1px solid var(--divider);
}
.user-tab {
  position: relative;
  border: none;
  background: none;
  padding: 8px 12px 11px;
  font-size: 12.5px;
  font-weight: 600;
  color: var(--ink-muted);
  cursor: pointer;
}
.user-tab.is-active {
  color: var(--ink);
}
.user-tab-underline {
  position: absolute;
  left: 8px;
  right: 8px;
  bottom: -1px;
  height: 2px;
  border-radius: 2px;
  background: var(--green-primary);
}

.user-modal-body {
  flex: 1;
  overflow-y: auto;
  padding: 18px 24px 22px;
}

.detail-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px 18px;
  margin: 0;
}
.detail-cell:last-child {
  grid-column: 1 / -1;
}
.detail-label {
  font-size: 11px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--ink-muted);
  font-weight: 600;
}
.detail-value {
  margin: 3px 0 0;
  font-size: 13.5px;
  font-weight: 600;
  color: var(--ink);
}
.detail-value.is-copyable {
  cursor: pointer;
}
.detail-value.is-copyable:hover {
  color: var(--green-deep);
}
.detail-hint {
  font-size: 11.5px;
  color: var(--ink-faint);
  margin-top: 3px;
}

.pantry-line {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid var(--divider);
}

.user-modal-foot {
  padding: 16px 24px 18px;
  border-top: 1px solid var(--divider-strong);
  background: var(--subtle-fill);
}
.confirm-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

/* ------------------------------------------------------ needs review
   Two queues under one header. Cards rather than table rows: a feedback
   message is a paragraph and an unsure scan carries a list of alternatives,
   and neither fits a column of fixed width. */

.queue-tabs {
  display: flex;
  gap: 4px;
  border-bottom: 1px solid var(--divider-strong);
  margin-bottom: 16px;
}
.queue-tab {
  position: relative;
  border: none;
  background: none;
  padding: 9px 14px 12px;
  font-size: 13px;
  font-weight: 600;
  color: var(--ink-muted);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
}
.queue-tab.is-active {
  color: var(--ink);
}
.queue-tab-count {
  font-size: 11.5px;
  font-weight: 600;
  padding: 1px 7px;
  border-radius: 10px;
  background: var(--chip-neutral);
  color: var(--ink-muted);
}
.queue-tab.is-active .queue-tab-count {
  background: var(--green-chip-bg);
  color: var(--green-deep);
}
.queue-tab-underline {
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: -1px;
  height: 2px;
  border-radius: 2px;
  background: var(--green-primary);
}

.queue-card {
  padding: 18px 20px;
}
.queue-card-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
}
.queue-block {
  margin-top: 15px;
  padding-top: 14px;
  border-top: 1px solid var(--divider);
}
.queue-pill {
  font-size: 12.5px;
  font-weight: 500;
  padding: 5px 11px;
  border-radius: 20px;
  background: var(--chip-fill);
  color: var(--ink-2);
  border: 1px solid var(--chip-fill-border);
}
.queue-pill.is-quiet {
  background: transparent;
  color: var(--ink-muted);
  font-weight: 400;
}
.queue-message {
  margin: 14px 0 0;
  font-size: 13.5px;
  line-height: 1.55;
  color: var(--ink-2);
  white-space: pre-wrap;
}
.queue-reply {
  font-size: 12.5px;
  font-weight: 600;
  color: var(--green-deep);
  text-decoration: none;
}
.queue-reply:hover {
  text-decoration: underline;
}

.table-foot-paged {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
}

/* --------------------------------------------------------- swirling loader
   From the 21st.dev component, kept as CSS rather than the source's inline
   <style> tag so the rules exist once instead of once per mounted spinner.

   Two animations at once is the whole trick: the circle rotates while its dash
   array stretches and contracts against that rotation, so the arc appears to
   chase itself rather than simply turn. The dash animation alternates and the
   spin does not, and the spin is timed at 1.333× the dash so the two never fall
   into step — a loader that visibly repeats reads as a frozen one. */

@keyframes swirl-spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes swirl-dash {
  0% {
    stroke-dasharray: 1, 800;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 400, 400;
    stroke-dashoffset: -200px;
  }
  100% {
    stroke-dasharray: 800, 1;
    stroke-dashoffset: -800px;
  }
}

.swirl-circle {
  transform-origin: center;
  animation:
    swirl-dash var(--duration, 1.5s) ease-in-out infinite alternate,
    swirl-spin calc(var(--duration, 1.5s) * 1.333333) linear infinite;
}

/* Anyone who has asked their system not to animate things gets a still ring
   rather than nothing — the element still says "waiting", it just stops moving. */
@media (prefers-reduced-motion: reduce) {
  .swirl-circle {
    animation: none;
    stroke-dasharray: 420, 400;
    opacity: 0.55;
  }
}

.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
}
.loading-state-label {
  font-size: 13px;
  color: var(--ink-muted);
}

/* ---------------------------------------------------- settings & chatbot */

.config-row,
.admin-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 14px 22px;
  border-top: 1px solid var(--divider);
}
.config-value {
  font-size: 12.5px;
  font-weight: 600;
  color: var(--ink-2);
  text-align: right;
  flex: 0 0 auto;
  max-width: 46%;
}

.accuracy-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.turn {
  padding: 12px 0;
  border-bottom: 1px solid var(--divider);
}
.turn-who {
  font-size: 11px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--ink-muted);
  margin-bottom: 5px;
}
.turn-user .turn-who {
  color: var(--green-deep);
}
.turn-text {
  font-size: 13.5px;
  line-height: 1.55;
  color: var(--ink-2);
  white-space: pre-wrap;
}
.turn-recipe {
  font-size: 12.5px;
  font-style: italic;
  color: var(--ink-muted);
}

@media (max-width: 1100px) {
  .accuracy-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

```

## admin/src/lib/useTheme.ts

```ts
import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';
const KEY = 'panzi.admin.theme';
function savedTheme(): Theme | null {
  try {
    const value = localStorage.getItem(KEY);
    return value === 'light' || value === 'dark' ? value : null;
  } catch { return null; }
}
function systemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function useTheme() {
  const [preference, setPreference] = useState<Theme | null>(savedTheme);
  const [system, setSystem] = useState<Theme>(systemTheme);
  const theme = preference ?? system;

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const update = () => setSystem(systemTheme());
    const sync = (event: StorageEvent) => { if (event.key === KEY || event.key === null) setPreference(savedTheme()); };
    media.addEventListener('change', update);
    window.addEventListener('storage', sync);
    return () => { media.removeEventListener('change', update); window.removeEventListener('storage', sync); };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.adminTheme = theme;
    return () => { delete document.documentElement.dataset.adminTheme; };
  }, [theme]);

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    setPreference(next);
    try { localStorage.setItem(KEY, next); } catch { /* The toggle still works when storage is blocked. */ }
  }
  return { theme, toggleTheme };
}

```
