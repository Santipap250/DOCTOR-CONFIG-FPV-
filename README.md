# ConfigDoctor v8.0 "Apex"

FPV Drone Configuration & Diagnostic Platform — rebuilt as a modern React SPA.

## Tech Stack

- **React 19** + **TypeScript** + **Tailwind CSS 4**
- **shadcn/ui** component library
- **Wouter** for client-side routing
- **Recharts** for data visualization
- **Lucide React** for icons

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

## Build

```bash
pnpm build
```

## Project Structure

```
client/
  src/
    pages/          — Page-level components
    components/     — Reusable UI & shadcn/ui
    contexts/       — React contexts (theme)
    hooks/          — Custom React hooks
    lib/            — Utility helpers & data
  public/           — Static config files only
server/             — Express server (production)
shared/             — Shared constants & types
```

## Features

ConfigDoctor provides 22+ FPV drone diagnostic tools across 7 categories:
- Drone Configuration Analyzer
- PID Tuning Advisor
- Blackbox Log Analyzer
- CLI Diff Analyzer
- Motor & Prop Calculator
- RPM Filter Optimizer
- VTX Range Calculator
- And many more...

## License

MIT
