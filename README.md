# Ediga Raghuveerendra — Portfolio

A high-performance, responsive developer portfolio showcasing full-stack Java, React, and backend engineering projects.

**Live site:** https://YOUR-SITE-URL/

An aspiring Java Full Stack Developer with a strong foundation in Java, SQL, and modern frontend technologies, dedicated to building practical, database-driven web applications.

## Tech Stack

- **React 19**
- **Vite**
- **Tailwind CSS 4**
- **Framer Motion**
- **AOS (Animate On Scroll)**
- **EmailJS**
- **WebGL**

## Run Locally

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build
```

## Environment Variables

To enable the EmailJS contact form, create a `.env.local` file in the project root with the following variables:

```env
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

*(If these variables are omitted, the contact form automatically falls back to direct mailto client handling.)*
