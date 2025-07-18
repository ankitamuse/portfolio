# Deployment Guide

## Quick Start

Your professional portfolio is ready! Here's how to deploy it to GitHub Pages:

## 1. Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository named `ankitamuse`
2. Make sure it's public (required for GitHub Pages)
3. Don't initialize with README (we already have one)

## 2. Push to GitHub

Run these commands in your terminal from the portfolio directory:

```bash
cd /Users/ankitasharma/Documents/Oracle/projects/personal/ankitamuse/portfolio
git remote add origin https://github.com/ankitamuse/ankitamuse.git
git branch -M main
git push -u origin main
```

## 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "GitHub Actions"
5. The GitHub Action will automatically deploy your site

## 4. Access Your Portfolio

Your portfolio will be available at: `https://ankitamuse.github.io/ankitamuse`

## Local Development

To run the portfolio locally:

```bash
cd /Users/ankitasharma/Documents/Oracle/projects/personal/ankitamuse/portfolio
npm run dev
```

Then open http://localhost:3000 in your browser.

## Features Included

✅ Modern, professional design
✅ Fully responsive (mobile-first)
✅ TypeScript with Next.js 15
✅ Smooth animations with Framer Motion
✅ SEO optimized
✅ Accessibility compliant
✅ Professional sections:
   - Hero with call-to-action
   - About with highlights
   - Experience timeline
   - Technical skills with proficiency
   - Contact information
   - Professional footer

✅ GitHub Actions for automatic deployment
✅ Optimized for GitHub Pages

## Customization

To customize your portfolio:

1. **Personal Information**: Update contact details in components
2. **Colors**: Modify `tailwind.config.js` for color schemes
3. **Content**: Edit the component files in `/components`
4. **Resume**: Add your resume file to the `/public` folder
5. **Images**: Add any images to the `/public` folder

## Technical Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## Support

If you need any modifications or have questions, feel free to reach out!

---

**Your portfolio is now ready for professional use! 🚀**
