# REP CLUB

The complete Fitness Competitions Meetup landing page, packaged as a Next.js 14 App Router project.

## Run locally

Use Node.js 20 or later.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. For a production check, run `npm run build` followed by `npm start`.

## Import into AI Studio

Extract the ZIP. The project root is the folder containing `package.json`. If importing through GitHub, upload the extracted source to the repository root, including the `public/runtime` and `src/assets` folders. Use `npm run dev` as the development command when one is requested.

Page sections live in `components/all-components` and are composed in `app/page.tsx`. Reusable UI primitives live in `components/ui`. Photography, logo, and font files are bundled locally. The page uses Framer Motion for selected scroll reveals and bundled scripts for the existing navigation, carousel, and FAQ interactions.

Pass selection displays the existing registration notice while the event date and venue are pending.
