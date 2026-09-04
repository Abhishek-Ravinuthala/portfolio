# Abhishek Ravinuthala — Portfolio

Personal portfolio site. Built with Next.js (App Router), React, TypeScript, and Tailwind CSS, with a few custom bits of canvas work and interaction sprinkled in.

## Highlights

- **Pixel portrait** — a canvas effect that samples a photo into a grid of retro pixel blocks, animates them into place, and reacts to the mouse/touch (repel + spring back).
- **Tilt project cards** — 3D hover tilt with a cursor-tracked glare, built with Framer Motion.
- **Scroll reveals** — sections fade/slide in as they enter the viewport.
- **A hidden Konami code easter egg** — try `↑ ↑ ↓ ↓ ← → ← → B A` anywhere on the page.

## Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS v4
- Framer Motion

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Project Structure

```
app/
  components/       UI components (hero, sections, portrait effect, etc.)
  globals.css        Theme tokens + base styles
  layout.tsx          Root layout, fonts
  page.tsx             Page composition
public/                Static assets (images)
```

## Deployment

Deployed on [Vercel](https://vercel.com).
