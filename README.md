# KROO Checklists

A Google Apps Script WebApp that provides digital operational checklists for KROO Coworking Space staff. Operators tick off checklist items and submissions are recorded to Google Sheets for tracking and accountability.

![Google Apps Script](https://img.shields.io/badge/Google%20Apps%20Script-4285F4?style=flat&logo=google&logoColor=white)
![Platform](https://img.shields.io/badge/Platform-WebApp-blue)
![Status](https://img.shields.io/badge/Status-Production-green)

---

## Features

- Digital checklists for daily operational tasks
- Checklist definitions loaded from Google Sheets
- Completion logs written back to Google Sheets on submit
- Clean, mobile-friendly interface for on-floor use
- Client/server split architecture

---

## Tech Stack

| Layer    | Technology                      |
|----------|---------------------------------|
| Platform | Google Apps Script              |
| UI       | HTML5, CSS3, Vanilla JavaScript |
| Database | Google Sheets                   |
| Deploy   | clasp CLI                       |

---

## Project Structure

```
kroo-checklists/
├── README.md
├── AGENT.md
├── .gitignore
└── src/
    ├── appsscript.json  # GAS manifest
    ├── client/          # Frontend: checklist UI components
    └── server/          # Backend: doGet(), Sheets read/write, logging
```

---

## Getting Started

### Prerequisites

- A Google account with Google Apps Script access
- [clasp](https://github.com/google/clasp) installed globally

```bash
npm install -g @google/clasp
clasp login
```

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/mohamedallam13/kroo-checklists.git
   cd kroo-checklists
   ```

2. Link to your Apps Script project:
   ```bash
   clasp create --type webapp --title "KROO Checklists" --rootDir src
   ```

3. Push source files:
   ```bash
   clasp push
   ```

---

## Deployment

1. In the Apps Script editor, go to **Deploy > New deployment**
2. Select type: **Web app**
3. Set **Execute as**: Me · **Who has access**: Anyone within the organisation
4. Click **Deploy** and share the Web App URL with operators

---

## Author

**Mohamed Allam** — [GitHub](https://github.com/mohamedallam13) · [Email](mailto:mohamedallam.tu@gmail.com)
