# Ediga Raghuveerendra — Portfolio

A high-performance, responsive developer portfolio showcasing full-stack Java, React, and backend engineering projects.

**Live site:** https://YOUR-SITE-URL/

Built during the placement training program at [TAP Academy](https://thetapacademy.com/) (full-stack development, AI and augmented reality training).

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
