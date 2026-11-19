# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recruiters and hiring managers evaluating Hosam Elnabawy for a senior or lead full-time mobile engineering role. They skim many candidates, usually on a desktop during working hours, and want to confirm seniority, scale of past work, and stack fit within a minute, then contact him or take the CV away.

## Product Purpose

A single-page personal portfolio that presents Hosam Elnabawy's CV as a web experience. Success is a recruiter or hiring manager emailing him, opening his LinkedIn/GitHub, or downloading the CV.

## Positioning

Senior Mobile Engineer (confirmed title; not "Senior Software Engineer") with over 5 years of hands-on experience who works across native iOS (Swift, SwiftUI, Objective-C), native Android (Kotlin, Jetpack Compose) and cross-platform (Flutter, Compose Multiplatform, Ionic), and who has shipped at government scale: the Najiz justice app for the Ministry of Justice KSA serves over 4 million users.

## Operating Context

- Static Next.js 16 export, React 19, Tailwind 4, framer-motion, lucide-react.
- Hosted at the root of https://helnabawy.it-plus.site/ (build with `npm run build:root`) and on GitHub Pages under `/new_portfolio` (plain `npm run build`). Asset paths must respect the configurable base path.
- Content lives in `data/portfolio.ts`.

## Capabilities and Constraints

- One page: introduction, experience, projects, skills, education/languages, contact.
- **The CV is the only source of fact** (confirmed by the user). Earlier site copy contained claims not in the CV (awards, certifications, revenue, uptime, ratings, extra percentages, conflicting dates); those are removed and must not return.
- No real app screenshots or portrait photo exist in the repo. Do not reference image paths that do not exist.
- Project links on the old site were `#` placeholders; real store/project URLs are not on hand.

## Brand Commitments

- Name: Hosam Elnabawy. Title: Senior Mobile Engineer. Location: Cairo, Egypt.
- Contact: helnabawy@icloud.com, github.com/helnabawy, linkedin.com/in/hosam1696.

## Evidence on Hand

From `Hosam Elnabawy CV.pdf`:

- Summary: over 5 years hands-on; delivered apps from scratch across industries; adherence to Apple's Human Interface Guidelines; bridges design and engineering; top-rated apps on iOS and Android.
- Education: Zagazig University, Bachelor's in Computer System Engineering, 2015 – 2020.
- Ministry of Justice KSA, November 2022 – now. **Najiz**: micro-frontend architecture across more than 12 micro-apps; design system with dark mode and accessibility across more than 60 screens (Flutter, Dart); virtual sessions between citizens and judges for over 4 million users.
- Jomla ECommerce, October 2019 – December 2022. **Jomlah Store**: iOS Native and Ionic, shipped to iOS and Android; built apps from scratch; App Store rejection protocol that cut average review time by 15 hours per week across the department; worked with QA on cross-platform compatibility. **Aqarmap Saudi**: led a team of 3 building a real-estate app for comparing investment returns across neighbourhoods and properties (Flutter, Dart).
- Freelance and open source: **Mawjood** (HR working-hours system, 10K users; Kotlin, Coroutines, Room, Navigation Component, Retrofit, Dagger Hilt, Clean Architecture). **Guapa** (led mobile development, 10K users, Compose Multiplatform, beauty providers and clients). **AnkiDroid** (flashcard app with more than 10M users; migrated to Gradle composite build, version catalogs, bug fixes, unit testing). **Sahl** (NFC payments for suppliers and cafeterias; Kotlin, Coroutines, Compose; modularisation gave a 40% increase in transaction efficiency). **Bosta** (image lazy loading in Jetpack Compose with zoom, animations, image manipulation). **Dribbox** (adaptive layouts in Jetpack Compose).
- Skills: Swift, SwiftUI, Objective-C, Flutter, Dart, Ionic, Kotlin, Jetpack Compose, Coroutines, Flows, Gradle, GraphQL, Room, SQLite, Git, GitHub, Xcode, CocoaPods, Firebase, Jira, Jenkins, Azure DevOps, Angular, JavaScript, TypeScript, Node.js, HTML5, CSS/SCSS, MVVM, MVI, REST, OOP, design patterns, micro-frontends, server-driven UI, multithreading, testing, networking, CI/CD, responsive and adaptive layouts.
- Languages: Arabic (native), English (intermediate).

Absent, never to be fabricated: testimonials, awards, certifications, revenue or rating figures, uptime, skill "percent proficiency" scores, screenshots, a portrait.

## Product Principles

1. Every number on the page is traceable to the CV.
2. Seniority is shown through scale and scope of real work, not adjectives.
3. A recruiter gets role, scale, stack and a way to make contact without scrolling far.
4. Visualisations encode real quantities or real relationships; no decorative charts.

## Accessibility & Inclusion

Motion must respect `prefers-reduced-motion`; content must be readable without animation running.
