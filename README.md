# Agartha Citizenship Test

A professional-looking quiz application that tests your knowledge of Agartha - the legendary hollow earth civilization that has become a viral internet meme. What starts as a legitimate-looking assessment gradually reveals itself as a satirical deep dive into one of the internet's most elaborate inside jokes.

## About This Project

This quiz explores Agartha, a mythical kingdom said to exist at Earth's core. The concept has evolved from 19th-century occult literature through conspiracy theories to become a viral TikTok/Instagram meme phenomenon in 2025. The application maintains a professional quiz aesthetic while covering:

- **Historical occult mythology** from French mystics and hollow earth theories
- **WWII conspiracy theories** involving Hitler's Thule Society and Admiral Byrd
- **Viral TikTok meme culture** featuring Charlie Kirk as the unwitting "Gatekeeper"
- **The White Monster Energy portal phenomenon** from late 2025 social media

## Design Philosophy

The application maintains a **professional quiz aesthetic** with subtle Agartha theming throughout, resembling legitimate citizenship tests or educational assessments. The humor and absurdity emerge organically through:

- Beautiful gradient backgrounds with crystal/inner-earth vibes
- Subtle hints in badges ("Verified by The Sovereign Pontiff," "Powered by Vril," "Crystal Network Certified")
- Cinematic video section showcasing the "Journey to the Inner Earth"
- Gradually escalating absurdity in quiz questions
- The "reveal" at the results screen where the full lore unfolds
- Professional UI design that makes the content even funnier through contrast

## Features

### Agartha-Themed Landing Page
- Stunning gradient background (indigo/blue/cyan) evoking crystal cities and inner earth
- Animated glowing earth emoji with pulse effects
- **Video section**: Cinematic "Journey to the Inner Earth" placeholder (ready for custom video)
  - Gradient background from blue to purple (mimicking underground depths)
  - Tagged with "Down Under (EDM Remix)" and "Vril-Powered"
  - Easy to replace with actual video URL
- Colorful info cards with gradient backgrounds (blue, purple, cyan, indigo)
- Trust badges: "Secure Portal," "Verified by The Sovereign Pontiff," "Powered by Vril," "Crystal Network Certified"
- Professional yet mystical aesthetic

### Interactive Quiz with Random Questions
- **30-question pool**: Each quiz randomly selects 15 questions from a pool of 30
- Every playthrough is different - encourages retakes
- Professional quiz interface with Agartha theming:
  - Gradient progress bars (blue → indigo → purple)
  - A/B/C/D answer format with circular badges
  - Immediate feedback with detailed explanations
  - Crystal-inspired color scheme throughout
- Topics covered:
  - Charlie Kirk as "Ashtar Sheran" with glowing blue eyes
  - White Monster Energy portal mechanics
  - The Sovereign Pontiff and Agarthan governance
  - Vril energy and crystal technology
  - Hitler's Thule Society searches
  - Admiral Byrd's 1947 Antarctic expedition
  - Alexandre Saint-Yves d'Alveydre's astral travels
  - Viral CS:GO and TikTok memes
  - Agartha's climate, population, and longevity
  - Underground tunnel networks
  - Relationship between Agartha and Shambhala

### Results & Status Reveal
- **APPROVED** (75%+): Full lore reveal about Charlie Kirk granting passage
- **PENDING** (50-74%): Study recommendations referencing the absurd sources
- **DENIED** (<50%): Gatekeeper rejection with encouragement to learn the "inside joke"
- Performance breakdown with statistics
- Clear disclaimers that it's satirical content

## Getting Started

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to begin your journey to Agartha.

Build for production:
```bash
npm run build
npm start
```

## Adding a Custom Video

To add your own Agartha video to the landing page:

1. Place your video file in the `public` folder (e.g., `public/agartha-intro.mp4`)
2. Open `app/page.tsx`
3. Find the video section (around line 352-382)
4. Uncomment the `<video>` element and update the source:

```tsx
<video
  className="w-full h-full object-cover"
  autoPlay
  loop
  muted
  playsInline
>
  <source src="/agartha-intro.mp4" type="video/mp4" />
</video>
```

5. You can also use external video URLs or embed YouTube/Vimeo videos

The video placeholder currently shows a beautiful gradient with thematic text and badges.

## Tech Stack

- **Next.js 16** with App Router
- **React 19** with hooks
- **TypeScript** for type safety
- **Tailwind CSS v4** for styling
- **Biome** for linting and formatting

## Project Structure

```
agarthavisa/
├── app/
│   ├── page.tsx          # Main quiz application
│   ├── layout.tsx        # Root layout with fonts
│   └── globals.css       # Global styles
├── public/               # Static assets
└── package.json
```

## Lore References

The quiz draws from authentic Agartha mythology and 2025 viral meme culture:

- French occultist Alexandre Saint-Yves d'Alveydre's astral travels
- Nazi Thule Society's WWII searches for entrances
- Admiral Richard Byrd's alleged 1947 Antarctic discovery
- Edward Bulwer-Lytton's "Vril" energy from *The Coming Race* (1871)
- Charlie Kirk's memetic transformation into "Ashtar Sheran"
- The White Monster Energy portal trend on TikTok
- CS:GO Agartha edits with 2M+ views
- "Down Under" EDM remix soundtrack

## Disclaimer

This is a satirical educational project exploring internet meme culture and occult mythology. Agartha is a fictional/mythical concept. The content is meant for entertainment and cultural commentary purposes.
