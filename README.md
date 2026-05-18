# Recusant - Elden Ring Boss Team Builder

Recusant is a React single-page application that allows players to build their own strategic team of Elden Ring bosses under a specific rune budget. Players can browse available legendary bosses, analyze their lore and gameplay mechanics, and curate a custom roster of up to four bosses while managing their budget.

---

## Project Purpose
This is a React single-page app for building a team of Elden Ring bosses under a rune budget. Bosses are loaded from a JSON dataset containing lore and gameplay attributes plus a price value. The UI explicitly frames two modes: "Available Bosses" versus "Selected Bosses".

---

## Tech Stack and Tooling
* **Frontend:** React + ReactDOM
* **Bundler & Dev Server:** Vite
* **Styling:** Tailwind CSS v4 + DaisyUI plugin
* **Notifications & Modals:** react-toastify and sweetalert2
* **Linting:** ESLint flat config with React Hooks + React Refresh rules

---

## High-Level Architecture
* **Entry Point:** Mounts `<App />` in strict mode.
* **State Management & Coordination:** `App.jsx` acts as the primary state owner and coordinator, tracking:
    * UI mode toggle 
    * Player budget initialized to 11,000,000 runes
    * Selected roster list
* **Data Fetching:** Data is fetched once at module scope as a promise and consumed via React's `use()` hook combined with `Suspense` inside the `Available` component.

---

## Component Responsibilities

### `Navbar`
Displays the application branding, logo, and the player's dynamically formatted rune balance.

### `Available`
Resolves the asynchronous boss dataset and renders individual cards for each boss.

### `BossCard`
Displays granular boss details and handles the selection logic when adding a boss to the roster.

### `Selected`
Renders cards representing the currently selected roster and exposes actions to remove a boss from the team.

---

## Core Functionality and Rules

1. **Selection Cost:** Choosing a boss subtracts their specific price from the player's overall rune balance.
2. **Insufficient Funds Guard:** If a player cannot afford a boss, an alert modal is shown and the selection is aborted.
3. **Team Size Cap:** Teams are strictly capped at a maximum of 4 bosses. Attempting to add more triggers a toast message and blocks the action.
4. **Selection UI State:** The selection button within a card instance automatically disables immediately after being selected.
5. **Removal:** A removal function filters the selected list by ID to delete a boss from the team, freeing up their price back into the active balance.

---

## Data Model
Each boss item in the dataset contains the following attributes:
* **Identity & Visual:** `id`, `name`, `image`
* **Metadata:** `place`, `role`
* **Mechanics:** `rating`, `immunity`, `weakness`
* **Economy:** `price`

---

## Repository Structure Summary
* **App Shell & Config:** `index.html`, `package.json`, `vite.config.js`, `eslint.config.js`
* **Runtime Data & Assets:** `public/bosses.json`, `public/favicon.svg`, `public/icons.svg`
* **Source Code:** `src/main.jsx`, `src/App.jsx`, component folders under `src/Components/*`, layout styles in `src/index.css` and `src/App.css`
* **Media Assets:** Images and assets under `src/assets/*.png` used dynamically by UI components for background decorations and icons.

---

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/Recusant.git](https://github.com/your-username/Recusant.git)
   cd Recusant# Recusant - Elden Ring Boss Team Builder

Recusant is a React single-page application that allows players to build their own strategic team of Elden Ring bosses under a specific rune budget. Players can browse available legendary bosses, analyze their lore and gameplay mechanics, and curate a custom roster of up to four bosses while managing their budget.

---

## Project Purpose
This is a React single-page app for building a team of Elden Ring bosses under a rune budget. Bosses are loaded from a JSON dataset containing lore and gameplay attributes plus a price value. The UI explicitly frames two modes: "Available Bosses" versus "Selected Bosses".

---

## Tech Stack and Tooling
* **Frontend:** React + ReactDOM
* **Bundler & Dev Server:** Vite
* **Styling:** Tailwind CSS v4 + DaisyUI plugin
* **Notifications & Modals:** react-toastify and sweetalert2
* **Linting:** ESLint flat config with React Hooks + React Refresh rules

---

## High-Level Architecture
* **Entry Point:** Mounts `<App />` in strict mode.
* **State Management & Coordination:** `App.jsx` acts as the primary state owner and coordinator, tracking:
    * UI mode toggle 
    * Player budget initialized to 11,000,000 runes
    * Selected roster list
* **Data Fetching:** Data is fetched once at module scope as a promise and consumed via React's `use()` hook combined with `Suspense` inside the `Available` component.

---

## Component Responsibilities

### `Navbar`
Displays the application branding, logo, and the player's dynamically formatted rune balance.

### `Available`
Resolves the asynchronous boss dataset and renders individual cards for each boss.

### `BossCard`
Displays granular boss details and handles the selection logic when adding a boss to the roster.

### `Selected`
Renders cards representing the currently selected roster and exposes actions to remove a boss from the team.

---

## Core Functionality and Rules

1. **Selection Cost:** Choosing a boss subtracts their specific price from the player's overall rune balance.
2. **Insufficient Funds Guard:** If a player cannot afford a boss, an alert modal is shown and the selection is aborted.
3. **Team Size Cap:** Teams are strictly capped at a maximum of 4 bosses. Attempting to add more triggers a toast message and blocks the action.
4. **Selection UI State:** The selection button within a card instance automatically disables immediately after being selected.
5. **Removal:** A removal function filters the selected list by ID to delete a boss from the team, freeing up their price back into the active balance.

---

## Data Model
Each boss item in the dataset contains the following attributes:
* **Identity & Visual:** `id`, `name`, `image`
* **Metadata:** `place`, `role`
* **Mechanics:** `rating`, `immunity`, `weakness`
* **Economy:** `price`

---

## Repository Structure Summary
* **App Shell & Config:** `index.html`, `package.json`, `vite.config.js`, `eslint.config.js`
* **Runtime Data & Assets:** `public/bosses.json`, `public/favicon.svg`, `public/icons.svg`
* **Source Code:** `src/main.jsx`, `src/App.jsx`, component folders under `src/Components/*`, layout styles in `src/index.css` and `src/App.css`
* **Media Assets:** Images and assets under `src/assets/*.png` used dynamically by UI components for background decorations and icons.

---

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/Recusant.git](https://github.com/your-username/Recusant.git)
   cd Recusant
