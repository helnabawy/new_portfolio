// Every fact in this file comes from "Hosam Elnabawy CV.pdf". Do not add figures the CV does not state.

export const profile = {
  name: "Hosam Elnabawy",
  monogram: "HE",
  title: "Senior Mobile Engineer",
  location: "Cairo, Egypt",
  email: "helnabawy@icloud.com",
  github: "https://github.com/helnabawy",
  linkedin: "https://www.linkedin.com/in/hosam1696",
  cvFile: "/Hosam-Elnabawy-CV.pdf",
  summary: [
    "Software engineer specialising in mobile technologies, with over 5 years of hands-on experience. I have delivered scalable applications from scratch for diverse industries, driving engagement through intuitive UI and UX work and close adherence to Apple's Human Interface Guidelines.",
    "I work in the gap between design and engineering, and that has meant launching and maintaining top-rated apps on both iOS and Android.",
  ],
};

export const facts = [
  { label: "Users served", value: 4, suffix: "M+", note: "Najiz" },
  { label: "Micro-apps", value: 12, suffix: "+", note: "One architecture" },
  { label: "Screens", value: 60, suffix: "+", note: "One design system" },
  { label: "Experience", value: 5, suffix: "+", note: "Years" },
  { label: "Platforms", text: "iOS · Android", note: "Native and cross-platform" },
] as const;

export const experience = [
  {
    org: "Ministry of Justice KSA",
    product: "Najiz",
    period: "November 2022 – now",
    start: 2022 + 10 / 12,
    end: null as number | null,
    notes: [
      "Architected a micro-frontend architecture that drives scalability, modularity and maintainability across more than 12 micro-apps.",
      "Created a design system with dark mode and accessibility, raising the UX of more than 60 screens built with Flutter and Dart.",
      "Streamlined the justice process for over 4 million users by enabling virtual sessions between citizens and judges.",
    ],
  },
  {
    org: "Jomla ECommerce",
    product: "Jomlah Store · Aqarmap Saudi",
    period: "October 2019 – December 2022",
    start: 2019 + 9 / 12,
    end: 2023,
    notes: [
      "Built applications from scratch and improved layouts and user experience in existing iOS apps.",
      "Established a protocol for assessing and modifying rejected applications to meet App Store standards, cutting average review time by 15 hours per week across the department.",
      "Shipped Jomlah Store with iOS Native and the Ionic Framework to both Android and iOS, working with QA to confirm compatibility across platforms.",
      "Led a team of 3 developers building Aqarmap, a real-estate app for comparing investment returns across neighbourhoods and properties, in Flutter and Dart.",
    ],
  },
  {
    org: "Zagazig University",
    product: "Bachelor's in Computer System Engineering",
    period: "2015 – 2020",
    start: 2015,
    end: 2020,
    notes: [] as string[],
  },
];

export const reach = [
  { name: "AnkiDroid", users: 10_000_000, label: "10M+", role: "Open-source contributor" },
  { name: "Najiz", users: 4_000_000, label: "4M+", role: "Senior Mobile Engineer" },
  { name: "Mawjood", users: 10_000, label: "10K", role: "Built the HR system" },
  { name: "Guapa", users: 10_000, label: "10K", role: "Led mobile development" },
];

export const stackColumns = [
  "iOS native",
  "Ionic",
  "Flutter",
  "Kotlin",
  "Jetpack Compose",
  "Compose Multiplatform",
  "Gradle",
] as const;

export type StackColumn = (typeof stackColumns)[number];

