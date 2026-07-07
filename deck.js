const SECTIONS = [
  'sections/01-llm-foundations.html',
  'sections/02-prompt-engineering.html',
  'sections/03-rag.html',
  'sections/04-agents.html',
  'sections/05-safety.html',
  'sections/06-regulatory-closing.html',
];

// Named anchors -> the data-label of that section's FIRST slide
const SECTION_ANCHORS = {
  'llm-foundations': 'Title',
  'prompt-engineering': 'Prompt Engineering',
  'rag': null,
  'agents': null,
  'safety': null,
  'regulatory-closing': null,
};

const deck = document.getElementById('deck');
let slides = [];
let current = 0;
function goTo(index) {
  if (!slides.length) return;
  current = Math.max(0, Math.min(slides.length - 1, index));
  slides.forEach((slide, i) => slide.classList.toggle('is-active', i === current));
}
function startFromHash() {
  const hash = decodeURIComponent(window.location.hash.replace('#', '')).trim();
  if (!hash) { goTo(0); return; }
  // 1) numeric hash like #9  -> that slide number (1-based)
  const asNumber = parseInt(hash, 10);
  if (!Number.isNaN(asNumber)) { goTo(asNumber - 1); return; }
  // 2) named hash like #prompt-engineering -> that section's first slide
  const label = SECTION_ANCHORS[hash];
  if (label) {
    const idx = slides.findIndex((s) => s.getAttribute('data-label') === label);
    if (idx !== -1) { goTo(idx); return; }
  }
  goTo(0);
}
async function loadSections() {
  for (const path of SECTIONS) {
    const html = await fetch(path).then((response) => response.text());
    const fragment = document.createRange().createContextualFragment(html);
    deck.append(fragment);
  }
  slides = Array.from(deck.querySelectorAll('.slide'));
  slides.forEach((slide, i) => {
    const pagedot = slide.querySelector('.pagedot');
    if (pagedot) pagedot.textContent = `${i + 1} / ${slides.length}`;
  });
  startFromHash();
}
window.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight' || event.key === ' ') goTo(current + 1);
  if (event.key === 'ArrowLeft') goTo(current - 1);
});
window.addEventListener('hashchange', startFromHash);
loadSections();
