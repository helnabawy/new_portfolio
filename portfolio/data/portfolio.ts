export const portfolioData = {
  hero: {
    name: "Hosam Elnabawy",
    title: "Senior Software Engineer",
    subtitle: "Building high-performance, user-centric mobile applications for product-focused companies.",
    primaryCta: "Get in Touch",
    secondaryCta: "View My Work",
  },
  valueProps: [
    {
      title: "Quality-Focused Development",
      description: "I build robust, scalable, and maintainable code that stands the test of time, ensuring your application is a long-term asset, not a short-term liability.",
      icon: "ShieldCheck", // Lucide icon name
    },
    {
      title: "User-Centric Experiences",
      description: "I translate complex requirements into intuitive, engaging, and pixel-perfect user interfaces that drive adoption and user satisfaction.",
      icon: "Users",
    },
    {
      title: "Performance-Driven Engineering",
      description: "From smooth animations to efficient data handling, I obsess over performance to deliver a fast, responsive, and delightful experience on every device.",
      icon: "Zap",
    },
  ],
  about: {
    headline: "Engineering with a Designer's Eye",
    body: [
      "I'm a Senior Software Engineer with over 8 years of experience building mobile applications that are as beautiful as they are functional. I don't just write code; I craft experiences. My passion lies in bridging the gap between design and engineering, ensuring that every pixel is perfect and every interaction feels natural.",
      "I specialize in the Apple ecosystem (Swift, SwiftUI) and cross-platform technologies (Flutter, React Native), bringing a deep understanding of platform best practices to every project. Whether it's architecting a complex fintech app or fine-tuning the animations of a travel journal, I bring a relentless focus on quality and user satisfaction.",
    ],
  },
  skills: [
    "Swift (iOS)",
    "Flutter (Cross-Platform)",
    "Kotlin (Android)",
    "SwiftUI",
    "React Native (Next.js)",
    "TypeScript",
    "Git & GitHub",
    "RxJava/RxKotlin",
    "CoreData",
    "Room",
    "CI/CD",
    "Unit & UI Testing",
    "Firebase",
    "REST APIs",
    "GraphQL",
  ],
  projects: [
    {
      title: "Fintech Wallet App",
      role: "Lead Engineer",
      tech: ["SwiftUI", "Jetpack Compose", "KMP"],
      description: "Engineered a high-security mobile wallet for P2P payments and crypto trading. Implemented biometric authentication, real-time socket connections for live market data, and a shared business logic layer using Kotlin Multiplatform to ensure 100% feature parity across iOS and Android.",
      link: "#", // Placeholder
      icon: "Wallet",
    },
    {
      title: "HealthHub Connect",
      role: "Senior Developer",
      tech: ["React Native", "WebRTC", "TypeScript"],
      description: "Built a HIPAA-compliant telemedicine platform enabling secure, low-latency video consultations. Optimized WebRTC streams for poor network conditions and developed a custom scheduling system that reduced appointment no-shows by 30%.",
      link: "#",
      icon: "Activity",
    },
    {
      title: "TraveLog Journal",
      role: "Mobile Architect",
      tech: ["Flutter", "Firebase", "Mapbox"],
      description: "Designed an offline-first social travel journal. Utilized local database synchronization (sqflite) to allow full app functionality without internet access, seamlessly syncing terabytes of user-generated content when online.",
      link: "#",
      icon: "Map",
    },
  ],
  contact: {
    headline: "Ready to build something extraordinary?",
    cta: "Start a Conversation",
    email: "helnabawy@icloud.com",
    socials: [
      { name: "GitHub", href: "https://github.com/helnabawy", icon: "Github" },
      { name: "LinkedIn", href: "https://www.linkedin.com/in/helnabawy", icon: "Linkedin" },
      { name: "Email", href: "mailto:helnabawy@icloud.com", icon: "Mail" },
    ],
  },
};