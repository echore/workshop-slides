# Screenshots for the Access slide (Part 1)

Drop image files here with these exact names. The Access slide's `<img>` slots
reference them (paths resolve relative to `index.html`, i.e. the repo root).

| Slot | Filename | What to capture |
|------|----------|-----------------|
| Desktop app | `desktop.png` | Claude Code desktop app (or any desktop AI app) |
| Chatbot · Claude | `chatbot-claude.png` | Claude.ai home screen |
| Chatbot · Gemini | `chatbot-gemini.png` | Gemini home screen |
| Chatbot · ChatGPT | `chatbot-chatgpt.png` | ChatGPT home screen |
| API | `api-notion.png` | Notion AI demo from notion.com/product/ai (screenshot or GIF) |
| CLI | `cli.png` | terminal running Claude Code (optional; slot is a text placeholder until added) |
| Local | `local.png` | Ollama / LM Studio window (optional; text placeholder until added) |

The Chatbot chip on the Access slide has Claude / Gemini / ChatGPT sub-tabs —
click to switch between the three chatbot screenshots ("same question, different chatbots").

To wire CLI and Local to real images, in `sections/01-llm-foundations.html` replace
`<div class="acc-shot">CLI / terminal screenshot</div>`
with
`<div class="acc-shot"><img src="images/cli.png" alt="CLI"></div>`
