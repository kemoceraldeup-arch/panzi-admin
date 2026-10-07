import fs from 'node:fs';
fs.writeFileSync('admin/DESIGN.md', `# Panzi admin design

The authenticated workspace follows the Panzi mobile app in the supplied handoff. The login, authentication behavior, and global login stylesheet are unchanged.

## Brand and layout

- src/styles/workspace.css adapts the app's warm cream (#FFF8E8), pantry green (#3E7D2A), fresh green (#6CBF3F), and peach accents. Dark mode uses the app's warm charcoal surfaces.
- Locally hosted Nunito is the body font; Baloo 2 is used for headings. Private font-family names keep the login unchanged.
- Reuse PageHead, Panel, Segmented, SearchField, Pager, Drawer, and charts from components/pz.tsx. New styles are scoped to .pz.
- Eight screens: Dashboard, Pantry, Recipes, Users, Food outcomes, API costs, System logs, and Settings. Conversations and Needs review have no screen, navigation item, command-search result, or dashboard link. Previous URLs fall back to Dashboard.
- The dashboard uses the mobile app's pantry mascot. Recipe cards use dish photos with a neutral fallback when unavailable.

## Data and controls

Keep API contracts and auth enforcement intact. Development sample mode is labeled. Summary figures state their scope: account summaries are for the current page/filter; missing pricing remains unknown, and expiry estimates retain their provenance.

Pantry category chips filter ingredients. Recipe sorting supports most saved, highest rated, and name. Users and logs retain search, filters, pagination, and CSV export of the current page. Period selectors request data from the API.

## Responsive behavior

The sidebar collapses to a desktop rail and becomes a navigation drawer below 861px. Cards reflow; wide tables scroll within labelled regions. Preserve keyboard focus, selected filter states, Escape dismissal, and reduced-motion support. Light/dark preference persists using the existing theme setting.

## Verification

Run npm run build in admin. Check all eight routes at desktop and phone widths, searches, filters, recipe ordering, account drawers, period changes, exports, and removed-route redirects. Set VITE_SAMPLE_DATA=true and VITE_SKIP_AUTH=true only for a local preview process. Production builds retain sign-in and API access. Live data verification requires a signed-in administrator and the shared API.
`);
let readme = fs.readFileSync('admin/README.md', 'utf8');
readme = readme.replace(' Review writes are disabled in sample mode.', '');
readme = readme.replace('| Users | Account support, pantry inspection, suspension, and admin grants |', '| Users | Account activity and read-only pantry inspection |');
readme = readme.replace('| Pantry insights |', '| Pantry |');
readme = readme.replace(/^\| (Needs review|Conversations) \|.*\r?\n/gm, '');
readme = readme.replace('Admin access, with technical configuration collapsed by default', 'Admin access and read-only app configuration');
readme = readme.replace(/## Review workflow[\s\S]*?(?=## Food outcomes)/, '## Removed screens\n\nConversations and Needs review are removed from the admin, including routes, navigation, command search, dashboard links, and review badge requests. Old URLs redirect to Dashboard. Existing backend records and mobile app features are unaffected.\n\n');
readme = readme.replace(' Save and reopen a review, then verify it after signing in again with the same administrator account.', '');
readme = readme.replace(/## Browsing and operational alerts[\s\S]*/, '## Browsing\n\nUsers and System logs retain server-side search, status/level filters, and 25-row pagination. CSV exports the displayed page. Pantry categories and recipe search/sorting work on the returned data. The redesigned dashboard focuses on food outcomes, scan activity, expiry dates, and shortcuts into the remaining workspace screens.\n');
fs.writeFileSync('admin/README.md', readme);
let root = fs.readFileSync('README.md', 'utf8').replace('for the screens and the review workflow', 'for the workspace screens');
fs.writeFileSync('README.md', root);
console.log('Updated workspace design and screen documentation.');
