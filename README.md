# Dental Clinic Ampang Website

Website klinik pergigian moden & profesional menggunakan Eleventy (11ty) static site generator.

## Features

- ✅ Clean, professional design
- ✅ Fully responsive (mobile-friendly)
- ✅ SEO optimized dengan schema markup
- ✅ WebP images untuk performance
- ✅ Programmatic service pages
- ✅ Testimonials section
- ✅ Google Maps integration
- ✅ WhatsApp floating button

## Tech Stack

- **Framework**: Eleventy (11ty)
- **Templating**: Nunjucks
- **Styling**: Vanilla CSS
- **Fonts**: Montserrat + Inter (Google Fonts)
- **Images**: WebP format

## Installation

```bash
# Install dependencies
npm install

# Run development server
npm start

# Build for production
npm run build
```

## Project Structure

```
src/
├── _data/              # Data files (site.json, services.json, testimonials.json)
├── _includes/          # Layouts and partials (base.njk, header.njk, footer.njk)
├── css/                # Stylesheets
├── images/             # WebP images
├── index.njk           # Homepage
└── services-pages.njk  # Programmatic service pages
```

## Customization

1. **Site Info**: Edit `src/_data/site.json`
2. **Services**: Edit `src/_data/services.json`
3. **Testimonials**: Edit `src/_data/testimonials.json`
4. **Styling**: Edit `src/css/style.css`
5. **Images**: Replace images in `src/images/`

## Deployment

The built site is in the `_site/` directory. Can be deployed to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting

## License

MIT
