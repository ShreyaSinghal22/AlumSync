# 🚀 AlumSync Frontend - Source Directory

Welcome to the core architecture of the AlumSync Student Dashboard. This project follows a **Modular SPA (Single Page Application)** structure designed for high scalability and easy backend integration.

## 📁 Folder Structure & Purpose

### 1. `components/`
Contains the reusable UI building blocks of the application.
* **`layout/`**: Persistent UI elements that appear on every page (e.g., `Navbar.jsx`, `Sidebar.jsx`).
* **`dashboard/`**: Specific components used mainly in the feed and home view (e.g., `Feed.jsx`, `RightBar.jsx`).
* **`shared/`**: Generic, highly reusable elements like custom buttons, loading spinners, or badges.

### 2. `pages/`
Each file here represents a unique "Screen" or URL in the application.
* `Home.jsx`: The main community feed dashboard.
* `Messages.jsx`: The AMES AI-powered communication hub.
* `Jobs.jsx`: The alumni-curated opportunity portal.
* *Why this exists:* Controlled by `react-router-dom` in `App.jsx`.

### 3. `context/` (The "Global Brain")
Contains React Context files for global state management.
* **UserContext**: Shares the logged-in student's data across the Navbar, Sidebar, and Profile without "prop drilling."
* **AMESContext**: Manages the persistent state of the chatbot (open/closed, current menu state).

### 4. `hooks/` (Reusable Logic)
Contains custom React hooks to keep components clean.
* `useFetch.js`: A standardized way to pull data from `db.json` or the future backend API.
* `useAuth.js`: Handles student login status and permissions.

### 5. `styles/`
* `index.css`: The "Design System" headquarters containing our **Midnight & Violet** theme and Tailwind `@layer` components.

### 6. `utils/`
Helper functions that handle data processing.
* Formatting dates (e.g., changing "2026-04-21" to "Apr 21").
* Validating student enrollment numbers.

---

## 🛠️ Architecture Principles

1.  **Backend Ready**: All components currently fetch data from `public/data/db.json`. To switch to a real backend, simply update the URL in the `useFetch` hook.
2.  **Theme Driven**: Strictly use Tailwind classes defined in `tailwind.config.js` (`as-violet`, `as-dark`) to maintain design consistency.
3.  **Student-First**: Currently optimized for the Student Dashboard experience as per Phase 1 requirements.

---
*Created by the AlumSync Architecture Team - 2026*