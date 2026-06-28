# Estheva Studio

A world-class luxury salon website for **Estheva Studio**, Patna's premier beauty and transformation destination. Built with React 19, Vite 7, TailwindCSS 4, Framer Motion, and TypeScript.

## ✨ Features

- **8 fully-animated pages**: Home, Services, Bridal, Nail Art, Gallery, About, Contact, 404
- **Framer Motion animations** with scroll-triggered effects
- **Responsive design** — mobile, tablet, and desktop
- **Floating WhatsApp button** for instant contact
- **Appointment booking form** with toast notifications
- **Animated review carousel**
- **Elegant typography** using Cormorant Garamond + Jost from Google Fonts
- **Luxury gold and warm-tone color palette**

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher (comes with Node.js)

### Installation

```bash
# Navigate to the project directory
cd Website

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will open at **http://localhost:5173**

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start local development server with hot reload |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run typecheck` | Run TypeScript type checks only |

---

## 🏗️ Project Structure

```
Website/
├── src/
│   ├── assets/
│   │   ├── images/          # Local image assets (nail, bridal, hair)
│   │   └── attached_assets/ # Real salon photos (interior, entrance, hair station, spa)
│   ├── components/
│   │   ├── layout/          # Navbar, Footer, FloatingWhatsApp
│   │   └── ui/              # 55 shadcn/ui components (Radix-based)
│   ├── hooks/               # use-toast, use-mobile
│   ├── lib/                 # Utility functions (cn)
│   ├── pages/               # 8 page components
│   ├── App.tsx              # Router + layout wrapper
│   ├── index.css            # Global styles + Tailwind v4 theme
│   └── main.tsx             # React entry point
├── public/                  # Favicon and static files
├── index.html               # HTML entry point
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Dependencies and scripts
└── .env.example             # Example environment variables
```

---

## 🖼️ Image Assets

The app uses two sources for images:

1. **`src/assets/images/`** — AI-generated premium salon images (nail art, bridal, hair)
2. **`src/assets/attached_assets/`** — Real salon photos (interior, entrance, hair station, spa)

Both are aliased in Vite and TypeScript:
- `@/assets/images/...` → `src/assets/images/`
- `@assets/...` → `src/assets/attached_assets/`

---

## 🎨 Design System

- **Primary color**: Gold (`hsl(43, 65%, 52%)`)
- **Font Serif**: Cormorant Garamond (headings, logo)
- **Font Sans**: Jost (body, navigation)
- **Radius**: 0.5rem (sharp edges on most elements as per luxury design)
- **Theme**: Light mode by default (dark mode CSS variables also defined)

---

## 🔧 Configuration

No environment variables are required for local development. See [`.env.example`](.env.example) for optional configuration.

---

## 🌐 Deployment

Build the production bundle and serve the `dist/` folder with any static hosting provider:

```bash
npm run build
# Output is in dist/
```

Compatible with: **Vercel**, **Netlify**, **GitHub Pages**, **Cloudflare Pages**, **AWS S3/CloudFront**

---

## 📄 License

MIT
