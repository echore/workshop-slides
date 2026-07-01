# Workshop Slides

A shared HTML slide deck built by Y and M, styled with a "Soft Editorial" design system (cream paper background, Cormorant Garamond headlines, Work Sans body, five pastel accent colors).

The design is adapted from the [Soft Editorial template](https://github.com/zarazhangrui/beautiful-html-templates/tree/main/templates/soft-editorial/) in [zarazhangrui/beautiful-html-templates](https://github.com/zarazhangrui/beautiful-html-templates), referenced via [zarazhangrui/frontend-slides](https://github.com/zarazhangrui/frontend-slides). The color tokens and font pairing in `style.css` come from that template; the layout system (`layout-hero` / `layout-content`, the fetch-based section loader in `deck.js`) is custom-built for this two-person workflow rather than using the original template's `<deck-stage>` component.

## File layout

```
workshop-slides/
  index.html                     # assembles all sections and boots the deck
  style.css                      # shared design system — see "Editing style.css" below
  deck.js                        # loads sections, handles keyboard navigation
  sections/
    01-llm-foundations.html      # Y
    02-prompt-engineering.html   # M
    03-rag.html                  # Y
    04-agents.html               # Y
    05-safety.html               # M
    06-regulatory-closing.html   # M
  README.md
```

Each section file contains one or more `<section class="slide">` fragments — not a full HTML document. `deck.js` fetches every file listed in its `SECTIONS` array, in order, and appends their slides into `index.html`.

## Running locally

`fetch()` requires an HTTP server — opening `index.html` directly (`file://`) will not load the sections. From this folder, run:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000` in a browser. Use the arrow keys (or space) to move between slides.

## Adding a new slide

Add a `<section class="slide">` to your own section file. Use `class="layout-hero"` for a headline-plus-one-visual slide, or `class="layout-content"` for a headline-plus-bullet-list slide. Both read the same colors, fonts, and card styles from `style.css`, so you can mix layouts without breaking the shared look.

## What's frozen vs. flexible

Frozen in `style.css` — do not change without a pull request the other person reviews:
- Color palette (`--paper`, `--ink`, and the five pastel accents)
- Fonts (Cormorant Garamond for headlines, Work Sans for body)
- Card, chip, and chrome (eyebrow / pagedot / footer) styles
- Base spacing

Flexible — each section owner decides for their own slides:
- How much content per slide (visual-only vs. bullet-heavy)
- Which layout mode (`layout-hero` vs. `layout-content`)
- Any new small components built from the existing tokens

## Day-to-day workflow

1. `git pull` before starting a session.
2. Work only in your own section file(s).
3. `git commit` and `git push` when a section is ready for review.
4. Open a pull request. The other person reviews the diff and leaves comments.
5. Resolve comments, push again, merge.

Any change to `style.css`, `index.html`, or `deck.js` (the files you both touch) must go through a pull request the other person approves — never push directly to `main` for these three files.