export const projects: {
  name: string;
  icon: string;
  color: string;
  kind: string;
  context: string;
  metric?: string;
  description: string;
  stack: StackColumn[];
  tech: string[];
}[] = [
  {
    name: "Najiz",
    icon: "Scale",
    color: "#0b6b4f",
    kind: "Justice services",
    context: "Ministry of Justice KSA",
    metric: "4M+ users",
    description:
      "Virtual sessions between citizens and judges, built as more than 12 micro-apps on one micro-frontend architecture with a design system that covers 60+ screens in light and dark.",
    stack: ["Flutter"],
    tech: ["Flutter", "Dart", "Micro-frontends", "Design system"],
  },
  {
    name: "Jomlah Store",
    icon: "ShoppingBag",
    color: "#c2410c",
    kind: "E-commerce",
    context: "Jomla ECommerce",
    metric: "−15 h review/week",
    description:
      "An e-commerce app built from scratch and deployed to both Android and iOS, alongside the App Store rejection protocol that cut review time across the department.",
    stack: ["iOS native", "Ionic"],
    tech: ["iOS Native", "Ionic Framework"],
  },
  {
    name: "Aqarmap Saudi",
    icon: "Building2",
    color: "#0e7490",
    kind: "Real estate",
    context: "Jomla ECommerce",
    metric: "Team of 3",
    description:
      "A real-estate app that lets users compare investment returns across neighbourhoods and properties. Led the team and its daily operations to deliver on schedule.",
    stack: ["Flutter"],
    tech: ["Flutter", "Dart"],
  },
  {
    name: "AnkiDroid",
    icon: "Layers",
    color: "#1556b0",
    kind: "Education",
    context: "Open source",
    metric: "10M+ users",
    description:
      "A flashcard app for memorising and retaining information. Migrated the project to a Gradle composite build, implemented version catalogs, fixed bugs and strengthened unit testing.",
    stack: ["Gradle"],
    tech: ["Gradle composite build", "Version catalogs", "Unit testing"],
  },
  {
    name: "Mawjood",
    icon: "Clock3",
    color: "#6d28d9",
    kind: "HR and attendance",
    context: "Freelance",
    metric: "10K users",
    description: "An HR system that monitors working hours for 10K users, built on Clean Architecture.",
    stack: ["Kotlin"],
    tech: ["Kotlin", "Coroutines", "Room", "Navigation Component", "Retrofit", "Dagger Hilt"],
  },
  {
    name: "Guapa",
    icon: "Sparkles",
    color: "#b5175a",
    kind: "Beauty services",
    context: "Freelance",
    metric: "10K users",
    description:
      "Connects beauty service providers and clients across surgical and non-surgical procedures. Led the mobile development.",
    stack: ["Compose Multiplatform"],
    tech: ["Compose Multiplatform"],
  },
  {
    name: "Sahl",
    icon: "Nfc",
    color: "#a16207",
    kind: "NFC payments",
    context: "Freelance",
    metric: "+40% efficiency",
    description:
      "An NFC-based payment solution for suppliers and cafeterias. Modularising the code architecture produced a 40% increase in transaction efficiency.",
    stack: ["Kotlin", "Jetpack Compose"],
    tech: ["Kotlin", "Coroutines", "Compose", "NFC"],
  },
  {
    name: "Bosta",
    icon: "Package",
    color: "#b91c1c",
    kind: "Logistics",
    context: "Freelance",
    description:
      "Optimised app performance with image lazy loading in Jetpack Compose, enabling zooming, animations and seamless image manipulation.",
    stack: ["Jetpack Compose"],
    tech: ["Jetpack Compose"],
  },
  {
    name: "Dribbox",
    icon: "LayoutGrid",
    color: "#111114",
    kind: "Adaptive layouts",
    context: "Freelance",
    description: "Adaptive layouts in Jetpack Compose that support a range of screen sizes for better usability.",
    stack: ["Jetpack Compose"],
    tech: ["Jetpack Compose"],
  },
];

export const information = [
  { label: "Role", value: "Senior Mobile Engineer" },
  { label: "Experience", value: "Over 5 years, hands-on" },
  { label: "Location", value: "Cairo, Egypt" },
  { label: "Education", value: "Bachelor's in Computer System Engineering, Zagazig University, 2015 – 2020" },
  { label: "Languages", value: "Arabic (native), English (intermediate)" },
  { label: "iOS", value: "Swift, SwiftUI, Objective-C, Xcode, CocoaPods" },
  { label: "Android", value: "Kotlin, Jetpack Compose, Coroutines, Flows, Room, Gradle" },
  { label: "Cross-platform", value: "Flutter, Dart, Compose Multiplatform, Ionic" },
  { label: "Web", value: "Angular, JavaScript, TypeScript, Node.js, HTML5, CSS/SCSS" },
  { label: "Architecture", value: "Micro-frontends, server-driven UI, MVVM, MVI, Clean Architecture, design patterns, OOP" },
  { label: "Data and APIs", value: "RESTful APIs, GraphQL, SQLite, Room Database, Firebase" },
  { label: "Practices", value: "Testing, CI/CD, multithreading, networking, responsive and adaptive layouts" },
  { label: "Tooling", value: "Git, GitHub, Jira, Jenkins, Azure DevOps" },
];
