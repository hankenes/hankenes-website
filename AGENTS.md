<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project rules (Hanken ES website)

Read `README.md` before changing anything. The rules that matter most:

- Every push to `main` deploys to the live site www.hankenes.org within a minute. Never commit or push directly to `main`; work on a branch.
- Run `npm run build` and make sure it passes before proposing a commit.
- Keep the stack: plain JavaScript (no TypeScript), plain CSS files next to each page/component (no Tailwind, no CSS-in-JS, no UI libraries), `motion` for animation. Do not add dependencies unless the task requires it.
- Do not upgrade `next`, `react`, `react-dom` or other packages unless that is the task.
- Do not rename, move or delete files in `public/assets/` without updating every reference (`git grep`), including the preload list in `components/IntroLoader.jsx`.
- The navigation exists twice: `components/SiteHeader.jsx` and `components/Header.jsx` (events page). Change both.
- Make minimal, targeted edits. Do not reformat or restructure files you were not asked to touch.
- Never add secrets, API keys, tokens or private data: the repository is public. The site needs no environment variables.
