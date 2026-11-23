# Atul Soral Physicism

Free physics study resources for **Cambridge IGCSE (0625)**, **IB MYP** and **IB DP** by Atul Soral.
Live site: https://soralatul16.github.io/atul-soral-physicism/

Static site on GitHub Pages. Accounts, assignments and question banks use Firebase (Auth + Firestore).

## Main pages
| Page | What it is |
|---|---|
| `index.html` | Home |
| `igcse-dashboard.html`, `myp-dashboard.html`, `dp-dashboard.html` | Course pages |
| `igcse-simulations.html`, `myp-simulations.html`, `dp-simulations.html` | Simulator galleries |
| `myp-practice.html` | MYP practice sets, assignments, AI tutor |
| `dp-student-portal.html` → `dp-student-dashboard.html` | Student sign-in, homework and tests |
| `sims/` | Simulations and full study units |

## Shared design
| File | Used by |
|---|---|
| `css/asp-base.css` | Every main page: colours, glass buttons, menu, cards, footer |
| `css/asp-glass.css` | Loaded last, so every button stays glass |
| `css/asp-home.css` | Home page only |
| `css/asp-course.css` | Course pages and galleries |
| `js/asp-ui.js` | Menu, light/dark mode, Back button, sign-in, teacher shortcut |
| `js/asp-home.js` | Home: wave, counters, *What's new* list |
| `js/asp-course.js` | Course pages: Core/Extended and SL/HL switches, search |
| `js/asp-gallery.js` | Galleries: groups the simulators by topic |
| `js/asp-toolbar.js` | Back / Home / course toolbar on sims and tool pages |
| `js/asp-papers.js` | Keeps mark schemes away from students (see below) |

## Everyday tasks
- **Add a simulator:** add an entry to `js/dp-sims.js` (`level: "IGCSE"` or `"MYP"`; no level means DP). It appears in the right gallery under the right topic.
- **Add a "What's new" item:** add it at the top of `NEWS` in `js/asp-home.js`.
- **Give a sims page the toolbar:** add `<script src="../js/asp-toolbar.js" defer></script>` before `</body>`.

## Assignments and mark schemes
Students never load the question banks. When the teacher saves an assignment, `js/asp-papers.js`
copies its questions, without mark schemes or answers, to `<programme>Assignments/{id}/paper`.
When a grade is released, the mark scheme for that assignment is attached to the student's
submission as `markKeys`, so the feedback screen can show it.

## Never commit
API keys or worker secrets (for example `worker_gemini.js`). These are listed in `.gitignore`.
