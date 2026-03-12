# Website Design Consolidation (JVTO Web Experience)

This document consolidates the key design and front-end implementation signals for each primary website experience in this repository.

## Websites Covered
1. **Audit Hub** (`/`)
2. **Why JVTO Hub** (`/why-jvto` and subpages)
3. **Evidence Registry** (`/verify-jvto` and `/verify-jvto/press-recognition`)
4. **Team Registry** (`/team` and `/team/:crewId`)
5. **Ijen Health Screening Guide** (`/travel-guide/ijen-health-screening`)

---

## 1) Audit Hub (`/`)

### 1. Overview Visual
- Bold, forensic-authority aesthetic with uppercase typography, oversized headlines, and high-contrast cards.
- Uses evidence-oriented visual language (badges, hashes, registry motifs, protocol labels).

### 2. The Pitch
- Positions JVTO as a **police-led, safety-first, private, all-inclusive** operator.
- Trust is communicated through “proof-first” storytelling rather than pure destination inspiration.

### 3. Design Direction
- Strategy: **Trust architecture over brochure design**.
- Uses modular sections (hero + trust, authority, press, history, safety, team) that resemble an operational dashboard.

### 4. Screens
- Hero with authority statement and claim framing.
- Trust stack and evidence modules.
- Operational proof cards and health flow highlights.
- Team and footer sections to support conversion/credibility.

### 5. Key Flows
- Home → trust proof modules → verify details.
- Home → booking rail CTA for conversion.
- Home → team and safety pages via nav and section links.

### 6. Color Palette
- Base: off-white and navy for seriousness.
- Accent: safety orange for urgency and action.
- Verification accent: bright/lime green for “verified” signals.

### 7. Typography
- **Headings:** Public Sans, black weight, uppercase, tight tracking.
- **Subheads/Stamps:** JetBrains Mono, 11px-ish, uppercase, extended tracking.
- **Body:** Public Sans, lighter weights for narrative contrast.
- **Script:** None.

### 8. Style Notes
- **Textures:** subtle grid/radial forensic pattern overlays.
- **Shadows:** restrained card shadows; stronger glow for active/emphasis elements.
- **Borders:** soft slate borders, rounded large-radius “bento” cards.

### 9. Design Tokens
- `--color-safety-orange: #FF6B35`
- `--color-authority-navy: #0F172A`
- `--color-verified-lime: #A3E635`
- `--color-verified-bright: #CCFF00`
- `--color-audit-white: #F4F6F8`
- `--font-sans: Public Sans`, `--font-mono: JetBrains Mono`

### 10. Key Elements
- Evidence badges, tech badges, hash labels.
- Bento-card pattern for modular blocks.
- Persistent top nav + bottom nav + booking rail.

### 11. Interaction
- Route transitions (fade/slide) via Motion.
- Hover states on cards and nav items.
- Scroll progress indicator in top nav.

### 12. Responsive Design
- Mobile-first Tailwind classes.
- Breakpoints (`md`, `lg`) adjust nav visibility and card grids.
- Bottom navigation + booking rail support mobile conversion.

### 13. Layout
- Fixed top nav, content sections in constrained containers.
- Vertical narrative flow with alternating card grids and highlight blocks.

### 14. Stack
- React 19 + React Router 7 + Vite 6.
- Tailwind CSS v4 theme tokens.
- Motion (Framer Motion package family) for animation.

### 15. Global Assets
- Lucide icons, brand shield motif, badges, trust/evidence card UI.

---

## 2) Why JVTO Hub (`/why-jvto` + subpages)

### 1. Overview Visual
- Similar forensic visual system, but more educational/editorial in tone.

### 2. The Pitch
- Explains *why* JVTO’s operational model is safer and more reliable.

### 3. Design Direction
- “Support hub” architecture with hub-and-spoke navigation to subpages (story, safety leadership, difference).

### 4. Screens
- Hub landing with structured pillars.
- Subpages focused on narrative authority, organizational story, and differentiation.

### 5. Key Flows
- Why hub → subtopic pages.
- Why hub → proof pages (`/verify-jvto`) and team pages (`/team`) through mapped redirects and links.

### 6. Color Palette
- Inherits global palette; orange and lime indicate emphasis/verification moments.

### 7. Typography
- Same tokenized system as global site (uppercase headings + monospace metadata labels).

### 8. Style Notes
- Card-first storytelling; consistent border radius and badge language.

### 9. Design Tokens
- Reuses global theme tokens and utility component classes.

### 10. Key Elements
- Section headings with protocol-like stamps.
- Internal route map to trust proof and team assets.

### 11. Interaction
- Shared route transitions and hover feedback.

### 12. Responsive Design
- Standard container + breakpoint grid behavior inherited from shared styles.

### 13. Layout
- Structured as a knowledge hub with modular sections and cross-links.

### 14. Stack
- Same shared React/Tailwind/Motion stack and router-driven subpage composition.

### 15. Global Assets
- Shared iconography, forensic UI primitives, badge components.

---

## 3) Evidence Registry (`/verify-jvto` + press recognition)

