# AI Coding Agent Instructions for My-Bio-Profile

## Project Overview

**My-Bio-Profile** is a personal developer portfolio site built with **React 19 + Vite + Prisma ORM**. It showcases developer logs and professional information with a sidebar layout featuring profile image, bio, and dynamic content sections.

**Tech Stack:**

- Frontend: React 19, Vite 7, CSS
- Backend: Prisma ORM with PostgreSQL/SQL Server
- Build: Vite with Hot Module Replacement
- Linting: ESLint 9 with React-specific rules

## Architecture

### Frontend Structure (`src/`)

- **`App.jsx`** - Main application component with hero section, navbar, sidebar (profile/bio), and dev log area
- **`components/LogCard.jsx`** - Reusable card component for displaying individual log entries
- **`pages/`** - Currently empty; intended for page-level components
- **`assets/`** - Static assets including profile photo (`my_photo.jpg`)
- **`main.jsx`** - React root entry point using StrictMode
- **`App.css`, `index.css`** - Global styling

### Backend Structure (`prisma/`)

- **`schema.prisma`** - Defines database schema with PostgreSQL datasource
- **Generator**: `prisma-client` outputs to `src/generated/prisma`
- **Datasource**: PostgreSQL (configured via `DATABASE_URL` in `.env`)
- No custom migrations folder configured yet

### Configuration Files

- **`vite.config.js`** - Minimal Vite config with React plugin; no custom paths/aliases
- **`eslint.config.js`** - ESLint 9 with React hooks/refresh plugins; flags unused vars except those starting with capitals
- **`package.json`** - Type module; only production deps are React and React-DOM

## Data Flow & Integration Points

1. **User Visits Site** → Vite renders `index.html` → loads `main.jsx` → mounts `App` component
2. **Profile Display** → `App.jsx` imports static image from `assets/` and hardcoded bio text
3. **Dev Logs** → `LogCard` component receives `date` and `children` props (currently static hardcoded data)
4. **Database** → Prisma schema ready but not yet wired to frontend; `.env` contains `DATABASE_URL` pointing to SQL Server

**Expected Future Flow**: Fetch log entries from API (to be built) → component queries Prisma → returns logs → rendered in `LogCard` components.

## Developer Workflows

### Setup & Installation

```bash
npm install          # Install dependencies (React, Vite, ESLint)
npm run dev          # Start Vite dev server (default: http://localhost:5173)
npm run build        # Build for production (outputs to `dist/`)
npm run preview      # Preview production build locally
npm run lint         # Run ESLint on all files
```

### Database Setup

```bash
# After configuring DATABASE_URL in .env:
npx prisma generate  # Generate Prisma Client
npx prisma migrate dev --name init  # Create/run migrations
npx prisma studio   # Open web UI to browse database
```

### Key Commands Context

- **`npm run dev`**: Hot reload enabled; edit files and see changes immediately
- **`npm run lint`**: Must pass before committing; check ESLint violations in console
- **Database operations**: Use Prisma CLI directly; no custom npm scripts yet

## Project-Specific Patterns & Conventions

### React Component Pattern

- **Functional components only** (all existing components are functions)
- **Props drilling** for data (no Context/Redux yet; see `LogCard` expects `date` and `children`)
- **Local styling** via CSS files co-located with components (`App.css` for `App.jsx`)
- **Assets imported** as ES modules: `import my_photo from "./assets/my_photo.jpg"`

### Naming Conventions

- **Components**: PascalCase (e.g., `LogCard`, `App`)
- **Files**: Match component case (e.g., `App.jsx`, `LogCard.jsx`)
- **Directories**: lowercase (e.g., `src/components/`, `src/pages/`)

### ESLint Enforcement

- Unused variables trigger errors UNLESS they start with uppercase (constants/types)
- React hooks dependencies must be complete (enforced via `react-hooks/rules-of-hooks`)
- No console logs should remain in production code

### Styling Approach

- **Global CSS** in `src/index.css` (shared across all components)
- **Component-scoped CSS** in collocated files (e.g., `App.css`)
- **No CSS-in-JS or Tailwind** currently; plain CSS with class-based selectors
- Classes used: `.hero`, `.navbar`, `.container`, `.sidebar`, `.profile-img`, `.LogCard`, etc.

## Critical Integration Points

### Environment Variables

- `.env` file required with `DATABASE_URL` (currently set to SQL Server with credentials)
- ⚠️ **Security Note**: Credentials in `.env` should be moved to secure vaults before production

### Vite Configuration

- No path aliases configured; use relative imports
- React plugin handles JSX transformation and Fast Refresh
- Build output goes to `dist/` directory

### Prisma to Frontend

- Prisma Client generated in `src/generated/prisma` (referenced when building API routes)
- Currently **no API routes or backend server**; add Express/Next.js when needed

## Common Tasks & Patterns

### Adding a New Component

1. Create `src/components/ComponentName.jsx` with function export
2. Import & use in parent (e.g., in `App.jsx`)
3. Add corresponding styles in `src/ComponentName.css` if needed
4. Ensure no unused variables trigger ESLint warnings

### Updating Dev Log Display

1. Modify `LogCard.jsx` to accept and render log data from props
2. Update `App.jsx` to fetch logs (via Prisma/API when available)
3. Map log array to `<LogCard>` components

### Database Schema Changes

1. Edit `prisma/schema.prisma`
2. Run `npx prisma migrate dev --name description_of_change`
3. Regenerate client: `npx prisma generate`

## Potential Pitfalls & Solutions

| Issue                                  | Cause                                  | Solution                                                                 |
| -------------------------------------- | -------------------------------------- | ------------------------------------------------------------------------ |
| "Cannot find module 'prisma/config'"   | Invalid Prisma config file             | Removed `prisma.config.ts`; not needed for this setup                    |
| Vite dev server not picking up changes | Hot reload not working                 | Ensure only `.jsx` and CSS files are modified; restart if config changes |
| Database connection fails              | Wrong `DATABASE_URL` format            | Check connection string in `.env`; use Prisma Studio to test             |
| Components re-render unnecessarily     | Inline object/function creation in JSX | Memoize props and callbacks if performance issues arise                  |

## Next Steps to Consider

1. **API Layer**: Build Express/Next.js backend or use Vite API proxy to query Prisma
2. **State Management**: Add Zustand/Jotai for shared state if complexity grows beyond current props drilling
3. **Type Safety**: Migrate to TypeScript (files already support `.tsx`; ESLint ready)
4. **Testing**: Add Vitest + React Testing Library when component complexity increases
5. **Pages Directory**: Populate `src/pages/` with About, Contact, Blog pages using React Router
