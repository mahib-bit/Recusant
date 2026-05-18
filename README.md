Project purpose
This is a React single-page app for building a team of Elden Ring bosses under a rune budget.

Bosses are loaded from a JSON dataset containing lore/gameplay attributes plus a price value (/home/runner/work/Recusant/Recusant/public/bosses.json:2-199).
The UI explicitly frames two modes: “Available Bosses” vs “Selected Bosses” (/home/runner/work/Recusant/Recusant/src/App.jsx:32-35).
Tech stack and tooling
Frontend: React + ReactDOM (/home/runner/work/Recusant/Recusant/package.json:14-16).
Bundler/dev server: Vite (/home/runner/work/Recusant/Recusant/package.json:7-10).
Styling: Tailwind CSS v4 + DaisyUI plugin (/home/runner/work/Recusant/Recusant/package.json:13,18,25, /home/runner/work/Recusant/Recusant/src/index.css:1-2, /home/runner/work/Recusant/Recusant/vite.config.js:1-8).
Notifications/modals: react-toastify and sweetalert2 (/home/runner/work/Recusant/Recusant/package.json:16-17, /home/runner/work/Recusant/Recusant/src/App.jsx:8, /home/runner/work/Recusant/Recusant/src/Components/BossCard/BossCard.jsx:5,7).
Linting: ESLint flat config with React Hooks + React Refresh rules (/home/runner/work/Recusant/Recusant/eslint.config.js:1-21).
High-level architecture
Entry point mounts <App /> in strict mode (/home/runner/work/Recusant/Recusant/src/main.jsx:1-10).
App is the state owner and coordinator:
UI mode toggle (toggle) (/home/runner/work/Recusant/Recusant/src/App.jsx:20,32-44)
player budget (balance) initialized to 11,000,000 (/home/runner/work/Recusant/Recusant/src/App.jsx:21)
selected roster (selectedBosses) (/home/runner/work/Recusant/Recusant/src/App.jsx:22)
Data is fetched once at module scope as bossesPromise and consumed via React use() + Suspense in Available (/home/runner/work/Recusant/Recusant/src/App.jsx:11-13,43, /home/runner/work/Recusant/Recusant/src/Components/Available/Available.jsx:1,6).
Component responsibilities
Navbar: displays logo + formatted rune balance (/home/runner/work/Recusant/Recusant/src/Components/Navbar/Navbar.jsx:2-3,5,14-17).
Available: resolves boss data and renders one BossCard per boss (/home/runner/work/Recusant/Recusant/src/Components/Available/Available.jsx:6,12-14).
BossCard: displays boss details and handles “Choose” logic (/home/runner/work/Recusant/Recusant/src/Components/BossCard/BossCard.jsx:9-33,58-99).
Selected: renders selected roster cards and exposes remove action (/home/runner/work/Recusant/Recusant/src/Components/Selected/Selected.jsx:4,10-12,61-66).
Core functionality and rules
Selection costs runes: choosing a boss subtracts boss.price from balance (/home/runner/work/Recusant/Recusant/src/Components/BossCard/BossCard.jsx:31).
Insufficient funds guard: modal shown and selection aborted (/home/runner/work/Recusant/Recusant/src/Components/BossCard/BossCard.jsx:13-23).
Team size cap: max 4 bosses, enforced with toast message (/home/runner/work/Recusant/Recusant/src/Components/BossCard/BossCard.jsx:25-28).
Selection UI state: button disables after choosing within a card instance (/home/runner/work/Recusant/Recusant/src/Components/BossCard/BossCard.jsx:10,94-98).
Removal: removeBoss filters selected list by id (/home/runner/work/Recusant/Recusant/src/App.jsx:24-27), triggered in Selected (/home/runner/work/Recusant/Recusant/src/Components/Selected/Selected.jsx:61-63).
Data model
Each boss item includes:

identity/visual: id, name, image
metadata: place, role
mechanics: rating, immunity, weakness
economy: price
(see representative entries in /home/runner/work/Recusant/Recusant/public/bosses.json:3-11, /home/runner/work/Recusant/Recusant/public/bosses.json:190-198).
Repository structure summary
App shell/config: index.html, package.json, vite.config.js, eslint.config.js
Runtime data/assets: public/bosses.json, public/favicon.svg, public/icons.svg
Source: src/main.jsx, src/App.jsx, component folders under src/Components/*, CSS in src/index.css and src/App.css
Media assets: src/assets/*.png used by UI components (e.g., logo/rune/battle/shadow imports in components) (/home/runner/work/Recusant/Recusant/src/Components/Navbar/Navbar.jsx:2-3, /home/runner/work/Recusant/Recusant/src/Components/BossCard/BossCard.jsx:2-3,6).
Notable implementation observations
README is still the default Vite template, not project-specific documentation (/home/runner/work/Recusant/Recusant/README.md:1-17).
Styling is utility-class driven; CSS files mainly just import Tailwind/DaisyUI (/home/runner/work/Recusant/Recusant/src/index.css:1-2, /home/runner/work/Recusant/Recusant/src/App.css:1).
hover-3d is used in cards (/home/runner/work/Recusant/Recusant/src/Components/BossCard/BossCard.jsx:39, /home/runner/work/Recusant/Recusant/src/Components/Selected/Selected.jsx:14) but no class definition appears in the repo’s CSS sources, suggesting the effect may be missing unless provided externally.
Send message
