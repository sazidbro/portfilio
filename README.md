# Sazid Moontasir — Minimal Typewriter Portfolio

A clean, minimalist, and typography-focused personal portfolio and digital journal for **Sazid Moontasir**. Inspired by the tactile elegance of vintage typewriter manuscripts, this website is built strictly with pure **HTML5** and **CSS3**, requiring zero dependencies, zero build steps, and zero JavaScript.

---

## ✦ Key Features

- **Pure HTML5 & CSS3**: No JavaScript, no TypeScript, no frameworks (no React/Vue/Tailwind/Bootstrap), no Node.js runtime, no build tools.
- **True Standalone Portability**: Double-click `index.html` in any browser on any computer (offline or online) and it works instantly.
- **Typewriter Journal Aesthetic**: Monospace typography, hairline borders, generous whitespace, stark monochrome palette (`#111111` and `#ffffff`), and no AI slop (no gradients, pills, or glassmorphism).
- **CSS-Only Typewriter Headline**: Subtle `@keyframes` typing animation with blinking cursor for the introductory greeting, fully respecting `prefers-reduced-motion`.
- **Zero-Form Privacy Contact Page**: Direct monochrome social links and email link (`mailto:` protocol) with clean local SVG icons—no intrusive forms or backend tracking.
- **100% GitHub Pages Ready**: Built with robust relative paths and includes `.nojekyll` for instant one-click deployment.
- **Accessible & Responsive**: Fully semantic markup, WCAG AAA text contrast, keyboard focus indicators, and mobile-responsive layout across all device widths.

---

## ✦ Project Structure

```text
sazid-portfolio/
│
├── index.html            # Homepage: Profile photo & typed personal narrative
├── education.html        # Education: Chronological academic history
├── skills.html           # Skills: Categorized competencies & learning goals
├── work.html             # Work & Projects: Selected engineering projects
├── contact.html          # Contact: Direct social & email directory (no form)
│
├── css/
│   └── style.css         # Single shared pure CSS3 stylesheet
│
├── assets/
│   ├── images/
│   │   ├── profile.jpg   # Authentic monochrome portrait photograph
│   │   └── institutions/ # Monochrome academic SVG emblems
│   │       ├── college_emblem.svg
│   │       ├── school_emblem.svg
│   │       └── institution_placeholder.svg
│   │
│   └── icons/            # Monochrome social vector icons
│       ├── email.svg
│       ├── facebook.svg
│       ├── github.svg
│       ├── instagram.svg
│       └── linkedin.svg
│
├── README.md             # Project documentation & deployment guide
└── .nojekyll             # Tells GitHub Pages not to run Jekyll
```

---

## ✦ How to Run Locally

Because this project is built exclusively with pure HTML and CSS, you do **not** need Node.js, npm, Python, or any local server.

1. **Direct Browser Opening**:
   - Double-click `index.html` (or right-click &rarr; *Open With* &rarr; *Chrome / Firefox / Safari / Edge*).
   - Navigate freely between pages using the top navigation bar.

2. **Optional Local Static Server** (if desired):
   ```bash
   # Using Python 3:
   python3 -m http.server 8000

   # Or using npx serve:
   npx serve .
   ```
   Open `http://localhost:8000` in your web browser.

---

## ✦ Deploying to GitHub Pages (Step-by-Step)

This repository is pre-configured for GitHub Pages out of the box:

1. **Create a GitHub Repository**:
   - Go to [GitHub.com](https://github.com) &rarr; *New repository*.
   - Name it (e.g. `sazid-portfolio` or `<your-username>.github.io`).
   - Leave it public.

2. **Push the Files to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of minimal typewriter portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repository-name>.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - In your repository on GitHub, click on **Settings** (top tab).
   - In the left sidebar, click on **Pages**.
   - Under **Build and deployment &rarr; Source**, choose **Deploy from a branch**.
   - Under **Branch**, select `main` (or `master`) and folder `/ (root)`.
   - Click **Save**.

4. **Your Site is Live!**:
   - In approximately 30–60 seconds, your site will be live at:
     `https://<your-username>.github.io/<repository-name>/`
   - All relative links and assets will resolve cleanly.

---

## ✦ Customization & Editing

All personal information is formatted in clean, human-readable HTML:

- **Change Profile Photo**: Replace `assets/images/profile.jpg` with any image of your choice.
- **Edit Introduction**: Open `index.html` in any text editor (VS Code, Notepad, Vim) and edit the text inside `<div class="bio-text">`.
- **Edit Education**: Open `education.html` and modify the `<article class="education-item">` entries.
- **Edit Skills**: Open `skills.html` and update the skill names and proficiency labels.
- **Edit Projects**: Open `work.html` and customize project titles, descriptions, and repository URLs.
- **Edit Social Links**: Open `contact.html` and replace the placeholder profile URLs with your real usernames.

---

## ✦ License

Designed and developed for Sazid Moontasir. Distributed under the MIT License.
