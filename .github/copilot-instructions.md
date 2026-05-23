# MediaProblem Website - Copilot Instructions

This is a premium React website for MediaProblem, a professional media editing company.

## Project Overview

A fully responsive, fast-loading website built with React, TypeScript, Vite, and Framer Motion featuring:
- Landing page with hero section and CTAs
- Services showcase page
- Pricing page with multiple tiers
- Portfolio page with video showcase and filtering
- Contact form with service selection
- Cookie tracking for region and preferences
- Smooth animations and transitions throughout

## Tech Stack

- **Framework**: React 18.2 with TypeScript
- **Build Tool**: Vite 5
- **Routing**: React Router v6
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Cookies**: js-cookie
- **Styling**: CSS with gradients and animations

## Key Features

- Multicolor gradient design (black, white, purple)
- Hover effects with purple text color changes
- Dark theme with white gradient shades
- Light theme with black gradient shades
- Fully responsive design
- Video showcase with modal playback
- Contact form with validation
- Cookie-based region tracking
- Smooth scroll behavior
- Fast loading with optimization

## Project Structure

```
src/
├── components/       # Header, Footer
├── pages/           # Landing, Services, Pricing, Portfolio, Contact
├── styles/          # Global CSS with animations
├── utils/           # Cookies, performance, constants
├── types/           # TypeScript type definitions
├── App.tsx          # Main app with routing
└── main.tsx         # Entry point
```

## Installation & Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview production build:
   ```bash
   npm run preview
   ```

## Design System

### Colors
- Primary Dark: #000000
- Primary Light: #ffffff
- Accent Purple: #a855f7
- Accent Purple Dark: #7e22ce

### Animations
- Fade, slide, and scroll-triggered animations
- Hover effects on buttons and cards
- Modal transitions
- Staggered animations for lists

## Form Validation

Contact form includes:
- Name (required)
- Email (required, valid format)
- Phone (optional)
- Services selection (required, checkbox)
- Message (required, min 10 chars)

## Cookie Management

- Region detection and storage
- User preferences storage
- 365-day expiration
- Secure and SameSite flags

## Performance

- Code splitting at routes
- Lazy loading
- Minified builds
- Optimized dependencies
- Smooth 60fps animations

## Browser Support

Chrome, Firefox, Safari, Edge (latest versions)

## Key Files to Know

- `src/App.tsx` - Main routing
- `src/components/Header.tsx` - Navigation
- `src/pages/Portfolio.tsx` - Video showcase
- `src/pages/Contact.tsx` - Form handling
- `src/styles/global.css` - Global styles
- `src/utils/cookies.ts` - Cookie management
- `vite.config.ts` - Build configuration

## Deployment

See `DEPLOYMENT.md` for detailed deployment instructions.

Recommended platforms: Vercel, Netlify, GitHub Pages

## Notes

- All animations are optimized for performance
- Smooth scroll is enabled globally
- Forms include error handling and validation
- Regional tracking via cookies for future upgrades
- Responsive design works on all screen sizes

## Development Guidelines

1. Use TypeScript for type safety
2. Follow React hooks patterns
3. Implement responsive design
4. Add animations with Framer Motion
5. Keep components modular
6. Use CSS variables for theming
7. Add proper error handling
8. Test on multiple devices

---

For questions or updates, refer to README.md and DEPLOYMENT.md files.
