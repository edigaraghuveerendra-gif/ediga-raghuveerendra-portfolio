# Ediga Raghuveerendra — Developer Portfolio

[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white)](https://ediga-raghuveerendra-portfolio.vercel.app)
[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite_8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg?style=for-the-badge)](LICENSE)

A high-performance, responsive personal developer portfolio showcasing full-stack Java, Spring Boot, database architecture, and modern React web applications.

🌐 **Live URL:** [https://ediga-raghuveerendra-portfolio.vercel.app](https://ediga-raghuveerendra-portfolio.vercel.app)  
📂 **GitHub Repository:** [https://github.com/edigaraghuveerendra-gif/ediga-raghuveerendra-portfolio](https://github.com/edigaraghuveerendra-gif/ediga-raghuveerendra-portfolio)

---

## 📌 About Me

Hi, I'm **Ediga Raghuveerendra**, a Java Full Stack Developer with a strong foundation in Java, Spring Boot, SQL, and modern web technologies. I am a B.Tech graduate in Data Science from RGMCET, passionate about building scalable, database-driven web applications with clean architecture and responsive user experiences.

---

## ✨ Key Features & Highlights

- **Hero Video & Custom Play Reel:** Integrated full-screen video background with custom play/pause control and animated scroll indicators.
- **Interactive 3D Hanging ID Card:** Realistic lanyard-mounted developer badge in the About section with a click-to-flip 3D card revealing a digital QR code and contact details.
- **Scroll-Driven Workflow Animation:** Interactive animated S-curve line with physics-based spring smoothing tracking progress through the development cycle.
- **Fluid Splash Cursor:** Smooth WebGL-powered interactive fluid physics trail tracking cursor movements.
- **Interactive EmailJS Contact Form:** Functional contact form integrated with EmailJS for direct inbox delivery, with automatic fallback to native `mailto` client handling.
- **Clean Architecture:** Content-driven architecture where all data lives in a single source of truth (`src/data/portfolioData.js`).
- **Fully Responsive Design:** Tailored layouts with fluid typography and zero horizontal overflow across mobile, tablet, and 4K desktop screens.

---

## 🛠️ Tech Stack

### **Frontend & UI**
- **React 19** — Component-driven frontend architecture
- **Vite 8** — Ultra-fast development and optimized production bundling
- **Tailwind CSS 4** — Modern utility-first responsive styling
- **Framer Motion** — Physics-based spring animations, parallax, and gesture controls
- **AOS (Animate On Scroll)** — Viewport-triggered entrance animations
- **React QR Code** — Dynamic SVG QR code rendering

### **Services & Integrations**
- **EmailJS** (`@emailjs/browser`) — Direct client-side email delivery
- **Vercel** — Production edge hosting and automatic continuous deployments

---

## 📁 Project Structure

```text
├── public/                 # Static assets (Favicons, OG preview image, Resume PDF)
│   ├── favicon.png
│   ├── favicon.ico
│   └── og-image.png
├── src/
│   ├── assets/             # Media assets (Hero video, profile images)
│   ├── components/         # Modular section components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── TechnicalSkills.jsx
│   │   ├── Services.jsx
│   │   ├── Projects.jsx
│   │   ├── Leadership.jsx
│   │   ├── SoftSkills.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── SplashCursor.jsx
│   ├── data/
│   │   └── portfolioData.js # Single source of truth for all portfolio content
│   ├── App.jsx             # Main application layout
│   ├── main.jsx            # Application root entry
│   └── index.css           # Global Tailwind CSS configurations
├── index.html              # HTML shell with SEO meta tags & structured data
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

Follow these steps to run the portfolio locally:

### 1. Clone the repository
```bash
git clone https://github.com/edigaraghuveerendra-gif/ediga-raghuveerendra-portfolio.git
cd ediga-raghuveerendra-portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables (Optional)
Create a `.env.local` file in the root directory if you want to connect EmailJS:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```
> *Note: If these variables are not configured, the contact form automatically falls back to your default email client via `mailto`.*

### 4. Start development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 5. Build for production
```bash
npm run build
```

---

## 📬 Contact & Connect

- **Email:** [edigaraghuveerendra@gmail.com](mailto:edigaraghuveerendra@gmail.com)
- **GitHub:** [@edigaraghuveerendra-gif](https://github.com/edigaraghuveerendra-gif)
- **LinkedIn:** [linkedin.com/in/ediga-raghuveerendra](https://www.linkedin.com/in/ediga-raghuveerendra-78676b259/)
- **Live Portfolio:** [ediga-raghuveerendra-portfolio.vercel.app](https://ediga-raghuveerendra-portfolio.vercel.app)

---

⭐ *If you like this portfolio, feel free to star the repository!*
