# Fhenix Idea Board

A beautiful, modern web application showcasing blockchain project ideas powered by Fhenix FHE (Fully Homomorphic Encryption) technology. This MVP features 30 curated ideas across three categories: VibeCoded (built examples), To Build (greenfield projects), and Integrations (add privacy to existing products).

## 🚀 Features

- **Featured Hero Section** - Spotlight on the most exciting project idea
- **30 Curated Ideas** - 10 ideas per category (VibeCoded, To Build, Integration)
- **Interactive Cards** - Hover effects, difficulty badges, tech stack tags
- **Detailed View Modals** - Complete information about each idea including FHE use cases
- **Submit Build Modal** - Non-functional UI for future submission functionality
- **Fully Responsive** - Mobile-first design with hamburger menu
- **Smooth Animations** - Hover effects, transitions, and smooth scrolling
- **Modern Design** - Purple/blue gradient theme with shadcn/ui components

## 🛠️ Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Font**: [Inter](https://fonts.google.com/specimen/Inter)

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)
- Git

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd fhenix-idea-board
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
fhenix-idea-board/
├── app/
│   ├── layout.tsx          # Root layout with Navbar and Footer
│   ├── page.tsx            # Homepage with all sections
│   └── globals.css         # Global styles and Tailwind config
├── components/
│   ├── Navbar.tsx          # Navigation bar with mobile menu
│   ├── Footer.tsx          # Footer with social links
│   ├── IdeaCard.tsx        # Reusable idea card component
│   ├── ViewDetailsModal.tsx # Modal for viewing idea details
│   ├── SubmitBuildModal.tsx # Modal for build submission (UI only)
│   └── ui/                 # shadcn/ui components
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── input.tsx
│       ├── label.tsx
│       └── textarea.tsx
├── data/
│   └── ideas.ts            # All 30 ideas with TypeScript interfaces
├── public/                 # Static assets
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## 📊 Data Structure

Ideas are defined in `data/ideas.ts` with the following TypeScript interface:

```typescript
interface Idea {
  id: string;
  type: 'vibecode' | 'to-build' | 'integration';
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime?: string;
  fheUseCase: string;
  techStack?: string[];
  productCategory?: string;  // for integrations only
  complexity?: string;        // for integrations only
}
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Purple to Blue gradient (#9333EA → #3B82F6)
- **VibeCoded Section**: Purple accent
- **To Build Section**: Blue accent
- **Integration Section**: Teal/Green accent

### Components
- **Cards**: Hover elevation with smooth transitions
- **Badges**: Color-coded difficulty (green/yellow/red)
- **Modals**: Smooth fade-in animations with backdrop blur
- **Navigation**: Fixed top navbar with mobile hamburger menu

### Responsive Breakpoints
- **Mobile**: 1 column grid
- **Tablet (md)**: 2 column grid
- **Desktop (lg)**: 3 column grid

## 🔗 External Links

The site includes links to official Fhenix resources:

- **Website**: https://www.fhenix.io/
- **Documentation**: https://cofhe-docs.fhenix.zone/
- **Twitter**: https://x.com/fhenix
- **Discord**: https://discord.com/invite/FuVgxrvJMY
- **Telegram**: https://t.me/+OEO4CItQYh8xYzNh

## 🚧 Future Enhancements

This is an MVP without the following features (saved for future iterations):

- [ ] Backend API
- [ ] Database integration
- [ ] Admin panel for managing ideas
- [ ] Authentication system
- [ ] Actual build submission functionality
- [ ] User accounts and profiles
- [ ] Filtering by difficulty
- [ ] Search functionality
- [ ] Tagging system

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Key Components Breakdown

### IdeaCard
- Displays idea summary with truncated description
- Shows difficulty badge and estimated time
- Tech stack tags (shows first 4, then "+X more")
- "View Details" and "Submit Build" buttons
- Hover effect with elevation and border color change

### ViewDetailsModal
- Full idea description
- Highlighted FHE use case section
- Complete tech stack
- Product category and complexity (for integrations)
- "Start Building with Fhenix" CTA button

### SubmitBuildModal
- Form fields: Builder Name, Product Name, Twitter URL, Telegram ID, Notes
- "Coming Soon!" message on submit (no actual submission)
- Form validation (required fields)

## 🌟 Credits

Built with ❤️ for the Fhenix community

## 📄 License

This project is open source and available under the MIT License.
