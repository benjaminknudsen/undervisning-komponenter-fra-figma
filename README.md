# Pill og modal: fra Figma til React/Next.js

Komponentopgave fra undervisningen 29. oktober 2026.

## Start

```bash
npm install
npm run dev
```

Åbn den lokale adresse fra terminalen. `npm run lint` kontrollerer koden, og `npm run build` laver et produktionsbuild. Starterens Inter-font er bevaret; build kan kræve adgang til Google Fonts.

## Komponenter og Figma

- `components/Pill.js` er en selvstændig `<button>`. Figma **Type** bliver `type="primary" | "secondary"`, teksten bliver `label`, og **State=Hover** bliver CSS `:hover`. Begge varianter har synlig `:focus-visible`. Pills åbner ikke modalen.
- `components/Modal.js` viser et kort på siden og en native `<dialog>`. Klik, Enter eller mellemrum på kortets knap åbner dialogen. Escape, luk-knappen og klik udenfor lukker; fokus returnerer til kortets knap. `showModal()` gør baggrunden inaktiv.
- Kort og dialog bruger samme indholds-rendering og CSS-klasse, så bredde, padding, typografi, afrunding og skygge er ens. Luk-knappen i dialogen er placeret uden for indholdets layout.
- `app/page.js` viser begge Pill-varianter, checkbox og kort. Checkboxen **Vis separator-linje** styrer `showLine` med `useState`. Samme boolean gælder kort og dialog: Figma **Show line** → React `showLine`.
- Figma Auto Layout bliver Flexbox med `gap` og padding. Prototypeinteraktionen bliver event handlers og state. CSS-transitions ved åbning/lukning respekterer `prefers-reduced-motion`.

## Designværdier

Modalens 448 px bredde, 32 px padding og 14 px gap følger beskrivelsen. Bredden tilpasses skærmen, og højt indhold kan scrolles i dialogen. Farver, 16 px radius, 32 px/700 overskrift, 16 px beskrivelse, 8/16 px pill-padding, 40 × 3 px divider og 180 ms transition er foreløbige valg fra beskrivelsen. De er ikke verificeret mod Figma MCP. Tokens findes i `app/globals.css` og styling i CSS Modules.

## Kontrol

1. Hover over begge pills, og kontrollér synligt fokus med Tab/Shift+Tab. Klik på pills skal ikke åbne dialogen.
2. Slå checkboxen til/fra med mus og mellemrum. Kontrollér linjen på kortet og i dialogen.
3. Klik på kortet, eller fokusér det med Tab og åbn med Enter/mellemrum. Kontrollér samme størrelse og indhold, centreret dialog og mørk baggrund.
4. Klik inde i dialogen skal ikke lukke. Test Escape, kryds og klik udenfor samt fokusretur til kortet.
5. Kontrollér mobilbredde, tastaturnavigation, scroll ved lav skærmhøjde og reduceret bevægelse.
