const loaderScreen = document.getElementById("loader-screen");
const MIN_TIME = 1200;                 // show the loader for at least 1.2 seconds
const startTime = performance.now();
let hidden = false;

function hideLoader() {
  if (hidden) return;
  hidden = true;
  const wait = Math.max(0, MIN_TIME - (performance.now() - startTime));
  setTimeout(() => {
    loaderScreen.classList.add("hide");
    document.body.classList.remove("loading");
    loaderScreen.addEventListener("transitionend", () => loaderScreen.remove(), { once: true });
  }, wait);
}

if (document.readyState === "complete") {
  hideLoader();
} else {
  window.addEventListener("load", hideLoader);
}

setTimeout(hideLoader, 5000);          // safety: never leave visitors stuck on a slow load


const links = document.querySelectorAll('.nav-elements a');
const sections = document.querySelectorAll('#home, #about, #skills, #projects, #contact');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      links.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { rootMargin: '-50% 0px -50% 0px' });

sections.forEach((section) => observer.observe(section));