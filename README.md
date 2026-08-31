# 🏭 Demo Sanat — Industrial Machinery Website

A premium **RTL Persian frontend showcase** for an industrial packaging machinery company.

**Demo Sanat (دمو صنعت)** is a modern website concept focused on presenting industrial machinery, packaging solutions, and engineering capabilities through a clean, premium, and professional interface.

The project was designed with an emphasis on **industrial visual identity, Persian RTL typography, responsive layouts, and reusable React components**.

> **Note:** This is a frontend demonstration project. Some pages and interactions are intentionally limited and display a demo notice instead of full production functionality.

---

## ✨ Features

* 🇮🇷 Fully Persian / RTL interface
* 🏭 Premium industrial visual identity
* 📦 Industrial packaging machinery showcase
* 🖼️ Large cinematic product imagery
* 📱 Fully responsive design
* 🧭 Responsive RTL navigation
* 🎨 Off-white, charcoal, white and gold color palette
* ✨ Subtle hover and reveal animations
* 🧩 Reusable React components
* 🔔 Demo-unavailable modal for unfinished sections
* 📝 RTL contact form UI
* 📊 Industrial statistics section
* 📣 Call-to-action sections
* 🗺️ Custom map-style contact visual
* ⚡ Vite-powered development environment

---

## 📄 Pages

The current demo focuses on three fully designed pages:

| Page        | Description                                                                       |
| ----------- | --------------------------------------------------------------------------------- |
| 🏠 Home     | Hero, featured products, statistics, company advantages, industrial story and CTA |
| 🏭 Products | Product showcase with six industrial machinery categories                         |
| 📞 Contact  | Contact information, message form, map-style visual and service highlights        |

Additional navigation items are intentionally displayed as demo-only sections.

---

## 🛠️ Tech Stack

### Core

* **React 19**
* **TypeScript**
* **Vite**
* **Tailwind CSS 4**

### Routing & Application

* **TanStack Router**
* **TanStack Start**
* **React Router ecosystem**

### UI & Utilities

* **Radix UI**
* **Lucide React**
* **React Hook Form**
* **Zod**
* **Sonner**
* **Tailwind Merge**
* **Class Variance Authority**

The project's dependencies and scripts are defined in `package.json`.

---

## 🎨 Design System

The visual identity was designed around a premium industrial aesthetic.

### Color Palette

| Color      | Hex       | Usage                          |
| ---------- | --------- | ------------------------------ |
| Off White  | `#F6F7F8` | Main backgrounds               |
| White      | `#FFFFFF` | Cards and surfaces             |
| Charcoal   | `#10141C` | Dark sections and footer       |
| Gold       | `#C69A3A` | Accent and highlights          |
| Light Gray | `#E7E9EC` | Borders and secondary surfaces |

Gold is intentionally used as an **accent color rather than the dominant color**.

The design emphasizes large imagery, strong typography, generous spacing, thin gold details, subtle borders, and restrained animations.

---

## 🏭 Featured Products

The demo showcases several examples of industrial packaging machinery:

* **TB-Series** — دستگاه تری‌بلوک
* **SH-Series** — دستگاه شرینک پک
* **LB-Series** — دستگاه لیبل زن
* **UN-Series** — دستگاه ردیف کن بطری
* **PT-Series** — پاستوریزاتور تونلی
* **DP-Series** — دیپالتایزر

Each product is presented using a dedicated visual card containing:

* Product image
* Product name
* Model badge
* Short description
* Product detail CTA

Product detail pages are outside the scope of the current demo and therefore trigger the demo-unavailable modal.

---

## 📊 Industrial Showcase

The homepage includes a dedicated statistics section highlighting:

* **۱۳۶۳** — شروع فعالیت
* **+۴۰** — سال تجربه
* **+۸۰** — نوع دستگاه
* **+۱۲۰۰** — کارخانه و مشتری

These figures are presented as part of the website's visual demonstration and brand storytelling.

