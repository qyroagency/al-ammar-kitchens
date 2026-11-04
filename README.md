# AL AMMAR Kitchens & Interiors

A bilingual Arabic/English React website concept for a Saudi kitchen design and installation business.

## Run locally

1. Install Node.js (LTS).
2. Extract this project.
3. Open a terminal in the project folder.
4. Run:

```bash
npm install
npm run dev
```

5. Open the local URL shown by Vite (usually http://localhost:5173).

## Production build

```bash
npm run build
```

The production website is generated in `dist/`.

## Deploy to Vercel

1. Upload the project to a GitHub repository.
2. Import the repository into Vercel.
3. Vercel detects Vite automatically.
4. Build command: `npm run build`
5. Output directory: `dist`

## Important before publishing

- Replace the sample Unsplash images with AL AMMAR's own approved project photography.
- Replace indicative sample prices with prices approved by the business.
- Add the real Saudi phone number to the WhatsApp URL.
- Connect the contact form to a real form endpoint or backend. It is currently a front-end demo and does not send or store submissions.
- Confirm actual warranty terms and add them to the site.
- The 3D kitchen is an interactive concept model made from Three.js geometry. For production-grade realism, replace it with optimized, professionally modelled `.glb` kitchen assets and configure material variants.
- The website uses Google Fonts and remote Unsplash images, so those assets require internet access.