### 1. Overview Visual
- Most “forensic” experience: registry framing, immutable proof language, asset inspection UI.

### 2. The Pitch
- Value proposition is **verifiable legitimacy** (legal, safety, medical, press, partner proof).

### 3. Design Direction
- Evidence locker metaphor with categorized proof sections and inspection affordances.

### 4. Screens
- Intro hero (“IMMUTABLE PROOF”).
- Sectioned evidence categories (license, history, accountability, safety, police integration, partners, reputation, press).
- Asset viewer overlays and organization audit trail drawer/modal.

### 5. Key Flows
- Verify page → select category → open asset viewer.
- Verify page + hash anchors (`#section-id`) for deep-linking.
- Verify page → organization audit log.

### 6. Color Palette
- Strong navy/white contrast; orange for active/protocol state; verified greens for compliance cues.

### 7. Typography
- Heavy uppercase headers + monospace metadata for “registry database” tone.

### 8. Style Notes
- Scanline effects, bordered badges, technical labels, rounded cards.

### 9. Design Tokens
- Reuses global colors/fonts plus reusable classes (`bento-card`, `tech-badge`, `verified-badge`, `hash-string`, `scanline`).

### 10. Key Elements
- `EvidenceBadge`, `HashBadge`, `AuditStamp`, `AssetViewer`, `AuditTrail`.

### 11. Interaction
- Clickable proof cards open modal-like viewers.
- Smooth scroll to hash sections on load.
- Hover transitions and animated status indicators.

### 12. Responsive Design
- Category grids collapse from multi-column to single-column on smaller screens.
- Typography scales (`text-5xl md:text-8xl`) to preserve hierarchy.

### 13. Layout
- Long-form vertical evidence ledger with repeated section headers and proof grids.

### 14. Stack
- React state/hooks, router location hash parsing, Motion animations, Lucide icon system.

### 15. Global Assets
- Shared trust/evidence badges, iconography, and visual utility classes.

---

## 4) Team Registry (`/team`, `/team/:crewId`)

### 1. Overview Visual
- Personnel-focused extension of forensic UI language.

### 2. The Pitch
- “Real operators, real credentials”: converts trust from abstract claims to named people and records.

### 3. Design Direction
- Directory + profile drill-down.

### 4. Screens
- Team list/index (cards/filters).
- Individual profile with credentials, quotes, safety metrics, and audit trail references.

### 5. Key Flows
- Team index → filter/sort → open profile.
- Profile → inspect supporting logs/credentials.

### 6. Color Palette
- Shared base and accents; safety orange remains key for active/important controls.

### 7. Typography
- Same global heading/stamp/body hierarchy for consistency with proof pages.

### 8. Style Notes
- Card density and metadata-heavy labels reinforce the registry paradigm.

### 9. Design Tokens
- Shared tokens + reusable badge/card classes.

### 10. Key Elements
- Team cards, team filter controls, audit-linked profile content.

### 11. Interaction
- Interactive filters, profile navigation, hover/focus feedback.

### 12. Responsive Design
- Grid/list behaviors adjust with breakpoints; mobile-first touch-friendly cards.

### 13. Layout
- List-detail pattern with strong metadata grouping.

### 14. Stack
- React component composition with SSOT-backed content and shared UI tokens.

### 15. Global Assets
- Shared iconography, badges, and registry visual motifs.

---

## 5) Ijen Health Screening Guide (`/travel-guide/ijen-health-screening`)

### 1. Overview Visual
- Operational/medical page styled as protocol documentation, not generic blog content.

### 2. The Pitch
- Mandatory health screening is positioned as proactive risk mitigation and care quality.

### 3. Design Direction
- Procedure-first narrative with trust and compliance framing.

### 4. Screens
- Health protocol intro, process explanation, doctor/licensing references, and compliance cues.

### 5. Key Flows
- Visitor arrives from nav/home → understands screening process → proceeds with confidence to booking/support paths.

### 6. Color Palette
- Uses global palette; verified greens and orange guide attention to critical medical/safety information.

### 7. Typography
- Consistent with other sections for coherence and institutional tone.

### 8. Style Notes
- Registry cards and protocol labels maintain system continuity.

### 9. Design Tokens
- Shared tokens from `index.css` and component utility classes.

### 10. Key Elements
- Medical/protocol iconography, verification labels, process-oriented content blocks.

### 11. Interaction
- Standard hover/transition patterns and route-level motion.

### 12. Responsive Design
- Content reflows cleanly with Tailwind breakpoints; readable on narrow viewports.

### 13. Layout
- Sequential explanatory layout that supports comprehension before action.

### 14. Stack
- Same React Router route component architecture + Tailwind + Motion.

### 15. Global Assets
- Shared typography, icon set, and evidence/trust UI primitives.

---

## Cross-Site Design System Summary

- **Unified brand language:** authority + verification + operations.
- **Tokenized theming:** central color/font tokens in `index.css`.
- **Reusable UI primitives:** badges, hash labels, bento cards, section heading patterns.
- **Global scaffolding:** fixed top nav, route transitions, bottom nav, booking rail.
- **Technical baseline:** React + Vite + Tailwind + Motion + Lucide.
