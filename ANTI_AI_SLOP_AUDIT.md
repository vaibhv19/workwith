# Anti-AI-Slop Design Audit & Refinement Plan

**Target Project:** `D:\Work\Projects----Personal\MyWork` (`https://mywork.vaibhv19.dev`)  
**Design Reference:** `D:\Work\Projects----Commercial\1nfinity\website`  
**Texture Inspiration:** Narrow Design (`narrowdesign.com`) subtle, static wave contours  
**Audit Date:** October 24, 2026  

---

## 1. What Is "AI-Slop" in Web Design?

In modern web development, "AI-slop" refers to generic, template-driven, formulaic design choices that automated agents frequently apply by default:
1. **Formulaic Eyebrows Everywhere:** Plastering uppercase, widely tracked letter-spaced badge labels above every heading (`ENGINEERING REPERTOIRE`, `ENGINEERING JOURNAL`, `DIRECT COMMUNICATION`, `COLLABORATION AREAS`).
2. **Card Landfills:** Wrapping every paragraph, project, and topic inside identical bordered boxes, turning pages into undifferentiated walls of cards.
3. **Pervasive Stagger Delays (`SectionReveal`):** Delaying content rendering with artificial `delay={idx * 60}` scroll observers that make fast navigation feel stuttery.
4. **Decorative Filler Text & Labels:** Adding ornamental metadata labels (`MENU NAVIGATION`, `DIRECT INQUIRIES`, `[VERIFIED]`) where context is already clear.
5. **Over-styled Containers:** Enclosing simple statistics, lists, and quotes in layered containers with multiple borders, background tints, and corner radiuses.

---

## 2. Component & Page Audit Matrix

| Page / Component | Detected AI-Slop Pattern | Remediation / Human-Directed Refinement | Status |
| :--- | :--- | :--- | :--- |
| **`src/app/projects/page.tsx`** | • Uppercase `ENGINEERING REPERTOIRE` eyebrow.<br>• Section 2 wraps all 36 projects into identical card boxes.<br>• `SectionReveal` delay on every project item. | • Remove artificial eyebrow; open directly with clear, authoritative title and summary.<br>• Redesign Section 2 into a high-density, editorial catalogue ledger (clean architectural rows with subtle borders, aligned columns for title, parent framework, stack, and direct action).<br>• Eliminate staggered reveal delays so catalogue renders instantly. | **To Refine** |
| **`src/app/case-study/page.tsx`** | • `ENGINEERING JOURNAL` eyebrow.<br>• `SectionReveal` staggered delay on each article. | • Remove artificial eyebrow; let the editorial title `Case Studies` lead.<br>• Instant rendering without scroll delays.<br>• Refine typography so project title and category flow naturally. | **To Refine** |
| **`src/app/case-study/[slug]/page.tsx`** | • Redundant `CASE STUDY #0X` eyebrow.<br>• Over-boxed Quick Metrics and Research Verification badges.<br>• Boxed Section Outline. | • Replace boxed metric cards with a clean architectural stat strip.<br>• Present research verification tags as a minimal inline ledger.<br>• Streamline section outline into an understated index. | **To Refine** |
| **`src/app/start-conversation/page.tsx`** | • Three separate eyebrows (`DIRECT COMMUNICATION`, `DIRECT NOTE`, `COLLABORATION AREAS`).<br>• 4 conversation areas wrapped in identical card boxes. | • Remove all three artificial eyebrows.<br>• Convert conversation areas from 4 cards into an editorial 2-column typographic list with clean numbering (`01`, `02`, `03`, `04`).<br>• Direct contact bar simplified into a cohesive communication anchor. | **To Refine** |
| **`src/components/Header.tsx`** | • Mobile menu has decorative `MENU NAVIGATION` and `DIRECT INQUIRIES` labels.<br>• `MyWork` badge inside wordmark. | • Remove ornamental filler labels from mobile drawer.<br>• Streamline brand header to feel crisp, intentional, and balanced. | **To Refine** |
| **`src/components/WaveBackground.tsx`** | None (clean, static, 13KB SVG). | • Retain static, low-contrast wave pattern. Zero movement or disorientation. | **Retained** |

---

## 3. Strict Boundary Matrix

### What Must Remain Unchanged (Content & Functionality)
1. **Canonical Projects:** All 36 projects in `data/projects.ts` (none deleted, none fabricated, none summarized away).
2. **Verified Links:** Direct application links (`Open Live Application ↗`) and GitHub repository links.
3. **Navigation Constraint:** ZERO case-study links on project cards (navbar remains the sole entry point).
4. **Engineering Case Studies:** All 6 technical narratives, architecture diagrams, code excerpts, and research findings in `src/data/caseStudiesData/`.
5. **Contact Functionality:** Serverless Resend dispatch API (`/api/contact`), honeypot protection, field validation, and fallback mailto link.

### What Will Be Improved (Visual Presentation & Experience)
1. Eliminate decorative clutter, card landfills, and artificial eyebrows.
2. Elevate Section 2 into a high-density, legible engineering catalogue ledger.
3. Make all content immediately accessible without staggered delay timers.
4. Ensure typography, spacing, and proportion create hierarchy without relying on borders.
