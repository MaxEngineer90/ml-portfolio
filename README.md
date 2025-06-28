# Portfolio Website

[![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3.1-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-11.9.1-FFCA28?style=flat-square&logo=firebase)](https://firebase.google.com/)

A modern portfolio website showcasing projects and skills, built with Next.js, React, and modern web technologies.

## ✨ Features

- **🎨 Modern Design**: Responsive UI with Tailwind CSS and Radix UI components
- **📊 Data Visualization**: Interactive charts and diagrams with Recharts
- **🔥 Firebase Integration**: Backend services and hosting
- **📱 Responsive**: Optimized for all devices and screen sizes
- **⚡ Performance**: Server-Side Rendering with Next.js for optimal loading times
- **🎯 TypeScript**: Full typing for better developer experience
- **🎪 Interactive Elements**: Animations and transitions for better UX
- **📋 Contact Forms**: Integrated forms with validation

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS, Radix UI, Lucide Icons
- **Backend**: Firebase
- **Forms**: React Hook Form, Zod Validation
- **Charts**: Recharts
- **Development**: ESLint, TypeScript, Patch Package

## 📋 Prerequisites

Make sure you have the following software installed:

- Node.js (>= 18.0.0)
- npm (>= 9.0.0) or yarn
- Git

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/maxengineer/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` and add your configuration:
   ```env
   FIREBASE_API_KEY=your_firebase_api_key
   FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   FIREBASE_PROJECT_ID=your_project_id
   # Additional configurations...
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at [http://localhost:9002](http://localhost:9002).

## 🎯 Usage

### Development Mode
```bash
npm run dev          # Starts the development server on port 9002
```

### Build for Production
```bash
npm run build        # Creates the static production build in the `out/` folder
```

## 🚀 Deployment to GitHub Pages

This project is configured to automatically deploy to GitHub Pages when you push changes to the `main` branch.

To enable this, you need to configure your repository settings once:

1.  Navigate to your GitHub repository.
2.  Go to **Settings** > **Pages**.
3.  Under the **Build and deployment** section, for the **Source**, select **GitHub Actions**.

Now, every time you push to `main`, the deployment workflow will run and your site will be updated automatically.

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── components/      # React components
│   ├── pages/          # Next.js pages
│   ├── styles/         # Styling files
│   ├── data/           # Static data (projects, skills)
│   └── utils/          # Utility functions
├── public/             # Static files (images, icons)
├── .env.example        # Environment variables template
├── next.config.js      # Next.js configuration
├── tailwind.config.js  # Tailwind configuration
└── tsconfig.json       # TypeScript configuration
```

## 🔧 Configuration

### Firebase Setup
1. Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/)
2. Enable the required services (Hosting, Firestore, Authentication, etc.)
3. Add your Firebase configuration to `.env.local`

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for more information.

## 👨‍💻 Author

**Max Engineer**

- GitHub: [@maxengineer](https://github.com/maxengineer)
- LinkedIn: [Max Engineer](https://linkedin.com/in/maxengineer)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the fantastic React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS library
- [Radix UI](https://www.radix-ui.com/) for accessible UI components
- [Firebase](https://firebase.google.com/) for backend services

---

⭐ Don't forget to give this project a star if you like it!
