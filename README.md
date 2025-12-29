# 2026 Bingo Generator

A NextJS application that generates custom 5x5 bingo cards with a dark theme and mobile-responsive design.

## Features

- 🎯 5x5 Bingo grid with center "FREE" square
- 🌙 Dark theme design
- 📱 Mobile responsive
- 🎲 Random text generation for each square
- 💾 Save bingo cards as PNG images
- ⚡ Built with Next.js 15 and TypeScript
- 🎨 Styled with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18.17 or later (required for Next.js 15)

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Upgrading from Previous Versions

If you're upgrading from an older version of Next.js, you can use the official codemod:

```bash
npx @next/codemod@latest upgrade latest
```

## How to Use

1. Click the "Generate Bingo" button on the main page
2. A 5x5 bingo grid will appear with random text in each square
3. The center square is always marked as "FREE" in red
4. Click "Generate New Card" to create a new bingo card
5. Click "Save Bingo" to download the current card as a PNG image
6. Click "Back to Start" to return to the main page

## API

The application includes an API endpoint at `/api/bingo` that returns 24 random strings for the bingo squares (excluding the center "FREE" square).

Response format:

```json
{
  "response": ["text1", "text2", ..., "text24"]
}
```

## Tech Stack

- Next.js 15 (latest stable version)
- TypeScript 5.6
- Tailwind CSS 3.4
- React 19
- ESLint 9
- html2canvas (for image generation)
