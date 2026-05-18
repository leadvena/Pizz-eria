# Pizzeria - Modern Restaurant Starter

A sleek, mobile-first pizza restaurant website built with React, Vite, and Tailwind CSS. Featuring full online ordering cycles, responsive design, and smooth animations.

## Features
- **Online Ordering**: Full cart lifecycle with React Context API.
- **Persistent Cart**: LocalStorage integration ensures the cart survives refreshes.
- **Artisanal Design**: Deep red (#C0392B) and charcoal themes with bold typography.
- **Responsive**: Fully optimized for mobile, tablet, and desktop.
- **SEO Ready**: Schema markup, meta tags, and semantic HTML.

## Tech Stack
- **React 19**
- **Vite**
- **Tailwind CSS** (v4)
- **Framer Motion** (via `motion/react`)
- **Lucide React** (Icons)
- **React Router Dom**

## Setup Instructions

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Start development server**:
    ```bash
    npm run dev
    ```

3.  **Build for production**:
    ```bash
    npm run build
    ```

## Customization
- **Menu Data**: Modify `src/data/menu.ts` to add or remove items.
- **Theme**: Update `src/index.css` under the `@theme` block to change colors and fonts.
- **Business Info**: Update `src/components/Footer.tsx` and `src/pages/Contact.tsx`.

## Deployment
Compatible with Vercel, Netlify, or Cloud Run. Ensure standard SPA routing is enabled on your host.
