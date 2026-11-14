# Hanken ES website

Source code for **https://www.hankenes.org**, the website of Hanken Entrepreneurship Society rf.

## Read this first

**Everything merged into `main` goes live on www.hankenes.org within about a minute.** There is no staging site in between. `main` is protected: a change can only get there through a pull request, and only after Vercel has built it successfully (see [Making a change](#making-a-change)).

There is one more safety net: if the build fails, Vercel keeps the previous version online. A build that succeeds but looks broken **does** go live.

**This repository is public.** Anyone on the internet can read everything in it, including the full history. Never commit passwords, keys, member lists, contracts or anything that has not been announced yet.

## Who controls what

| What | Where | Who has access |
|---|---|---|
| Code | This GitHub repository (owner account `hankenes`) | Anyone can read it. The board and developers added as collaborators can push branches. |
| Hosting | Vercel, team `hanken-es`, project `hankenes-website` | The board only. Developers do not need Vercel access. |
| Domain and DNS | `hankenes.org` is registered at Squarespace | The board only |

Ask the board for anything that needs Vercel or DNS: domains, settings, or rolling back a deployment.

## Running the site locally

You need Node.js 20 or newer (Vercel builds with Node 24).

```bash
npm ci          # install the exact versions in package-lock.json
npm run dev     # start the site at http://localhost:3000
npm run build   # production build; must finish without errors before you push
```

## Making a change

1. Start from the latest version: `git checkout main && git pull`
2. Create a branch: `git checkout -b update-board-2027` (a short name that says what you are doing)
3. Make the change and check it in `npm run dev`, both at desktop width and at phone width (use the browser's device toolbar).
4. Run `npm run build`. If it shows errors, fix them before continuing.
5. Commit, push the branch and open a pull request on GitHub.
6. Vercel builds the branch automatically and reports the result as a check on the pull request. A red cross means the build failed, so do not merge. (The preview link requires a Vercel login, so if you cannot open it, rely on your local check.)
7. When the Vercel check is green, merge the pull request yourself. If you are unsure about a change, ask another person to look at it first. The change is live about a minute after the merge. Open www.hankenes.org and check it.

## Undoing a bad change

- **Developers:** open the merged pull request on GitHub and press **Revert**. This creates a new pull request that undoes the change; once it is merged, the previous version goes live. From the command line: run `git revert <commit>` on a new branch and open a pull request.
- **Board (Vercel):** Deployments → the previous production deployment → **Instant Rollback**. On the free plan you can only roll back one step. **After a rollback, new pushes to `main` stop going live** until someone presses **Undo Rollback** in Vercel. Prefer the Git revert when you can.

## Where things are

| To change | Edit |
|---|---|
| Board members and roles | `app/page.jsx`: the `BOARD` list at the top |
| Upcoming events | Not in the code. They come from the Luma calendar embedded on `/events`; update events in Luma. |
| Past events (text and photos) | `app/events/page.jsx`: the `PAST_EVENTS` list |
| "Founded by HankenES alumni" logos | `components/FoundersMarquee.jsx`, images in `public/assets/founders/` (also listed in `components/IntroLoader.jsx`) |
| Get involved page (including the recruitment date) | `app/get-involved/page.jsx` |
| Assembly page | `app/assembly-2026/page.jsx` |
| Navigation | `components/SiteHeader.jsx` (home, get involved, assembly) **and** `components/Header.jsx` (events page). Change both. |
| Footer | `components/Footer.jsx` |
| Email, WhatsApp, Instagram, LinkedIn links | `app/page.jsx`, `app/get-involved/page.jsx`, `components/Footer.jsx`, `components/SiteHeader.jsx` |
| Colours, fonts, shared styles | `app/globals.css` (colour variables at the top) |
| Browser tab title and Google description | `app/layout.js` |
| Images | `public/assets/images/`, used in the code as `/assets/images/<file name>` |

Each page and component has its own CSS file next to it (for example `app/events/Events.css`).

## Rules that keep the site working

1. **Work on a branch and open a pull request.** GitHub blocks direct pushes to `main`.
2. **Run `npm run build` before every push.**
3. **Do not rename, move or delete anything in `public/assets/`** without updating every place that uses it. Search first: `git grep "file-name.jpg"`. Images listed in `components/IntroLoader.jsx` are preloaded when the site opens; if one is missing, the loading screen hangs for 6 seconds on every visit.
4. **Keep new images small:** aim for under 500 KB and at most about 2000 px wide. Use `.jpg` or `.webp` for photos.
5. **Do not upgrade packages** (`npm update`, `npm install next@latest`, and so on) unless that is the task. If you do, build and click through every page, and commit `package-lock.json` together with `package.json`.
6. **Never commit passwords, API keys, tokens or private documents.** The repository is public, and anything committed stays in the history even after you delete the file. The site needs no environment variables.
7. **Do not change Vercel or DNS settings.** Ask the board.
8. **Respect the stack:** Next.js 16 (App Router), plain JavaScript (no TypeScript) and plain CSS files (no Tailwind). Next.js 16 differs from many tutorials and from what AI tools often assume. Check `node_modules/next/dist/docs/` or nextjs.org/docs.
9. **AI coding tools are fine, but read and test what they change.** Their instructions are in `AGENTS.md`.

## Stack

- Next.js 16.2 with the App Router; every page is static
- React 19.2
- `motion` 12 for animations (scroll reveals, the gradient band)
- Switzer font, self-hosted in `public/assets/fonts/`
- Luma calendar embed on `/events`

## Known issues

- `hankenes.org` without `www` does not load, because the DNS record that points it at Vercel is missing. The fix is an `A` record for `@` with the value `76.76.21.21` at Squarespace (board).
