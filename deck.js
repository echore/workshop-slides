const SECTIONS = [
  'sections/01-llm-foundations.html',
  'sections/02-prompt-engineering.html',
  'sections/03-rag.html',
  'sections/04-agents.html',
  'sections/05-safety.html',
  'sections/06-regulatory-closing.html',
];

const deck = document.getElementById('deck');
let slides = [];
let current = 0;

function goTo(index) {
  if (!slides.length) return;
  current = Math.max(0, Math.min(slides.length - 1, index));
  slides.forEach((slide, i) => slide.classList.toggle('is-active', i === current));
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

  goTo(0);
}

window.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight' || event.key === ' ') goTo(current + 1);
  if (event.key === 'ArrowLeft') goTo(current - 1);
});

loadSections();