---

## 🧩 Component Architecture

The project follows a reusable component-oriented structure.

Key reusable components include:

```text
Header
Footer
ProductCard
SectionHeading
StatsSection
CTASection
DemoUnavailableModal
ContactForm
```

This approach keeps common UI elements consistent across the different pages while making the project easier to maintain and extend.

---

## 📁 Project Structure

```text
demo-sanat-showcase/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── hooks/
│   ├── lib/
│   ├── routes/
│   ├── routeTree.gen.ts
│   ├── router.tsx
│   ├── server.ts
│   ├── start.ts
│   └── styles.css
│
├── .lovable/
├── AGENTS.md
├── components.json
├── eslint.config.js
├── package.json
├── tsconfig.json
├── vite.config.ts
├── bun.lock
└── README.md
```

The current source tree separates assets, components, data, hooks, utilities and routes into dedicated directories.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have one of the following installed:

* Node.js
* npm

### 1. Clone the repository

```bash
git clone https://github.com/sanadgol83/demo-sanat-showcase.git
```

### 2. Navigate to the project

```bash
cd demo-sanat-showcase
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The Vite development server will provide the local URL in your terminal.

---

## 📦 Available Scripts

| Command             | Description                      |
| ------------------- | -------------------------------- |
| `npm run dev`       | Start the development server     |
| `npm run build`     | Create a production build        |
| `npm run build:dev` | Build using development mode     |
| `npm run preview`   | Preview the production build     |
| `npm run lint`      | Run ESLint                       |
| `npm run format`    | Format the project with Prettier |

These scripts are currently defined in the project's `package.json`.

---

## 📱 Responsive Design

The interface is designed for multiple screen sizes:

### Desktop

* Spacious layouts
* Three-column product grid
* Large cinematic imagery
* Full navigation

### Tablet

* Two-column product grid
* Adapted spacing
* Responsive navigation

### Mobile

* Single-column layouts
* RTL hamburger menu
* Stacked hero sections
* Touch-friendly controls
* No horizontal scrolling

The responsive behavior and layout rules are part of the original project specification.

---

## 🎬 Interaction & Animation

The project uses restrained animations to maintain a premium industrial feeling without compromising performance.

Examples include:

* Fade-up section reveals
* Product image zoom
* Card elevation on hover
* Animated gold underlines
* Smooth scrolling
* Subtle transitions

The design intentionally avoids excessive animations, gradients, glassmorphism, and overly rounded UI elements.

---

## 🚧 Demo Limitations

This repository is a **frontend showcase**, not a complete production system.

The following features are intentionally not implemented as production functionality:

* Backend/API integration
* Database
* Authentication
* Product detail pages
* About Us page
* Industries page
* Real contact-form submission
* External map integration
* CMS
* Production data management

Unavailable pages and product details display:

> این صفحه در نسخه دمو طراحی نشده است.

This keeps the project focused on **UI/UX, frontend architecture and visual presentation** rather than backend functionality.

---

## 🎯 Project Goals

The main goals of this project are:

1. Demonstrate the ability to build a premium industrial website.
2. Create a professional Persian RTL user experience.
3. Practice responsive frontend development.
4. Build reusable React components.
5. Create a strong visual presentation for industrial products.
6. Demonstrate modern frontend tooling and architecture.
7. Create a portfolio-ready website concept.

---

## 👨‍💻 Author

**Mohammad Sanadgol**

GitHub: [@sanadgol83](https://github.com/sanadgol83)

---

## 📌 Project Status

**Frontend Demo — Showcase Project**

The current version focuses on visual design, responsive frontend implementation, reusable components, routing, and user interactions.

Future versions could extend the project with real backend services, product detail pages, CMS integration, form submission, database connectivity, and production-ready content management.

---

## 📄 License

No separate open-source license is currently specified for this repository.

If you plan to distribute or reuse the project publicly, consider adding an appropriate `LICENSE` file.
