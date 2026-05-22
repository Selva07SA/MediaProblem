# Quick Start Guide - MediaProblem Website

## 🚀 Get Started in 5 Minutes

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Steps

1. **Navigate to project directory**
   ```bash
   cd e:\Media_Problem
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:3000`
   - The site will open automatically

### 🎉 That's it! You're ready to develop.

## 📝 Common Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Check code quality |

## 🗂️ Project Structure Quick Reference

- **Landing Page**: `src/pages/Landing.tsx`
- **Services Page**: `src/pages/Services.tsx`
- **Pricing Page**: `src/pages/Pricing.tsx`
- **Portfolio Page**: `src/pages/Portfolio.tsx` (with video showcase)
- **Contact Page**: `src/pages/Contact.tsx` (with form)
- **Header/Nav**: `src/components/Header.tsx`
- **Global Styles**: `src/styles/global.css`
- **Utils**: `src/utils/` (cookies, performance, constants)

## 🎨 Customization Quick Tips

### Change Colors
Edit `src/styles/global.css` CSS variables:
```css
--primary-dark: #000000;
--accent-purple: #a855f7;
```

### Add New Page
1. Create component in `src/pages/PageName.tsx`
2. Add route in `src/App.tsx`
3. Add nav link in `src/components/Header.tsx`

### Modify Services
Edit service list in `src/pages/Services.tsx`

### Update Pricing
Edit `src/pages/Pricing.tsx` pricing plans array

### Add Portfolio Projects
Edit projects array in `src/pages/Portfolio.tsx`

## 📱 Responsive Design

- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: < 768px

Test with browser DevTools!

## 🚀 Deploy

1. **Build**:
   ```bash
   npm run build
   ```

2. **Deploy to Vercel** (Recommended):
   ```bash
   npm install -g vercel
   vercel --prod
   ```

See `DEPLOYMENT.md` for more options.

## 🆘 Troubleshooting

### Port 3000 in use?
```bash
npm run dev -- --port 3001
```

### Build fails?
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Changes not showing?
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Check browser console for errors

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Framer Motion](https://www.framer.com/motion)
- [React Router](https://reactrouter.com)

## 💡 Pro Tips

1. **Hot Module Reload**: Changes auto-refresh in dev mode
2. **TypeScript**: Hover over code for type hints
3. **DevTools**: Use React DevTools browser extension
4. **Lighthouse**: Check performance scores in Chrome DevTools
5. **Mobile Preview**: Test on actual device with `http://your-ip:3000`

## 📞 Need Help?

Check these files:
- `README.md` - Full documentation
- `DEPLOYMENT.md` - Deployment guide
- `.github/copilot-instructions.md` - Development guidelines

---

**Happy coding! 🎉**
