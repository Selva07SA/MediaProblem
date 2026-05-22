# MediaProblem Website - Deployment Guide

## 📦 Deployment Options

### 1. Vercel (Recommended)

**Advantages:**
- Zero-config deployments
- Automatic SSL/HTTPS
- Global CDN
- Environment variables management
- Automatic previews for PRs

**Steps:**

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow prompts and your site will be live

### 2. Netlify

**Steps:**

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to Netlify:
   - Drag and drop `dist` folder to Netlify
   - Or use Netlify CLI:
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=dist
   ```

### 3. GitHub Pages

1. Update `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/media-problem"
   ```

2. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

3. Add deploy script to package.json:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

### 4. Docker

**Dockerfile:**
```dockerfile
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**Build and Run:**
```bash
docker build -t mediaproblem .
docker run -p 80:80 mediaproblem
```

## 🚀 Performance Optimization

### Before Deployment

1. **Build Optimization:**
   ```bash
   npm run build
   ```

2. **Check Bundle Size:**
   ```bash
   npm install --save-dev source-map-explorer
   npm run build
   npx source-map-explorer 'dist/**/*.js'
   ```

3. **Lighthouse Audit:**
   - Use Chrome DevTools Lighthouse
   - Target: 90+ score

### Optimization Checklist

- [ ] Minified CSS/JS
- [ ] Lazy loading implemented
- [ ] Images optimized
- [ ] Code splitting enabled
- [ ] Tree shaking enabled
- [ ] Gzip compression enabled
- [ ] Browser caching configured

## 🔒 Security Considerations

1. **Environment Variables:**
   - Never commit `.env.local`
   - Use platform-specific secret management
   - Rotate secrets regularly

2. **CORS Headers:**
   ```
   Access-Control-Allow-Origin: *
   Access-Control-Allow-Methods: GET, POST, OPTIONS
   ```

3. **Security Headers:**
   ```
   X-Content-Type-Options: nosniff
   X-Frame-Options: SAMEORIGIN
   X-XSS-Protection: 1; mode=block
   ```

4. **HTTPS:**
   - Always use HTTPS in production
   - Configure SSL/TLS certificates

## 📊 Monitoring & Analytics

### Recommended Services

1. **Google Analytics:**
   - Install Google Analytics tag
   - Track user behavior and conversions

2. **Sentry (Error Tracking):**
   ```bash
   npm install --save @sentry/react @sentry/tracing
   ```

3. **Datadog (Performance Monitoring):**
   - Real User Monitoring (RUM)
   - Infrastructure monitoring

## 🔄 CI/CD Pipeline

### GitHub Actions Example

**.github/workflows/deploy.yml:**
```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - run: npm run lint
      - name: Deploy to Vercel
        run: vercel --prod --token ${{ secrets.VERCEL_TOKEN }}
```

## 🧪 Testing Before Deployment

1. **Build Test:**
   ```bash
   npm run build
   npm run preview
   ```

2. **Lint Check:**
   ```bash
   npm run lint
   ```

3. **Type Check:**
   ```bash
   tsc --noEmit
   ```

## 📝 Environment Setup

### Development
- NODE_ENV=development
- VITE_API_URL=http://localhost:3000

### Production
- NODE_ENV=production
- VITE_API_URL=https://api.mediaproblem.com

## 💾 Backup & Recovery

1. **Git Backups:**
   - Maintain git history
   - Push to remote repository

2. **Database Backups:**
   - If using database, implement daily backups
   - Test recovery procedures

## 📈 Post-Deployment

1. **Monitor Performance:**
   - Check website speed
   - Monitor error rates
   - Analyze user behavior

2. **Regular Updates:**
   - Keep dependencies updated
   - Security patches
   - Feature improvements

3. **Maintenance:**
   - Scheduled maintenance windows
   - Regular backups
   - Security audits

## 🆘 Troubleshooting

### Build Fails
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Port Already in Use
```bash
# Linux/Mac
sudo lsof -i :3000
kill -9 <PID>

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### CORS Issues
- Check server CORS headers
- Verify API endpoint URLs
- Check cross-origin requests

## 📞 Support

For deployment issues:
- Check platform documentation
- Review error logs
- Contact platform support

---

**Last Updated:** 2024
