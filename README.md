# Emma Portfolio (Modular Version)

A personal portfolio website — Navbar, Hero, About, Skills, Works, Contact,
and Footer — refactored from a single monolithic `index.html` into separate
section files that are loaded dynamically at runtime.

## Project Structure

```
modular/
├── index.html         # Shell page — just placeholder divs, no content
├── loader.js           # Fetches each section file and injects it into the page
├── script.js            # Mobile nav toggle (loaded after sections are injected)
├── styles.css           # All styling
└── sections/
    ├── navbar.html
    ├── header.html
    ├── about.html
    ├── skills.html
    ├── works.html
    ├── contact.html
    └── footer.html
```

## How It Works

1. `index.html` contains empty `<div>` placeholders for each section
   (e.g. `<div id="about-section"></div>`).
2. `loader.js` runs on page load, `fetch`-es each file inside `sections/`,
   and swaps each placeholder `<div>` for the real HTML content.
3. Once every section has been injected, `loader.js` dynamically loads
   `script.js` — this ordering matters, since `script.js` looks for
   `.menu-btn` and `.nav-links`, which only exist after the navbar section
   has loaded.

## Running Locally

Because `loader.js` uses `fetch()` to load local files, opening
`index.html` directly (`file://...`) will **not** work — browsers block
`fetch` requests to local files for security reasons. You need to serve
the folder over HTTP. Easiest options:

**Using Python:**
```bash
cd modular
python3 -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

**Using Node (with the `serve` package):**
```bash
npx serve modular
```

**Using VS Code:**
Install the "Live Server" extension, right-click `index.html`, and choose
"Open with Live Server."

## Deploying to GitHub Pages

1. Push the `modular` folder contents to your GitHub repo.
2. In the repo settings, enable GitHub Pages (Settings → Pages → select
   branch/folder).
3. GitHub Pages serves files over HTTP by default, so `fetch()` will work
   correctly there — no extra setup needed.

## Notes / Fixes Made During the Refactor

- Fixed a bug where the "Email" and "Message" form fields both had
  `label for="name"` — each field now has its own matching label.
- The contact form still has no submit handler; `script.js` currently
  only handles the mobile menu toggle.

## Tech Used

- Plain HTML5, CSS3, and vanilla JavaScript (no frameworks, no build step)
- Google Fonts (Poppins)
- Font Awesome icons (via CDN)
