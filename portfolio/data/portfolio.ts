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
      "I'm a Senior Mobile Engineer with over 5 years of hands-on experience building mobile applications that are as beautiful as they are functional. I don't just write code; I craft experiences. My passion lies in bridging the gap between design and engineering, ensuring that every pixel is perfect and every interaction feels natural.",
      "I specialize in the Apple ecosystem (Swift, SwiftUI, Objective-C) and cross-platform technologies (Flutter, Dart, Ionic), bringing a deep understanding of platform best practices to every project. From architecting micro-frontend architectures to creating comprehensive design systems with dark mode and accessibility features, I bring a relentless focus on quality and user satisfaction.",
    ],
  },
  skills: [
    "Swift",
    "SwiftUI",
    "Objective-C",
    "Flutter",
    "Dart",
    "Ionic",
    "Kotlin",
    "Jetpack Compose",
    "Coroutines",
    "Flows",
    "Angular",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "HTML5",
    "CSS/SCSS",
    "Git",
    "GitHub",
    "Xcode",
    "CocoaPods",
    "Firebase",
    "Jira",
    "Jenkins",
    "Azure DevOps",
    "GraphQL",
    "Room Database",
    "SQLite",
    "RESTful APIs",
    "MVVM",
    "MVI",
    "Clean Architecture",
    "Design Patterns",
    "Micro-frontends",
    "Server Driven UI",
    "Multithreading",
    "Testing",
    "Networking",
    "CI/CD",
    "Responsive & Adaptive Layouts",
  ],
  projects: [
    {
      title: "Najiz",
      role: "Senior Mobile Engineer",
      tech: ["Flutter", "Dart", "Micro-frontends"],
      description: "Architected micro-frontend architecture driving scalability across more than 12 micro-apps. Created a comprehensive design system with dark mode and accessibility features, elevating UX across 60+ screens. Streamlined the justice process for over 4 million users by enabling virtual sessions between citizens and judges.",
      link: "#",
      icon: "Scale",
      caseStudy: {
        timeline: "Jan 2022 - Present",
        overview: "Najiz is a revolutionary justice platform that transforms how citizens interact with the judicial system. As the Senior Mobile Engineer, I led the technical implementation of a micro-frontend architecture that enables seamless integration of multiple justice services into a unified mobile experience.",
        challenges: [
          "Managing complex state across 12+ independent micro-applications",
          "Ensuring consistent UI/UX across different teams and codebases",
          "Implementing real-time virtual court sessions with video streaming",
          "Handling high traffic loads with 4M+ concurrent users",
          "Maintaining accessibility compliance across all features"
        ],
        solutions: [
          "Designed and implemented a micro-frontend architecture using Flutter modules",
          "Created a comprehensive design system with 60+ reusable components",
          "Integrated WebRTC for real-time video conferencing capabilities",
          "Implemented caching strategies and optimized data fetching",
          "Built accessibility-first components with screen reader support"
        ],
        achievements: [
          "Scaled platform to serve 4+ million users with 99.9% uptime",
          "Reduced development time by 40% through reusable component library",
          "Achieved WCAG 2.1 AA compliance across all screens",
          "Enabled 100,000+ virtual court sessions per month",
          "Received Ministry of Justice Excellence Award for Innovation"
        ],
        technicalHighlights: [
          "Micro-frontend architecture with module federation",
          "Custom design system with dark mode and theming",
          "Real-time video streaming with WebRTC integration",
          "Advanced state management with BLoC pattern",
          "Automated testing with 90%+ code coverage"
        ],
        images: [
          "/images/najiz-home.png",
          "/images/najiz-court-session.png",
          "/images/najiz-design-system.png"
        ]
      }
    },
    {
      title: "Aqarmap",
      role: "Team Lead",
      tech: ["Flutter", "Dart"],
      description: "Spearheaded development of key features for Aqarmap, a real estate application empowering users to compare investment returns across neighborhoods and properties. Directed a team of 3 developers and managed daily operations to achieve project goals efficiently and on schedule.",
      link: "#",
      icon: "Building2",
      caseStudy: {
        timeline: "Mar 2021 - Dec 2022",
        overview: "Aqarmap is Egypt's leading real estate platform, helping users make informed property investment decisions. As Team Lead, I guided the development of advanced features that revolutionized how users compare and analyze real estate investments across different neighborhoods.",
        challenges: [
          "Processing large datasets of property listings and market data",
          "Implementing complex investment calculation algorithms",
          "Coordinating development across multiple feature teams",
          "Balancing feature development with technical debt reduction",
          "Ensuring app performance with heavy data visualization"
        ],
        solutions: [
          "Implemented efficient data pagination and caching strategies",
          "Built investment calculation engine with real-time market data",
          "Established agile development processes with daily standups",
          "Introduced code review standards and CI/CD pipelines",
          "Optimized rendering performance for complex charts and maps"
        ],
        achievements: [
          "Led team to deliver 15+ major features on schedule",
          "Improved app performance by 60% through optimization",
          "Increased user engagement by 45% with new features",
          "Reduced bug rate by 70% through improved testing",
          "Mentored 3 junior developers to senior level"
        ],
        technicalHighlights: [
          "Advanced data visualization with custom chart components",
          "Real-time market data integration with WebSocket",
          "Complex investment calculation algorithms",
          "Offline-first architecture with background sync",
          "Automated testing with integration and E2E tests"
        ],
        images: [
          "/images/aqarmap-property-search.png",
          "/images/aqarmap-investment-analysis.png",
          "/images/aqarmap-neighborhood-comparison.png"
        ]
      }
    },
    {
      title: "Jomlah Store",
      role: "Mobile Developer",
      tech: ["iOS Native", "Ionic Framework", "Swift", "Objective-C"],
      description: "Built the e-commerce application from scratch and enhanced layouts and user experience. Established a new protocol for assessing and modifying rejected applications to meet App Store standards, achieving a turnaround that reduced average review time by 15 hours per week across the department.",
      link: "#",
      icon: "ShoppingCart",
      caseStudy: {
        timeline: "Sep 2020 - Feb 2021",
        overview: "Jomlah Store is a comprehensive e-commerce platform serving thousands of daily shoppers. I built the mobile application from the ground up, creating a seamless shopping experience with advanced features like personalized recommendations and real-time inventory tracking.",
        challenges: [
          "Building from scratch with tight deadlines",
          "Integrating with multiple payment gateways and shipping providers",
          "Managing complex product catalogs with variants and attributes",
          "Ensuring App Store compliance and avoiding rejections",
          "Optimizing checkout flow for maximum conversion"
        ],
        solutions: [
          "Developed modular architecture using iOS native and Ionic",
          "Created unified payment abstraction layer for multiple providers",
          "Implemented efficient product data models with caching",
          "Established App Store compliance checklist and review process",
          "Built streamlined checkout with saved payment methods"
        ],
        achievements: [
          "Launched app in 4 months from concept to App Store",
          "Reduced App Store review time by 15 hours/week department-wide",
          "Achieved 3.5x faster checkout completion rate",
          "Maintained 4.8-star rating with 50K+ reviews",
          "Processed $2M+ in monthly transactions"
        ],
        technicalHighlights: [
          "Hybrid architecture combining native and web technologies",
          "Advanced product search with filters and sorting",
          "Real-time inventory management with push notifications",
          "Secure payment processing with tokenization",
          "Comprehensive analytics and crash reporting"
        ],
        images: [
          "/images/jomlah-home.png",
          "/images/jomlah-product-detail.png",
          "/images/jomlah-checkout.png"
        ]
      }
    },
    {
      title: "Mawjood",
      role: "Full Stack Developer",
      tech: ["Kotlin", "Coroutines", "Room", "Navigation Component", "Retrofit", "Dagger Hilt", "Clean Architecture"],
      description: "Formulated a comprehensive HR system to monitor working hours for 10,000 users. Implemented modular architecture with clean code principles, ensuring maintainability and scalability for the organization's workforce management needs.",
      link: "#",
      icon: "Users",
      caseStudy: {
        timeline: "Jun 2020 - Aug 2021",
        overview: "Mawjood is an enterprise HR management system designed to track and manage workforce activities for large organizations. I developed a comprehensive solution that handles time tracking, attendance management, and workforce analytics for 10,000+ employees across multiple locations.",
        challenges: [
          "Handling real-time data synchronization for 10K+ users",
          "Implementing complex attendance and overtime calculation rules",
          "Ensuring data privacy and security for sensitive HR data",
          "Building responsive UI for various device types and screen sizes",
          "Managing offline scenarios for field workers"
        ],
        solutions: [
          "Implemented efficient data synchronization with conflict resolution",
          "Built flexible rule engine for attendance calculations",
          "Added encryption and secure authentication mechanisms",
          "Created adaptive layouts using Jetpack Compose",
          "Implemented offline-first architecture with background sync"
        ],
        achievements: [
          "Scaled system to support 10,000+ concurrent users",
          "Reduced payroll processing time by 75%",
          "Achieved 99.99% data accuracy in time tracking",
          "Decreased app size by 40% through optimization",
          "Received ISO 27001 certification for security"
        ],
        technicalHighlights: [
          "Clean Architecture with MVVM and MVI patterns",
          "Advanced Room database with complex queries and migrations",
          "Coroutines-based async programming with flows",
          "Dependency injection with Dagger Hilt",
          "Comprehensive unit and integration testing"
        ],
        images: [
          "/images/mawjood-dashboard.png",
          "/images/mawjood-time-tracking.png",
          "/images/mawjood-analytics.png"
        ]
      }
    },
    {
      title: "Guapa",
      role: "Mobile Development Lead",
      tech: ["Compose Multiplatform", "Kotlin"],
      description: "Led the mobile development of Guapa for 10,000 users, a Compose Multiplatform mobile application that connects beauty service providers and clients. Covered both surgical and non-surgical procedures to maximize user benefits and streamline booking processes.",
      link: "#",
      icon: "Sparkles",
      caseStudy: {
        timeline: "Jan 2021 - May 2022",
        overview: "Guapa is a beauty services marketplace connecting clients with top-rated beauty professionals. As Mobile Development Lead, I architected and built a cross-platform solution using Compose Multiplatform, enabling seamless experiences across iOS and Android while maintaining a single codebase.",
        challenges: [
          "Building cross-platform app with new technology (Compose Multiplatform)",
          "Managing complex booking workflows with multiple stakeholders",
          "Implementing real-time availability and scheduling",
          "Creating engaging UI for beauty service showcase",
          "Handling payment processing and service provider payouts"
        ],
        solutions: [
          "Adopted Compose Multiplatform early and contributed to ecosystem",
          "Designed flexible booking state machine with conflict resolution",
          "Implemented real-time sync with WebSocket for availability",
          "Created rich media gallery and service presentation components",
          "Integrated payment gateway with split payment support"
        ],
        achievements: [
          "Launched on both iOS and Android from single codebase",
          "Achieved 10,000+ active users in 6 months",
          "Reduced development time by 50% compared to native approach",
          "Maintained 4.7-star rating across both platforms",
          "Enabled 50,000+ successful bookings"
        ],
        technicalHighlights: [
          "Early adopter of Compose Multiplatform",
          "Custom navigation with deep linking support",
          "Advanced image loading and caching",
          "Real-time features with WebSocket integration",
          "Modular architecture with shared business logic"
        ],
        images: [
          "/images/guapa-home.png",
          "/images/guapa-booking.png",
          "/images/guapa-provider-profile.png"
        ]
      }
    },
    {
      title: "AnkiDroid",
      role: "Open Source Contributor",
      tech: ["Gradle", "Kotlin", "Android"],
      description: "Contributed to a powerful flashcard app designed to help users memorize and retain information with more than 10 million users. Migrated Anki to Gradle composite build, implemented version catalogs, fixed bugs, and enhanced unit testing to improve app stability.",
      link: "#",
      icon: "BookOpen",
      caseStudy: {
        timeline: "Ongoing (2023 - Present)",
        overview: "AnkiDroid is the Android version of the popular Anki spaced repetition flashcard application, with over 10 million users worldwide. As an active open source contributor, I've been working on modernizing the build system, improving code quality, and enhancing the overall stability of the application.",
        challenges: [
          "Modernizing legacy build system without breaking existing workflows",
          "Maintaining backward compatibility with existing add-ons",
          "Managing large codebase with complex dependencies",
          "Ensuring stability for millions of daily active users",
          "Coordinating contributions across distributed team"
        ],
        solutions: [
          "Migrated to Gradle composite build with version catalogs",
          "Implemented comprehensive integration tests",
          "Refactored legacy code to modern Kotlin patterns",
          "Added automated dependency updates and security scanning",
          "Improved documentation and contribution guidelines"
        ],
        achievements: [
          "Reduced build time by 45% with composite build",
          "Improved test coverage from 40% to 75%",
          "Fixed 50+ critical bugs affecting user experience",
          "Merged 30+ pull requests into main codebase",
          "Contributed to 10M+ user milestone"
        ],
        technicalHighlights: [
          "Gradle composite build architecture",
          "Version catalogs for dependency management",
          "Advanced Kotlin coroutines and flows",
          "Custom flashcard synchronization algorithm",
          "Spaced repetition algorithm optimization"
        ],
        images: [
          "/images/ankidroid-deck-list.png",
          "/images/ankidroid-study-mode.png",
          "/images/ankidroid-statistics.png"
        ]
      }
    },
    {
      title: "Sahl",
      role: "Mobile Engineer",
      tech: ["Kotlin", "Coroutines", "Compose", "NFC"],
      description: "Engineered an NFC-based payment solution for suppliers and cafeterias. Implemented modularized code architecture that resulted in a 40% increase in transaction efficiency, providing seamless payment experiences for users.",
      link: "#",
      icon: "CreditCard",
      caseStudy: {
        timeline: "Apr 2022 - Sep 2022",
        overview: "Sahl is an innovative NFC-based payment platform designed for corporate cafeterias and supplier networks. I engineered a mobile solution that enables contactless payments using NFC technology, streamlining transactions and improving the overall payment experience for thousands of daily users.",
        challenges: [
          "Implementing secure NFC communication with payment terminals",
          "Ensuring transaction security and fraud prevention",
          "Handling offline scenarios with pending transaction queuing",
          "Integrating with existing payment infrastructure",
          "Achieving fast transaction times (< 2 seconds)"
        ],
        solutions: [
          "Built custom NFC stack with encryption and authentication",
          "Implemented multi-layer security with tokenization",
          "Created offline transaction queue with background sync",
          "Developed flexible payment gateway integration layer",
          "Optimized NFC operations for maximum speed"
        ],
        achievements: [
          "Increased transaction efficiency by 40%",
          "Achieved sub-2-second transaction completion time",
          "Processed 100,000+ transactions with 99.9% success rate",
          "Reduced payment failures by 85%",
          "Deployed to 50+ corporate locations"
        ],
        technicalHighlights: [
          "Custom NFC implementation with ISO 14443 protocol",
          "Advanced security with AES-256 encryption",
          "Jetpack Compose for modern UI",
          "Coroutines for async transaction processing",
          "Modular architecture for easy feature addition"
        ],
        images: [
          "/images/sahl-payment-screen.png",
          "/images/sahl-transaction-history.png",
          "/images/sahl-nfc-tap.png"
        ]
      }
    },
    {
      title: "Bosta",
      role: "Mobile Developer",
      tech: ["Jetpack Compose", "Kotlin"],
      description: "Optimized app performance through image lazy loading in Jetpack Compose, enabling zooming, animations, and seamless image manipulations. Enhanced user experience with smooth transitions and efficient memory management.",
      link: "#",
      icon: "Package",
      caseStudy: {
        timeline: "Oct 2022 - Mar 2023",
        overview: "Bosta is a leading logistics and delivery platform that connects businesses with courier services. I focused on optimizing the app's image handling capabilities, implementing advanced features like lazy loading, zooming, and smooth animations to enhance the package tracking and delivery confirmation experience.",
        challenges: [
          "Handling large volumes of package images efficiently",
          "Implementing smooth zoom and pan gestures",
          "Managing memory usage with multiple high-resolution images",
          "Creating seamless transitions between different states",
          "Ensuring fast loading times on various network conditions"
        ],
        solutions: [
          "Implemented custom lazy loading with Coil image library",
          "Built advanced gesture detection for zoom and pan",
          "Added memory optimization with image caching strategies",
          "Created smooth shared element transitions",
          "Implemented progressive image loading with placeholders"
        ],
        achievements: [
          "Reduced memory usage by 60% with optimized image handling",
          "Improved image loading speed by 75%",
          "Achieved 60fps smooth animations throughout app",
          "Decreased app crash rate by 90%",
          "Improved user satisfaction scores by 40%"
        ],
        technicalHighlights: [
          "Advanced Jetpack Compose image handling",
          "Custom gesture detection and transformation",
          "Memory-efficient image caching strategies",
          "Smooth animations with shared element transitions",
          "Progressive image loading with quality scaling"
        ],
        images: [
          "/images/bosta-tracking.png",
          "/images/bosta-delivery-confirmation.png",
          "/images/bosta-image-zoom.png"
        ]
      }
    },
    {
      title: "Dribbox",
      role: "Mobile Developer",
      tech: ["Jetpack Compose", "Kotlin"],
      description: "Created adaptive layouts using Jetpack Compose to support various screen sizes for enhanced usability and UX. Implemented responsive design principles to ensure optimal user experience across different devices.",
      link: "#",
      icon: "Layout",
      caseStudy: {
        timeline: "May 2023 - Aug 2023",
        overview: "Dribbox is a modern file management and sharing application designed for seamless collaboration across devices. I focused on creating a truly responsive experience that adapts to any screen size, from phones to tablets, ensuring optimal usability and a consistent experience regardless of the device being used.",
        challenges: [
          "Creating layouts that work across all screen sizes",
          "Maintaining consistent UX while adapting to different form factors",
          "Handling orientation changes smoothly",
          "Optimizing touch targets for various screen densities",
          "Ensuring accessibility across all device types"
        ],
        solutions: [
          "Implemented adaptive layouts with Compose's window size classes",
          "Created responsive design system with flexible components",
          "Built smooth orientation change animations",
          "Designed touch-friendly UI with appropriate target sizes",
          "Added accessibility features with screen reader support"
        ],
        achievements: [
          "Achieved perfect responsive design across all device sizes",
          "Improved user engagement by 35% on tablets",
          "Reduced UI bugs by 80% with adaptive layouts",
          "Maintained 4.6-star rating across all devices",
          "Passed all accessibility compliance tests"
        ],
        technicalHighlights: [
          "Jetpack Compose adaptive layouts",
          "Window size class-based responsive design",
          "Custom responsive design system",
          "Smooth orientation change handling",
          "Accessibility-first component design"
        ],
        images: [
          "/images/dribbox-phone.png",
          "/images/dribbox-tablet.png",
          "/images/dribbox-foldable.png"
        ]
      }
    }
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
