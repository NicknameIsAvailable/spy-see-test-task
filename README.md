## Spy & See — Test Task

A Next.js app showcasing notifications, posts, and shared UI components. It includes SSR-friendly, accessible CSS animations (entry, hover, active) implemented via global keyframes and variables.

### Tech Stack
- **Next.js** 15 (App Router)
- **React** 19
- **TypeScript**
- **@tanstack/react-query** 5
- **ESLint** 9

### Requirements
- Node.js 20+
- pnpm (recommended) or npm/yarn

### Getting Started
1. Install dependencies:
```bash
pnpm install
```
2. Run the dev server:
```bash
pnpm dev
```
The app will start on `http://localhost:3000`.

### Available Scripts
- **dev**: Start development server with Turbopack
```bash
pnpm dev
```
- **build**: Create a production build with Turbopack
```bash
pnpm build
```
- **start**: Run the production server
```bash
pnpm start
```
- **lint**: Run ESLint
```bash
pnpm lint
```
- **generate:api**: Regenerate the API client from `openapi.json`
```bash
pnpm generate:api
```

### Project Structure
```text
src/
  api/                 # OpenAPI-generated client (fetch-based)
  app/                 # Next.js app router pages/layouts
  components/          # Feature components (notifications, post, user, layout)
  shared/
    config/            # App configuration & query client
    ui/                # Reusable UI components and styles
    utils/             # Utilities (pluralize, timeAgo)
  types/               # Global type declarations (e.g. css modules)
```

### Animations (SSR-safe)
- Global variables and keyframes live in `src/shared/ui/styles/globals.css`.
- Components use pure CSS transitions/animations; no runtime hooks are required for mount effects.
- Accessibility: `prefers-reduced-motion: reduce` disables animations and transitions globally.
- Tuning: Adjust durations/easing via CSS variables:
```css
:root {
  --anim-duration-fast: 120ms;
  --anim-duration: 220ms;
  --anim-duration-slow: 360ms;
  --anim-ease: cubic-bezier(0.2, 0.8, 0.2, 1);
}
```

Key enhanced styles:
- Buttons: `shared/ui/button/styles.module.css`
- Tabs: `shared/ui/tabs/styles.module.css`
- Header: `shared/ui/header/styles.module.css`
- Drawer: `shared/ui/drawer/style.module.css`
- Context menu: `shared/ui/context-menu/styles.module.css`
- Notification card + skeleton shimmer: `components/notifications/notification-card/styles.module.css`
- Post preview: `components/post/post-preview/styles.module.css`
- Layout: `components/layout/main-layout/styles.module.css`

### API Client
The API client is generated from `openapi.json` using `openapi-typescript-codegen` (via the `openapi` CLI exposed as `openapi`). Regenerate after schema changes:
```bash
pnpm generate:api
```

### Linting
ESLint is configured via `eslint.config.mjs`.
```bash
pnpm lint
```

### Environment Variables
If you need environment configuration, add `.env.local` in the project root. Next.js automatically loads it. Example:
```bash
NEXT_PUBLIC_API_BASE_URL=https://api.example.com
```

### Deployment
1. Build the app:
```bash
pnpm build
```
2. Start the server:
```bash
pnpm start
```
Deploy to any Node hosting provider or to Vercel.

### Accessibility Notes
- Animations respect `prefers-reduced-motion`.
- Colors and contrast are based on the design tokens in `globals.css`.

### License
This repository is for a test task. License as provided by the project owner.
