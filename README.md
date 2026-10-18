# Amrit's Portfolio

A personal portfolio website with a terminal-inspired look: dark navy background, amber accent, monospace headings. Built with plain HTML, CSS and JavaScript, with no frameworks and no build step.

**Live site:** https://amrit-kumar.vercel.app/

## Sections

- **Hero:** introduction with a blinking cursor and a terminal-style status line
- **About:** a short bio
- **Skills:** grouped like an `ls` listing (languages, web, design)
- **Projects:** Pomodoro Timer, Tip Calculator and Expense Tracker, each linking to its GitHub repository
- **Contact:** email, resume, social links and an animated 3D cube
- **Footer:** copyright line with the year filled in by JavaScript

## Features

- Responsive layout for phones, tablets and desktops (media queries)
- Smooth scrolling, and the nav link for the section on screen is highlighted
- Page loading animation
- Hover effects on project cards and social buttons
- SEO basics: meta description, Open Graph tags, favicon, `robots.txt` and `sitemap.xml`

## Tech

- HTML5, CSS3, vanilla JavaScript
- Fonts: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) and [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (Google Fonts)
- Hosting: [Vercel](https://vercel.com)

## Project structure

```
.
├── index.html
├── app.css
├── script.js
├── favicon.svg
├── robots.txt
├── sitemap.xml
├── img/
│   ├── og-image.png      # link preview image (1200x630)
│   └── ...               # icons and illustrations
└── README.md
```

## Run locally

No installation is needed.

1. Clone the repository:
   ```bash
   git clone https://github.com/amrit978/portfolio.git
   cd YOUR-REPO
   ```
2. Open `index.html` in a browser.

For live reload while editing, use the **Live Server** extension in VS Code, or run:
```bash
npx serve
```

## Deploy

The site is deployed on Vercel.

1. Push the project to GitHub, with `index.html` at the top level of the repository.
2. Import the repository in Vercel.
3. Set **Framework Preset** to `Other` and leave the build command and output directory empty.
4. Deploy. Every push to the main branch redeploys automatically.

After you add a custom domain, update the URLs in `index.html` (`canonical`, `og:url`, `og:image`), `robots.txt` and `sitemap.xml`.

## Customize

- **Colors:** background `#1A2028`, text `#EDEDED`, muted text `#9BA3AE`, accent `#E0A458`
- **Add a project:** copy one project block inside the `pro-col` container in `index.html` and change the title, description, tech line and link
- **Update the resume:** change the link in the contact section

## Credits

- Fonts: Space Grotesk and JetBrains Mono, both under the SIL Open Font License
- Social icons: [Font Awesome Free](https://fontawesome.com) (CC BY 4.0)
- Button style inspired by the Gumroad website
- Some animated UI elements (hover buttons, loader, 3D cube) are adapted from community components. Add the original authors and links here.

## License

The code is available under the MIT License. The text, photos and resume are not covered by it, and all rights to them are reserved.

## Contact

- Email: itsmeamrit@proton.me
- GitHub: [@amrit978](https://github.com/amrit978)
- LinkedIn: [Amrit Kumar](https://www.linkedin.com/in/amrit-kumar-319780329/)