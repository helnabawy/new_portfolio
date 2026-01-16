# New Portfolio

A modern, responsive portfolio website showcasing the work and skills of Hosam Elnabawy, a Senior Software Engineer specializing in mobile development.

## 🏗️ Project Architecture

This is a monorepo containing two projects:

### 1. Next.js Portfolio (Active)
Located in the [`portfolio/`](portfolio/) directory, this is the current active portfolio website built with modern web technologies.

**Directory Structure:**
```
portfolio/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with fonts and global providers
│   ├── page.tsx           # Main portfolio page
│   └── globals.css        # Global styles and Tailwind directives
├── components/
│   ├── layout/            # Layout components
│   │   └── Navbar.tsx     # Navigation bar with smooth scrolling
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx       # Hero section with call-to-action
│   │   ├── ValueProp.tsx  # Value propositions
│   │   ├── About.tsx      # About section
│   │   ├── Skills.tsx     # Skills grid
│   │   ├── Projects.tsx   # Projects showcase with case studies
│   │   ├── Contact.tsx    # Contact section
│   │   └── Footer.tsx     # Footer component
│   └── ui/                # Reusable UI components
│       ├── Button.tsx     # Custom button component
│       ├── Card.tsx       # Card component
│       ├── Section.tsx    # Section wrapper
│       ├── CustomCursor.tsx  # Custom cursor effect
│       ├── Particles.tsx  # Animated particle background
│       └── Dialog.tsx     # Modal dialog component
├── data/
│   └── portfolio.ts       # Portfolio data (hero, skills, projects, etc.)
├── lib/
│   └── utils.ts           # Utility functions (cn for class merging)
├── public/                # Static assets
├── next.config.ts         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

**Component Architecture:**
- **Layout Components**: Structural components that wrap page content (Navbar)
- **Section Components**: Self-contained page sections that can be composed (Hero, About, Skills, Projects, Contact)
- **UI Components**: Reusable, presentational components (Button, Card, Dialog)
- **Data Layer**: Centralized data management in [`portfolio/data/portfolio.ts`](portfolio/data/portfolio.ts)

### 2. Angular Portfolio (Legacy)
Located at the root level, this is an older version of the portfolio built with Angular 17.

## 🛠️ Tech Stack

### Next.js Portfolio

**Core Framework:**
- **[Next.js 16.1.1](https://nextjs.org)** - React framework with App Router
- **[React 19.2.3](https://react.dev)** - UI library
- **[TypeScript 5](https://www.typescriptlang.org)** - Type-safe JavaScript

**Styling:**
- **[Tailwind CSS 4](https://tailwindcss.com)** - Utility-first CSS framework
- **[PostCSS](https://postcss.org)** - CSS transformation tool

**UI & Animations:**
- **[Framer Motion 12.23.26](https://www.framer.com/motion)** - Production-ready animation library
- **[Lucide React 0.562.0](https://lucide.dev)** - Beautiful icon library

**Utilities:**
- **[clsx](https://github.com/lukeed/clsx)** - Conditional className utility
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Merge Tailwind classes intelligently

**Development Tools:**
- **[ESLint](https://eslint.org)** - Code linting
- **[Babel React Compiler](https://react.dev/learn/react-compiler)** - React optimization compiler

### Angular Portfolio (Legacy)

- **[Angular 17.3.17](https://angular.io)** - Web application framework
- **[TypeScript 5.4.2](https://www.typescriptlang.org)** - Type-safe JavaScript
- **[Tailwind CSS 3.4.18](https://tailwindcss.com)** - Utility-first CSS framework
- **[RxJS 7.8.0](https://rxjs.dev)** - Reactive programming library

## 📦 Installation

### Prerequisites
- **Node.js** 18.x or higher
- **npm**, **yarn**, **pnpm**, or **bun** package manager

### Next.js Portfolio Setup

1. Navigate to the portfolio directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Angular Portfolio Setup (Legacy)

1. Install dependencies from the root directory:
```bash
npm install
```

2. Run the development server:
```bash
npm start
# or
ng serve
```

3. Navigate to [http://localhost:4200](http://localhost:4200)

## 🚀 Build & Deployment

### Next.js Portfolio

**Production Build:**
```bash
cd portfolio
npm run build
```

**Start Production Server:**
```bash
npm start
```

**Linting:**
```bash
npm run lint
```

**Deployment:**
- The easiest way to deploy is using [Vercel](https://vercel.com)
- Connect your repository and Vercel will automatically build and deploy
- Alternatively, deploy to any platform that supports Next.js

### Angular Portfolio (Legacy)

**Production Build:**
```bash
npm run build
# or
ng build
```

**GitHub Pages Deployment:**
```bash
npm run github-build
npm run github-deploy
```

## ✨ Features

### Next.js Portfolio

- **🎨 Modern Design**: Dark-themed UI with zinc color palette
- **✨ Smooth Animations**: Framer Motion powered animations and transitions
- **🖱️ Custom Cursor**: Interactive custom cursor effect
- **✨ Particle Effects**: Animated particle background
- **📱 Fully Responsive**: Mobile-first responsive design
- **🔤 Typography**: Inter font family from Google Fonts
- **🎯 Component-Based**: Modular, reusable component architecture
- **📊 Case Studies**: Detailed project case studies with achievements
- **🔗 Smooth Scrolling**: Smooth scroll behavior throughout the site
- **♿ Accessible**: Accessibility-first design approach

### Content Sections

1. **Hero**: Introduction with name, title, and call-to-action buttons
2. **Value Propositions**: Key value propositions with icons
3. **About**: Personal background and expertise
4. **Skills**: Comprehensive skills grid with technologies
5. **Projects**: Project showcase with detailed case studies
6. **Contact**: Contact information and social links
7. **Footer**: Copyright and additional links

## 📝 Configuration Files

### Next.js Configuration
- [`next.config.ts`](portfolio/next.config.ts) - Next.js configuration
- [`tailwind.config.js`](portfolio/tailwind.config.js) - Tailwind CSS configuration
- [`tsconfig.json`](portfolio/tsconfig.json) - TypeScript configuration
- [`postcss.config.mjs`](portfolio/postcss.config.mjs) - PostCSS configuration

### Angular Configuration
- [`angular.json`](angular.json) - Angular CLI configuration
- [`tsconfig.json`](tsconfig.json) - TypeScript configuration
- [`tailwind.config.js`](tailwind.config.js) - Tailwind CSS configuration

## 🤝 Contributing

This is a personal portfolio project. For suggestions or improvements, feel free to open an issue or contact the author.

## 📄 License

This project is private and proprietary.

## 👤 Author

**Hosam Elnabawy**
- Senior Software Engineer
- Email: [helnabawy@icloud.com](mailto:helnabawy@icloud.com)
- GitHub: [@helnabawy](https://github.com/helnabawy)
- LinkedIn: [hosam1696](https://www.linkedin.com/in/hosam1696)

## 🔗 Links

- **Live Demo**: [Portfolio Website](https://helnabawy.github.io/new_portfolio/)
- **GitHub Repository**: [github.com/helnabawy/new_portfolio](https://github.com/helnabawy/new_portfolio)

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
