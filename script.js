const loaderScreen = document.getElementById("loader-screen");
const HOLD_TIME = 600;                // after the animation ends, keep the finished word on screen for 1s
const TEXT_FADE = 500;                 // then fade the "loading" word out completely (ms)
const SCREEN_FADE = 400;               // then fade the dark screen away to show home (ms)
const letters = loaderScreen.querySelectorAll(".loader span");
let hidden = false;
let pageLoaded = false;
let animationDone = false;
let settled = 0;

function revealHome() {
  if (hidden) return;
  hidden = true;
  loaderScreen.style.transition = `opacity ${SCREEN_FADE}ms ease, visibility ${SCREEN_FADE}ms ease`;
  loaderScreen.classList.add("hide");
  document.body.classList.remove("loading");
  loaderScreen.addEventListener("transitionend", (e) => {
    if (e.target === loaderScreen) loaderScreen.remove();   // ignore events bubbling up from the word
  });
}

// step 2: fade the "loading" word out completely, and only then show home
let exiting = false;
function startExit() {
  if (exiting || hidden) return;
  exiting = true;
  const word = loaderScreen.querySelector(".loader");
  let next = false;
  const done = () => { if (next) return; next = true; revealHome(); };
  word.style.transition = `opacity ${TEXT_FADE}ms ease`;
  word.style.opacity = "0";
  word.addEventListener("transitionend", done, { once: true });
  setTimeout(done, TEXT_FADE + 150);   // fallback if transitionend does not fire
}

// step 1: home is only revealed when BOTH the page has loaded AND the loading animation has finished
function tryReveal() {
  if (pageLoaded && animationDone) setTimeout(startExit, HOLD_TIME);
}

// each letter rises once and then stays in place; when the last one has landed the animation is complete
letters.forEach((letter) => {
  letter.addEventListener("animationiteration", () => {
    letter.style.animationPlayState = "paused";
    settled += 1;
    if (settled === letters.length) {
      animationDone = true;
      tryReveal();
    }
  }, { once: true });
});

// fallback in case animation events never fire (e.g. "reduce motion" turns the animation off)
setTimeout(() => { animationDone = true; tryReveal(); }, 1800);

function onPageLoaded() {
  pageLoaded = true;
  tryReveal();
}

if (document.readyState === "complete") {
  onPageLoaded();
} else {
  window.addEventListener("load", onPageLoaded);
}

setTimeout(revealHome, 8000);          // safety: never leave visitors stuck on a slow load


const links = document.querySelectorAll('.nav-elements a');
const sections = document.querySelectorAll('#home, #about, #skills, #projects, #contact');
const navBar = document.querySelector('.nav-bar');
const compact = window.matchMedia('(max-width: 1100px)');

// Highlight the nav link of the section under a reference line.
// Desktop: the middle of the screen (as before). Small screens: just below
// the fixed nav, because sections are short there.
function updateActiveLink() {
  const line = compact.matches ? navBar.offsetHeight + 30 : window.innerHeight / 2;
  const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
  let current = null;

  sections.forEach((section) => {
    const r = section.getBoundingClientRect();
    if (r.top <= line && r.bottom > line) current = section;
  });
  if (atBottom) current = sections[sections.length - 1];

  links.forEach((link) => {
    link.classList.toggle('active', !!current && link.getAttribute('href') === '#' + current.id);
  });
}

let ticking = false;
function onScroll() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => { updateActiveLink(); ticking = false; });
}

window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', onScroll);
updateActiveLink();


/* ---- always start at the top (home) on reload ---- */
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

function goHome() {
  if (location.hash) {
    history.replaceState(null, '', location.pathname + location.search);
  }
  window.scrollTo(0, 0);
}

goHome();
window.addEventListener('load', goHome);
window.addEventListener('pageshow', (e) => { if (e.persisted) goHome(); });


/* ---- performance: pause the 3D cube animation while it is off-screen ---- */
const boxes = document.querySelector('.boxes');
if (boxes && 'IntersectionObserver' in window) {
  new IntersectionObserver((entries) => {
    boxes.classList.toggle('is-offscreen', !entries[0].isIntersecting);
  }, { rootMargin: '100px' }).observe(boxes);
}