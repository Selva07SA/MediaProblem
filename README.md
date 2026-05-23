# MediaProblem - Professional Media Editing Website

A premium, fast-loading, responsive React website for MediaProblem, a professional media editing company. Features smooth animations, video showcases, and modern design patterns.

## 🎯 Features

### Pages
- **Landing Page** - Hero section with CTAs and feature highlights
- **Services** - Comprehensive service offerings with detailed descriptions
- **Pricing** - Multiple pricing tiers with feature comparison
- **Portfolio** - Video showcase with filtering and modal playback
- **Contact Us** - Professional contact form with service selection

### Design Features
- 🎨 **Premium Design** - Multicolor gradient with black, white, and purple theme
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Fast Loading** - Optimized performance with lazy loading and code splitting
- ✨ **Smooth Animations** - Framer Motion animations throughout
- 🎬 **Video Showcase** - Portfolio section with video playback modal
- 🍪 **Cookie Tracking** - Region detection and user preference tracking
- 🔄 **Smooth Scrolling** - Native smooth scroll behavior

### Technical Stack
- **React 18.2** - Latest React with hooks
- **TypeScript** - Full type safety
- **Vite** - Lightning-fast build tool
- **Framer Motion** - Advanced animations
- **React Router** - Client-side routing
- **React Hook Form** - Efficient form handling
- **JS Cookie** - Cookie management for tracking

## 📋 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.tsx      # Navigation header
│   ├── Header.css
│   ├── Footer.tsx      # Footer section
│   ├── Footer.css
│   └── index.ts        # Component exports
├── pages/              # Page components
│   ├── Landing.tsx     # Home page
│   ├── Landing.css
│   ├── Services.tsx    # Services page
│   ├── Services.css
│   ├── Pricing.tsx     # Pricing page
│   ├── Pricing.css
│   ├── Portfolio.tsx   # Portfolio page
│   ├── Portfolio.css
│   ├── Contact.tsx     # Contact form page
│   ├── Contact.css
│   └── index.ts        # Page exports
├── styles/             # Global styles
│   └── global.css      # Global CSS variables and utilities
├── utils/              # Utility functions
│   └── cookies.ts      # Cookie management utilities
├── App.tsx             # Main app component with routing
└── main.tsx            # Entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd Media_Problem
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The site will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

Output files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Design System

### Color Scheme
- **Primary Dark**: `#000000`
- **Primary Light**: `#ffffff`
- **Accent Purple**: `#a855f7`
- **Accent Purple Dark**: `#7e22ce`

### Gradients
- **Dark Theme**: Black gradient shading on containers
- **Light Theme**: White gradient shading on containers
- **Purple Gradient**: Primary accent gradient

### Typography
- **Font Family**: System fonts with fallbacks
- **Heading Sizes**: Responsive scaling from mobile to desktop
- **Font Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold), 800 (extra bold)

## 📱 Responsive Breakpoints

- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 🎬 Features Breakdown

### Landing Page
- Hero section with gradient text animation
- Feature cards with hover effects
- Call-to-action sections
- Smooth scroll animations

### Services Page
- 6+ service categories
- Detailed feature lists
- Hover animations
- Responsive grid layout

### Pricing Page
- 3 pricing tiers (Starter, Professional, Enterprise)
- Feature comparison
- Highlighted popular plan
- FAQ section
- Responsive pricing cards

### Portfolio Page
- Video project showcase
- Category filtering
- Modal video playback
- Project information overlay
- Statistics section
- Smooth animations and transitions

### Contact Page
- Professional contact form
- Service selection checkboxes
- Multi-field validation
- Contact information display
- Social media links
- Success message animation
- Cookie storage for preferences

## 🔧 Configuration

### Vite Configuration
- HMR enabled for fast refresh
- Optimized bundle size
- Minification enabled
- Source maps disabled in production

### TypeScript Configuration
- Strict mode enabled
- JSX support
- ES2020 target
- DOM and DOM.Iterable libs

## 🍪 Cookie Management

The site implements cookie tracking for:
- **Region Detection**: Automatically detects and stores user region
- **User Preferences**: Stores contact form preferences
- **Service Interests**: Remembers selected services

Cookies are set with:
- Secure flag enabled
- SameSite=Strict policy
- 365-day expiration

## ✨ Animations & Transitions

- Framer Motion for complex animations
- CSS transitions for simple effects
- Staggered animations for element sequences
- Hover effects on buttons and cards
- Scroll-triggered animations
- Loading skeletons
- Modal transitions

## 📊 Performance Optimization

- Code splitting at route level
- Lazy loading of images
- Minified production builds
- Optimized dependency bundling
- Smooth 60fps animations
- CSS animations for performance

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📝 Contact Form Validation

- **Name**: Required
- **Email**: Required, valid email format
- **Phone**: Optional
- **Services**: Required (at least one)
- **Message**: Required, minimum 10 characters

## 🔐 Security Features

- Input validation on forms
- XSS protection via React
- Secure cookie settings
- CSRF-safe form handling

## 📚 Dependencies

### Main Dependencies
- `react@^18.2.0` - React library
- `react-dom@^18.2.0` - React DOM renderer
- `react-router-dom@^6.20.0` - Client-side routing
- `framer-motion@^10.16.4` - Animation library
- `js-cookie@^3.0.5` - Cookie management
- `react-hook-form@^7.48.0` - Form handling

### Dev Dependencies
- `vite@^5.0.8` - Build tool
- `@vitejs/plugin-react@^4.2.1` - Vite React plugin
- `typescript@^5.2.2` - TypeScript
- ESLint and related packages for code quality

## 🎯 Future Enhancements

- Dark/Light theme toggle
- Multi-language support
- Admin dashboard
- Project management system
- Payment integration
- Email notifications
- Advanced analytics
- CMS integration

## 📄 License

This project is proprietary and confidential.

## 👨‍💼 Support

For support, contact: info@mediaproblem.com

---

**Built with ❤️ for MediaProblem**
