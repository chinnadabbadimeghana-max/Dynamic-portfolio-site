// loader.js
// Fetches each HTML section partial and injects it into its placeholder div.
// Once every section is in the DOM, script.js is loaded so its
// querySelector calls (e.g. .menu-btn) can actually find the elements.

const sections = [
  { id: "navbar-section", file: "sections/navbar.html" },
  { id: "header-section", file: "sections/header.html" },
  { id: "about-section", file: "sections/about.html" },
  { id: "skills-section", file: "sections/skills.html" },
  { id: "works-section", file: "sections/works.html" },
  { id: "contact-section", file: "sections/contact.html" },
  { id: "footer-section", file: "sections/footer.html" },
];

async function loadSection({ id, file }) {
  const res = await fetch(file);
  if (!res.ok) {
    console.error(`Failed to load ${file}: ${res.status}`);
    return;
  }
  const html = await res.text();
  document.getElementById(id).outerHTML = html;
}

async function loadAllSections() {
  await Promise.all(sections.map(loadSection));

  // Now that the real DOM elements exist, load the interactive script.
  const script = document.createElement("script");
  script.src = "script.js";
  document.body.appendChild(script);
}

loadAllSections();
