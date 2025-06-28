# Portfolio Website

[![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3.1-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-11.9.1-FFCA28?style=flat-square&logo=firebase)](https://firebase.google.com/)

Ein modernes Portfolio zur Präsentation von Projekten und Fähigkeiten, erstellt mit Next.js, React und modernen Webtechnologien.

## ✨ Features

- **🎨 Modernes Design**: Responsives UI mit Tailwind CSS und Radix UI Komponenten
- **📊 Datenvisualisierung**: Interaktive Diagramme mit Recharts
- **🔥 Firebase Integration**: Backend-Dienste und Hosting
- **📱 Responsive**: Optimiert für alle Geräte und Bildschirmgrößen
- **⚡ Performance**: Static Site Generation mit Next.js für optimale Ladezeiten
- **🎯 TypeScript**: Starke Typisierung für eine bessere Entwicklererfahrung
- **🎪 Interaktive Elemente**: Animationen und Übergänge für eine bessere UX
- **📋 Kontaktformulare**: Integrierte Formulare mit `mailto:`-Funktion

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS, Radix UI, Lucide Icons
- **Formulare**: React Hook Form, Zod Validation
- **Charts**: Recharts
- **Entwicklung**: ESLint, TypeScript

## 📋 Voraussetzungen

Stellen Sie sicher, dass Sie die folgende Software installiert haben:

- Node.js (>= 18.0.0)
- npm (>= 9.0.0) oder yarn
- Git

## 🚀 Installation

1. **Repository klonen**
   ```bash
   git clone https://github.com/MaxEngineer90/ml-portfolio.git
   cd ml-portfolio
   ```

2. **Abhängigkeiten installieren**
   ```bash
   npm install
   # oder
   yarn install
   ```

3. **Entwicklungsserver starten**
   ```bash
   npm run dev
   ```
   Die Anwendung wird unter [http://localhost:9002](http://localhost:9002) verfügbar sein.

## 🎯 Verwendung

### Entwicklungsmodus
```bash
npm run dev          # Startet den Entwicklungsserver auf Port 9002
```

### Build für die Produktion
```bash
npm run build        # Erstellt den statischen Produktions-Build im `out/` Ordner
```

## 🚀 Deployment auf GitHub Pages

Dieses Projekt ist so konfiguriert, dass es automatisch auf GitHub Pages bereitgestellt wird, wenn Sie Änderungen in den `main`-Branch pushen.

Um dies zu aktivieren, müssen Sie Ihre Repository-Einstellungen einmalig konfigurieren:

1.  Navigieren Sie zu Ihrem GitHub-Repository.
2.  Gehen Sie zu **Settings** > **Pages**.
3.  Wählen Sie unter **Build and deployment** als **Source** die Option **GitHub Actions**.

Jedes Mal, wenn Sie nun auf `main` pushen, wird der Deployment-Workflow ausgeführt und Ihre Seite wird automatisch aktualisiert.

## 📈 SEO (Search Engine Optimization)

Um die Sichtbarkeit in Suchmaschinen wie Google zu verbessern, wurden mehrere technische SEO-Best Practices implementiert:

-   **Erweiterte Metadaten**: Detaillierte `meta`-Tags, einschließlich Open Graph (für das Teilen in sozialen Medien) und Twitter Cards.
-   **`robots.txt`**: Eine `robots.txt`-Datei ist enthalten, um Suchmaschinen-Crawler zu leiten.
-   **`sitemap.xml`**: Eine `sitemap.xml` wird bereitgestellt, um Suchmaschinen zu helfen, alle Seiten der Website effizient zu entdecken.

## 📁 Projektstruktur

```
ml-portfolio/
├── src/
│   ├── app/            # Next.js App Router (Seiten & Layouts)
│   ├── components/     # React-Komponenten
│   ├── context/        # React Context Provider
│   ├── hooks/          # React Hooks
│   ├── lib/            # Hilfsfunktionen
│   └── messages/       # i18n Sprachdateien
├── public/             # Statische Dateien (Bilder, Icons)
├── .github/            # GitHub Actions Workflows
├── next.config.js      # Next.js Konfiguration
├── tailwind.config.js  # Tailwind Konfiguration
└── tsconfig.json       # TypeScript Konfiguration
```

## 🤝 Mitwirken

Beiträge sind willkommen! Bitte folgen Sie diesen Schritten:

1. Forken Sie das Repository
2. Erstellen Sie einen Feature-Branch (`git checkout -b feature/AmazingFeature`)
3. Committen Sie Ihre Änderungen (`git commit -m 'Add some AmazingFeature'`)
4. Pushen Sie zum Branch (`git push origin feature/AmazingFeature`)
5. Öffnen Sie einen Pull Request

## 📝 Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert.

## 👨‍💻 Autor

**Maximilian Lamm**

- GitHub: [@MaxEngineer90](https://github.com/MaxEngineer90)
- LinkedIn: [Maximilian Lamm](https://www.linkedin.com/in/maximilian-lamm-941b49281/)

---

⭐ Vergessen Sie nicht, diesem Projekt einen Stern zu geben, wenn es Ihnen gefällt!
