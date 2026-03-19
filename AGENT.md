# AGENT.md — kroo-checklists

## Purpose
A Google Apps Script WebApp providing operational checklists for KROO coworking space operators. Client/server split architecture.

## Structure
```
kroo-checklists/
├── README.md
├── AGENT.md
├── .gitignore
└── src/
    ├── appsscript.json  ← GAS manifest
    ├── client/          ← HTML/CSS/JS frontend (checklist UI)
    └── server/          ← GAS server-side scripts (Sheets data access, logging)
```

## Key Facts
- **Platform:** Google Apps Script WebApp
- **Data store:** Google Sheets (checklist definitions and completion logs)
- **Purpose:** Digital checklists for daily operations — operators tick items and submissions are recorded
- **Entry point:** `server/` contains the `doGet()` / `doPost()` functions

## Development Notes
- All source files live under `src/` — push with clasp from that directory
- No Node/npm at runtime; ES5-compatible GAS code only
